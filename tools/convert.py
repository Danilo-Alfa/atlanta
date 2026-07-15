# -*- coding: utf-8 -*-
"""Conversor fiel HTML(SingleFile) -> projeto React/Vite.
Preserva estrutura, CSS, imagens, whitespace (texto via expressao {"..."}) e
estilos inline exatos (via rawStyle/cssText, mantendo !important)."""
import re, os, json, base64, hashlib
from html.parser import HTMLParser
from urllib.parse import unquote
from bs4 import BeautifulSoup

SRC = "/Users/danilo.henrique/Library/Containers/net.whatsapp.WhatsApp/Data/tmp/documents/37DD4CD5-7074-4DA8-AA01-16E0143B4369/Atlanta Materiais para Construção (15_07_2026 14：11：49).html"
ROOT = "/Users/danilo.henrique/Library/Containers/net.whatsapp.WhatsApp/Data/tmp/documents/37DD4CD5-7074-4DA8-AA01-16E0143B4369/atlanta-react"

full = open(SRC, encoding="utf-8").read()

# ---------------------------------------------------------------- CSS + favicon
soup = BeautifulSoup(full, "lxml")
# srcdoc completo do iframe do video (o HTMLParser o trunca; lxml extrai correto)
_iframe_sd = soup.find("iframe", srcdoc=True)
VIDEO_SRCDOC = {"val": _iframe_sd["srcdoc"] if _iframe_sd else ""}
print("srcdoc from lxml len:", len(VIDEO_SRCDOC["val"]))
css_blocks = [s.get_text() for s in soup.find_all("style")]
os.makedirs(os.path.join(ROOT, "src/styles"), exist_ok=True)
with open(os.path.join(ROOT, "src/styles/site.css"), "w", encoding="utf-8") as f:
    for i, css in enumerate(css_blocks):
        f.write(f"/* ==== style block {i} ==== */\n")
        f.write(css)
        f.write("\n\n")
print("CSS blocks written:", len(css_blocks))

# favicon
fav = soup.find("link", rel=lambda v: v and "icon" in " ".join(v))
if fav and (fav.get("href") or "").startswith("data:"):
    href = fav["href"]
    b64 = href.split(",", 1)[1]
    with open(os.path.join(ROOT, "public/favicon.ico"), "wb") as f:
        f.write(base64.b64decode(b64))
    print("favicon written")

# ---------------------------------------------------------------- body raw
bi = re.search(r'<body class=user-not-is-logged>', full).end()
body_raw = full[bi:]

# IMPORTANTE: substituir o srcdoc do iframe do video ANTES de remover <style>,
# pois a pagina do YouTube dentro do srcdoc contem <style> proprios.
# -> sentinela; o valor real vem do lxml (VIDEO_SRCDOC).
_si = body_raw.find('srcdoc="')
if _si != -1:
    _vs = _si + len('srcdoc="')
    _ve = body_raw.index('"', _vs)   # 1o " literal = fechamento (internos sao &quot;)
    body_raw = body_raw[:_si] + 'srcdoc="__VIDEO_SRCDOC__"' + body_raw[_ve + 1:]
    print("srcdoc replaced by sentinel; raw value chars:", _ve - _vs)

# remove <style> blocks from body (already captured)
body_raw = re.sub(r'<style\b[^>]*>.*?</style>', '', body_raw, flags=re.S)

# extract fast-shopping-template inner (contem <template> aninhado -> scanner balanceado)
FAST_INNER = {"html": ""}
open_re = re.compile(r'<template\b[^>]*id="?fast-shopping-template"?[^>]*>')
mo = open_re.search(body_raw)
if mo:
    inner_start = mo.end()
    depth = 1
    pos = inner_start
    tag_re = re.compile(r'<(/?)template\b', re.I)
    while depth > 0:
        m = tag_re.search(body_raw, pos)
        if not m:
            break
        if m.group(1) == '/':
            depth -= 1
            close_start = m.start()
            close_end = body_raw.index('>', m.end()) + 1
            pos = close_end
        else:
            depth += 1
            pos = m.end()
    FAST_INNER["html"] = body_raw[inner_start:close_start]
    body_raw = (body_raw[:mo.start()]
                + '<template id="fast-shopping-template" data-fastshop="1"></template>'
                + body_raw[close_end:])
