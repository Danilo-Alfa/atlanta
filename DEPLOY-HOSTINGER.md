# Deploy na Hostinger (plano Premium) — via Git, sem senha FTP

O fluxo de publicação deste projeto já está automatizado:

```
push na main  →  GitHub Actions (npm run build)  →  branch `deploy` (só o conteúdo de dist/)
                                                          ↓
                                    Hostinger (hPanel → GIT) puxa a branch `deploy`
                                                          ↓
                                                    public_html
```

O workflow que faz isso é o `.github/workflows/deploy.yml`. A branch `deploy`
contém apenas os arquivos estáticos prontos (HTML/CSS/JS) — exatamente o que a
hospedagem compartilhada precisa, já que o plano Premium não roda Node.js.

## Conectar a Hostinger à branch `deploy` (feito uma única vez)

Quem tiver acesso ao hPanel do site faz o seguinte:

1. Acesse o [hPanel](https://hpanel.hostinger.com) → site do cliente →
   **Avançado → GIT**.
2. Como o repositório é privado, copie a **chave SSH** que o hPanel mostra
   nessa tela e cadastre-a no GitHub em
   **Settings do repositório → Deploy keys → Add deploy key**
   (somente leitura, não precisa de escrita).
3. De volta ao hPanel, em **Criar um novo repositório**, preencha:
   - **Repositório**: `git@github.com:Danilo-Alfa/atlanta.git`
   - **Branch**: `deploy`
   - **Diretório**: deixe em branco (vai para `public_html`)
4. Clique em **Criar** — a Hostinger clona a branch e o site entra no ar.

### Publicação automática a cada atualização

Ainda na tela **Avançado → GIT** do hPanel, copie a **URL do webhook** e
cadastre-a no GitHub em **Settings do repositório → Webhooks → Add webhook**
(Payload URL = URL copiada, evento = apenas push). Assim, sempre que a branch
`deploy` for atualizada pelo Actions, a Hostinger puxa o novo build sozinha.
Sem o webhook, basta clicar em **Deploy** no hPanel quando quiser atualizar.

## Sem pedir a senha do cliente

Nenhuma credencial do cliente entra no GitHub. As opções para o passo único de
configuração são:

- O próprio cliente segue os 4 passos acima (leva ~5 minutos), ou
- O cliente compartilha acesso pelo recurso oficial da Hostinger:
  **hPanel → perfil → Compartilhar acesso à conta**, adicionando o seu e-mail
  com permissão apenas ao site. Você configura tudo sem nunca ver a senha.

## Domínio e HTTPS

- **Domínio**: em **Domínios** no hPanel. Se o domínio foi comprado fora da
  Hostinger, apontar os nameservers para `ns1.dns-parking.com` e
  `ns2.dns-parking.com`.
- **SSL**: o plano Premium inclui SSL grátis — em **Segurança → SSL**,
  instalar e ativar **Forçar HTTPS**.

## Observações

- O arquivo `public/.htaccess` (cache + gzip) é incluído no build e vai junto
  para a branch `deploy`.
- Nunca é preciso subir `src/`, `node_modules/` ou `package.json` para o
  servidor — a branch `deploy` já contém somente o resultado do build.