print("fast template inner len:", len(FAST_INNER["html"]))

# ---------------------------------------------------------------- assets
ASSET_DIR = os.path.join(ROOT, "public/assets")
os.makedirs(ASSET_DIR, exist_ok=True)
_asset_cache = {}

def externalize_data_uri(value):
    """Grava um data: URI em public/assets e devolve o caminho /assets/..."""
    h = hashlib.md5(value.encode("utf-8")).hexdigest()[:12]
    if h in _asset_cache:
        return _asset_cache[h]
    m = re.match(r'data:([^;,]+)(;base64)?,(.*)$', value, flags=re.S)
    if not m:
        return value
    mime, is_b64, data = m.group(1), m.group(2), m.group(3)
    ext = {
        "image/webp": "webp", "image/png": "png", "image/jpeg": "jpg",
        "image/gif": "gif", "image/svg+xml": "svg", "image/x-icon": "ico",
        "image/vnd.microsoft.icon": "ico",
    }.get(mime, mime.split("/")[-1].split("+")[0])
    fname = f"img-{h}.{ext}"
    path = os.path.join(ASSET_DIR, fname)
    if is_b64:
        with open(path, "wb") as f:
            f.write(base64.b64decode(data))
    else:
        with open(path, "w", encoding="utf-8") as f:
            f.write(unquote(data))
    ref = "/assets/" + fname
    _asset_cache[h] = ref
    return ref

# ---------------------------------------------------------------- parse tree
VOID = {'area','base','br','col','embed','hr','img','input','link','meta','param','source','track','wbr'}

class Node:
    __slots__ = ('kind','tag','attrs','children','text','comp')
    def __init__(self, kind, tag=None, attrs=None, children=None, text=None):
        self.kind = kind; self.tag = tag; self.attrs = attrs or []
        self.children = children if children is not None else []
        self.text = text; self.comp = None

class TB(HTMLParser):
    def __init__(self):
        super().__init__(convert_charrefs=True)
        self.root = Node('tag', '#root')
        self.stack = [self.root]
    def handle_starttag(self, tag, attrs):
        n = Node('tag', tag, attrs)
        self.stack[-1].children.append(n)
        if tag not in VOID:
            self.stack.append(n)
    def handle_startendtag(self, tag, attrs):
        self.stack[-1].children.append(Node('tag', tag, attrs))
    def handle_endtag(self, tag):
        for i in range(len(self.stack)-1, 0, -1):
            if self.stack[i].tag == tag:
                del self.stack[i:]
                return
    def handle_data(self, data):
        self.stack[-1].children.append(Node('text', text=data))

tb = TB()
tb.feed(body_raw)
root = tb.root

# merge adjacent text nodes
def merge_text(n):
    if n.kind != 'tag':
        return
    out = []
    for c in n.children:
        if c.kind == 'text' and out and out[-1].kind == 'text':
            out[-1].text += c.text
        else:
            out.append(c)
    n.children = out
    for c in out:
        merge_text(c)
merge_text(root)

def elems(n):
    return [c for c in n.children if c.kind == 'tag']

# ---------------------------------------------------------------- attribute mapping
ATTR_MAP = {
    'class': 'className', 'for': 'htmlFor', 'tabindex': 'tabIndex',
    'viewbox': 'viewBox', 'xlink:href': 'xlinkHref', 'xmlns:xlink': 'xmlnsXlink',
    'maxlength': 'maxLength', 'minlength': 'minLength', 'readonly': 'readOnly',
    'colspan': 'colSpan', 'rowspan': 'rowSpan', 'cellpadding': 'cellPadding',
    'cellspacing': 'cellSpacing', 'frameborder': 'frameBorder',
    'allowfullscreen': 'allowFullScreen', 'autocomplete': 'autoComplete',
    'autofocus': 'autoFocus', 'crossorigin': 'crossOrigin', 'novalidate': 'noValidate',
    'enctype': 'encType', 'usemap': 'useMap', 'datetime': 'dateTime',
    'contenteditable': 'contentEditable', 'spellcheck': 'spellCheck',
    'srcset': 'srcSet', 'marginwidth': 'marginWidth', 'marginheight': 'marginHeight',
    'accept-charset': 'acceptCharset', 'maxheight': 'maxHeight',
    'preserveaspectratio': 'preserveAspectRatio', 'srcdoc': 'srcDoc',
    'autoplay': 'autoPlay', 'playsinline': 'playsInline', 'nomodule': 'noModule',
    'formaction': 'formAction', 'referrerpolicy': 'referrerPolicy',
}
DROP_COLON_PREFIX = ('xmlns:',)  # colon attrs nao mapeados (ex.: xmlns:yt) sao removidos
SIMPLE_VAL = re.compile(r'^[^"\'{}<>&\n\r]*$')
VALID_ATTR = re.compile(r'^[A-Za-z_][A-Za-z0-9_.:-]*$')
# atributos HTML genuinamente booleanos: valueless => presente/true.
# Os demais (value, placeholder, alt...) valueless => string vazia "".
BOOLEAN_ATTRS = {
    'allowfullscreen', 'async', 'autofocus', 'autoplay', 'checked', 'controls',
    'default', 'defer', 'disabled', 'formnovalidate', 'hidden', 'inert', 'ismap',
    'itemscope', 'loop', 'multiple', 'muted', 'nomodule', 'novalidate', 'open',
    'playsinline', 'readonly', 'required', 'reversed', 'selected', 'seamless',
}

def esc_text(t):
    return json.dumps(t, ensure_ascii=False)

class Ctx:
    def __init__(self):
        self.rawStyle = False
        self.videoSrcDoc = False
        self.fastTpl = False
        self.comps = set()

def render_attrs(node, ctx):
    parts = []
    ref_style = None
    is_fast = any(k == 'data-fastshop' for k, _ in node.attrs)
    for name, value in node.attrs:
        lname = name.lower()
        if lname == 'data-fastshop':
            continue
        # descarta nomes de atributo invalidos p/ JSX (ex.: ';' solto no HTML original,
        # que os navegadores tambem ignoram)
        if lname not in ATTR_MAP and not VALID_ATTR.match(name):
            continue
        if lname == 'style':
            ref_style = value or ""
            continue
        if lname == 'srcdoc':
            ctx.videoSrcDoc = True
            parts.append('srcDoc={videoSrcDoc}')
            continue
        # colon attrs not mapped -> drop
        if ':' in lname and lname not in ATTR_MAP:
            if any(lname.startswith(p) for p in DROP_COLON_PREFIX):
                continue
            continue
        jsx_name = ATTR_MAP.get(lname, name)
        # controles de formulario: value/checked -> uncontrolled (igual ao HTML estatico)
        if node.tag in ('input', 'textarea', 'select'):
            if lname == 'value':
                jsx_name = 'defaultValue'
            elif lname == 'checked':
                jsx_name = 'defaultChecked'
        # externalize data: uris on src/href-like attrs
        if value is not None and value.startswith('data:') and lname in ('src','href','xlink:href','poster'):
            value = externalize_data_uri(value)
        if value is None:
            if lname in BOOLEAN_ATTRS:
                parts.append(jsx_name)          # booleano -> presente
            else:
                parts.append(f'{jsx_name}=""')  # HTML valueless => string vazia
        elif SIMPLE_VAL.match(value):
            parts.append(f'{jsx_name}="{value}"')
        else:
            parts.append(f'{jsx_name}={{{json.dumps(value, ensure_ascii=False)}}}')
    if ref_style is not None:
        ctx.rawStyle = True
        parts.append(f'ref={{rawStyle({json.dumps(ref_style, ensure_ascii=False)})}}')
    if is_fast:
        ctx.fastTpl = True
        parts.append('dangerouslySetInnerHTML={{ __html: fastShoppingTemplateHtml }}')
    return (" " + " ".join(parts)) if parts else ""

def serialize(node, ind, ctx, as_root=False):
    pad = "  " * ind
    if node.kind == 'text':
        if node.text == "":
            return ""
        return pad + "{" + esc_text(node.text) + "}"
    # component boundary (antes do fragment, para substituir por <Comp />)
    if node.comp and not as_root:
        ctx.comps.add(node.comp)
        return pad + f"<{node.comp} />"
    if node.kind == 'fragment':
        inner = []
        for c in node.children:
            s = serialize(c, ind + 1, ctx)
            if s.strip():
                inner.append(s)
        body = "\n".join(inner)
        return pad + "<>\n" + body + "\n" + pad + "</>"
    tag = node.tag
    attrs = render_attrs(node, ctx)
    is_fast = any(k == 'data-fastshop' for k, _ in node.attrs)
    # childless -> self-close
    real_children = [c for c in node.children if not (c.kind == 'text' and c.text == "")]
    if is_fast or not real_children:
        return pad + f"<{tag}{attrs} />"
    inner = []
    for c in node.children:
        s = serialize(c, ind + 1, ctx)
        if s.strip():
            inner.append(s)
    body = "\n".join(inner)
    return pad + f"<{tag}{attrs}>\n" + body + "\n" + pad + f"</{tag}>"

# ---------------------------------------------------------------- component map
def find_class(node, cls):
    for e in elems(node):
        for k, v in e.attrs:
            if k.lower() == 'class' and v and cls in v.split():
                return e
    return None

body_children = elems(root)

cookie = find_class(root, 'cc-window'); cookie.comp = 'CookieBanner'
cart = find_class(root, 'cart'); cart.comp = 'Cart'
overlay = find_class(root, 'overlay-shadow')
application = find_class(root, 'application'); application.comp = 'Application'

# tail elements (after application), skipping overlay-shadow already placed before app
app_index = body_children.index(application)
tail = body_children[app_index+1:]
overlay_index = body_children.index(overlay)

# application children
app_els = elems(application)
menu = find_class(application, 'menu-mobile'); menu.comp = 'MenuMobile'
msg = find_class(application, 'message-top'); msg.comp = 'MessageTop'
header = None; main = None; footer = None
for e in app_els:
    if e.tag == 'header': e.comp = 'Header'; header = e
    if e.tag == 'main': e.comp = 'Main'; main = e
    if e.tag == 'footer': e.comp = 'Footer'; footer = e

# main children mapping (by order, skipping style/removed)
main_els = elems(main)
MAIN_MAP = [
    ('banner-home', 'BannerHome'),
    ('buy-sizes', 'BuySizes'),
    ('mini-banners', 'MiniBanners'),
]
# assign by index using known structure captured earlier
main_names = {
    0: None,               # slider_parameters (inline)
    1: 'BannerHome',
    2: 'BuySizes',
    3: 'MiniBanners',
    4: 'ShowcaseDestaques',
    5: 'ShowcasePromocao',
    6: 'ShowcaseTelhas',
    7: 'Brands',
    8: 'ShowcaseMadeiras',
    9: 'ShowcaseCimento',
    10: 'ShowcaseNovidades',
    11: 'BannersShowcaseA',
    12: 'BannersShowcaseB',
    13: 'FloatingWhatsapp',
    14: 'ShowcaseRecomendados',
    15: 'VideoHome',
    16: 'Reviews',
    17: 'Instagram',
    18: 'Partners',
    19: 'BannersShowcaseC',
    20: 'BannersShowcaseD',
}
# NOTE: main_els here already excludes the two <style> blocks (removed before parse).
for idx, e in enumerate(main_els):
    nm = main_names.get(idx)
    if nm:
        e.comp = nm

# print main structure to verify indexing
print("\nmain_els count:", len(main_els))
for i, e in enumerate(main_els):
    cls = None
    for k, v in e.attrs:
        if k.lower() == 'class': cls = v
    print(" ", i, e.tag, cls, "->", e.comp)

# ---------------------------------------------------------------- emission
# Overlays fragment (elementos apos .application)
tail_nodes = body_children[app_index+1:]
overlays = Node('fragment'); overlays.children = tail_nodes; overlays.comp = 'Overlays'

# App fragment (ordem exata dos filhos do body)
app_frag = Node('fragment')
app_frag.children = [cookie, cart, overlay, application, overlays]

# reorder serialize: fragment/comp handled in serialize() already (see patched version)

# component registry: name -> (node, dir)
DIR_COMPONENTS = 'src/components'
DIR_MAIN = 'src/components/main'
registry = {}
registry['App'] = (app_frag, 'src', 'App.jsx')
for nm, node in [('CookieBanner', cookie), ('Cart', cart), ('Application', application),
                 ('MenuMobile', menu), ('MessageTop', msg), ('Header', header),
                 ('Main', main), ('Footer', footer), ('Overlays', overlays)]:
    registry[nm] = (node, DIR_COMPONENTS, nm + '.jsx')
for idx, e in enumerate(main_els):
    if e.comp:
        registry[e.comp] = (e, DIR_MAIN, e.comp + '.jsx')

# file path per comp (relative to ROOT)
comp_file = {nm: os.path.join(d, fn) for nm, (node, d, fn) in registry.items()}
comp_dir = {nm: d for nm, (node, d, fn) in registry.items()}

def rel_import(from_dir, to_relpath_from_root, drop_ext=False):
    frm = os.path.join(ROOT, from_dir)
    to = os.path.join(ROOT, to_relpath_from_root)
    rp = os.path.relpath(to, frm)
    if drop_ext:
        rp = re.sub(r'\.js$', '', rp)
    rp = rp.replace(os.sep, '/')
    if not rp.startswith('.'):
        rp = './' + rp
    return rp

os.makedirs(os.path.join(ROOT, 'src/data'), exist_ok=True)

for nm, (node, d, fn) in registry.items():
    ctx = Ctx()
    jsx = serialize(node, 2, ctx, as_root=True)
    imports = []
    if ctx.rawStyle:
        imports.append(f"import {{ rawStyle }} from '{rel_import(d, 'src/lib/rawStyle.js', True)}'")
    if ctx.videoSrcDoc:
        imports.append(f"import videoSrcDoc from '{rel_import(d, 'src/data/videoSrcDoc.js', True)}'")
    if ctx.fastTpl:
        imports.append(f"import fastShoppingTemplateHtml from '{rel_import(d, 'src/data/fastShoppingTemplateHtml.js', True)}'")
    for child in sorted(ctx.comps):
        cp = comp_file[child]
        imports.append(f"import {child} from '{rel_import(d, cp)}'")
    header_txt = "\n".join(imports)
    if header_txt:
        header_txt += "\n\n"
    out = f"{header_txt}export default function {nm}() {{\n  return (\n{jsx}\n  )\n}}\n"
    full_path = os.path.join(ROOT, d, fn)
    os.makedirs(os.path.dirname(full_path), exist_ok=True)
    with open(full_path, 'w', encoding='utf-8') as f:
        f.write(out)

# data modules
with open(os.path.join(ROOT, 'src/data/fastShoppingTemplateHtml.js'), 'w', encoding='utf-8') as f:
    f.write("// Conteudo bruto do <template id=\"fast-shopping-template\"> (Vue, inerte).\n")
    f.write("export default " + json.dumps(FAST_INNER['html'], ensure_ascii=False) + "\n")

with open(os.path.join(ROOT, 'src/data/videoSrcDoc.js'), 'w', encoding='utf-8') as f:
    f.write("// srcdoc do iframe do YouTube (pagina do player capturada pelo SingleFile).\n")
    f.write("export default " + json.dumps(VIDEO_SRCDOC['val'] or "", ensure_ascii=False) + "\n")

print("\nemitted components:", len(registry))
print("videoSrcDoc captured:", VIDEO_SRCDOC['val'] is not None, len(VIDEO_SRCDOC['val'] or ""))
print("assets written:", len(_asset_cache))
print("\nbody_children order:")
for i, e in enumerate(body_children):
    cls = next((v for k, v in e.attrs if k.lower()=='class'), None)
    idv = next((v for k, v in e.attrs if k.lower()=='id'), None)
    print("  ", i, e.tag, "id="+str(idv), "class="+str(cls))
