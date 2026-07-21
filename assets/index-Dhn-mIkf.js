var zu=Object.defineProperty;var Lu=(e,n,t)=>n in e?zu(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t;var ta=(e,n,t)=>Lu(e,typeof n!="symbol"?n+"":n,t);(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const l of a.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function t(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerPolicy&&(a.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?a.credentials="include":s.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(s){if(s.ep)return;s.ep=!0;const a=t(s);fetch(s.href,a)}})();var nc={exports:{}},Fs={},tc={exports:{}},B={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Sr=Symbol.for("react.element"),Mu=Symbol.for("react.portal"),Iu=Symbol.for("react.fragment"),Ou=Symbol.for("react.strict_mode"),Au=Symbol.for("react.profiler"),$u=Symbol.for("react.provider"),Du=Symbol.for("react.context"),Fu=Symbol.for("react.forward_ref"),Bu=Symbol.for("react.suspense"),Ru=Symbol.for("react.memo"),Vu=Symbol.for("react.lazy"),Ll=Symbol.iterator;function Hu(e){return e===null||typeof e!="object"?null:(e=Ll&&e[Ll]||e["@@iterator"],typeof e=="function"?e:null)}var rc={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},sc=Object.assign,ac={};function Pt(e,n,t){this.props=e,this.context=n,this.refs=ac,this.updater=t||rc}Pt.prototype.isReactComponent={};Pt.prototype.setState=function(e,n){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,n,"setState")};Pt.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function ic(){}ic.prototype=Pt.prototype;function Ii(e,n,t){this.props=e,this.context=n,this.refs=ac,this.updater=t||rc}var Oi=Ii.prototype=new ic;Oi.constructor=Ii;sc(Oi,Pt.prototype);Oi.isPureReactComponent=!0;var Ml=Array.isArray,lc=Object.prototype.hasOwnProperty,Ai={current:null},oc={key:!0,ref:!0,__self:!0,__source:!0};function cc(e,n,t){var r,s={},a=null,l=null;if(n!=null)for(r in n.ref!==void 0&&(l=n.ref),n.key!==void 0&&(a=""+n.key),n)lc.call(n,r)&&!oc.hasOwnProperty(r)&&(s[r]=n[r]);var o=arguments.length-2;if(o===1)s.children=t;else if(1<o){for(var c=Array(o),d=0;d<o;d++)c[d]=arguments[d+2];s.children=c}if(e&&e.defaultProps)for(r in o=e.defaultProps,o)s[r]===void 0&&(s[r]=o[r]);return{$$typeof:Sr,type:e,key:a,ref:l,props:s,_owner:Ai.current}}function qu(e,n){return{$$typeof:Sr,type:e.type,key:n,ref:e.ref,props:e.props,_owner:e._owner}}function $i(e){return typeof e=="object"&&e!==null&&e.$$typeof===Sr}function Gu(e){var n={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(t){return n[t]})}var Il=/\/+/g;function ra(e,n){return typeof e=="object"&&e!==null&&e.key!=null?Gu(""+e.key):n.toString(36)}function Ur(e,n,t,r,s){var a=typeof e;(a==="undefined"||a==="boolean")&&(e=null);var l=!1;if(e===null)l=!0;else switch(a){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case Sr:case Mu:l=!0}}if(l)return l=e,s=s(l),e=r===""?"."+ra(l,0):r,Ml(s)?(t="",e!=null&&(t=e.replace(Il,"$&/")+"/"),Ur(s,n,t,"",function(d){return d})):s!=null&&($i(s)&&(s=qu(s,t+(!s.key||l&&l.key===s.key?"":(""+s.key).replace(Il,"$&/")+"/")+e)),n.push(s)),1;if(l=0,r=r===""?".":r+":",Ml(e))for(var o=0;o<e.length;o++){a=e[o];var c=r+ra(a,o);l+=Ur(a,n,t,c,s)}else if(c=Hu(e),typeof c=="function")for(e=c.call(e),o=0;!(a=e.next()).done;)a=a.value,c=r+ra(a,o++),l+=Ur(a,n,t,c,s);else if(a==="object")throw n=String(e),Error("Objects are not valid as a React child (found: "+(n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n)+"). If you meant to render a collection of children, use an array instead.");return l}function _r(e,n,t){if(e==null)return e;var r=[],s=0;return Ur(e,r,"","",function(a){return n.call(t,a,s++)}),r}function Wu(e){if(e._status===-1){var n=e._result;n=n(),n.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=n)}if(e._status===1)return e._result.default;throw e._result}var be={current:null},Xr={transition:null},Uu={ReactCurrentDispatcher:be,ReactCurrentBatchConfig:Xr,ReactCurrentOwner:Ai};function dc(){throw Error("act(...) is not supported in production builds of React.")}B.Children={map:_r,forEach:function(e,n,t){_r(e,function(){n.apply(this,arguments)},t)},count:function(e){var n=0;return _r(e,function(){n++}),n},toArray:function(e){return _r(e,function(n){return n})||[]},only:function(e){if(!$i(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};B.Component=Pt;B.Fragment=Iu;B.Profiler=Au;B.PureComponent=Ii;B.StrictMode=Ou;B.Suspense=Bu;B.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Uu;B.act=dc;B.cloneElement=function(e,n,t){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=sc({},e.props),s=e.key,a=e.ref,l=e._owner;if(n!=null){if(n.ref!==void 0&&(a=n.ref,l=Ai.current),n.key!==void 0&&(s=""+n.key),e.type&&e.type.defaultProps)var o=e.type.defaultProps;for(c in n)lc.call(n,c)&&!oc.hasOwnProperty(c)&&(r[c]=n[c]===void 0&&o!==void 0?o[c]:n[c])}var c=arguments.length-2;if(c===1)r.children=t;else if(1<c){o=Array(c);for(var d=0;d<c;d++)o[d]=arguments[d+2];r.children=o}return{$$typeof:Sr,type:e.type,key:s,ref:a,props:r,_owner:l}};B.createContext=function(e){return e={$$typeof:Du,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:$u,_context:e},e.Consumer=e};B.createElement=cc;B.createFactory=function(e){var n=cc.bind(null,e);return n.type=e,n};B.createRef=function(){return{current:null}};B.forwardRef=function(e){return{$$typeof:Fu,render:e}};B.isValidElement=$i;B.lazy=function(e){return{$$typeof:Vu,_payload:{_status:-1,_result:e},_init:Wu}};B.memo=function(e,n){return{$$typeof:Ru,type:e,compare:n===void 0?null:n}};B.startTransition=function(e){var n=Xr.transition;Xr.transition={};try{e()}finally{Xr.transition=n}};B.unstable_act=dc;B.useCallback=function(e,n){return be.current.useCallback(e,n)};B.useContext=function(e){return be.current.useContext(e)};B.useDebugValue=function(){};B.useDeferredValue=function(e){return be.current.useDeferredValue(e)};B.useEffect=function(e,n){return be.current.useEffect(e,n)};B.useId=function(){return be.current.useId()};B.useImperativeHandle=function(e,n,t){return be.current.useImperativeHandle(e,n,t)};B.useInsertionEffect=function(e,n){return be.current.useInsertionEffect(e,n)};B.useLayoutEffect=function(e,n){return be.current.useLayoutEffect(e,n)};B.useMemo=function(e,n){return be.current.useMemo(e,n)};B.useReducer=function(e,n,t){return be.current.useReducer(e,n,t)};B.useRef=function(e){return be.current.useRef(e)};B.useState=function(e){return be.current.useState(e)};B.useSyncExternalStore=function(e,n,t){return be.current.useSyncExternalStore(e,n,t)};B.useTransition=function(){return be.current.useTransition()};B.version="18.3.1";tc.exports=B;var Di=tc.exports;/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Xu=Di,Qu=Symbol.for("react.element"),Ku=Symbol.for("react.fragment"),Yu=Object.prototype.hasOwnProperty,Zu=Xu.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Ju={key:!0,ref:!0,__self:!0,__source:!0};function uc(e,n,t){var r,s={},a=null,l=null;t!==void 0&&(a=""+t),n.key!==void 0&&(a=""+n.key),n.ref!==void 0&&(l=n.ref);for(r in n)Yu.call(n,r)&&!Ju.hasOwnProperty(r)&&(s[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps,n)s[r]===void 0&&(s[r]=n[r]);return{$$typeof:Qu,type:e,key:a,ref:l,props:s,_owner:Zu.current}}Fs.Fragment=Ku;Fs.jsx=uc;Fs.jsxs=uc;nc.exports=Fs;var i=nc.exports,fc={exports:{}},De={},pc={exports:{}},mc={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function n(z,T){var M=z.length;z.push(T);e:for(;0<M;){var F=M-1>>>1,U=z[F];if(0<s(U,T))z[F]=T,z[M]=U,M=F;else break e}}function t(z){return z.length===0?null:z[0]}function r(z){if(z.length===0)return null;var T=z[0],M=z.pop();if(M!==T){z[0]=M;e:for(var F=0,U=z.length,D=U>>>1;F<D;){var H=2*(F+1)-1,fe=z[H],Ce=H+1,Er=z[Ce];if(0>s(fe,M))Ce<U&&0>s(Er,fe)?(z[F]=Er,z[Ce]=M,F=Ce):(z[F]=fe,z[H]=M,F=H);else if(Ce<U&&0>s(Er,M))z[F]=Er,z[Ce]=M,F=Ce;else break e}}return T}function s(z,T){var M=z.sortIndex-T.sortIndex;return M!==0?M:z.id-T.id}if(typeof performance=="object"&&typeof performance.now=="function"){var a=performance;e.unstable_now=function(){return a.now()}}else{var l=Date,o=l.now();e.unstable_now=function(){return l.now()-o}}var c=[],d=[],p=1,h=null,g=3,j=!1,w=!1,y=!1,C=typeof setTimeout=="function"?setTimeout:null,m=typeof clearTimeout=="function"?clearTimeout:null,u=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function f(z){for(var T=t(d);T!==null;){if(T.callback===null)r(d);else if(T.startTime<=z)r(d),T.sortIndex=T.expirationTime,n(c,T);else break;T=t(d)}}function v(z){if(y=!1,f(z),!w)if(t(c)!==null)w=!0,W(x);else{var T=t(d);T!==null&&V(v,T.startTime-z)}}function x(z,T){w=!1,y&&(y=!1,m(N),N=-1),j=!0;var M=g;try{for(f(T),h=t(c);h!==null&&(!(h.expirationTime>T)||z&&!A());){var F=h.callback;if(typeof F=="function"){h.callback=null,g=h.priorityLevel;var U=F(h.expirationTime<=T);T=e.unstable_now(),typeof U=="function"?h.callback=U:h===t(c)&&r(c),f(T)}else r(c);h=t(c)}if(h!==null)var D=!0;else{var H=t(d);H!==null&&V(v,H.startTime-T),D=!1}return D}finally{h=null,g=M,j=!1}}var S=!1,b=null,N=-1,k=5,L=-1;function A(){return!(e.unstable_now()-L<k)}function G(){if(b!==null){var z=e.unstable_now();L=z;var T=!0;try{T=b(!0,z)}finally{T?_():(S=!1,b=null)}}else S=!1}var _;if(typeof u=="function")_=function(){u(G)};else if(typeof MessageChannel<"u"){var P=new MessageChannel,$=P.port2;P.port1.onmessage=G,_=function(){$.postMessage(null)}}else _=function(){C(G,0)};function W(z){b=z,S||(S=!0,_())}function V(z,T){N=C(function(){z(e.unstable_now())},T)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(z){z.callback=null},e.unstable_continueExecution=function(){w||j||(w=!0,W(x))},e.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):k=0<z?Math.floor(1e3/z):5},e.unstable_getCurrentPriorityLevel=function(){return g},e.unstable_getFirstCallbackNode=function(){return t(c)},e.unstable_next=function(z){switch(g){case 1:case 2:case 3:var T=3;break;default:T=g}var M=g;g=T;try{return z()}finally{g=M}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(z,T){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var M=g;g=z;try{return T()}finally{g=M}},e.unstable_scheduleCallback=function(z,T,M){var F=e.unstable_now();switch(typeof M=="object"&&M!==null?(M=M.delay,M=typeof M=="number"&&0<M?F+M:F):M=F,z){case 1:var U=-1;break;case 2:U=250;break;case 5:U=1073741823;break;case 4:U=1e4;break;default:U=5e3}return U=M+U,z={id:p++,callback:T,priorityLevel:z,startTime:M,expirationTime:U,sortIndex:-1},M>F?(z.sortIndex=M,n(d,z),t(c)===null&&z===t(d)&&(y?(m(N),N=-1):y=!0,V(v,M-F))):(z.sortIndex=U,n(c,z),w||j||(w=!0,W(x))),z},e.unstable_shouldYield=A,e.unstable_wrapCallback=function(z){var T=g;return function(){var M=g;g=T;try{return z.apply(this,arguments)}finally{g=M}}}})(mc);pc.exports=mc;var ef=pc.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var nf=Di,$e=ef;function E(e){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)n+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var hc=new Set,rr={};function Jn(e,n){St(e,n),St(e+"Capture",n)}function St(e,n){for(rr[e]=n,e=0;e<n.length;e++)hc.add(n[e])}var mn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Aa=Object.prototype.hasOwnProperty,tf=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Ol={},Al={};function rf(e){return Aa.call(Al,e)?!0:Aa.call(Ol,e)?!1:tf.test(e)?Al[e]=!0:(Ol[e]=!0,!1)}function sf(e,n,t,r){if(t!==null&&t.type===0)return!1;switch(typeof n){case"function":case"symbol":return!0;case"boolean":return r?!1:t!==null?!t.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function af(e,n,t,r){if(n===null||typeof n>"u"||sf(e,n,t,r))return!0;if(r)return!1;if(t!==null)switch(t.type){case 3:return!n;case 4:return n===!1;case 5:return isNaN(n);case 6:return isNaN(n)||1>n}return!1}function Ne(e,n,t,r,s,a,l){this.acceptsBooleans=n===2||n===3||n===4,this.attributeName=r,this.attributeNamespace=s,this.mustUseProperty=t,this.propertyName=e,this.type=n,this.sanitizeURL=a,this.removeEmptyString=l}var he={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){he[e]=new Ne(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var n=e[0];he[n]=new Ne(n,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){he[e]=new Ne(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){he[e]=new Ne(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){he[e]=new Ne(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){he[e]=new Ne(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){he[e]=new Ne(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){he[e]=new Ne(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){he[e]=new Ne(e,5,!1,e.toLowerCase(),null,!1,!1)});var Fi=/[\-:]([a-z])/g;function Bi(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var n=e.replace(Fi,Bi);he[n]=new Ne(n,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var n=e.replace(Fi,Bi);he[n]=new Ne(n,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var n=e.replace(Fi,Bi);he[n]=new Ne(n,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){he[e]=new Ne(e,1,!1,e.toLowerCase(),null,!1,!1)});he.xlinkHref=new Ne("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){he[e]=new Ne(e,1,!1,e.toLowerCase(),null,!0,!0)});function Ri(e,n,t,r){var s=he.hasOwnProperty(n)?he[n]:null;(s!==null?s.type!==0:r||!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(af(n,t,s,r)&&(t=null),r||s===null?rf(n)&&(t===null?e.removeAttribute(n):e.setAttribute(n,""+t)):s.mustUseProperty?e[s.propertyName]=t===null?s.type===3?!1:"":t:(n=s.attributeName,r=s.attributeNamespace,t===null?e.removeAttribute(n):(s=s.type,t=s===3||s===4&&t===!0?"":""+t,r?e.setAttributeNS(r,n,t):e.setAttribute(n,t))))}var xn=nf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Tr=Symbol.for("react.element"),st=Symbol.for("react.portal"),at=Symbol.for("react.fragment"),Vi=Symbol.for("react.strict_mode"),$a=Symbol.for("react.profiler"),gc=Symbol.for("react.provider"),vc=Symbol.for("react.context"),Hi=Symbol.for("react.forward_ref"),Da=Symbol.for("react.suspense"),Fa=Symbol.for("react.suspense_list"),qi=Symbol.for("react.memo"),yn=Symbol.for("react.lazy"),xc=Symbol.for("react.offscreen"),$l=Symbol.iterator;function Mt(e){return e===null||typeof e!="object"?null:(e=$l&&e[$l]||e["@@iterator"],typeof e=="function"?e:null)}var te=Object.assign,sa;function Vt(e){if(sa===void 0)try{throw Error()}catch(t){var n=t.stack.trim().match(/\n( *(at )?)/);sa=n&&n[1]||""}return`
`+sa+e}var aa=!1;function ia(e,n){if(!e||aa)return"";aa=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(n)if(n=function(){throw Error()},Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(n,[])}catch(d){var r=d}Reflect.construct(e,[],n)}else{try{n.call()}catch(d){r=d}e.call(n.prototype)}else{try{throw Error()}catch(d){r=d}e()}}catch(d){if(d&&r&&typeof d.stack=="string"){for(var s=d.stack.split(`
`),a=r.stack.split(`
`),l=s.length-1,o=a.length-1;1<=l&&0<=o&&s[l]!==a[o];)o--;for(;1<=l&&0<=o;l--,o--)if(s[l]!==a[o]){if(l!==1||o!==1)do if(l--,o--,0>o||s[l]!==a[o]){var c=`
`+s[l].replace(" at new "," at ");return e.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",e.displayName)),c}while(1<=l&&0<=o);break}}}finally{aa=!1,Error.prepareStackTrace=t}return(e=e?e.displayName||e.name:"")?Vt(e):""}function lf(e){switch(e.tag){case 5:return Vt(e.type);case 16:return Vt("Lazy");case 13:return Vt("Suspense");case 19:return Vt("SuspenseList");case 0:case 2:case 15:return e=ia(e.type,!1),e;case 11:return e=ia(e.type.render,!1),e;case 1:return e=ia(e.type,!0),e;default:return""}}function Ba(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case at:return"Fragment";case st:return"Portal";case $a:return"Profiler";case Vi:return"StrictMode";case Da:return"Suspense";case Fa:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case vc:return(e.displayName||"Context")+".Consumer";case gc:return(e._context.displayName||"Context")+".Provider";case Hi:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case qi:return n=e.displayName||null,n!==null?n:Ba(e.type)||"Memo";case yn:n=e._payload,e=e._init;try{return Ba(e(n))}catch{}}return null}function of(e){var n=e.type;switch(e.tag){case 24:return"Cache";case 9:return(n.displayName||"Context")+".Consumer";case 10:return(n._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=n.render,e=e.displayName||e.name||"",n.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return n;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ba(n);case 8:return n===Vi?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n}return null}function On(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function wc(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function cf(e){var n=wc(e)?"checked":"value",t=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),r=""+e[n];if(!e.hasOwnProperty(n)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var s=t.get,a=t.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return s.call(this)},set:function(l){r=""+l,a.call(this,l)}}),Object.defineProperty(e,n,{enumerable:t.enumerable}),{getValue:function(){return r},setValue:function(l){r=""+l},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function Pr(e){e._valueTracker||(e._valueTracker=cf(e))}function yc(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var t=n.getValue(),r="";return e&&(r=wc(e)?e.checked?"true":"false":e.value),e=r,e!==t?(n.setValue(e),!0):!1}function ds(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Ra(e,n){var t=n.checked;return te({},n,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??e._wrapperState.initialChecked})}function Dl(e,n){var t=n.defaultValue==null?"":n.defaultValue,r=n.checked!=null?n.checked:n.defaultChecked;t=On(n.value!=null?n.value:t),e._wrapperState={initialChecked:r,initialValue:t,controlled:n.type==="checkbox"||n.type==="radio"?n.checked!=null:n.value!=null}}function jc(e,n){n=n.checked,n!=null&&Ri(e,"checked",n,!1)}function Va(e,n){jc(e,n);var t=On(n.value),r=n.type;if(t!=null)r==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+t):e.value!==""+t&&(e.value=""+t);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}n.hasOwnProperty("value")?Ha(e,n.type,t):n.hasOwnProperty("defaultValue")&&Ha(e,n.type,On(n.defaultValue)),n.checked==null&&n.defaultChecked!=null&&(e.defaultChecked=!!n.defaultChecked)}function Fl(e,n,t){if(n.hasOwnProperty("value")||n.hasOwnProperty("defaultValue")){var r=n.type;if(!(r!=="submit"&&r!=="reset"||n.value!==void 0&&n.value!==null))return;n=""+e._wrapperState.initialValue,t||n===e.value||(e.value=n),e.defaultValue=n}t=e.name,t!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,t!==""&&(e.name=t)}function Ha(e,n,t){(n!=="number"||ds(e.ownerDocument)!==e)&&(t==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+t&&(e.defaultValue=""+t))}var Ht=Array.isArray;function gt(e,n,t,r){if(e=e.options,n){n={};for(var s=0;s<t.length;s++)n["$"+t[s]]=!0;for(t=0;t<e.length;t++)s=n.hasOwnProperty("$"+e[t].value),e[t].selected!==s&&(e[t].selected=s),s&&r&&(e[t].defaultSelected=!0)}else{for(t=""+On(t),n=null,s=0;s<e.length;s++){if(e[s].value===t){e[s].selected=!0,r&&(e[s].defaultSelected=!0);return}n!==null||e[s].disabled||(n=e[s])}n!==null&&(n.selected=!0)}}function qa(e,n){if(n.dangerouslySetInnerHTML!=null)throw Error(E(91));return te({},n,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Bl(e,n){var t=n.value;if(t==null){if(t=n.children,n=n.defaultValue,t!=null){if(n!=null)throw Error(E(92));if(Ht(t)){if(1<t.length)throw Error(E(93));t=t[0]}n=t}n==null&&(n=""),t=n}e._wrapperState={initialValue:On(t)}}function Sc(e,n){var t=On(n.value),r=On(n.defaultValue);t!=null&&(t=""+t,t!==e.value&&(e.value=t),n.defaultValue==null&&e.defaultValue!==t&&(e.defaultValue=t)),r!=null&&(e.defaultValue=""+r)}function Rl(e){var n=e.textContent;n===e._wrapperState.initialValue&&n!==""&&n!==null&&(e.value=n)}function bc(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ga(e,n){return e==null||e==="http://www.w3.org/1999/xhtml"?bc(n):e==="http://www.w3.org/2000/svg"&&n==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var zr,Nc=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(n,t,r,s){MSApp.execUnsafeLocalFunction(function(){return e(n,t,r,s)})}:e}(function(e,n){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=n;else{for(zr=zr||document.createElement("div"),zr.innerHTML="<svg>"+n.valueOf().toString()+"</svg>",n=zr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;n.firstChild;)e.appendChild(n.firstChild)}});function sr(e,n){if(n){var t=e.firstChild;if(t&&t===e.lastChild&&t.nodeType===3){t.nodeValue=n;return}}e.textContent=n}var Ut={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},df=["Webkit","ms","Moz","O"];Object.keys(Ut).forEach(function(e){df.forEach(function(n){n=n+e.charAt(0).toUpperCase()+e.substring(1),Ut[n]=Ut[e]})});function Cc(e,n,t){return n==null||typeof n=="boolean"||n===""?"":t||typeof n!="number"||n===0||Ut.hasOwnProperty(e)&&Ut[e]?(""+n).trim():n+"px"}function kc(e,n){e=e.style;for(var t in n)if(n.hasOwnProperty(t)){var r=t.indexOf("--")===0,s=Cc(t,n[t],r);t==="float"&&(t="cssFloat"),r?e.setProperty(t,s):e[t]=s}}var uf=te({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Wa(e,n){if(n){if(uf[e]&&(n.children!=null||n.dangerouslySetInnerHTML!=null))throw Error(E(137,e));if(n.dangerouslySetInnerHTML!=null){if(n.children!=null)throw Error(E(60));if(typeof n.dangerouslySetInnerHTML!="object"||!("__html"in n.dangerouslySetInnerHTML))throw Error(E(61))}if(n.style!=null&&typeof n.style!="object")throw Error(E(62))}}function Ua(e,n){if(e.indexOf("-")===-1)return typeof n.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Xa=null;function Gi(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Qa=null,vt=null,xt=null;function Vl(e){if(e=Cr(e)){if(typeof Qa!="function")throw Error(E(280));var n=e.stateNode;n&&(n=qs(n),Qa(e.stateNode,e.type,n))}}function Ec(e){vt?xt?xt.push(e):xt=[e]:vt=e}function _c(){if(vt){var e=vt,n=xt;if(xt=vt=null,Vl(e),n)for(e=0;e<n.length;e++)Vl(n[e])}}function Tc(e,n){return e(n)}function Pc(){}var la=!1;function zc(e,n,t){if(la)return e(n,t);la=!0;try{return Tc(e,n,t)}finally{la=!1,(vt!==null||xt!==null)&&(Pc(),_c())}}function ar(e,n){var t=e.stateNode;if(t===null)return null;var r=qs(t);if(r===null)return null;t=r[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(t&&typeof t!="function")throw Error(E(231,n,typeof t));return t}var Ka=!1;if(mn)try{var It={};Object.defineProperty(It,"passive",{get:function(){Ka=!0}}),window.addEventListener("test",It,It),window.removeEventListener("test",It,It)}catch{Ka=!1}function ff(e,n,t,r,s,a,l,o,c){var d=Array.prototype.slice.call(arguments,3);try{n.apply(t,d)}catch(p){this.onError(p)}}var Xt=!1,us=null,fs=!1,Ya=null,pf={onError:function(e){Xt=!0,us=e}};function mf(e,n,t,r,s,a,l,o,c){Xt=!1,us=null,ff.apply(pf,arguments)}function hf(e,n,t,r,s,a,l,o,c){if(mf.apply(this,arguments),Xt){if(Xt){var d=us;Xt=!1,us=null}else throw Error(E(198));fs||(fs=!0,Ya=d)}}function et(e){var n=e,t=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,n.flags&4098&&(t=n.return),e=n.return;while(e)}return n.tag===3?t:null}function Lc(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function Hl(e){if(et(e)!==e)throw Error(E(188))}function gf(e){var n=e.alternate;if(!n){if(n=et(e),n===null)throw Error(E(188));return n!==e?null:e}for(var t=e,r=n;;){var s=t.return;if(s===null)break;var a=s.alternate;if(a===null){if(r=s.return,r!==null){t=r;continue}break}if(s.child===a.child){for(a=s.child;a;){if(a===t)return Hl(s),e;if(a===r)return Hl(s),n;a=a.sibling}throw Error(E(188))}if(t.return!==r.return)t=s,r=a;else{for(var l=!1,o=s.child;o;){if(o===t){l=!0,t=s,r=a;break}if(o===r){l=!0,r=s,t=a;break}o=o.sibling}if(!l){for(o=a.child;o;){if(o===t){l=!0,t=a,r=s;break}if(o===r){l=!0,r=a,t=s;break}o=o.sibling}if(!l)throw Error(E(189))}}if(t.alternate!==r)throw Error(E(190))}if(t.tag!==3)throw Error(E(188));return t.stateNode.current===t?e:n}function Mc(e){return e=gf(e),e!==null?Ic(e):null}function Ic(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var n=Ic(e);if(n!==null)return n;e=e.sibling}return null}var Oc=$e.unstable_scheduleCallback,ql=$e.unstable_cancelCallback,vf=$e.unstable_shouldYield,xf=$e.unstable_requestPaint,se=$e.unstable_now,wf=$e.unstable_getCurrentPriorityLevel,Wi=$e.unstable_ImmediatePriority,Ac=$e.unstable_UserBlockingPriority,ps=$e.unstable_NormalPriority,yf=$e.unstable_LowPriority,$c=$e.unstable_IdlePriority,Bs=null,ln=null;function jf(e){if(ln&&typeof ln.onCommitFiberRoot=="function")try{ln.onCommitFiberRoot(Bs,e,void 0,(e.current.flags&128)===128)}catch{}}var Ze=Math.clz32?Math.clz32:Nf,Sf=Math.log,bf=Math.LN2;function Nf(e){return e>>>=0,e===0?32:31-(Sf(e)/bf|0)|0}var Lr=64,Mr=4194304;function qt(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function ms(e,n){var t=e.pendingLanes;if(t===0)return 0;var r=0,s=e.suspendedLanes,a=e.pingedLanes,l=t&268435455;if(l!==0){var o=l&~s;o!==0?r=qt(o):(a&=l,a!==0&&(r=qt(a)))}else l=t&~s,l!==0?r=qt(l):a!==0&&(r=qt(a));if(r===0)return 0;if(n!==0&&n!==r&&!(n&s)&&(s=r&-r,a=n&-n,s>=a||s===16&&(a&4194240)!==0))return n;if(r&4&&(r|=t&16),n=e.entangledLanes,n!==0)for(e=e.entanglements,n&=r;0<n;)t=31-Ze(n),s=1<<t,r|=e[t],n&=~s;return r}function Cf(e,n){switch(e){case 1:case 2:case 4:return n+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function kf(e,n){for(var t=e.suspendedLanes,r=e.pingedLanes,s=e.expirationTimes,a=e.pendingLanes;0<a;){var l=31-Ze(a),o=1<<l,c=s[l];c===-1?(!(o&t)||o&r)&&(s[l]=Cf(o,n)):c<=n&&(e.expiredLanes|=o),a&=~o}}function Za(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Dc(){var e=Lr;return Lr<<=1,!(Lr&4194240)&&(Lr=64),e}function oa(e){for(var n=[],t=0;31>t;t++)n.push(e);return n}function br(e,n,t){e.pendingLanes|=n,n!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,n=31-Ze(n),e[n]=t}function Ef(e,n){var t=e.pendingLanes&~n;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=n,e.mutableReadLanes&=n,e.entangledLanes&=n,n=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<t;){var s=31-Ze(t),a=1<<s;n[s]=0,r[s]=-1,e[s]=-1,t&=~a}}function Ui(e,n){var t=e.entangledLanes|=n;for(e=e.entanglements;t;){var r=31-Ze(t),s=1<<r;s&n|e[r]&n&&(e[r]|=n),t&=~s}}var X=0;function Fc(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Bc,Xi,Rc,Vc,Hc,Ja=!1,Ir=[],En=null,_n=null,Tn=null,ir=new Map,lr=new Map,Sn=[],_f="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Gl(e,n){switch(e){case"focusin":case"focusout":En=null;break;case"dragenter":case"dragleave":_n=null;break;case"mouseover":case"mouseout":Tn=null;break;case"pointerover":case"pointerout":ir.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":lr.delete(n.pointerId)}}function Ot(e,n,t,r,s,a){return e===null||e.nativeEvent!==a?(e={blockedOn:n,domEventName:t,eventSystemFlags:r,nativeEvent:a,targetContainers:[s]},n!==null&&(n=Cr(n),n!==null&&Xi(n)),e):(e.eventSystemFlags|=r,n=e.targetContainers,s!==null&&n.indexOf(s)===-1&&n.push(s),e)}function Tf(e,n,t,r,s){switch(n){case"focusin":return En=Ot(En,e,n,t,r,s),!0;case"dragenter":return _n=Ot(_n,e,n,t,r,s),!0;case"mouseover":return Tn=Ot(Tn,e,n,t,r,s),!0;case"pointerover":var a=s.pointerId;return ir.set(a,Ot(ir.get(a)||null,e,n,t,r,s)),!0;case"gotpointercapture":return a=s.pointerId,lr.set(a,Ot(lr.get(a)||null,e,n,t,r,s)),!0}return!1}function qc(e){var n=Hn(e.target);if(n!==null){var t=et(n);if(t!==null){if(n=t.tag,n===13){if(n=Lc(t),n!==null){e.blockedOn=n,Hc(e.priority,function(){Rc(t)});return}}else if(n===3&&t.stateNode.current.memoizedState.isDehydrated){e.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Qr(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var t=ei(e.domEventName,e.eventSystemFlags,n[0],e.nativeEvent);if(t===null){t=e.nativeEvent;var r=new t.constructor(t.type,t);Xa=r,t.target.dispatchEvent(r),Xa=null}else return n=Cr(t),n!==null&&Xi(n),e.blockedOn=t,!1;n.shift()}return!0}function Wl(e,n,t){Qr(e)&&t.delete(n)}function Pf(){Ja=!1,En!==null&&Qr(En)&&(En=null),_n!==null&&Qr(_n)&&(_n=null),Tn!==null&&Qr(Tn)&&(Tn=null),ir.forEach(Wl),lr.forEach(Wl)}function At(e,n){e.blockedOn===n&&(e.blockedOn=null,Ja||(Ja=!0,$e.unstable_scheduleCallback($e.unstable_NormalPriority,Pf)))}function or(e){function n(s){return At(s,e)}if(0<Ir.length){At(Ir[0],e);for(var t=1;t<Ir.length;t++){var r=Ir[t];r.blockedOn===e&&(r.blockedOn=null)}}for(En!==null&&At(En,e),_n!==null&&At(_n,e),Tn!==null&&At(Tn,e),ir.forEach(n),lr.forEach(n),t=0;t<Sn.length;t++)r=Sn[t],r.blockedOn===e&&(r.blockedOn=null);for(;0<Sn.length&&(t=Sn[0],t.blockedOn===null);)qc(t),t.blockedOn===null&&Sn.shift()}var wt=xn.ReactCurrentBatchConfig,hs=!0;function zf(e,n,t,r){var s=X,a=wt.transition;wt.transition=null;try{X=1,Qi(e,n,t,r)}finally{X=s,wt.transition=a}}function Lf(e,n,t,r){var s=X,a=wt.transition;wt.transition=null;try{X=4,Qi(e,n,t,r)}finally{X=s,wt.transition=a}}function Qi(e,n,t,r){if(hs){var s=ei(e,n,t,r);if(s===null)xa(e,n,r,gs,t),Gl(e,r);else if(Tf(s,e,n,t,r))r.stopPropagation();else if(Gl(e,r),n&4&&-1<_f.indexOf(e)){for(;s!==null;){var a=Cr(s);if(a!==null&&Bc(a),a=ei(e,n,t,r),a===null&&xa(e,n,r,gs,t),a===s)break;s=a}s!==null&&r.stopPropagation()}else xa(e,n,r,null,t)}}var gs=null;function ei(e,n,t,r){if(gs=null,e=Gi(r),e=Hn(e),e!==null)if(n=et(e),n===null)e=null;else if(t=n.tag,t===13){if(e=Lc(n),e!==null)return e;e=null}else if(t===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null);return gs=e,null}function Gc(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(wf()){case Wi:return 1;case Ac:return 4;case ps:case yf:return 16;case $c:return 536870912;default:return 16}default:return 16}}var Nn=null,Ki=null,Kr=null;function Wc(){if(Kr)return Kr;var e,n=Ki,t=n.length,r,s="value"in Nn?Nn.value:Nn.textContent,a=s.length;for(e=0;e<t&&n[e]===s[e];e++);var l=t-e;for(r=1;r<=l&&n[t-r]===s[a-r];r++);return Kr=s.slice(e,1<r?1-r:void 0)}function Yr(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function Or(){return!0}function Ul(){return!1}function Fe(e){function n(t,r,s,a,l){this._reactName=t,this._targetInst=s,this.type=r,this.nativeEvent=a,this.target=l,this.currentTarget=null;for(var o in e)e.hasOwnProperty(o)&&(t=e[o],this[o]=t?t(a):a[o]);return this.isDefaultPrevented=(a.defaultPrevented!=null?a.defaultPrevented:a.returnValue===!1)?Or:Ul,this.isPropagationStopped=Ul,this}return te(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=Or)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=Or)},persist:function(){},isPersistent:Or}),n}var zt={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Yi=Fe(zt),Nr=te({},zt,{view:0,detail:0}),Mf=Fe(Nr),ca,da,$t,Rs=te({},Nr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Zi,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==$t&&($t&&e.type==="mousemove"?(ca=e.screenX-$t.screenX,da=e.screenY-$t.screenY):da=ca=0,$t=e),ca)},movementY:function(e){return"movementY"in e?e.movementY:da}}),Xl=Fe(Rs),If=te({},Rs,{dataTransfer:0}),Of=Fe(If),Af=te({},Nr,{relatedTarget:0}),ua=Fe(Af),$f=te({},zt,{animationName:0,elapsedTime:0,pseudoElement:0}),Df=Fe($f),Ff=te({},zt,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Bf=Fe(Ff),Rf=te({},zt,{data:0}),Ql=Fe(Rf),Vf={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Hf={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},qf={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Gf(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=qf[e])?!!n[e]:!1}function Zi(){return Gf}var Wf=te({},Nr,{key:function(e){if(e.key){var n=Vf[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=Yr(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Hf[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Zi,charCode:function(e){return e.type==="keypress"?Yr(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Yr(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Uf=Fe(Wf),Xf=te({},Rs,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Kl=Fe(Xf),Qf=te({},Nr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Zi}),Kf=Fe(Qf),Yf=te({},zt,{propertyName:0,elapsedTime:0,pseudoElement:0}),Zf=Fe(Yf),Jf=te({},Rs,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),ep=Fe(Jf),np=[9,13,27,32],Ji=mn&&"CompositionEvent"in window,Qt=null;mn&&"documentMode"in document&&(Qt=document.documentMode);var tp=mn&&"TextEvent"in window&&!Qt,Uc=mn&&(!Ji||Qt&&8<Qt&&11>=Qt),Yl=" ",Zl=!1;function Xc(e,n){switch(e){case"keyup":return np.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Qc(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var it=!1;function rp(e,n){switch(e){case"compositionend":return Qc(n);case"keypress":return n.which!==32?null:(Zl=!0,Yl);case"textInput":return e=n.data,e===Yl&&Zl?null:e;default:return null}}function sp(e,n){if(it)return e==="compositionend"||!Ji&&Xc(e,n)?(e=Wc(),Kr=Ki=Nn=null,it=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Uc&&n.locale!=="ko"?null:n.data;default:return null}}var ap={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Jl(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!ap[e.type]:n==="textarea"}function Kc(e,n,t,r){Ec(r),n=vs(n,"onChange"),0<n.length&&(t=new Yi("onChange","change",null,t,r),e.push({event:t,listeners:n}))}var Kt=null,cr=null;function ip(e){ld(e,0)}function Vs(e){var n=ct(e);if(yc(n))return e}function lp(e,n){if(e==="change")return n}var Yc=!1;if(mn){var fa;if(mn){var pa="oninput"in document;if(!pa){var eo=document.createElement("div");eo.setAttribute("oninput","return;"),pa=typeof eo.oninput=="function"}fa=pa}else fa=!1;Yc=fa&&(!document.documentMode||9<document.documentMode)}function no(){Kt&&(Kt.detachEvent("onpropertychange",Zc),cr=Kt=null)}function Zc(e){if(e.propertyName==="value"&&Vs(cr)){var n=[];Kc(n,cr,e,Gi(e)),zc(ip,n)}}function op(e,n,t){e==="focusin"?(no(),Kt=n,cr=t,Kt.attachEvent("onpropertychange",Zc)):e==="focusout"&&no()}function cp(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Vs(cr)}function dp(e,n){if(e==="click")return Vs(n)}function up(e,n){if(e==="input"||e==="change")return Vs(n)}function fp(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var en=typeof Object.is=="function"?Object.is:fp;function dr(e,n){if(en(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var t=Object.keys(e),r=Object.keys(n);if(t.length!==r.length)return!1;for(r=0;r<t.length;r++){var s=t[r];if(!Aa.call(n,s)||!en(e[s],n[s]))return!1}return!0}function to(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function ro(e,n){var t=to(e);e=0;for(var r;t;){if(t.nodeType===3){if(r=e+t.textContent.length,e<=n&&r>=n)return{node:t,offset:n-e};e=r}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=to(t)}}function Jc(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?Jc(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function ed(){for(var e=window,n=ds();n instanceof e.HTMLIFrameElement;){try{var t=typeof n.contentWindow.location.href=="string"}catch{t=!1}if(t)e=n.contentWindow;else break;n=ds(e.document)}return n}function el(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}function pp(e){var n=ed(),t=e.focusedElem,r=e.selectionRange;if(n!==t&&t&&t.ownerDocument&&Jc(t.ownerDocument.documentElement,t)){if(r!==null&&el(t)){if(n=r.start,e=r.end,e===void 0&&(e=n),"selectionStart"in t)t.selectionStart=n,t.selectionEnd=Math.min(e,t.value.length);else if(e=(n=t.ownerDocument||document)&&n.defaultView||window,e.getSelection){e=e.getSelection();var s=t.textContent.length,a=Math.min(r.start,s);r=r.end===void 0?a:Math.min(r.end,s),!e.extend&&a>r&&(s=r,r=a,a=s),s=ro(t,a);var l=ro(t,r);s&&l&&(e.rangeCount!==1||e.anchorNode!==s.node||e.anchorOffset!==s.offset||e.focusNode!==l.node||e.focusOffset!==l.offset)&&(n=n.createRange(),n.setStart(s.node,s.offset),e.removeAllRanges(),a>r?(e.addRange(n),e.extend(l.node,l.offset)):(n.setEnd(l.node,l.offset),e.addRange(n)))}}for(n=[],e=t;e=e.parentNode;)e.nodeType===1&&n.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<n.length;t++)e=n[t],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var mp=mn&&"documentMode"in document&&11>=document.documentMode,lt=null,ni=null,Yt=null,ti=!1;function so(e,n,t){var r=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;ti||lt==null||lt!==ds(r)||(r=lt,"selectionStart"in r&&el(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Yt&&dr(Yt,r)||(Yt=r,r=vs(ni,"onSelect"),0<r.length&&(n=new Yi("onSelect","select",null,n,t),e.push({event:n,listeners:r}),n.target=lt)))}function Ar(e,n){var t={};return t[e.toLowerCase()]=n.toLowerCase(),t["Webkit"+e]="webkit"+n,t["Moz"+e]="moz"+n,t}var ot={animationend:Ar("Animation","AnimationEnd"),animationiteration:Ar("Animation","AnimationIteration"),animationstart:Ar("Animation","AnimationStart"),transitionend:Ar("Transition","TransitionEnd")},ma={},nd={};mn&&(nd=document.createElement("div").style,"AnimationEvent"in window||(delete ot.animationend.animation,delete ot.animationiteration.animation,delete ot.animationstart.animation),"TransitionEvent"in window||delete ot.transitionend.transition);function Hs(e){if(ma[e])return ma[e];if(!ot[e])return e;var n=ot[e],t;for(t in n)if(n.hasOwnProperty(t)&&t in nd)return ma[e]=n[t];return e}var td=Hs("animationend"),rd=Hs("animationiteration"),sd=Hs("animationstart"),ad=Hs("transitionend"),id=new Map,ao="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function $n(e,n){id.set(e,n),Jn(n,[e])}for(var ha=0;ha<ao.length;ha++){var ga=ao[ha],hp=ga.toLowerCase(),gp=ga[0].toUpperCase()+ga.slice(1);$n(hp,"on"+gp)}$n(td,"onAnimationEnd");$n(rd,"onAnimationIteration");$n(sd,"onAnimationStart");$n("dblclick","onDoubleClick");$n("focusin","onFocus");$n("focusout","onBlur");$n(ad,"onTransitionEnd");St("onMouseEnter",["mouseout","mouseover"]);St("onMouseLeave",["mouseout","mouseover"]);St("onPointerEnter",["pointerout","pointerover"]);St("onPointerLeave",["pointerout","pointerover"]);Jn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Jn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Jn("onBeforeInput",["compositionend","keypress","textInput","paste"]);Jn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Jn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Jn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Gt="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),vp=new Set("cancel close invalid load scroll toggle".split(" ").concat(Gt));function io(e,n,t){var r=e.type||"unknown-event";e.currentTarget=t,hf(r,n,void 0,e),e.currentTarget=null}function ld(e,n){n=(n&4)!==0;for(var t=0;t<e.length;t++){var r=e[t],s=r.event;r=r.listeners;e:{var a=void 0;if(n)for(var l=r.length-1;0<=l;l--){var o=r[l],c=o.instance,d=o.currentTarget;if(o=o.listener,c!==a&&s.isPropagationStopped())break e;io(s,o,d),a=c}else for(l=0;l<r.length;l++){if(o=r[l],c=o.instance,d=o.currentTarget,o=o.listener,c!==a&&s.isPropagationStopped())break e;io(s,o,d),a=c}}}if(fs)throw e=Ya,fs=!1,Ya=null,e}function K(e,n){var t=n[li];t===void 0&&(t=n[li]=new Set);var r=e+"__bubble";t.has(r)||(od(n,e,2,!1),t.add(r))}function va(e,n,t){var r=0;n&&(r|=4),od(t,e,r,n)}var $r="_reactListening"+Math.random().toString(36).slice(2);function ur(e){if(!e[$r]){e[$r]=!0,hc.forEach(function(t){t!=="selectionchange"&&(vp.has(t)||va(t,!1,e),va(t,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[$r]||(n[$r]=!0,va("selectionchange",!1,n))}}function od(e,n,t,r){switch(Gc(n)){case 1:var s=zf;break;case 4:s=Lf;break;default:s=Qi}t=s.bind(null,n,t,e),s=void 0,!Ka||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(s=!0),r?s!==void 0?e.addEventListener(n,t,{capture:!0,passive:s}):e.addEventListener(n,t,!0):s!==void 0?e.addEventListener(n,t,{passive:s}):e.addEventListener(n,t,!1)}function xa(e,n,t,r,s){var a=r;if(!(n&1)&&!(n&2)&&r!==null)e:for(;;){if(r===null)return;var l=r.tag;if(l===3||l===4){var o=r.stateNode.containerInfo;if(o===s||o.nodeType===8&&o.parentNode===s)break;if(l===4)for(l=r.return;l!==null;){var c=l.tag;if((c===3||c===4)&&(c=l.stateNode.containerInfo,c===s||c.nodeType===8&&c.parentNode===s))return;l=l.return}for(;o!==null;){if(l=Hn(o),l===null)return;if(c=l.tag,c===5||c===6){r=a=l;continue e}o=o.parentNode}}r=r.return}zc(function(){var d=a,p=Gi(t),h=[];e:{var g=id.get(e);if(g!==void 0){var j=Yi,w=e;switch(e){case"keypress":if(Yr(t)===0)break e;case"keydown":case"keyup":j=Uf;break;case"focusin":w="focus",j=ua;break;case"focusout":w="blur",j=ua;break;case"beforeblur":case"afterblur":j=ua;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":j=Xl;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":j=Of;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":j=Kf;break;case td:case rd:case sd:j=Df;break;case ad:j=Zf;break;case"scroll":j=Mf;break;case"wheel":j=ep;break;case"copy":case"cut":case"paste":j=Bf;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":j=Kl}var y=(n&4)!==0,C=!y&&e==="scroll",m=y?g!==null?g+"Capture":null:g;y=[];for(var u=d,f;u!==null;){f=u;var v=f.stateNode;if(f.tag===5&&v!==null&&(f=v,m!==null&&(v=ar(u,m),v!=null&&y.push(fr(u,v,f)))),C)break;u=u.return}0<y.length&&(g=new j(g,w,null,t,p),h.push({event:g,listeners:y}))}}if(!(n&7)){e:{if(g=e==="mouseover"||e==="pointerover",j=e==="mouseout"||e==="pointerout",g&&t!==Xa&&(w=t.relatedTarget||t.fromElement)&&(Hn(w)||w[hn]))break e;if((j||g)&&(g=p.window===p?p:(g=p.ownerDocument)?g.defaultView||g.parentWindow:window,j?(w=t.relatedTarget||t.toElement,j=d,w=w?Hn(w):null,w!==null&&(C=et(w),w!==C||w.tag!==5&&w.tag!==6)&&(w=null)):(j=null,w=d),j!==w)){if(y=Xl,v="onMouseLeave",m="onMouseEnter",u="mouse",(e==="pointerout"||e==="pointerover")&&(y=Kl,v="onPointerLeave",m="onPointerEnter",u="pointer"),C=j==null?g:ct(j),f=w==null?g:ct(w),g=new y(v,u+"leave",j,t,p),g.target=C,g.relatedTarget=f,v=null,Hn(p)===d&&(y=new y(m,u+"enter",w,t,p),y.target=f,y.relatedTarget=C,v=y),C=v,j&&w)n:{for(y=j,m=w,u=0,f=y;f;f=nt(f))u++;for(f=0,v=m;v;v=nt(v))f++;for(;0<u-f;)y=nt(y),u--;for(;0<f-u;)m=nt(m),f--;for(;u--;){if(y===m||m!==null&&y===m.alternate)break n;y=nt(y),m=nt(m)}y=null}else y=null;j!==null&&lo(h,g,j,y,!1),w!==null&&C!==null&&lo(h,C,w,y,!0)}}e:{if(g=d?ct(d):window,j=g.nodeName&&g.nodeName.toLowerCase(),j==="select"||j==="input"&&g.type==="file")var x=lp;else if(Jl(g))if(Yc)x=up;else{x=cp;var S=op}else(j=g.nodeName)&&j.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(x=dp);if(x&&(x=x(e,d))){Kc(h,x,t,p);break e}S&&S(e,g,d),e==="focusout"&&(S=g._wrapperState)&&S.controlled&&g.type==="number"&&Ha(g,"number",g.value)}switch(S=d?ct(d):window,e){case"focusin":(Jl(S)||S.contentEditable==="true")&&(lt=S,ni=d,Yt=null);break;case"focusout":Yt=ni=lt=null;break;case"mousedown":ti=!0;break;case"contextmenu":case"mouseup":case"dragend":ti=!1,so(h,t,p);break;case"selectionchange":if(mp)break;case"keydown":case"keyup":so(h,t,p)}var b;if(Ji)e:{switch(e){case"compositionstart":var N="onCompositionStart";break e;case"compositionend":N="onCompositionEnd";break e;case"compositionupdate":N="onCompositionUpdate";break e}N=void 0}else it?Xc(e,t)&&(N="onCompositionEnd"):e==="keydown"&&t.keyCode===229&&(N="onCompositionStart");N&&(Uc&&t.locale!=="ko"&&(it||N!=="onCompositionStart"?N==="onCompositionEnd"&&it&&(b=Wc()):(Nn=p,Ki="value"in Nn?Nn.value:Nn.textContent,it=!0)),S=vs(d,N),0<S.length&&(N=new Ql(N,e,null,t,p),h.push({event:N,listeners:S}),b?N.data=b:(b=Qc(t),b!==null&&(N.data=b)))),(b=tp?rp(e,t):sp(e,t))&&(d=vs(d,"onBeforeInput"),0<d.length&&(p=new Ql("onBeforeInput","beforeinput",null,t,p),h.push({event:p,listeners:d}),p.data=b))}ld(h,n)})}function fr(e,n,t){return{instance:e,listener:n,currentTarget:t}}function vs(e,n){for(var t=n+"Capture",r=[];e!==null;){var s=e,a=s.stateNode;s.tag===5&&a!==null&&(s=a,a=ar(e,t),a!=null&&r.unshift(fr(e,a,s)),a=ar(e,n),a!=null&&r.push(fr(e,a,s))),e=e.return}return r}function nt(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function lo(e,n,t,r,s){for(var a=n._reactName,l=[];t!==null&&t!==r;){var o=t,c=o.alternate,d=o.stateNode;if(c!==null&&c===r)break;o.tag===5&&d!==null&&(o=d,s?(c=ar(t,a),c!=null&&l.unshift(fr(t,c,o))):s||(c=ar(t,a),c!=null&&l.push(fr(t,c,o)))),t=t.return}l.length!==0&&e.push({event:n,listeners:l})}var xp=/\r\n?/g,wp=/\u0000|\uFFFD/g;function oo(e){return(typeof e=="string"?e:""+e).replace(xp,`
`).replace(wp,"")}function Dr(e,n,t){if(n=oo(n),oo(e)!==n&&t)throw Error(E(425))}function xs(){}var ri=null,si=null;function ai(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var ii=typeof setTimeout=="function"?setTimeout:void 0,yp=typeof clearTimeout=="function"?clearTimeout:void 0,co=typeof Promise=="function"?Promise:void 0,jp=typeof queueMicrotask=="function"?queueMicrotask:typeof co<"u"?function(e){return co.resolve(null).then(e).catch(Sp)}:ii;function Sp(e){setTimeout(function(){throw e})}function wa(e,n){var t=n,r=0;do{var s=t.nextSibling;if(e.removeChild(t),s&&s.nodeType===8)if(t=s.data,t==="/$"){if(r===0){e.removeChild(s),or(n);return}r--}else t!=="$"&&t!=="$?"&&t!=="$!"||r++;t=s}while(t);or(n)}function Pn(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?")break;if(n==="/$")return null}}return e}function uo(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="$"||t==="$!"||t==="$?"){if(n===0)return e;n--}else t==="/$"&&n++}e=e.previousSibling}return null}var Lt=Math.random().toString(36).slice(2),sn="__reactFiber$"+Lt,pr="__reactProps$"+Lt,hn="__reactContainer$"+Lt,li="__reactEvents$"+Lt,bp="__reactListeners$"+Lt,Np="__reactHandles$"+Lt;function Hn(e){var n=e[sn];if(n)return n;for(var t=e.parentNode;t;){if(n=t[hn]||t[sn]){if(t=n.alternate,n.child!==null||t!==null&&t.child!==null)for(e=uo(e);e!==null;){if(t=e[sn])return t;e=uo(e)}return n}e=t,t=e.parentNode}return null}function Cr(e){return e=e[sn]||e[hn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function ct(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(E(33))}function qs(e){return e[pr]||null}var oi=[],dt=-1;function Dn(e){return{current:e}}function Z(e){0>dt||(e.current=oi[dt],oi[dt]=null,dt--)}function Q(e,n){dt++,oi[dt]=e.current,e.current=n}var An={},we=Dn(An),Te=Dn(!1),Xn=An;function bt(e,n){var t=e.type.contextTypes;if(!t)return An;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===n)return r.__reactInternalMemoizedMaskedChildContext;var s={},a;for(a in t)s[a]=n[a];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=n,e.__reactInternalMemoizedMaskedChildContext=s),s}function Pe(e){return e=e.childContextTypes,e!=null}function ws(){Z(Te),Z(we)}function fo(e,n,t){if(we.current!==An)throw Error(E(168));Q(we,n),Q(Te,t)}function cd(e,n,t){var r=e.stateNode;if(n=n.childContextTypes,typeof r.getChildContext!="function")return t;r=r.getChildContext();for(var s in r)if(!(s in n))throw Error(E(108,of(e)||"Unknown",s));return te({},t,r)}function ys(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||An,Xn=we.current,Q(we,e),Q(Te,Te.current),!0}function po(e,n,t){var r=e.stateNode;if(!r)throw Error(E(169));t?(e=cd(e,n,Xn),r.__reactInternalMemoizedMergedChildContext=e,Z(Te),Z(we),Q(we,e)):Z(Te),Q(Te,t)}var dn=null,Gs=!1,ya=!1;function dd(e){dn===null?dn=[e]:dn.push(e)}function Cp(e){Gs=!0,dd(e)}function Fn(){if(!ya&&dn!==null){ya=!0;var e=0,n=X;try{var t=dn;for(X=1;e<t.length;e++){var r=t[e];do r=r(!0);while(r!==null)}dn=null,Gs=!1}catch(s){throw dn!==null&&(dn=dn.slice(e+1)),Oc(Wi,Fn),s}finally{X=n,ya=!1}}return null}var ut=[],ft=0,js=null,Ss=0,Re=[],Ve=0,Qn=null,un=1,fn="";function Rn(e,n){ut[ft++]=Ss,ut[ft++]=js,js=e,Ss=n}function ud(e,n,t){Re[Ve++]=un,Re[Ve++]=fn,Re[Ve++]=Qn,Qn=e;var r=un;e=fn;var s=32-Ze(r)-1;r&=~(1<<s),t+=1;var a=32-Ze(n)+s;if(30<a){var l=s-s%5;a=(r&(1<<l)-1).toString(32),r>>=l,s-=l,un=1<<32-Ze(n)+s|t<<s|r,fn=a+e}else un=1<<a|t<<s|r,fn=e}function nl(e){e.return!==null&&(Rn(e,1),ud(e,1,0))}function tl(e){for(;e===js;)js=ut[--ft],ut[ft]=null,Ss=ut[--ft],ut[ft]=null;for(;e===Qn;)Qn=Re[--Ve],Re[Ve]=null,fn=Re[--Ve],Re[Ve]=null,un=Re[--Ve],Re[Ve]=null}var Oe=null,Ie=null,J=!1,Ye=null;function fd(e,n){var t=qe(5,null,null,0);t.elementType="DELETED",t.stateNode=n,t.return=e,n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)}function mo(e,n){switch(e.tag){case 5:var t=e.type;return n=n.nodeType!==1||t.toLowerCase()!==n.nodeName.toLowerCase()?null:n,n!==null?(e.stateNode=n,Oe=e,Ie=Pn(n.firstChild),!0):!1;case 6:return n=e.pendingProps===""||n.nodeType!==3?null:n,n!==null?(e.stateNode=n,Oe=e,Ie=null,!0):!1;case 13:return n=n.nodeType!==8?null:n,n!==null?(t=Qn!==null?{id:un,overflow:fn}:null,e.memoizedState={dehydrated:n,treeContext:t,retryLane:1073741824},t=qe(18,null,null,0),t.stateNode=n,t.return=e,e.child=t,Oe=e,Ie=null,!0):!1;default:return!1}}function ci(e){return(e.mode&1)!==0&&(e.flags&128)===0}function di(e){if(J){var n=Ie;if(n){var t=n;if(!mo(e,n)){if(ci(e))throw Error(E(418));n=Pn(t.nextSibling);var r=Oe;n&&mo(e,n)?fd(r,t):(e.flags=e.flags&-4097|2,J=!1,Oe=e)}}else{if(ci(e))throw Error(E(418));e.flags=e.flags&-4097|2,J=!1,Oe=e}}}function ho(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Oe=e}function Fr(e){if(e!==Oe)return!1;if(!J)return ho(e),J=!0,!1;var n;if((n=e.tag!==3)&&!(n=e.tag!==5)&&(n=e.type,n=n!=="head"&&n!=="body"&&!ai(e.type,e.memoizedProps)),n&&(n=Ie)){if(ci(e))throw pd(),Error(E(418));for(;n;)fd(e,n),n=Pn(n.nextSibling)}if(ho(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(E(317));e:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="/$"){if(n===0){Ie=Pn(e.nextSibling);break e}n--}else t!=="$"&&t!=="$!"&&t!=="$?"||n++}e=e.nextSibling}Ie=null}}else Ie=Oe?Pn(e.stateNode.nextSibling):null;return!0}function pd(){for(var e=Ie;e;)e=Pn(e.nextSibling)}function Nt(){Ie=Oe=null,J=!1}function rl(e){Ye===null?Ye=[e]:Ye.push(e)}var kp=xn.ReactCurrentBatchConfig;function Dt(e,n,t){if(e=t.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(E(309));var r=t.stateNode}if(!r)throw Error(E(147,e));var s=r,a=""+e;return n!==null&&n.ref!==null&&typeof n.ref=="function"&&n.ref._stringRef===a?n.ref:(n=function(l){var o=s.refs;l===null?delete o[a]:o[a]=l},n._stringRef=a,n)}if(typeof e!="string")throw Error(E(284));if(!t._owner)throw Error(E(290,e))}return e}function Br(e,n){throw e=Object.prototype.toString.call(n),Error(E(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e))}function go(e){var n=e._init;return n(e._payload)}function md(e){function n(m,u){if(e){var f=m.deletions;f===null?(m.deletions=[u],m.flags|=16):f.push(u)}}function t(m,u){if(!e)return null;for(;u!==null;)n(m,u),u=u.sibling;return null}function r(m,u){for(m=new Map;u!==null;)u.key!==null?m.set(u.key,u):m.set(u.index,u),u=u.sibling;return m}function s(m,u){return m=In(m,u),m.index=0,m.sibling=null,m}function a(m,u,f){return m.index=f,e?(f=m.alternate,f!==null?(f=f.index,f<u?(m.flags|=2,u):f):(m.flags|=2,u)):(m.flags|=1048576,u)}function l(m){return e&&m.alternate===null&&(m.flags|=2),m}function o(m,u,f,v){return u===null||u.tag!==6?(u=Ea(f,m.mode,v),u.return=m,u):(u=s(u,f),u.return=m,u)}function c(m,u,f,v){var x=f.type;return x===at?p(m,u,f.props.children,v,f.key):u!==null&&(u.elementType===x||typeof x=="object"&&x!==null&&x.$$typeof===yn&&go(x)===u.type)?(v=s(u,f.props),v.ref=Dt(m,u,f),v.return=m,v):(v=ss(f.type,f.key,f.props,null,m.mode,v),v.ref=Dt(m,u,f),v.return=m,v)}function d(m,u,f,v){return u===null||u.tag!==4||u.stateNode.containerInfo!==f.containerInfo||u.stateNode.implementation!==f.implementation?(u=_a(f,m.mode,v),u.return=m,u):(u=s(u,f.children||[]),u.return=m,u)}function p(m,u,f,v,x){return u===null||u.tag!==7?(u=Un(f,m.mode,v,x),u.return=m,u):(u=s(u,f),u.return=m,u)}function h(m,u,f){if(typeof u=="string"&&u!==""||typeof u=="number")return u=Ea(""+u,m.mode,f),u.return=m,u;if(typeof u=="object"&&u!==null){switch(u.$$typeof){case Tr:return f=ss(u.type,u.key,u.props,null,m.mode,f),f.ref=Dt(m,null,u),f.return=m,f;case st:return u=_a(u,m.mode,f),u.return=m,u;case yn:var v=u._init;return h(m,v(u._payload),f)}if(Ht(u)||Mt(u))return u=Un(u,m.mode,f,null),u.return=m,u;Br(m,u)}return null}function g(m,u,f,v){var x=u!==null?u.key:null;if(typeof f=="string"&&f!==""||typeof f=="number")return x!==null?null:o(m,u,""+f,v);if(typeof f=="object"&&f!==null){switch(f.$$typeof){case Tr:return f.key===x?c(m,u,f,v):null;case st:return f.key===x?d(m,u,f,v):null;case yn:return x=f._init,g(m,u,x(f._payload),v)}if(Ht(f)||Mt(f))return x!==null?null:p(m,u,f,v,null);Br(m,f)}return null}function j(m,u,f,v,x){if(typeof v=="string"&&v!==""||typeof v=="number")return m=m.get(f)||null,o(u,m,""+v,x);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Tr:return m=m.get(v.key===null?f:v.key)||null,c(u,m,v,x);case st:return m=m.get(v.key===null?f:v.key)||null,d(u,m,v,x);case yn:var S=v._init;return j(m,u,f,S(v._payload),x)}if(Ht(v)||Mt(v))return m=m.get(f)||null,p(u,m,v,x,null);Br(u,v)}return null}function w(m,u,f,v){for(var x=null,S=null,b=u,N=u=0,k=null;b!==null&&N<f.length;N++){b.index>N?(k=b,b=null):k=b.sibling;var L=g(m,b,f[N],v);if(L===null){b===null&&(b=k);break}e&&b&&L.alternate===null&&n(m,b),u=a(L,u,N),S===null?x=L:S.sibling=L,S=L,b=k}if(N===f.length)return t(m,b),J&&Rn(m,N),x;if(b===null){for(;N<f.length;N++)b=h(m,f[N],v),b!==null&&(u=a(b,u,N),S===null?x=b:S.sibling=b,S=b);return J&&Rn(m,N),x}for(b=r(m,b);N<f.length;N++)k=j(b,m,N,f[N],v),k!==null&&(e&&k.alternate!==null&&b.delete(k.key===null?N:k.key),u=a(k,u,N),S===null?x=k:S.sibling=k,S=k);return e&&b.forEach(function(A){return n(m,A)}),J&&Rn(m,N),x}function y(m,u,f,v){var x=Mt(f);if(typeof x!="function")throw Error(E(150));if(f=x.call(f),f==null)throw Error(E(151));for(var S=x=null,b=u,N=u=0,k=null,L=f.next();b!==null&&!L.done;N++,L=f.next()){b.index>N?(k=b,b=null):k=b.sibling;var A=g(m,b,L.value,v);if(A===null){b===null&&(b=k);break}e&&b&&A.alternate===null&&n(m,b),u=a(A,u,N),S===null?x=A:S.sibling=A,S=A,b=k}if(L.done)return t(m,b),J&&Rn(m,N),x;if(b===null){for(;!L.done;N++,L=f.next())L=h(m,L.value,v),L!==null&&(u=a(L,u,N),S===null?x=L:S.sibling=L,S=L);return J&&Rn(m,N),x}for(b=r(m,b);!L.done;N++,L=f.next())L=j(b,m,N,L.value,v),L!==null&&(e&&L.alternate!==null&&b.delete(L.key===null?N:L.key),u=a(L,u,N),S===null?x=L:S.sibling=L,S=L);return e&&b.forEach(function(G){return n(m,G)}),J&&Rn(m,N),x}function C(m,u,f,v){if(typeof f=="object"&&f!==null&&f.type===at&&f.key===null&&(f=f.props.children),typeof f=="object"&&f!==null){switch(f.$$typeof){case Tr:e:{for(var x=f.key,S=u;S!==null;){if(S.key===x){if(x=f.type,x===at){if(S.tag===7){t(m,S.sibling),u=s(S,f.props.children),u.return=m,m=u;break e}}else if(S.elementType===x||typeof x=="object"&&x!==null&&x.$$typeof===yn&&go(x)===S.type){t(m,S.sibling),u=s(S,f.props),u.ref=Dt(m,S,f),u.return=m,m=u;break e}t(m,S);break}else n(m,S);S=S.sibling}f.type===at?(u=Un(f.props.children,m.mode,v,f.key),u.return=m,m=u):(v=ss(f.type,f.key,f.props,null,m.mode,v),v.ref=Dt(m,u,f),v.return=m,m=v)}return l(m);case st:e:{for(S=f.key;u!==null;){if(u.key===S)if(u.tag===4&&u.stateNode.containerInfo===f.containerInfo&&u.stateNode.implementation===f.implementation){t(m,u.sibling),u=s(u,f.children||[]),u.return=m,m=u;break e}else{t(m,u);break}else n(m,u);u=u.sibling}u=_a(f,m.mode,v),u.return=m,m=u}return l(m);case yn:return S=f._init,C(m,u,S(f._payload),v)}if(Ht(f))return w(m,u,f,v);if(Mt(f))return y(m,u,f,v);Br(m,f)}return typeof f=="string"&&f!==""||typeof f=="number"?(f=""+f,u!==null&&u.tag===6?(t(m,u.sibling),u=s(u,f),u.return=m,m=u):(t(m,u),u=Ea(f,m.mode,v),u.return=m,m=u),l(m)):t(m,u)}return C}var Ct=md(!0),hd=md(!1),bs=Dn(null),Ns=null,pt=null,sl=null;function al(){sl=pt=Ns=null}function il(e){var n=bs.current;Z(bs),e._currentValue=n}function ui(e,n,t){for(;e!==null;){var r=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,r!==null&&(r.childLanes|=n)):r!==null&&(r.childLanes&n)!==n&&(r.childLanes|=n),e===t)break;e=e.return}}function yt(e,n){Ns=e,sl=pt=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&n&&(Ee=!0),e.firstContext=null)}function We(e){var n=e._currentValue;if(sl!==e)if(e={context:e,memoizedValue:n,next:null},pt===null){if(Ns===null)throw Error(E(308));pt=e,Ns.dependencies={lanes:0,firstContext:e}}else pt=pt.next=e;return n}var qn=null;function ll(e){qn===null?qn=[e]:qn.push(e)}function gd(e,n,t,r){var s=n.interleaved;return s===null?(t.next=t,ll(n)):(t.next=s.next,s.next=t),n.interleaved=t,gn(e,r)}function gn(e,n){e.lanes|=n;var t=e.alternate;for(t!==null&&(t.lanes|=n),t=e,e=e.return;e!==null;)e.childLanes|=n,t=e.alternate,t!==null&&(t.childLanes|=n),t=e,e=e.return;return t.tag===3?t.stateNode:null}var jn=!1;function ol(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function vd(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function pn(e,n){return{eventTime:e,lane:n,tag:0,payload:null,callback:null,next:null}}function zn(e,n,t){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,q&2){var s=r.pending;return s===null?n.next=n:(n.next=s.next,s.next=n),r.pending=n,gn(e,t)}return s=r.interleaved,s===null?(n.next=n,ll(r)):(n.next=s.next,s.next=n),r.interleaved=n,gn(e,t)}function Zr(e,n,t){if(n=n.updateQueue,n!==null&&(n=n.shared,(t&4194240)!==0)){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,Ui(e,t)}}function vo(e,n){var t=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,t===r)){var s=null,a=null;if(t=t.firstBaseUpdate,t!==null){do{var l={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};a===null?s=a=l:a=a.next=l,t=t.next}while(t!==null);a===null?s=a=n:a=a.next=n}else s=a=n;t={baseState:r.baseState,firstBaseUpdate:s,lastBaseUpdate:a,shared:r.shared,effects:r.effects},e.updateQueue=t;return}e=t.lastBaseUpdate,e===null?t.firstBaseUpdate=n:e.next=n,t.lastBaseUpdate=n}function Cs(e,n,t,r){var s=e.updateQueue;jn=!1;var a=s.firstBaseUpdate,l=s.lastBaseUpdate,o=s.shared.pending;if(o!==null){s.shared.pending=null;var c=o,d=c.next;c.next=null,l===null?a=d:l.next=d,l=c;var p=e.alternate;p!==null&&(p=p.updateQueue,o=p.lastBaseUpdate,o!==l&&(o===null?p.firstBaseUpdate=d:o.next=d,p.lastBaseUpdate=c))}if(a!==null){var h=s.baseState;l=0,p=d=c=null,o=a;do{var g=o.lane,j=o.eventTime;if((r&g)===g){p!==null&&(p=p.next={eventTime:j,lane:0,tag:o.tag,payload:o.payload,callback:o.callback,next:null});e:{var w=e,y=o;switch(g=n,j=t,y.tag){case 1:if(w=y.payload,typeof w=="function"){h=w.call(j,h,g);break e}h=w;break e;case 3:w.flags=w.flags&-65537|128;case 0:if(w=y.payload,g=typeof w=="function"?w.call(j,h,g):w,g==null)break e;h=te({},h,g);break e;case 2:jn=!0}}o.callback!==null&&o.lane!==0&&(e.flags|=64,g=s.effects,g===null?s.effects=[o]:g.push(o))}else j={eventTime:j,lane:g,tag:o.tag,payload:o.payload,callback:o.callback,next:null},p===null?(d=p=j,c=h):p=p.next=j,l|=g;if(o=o.next,o===null){if(o=s.shared.pending,o===null)break;g=o,o=g.next,g.next=null,s.lastBaseUpdate=g,s.shared.pending=null}}while(!0);if(p===null&&(c=h),s.baseState=c,s.firstBaseUpdate=d,s.lastBaseUpdate=p,n=s.shared.interleaved,n!==null){s=n;do l|=s.lane,s=s.next;while(s!==n)}else a===null&&(s.shared.lanes=0);Yn|=l,e.lanes=l,e.memoizedState=h}}function xo(e,n,t){if(e=n.effects,n.effects=null,e!==null)for(n=0;n<e.length;n++){var r=e[n],s=r.callback;if(s!==null){if(r.callback=null,r=t,typeof s!="function")throw Error(E(191,s));s.call(r)}}}var kr={},on=Dn(kr),mr=Dn(kr),hr=Dn(kr);function Gn(e){if(e===kr)throw Error(E(174));return e}function cl(e,n){switch(Q(hr,n),Q(mr,e),Q(on,kr),e=n.nodeType,e){case 9:case 11:n=(n=n.documentElement)?n.namespaceURI:Ga(null,"");break;default:e=e===8?n.parentNode:n,n=e.namespaceURI||null,e=e.tagName,n=Ga(n,e)}Z(on),Q(on,n)}function kt(){Z(on),Z(mr),Z(hr)}function xd(e){Gn(hr.current);var n=Gn(on.current),t=Ga(n,e.type);n!==t&&(Q(mr,e),Q(on,t))}function dl(e){mr.current===e&&(Z(on),Z(mr))}var ee=Dn(0);function ks(e){for(var n=e;n!==null;){if(n.tag===13){var t=n.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if(n.flags&128)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var ja=[];function ul(){for(var e=0;e<ja.length;e++)ja[e]._workInProgressVersionPrimary=null;ja.length=0}var Jr=xn.ReactCurrentDispatcher,Sa=xn.ReactCurrentBatchConfig,Kn=0,ne=null,le=null,de=null,Es=!1,Zt=!1,gr=0,Ep=0;function ge(){throw Error(E(321))}function fl(e,n){if(n===null)return!1;for(var t=0;t<n.length&&t<e.length;t++)if(!en(e[t],n[t]))return!1;return!0}function pl(e,n,t,r,s,a){if(Kn=a,ne=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,Jr.current=e===null||e.memoizedState===null?zp:Lp,e=t(r,s),Zt){a=0;do{if(Zt=!1,gr=0,25<=a)throw Error(E(301));a+=1,de=le=null,n.updateQueue=null,Jr.current=Mp,e=t(r,s)}while(Zt)}if(Jr.current=_s,n=le!==null&&le.next!==null,Kn=0,de=le=ne=null,Es=!1,n)throw Error(E(300));return e}function ml(){var e=gr!==0;return gr=0,e}function tn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return de===null?ne.memoizedState=de=e:de=de.next=e,de}function Ue(){if(le===null){var e=ne.alternate;e=e!==null?e.memoizedState:null}else e=le.next;var n=de===null?ne.memoizedState:de.next;if(n!==null)de=n,le=e;else{if(e===null)throw Error(E(310));le=e,e={memoizedState:le.memoizedState,baseState:le.baseState,baseQueue:le.baseQueue,queue:le.queue,next:null},de===null?ne.memoizedState=de=e:de=de.next=e}return de}function vr(e,n){return typeof n=="function"?n(e):n}function ba(e){var n=Ue(),t=n.queue;if(t===null)throw Error(E(311));t.lastRenderedReducer=e;var r=le,s=r.baseQueue,a=t.pending;if(a!==null){if(s!==null){var l=s.next;s.next=a.next,a.next=l}r.baseQueue=s=a,t.pending=null}if(s!==null){a=s.next,r=r.baseState;var o=l=null,c=null,d=a;do{var p=d.lane;if((Kn&p)===p)c!==null&&(c=c.next={lane:0,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null}),r=d.hasEagerState?d.eagerState:e(r,d.action);else{var h={lane:p,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null};c===null?(o=c=h,l=r):c=c.next=h,ne.lanes|=p,Yn|=p}d=d.next}while(d!==null&&d!==a);c===null?l=r:c.next=o,en(r,n.memoizedState)||(Ee=!0),n.memoizedState=r,n.baseState=l,n.baseQueue=c,t.lastRenderedState=r}if(e=t.interleaved,e!==null){s=e;do a=s.lane,ne.lanes|=a,Yn|=a,s=s.next;while(s!==e)}else s===null&&(t.lanes=0);return[n.memoizedState,t.dispatch]}function Na(e){var n=Ue(),t=n.queue;if(t===null)throw Error(E(311));t.lastRenderedReducer=e;var r=t.dispatch,s=t.pending,a=n.memoizedState;if(s!==null){t.pending=null;var l=s=s.next;do a=e(a,l.action),l=l.next;while(l!==s);en(a,n.memoizedState)||(Ee=!0),n.memoizedState=a,n.baseQueue===null&&(n.baseState=a),t.lastRenderedState=a}return[a,r]}function wd(){}function yd(e,n){var t=ne,r=Ue(),s=n(),a=!en(r.memoizedState,s);if(a&&(r.memoizedState=s,Ee=!0),r=r.queue,hl(bd.bind(null,t,r,e),[e]),r.getSnapshot!==n||a||de!==null&&de.memoizedState.tag&1){if(t.flags|=2048,xr(9,Sd.bind(null,t,r,s,n),void 0,null),ue===null)throw Error(E(349));Kn&30||jd(t,n,s)}return s}function jd(e,n,t){e.flags|=16384,e={getSnapshot:n,value:t},n=ne.updateQueue,n===null?(n={lastEffect:null,stores:null},ne.updateQueue=n,n.stores=[e]):(t=n.stores,t===null?n.stores=[e]:t.push(e))}function Sd(e,n,t,r){n.value=t,n.getSnapshot=r,Nd(n)&&Cd(e)}function bd(e,n,t){return t(function(){Nd(n)&&Cd(e)})}function Nd(e){var n=e.getSnapshot;e=e.value;try{var t=n();return!en(e,t)}catch{return!0}}function Cd(e){var n=gn(e,1);n!==null&&Je(n,e,1,-1)}function wo(e){var n=tn();return typeof e=="function"&&(e=e()),n.memoizedState=n.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:vr,lastRenderedState:e},n.queue=e,e=e.dispatch=Pp.bind(null,ne,e),[n.memoizedState,e]}function xr(e,n,t,r){return e={tag:e,create:n,destroy:t,deps:r,next:null},n=ne.updateQueue,n===null?(n={lastEffect:null,stores:null},ne.updateQueue=n,n.lastEffect=e.next=e):(t=n.lastEffect,t===null?n.lastEffect=e.next=e:(r=t.next,t.next=e,e.next=r,n.lastEffect=e)),e}function kd(){return Ue().memoizedState}function es(e,n,t,r){var s=tn();ne.flags|=e,s.memoizedState=xr(1|n,t,void 0,r===void 0?null:r)}function Ws(e,n,t,r){var s=Ue();r=r===void 0?null:r;var a=void 0;if(le!==null){var l=le.memoizedState;if(a=l.destroy,r!==null&&fl(r,l.deps)){s.memoizedState=xr(n,t,a,r);return}}ne.flags|=e,s.memoizedState=xr(1|n,t,a,r)}function yo(e,n){return es(8390656,8,e,n)}function hl(e,n){return Ws(2048,8,e,n)}function Ed(e,n){return Ws(4,2,e,n)}function _d(e,n){return Ws(4,4,e,n)}function Td(e,n){if(typeof n=="function")return e=e(),n(e),function(){n(null)};if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function Pd(e,n,t){return t=t!=null?t.concat([e]):null,Ws(4,4,Td.bind(null,n,e),t)}function gl(){}function zd(e,n){var t=Ue();n=n===void 0?null:n;var r=t.memoizedState;return r!==null&&n!==null&&fl(n,r[1])?r[0]:(t.memoizedState=[e,n],e)}function Ld(e,n){var t=Ue();n=n===void 0?null:n;var r=t.memoizedState;return r!==null&&n!==null&&fl(n,r[1])?r[0]:(e=e(),t.memoizedState=[e,n],e)}function Md(e,n,t){return Kn&21?(en(t,n)||(t=Dc(),ne.lanes|=t,Yn|=t,e.baseState=!0),n):(e.baseState&&(e.baseState=!1,Ee=!0),e.memoizedState=t)}function _p(e,n){var t=X;X=t!==0&&4>t?t:4,e(!0);var r=Sa.transition;Sa.transition={};try{e(!1),n()}finally{X=t,Sa.transition=r}}function Id(){return Ue().memoizedState}function Tp(e,n,t){var r=Mn(e);if(t={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null},Od(e))Ad(n,t);else if(t=gd(e,n,t,r),t!==null){var s=Se();Je(t,e,r,s),$d(t,n,r)}}function Pp(e,n,t){var r=Mn(e),s={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null};if(Od(e))Ad(n,s);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=n.lastRenderedReducer,a!==null))try{var l=n.lastRenderedState,o=a(l,t);if(s.hasEagerState=!0,s.eagerState=o,en(o,l)){var c=n.interleaved;c===null?(s.next=s,ll(n)):(s.next=c.next,c.next=s),n.interleaved=s;return}}catch{}finally{}t=gd(e,n,s,r),t!==null&&(s=Se(),Je(t,e,r,s),$d(t,n,r))}}function Od(e){var n=e.alternate;return e===ne||n!==null&&n===ne}function Ad(e,n){Zt=Es=!0;var t=e.pending;t===null?n.next=n:(n.next=t.next,t.next=n),e.pending=n}function $d(e,n,t){if(t&4194240){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,Ui(e,t)}}var _s={readContext:We,useCallback:ge,useContext:ge,useEffect:ge,useImperativeHandle:ge,useInsertionEffect:ge,useLayoutEffect:ge,useMemo:ge,useReducer:ge,useRef:ge,useState:ge,useDebugValue:ge,useDeferredValue:ge,useTransition:ge,useMutableSource:ge,useSyncExternalStore:ge,useId:ge,unstable_isNewReconciler:!1},zp={readContext:We,useCallback:function(e,n){return tn().memoizedState=[e,n===void 0?null:n],e},useContext:We,useEffect:yo,useImperativeHandle:function(e,n,t){return t=t!=null?t.concat([e]):null,es(4194308,4,Td.bind(null,n,e),t)},useLayoutEffect:function(e,n){return es(4194308,4,e,n)},useInsertionEffect:function(e,n){return es(4,2,e,n)},useMemo:function(e,n){var t=tn();return n=n===void 0?null:n,e=e(),t.memoizedState=[e,n],e},useReducer:function(e,n,t){var r=tn();return n=t!==void 0?t(n):n,r.memoizedState=r.baseState=n,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},r.queue=e,e=e.dispatch=Tp.bind(null,ne,e),[r.memoizedState,e]},useRef:function(e){var n=tn();return e={current:e},n.memoizedState=e},useState:wo,useDebugValue:gl,useDeferredValue:function(e){return tn().memoizedState=e},useTransition:function(){var e=wo(!1),n=e[0];return e=_p.bind(null,e[1]),tn().memoizedState=e,[n,e]},useMutableSource:function(){},useSyncExternalStore:function(e,n,t){var r=ne,s=tn();if(J){if(t===void 0)throw Error(E(407));t=t()}else{if(t=n(),ue===null)throw Error(E(349));Kn&30||jd(r,n,t)}s.memoizedState=t;var a={value:t,getSnapshot:n};return s.queue=a,yo(bd.bind(null,r,a,e),[e]),r.flags|=2048,xr(9,Sd.bind(null,r,a,t,n),void 0,null),t},useId:function(){var e=tn(),n=ue.identifierPrefix;if(J){var t=fn,r=un;t=(r&~(1<<32-Ze(r)-1)).toString(32)+t,n=":"+n+"R"+t,t=gr++,0<t&&(n+="H"+t.toString(32)),n+=":"}else t=Ep++,n=":"+n+"r"+t.toString(32)+":";return e.memoizedState=n},unstable_isNewReconciler:!1},Lp={readContext:We,useCallback:zd,useContext:We,useEffect:hl,useImperativeHandle:Pd,useInsertionEffect:Ed,useLayoutEffect:_d,useMemo:Ld,useReducer:ba,useRef:kd,useState:function(){return ba(vr)},useDebugValue:gl,useDeferredValue:function(e){var n=Ue();return Md(n,le.memoizedState,e)},useTransition:function(){var e=ba(vr)[0],n=Ue().memoizedState;return[e,n]},useMutableSource:wd,useSyncExternalStore:yd,useId:Id,unstable_isNewReconciler:!1},Mp={readContext:We,useCallback:zd,useContext:We,useEffect:hl,useImperativeHandle:Pd,useInsertionEffect:Ed,useLayoutEffect:_d,useMemo:Ld,useReducer:Na,useRef:kd,useState:function(){return Na(vr)},useDebugValue:gl,useDeferredValue:function(e){var n=Ue();return le===null?n.memoizedState=e:Md(n,le.memoizedState,e)},useTransition:function(){var e=Na(vr)[0],n=Ue().memoizedState;return[e,n]},useMutableSource:wd,useSyncExternalStore:yd,useId:Id,unstable_isNewReconciler:!1};function Qe(e,n){if(e&&e.defaultProps){n=te({},n),e=e.defaultProps;for(var t in e)n[t]===void 0&&(n[t]=e[t]);return n}return n}function fi(e,n,t,r){n=e.memoizedState,t=t(r,n),t=t==null?n:te({},n,t),e.memoizedState=t,e.lanes===0&&(e.updateQueue.baseState=t)}var Us={isMounted:function(e){return(e=e._reactInternals)?et(e)===e:!1},enqueueSetState:function(e,n,t){e=e._reactInternals;var r=Se(),s=Mn(e),a=pn(r,s);a.payload=n,t!=null&&(a.callback=t),n=zn(e,a,s),n!==null&&(Je(n,e,s,r),Zr(n,e,s))},enqueueReplaceState:function(e,n,t){e=e._reactInternals;var r=Se(),s=Mn(e),a=pn(r,s);a.tag=1,a.payload=n,t!=null&&(a.callback=t),n=zn(e,a,s),n!==null&&(Je(n,e,s,r),Zr(n,e,s))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var t=Se(),r=Mn(e),s=pn(t,r);s.tag=2,n!=null&&(s.callback=n),n=zn(e,s,r),n!==null&&(Je(n,e,r,t),Zr(n,e,r))}};function jo(e,n,t,r,s,a,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,a,l):n.prototype&&n.prototype.isPureReactComponent?!dr(t,r)||!dr(s,a):!0}function Dd(e,n,t){var r=!1,s=An,a=n.contextType;return typeof a=="object"&&a!==null?a=We(a):(s=Pe(n)?Xn:we.current,r=n.contextTypes,a=(r=r!=null)?bt(e,s):An),n=new n(t,a),e.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,n.updater=Us,e.stateNode=n,n._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=s,e.__reactInternalMemoizedMaskedChildContext=a),n}function So(e,n,t,r){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(t,r),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(t,r),n.state!==e&&Us.enqueueReplaceState(n,n.state,null)}function pi(e,n,t,r){var s=e.stateNode;s.props=t,s.state=e.memoizedState,s.refs={},ol(e);var a=n.contextType;typeof a=="object"&&a!==null?s.context=We(a):(a=Pe(n)?Xn:we.current,s.context=bt(e,a)),s.state=e.memoizedState,a=n.getDerivedStateFromProps,typeof a=="function"&&(fi(e,n,a,t),s.state=e.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof s.getSnapshotBeforeUpdate=="function"||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(n=s.state,typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount(),n!==s.state&&Us.enqueueReplaceState(s,s.state,null),Cs(e,t,s,r),s.state=e.memoizedState),typeof s.componentDidMount=="function"&&(e.flags|=4194308)}function Et(e,n){try{var t="",r=n;do t+=lf(r),r=r.return;while(r);var s=t}catch(a){s=`
Error generating stack: `+a.message+`
`+a.stack}return{value:e,source:n,stack:s,digest:null}}function Ca(e,n,t){return{value:e,source:null,stack:t??null,digest:n??null}}function mi(e,n){try{console.error(n.value)}catch(t){setTimeout(function(){throw t})}}var Ip=typeof WeakMap=="function"?WeakMap:Map;function Fd(e,n,t){t=pn(-1,t),t.tag=3,t.payload={element:null};var r=n.value;return t.callback=function(){Ps||(Ps=!0,Ni=r),mi(e,n)},t}function Bd(e,n,t){t=pn(-1,t),t.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var s=n.value;t.payload=function(){return r(s)},t.callback=function(){mi(e,n)}}var a=e.stateNode;return a!==null&&typeof a.componentDidCatch=="function"&&(t.callback=function(){mi(e,n),typeof r!="function"&&(Ln===null?Ln=new Set([this]):Ln.add(this));var l=n.stack;this.componentDidCatch(n.value,{componentStack:l!==null?l:""})}),t}function bo(e,n,t){var r=e.pingCache;if(r===null){r=e.pingCache=new Ip;var s=new Set;r.set(n,s)}else s=r.get(n),s===void 0&&(s=new Set,r.set(n,s));s.has(t)||(s.add(t),e=Xp.bind(null,e,n,t),n.then(e,e))}function No(e){do{var n;if((n=e.tag===13)&&(n=e.memoizedState,n=n!==null?n.dehydrated!==null:!0),n)return e;e=e.return}while(e!==null);return null}function Co(e,n,t,r,s){return e.mode&1?(e.flags|=65536,e.lanes=s,e):(e===n?e.flags|=65536:(e.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(n=pn(-1,1),n.tag=2,zn(t,n,1))),t.lanes|=1),e)}var Op=xn.ReactCurrentOwner,Ee=!1;function ye(e,n,t,r){n.child=e===null?hd(n,null,t,r):Ct(n,e.child,t,r)}function ko(e,n,t,r,s){t=t.render;var a=n.ref;return yt(n,s),r=pl(e,n,t,r,a,s),t=ml(),e!==null&&!Ee?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~s,vn(e,n,s)):(J&&t&&nl(n),n.flags|=1,ye(e,n,r,s),n.child)}function Eo(e,n,t,r,s){if(e===null){var a=t.type;return typeof a=="function"&&!Nl(a)&&a.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(n.tag=15,n.type=a,Rd(e,n,a,r,s)):(e=ss(t.type,null,r,n,n.mode,s),e.ref=n.ref,e.return=n,n.child=e)}if(a=e.child,!(e.lanes&s)){var l=a.memoizedProps;if(t=t.compare,t=t!==null?t:dr,t(l,r)&&e.ref===n.ref)return vn(e,n,s)}return n.flags|=1,e=In(a,r),e.ref=n.ref,e.return=n,n.child=e}function Rd(e,n,t,r,s){if(e!==null){var a=e.memoizedProps;if(dr(a,r)&&e.ref===n.ref)if(Ee=!1,n.pendingProps=r=a,(e.lanes&s)!==0)e.flags&131072&&(Ee=!0);else return n.lanes=e.lanes,vn(e,n,s)}return hi(e,n,t,r,s)}function Vd(e,n,t){var r=n.pendingProps,s=r.children,a=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(n.mode&1))n.memoizedState={baseLanes:0,cachePool:null,transitions:null},Q(ht,Le),Le|=t;else{if(!(t&1073741824))return e=a!==null?a.baseLanes|t:t,n.lanes=n.childLanes=1073741824,n.memoizedState={baseLanes:e,cachePool:null,transitions:null},n.updateQueue=null,Q(ht,Le),Le|=e,null;n.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=a!==null?a.baseLanes:t,Q(ht,Le),Le|=r}else a!==null?(r=a.baseLanes|t,n.memoizedState=null):r=t,Q(ht,Le),Le|=r;return ye(e,n,s,t),n.child}function Hd(e,n){var t=n.ref;(e===null&&t!==null||e!==null&&e.ref!==t)&&(n.flags|=512,n.flags|=2097152)}function hi(e,n,t,r,s){var a=Pe(t)?Xn:we.current;return a=bt(n,a),yt(n,s),t=pl(e,n,t,r,a,s),r=ml(),e!==null&&!Ee?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~s,vn(e,n,s)):(J&&r&&nl(n),n.flags|=1,ye(e,n,t,s),n.child)}function _o(e,n,t,r,s){if(Pe(t)){var a=!0;ys(n)}else a=!1;if(yt(n,s),n.stateNode===null)ns(e,n),Dd(n,t,r),pi(n,t,r,s),r=!0;else if(e===null){var l=n.stateNode,o=n.memoizedProps;l.props=o;var c=l.context,d=t.contextType;typeof d=="object"&&d!==null?d=We(d):(d=Pe(t)?Xn:we.current,d=bt(n,d));var p=t.getDerivedStateFromProps,h=typeof p=="function"||typeof l.getSnapshotBeforeUpdate=="function";h||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(o!==r||c!==d)&&So(n,l,r,d),jn=!1;var g=n.memoizedState;l.state=g,Cs(n,r,l,s),c=n.memoizedState,o!==r||g!==c||Te.current||jn?(typeof p=="function"&&(fi(n,t,p,r),c=n.memoizedState),(o=jn||jo(n,t,o,r,g,c,d))?(h||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(n.flags|=4194308)):(typeof l.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=r,n.memoizedState=c),l.props=r,l.state=c,l.context=d,r=o):(typeof l.componentDidMount=="function"&&(n.flags|=4194308),r=!1)}else{l=n.stateNode,vd(e,n),o=n.memoizedProps,d=n.type===n.elementType?o:Qe(n.type,o),l.props=d,h=n.pendingProps,g=l.context,c=t.contextType,typeof c=="object"&&c!==null?c=We(c):(c=Pe(t)?Xn:we.current,c=bt(n,c));var j=t.getDerivedStateFromProps;(p=typeof j=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(o!==h||g!==c)&&So(n,l,r,c),jn=!1,g=n.memoizedState,l.state=g,Cs(n,r,l,s);var w=n.memoizedState;o!==h||g!==w||Te.current||jn?(typeof j=="function"&&(fi(n,t,j,r),w=n.memoizedState),(d=jn||jo(n,t,d,r,g,w,c)||!1)?(p||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(r,w,c),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(r,w,c)),typeof l.componentDidUpdate=="function"&&(n.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof l.componentDidUpdate!="function"||o===e.memoizedProps&&g===e.memoizedState||(n.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||o===e.memoizedProps&&g===e.memoizedState||(n.flags|=1024),n.memoizedProps=r,n.memoizedState=w),l.props=r,l.state=w,l.context=c,r=d):(typeof l.componentDidUpdate!="function"||o===e.memoizedProps&&g===e.memoizedState||(n.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||o===e.memoizedProps&&g===e.memoizedState||(n.flags|=1024),r=!1)}return gi(e,n,t,r,a,s)}function gi(e,n,t,r,s,a){Hd(e,n);var l=(n.flags&128)!==0;if(!r&&!l)return s&&po(n,t,!1),vn(e,n,a);r=n.stateNode,Op.current=n;var o=l&&typeof t.getDerivedStateFromError!="function"?null:r.render();return n.flags|=1,e!==null&&l?(n.child=Ct(n,e.child,null,a),n.child=Ct(n,null,o,a)):ye(e,n,o,a),n.memoizedState=r.state,s&&po(n,t,!0),n.child}function qd(e){var n=e.stateNode;n.pendingContext?fo(e,n.pendingContext,n.pendingContext!==n.context):n.context&&fo(e,n.context,!1),cl(e,n.containerInfo)}function To(e,n,t,r,s){return Nt(),rl(s),n.flags|=256,ye(e,n,t,r),n.child}var vi={dehydrated:null,treeContext:null,retryLane:0};function xi(e){return{baseLanes:e,cachePool:null,transitions:null}}function Gd(e,n,t){var r=n.pendingProps,s=ee.current,a=!1,l=(n.flags&128)!==0,o;if((o=l)||(o=e!==null&&e.memoizedState===null?!1:(s&2)!==0),o?(a=!0,n.flags&=-129):(e===null||e.memoizedState!==null)&&(s|=1),Q(ee,s&1),e===null)return di(n),e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(n.mode&1?e.data==="$!"?n.lanes=8:n.lanes=1073741824:n.lanes=1,null):(l=r.children,e=r.fallback,a?(r=n.mode,a=n.child,l={mode:"hidden",children:l},!(r&1)&&a!==null?(a.childLanes=0,a.pendingProps=l):a=Ks(l,r,0,null),e=Un(e,r,t,null),a.return=n,e.return=n,a.sibling=e,n.child=a,n.child.memoizedState=xi(t),n.memoizedState=vi,e):vl(n,l));if(s=e.memoizedState,s!==null&&(o=s.dehydrated,o!==null))return Ap(e,n,l,r,o,s,t);if(a){a=r.fallback,l=n.mode,s=e.child,o=s.sibling;var c={mode:"hidden",children:r.children};return!(l&1)&&n.child!==s?(r=n.child,r.childLanes=0,r.pendingProps=c,n.deletions=null):(r=In(s,c),r.subtreeFlags=s.subtreeFlags&14680064),o!==null?a=In(o,a):(a=Un(a,l,t,null),a.flags|=2),a.return=n,r.return=n,r.sibling=a,n.child=r,r=a,a=n.child,l=e.child.memoizedState,l=l===null?xi(t):{baseLanes:l.baseLanes|t,cachePool:null,transitions:l.transitions},a.memoizedState=l,a.childLanes=e.childLanes&~t,n.memoizedState=vi,r}return a=e.child,e=a.sibling,r=In(a,{mode:"visible",children:r.children}),!(n.mode&1)&&(r.lanes=t),r.return=n,r.sibling=null,e!==null&&(t=n.deletions,t===null?(n.deletions=[e],n.flags|=16):t.push(e)),n.child=r,n.memoizedState=null,r}function vl(e,n){return n=Ks({mode:"visible",children:n},e.mode,0,null),n.return=e,e.child=n}function Rr(e,n,t,r){return r!==null&&rl(r),Ct(n,e.child,null,t),e=vl(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function Ap(e,n,t,r,s,a,l){if(t)return n.flags&256?(n.flags&=-257,r=Ca(Error(E(422))),Rr(e,n,l,r)):n.memoizedState!==null?(n.child=e.child,n.flags|=128,null):(a=r.fallback,s=n.mode,r=Ks({mode:"visible",children:r.children},s,0,null),a=Un(a,s,l,null),a.flags|=2,r.return=n,a.return=n,r.sibling=a,n.child=r,n.mode&1&&Ct(n,e.child,null,l),n.child.memoizedState=xi(l),n.memoizedState=vi,a);if(!(n.mode&1))return Rr(e,n,l,null);if(s.data==="$!"){if(r=s.nextSibling&&s.nextSibling.dataset,r)var o=r.dgst;return r=o,a=Error(E(419)),r=Ca(a,r,void 0),Rr(e,n,l,r)}if(o=(l&e.childLanes)!==0,Ee||o){if(r=ue,r!==null){switch(l&-l){case 4:s=2;break;case 16:s=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:s=32;break;case 536870912:s=268435456;break;default:s=0}s=s&(r.suspendedLanes|l)?0:s,s!==0&&s!==a.retryLane&&(a.retryLane=s,gn(e,s),Je(r,e,s,-1))}return bl(),r=Ca(Error(E(421))),Rr(e,n,l,r)}return s.data==="$?"?(n.flags|=128,n.child=e.child,n=Qp.bind(null,e),s._reactRetry=n,null):(e=a.treeContext,Ie=Pn(s.nextSibling),Oe=n,J=!0,Ye=null,e!==null&&(Re[Ve++]=un,Re[Ve++]=fn,Re[Ve++]=Qn,un=e.id,fn=e.overflow,Qn=n),n=vl(n,r.children),n.flags|=4096,n)}function Po(e,n,t){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n),ui(e.return,n,t)}function ka(e,n,t,r,s){var a=e.memoizedState;a===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:r,tail:t,tailMode:s}:(a.isBackwards=n,a.rendering=null,a.renderingStartTime=0,a.last=r,a.tail=t,a.tailMode=s)}function Wd(e,n,t){var r=n.pendingProps,s=r.revealOrder,a=r.tail;if(ye(e,n,r.children,t),r=ee.current,r&2)r=r&1|2,n.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Po(e,t,n);else if(e.tag===19)Po(e,t,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(Q(ee,r),!(n.mode&1))n.memoizedState=null;else switch(s){case"forwards":for(t=n.child,s=null;t!==null;)e=t.alternate,e!==null&&ks(e)===null&&(s=t),t=t.sibling;t=s,t===null?(s=n.child,n.child=null):(s=t.sibling,t.sibling=null),ka(n,!1,s,t,a);break;case"backwards":for(t=null,s=n.child,n.child=null;s!==null;){if(e=s.alternate,e!==null&&ks(e)===null){n.child=s;break}e=s.sibling,s.sibling=t,t=s,s=e}ka(n,!0,t,null,a);break;case"together":ka(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function ns(e,n){!(n.mode&1)&&e!==null&&(e.alternate=null,n.alternate=null,n.flags|=2)}function vn(e,n,t){if(e!==null&&(n.dependencies=e.dependencies),Yn|=n.lanes,!(t&n.childLanes))return null;if(e!==null&&n.child!==e.child)throw Error(E(153));if(n.child!==null){for(e=n.child,t=In(e,e.pendingProps),n.child=t,t.return=n;e.sibling!==null;)e=e.sibling,t=t.sibling=In(e,e.pendingProps),t.return=n;t.sibling=null}return n.child}function $p(e,n,t){switch(n.tag){case 3:qd(n),Nt();break;case 5:xd(n);break;case 1:Pe(n.type)&&ys(n);break;case 4:cl(n,n.stateNode.containerInfo);break;case 10:var r=n.type._context,s=n.memoizedProps.value;Q(bs,r._currentValue),r._currentValue=s;break;case 13:if(r=n.memoizedState,r!==null)return r.dehydrated!==null?(Q(ee,ee.current&1),n.flags|=128,null):t&n.child.childLanes?Gd(e,n,t):(Q(ee,ee.current&1),e=vn(e,n,t),e!==null?e.sibling:null);Q(ee,ee.current&1);break;case 19:if(r=(t&n.childLanes)!==0,e.flags&128){if(r)return Wd(e,n,t);n.flags|=128}if(s=n.memoizedState,s!==null&&(s.rendering=null,s.tail=null,s.lastEffect=null),Q(ee,ee.current),r)break;return null;case 22:case 23:return n.lanes=0,Vd(e,n,t)}return vn(e,n,t)}var Ud,wi,Xd,Qd;Ud=function(e,n){for(var t=n.child;t!==null;){if(t.tag===5||t.tag===6)e.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break;for(;t.sibling===null;){if(t.return===null||t.return===n)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};wi=function(){};Xd=function(e,n,t,r){var s=e.memoizedProps;if(s!==r){e=n.stateNode,Gn(on.current);var a=null;switch(t){case"input":s=Ra(e,s),r=Ra(e,r),a=[];break;case"select":s=te({},s,{value:void 0}),r=te({},r,{value:void 0}),a=[];break;case"textarea":s=qa(e,s),r=qa(e,r),a=[];break;default:typeof s.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=xs)}Wa(t,r);var l;t=null;for(d in s)if(!r.hasOwnProperty(d)&&s.hasOwnProperty(d)&&s[d]!=null)if(d==="style"){var o=s[d];for(l in o)o.hasOwnProperty(l)&&(t||(t={}),t[l]="")}else d!=="dangerouslySetInnerHTML"&&d!=="children"&&d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&d!=="autoFocus"&&(rr.hasOwnProperty(d)?a||(a=[]):(a=a||[]).push(d,null));for(d in r){var c=r[d];if(o=s!=null?s[d]:void 0,r.hasOwnProperty(d)&&c!==o&&(c!=null||o!=null))if(d==="style")if(o){for(l in o)!o.hasOwnProperty(l)||c&&c.hasOwnProperty(l)||(t||(t={}),t[l]="");for(l in c)c.hasOwnProperty(l)&&o[l]!==c[l]&&(t||(t={}),t[l]=c[l])}else t||(a||(a=[]),a.push(d,t)),t=c;else d==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,o=o?o.__html:void 0,c!=null&&o!==c&&(a=a||[]).push(d,c)):d==="children"?typeof c!="string"&&typeof c!="number"||(a=a||[]).push(d,""+c):d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&(rr.hasOwnProperty(d)?(c!=null&&d==="onScroll"&&K("scroll",e),a||o===c||(a=[])):(a=a||[]).push(d,c))}t&&(a=a||[]).push("style",t);var d=a;(n.updateQueue=d)&&(n.flags|=4)}};Qd=function(e,n,t,r){t!==r&&(n.flags|=4)};function Ft(e,n){if(!J)switch(e.tailMode){case"hidden":n=e.tail;for(var t=null;n!==null;)n.alternate!==null&&(t=n),n=n.sibling;t===null?e.tail=null:t.sibling=null;break;case"collapsed":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function ve(e){var n=e.alternate!==null&&e.alternate.child===e.child,t=0,r=0;if(n)for(var s=e.child;s!==null;)t|=s.lanes|s.childLanes,r|=s.subtreeFlags&14680064,r|=s.flags&14680064,s.return=e,s=s.sibling;else for(s=e.child;s!==null;)t|=s.lanes|s.childLanes,r|=s.subtreeFlags,r|=s.flags,s.return=e,s=s.sibling;return e.subtreeFlags|=r,e.childLanes=t,n}function Dp(e,n,t){var r=n.pendingProps;switch(tl(n),n.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ve(n),null;case 1:return Pe(n.type)&&ws(),ve(n),null;case 3:return r=n.stateNode,kt(),Z(Te),Z(we),ul(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Fr(n)?n.flags|=4:e===null||e.memoizedState.isDehydrated&&!(n.flags&256)||(n.flags|=1024,Ye!==null&&(Ei(Ye),Ye=null))),wi(e,n),ve(n),null;case 5:dl(n);var s=Gn(hr.current);if(t=n.type,e!==null&&n.stateNode!=null)Xd(e,n,t,r,s),e.ref!==n.ref&&(n.flags|=512,n.flags|=2097152);else{if(!r){if(n.stateNode===null)throw Error(E(166));return ve(n),null}if(e=Gn(on.current),Fr(n)){r=n.stateNode,t=n.type;var a=n.memoizedProps;switch(r[sn]=n,r[pr]=a,e=(n.mode&1)!==0,t){case"dialog":K("cancel",r),K("close",r);break;case"iframe":case"object":case"embed":K("load",r);break;case"video":case"audio":for(s=0;s<Gt.length;s++)K(Gt[s],r);break;case"source":K("error",r);break;case"img":case"image":case"link":K("error",r),K("load",r);break;case"details":K("toggle",r);break;case"input":Dl(r,a),K("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!a.multiple},K("invalid",r);break;case"textarea":Bl(r,a),K("invalid",r)}Wa(t,a),s=null;for(var l in a)if(a.hasOwnProperty(l)){var o=a[l];l==="children"?typeof o=="string"?r.textContent!==o&&(a.suppressHydrationWarning!==!0&&Dr(r.textContent,o,e),s=["children",o]):typeof o=="number"&&r.textContent!==""+o&&(a.suppressHydrationWarning!==!0&&Dr(r.textContent,o,e),s=["children",""+o]):rr.hasOwnProperty(l)&&o!=null&&l==="onScroll"&&K("scroll",r)}switch(t){case"input":Pr(r),Fl(r,a,!0);break;case"textarea":Pr(r),Rl(r);break;case"select":case"option":break;default:typeof a.onClick=="function"&&(r.onclick=xs)}r=s,n.updateQueue=r,r!==null&&(n.flags|=4)}else{l=s.nodeType===9?s:s.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=bc(t)),e==="http://www.w3.org/1999/xhtml"?t==="script"?(e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=l.createElement(t,{is:r.is}):(e=l.createElement(t),t==="select"&&(l=e,r.multiple?l.multiple=!0:r.size&&(l.size=r.size))):e=l.createElementNS(e,t),e[sn]=n,e[pr]=r,Ud(e,n,!1,!1),n.stateNode=e;e:{switch(l=Ua(t,r),t){case"dialog":K("cancel",e),K("close",e),s=r;break;case"iframe":case"object":case"embed":K("load",e),s=r;break;case"video":case"audio":for(s=0;s<Gt.length;s++)K(Gt[s],e);s=r;break;case"source":K("error",e),s=r;break;case"img":case"image":case"link":K("error",e),K("load",e),s=r;break;case"details":K("toggle",e),s=r;break;case"input":Dl(e,r),s=Ra(e,r),K("invalid",e);break;case"option":s=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},s=te({},r,{value:void 0}),K("invalid",e);break;case"textarea":Bl(e,r),s=qa(e,r),K("invalid",e);break;default:s=r}Wa(t,s),o=s;for(a in o)if(o.hasOwnProperty(a)){var c=o[a];a==="style"?kc(e,c):a==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&Nc(e,c)):a==="children"?typeof c=="string"?(t!=="textarea"||c!=="")&&sr(e,c):typeof c=="number"&&sr(e,""+c):a!=="suppressContentEditableWarning"&&a!=="suppressHydrationWarning"&&a!=="autoFocus"&&(rr.hasOwnProperty(a)?c!=null&&a==="onScroll"&&K("scroll",e):c!=null&&Ri(e,a,c,l))}switch(t){case"input":Pr(e),Fl(e,r,!1);break;case"textarea":Pr(e),Rl(e);break;case"option":r.value!=null&&e.setAttribute("value",""+On(r.value));break;case"select":e.multiple=!!r.multiple,a=r.value,a!=null?gt(e,!!r.multiple,a,!1):r.defaultValue!=null&&gt(e,!!r.multiple,r.defaultValue,!0);break;default:typeof s.onClick=="function"&&(e.onclick=xs)}switch(t){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(n.flags|=4)}n.ref!==null&&(n.flags|=512,n.flags|=2097152)}return ve(n),null;case 6:if(e&&n.stateNode!=null)Qd(e,n,e.memoizedProps,r);else{if(typeof r!="string"&&n.stateNode===null)throw Error(E(166));if(t=Gn(hr.current),Gn(on.current),Fr(n)){if(r=n.stateNode,t=n.memoizedProps,r[sn]=n,(a=r.nodeValue!==t)&&(e=Oe,e!==null))switch(e.tag){case 3:Dr(r.nodeValue,t,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Dr(r.nodeValue,t,(e.mode&1)!==0)}a&&(n.flags|=4)}else r=(t.nodeType===9?t:t.ownerDocument).createTextNode(r),r[sn]=n,n.stateNode=r}return ve(n),null;case 13:if(Z(ee),r=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(J&&Ie!==null&&n.mode&1&&!(n.flags&128))pd(),Nt(),n.flags|=98560,a=!1;else if(a=Fr(n),r!==null&&r.dehydrated!==null){if(e===null){if(!a)throw Error(E(318));if(a=n.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(E(317));a[sn]=n}else Nt(),!(n.flags&128)&&(n.memoizedState=null),n.flags|=4;ve(n),a=!1}else Ye!==null&&(Ei(Ye),Ye=null),a=!0;if(!a)return n.flags&65536?n:null}return n.flags&128?(n.lanes=t,n):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(n.child.flags|=8192,n.mode&1&&(e===null||ee.current&1?oe===0&&(oe=3):bl())),n.updateQueue!==null&&(n.flags|=4),ve(n),null);case 4:return kt(),wi(e,n),e===null&&ur(n.stateNode.containerInfo),ve(n),null;case 10:return il(n.type._context),ve(n),null;case 17:return Pe(n.type)&&ws(),ve(n),null;case 19:if(Z(ee),a=n.memoizedState,a===null)return ve(n),null;if(r=(n.flags&128)!==0,l=a.rendering,l===null)if(r)Ft(a,!1);else{if(oe!==0||e!==null&&e.flags&128)for(e=n.child;e!==null;){if(l=ks(e),l!==null){for(n.flags|=128,Ft(a,!1),r=l.updateQueue,r!==null&&(n.updateQueue=r,n.flags|=4),n.subtreeFlags=0,r=t,t=n.child;t!==null;)a=t,e=r,a.flags&=14680066,l=a.alternate,l===null?(a.childLanes=0,a.lanes=e,a.child=null,a.subtreeFlags=0,a.memoizedProps=null,a.memoizedState=null,a.updateQueue=null,a.dependencies=null,a.stateNode=null):(a.childLanes=l.childLanes,a.lanes=l.lanes,a.child=l.child,a.subtreeFlags=0,a.deletions=null,a.memoizedProps=l.memoizedProps,a.memoizedState=l.memoizedState,a.updateQueue=l.updateQueue,a.type=l.type,e=l.dependencies,a.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t=t.sibling;return Q(ee,ee.current&1|2),n.child}e=e.sibling}a.tail!==null&&se()>_t&&(n.flags|=128,r=!0,Ft(a,!1),n.lanes=4194304)}else{if(!r)if(e=ks(l),e!==null){if(n.flags|=128,r=!0,t=e.updateQueue,t!==null&&(n.updateQueue=t,n.flags|=4),Ft(a,!0),a.tail===null&&a.tailMode==="hidden"&&!l.alternate&&!J)return ve(n),null}else 2*se()-a.renderingStartTime>_t&&t!==1073741824&&(n.flags|=128,r=!0,Ft(a,!1),n.lanes=4194304);a.isBackwards?(l.sibling=n.child,n.child=l):(t=a.last,t!==null?t.sibling=l:n.child=l,a.last=l)}return a.tail!==null?(n=a.tail,a.rendering=n,a.tail=n.sibling,a.renderingStartTime=se(),n.sibling=null,t=ee.current,Q(ee,r?t&1|2:t&1),n):(ve(n),null);case 22:case 23:return Sl(),r=n.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(n.flags|=8192),r&&n.mode&1?Le&1073741824&&(ve(n),n.subtreeFlags&6&&(n.flags|=8192)):ve(n),null;case 24:return null;case 25:return null}throw Error(E(156,n.tag))}function Fp(e,n){switch(tl(n),n.tag){case 1:return Pe(n.type)&&ws(),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return kt(),Z(Te),Z(we),ul(),e=n.flags,e&65536&&!(e&128)?(n.flags=e&-65537|128,n):null;case 5:return dl(n),null;case 13:if(Z(ee),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(E(340));Nt()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return Z(ee),null;case 4:return kt(),null;case 10:return il(n.type._context),null;case 22:case 23:return Sl(),null;case 24:return null;default:return null}}var Vr=!1,xe=!1,Bp=typeof WeakSet=="function"?WeakSet:Set,I=null;function mt(e,n){var t=e.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(r){re(e,n,r)}else t.current=null}function yi(e,n,t){try{t()}catch(r){re(e,n,r)}}var zo=!1;function Rp(e,n){if(ri=hs,e=ed(),el(e)){if("selectionStart"in e)var t={start:e.selectionStart,end:e.selectionEnd};else e:{t=(t=e.ownerDocument)&&t.defaultView||window;var r=t.getSelection&&t.getSelection();if(r&&r.rangeCount!==0){t=r.anchorNode;var s=r.anchorOffset,a=r.focusNode;r=r.focusOffset;try{t.nodeType,a.nodeType}catch{t=null;break e}var l=0,o=-1,c=-1,d=0,p=0,h=e,g=null;n:for(;;){for(var j;h!==t||s!==0&&h.nodeType!==3||(o=l+s),h!==a||r!==0&&h.nodeType!==3||(c=l+r),h.nodeType===3&&(l+=h.nodeValue.length),(j=h.firstChild)!==null;)g=h,h=j;for(;;){if(h===e)break n;if(g===t&&++d===s&&(o=l),g===a&&++p===r&&(c=l),(j=h.nextSibling)!==null)break;h=g,g=h.parentNode}h=j}t=o===-1||c===-1?null:{start:o,end:c}}else t=null}t=t||{start:0,end:0}}else t=null;for(si={focusedElem:e,selectionRange:t},hs=!1,I=n;I!==null;)if(n=I,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,I=e;else for(;I!==null;){n=I;try{var w=n.alternate;if(n.flags&1024)switch(n.tag){case 0:case 11:case 15:break;case 1:if(w!==null){var y=w.memoizedProps,C=w.memoizedState,m=n.stateNode,u=m.getSnapshotBeforeUpdate(n.elementType===n.type?y:Qe(n.type,y),C);m.__reactInternalSnapshotBeforeUpdate=u}break;case 3:var f=n.stateNode.containerInfo;f.nodeType===1?f.textContent="":f.nodeType===9&&f.documentElement&&f.removeChild(f.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(E(163))}}catch(v){re(n,n.return,v)}if(e=n.sibling,e!==null){e.return=n.return,I=e;break}I=n.return}return w=zo,zo=!1,w}function Jt(e,n,t){var r=n.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var s=r=r.next;do{if((s.tag&e)===e){var a=s.destroy;s.destroy=void 0,a!==void 0&&yi(n,t,a)}s=s.next}while(s!==r)}}function Xs(e,n){if(n=n.updateQueue,n=n!==null?n.lastEffect:null,n!==null){var t=n=n.next;do{if((t.tag&e)===e){var r=t.create;t.destroy=r()}t=t.next}while(t!==n)}}function ji(e){var n=e.ref;if(n!==null){var t=e.stateNode;switch(e.tag){case 5:e=t;break;default:e=t}typeof n=="function"?n(e):n.current=e}}function Kd(e){var n=e.alternate;n!==null&&(e.alternate=null,Kd(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&(delete n[sn],delete n[pr],delete n[li],delete n[bp],delete n[Np])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Yd(e){return e.tag===5||e.tag===3||e.tag===4}function Lo(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Yd(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Si(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?t.nodeType===8?t.parentNode.insertBefore(e,n):t.insertBefore(e,n):(t.nodeType===8?(n=t.parentNode,n.insertBefore(e,t)):(n=t,n.appendChild(e)),t=t._reactRootContainer,t!=null||n.onclick!==null||(n.onclick=xs));else if(r!==4&&(e=e.child,e!==null))for(Si(e,n,t),e=e.sibling;e!==null;)Si(e,n,t),e=e.sibling}function bi(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?t.insertBefore(e,n):t.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(bi(e,n,t),e=e.sibling;e!==null;)bi(e,n,t),e=e.sibling}var pe=null,Ke=!1;function wn(e,n,t){for(t=t.child;t!==null;)Zd(e,n,t),t=t.sibling}function Zd(e,n,t){if(ln&&typeof ln.onCommitFiberUnmount=="function")try{ln.onCommitFiberUnmount(Bs,t)}catch{}switch(t.tag){case 5:xe||mt(t,n);case 6:var r=pe,s=Ke;pe=null,wn(e,n,t),pe=r,Ke=s,pe!==null&&(Ke?(e=pe,t=t.stateNode,e.nodeType===8?e.parentNode.removeChild(t):e.removeChild(t)):pe.removeChild(t.stateNode));break;case 18:pe!==null&&(Ke?(e=pe,t=t.stateNode,e.nodeType===8?wa(e.parentNode,t):e.nodeType===1&&wa(e,t),or(e)):wa(pe,t.stateNode));break;case 4:r=pe,s=Ke,pe=t.stateNode.containerInfo,Ke=!0,wn(e,n,t),pe=r,Ke=s;break;case 0:case 11:case 14:case 15:if(!xe&&(r=t.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){s=r=r.next;do{var a=s,l=a.destroy;a=a.tag,l!==void 0&&(a&2||a&4)&&yi(t,n,l),s=s.next}while(s!==r)}wn(e,n,t);break;case 1:if(!xe&&(mt(t,n),r=t.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=t.memoizedProps,r.state=t.memoizedState,r.componentWillUnmount()}catch(o){re(t,n,o)}wn(e,n,t);break;case 21:wn(e,n,t);break;case 22:t.mode&1?(xe=(r=xe)||t.memoizedState!==null,wn(e,n,t),xe=r):wn(e,n,t);break;default:wn(e,n,t)}}function Mo(e){var n=e.updateQueue;if(n!==null){e.updateQueue=null;var t=e.stateNode;t===null&&(t=e.stateNode=new Bp),n.forEach(function(r){var s=Kp.bind(null,e,r);t.has(r)||(t.add(r),r.then(s,s))})}}function Xe(e,n){var t=n.deletions;if(t!==null)for(var r=0;r<t.length;r++){var s=t[r];try{var a=e,l=n,o=l;e:for(;o!==null;){switch(o.tag){case 5:pe=o.stateNode,Ke=!1;break e;case 3:pe=o.stateNode.containerInfo,Ke=!0;break e;case 4:pe=o.stateNode.containerInfo,Ke=!0;break e}o=o.return}if(pe===null)throw Error(E(160));Zd(a,l,s),pe=null,Ke=!1;var c=s.alternate;c!==null&&(c.return=null),s.return=null}catch(d){re(s,n,d)}}if(n.subtreeFlags&12854)for(n=n.child;n!==null;)Jd(n,e),n=n.sibling}function Jd(e,n){var t=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Xe(n,e),nn(e),r&4){try{Jt(3,e,e.return),Xs(3,e)}catch(y){re(e,e.return,y)}try{Jt(5,e,e.return)}catch(y){re(e,e.return,y)}}break;case 1:Xe(n,e),nn(e),r&512&&t!==null&&mt(t,t.return);break;case 5:if(Xe(n,e),nn(e),r&512&&t!==null&&mt(t,t.return),e.flags&32){var s=e.stateNode;try{sr(s,"")}catch(y){re(e,e.return,y)}}if(r&4&&(s=e.stateNode,s!=null)){var a=e.memoizedProps,l=t!==null?t.memoizedProps:a,o=e.type,c=e.updateQueue;if(e.updateQueue=null,c!==null)try{o==="input"&&a.type==="radio"&&a.name!=null&&jc(s,a),Ua(o,l);var d=Ua(o,a);for(l=0;l<c.length;l+=2){var p=c[l],h=c[l+1];p==="style"?kc(s,h):p==="dangerouslySetInnerHTML"?Nc(s,h):p==="children"?sr(s,h):Ri(s,p,h,d)}switch(o){case"input":Va(s,a);break;case"textarea":Sc(s,a);break;case"select":var g=s._wrapperState.wasMultiple;s._wrapperState.wasMultiple=!!a.multiple;var j=a.value;j!=null?gt(s,!!a.multiple,j,!1):g!==!!a.multiple&&(a.defaultValue!=null?gt(s,!!a.multiple,a.defaultValue,!0):gt(s,!!a.multiple,a.multiple?[]:"",!1))}s[pr]=a}catch(y){re(e,e.return,y)}}break;case 6:if(Xe(n,e),nn(e),r&4){if(e.stateNode===null)throw Error(E(162));s=e.stateNode,a=e.memoizedProps;try{s.nodeValue=a}catch(y){re(e,e.return,y)}}break;case 3:if(Xe(n,e),nn(e),r&4&&t!==null&&t.memoizedState.isDehydrated)try{or(n.containerInfo)}catch(y){re(e,e.return,y)}break;case 4:Xe(n,e),nn(e);break;case 13:Xe(n,e),nn(e),s=e.child,s.flags&8192&&(a=s.memoizedState!==null,s.stateNode.isHidden=a,!a||s.alternate!==null&&s.alternate.memoizedState!==null||(yl=se())),r&4&&Mo(e);break;case 22:if(p=t!==null&&t.memoizedState!==null,e.mode&1?(xe=(d=xe)||p,Xe(n,e),xe=d):Xe(n,e),nn(e),r&8192){if(d=e.memoizedState!==null,(e.stateNode.isHidden=d)&&!p&&e.mode&1)for(I=e,p=e.child;p!==null;){for(h=I=p;I!==null;){switch(g=I,j=g.child,g.tag){case 0:case 11:case 14:case 15:Jt(4,g,g.return);break;case 1:mt(g,g.return);var w=g.stateNode;if(typeof w.componentWillUnmount=="function"){r=g,t=g.return;try{n=r,w.props=n.memoizedProps,w.state=n.memoizedState,w.componentWillUnmount()}catch(y){re(r,t,y)}}break;case 5:mt(g,g.return);break;case 22:if(g.memoizedState!==null){Oo(h);continue}}j!==null?(j.return=g,I=j):Oo(h)}p=p.sibling}e:for(p=null,h=e;;){if(h.tag===5){if(p===null){p=h;try{s=h.stateNode,d?(a=s.style,typeof a.setProperty=="function"?a.setProperty("display","none","important"):a.display="none"):(o=h.stateNode,c=h.memoizedProps.style,l=c!=null&&c.hasOwnProperty("display")?c.display:null,o.style.display=Cc("display",l))}catch(y){re(e,e.return,y)}}}else if(h.tag===6){if(p===null)try{h.stateNode.nodeValue=d?"":h.memoizedProps}catch(y){re(e,e.return,y)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===e)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===e)break e;for(;h.sibling===null;){if(h.return===null||h.return===e)break e;p===h&&(p=null),h=h.return}p===h&&(p=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:Xe(n,e),nn(e),r&4&&Mo(e);break;case 21:break;default:Xe(n,e),nn(e)}}function nn(e){var n=e.flags;if(n&2){try{e:{for(var t=e.return;t!==null;){if(Yd(t)){var r=t;break e}t=t.return}throw Error(E(160))}switch(r.tag){case 5:var s=r.stateNode;r.flags&32&&(sr(s,""),r.flags&=-33);var a=Lo(e);bi(e,a,s);break;case 3:case 4:var l=r.stateNode.containerInfo,o=Lo(e);Si(e,o,l);break;default:throw Error(E(161))}}catch(c){re(e,e.return,c)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function Vp(e,n,t){I=e,eu(e)}function eu(e,n,t){for(var r=(e.mode&1)!==0;I!==null;){var s=I,a=s.child;if(s.tag===22&&r){var l=s.memoizedState!==null||Vr;if(!l){var o=s.alternate,c=o!==null&&o.memoizedState!==null||xe;o=Vr;var d=xe;if(Vr=l,(xe=c)&&!d)for(I=s;I!==null;)l=I,c=l.child,l.tag===22&&l.memoizedState!==null?Ao(s):c!==null?(c.return=l,I=c):Ao(s);for(;a!==null;)I=a,eu(a),a=a.sibling;I=s,Vr=o,xe=d}Io(e)}else s.subtreeFlags&8772&&a!==null?(a.return=s,I=a):Io(e)}}function Io(e){for(;I!==null;){var n=I;if(n.flags&8772){var t=n.alternate;try{if(n.flags&8772)switch(n.tag){case 0:case 11:case 15:xe||Xs(5,n);break;case 1:var r=n.stateNode;if(n.flags&4&&!xe)if(t===null)r.componentDidMount();else{var s=n.elementType===n.type?t.memoizedProps:Qe(n.type,t.memoizedProps);r.componentDidUpdate(s,t.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var a=n.updateQueue;a!==null&&xo(n,a,r);break;case 3:var l=n.updateQueue;if(l!==null){if(t=null,n.child!==null)switch(n.child.tag){case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}xo(n,l,t)}break;case 5:var o=n.stateNode;if(t===null&&n.flags&4){t=o;var c=n.memoizedProps;switch(n.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&t.focus();break;case"img":c.src&&(t.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(n.memoizedState===null){var d=n.alternate;if(d!==null){var p=d.memoizedState;if(p!==null){var h=p.dehydrated;h!==null&&or(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(E(163))}xe||n.flags&512&&ji(n)}catch(g){re(n,n.return,g)}}if(n===e){I=null;break}if(t=n.sibling,t!==null){t.return=n.return,I=t;break}I=n.return}}function Oo(e){for(;I!==null;){var n=I;if(n===e){I=null;break}var t=n.sibling;if(t!==null){t.return=n.return,I=t;break}I=n.return}}function Ao(e){for(;I!==null;){var n=I;try{switch(n.tag){case 0:case 11:case 15:var t=n.return;try{Xs(4,n)}catch(c){re(n,t,c)}break;case 1:var r=n.stateNode;if(typeof r.componentDidMount=="function"){var s=n.return;try{r.componentDidMount()}catch(c){re(n,s,c)}}var a=n.return;try{ji(n)}catch(c){re(n,a,c)}break;case 5:var l=n.return;try{ji(n)}catch(c){re(n,l,c)}}}catch(c){re(n,n.return,c)}if(n===e){I=null;break}var o=n.sibling;if(o!==null){o.return=n.return,I=o;break}I=n.return}}var Hp=Math.ceil,Ts=xn.ReactCurrentDispatcher,xl=xn.ReactCurrentOwner,Ge=xn.ReactCurrentBatchConfig,q=0,ue=null,ie=null,me=0,Le=0,ht=Dn(0),oe=0,wr=null,Yn=0,Qs=0,wl=0,er=null,ke=null,yl=0,_t=1/0,cn=null,Ps=!1,Ni=null,Ln=null,Hr=!1,Cn=null,zs=0,nr=0,Ci=null,ts=-1,rs=0;function Se(){return q&6?se():ts!==-1?ts:ts=se()}function Mn(e){return e.mode&1?q&2&&me!==0?me&-me:kp.transition!==null?(rs===0&&(rs=Dc()),rs):(e=X,e!==0||(e=window.event,e=e===void 0?16:Gc(e.type)),e):1}function Je(e,n,t,r){if(50<nr)throw nr=0,Ci=null,Error(E(185));br(e,t,r),(!(q&2)||e!==ue)&&(e===ue&&(!(q&2)&&(Qs|=t),oe===4&&bn(e,me)),ze(e,r),t===1&&q===0&&!(n.mode&1)&&(_t=se()+500,Gs&&Fn()))}function ze(e,n){var t=e.callbackNode;kf(e,n);var r=ms(e,e===ue?me:0);if(r===0)t!==null&&ql(t),e.callbackNode=null,e.callbackPriority=0;else if(n=r&-r,e.callbackPriority!==n){if(t!=null&&ql(t),n===1)e.tag===0?Cp($o.bind(null,e)):dd($o.bind(null,e)),jp(function(){!(q&6)&&Fn()}),t=null;else{switch(Fc(r)){case 1:t=Wi;break;case 4:t=Ac;break;case 16:t=ps;break;case 536870912:t=$c;break;default:t=ps}t=ou(t,nu.bind(null,e))}e.callbackPriority=n,e.callbackNode=t}}function nu(e,n){if(ts=-1,rs=0,q&6)throw Error(E(327));var t=e.callbackNode;if(jt()&&e.callbackNode!==t)return null;var r=ms(e,e===ue?me:0);if(r===0)return null;if(r&30||r&e.expiredLanes||n)n=Ls(e,r);else{n=r;var s=q;q|=2;var a=ru();(ue!==e||me!==n)&&(cn=null,_t=se()+500,Wn(e,n));do try{Wp();break}catch(o){tu(e,o)}while(!0);al(),Ts.current=a,q=s,ie!==null?n=0:(ue=null,me=0,n=oe)}if(n!==0){if(n===2&&(s=Za(e),s!==0&&(r=s,n=ki(e,s))),n===1)throw t=wr,Wn(e,0),bn(e,r),ze(e,se()),t;if(n===6)bn(e,r);else{if(s=e.current.alternate,!(r&30)&&!qp(s)&&(n=Ls(e,r),n===2&&(a=Za(e),a!==0&&(r=a,n=ki(e,a))),n===1))throw t=wr,Wn(e,0),bn(e,r),ze(e,se()),t;switch(e.finishedWork=s,e.finishedLanes=r,n){case 0:case 1:throw Error(E(345));case 2:Vn(e,ke,cn);break;case 3:if(bn(e,r),(r&130023424)===r&&(n=yl+500-se(),10<n)){if(ms(e,0)!==0)break;if(s=e.suspendedLanes,(s&r)!==r){Se(),e.pingedLanes|=e.suspendedLanes&s;break}e.timeoutHandle=ii(Vn.bind(null,e,ke,cn),n);break}Vn(e,ke,cn);break;case 4:if(bn(e,r),(r&4194240)===r)break;for(n=e.eventTimes,s=-1;0<r;){var l=31-Ze(r);a=1<<l,l=n[l],l>s&&(s=l),r&=~a}if(r=s,r=se()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Hp(r/1960))-r,10<r){e.timeoutHandle=ii(Vn.bind(null,e,ke,cn),r);break}Vn(e,ke,cn);break;case 5:Vn(e,ke,cn);break;default:throw Error(E(329))}}}return ze(e,se()),e.callbackNode===t?nu.bind(null,e):null}function ki(e,n){var t=er;return e.current.memoizedState.isDehydrated&&(Wn(e,n).flags|=256),e=Ls(e,n),e!==2&&(n=ke,ke=t,n!==null&&Ei(n)),e}function Ei(e){ke===null?ke=e:ke.push.apply(ke,e)}function qp(e){for(var n=e;;){if(n.flags&16384){var t=n.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var r=0;r<t.length;r++){var s=t[r],a=s.getSnapshot;s=s.value;try{if(!en(a(),s))return!1}catch{return!1}}}if(t=n.child,n.subtreeFlags&16384&&t!==null)t.return=n,n=t;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function bn(e,n){for(n&=~wl,n&=~Qs,e.suspendedLanes|=n,e.pingedLanes&=~n,e=e.expirationTimes;0<n;){var t=31-Ze(n),r=1<<t;e[t]=-1,n&=~r}}function $o(e){if(q&6)throw Error(E(327));jt();var n=ms(e,0);if(!(n&1))return ze(e,se()),null;var t=Ls(e,n);if(e.tag!==0&&t===2){var r=Za(e);r!==0&&(n=r,t=ki(e,r))}if(t===1)throw t=wr,Wn(e,0),bn(e,n),ze(e,se()),t;if(t===6)throw Error(E(345));return e.finishedWork=e.current.alternate,e.finishedLanes=n,Vn(e,ke,cn),ze(e,se()),null}function jl(e,n){var t=q;q|=1;try{return e(n)}finally{q=t,q===0&&(_t=se()+500,Gs&&Fn())}}function Zn(e){Cn!==null&&Cn.tag===0&&!(q&6)&&jt();var n=q;q|=1;var t=Ge.transition,r=X;try{if(Ge.transition=null,X=1,e)return e()}finally{X=r,Ge.transition=t,q=n,!(q&6)&&Fn()}}function Sl(){Le=ht.current,Z(ht)}function Wn(e,n){e.finishedWork=null,e.finishedLanes=0;var t=e.timeoutHandle;if(t!==-1&&(e.timeoutHandle=-1,yp(t)),ie!==null)for(t=ie.return;t!==null;){var r=t;switch(tl(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&ws();break;case 3:kt(),Z(Te),Z(we),ul();break;case 5:dl(r);break;case 4:kt();break;case 13:Z(ee);break;case 19:Z(ee);break;case 10:il(r.type._context);break;case 22:case 23:Sl()}t=t.return}if(ue=e,ie=e=In(e.current,null),me=Le=n,oe=0,wr=null,wl=Qs=Yn=0,ke=er=null,qn!==null){for(n=0;n<qn.length;n++)if(t=qn[n],r=t.interleaved,r!==null){t.interleaved=null;var s=r.next,a=t.pending;if(a!==null){var l=a.next;a.next=s,r.next=l}t.pending=r}qn=null}return e}function tu(e,n){do{var t=ie;try{if(al(),Jr.current=_s,Es){for(var r=ne.memoizedState;r!==null;){var s=r.queue;s!==null&&(s.pending=null),r=r.next}Es=!1}if(Kn=0,de=le=ne=null,Zt=!1,gr=0,xl.current=null,t===null||t.return===null){oe=1,wr=n,ie=null;break}e:{var a=e,l=t.return,o=t,c=n;if(n=me,o.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var d=c,p=o,h=p.tag;if(!(p.mode&1)&&(h===0||h===11||h===15)){var g=p.alternate;g?(p.updateQueue=g.updateQueue,p.memoizedState=g.memoizedState,p.lanes=g.lanes):(p.updateQueue=null,p.memoizedState=null)}var j=No(l);if(j!==null){j.flags&=-257,Co(j,l,o,a,n),j.mode&1&&bo(a,d,n),n=j,c=d;var w=n.updateQueue;if(w===null){var y=new Set;y.add(c),n.updateQueue=y}else w.add(c);break e}else{if(!(n&1)){bo(a,d,n),bl();break e}c=Error(E(426))}}else if(J&&o.mode&1){var C=No(l);if(C!==null){!(C.flags&65536)&&(C.flags|=256),Co(C,l,o,a,n),rl(Et(c,o));break e}}a=c=Et(c,o),oe!==4&&(oe=2),er===null?er=[a]:er.push(a),a=l;do{switch(a.tag){case 3:a.flags|=65536,n&=-n,a.lanes|=n;var m=Fd(a,c,n);vo(a,m);break e;case 1:o=c;var u=a.type,f=a.stateNode;if(!(a.flags&128)&&(typeof u.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(Ln===null||!Ln.has(f)))){a.flags|=65536,n&=-n,a.lanes|=n;var v=Bd(a,o,n);vo(a,v);break e}}a=a.return}while(a!==null)}au(t)}catch(x){n=x,ie===t&&t!==null&&(ie=t=t.return);continue}break}while(!0)}function ru(){var e=Ts.current;return Ts.current=_s,e===null?_s:e}function bl(){(oe===0||oe===3||oe===2)&&(oe=4),ue===null||!(Yn&268435455)&&!(Qs&268435455)||bn(ue,me)}function Ls(e,n){var t=q;q|=2;var r=ru();(ue!==e||me!==n)&&(cn=null,Wn(e,n));do try{Gp();break}catch(s){tu(e,s)}while(!0);if(al(),q=t,Ts.current=r,ie!==null)throw Error(E(261));return ue=null,me=0,oe}function Gp(){for(;ie!==null;)su(ie)}function Wp(){for(;ie!==null&&!vf();)su(ie)}function su(e){var n=lu(e.alternate,e,Le);e.memoizedProps=e.pendingProps,n===null?au(e):ie=n,xl.current=null}function au(e){var n=e;do{var t=n.alternate;if(e=n.return,n.flags&32768){if(t=Fp(t,n),t!==null){t.flags&=32767,ie=t;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{oe=6,ie=null;return}}else if(t=Dp(t,n,Le),t!==null){ie=t;return}if(n=n.sibling,n!==null){ie=n;return}ie=n=e}while(n!==null);oe===0&&(oe=5)}function Vn(e,n,t){var r=X,s=Ge.transition;try{Ge.transition=null,X=1,Up(e,n,t,r)}finally{Ge.transition=s,X=r}return null}function Up(e,n,t,r){do jt();while(Cn!==null);if(q&6)throw Error(E(327));t=e.finishedWork;var s=e.finishedLanes;if(t===null)return null;if(e.finishedWork=null,e.finishedLanes=0,t===e.current)throw Error(E(177));e.callbackNode=null,e.callbackPriority=0;var a=t.lanes|t.childLanes;if(Ef(e,a),e===ue&&(ie=ue=null,me=0),!(t.subtreeFlags&2064)&&!(t.flags&2064)||Hr||(Hr=!0,ou(ps,function(){return jt(),null})),a=(t.flags&15990)!==0,t.subtreeFlags&15990||a){a=Ge.transition,Ge.transition=null;var l=X;X=1;var o=q;q|=4,xl.current=null,Rp(e,t),Jd(t,e),pp(si),hs=!!ri,si=ri=null,e.current=t,Vp(t),xf(),q=o,X=l,Ge.transition=a}else e.current=t;if(Hr&&(Hr=!1,Cn=e,zs=s),a=e.pendingLanes,a===0&&(Ln=null),jf(t.stateNode),ze(e,se()),n!==null)for(r=e.onRecoverableError,t=0;t<n.length;t++)s=n[t],r(s.value,{componentStack:s.stack,digest:s.digest});if(Ps)throw Ps=!1,e=Ni,Ni=null,e;return zs&1&&e.tag!==0&&jt(),a=e.pendingLanes,a&1?e===Ci?nr++:(nr=0,Ci=e):nr=0,Fn(),null}function jt(){if(Cn!==null){var e=Fc(zs),n=Ge.transition,t=X;try{if(Ge.transition=null,X=16>e?16:e,Cn===null)var r=!1;else{if(e=Cn,Cn=null,zs=0,q&6)throw Error(E(331));var s=q;for(q|=4,I=e.current;I!==null;){var a=I,l=a.child;if(I.flags&16){var o=a.deletions;if(o!==null){for(var c=0;c<o.length;c++){var d=o[c];for(I=d;I!==null;){var p=I;switch(p.tag){case 0:case 11:case 15:Jt(8,p,a)}var h=p.child;if(h!==null)h.return=p,I=h;else for(;I!==null;){p=I;var g=p.sibling,j=p.return;if(Kd(p),p===d){I=null;break}if(g!==null){g.return=j,I=g;break}I=j}}}var w=a.alternate;if(w!==null){var y=w.child;if(y!==null){w.child=null;do{var C=y.sibling;y.sibling=null,y=C}while(y!==null)}}I=a}}if(a.subtreeFlags&2064&&l!==null)l.return=a,I=l;else e:for(;I!==null;){if(a=I,a.flags&2048)switch(a.tag){case 0:case 11:case 15:Jt(9,a,a.return)}var m=a.sibling;if(m!==null){m.return=a.return,I=m;break e}I=a.return}}var u=e.current;for(I=u;I!==null;){l=I;var f=l.child;if(l.subtreeFlags&2064&&f!==null)f.return=l,I=f;else e:for(l=u;I!==null;){if(o=I,o.flags&2048)try{switch(o.tag){case 0:case 11:case 15:Xs(9,o)}}catch(x){re(o,o.return,x)}if(o===l){I=null;break e}var v=o.sibling;if(v!==null){v.return=o.return,I=v;break e}I=o.return}}if(q=s,Fn(),ln&&typeof ln.onPostCommitFiberRoot=="function")try{ln.onPostCommitFiberRoot(Bs,e)}catch{}r=!0}return r}finally{X=t,Ge.transition=n}}return!1}function Do(e,n,t){n=Et(t,n),n=Fd(e,n,1),e=zn(e,n,1),n=Se(),e!==null&&(br(e,1,n),ze(e,n))}function re(e,n,t){if(e.tag===3)Do(e,e,t);else for(;n!==null;){if(n.tag===3){Do(n,e,t);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Ln===null||!Ln.has(r))){e=Et(t,e),e=Bd(n,e,1),n=zn(n,e,1),e=Se(),n!==null&&(br(n,1,e),ze(n,e));break}}n=n.return}}function Xp(e,n,t){var r=e.pingCache;r!==null&&r.delete(n),n=Se(),e.pingedLanes|=e.suspendedLanes&t,ue===e&&(me&t)===t&&(oe===4||oe===3&&(me&130023424)===me&&500>se()-yl?Wn(e,0):wl|=t),ze(e,n)}function iu(e,n){n===0&&(e.mode&1?(n=Mr,Mr<<=1,!(Mr&130023424)&&(Mr=4194304)):n=1);var t=Se();e=gn(e,n),e!==null&&(br(e,n,t),ze(e,t))}function Qp(e){var n=e.memoizedState,t=0;n!==null&&(t=n.retryLane),iu(e,t)}function Kp(e,n){var t=0;switch(e.tag){case 13:var r=e.stateNode,s=e.memoizedState;s!==null&&(t=s.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(E(314))}r!==null&&r.delete(n),iu(e,t)}var lu;lu=function(e,n,t){if(e!==null)if(e.memoizedProps!==n.pendingProps||Te.current)Ee=!0;else{if(!(e.lanes&t)&&!(n.flags&128))return Ee=!1,$p(e,n,t);Ee=!!(e.flags&131072)}else Ee=!1,J&&n.flags&1048576&&ud(n,Ss,n.index);switch(n.lanes=0,n.tag){case 2:var r=n.type;ns(e,n),e=n.pendingProps;var s=bt(n,we.current);yt(n,t),s=pl(null,n,r,e,s,t);var a=ml();return n.flags|=1,typeof s=="object"&&s!==null&&typeof s.render=="function"&&s.$$typeof===void 0?(n.tag=1,n.memoizedState=null,n.updateQueue=null,Pe(r)?(a=!0,ys(n)):a=!1,n.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,ol(n),s.updater=Us,n.stateNode=s,s._reactInternals=n,pi(n,r,e,t),n=gi(null,n,r,!0,a,t)):(n.tag=0,J&&a&&nl(n),ye(null,n,s,t),n=n.child),n;case 16:r=n.elementType;e:{switch(ns(e,n),e=n.pendingProps,s=r._init,r=s(r._payload),n.type=r,s=n.tag=Zp(r),e=Qe(r,e),s){case 0:n=hi(null,n,r,e,t);break e;case 1:n=_o(null,n,r,e,t);break e;case 11:n=ko(null,n,r,e,t);break e;case 14:n=Eo(null,n,r,Qe(r.type,e),t);break e}throw Error(E(306,r,""))}return n;case 0:return r=n.type,s=n.pendingProps,s=n.elementType===r?s:Qe(r,s),hi(e,n,r,s,t);case 1:return r=n.type,s=n.pendingProps,s=n.elementType===r?s:Qe(r,s),_o(e,n,r,s,t);case 3:e:{if(qd(n),e===null)throw Error(E(387));r=n.pendingProps,a=n.memoizedState,s=a.element,vd(e,n),Cs(n,r,null,t);var l=n.memoizedState;if(r=l.element,a.isDehydrated)if(a={element:r,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},n.updateQueue.baseState=a,n.memoizedState=a,n.flags&256){s=Et(Error(E(423)),n),n=To(e,n,r,t,s);break e}else if(r!==s){s=Et(Error(E(424)),n),n=To(e,n,r,t,s);break e}else for(Ie=Pn(n.stateNode.containerInfo.firstChild),Oe=n,J=!0,Ye=null,t=hd(n,null,r,t),n.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(Nt(),r===s){n=vn(e,n,t);break e}ye(e,n,r,t)}n=n.child}return n;case 5:return xd(n),e===null&&di(n),r=n.type,s=n.pendingProps,a=e!==null?e.memoizedProps:null,l=s.children,ai(r,s)?l=null:a!==null&&ai(r,a)&&(n.flags|=32),Hd(e,n),ye(e,n,l,t),n.child;case 6:return e===null&&di(n),null;case 13:return Gd(e,n,t);case 4:return cl(n,n.stateNode.containerInfo),r=n.pendingProps,e===null?n.child=Ct(n,null,r,t):ye(e,n,r,t),n.child;case 11:return r=n.type,s=n.pendingProps,s=n.elementType===r?s:Qe(r,s),ko(e,n,r,s,t);case 7:return ye(e,n,n.pendingProps,t),n.child;case 8:return ye(e,n,n.pendingProps.children,t),n.child;case 12:return ye(e,n,n.pendingProps.children,t),n.child;case 10:e:{if(r=n.type._context,s=n.pendingProps,a=n.memoizedProps,l=s.value,Q(bs,r._currentValue),r._currentValue=l,a!==null)if(en(a.value,l)){if(a.children===s.children&&!Te.current){n=vn(e,n,t);break e}}else for(a=n.child,a!==null&&(a.return=n);a!==null;){var o=a.dependencies;if(o!==null){l=a.child;for(var c=o.firstContext;c!==null;){if(c.context===r){if(a.tag===1){c=pn(-1,t&-t),c.tag=2;var d=a.updateQueue;if(d!==null){d=d.shared;var p=d.pending;p===null?c.next=c:(c.next=p.next,p.next=c),d.pending=c}}a.lanes|=t,c=a.alternate,c!==null&&(c.lanes|=t),ui(a.return,t,n),o.lanes|=t;break}c=c.next}}else if(a.tag===10)l=a.type===n.type?null:a.child;else if(a.tag===18){if(l=a.return,l===null)throw Error(E(341));l.lanes|=t,o=l.alternate,o!==null&&(o.lanes|=t),ui(l,t,n),l=a.sibling}else l=a.child;if(l!==null)l.return=a;else for(l=a;l!==null;){if(l===n){l=null;break}if(a=l.sibling,a!==null){a.return=l.return,l=a;break}l=l.return}a=l}ye(e,n,s.children,t),n=n.child}return n;case 9:return s=n.type,r=n.pendingProps.children,yt(n,t),s=We(s),r=r(s),n.flags|=1,ye(e,n,r,t),n.child;case 14:return r=n.type,s=Qe(r,n.pendingProps),s=Qe(r.type,s),Eo(e,n,r,s,t);case 15:return Rd(e,n,n.type,n.pendingProps,t);case 17:return r=n.type,s=n.pendingProps,s=n.elementType===r?s:Qe(r,s),ns(e,n),n.tag=1,Pe(r)?(e=!0,ys(n)):e=!1,yt(n,t),Dd(n,r,s),pi(n,r,s,t),gi(null,n,r,!0,e,t);case 19:return Wd(e,n,t);case 22:return Vd(e,n,t)}throw Error(E(156,n.tag))};function ou(e,n){return Oc(e,n)}function Yp(e,n,t,r){this.tag=e,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function qe(e,n,t,r){return new Yp(e,n,t,r)}function Nl(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Zp(e){if(typeof e=="function")return Nl(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Hi)return 11;if(e===qi)return 14}return 2}function In(e,n){var t=e.alternate;return t===null?(t=qe(e.tag,n,e.key,e.mode),t.elementType=e.elementType,t.type=e.type,t.stateNode=e.stateNode,t.alternate=e,e.alternate=t):(t.pendingProps=n,t.type=e.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=e.flags&14680064,t.childLanes=e.childLanes,t.lanes=e.lanes,t.child=e.child,t.memoizedProps=e.memoizedProps,t.memoizedState=e.memoizedState,t.updateQueue=e.updateQueue,n=e.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},t.sibling=e.sibling,t.index=e.index,t.ref=e.ref,t}function ss(e,n,t,r,s,a){var l=2;if(r=e,typeof e=="function")Nl(e)&&(l=1);else if(typeof e=="string")l=5;else e:switch(e){case at:return Un(t.children,s,a,n);case Vi:l=8,s|=8;break;case $a:return e=qe(12,t,n,s|2),e.elementType=$a,e.lanes=a,e;case Da:return e=qe(13,t,n,s),e.elementType=Da,e.lanes=a,e;case Fa:return e=qe(19,t,n,s),e.elementType=Fa,e.lanes=a,e;case xc:return Ks(t,s,a,n);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case gc:l=10;break e;case vc:l=9;break e;case Hi:l=11;break e;case qi:l=14;break e;case yn:l=16,r=null;break e}throw Error(E(130,e==null?e:typeof e,""))}return n=qe(l,t,n,s),n.elementType=e,n.type=r,n.lanes=a,n}function Un(e,n,t,r){return e=qe(7,e,r,n),e.lanes=t,e}function Ks(e,n,t,r){return e=qe(22,e,r,n),e.elementType=xc,e.lanes=t,e.stateNode={isHidden:!1},e}function Ea(e,n,t){return e=qe(6,e,null,n),e.lanes=t,e}function _a(e,n,t){return n=qe(4,e.children!==null?e.children:[],e.key,n),n.lanes=t,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}function Jp(e,n,t,r,s){this.tag=n,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=oa(0),this.expirationTimes=oa(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=oa(0),this.identifierPrefix=r,this.onRecoverableError=s,this.mutableSourceEagerHydrationData=null}function Cl(e,n,t,r,s,a,l,o,c){return e=new Jp(e,n,t,o,c),n===1?(n=1,a===!0&&(n|=8)):n=0,a=qe(3,null,null,n),e.current=a,a.stateNode=e,a.memoizedState={element:r,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},ol(a),e}function em(e,n,t){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:st,key:r==null?null:""+r,children:e,containerInfo:n,implementation:t}}function cu(e){if(!e)return An;e=e._reactInternals;e:{if(et(e)!==e||e.tag!==1)throw Error(E(170));var n=e;do{switch(n.tag){case 3:n=n.stateNode.context;break e;case 1:if(Pe(n.type)){n=n.stateNode.__reactInternalMemoizedMergedChildContext;break e}}n=n.return}while(n!==null);throw Error(E(171))}if(e.tag===1){var t=e.type;if(Pe(t))return cd(e,t,n)}return n}function du(e,n,t,r,s,a,l,o,c){return e=Cl(t,r,!0,e,s,a,l,o,c),e.context=cu(null),t=e.current,r=Se(),s=Mn(t),a=pn(r,s),a.callback=n??null,zn(t,a,s),e.current.lanes=s,br(e,s,r),ze(e,r),e}function Ys(e,n,t,r){var s=n.current,a=Se(),l=Mn(s);return t=cu(t),n.context===null?n.context=t:n.pendingContext=t,n=pn(a,l),n.payload={element:e},r=r===void 0?null:r,r!==null&&(n.callback=r),e=zn(s,n,l),e!==null&&(Je(e,s,l,a),Zr(e,s,l)),l}function Ms(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Fo(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var t=e.retryLane;e.retryLane=t!==0&&t<n?t:n}}function kl(e,n){Fo(e,n),(e=e.alternate)&&Fo(e,n)}function nm(){return null}var uu=typeof reportError=="function"?reportError:function(e){console.error(e)};function El(e){this._internalRoot=e}Zs.prototype.render=El.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(E(409));Ys(e,n,null,null)};Zs.prototype.unmount=El.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;Zn(function(){Ys(null,e,null,null)}),n[hn]=null}};function Zs(e){this._internalRoot=e}Zs.prototype.unstable_scheduleHydration=function(e){if(e){var n=Vc();e={blockedOn:null,target:e,priority:n};for(var t=0;t<Sn.length&&n!==0&&n<Sn[t].priority;t++);Sn.splice(t,0,e),t===0&&qc(e)}};function _l(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Js(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Bo(){}function tm(e,n,t,r,s){if(s){if(typeof r=="function"){var a=r;r=function(){var d=Ms(l);a.call(d)}}var l=du(n,r,e,0,null,!1,!1,"",Bo);return e._reactRootContainer=l,e[hn]=l.current,ur(e.nodeType===8?e.parentNode:e),Zn(),l}for(;s=e.lastChild;)e.removeChild(s);if(typeof r=="function"){var o=r;r=function(){var d=Ms(c);o.call(d)}}var c=Cl(e,0,!1,null,null,!1,!1,"",Bo);return e._reactRootContainer=c,e[hn]=c.current,ur(e.nodeType===8?e.parentNode:e),Zn(function(){Ys(n,c,t,r)}),c}function ea(e,n,t,r,s){var a=t._reactRootContainer;if(a){var l=a;if(typeof s=="function"){var o=s;s=function(){var c=Ms(l);o.call(c)}}Ys(n,l,e,s)}else l=tm(t,n,e,s,r);return Ms(l)}Bc=function(e){switch(e.tag){case 3:var n=e.stateNode;if(n.current.memoizedState.isDehydrated){var t=qt(n.pendingLanes);t!==0&&(Ui(n,t|1),ze(n,se()),!(q&6)&&(_t=se()+500,Fn()))}break;case 13:Zn(function(){var r=gn(e,1);if(r!==null){var s=Se();Je(r,e,1,s)}}),kl(e,1)}};Xi=function(e){if(e.tag===13){var n=gn(e,134217728);if(n!==null){var t=Se();Je(n,e,134217728,t)}kl(e,134217728)}};Rc=function(e){if(e.tag===13){var n=Mn(e),t=gn(e,n);if(t!==null){var r=Se();Je(t,e,n,r)}kl(e,n)}};Vc=function(){return X};Hc=function(e,n){var t=X;try{return X=e,n()}finally{X=t}};Qa=function(e,n,t){switch(n){case"input":if(Va(e,t),n=t.name,t.type==="radio"&&n!=null){for(t=e;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+n)+'][type="radio"]'),n=0;n<t.length;n++){var r=t[n];if(r!==e&&r.form===e.form){var s=qs(r);if(!s)throw Error(E(90));yc(r),Va(r,s)}}}break;case"textarea":Sc(e,t);break;case"select":n=t.value,n!=null&&gt(e,!!t.multiple,n,!1)}};Tc=jl;Pc=Zn;var rm={usingClientEntryPoint:!1,Events:[Cr,ct,qs,Ec,_c,jl]},Bt={findFiberByHostInstance:Hn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},sm={bundleType:Bt.bundleType,version:Bt.version,rendererPackageName:Bt.rendererPackageName,rendererConfig:Bt.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:xn.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Mc(e),e===null?null:e.stateNode},findFiberByHostInstance:Bt.findFiberByHostInstance||nm,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var qr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!qr.isDisabled&&qr.supportsFiber)try{Bs=qr.inject(sm),ln=qr}catch{}}De.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=rm;De.createPortal=function(e,n){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!_l(n))throw Error(E(200));return em(e,n,null,t)};De.createRoot=function(e,n){if(!_l(e))throw Error(E(299));var t=!1,r="",s=uu;return n!=null&&(n.unstable_strictMode===!0&&(t=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),n=Cl(e,1,!1,null,null,t,!1,r,s),e[hn]=n.current,ur(e.nodeType===8?e.parentNode:e),new El(n)};De.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(E(188)):(e=Object.keys(e).join(","),Error(E(268,e)));return e=Mc(n),e=e===null?null:e.stateNode,e};De.flushSync=function(e){return Zn(e)};De.hydrate=function(e,n,t){if(!Js(n))throw Error(E(200));return ea(null,e,n,!0,t)};De.hydrateRoot=function(e,n,t){if(!_l(e))throw Error(E(405));var r=t!=null&&t.hydratedSources||null,s=!1,a="",l=uu;if(t!=null&&(t.unstable_strictMode===!0&&(s=!0),t.identifierPrefix!==void 0&&(a=t.identifierPrefix),t.onRecoverableError!==void 0&&(l=t.onRecoverableError)),n=du(n,null,e,1,t??null,s,!1,a,l),e[hn]=n.current,ur(e),r)for(e=0;e<r.length;e++)t=r[e],s=t._getVersion,s=s(t._source),n.mutableSourceEagerHydrationData==null?n.mutableSourceEagerHydrationData=[t,s]:n.mutableSourceEagerHydrationData.push(t,s);return new Zs(n)};De.render=function(e,n,t){if(!Js(n))throw Error(E(200));return ea(null,e,n,!1,t)};De.unmountComponentAtNode=function(e){if(!Js(e))throw Error(E(40));return e._reactRootContainer?(Zn(function(){ea(null,null,e,!1,function(){e._reactRootContainer=null,e[hn]=null})}),!0):!1};De.unstable_batchedUpdates=jl;De.unstable_renderSubtreeIntoContainer=function(e,n,t,r){if(!Js(t))throw Error(E(200));if(e==null||e._reactInternals===void 0)throw Error(E(38));return ea(e,n,t,!1,r)};De.version="18.3.1-next-f1338f8080-20240426";function fu(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(fu)}catch(e){console.error(e)}}fu(),fc.exports=De;var am=fc.exports,pu,Ro=am;pu=Ro.createRoot,Ro.hydrateRoot;function im(){return i.jsxs("footer",{className:"footer",children:[`
 
 `,i.jsxs("div",{className:"cols",children:[`
 `,i.jsxs("div",{className:"container flex justify-between f-wrap",children:[`
 `,i.jsxs("div",{className:"box box-logo",children:[`
 `,i.jsxs("a",{className:"logo",href:"/",title:"BateForte Materiais para Construção",children:[`
 `,i.jsx("img",{src:"/assets/img-dc6278851a6d.webp",alt:"BateForte Materiais para Construção",width:"auto",height:"auto"}),`
 `]}),` 
 `,i.jsxs("div",{className:"box-logo-socials",children:[`
 `,`
 `,i.jsxs("a",{href:"https://www.instagram.com/bateforte_/",title:"Instagram","aria-label":"Instagram",target:"_blank",rel:"noopener noreferrer",children:[`
 `,i.jsx("i",{className:"icon icon-instagram v-align-middle"}),`
 `]}),`
 `,`
 `]}),`
 `]}),`
 `,i.jsxs("div",{className:"box box-categories",children:[`
 `,i.jsxs("div",{className:"title",children:["Categorias ",i.jsx("i",{className:"icon icon-arrow-down sf-hidden"})]}),`
 `,i.jsxs("div",{className:"overflow",children:[`
 `,i.jsxs("ul",{className:"list",children:[i.jsx("li",{children:i.jsx("a",{href:"#/categoria/cimento",title:"Cimento",children:"Cimento"})}),i.jsx("li",{children:i.jsx("a",{href:"#/categoria/areia",title:"Areia",children:"Areia"})}),i.jsx("li",{children:i.jsx("a",{href:"#/categoria/ferro",title:"Ferro",children:"Ferro"})}),i.jsx("li",{children:i.jsx("a",{href:"#/categoria/eletrica",title:"Elétrica",children:"Elétrica"})}),i.jsx("li",{children:i.jsx("a",{href:"#/categoria/hidraulica",title:"Hidráulica",children:"Hidráulica"})}),i.jsx("li",{children:i.jsx("a",{href:"#/categoria/telhas",title:"Telhas",children:"Telhas"})}),i.jsx("li",{children:i.jsx("a",{href:"#/categoria/tintas",title:"Tintas",children:"Tintas"})})]}),`
 `]}),`
 `]}),`
 `,i.jsxs("div",{className:"box box-pages",children:[`
 `,i.jsxs("div",{className:"title",children:["Institucional ",i.jsx("i",{className:"icon icon-arrow-down sf-hidden"})]}),`
 `,i.jsxs("div",{className:"overflow",children:[`
 `,i.jsxs("ul",{className:"list",children:[`
 `,i.jsxs("li",{children:[`
 `,i.jsx("a",{href:"https://www.atlantanet.com.br/empresa",title:"Empresa",children:"Empresa"}),`
 `]}),`
 `,i.jsxs("li",{children:[`
 `,i.jsx("a",{href:"https://www.atlantanet.com.br/seguranca",title:"Seguranca",children:"Seguranca"}),`
 `]}),`
 `,i.jsxs("li",{children:[`
 `,i.jsx("a",{href:"https://www.atlantanet.com.br/privacidade",title:"Política de Privacidade",children:"Política de Privacidade"}),`
 `]}),`
 `,i.jsxs("li",{children:[`
 `,i.jsx("a",{href:"https://www.atlantanet.com.br/relatorio-de-transparencia",title:"Relatório de Transparência",children:"Relatório de Transparência"}),`
 `]}),`
 `,i.jsxs("li",{children:[`
 `,i.jsx("a",{href:"https://wa.me/5511974659658",target:"_blank",rel:"noopener noreferrer",title:"Fale Conosco",children:"Fale Conosco"}),`
 `]}),`
 `]}),`
 `]}),`
 `]}),`
 `,i.jsxs("div",{className:"box box-infos",children:[`
 `,i.jsxs("div",{className:"title",children:["Atendimento ",i.jsx("i",{className:"icon icon-arrow-down sf-hidden"})]}),`
 `,i.jsxs("div",{className:"overflow",children:[`
 `,i.jsxs("ul",{className:"list",children:[i.jsxs("li",{children:[`
 `,i.jsxs("a",{href:"https://api.whatsapp.com/send/?phone=5511974659658",title:"WhatsApp",target:"_blank",rel:"noopener noreferrer",children:[`
 `,i.jsx("i",{className:"icon icon-whatsapp v-align-middle"}),`
 `,i.jsx("span",{children:"(11) 97465-9658"}),`
 `]}),`
 `]}),`
 `,i.jsxs("li",{className:"hour",children:[`
 `,i.jsxs("div",{className:"flex",children:[`
 `,i.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",children:i.jsx("path",{d:"M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm5.848 12.459c.202.038.202.333.001.372-1.907.361-6.045 1.111-6.547 1.111-.719 0-1.301-.582-1.301-1.301 0-.512.77-5.447 1.125-7.445.034-.192.312-.181.343.014l.985 6.238 5.394 1.011z"})}),`
 `,i.jsx("span",{children:"Horário de Atendimento:"}),`
 `]}),`
 `,i.jsxs("div",{className:"text",children:[`
 `,i.jsx("span",{children:"Segunda a Sexta 08:00 as 18:00 e Sábado das 08:00 as 13:00"}),`
 `]}),`
 `]}),`
 `,i.jsxs("li",{children:[`
 `,i.jsxs("a",{href:"https://www.google.com/maps/search/?api=1&query=Av.+Quinze+de+Novembro,+1764+-+Centro,+Itapecerica+da+Serra+-+SP,+06850-100",target:"_blank",rel:"noopener noreferrer",title:"Endereço",children:[`
 `,i.jsx("i",{className:"icon icon-place v-align-middle"}),`
 `,i.jsx("span",{children:"Av. Quinze de Novembro, 1764 - Centro, Itapecerica da Serra - SP, 06850-100"}),`
 `]}),`
 `]})]}),`
 `]}),`
 `]}),`
 
 `,i.jsxs("div",{className:"box payments-seals",children:[`
 `,i.jsxs("div",{className:"overflow",children:[` 
 `,i.jsx("div",{className:"title",children:"Formas de pagamento"}),`
 `,i.jsxs("ul",{className:"payment-list flex f-wrap",children:[`
 `,i.jsxs("li",{className:"payment-form",children:[`
 `,i.jsx("img",{className:"lazyload loaded",alt:"Cartão Visa - Vindi",src:"/assets/img-4fcfba1d7119.webp","data-ll-status":"loaded"}),`
 `]}),`
 `,i.jsxs("li",{className:"payment-form",children:[`
 `,i.jsx("img",{className:"lazyload loaded",alt:"Cartão MasterCard - Vindi",src:"/assets/img-78fa4608ee50.webp","data-ll-status":"loaded"}),`
 `]}),`
 `,i.jsxs("li",{className:"payment-form",children:[`
 `,i.jsx("img",{className:"lazyload loaded",alt:"Cartão Elo - Vindi",src:"/assets/img-b517fb144ccd.webp","data-ll-status":"loaded"}),`
 `]}),`
 
 `,i.jsxs("li",{className:"payment-form",children:[`
 `,i.jsx("img",{className:"lazyload loaded",alt:"pix",src:"/assets/img-80e133f18f9d.webp","data-ll-status":"loaded"}),`
 `]}),`
 
`]})," "]}),`
 
 `,i.jsxs("div",{className:"overflow",children:[` 
 `,i.jsx("div",{className:"title",children:"Selos de Segurança"}),`
 `,i.jsxs("ul",{className:"security-seals flex f-wrap",children:[` 
 
 `,i.jsxs("li",{className:"google-seal",children:[`
 `,i.jsxs("a",{href:"#",target:"_blank",rel:"noreferrer noopener",title:"Google Safe Browsing",children:[`
 `,i.jsx("span",{className:"icon icon-shield vertical-align"}),`
 `,i.jsx("span",{className:"icon icon-google vertical-align"}),`
 `]}),`
 `]}),`
 
 
 `,i.jsxs("li",{className:"loja-protegida-seal",children:[`
 `,i.jsxs("center",{children:[`
 `,i.jsxs("a",{href:"#",target:"_blank",rel:"noopener",children:[`
 `,i.jsx("img",{src:"/assets/img-2077ee59210f.gif",alt:"Loja Protegida",title:"Loja Protegida",border:"0"}),`
 `]}),`
 `]}),`
 `]}),`
 
 
 
 
 
 
 
 
 
 
 
 `]}),`
 `]}),`
 `]}),`
 `]}),`
 `]}),`
 
 
 
 `,i.jsxs("div",{className:"copy",children:[`
 `,i.jsxs("div",{className:"container flex align-center flex-column",children:[`
 
 
 `,i.jsx("div",{className:"text",children:`BateForte Materiais para Construção - © Todos os direitos reservados.
CNPJ: 32.603.413/0001-57`}),`
 
 `,i.jsxs("div",{className:"tray",children:[`
 `,i.jsxs("div",{className:"credits-partner sama-partner",children:[`
 `,i.jsxs("span",{children:[`Desenvolvimento 
 `,i.jsxs("a",{href:"https://www.instagram.com/dunamis_mkt/",rel:"noopener noreferrer",target:"_blank",children:[`
 `,i.jsx("img",{src:"/assets/logo-dunamis.png",width:"42",height:"42",alt:"Dunamis",className:"bf-logo-dunamis"}),`
 `]}),`
 `]}),`
 `]}),`
 
 `,`
 `]}),`
 `]}),`
 `]}),`
`]})}const O=e=>n=>{n&&(n.style.cssText=e)};function lm(){return i.jsxs("header",{className:"header",children:[`
 `,i.jsxs("div",{className:"bg header-desktop",children:[`
 `,i.jsxs("div",{className:"line flex align-center justify-between container",children:[`
 `,i.jsx("div",{className:"header-menu sf-hidden","data-toggle":"overlay-shadow","data-target":"#menu-mobile",children:`
 
 
 
 `}),`
 `,i.jsxs("a",{className:"logo",href:"/",title:"BateForte Materiais para Construção",children:[`
 `,i.jsx("img",{src:"/assets/img-fb172cf24605.webp",alt:"BateForte Materiais para Construção",width:"222",height:"36"}),`
 
 `,i.jsx("h1",{className:"title-store sf-hidden",children:"BateForte Materiais para Construção"}),`
 `]}),` 
 `,i.jsxs("div",{className:"search-move",children:[`
 `,i.jsxs("form",{className:"header-search-wrapper",action:"/loja/busca.php?loja=1018104","data-search":"suggestion",children:[`
 
 `,i.jsx("input",{className:"input-search",placeholder:"O que deseja procurar?",spellCheck:"false",autoComplete:"off","data-input":"suggestion",type:"text",name:"palavra_busca",defaultValue:""}),`
 `,i.jsxs("button",{className:"button-search","aria-label":"Buscar",children:[`
 `,i.jsx("i",{className:"icon icon-search"}),`
 `]}),`
 `,i.jsx("div",{className:"suggestion is-hidden sf-hidden","data-container":"suggestion"}),`
`]})," "]}),`
 `,i.jsxs("div",{className:"header-right",children:[`
 `,i.jsxs("div",{className:"contact flex align-center",children:[`
 `,i.jsxs("i",{className:"contact-icon icon",children:[`
 `,i.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",className:"svg-icon",viewBox:"0 0 1024 1024",version:"1.1",fill:"currentColor",children:[i.jsx("path",{d:"M512 947.106726c-239.915162 0-435.106726-195.191564-435.106726-435.106726S272.084838 76.893274 512 76.893274s435.106726 195.191564 435.106726 435.106726S751.915162 947.106726 512 947.106726zM512 111.019513c-221.1027 0-400.980487 179.877787-400.980487 400.980487s179.877787 400.980487 400.980487 400.980487 400.980487-179.877787 400.980487-400.980487S733.1027 111.019513 512 111.019513z"}),i.jsx("path",{d:"M481.170854 613.473089l-1.192152-15.524578c-3.577478-32.265868 7.178493-67.549465 37.060057-103.417371 26.888394-31.682583 41.829687-54.993498 41.829687-81.858356 0-30.513968-19.126616-50.808176-56.769958-51.392484-21.51092 0-45.430702 7.153934-60.370972 18.49319l-14.332427-37.619806c19.709901-14.356986 53.776787-23.944342 85.459371-23.944342 68.74264 0 99.816357 42.437531 99.816357 87.892793 0 40.636512-22.703071 69.934792-51.392484 104.001679-26.304086 31.049157-35.867906 57.378825-34.066887 87.843674l0.584308 15.524578L481.170854 613.472066zM468.030579 697.18056c0-22.143323 14.941294-37.667901 35.867906-37.667901 20.902052 0 35.259038 15.524578 35.259038 37.667901 0 20.926612-13.748119 37.035498-35.867906 37.035498C482.363006 734.216058 468.030579 718.107171 468.030579 697.18056z"})]}),`
 `]}),`
 `,i.jsxs("div",{className:"contact-text",children:[`
 `,i.jsx("span",{children:"Precisa de Ajuda?"}),`
 `,i.jsx("strong",{children:"Atendimento"}),`
 `]}),`
 `,i.jsxs("div",{className:"header-wrapper flex align-center",children:[`
 `,i.jsxs("div",{className:"header-wrapper__content flex flex-column",children:[`
 `,i.jsxs("div",{className:"header-wrapper__item header-wrapper__item--whatsapp",children:[`
 `,i.jsxs("a",{href:"https://api.whatsapp.com/send?phone=5511974659658",title:"WhatsApp: (11) 97465-9658",target:"_blank",children:[`
 `,i.jsxs("span",{children:[i.jsx("i",{className:"icon icon-whatsapp v-align-middle"}),"Whatsapp:"]}),`
 (11) 97465-9658
 `]}),`
 `]}),`
 
 
 
 `,`
 `,`
 `]}),`
 `]}),`
 `]}),`
 
 `,`
 
 `,i.jsxs("a",{className:"cart-toggle",href:"javascript:void(0)",title:"Carrinho",children:[`
 `,i.jsxs("i",{className:"icon v-align-middle",children:[`
 `,i.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",role:"presentation","aria-hidden":"true",viewBox:"0 0 17 20",fill:"currentColor",children:[`
 `,i.jsx("path",{d:"M0 20V4.995l1 .006v.015l4-.002V4c0-2.484 1.274-4 3.5-4C10.518 0 12 1.48 12 4v1.012l5-.003v.985H1V19h15V6.005h1V20H0zM11 4.49C11 2.267 10.507 1 8.5 1 6.5 1 6 2.27 6 4.49V5l5-.002V4.49z",fill:"currentColor"}),`
 `]}),`
 `]}),`
 `,i.jsx("span",{className:"cart-quantity","data-cart":"amount",children:"0"}),`
 `]}),`
 `]}),`
 `]}),`
 
`,i.jsxs("nav",{className:"nav",children:[`
 `,i.jsxs("div",{className:"container",children:[`
 `,i.jsxs("ul",{className:"list flex justify-between",children:[`
 
 `,i.jsxs("li",{className:"first-level sub all-categories",children:[`
 `,i.jsxs("span",{role:"button",title:"Todas Categorias",children:[`
 `,i.jsxs("div",{className:"category-image",children:[`
 `,i.jsx("img",{className:"lazyload loaded",alt:"Todos os Departamentos",src:"/assets/img-a0da2ec22bf6.webp","data-ll-status":"loaded"}),`
 `]}),`
 `,i.jsx("div",{className:"name",children:`
 Todas Categorias
 `}),`
 `]}),`
 `,i.jsxs("ul",{className:"sub-list second-level",children:[` 
 `,i.jsxs("ul",{className:"wrapper-categories",children:[`
 
 `,i.jsxs("li",{className:"sub",children:[`
 `,i.jsxs("a",{href:"#/categoria/cimento",title:"Cimento",children:[`
 `,i.jsx("div",{className:"category-image",children:i.jsx("img",{src:"/assets/bf-icon-cimento.svg",alt:"Cimento",width:"20",height:"20"})}),`
 Cimento
 `]}),`
 `]}),`
 
 `,i.jsxs("li",{className:"sub",children:[`
 `,i.jsxs("a",{href:"#/categoria/areia",title:"Areia",children:[`
 `,i.jsx("div",{className:"category-image",children:i.jsx("img",{src:"/assets/bf-icon-areia.svg",alt:"Areia",width:"20",height:"20"})}),`
 Areia
 `]}),`
 `]}),`
 
 `,i.jsxs("li",{className:"sub",children:[`
 `,i.jsxs("a",{href:"#/categoria/ferro",title:"Ferro",children:[`
 `,i.jsx("div",{className:"category-image",children:i.jsx("img",{src:"/assets/bf-icon-ferro.svg",alt:"Ferro",width:"20",height:"20"})}),`
 Ferro
 `]}),`
 `]}),`
 
 `,i.jsxs("li",{className:"sub",children:[`
 `,i.jsxs("a",{href:"#/categoria/eletrica",title:"Elétrica",children:[`
 `,i.jsx("div",{className:"category-image",children:i.jsx("img",{src:"/assets/bf-icon-eletrica.svg",alt:"Elétrica",width:"20",height:"20"})}),`
 Elétrica
 `]}),`
 `]}),`
 
 `,i.jsxs("li",{className:"sub",children:[`
 `,i.jsxs("a",{href:"#/categoria/hidraulica",title:"Hidráulica",children:[`
 `,i.jsx("div",{className:"category-image",children:i.jsx("img",{src:"/assets/bf-icon-hidraulica.svg",alt:"Hidráulica",width:"20",height:"20"})}),`
 Hidráulica
 `]}),`
 `]}),`
 
 `,i.jsxs("li",{className:"sub",children:[`
 `,i.jsxs("a",{href:"#/categoria/telhas",title:"Telhas",children:[`
 `,i.jsx("div",{className:"category-image",children:i.jsx("img",{src:"/assets/bf-icon-telhas.svg",alt:"Telhas",width:"20",height:"20"})}),`
 Telhas
 `]}),`
 `]}),`
 
 `,i.jsxs("li",{className:"sub",children:[`
 `,i.jsxs("a",{href:"#/categoria/tintas",title:"Tintas",children:[`
 `,i.jsx("div",{className:"category-image",children:i.jsx("img",{src:"/assets/bf-icon-tintas.svg",alt:"Tintas",width:"20",height:"20"})}),`
 Tintas
 `]}),`
 `]}),`
 
 `]}),`
 `]}),` 
 
 `]}),`
 
 `,i.jsxs("li",{className:"first-level",children:[`
 `,i.jsxs("a",{href:"#/categoria/cimento",title:"Cimento",children:[`
 `,i.jsx("div",{className:"category-image",children:i.jsx("img",{alt:"Cimento",src:"/assets/bf-icon-cimento.svg",width:"20",height:"20"})}),`
 `,i.jsx("div",{className:"name",children:`
 Cimento
 `}),`
 `]}),`
 `]}),`
 
 `,i.jsxs("li",{className:"first-level",children:[`
 `,i.jsxs("a",{href:"#/categoria/areia",title:"Areia",children:[`
 `,i.jsx("div",{className:"category-image",children:i.jsx("img",{alt:"Areia",src:"/assets/bf-icon-areia.svg",width:"20",height:"20"})}),`
 `,i.jsx("div",{className:"name",children:`
 Areia
 `}),`
 `]}),`
 `]}),`
 
 `,i.jsxs("li",{className:"first-level",children:[`
 `,i.jsxs("a",{href:"#/categoria/ferro",title:"Ferro",children:[`
 `,i.jsx("div",{className:"category-image",children:i.jsx("img",{alt:"Ferro",src:"/assets/bf-icon-ferro.svg",width:"20",height:"20"})}),`
 `,i.jsx("div",{className:"name",children:`
 Ferro
 `}),`
 `]}),`
 `]}),`
 
 `,i.jsxs("li",{className:"first-level",children:[`
 `,i.jsxs("a",{href:"#/categoria/eletrica",title:"Elétrica",children:[`
 `,i.jsx("div",{className:"category-image",children:i.jsx("img",{alt:"Elétrica",src:"/assets/bf-icon-eletrica.svg",width:"20",height:"20"})}),`
 `,i.jsx("div",{className:"name",children:`
 Elétrica
 `}),`
 `]}),`
 `]}),`
 
 `,i.jsxs("li",{className:"first-level",children:[`
 `,i.jsxs("a",{href:"#/categoria/hidraulica",title:"Hidráulica",children:[`
 `,i.jsx("div",{className:"category-image",children:i.jsx("img",{alt:"Hidráulica",src:"/assets/bf-icon-hidraulica.svg",width:"20",height:"20"})}),`
 `,i.jsx("div",{className:"name",children:`
 Hidráulica
 `}),`
 `]}),`
 `]}),`
 
 `,`
 
 `,i.jsxs("li",{className:"first-level",children:[`
 `,i.jsxs("a",{href:"#/categoria/telhas",title:"Telhas",children:[`
 `,i.jsx("div",{className:"category-image",children:i.jsx("img",{alt:"Telhas",src:"/assets/bf-icon-telhas.svg",width:"20",height:"20"})}),`
 `,i.jsx("div",{className:"name",children:`
 Telhas
 `}),`
 `]}),`
 `]}),`
 
 `,i.jsxs("li",{className:"first-level",children:[`
 `,i.jsxs("a",{href:"#/categoria/tintas",title:"Tintas",children:[`
 `,i.jsx("div",{className:"category-image",children:i.jsx("img",{alt:"Tintas",src:"/assets/bf-icon-tintas.svg",width:"20",height:"20"})}),`
 `,i.jsx("div",{className:"name",children:`
 Tintas
 `}),`
 `]}),`
 `]}),`
 
 `,i.jsxs("li",{className:"first-level categoria-offer",children:[`
 `,i.jsxs("a",{href:"https://www.atlantanet.com.br/cimento",title:"Ofertas Especiais",children:[`
 `,i.jsxs("div",{className:"category-image",children:[`
 `,i.jsx("img",{className:"lazyload loaded",alt:"Todas Categorias",src:"/assets/img-4715e72ca586.webp","data-ll-status":"loaded"}),`
 `]}),`
 `,i.jsx("div",{className:"name",children:`
 Ofertas Especiais
 `}),`
 `]}),`
 `,i.jsxs("ul",{className:"sub-list second-level",children:[`
 `,i.jsxs("div",{className:"categoria-offer__products active-slide","data-countdown":"12/05/2025 00:00:00",children:[`
 
 `,i.jsxs("div",{className:"section-showcase show",children:[`
 `,i.jsxs("div",{className:"container",children:[`
 `,i.jsxs("div",{className:"list-product swiper-container swiper-container-initialized swiper-container-horizontal swiper-container-pointer-events",children:[`
 `,i.jsx("div",{className:"list-product__items flex swiper-wrapper","aria-live":"polite"}),`
 `,i.jsxs("div",{className:"prev swiper-button-disabled",tabIndex:"-1",role:"button","aria-label":"Previous slide","aria-controls":"swiper-wrapper-5fb9360d3a4a801e","aria-disabled":"true",children:[`
 `,i.jsx("i",{className:"icon icon-arrow-left"}),`
 `]}),`
 `,i.jsxs("div",{className:"next",tabIndex:"0",role:"button","aria-label":"Next slide","aria-controls":"swiper-wrapper-5fb9360d3a4a801e","aria-disabled":"false",children:[`
 `,i.jsx("i",{className:"icon icon-arrow-right"}),`
 `]}),` 
 `,i.jsx("span",{className:"swiper-notification sf-hidden","aria-live":"assertive","aria-atomic":"true"})]}),`
 
 `]}),`
 `]}),`
 `]}),`
 `,i.jsxs("div",{className:"categoria-offer__descriptions",children:[`
 `,i.jsxs("div",{className:"categoria-offer__title",children:[`
 `,i.jsx("strong",{children:"Ofertas Imperdíveis!"}),`
 `,i.jsx("span",{children:"Corre que já está acabandooo!!"}),`
 `]}),`
 `,i.jsx("ul",{className:"categoria-offer__countdown"}),`
 `,i.jsx("a",{href:"https://www.atlantanet.com.br/cimento",className:"categoria-offer__button",children:"Ver todos os produtos"}),`
 `]}),`
 `]}),`
 `]}),`
 
 `]}),`
 `]}),`
`]})," "]}),`
 
 `,i.jsx("div",{className:"bg header-mobile search-closed",children:i.jsxs("div",{className:"bf-header-mobile",children:[i.jsxs("button",{type:"button",className:"bf-burger","aria-label":"Abrir menu","data-toggle":"overlay-shadow","data-target":"#menu-mobile",children:[i.jsx("span",{}),i.jsx("span",{}),i.jsx("span",{})]}),i.jsx("a",{className:"bf-logo-mobile",href:"/",title:"BateForte Materiais para Construção",children:i.jsx("img",{src:"/assets/img-fb172cf24605.webp",alt:"BateForte Materiais para Construção",width:"178",height:"29"})}),i.jsxs("a",{className:"cart-toggle",href:"javascript:void(0)",title:"Carrinho",children:[i.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",role:"presentation","aria-hidden":"true",viewBox:"0 0 17 20",fill:"currentColor",children:i.jsx("path",{d:"M0 20V4.995l1 .006v.015l4-.002V4c0-2.484 1.274-4 3.5-4C10.518 0 12 1.48 12 4v1.012l5-.003v.985H1V19h15V6.005h1V20H0zM11 4.49C11 2.267 10.507 1 8.5 1 6.5 1 6 2.27 6 4.49V5l5-.002V4.49z",fill:"currentColor"})}),i.jsx("span",{className:"cart-quantity","data-cart":"amount",children:"0"})]})]})}),`
`]})}function om(){return i.jsxs("div",{className:"banner-home","data-settings":'{"stopOnHover":false,"timer":null,"isMobile":false,"speed":null,"isLoop":true,"isAutoplay":true}',children:[`
 
 `,i.jsxs("div",{className:"item",children:[`
 
 
 
 `,i.jsxs("span",{className:"item-image","aria-label":"Banner",ref:O("--padding:55.121%"),children:[`
 `,i.jsx("img",{src:"/assets/img-hero-bf.webp",alt:"BateForte — tudo que sua construção precisa está aqui",width:"1689",height:"931"}),`
 `]}),`
 `]}),`
 `]})}function cm(){return i.jsxs("div",{className:"banners-grid banners-showcase group-native-banners",children:[`
 `,i.jsxs("div",{className:"container flex f-wrap justify-between",children:[`
 `,i.jsxs("div",{className:"item",children:[`
 
 
 
 `,i.jsxs("a",{href:"https://www.atlantanet.com.br/loja/clic.php?loja=1018104&banner=188",className:"item-image","aria-label":"Banner",ref:O("--padding:47.244094488189%"),children:[`
 `,i.jsx("img",{loading:"lazy",src:"/assets/img-3c1edb97cf21.webp",alt:"Banner",width:"635",height:"300"}),`
 `]}),`
 `]}),`
 `,i.jsxs("div",{className:"item",children:[`
 
 
 
 `,i.jsxs("a",{href:"https://www.atlantanet.com.br/loja/clic.php?loja=1018104&banner=190",className:"item-image","aria-label":"Banner",ref:O("--padding:47.244094488189%"),children:[`
 `,i.jsx("img",{loading:"lazy",src:"/assets/img-c5ecad89b44e.webp",alt:"Banner",width:"635",height:"300"}),`
 `]}),`
 `]}),`
 `]}),`
 `]})}function dm(){return i.jsxs("div",{className:"banners-grid banners-showcase group-native-banners",children:[`
 `,i.jsxs("div",{className:"container flex f-wrap justify-between",children:[`
 `,i.jsxs("div",{className:"item",children:[`
 
 
 
 `,i.jsxs("a",{href:"https://www.atlantanet.com.br/loja/clic.php?loja=1018104&banner=192",className:"item-image","aria-label":"Banner",ref:O("--padding:15.625%"),children:[`
 `,i.jsx("img",{loading:"lazy",src:"/assets/img-ab0d38a2f174.webp",alt:"Banner",width:"1920",height:"300"}),`
 `]}),`
 `]}),`
 `]}),`
 `]})}function um(){return null}function fm(){return i.jsx("div",{className:"banners-grid banners-showcase md-none group-native-banners sf-hidden",children:`
 
 `})}function pm(){return i.jsxs("div",{className:"brands-custom active-slide",children:[`
 `,i.jsxs("div",{className:"brands-custom__title section-header",children:[`
 `,i.jsx("h2",{className:"title-section",children:`Escolha pela Marca
 `})]}),`
 `,i.jsxs("div",{className:"container swiper-container swiper-container-initialized swiper-container-horizontal swiper-container-pointer-events",children:[`
 `,i.jsxs("div",{className:"brands-custom__content swiper-wrapper",id:"swiper-wrapper-f8de9e1099f082abe","aria-live":"off",ref:O("transition-duration:0ms;transform:translate3d(0px,0px,0px)"),children:[`
 
 
 
 
 `,i.jsxs("div",{className:"item swiper-slide swiper-slide-active",role:"group","aria-label":"1 / 8",ref:O("width:151.667px;margin-right:60px"),children:[`
 `,i.jsxs("a",{href:"https://www.atlantanet.com.br/brasilit","aria-label":"Brasilit",children:[`
 `,i.jsxs("div",{className:"brands-custom__image",children:[`
 `,i.jsx("img",{loading:"lazy",className:"lazyload loaded",alt:"Brasilit",src:"/assets/img-feae831e8be8.webp","data-ll-status":"loaded"}),`
 `]}),`
 `]}),`
 `]}),`
 
 
 
 
 `,i.jsxs("div",{className:"item swiper-slide swiper-slide-next",role:"group","aria-label":"2 / 8",ref:O("width:151.667px;margin-right:60px"),children:[`
 `,i.jsxs("a",{href:"https://www.atlantanet.com.br/fortlev","aria-label":"Fortlev",children:[`
 `,i.jsxs("div",{className:"brands-custom__image",children:[`
 `,i.jsx("img",{loading:"lazy",className:"lazyload loaded",alt:"Fortlev",src:"/assets/img-7acd537651c2.webp","data-ll-status":"loaded"}),`
 `]}),`
 `]}),`
 `]}),`
 
 
 
 
 `,i.jsxs("div",{className:"item swiper-slide",role:"group","aria-label":"3 / 8",ref:O("width:151.667px;margin-right:60px"),children:[`
 `,i.jsxs("a",{href:"https://www.atlantanet.com.br/csn","aria-label":"CSN",children:[`
 `,i.jsxs("div",{className:"brands-custom__image",children:[`
 `,i.jsx("img",{loading:"lazy",className:"lazyload loaded",alt:"CSN",src:"/assets/img-75c30ec81aa4.webp","data-ll-status":"loaded"}),`
 `]}),`
 `]}),`
 `]}),`
 
 
 
 
 `,i.jsxs("div",{className:"item swiper-slide",role:"group","aria-label":"4 / 8",ref:O("width:151.667px;margin-right:60px"),children:[`
 `,i.jsxs("a",{href:"https://www.atlantanet.com.br/quartzolit","aria-label":"Quartzolit",children:[`
 `,i.jsxs("div",{className:"brands-custom__image",children:[`
 `,i.jsx("img",{loading:"lazy",className:"lazyload loaded",alt:"Quartzolit",src:"/assets/img-b9a7051c7a86.webp","data-ll-status":"loaded"}),`
 `]}),`
 `]}),`
 `]}),`
 
 
 
 
 `,i.jsxs("div",{className:"item swiper-slide",role:"group","aria-label":"5 / 8",ref:O("width:151.667px;margin-right:60px"),children:[`
 `,i.jsxs("a",{href:"https://www.atlantanet.com.br/suvinil","aria-label":"Suvinil",children:[`
 `,i.jsxs("div",{className:"brands-custom__image",children:[`
 `,i.jsx("img",{loading:"lazy",className:"lazyload loaded",alt:"Suvinil",src:"/assets/img-7b61390d7b7d.webp","data-ll-status":"loaded"}),`
 `]}),`
 `]}),`
 `]}),`
 
 
 
 
 `,i.jsxs("div",{className:"item swiper-slide",role:"group","aria-label":"6 / 8",ref:O("width:151.667px;margin-right:60px"),children:[`
 `,i.jsxs("a",{href:"https://www.atlantanet.com.br/tigre","aria-label":"Tigre",children:[`
 `,i.jsxs("div",{className:"brands-custom__image",children:[`
 `,i.jsx("img",{loading:"lazy",className:"lazyload loaded",alt:"Tigre",src:"/assets/img-d6da4ebad948.webp","data-ll-status":"loaded"}),`
 `]}),`
 `]}),`
 `]}),`
 
 
 
 
 `,i.jsxs("div",{className:"item swiper-slide",role:"group","aria-label":"7 / 8",ref:O("width:151.667px;margin-right:60px"),children:[`
 `,i.jsxs("a",{href:"https://www.atlantanet.com.br/vedacit","aria-label":"Vedacit",children:[`
 `,i.jsxs("div",{className:"brands-custom__image",children:[`
 `,i.jsx("img",{loading:"lazy",className:"lazyload loaded",alt:"Vedacit",src:"/assets/img-12ea9f63e4e9.webp","data-ll-status":"loaded"}),`
 `]}),`
 `]}),`
 `]}),`
 
 
 
 
 `,i.jsxs("div",{className:"item swiper-slide",role:"group","aria-label":"8 / 8",ref:O("width:151.667px;margin-right:60px"),children:[`
 `,i.jsxs("a",{href:"https://www.atlantanet.com.br/votorantim","aria-label":"Votorantim",children:[`
 `,i.jsxs("div",{className:"brands-custom__image",children:[`
 `,i.jsx("img",{loading:"lazy",className:"lazyload loaded",alt:"Votorantim",src:"/assets/img-9892a82c262d.webp","data-ll-status":"loaded"}),`
 `]}),`
 `]}),`
 `]}),`
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 `]}),`
 `,i.jsxs("div",{className:"prev swiper-button-disabled",tabIndex:"-1",role:"button","aria-label":"Previous slide","aria-controls":"swiper-wrapper-f8de9e1099f082abe","aria-disabled":"true",children:[`
 `,i.jsx("i",{className:"icon icon-arrow-left"}),`
 `]}),`
 `,i.jsxs("div",{className:"next",tabIndex:"0",role:"button","aria-label":"Next slide","aria-controls":"swiper-wrapper-f8de9e1099f082abe","aria-disabled":"false",children:[`
 `,i.jsx("i",{className:"icon icon-arrow-right"}),`
 `]}),`
 `,i.jsx("div",{className:"dots swiper-pagination-clickable swiper-pagination-bullets sf-hidden"}),`
 `,i.jsx("span",{className:"swiper-notification sf-hidden","aria-live":"assertive","aria-atomic":"true"})]}),`
`]})}function mm(){return i.jsxs("div",{className:"buy-sizes not-slide-drag active-slide",children:[`
 `,i.jsxs("div",{className:"buy-sizes__title section-header",children:[`
 `,i.jsx("h2",{className:"title-section",children:"Navegue por Categorias"}),`
 `]}),`
 `,i.jsxs("div",{className:"container swiper-container swiper-container-initialized swiper-container-horizontal swiper-container-pointer-events",children:[`
 `,i.jsxs("div",{className:"buy-sizes__content swiper-wrapper",id:"swiper-wrapper-3dc22a765cde9e3f","aria-live":"off",children:[`
 
 
 
 
 `,i.jsxs("div",{className:"item swiper-slide swiper-slide-active",role:"group","aria-label":"1 / 6",ref:O("width:190px;margin-right:30px"),children:[`
 `,i.jsxs("a",{href:"https://www.atlantanet.com.br/cimento",children:[`
 `,i.jsxs("div",{className:"buy-sizes__image",children:[`
 `,i.jsx("img",{loading:"lazy",className:"lazyload loaded",alt:"Compre por Categorias - Cimentos",src:"/assets/img-04964a6b18a0.webp","data-ll-status":"loaded"}),`
 `]}),`
 `,i.jsx("div",{className:"buy-sizes__name",children:`
 Cimentos
 `}),`
 `]}),`
 `]}),`
 
 
 
 
 
 `,i.jsxs("div",{className:"item swiper-slide swiper-slide-next",role:"group","aria-label":"2 / 6",ref:O("width:190px;margin-right:30px"),children:[`
 `,i.jsxs("a",{href:"https://www.atlantanet.com.br/eletrica",children:[`
 `,i.jsxs("div",{className:"buy-sizes__image",children:[`
 `,i.jsx("img",{loading:"lazy",className:"lazyload loaded",alt:"Compre por Categorias - Elétrica",src:"/assets/img-e1cea5e6bf30.webp","data-ll-status":"loaded"}),`
 `]}),`
 `,i.jsx("div",{className:"buy-sizes__name",children:`
 Elétrica
 `}),`
 `]}),`
 `]}),`
 
 
 
 
 
 `,i.jsxs("div",{className:"item swiper-slide",role:"group","aria-label":"3 / 6",ref:O("width:190px;margin-right:30px"),children:[`
 `,i.jsxs("a",{href:"https://www.atlantanet.com.br/piso-e-revestimos",children:[`
 `,i.jsxs("div",{className:"buy-sizes__image",children:[`
 `,i.jsx("img",{loading:"lazy",className:"lazyload loaded",alt:"Compre por Categorias - Pisos",src:"/assets/img-794b40ba5a64.webp","data-ll-status":"loaded"}),`
 `]}),`
 `,i.jsx("div",{className:"buy-sizes__name",children:`
 Pisos
 `}),`
 `]}),`
 `]}),`
 
 
 
 
 
 `,i.jsxs("div",{className:"item swiper-slide",role:"group","aria-label":"4 / 6",ref:O("width:190px;margin-right:30px"),children:[`
 `,i.jsxs("a",{href:"https://www.atlantanet.com.br/telha",children:[`
 `,i.jsxs("div",{className:"buy-sizes__image",children:[`
 `,i.jsx("img",{loading:"lazy",className:"lazyload loaded",alt:"Compre por Categorias - Telhas",src:"/assets/img-1df34a704890.webp","data-ll-status":"loaded"}),`
 `]}),`
 `,i.jsx("div",{className:"buy-sizes__name",children:`
 Telhas
 `}),`
 `]}),`
 `]}),`
 
 
 
 
 
 `,i.jsxs("div",{className:"item swiper-slide",role:"group","aria-label":"5 / 6",ref:O("width:190px;margin-right:30px"),children:[`
 `,i.jsxs("a",{href:"https://www.atlantanet.com.br/tintas-eacessorios",children:[`
 `,i.jsxs("div",{className:"buy-sizes__image",children:[`
 `,i.jsx("img",{loading:"lazy",className:"lazyload loaded",alt:"Compre por Categorias - Tinta",src:"/assets/img-b8f9cd5052fe.webp","data-ll-status":"loaded"}),`
 `]}),`
 `,i.jsx("div",{className:"buy-sizes__name",children:`
 Tinta
 `}),`
 `]}),`
 `]}),`
 
 
 
 
 
 `,i.jsxs("div",{className:"item swiper-slide",role:"group","aria-label":"6 / 6",ref:O("width:190px;margin-right:30px"),children:[`
 `,i.jsxs("a",{href:"https://www.atlantanet.com.br/ferramentas",children:[`
 `,i.jsxs("div",{className:"buy-sizes__image",children:[`
 `,i.jsx("img",{loading:"lazy",className:"lazyload loaded",alt:"Compre por Categorias - Ferramentas",src:"/assets/img-79da79c22f83.webp","data-ll-status":"loaded"}),`
 `]}),`
 `,i.jsx("div",{className:"buy-sizes__name",children:`
 Ferramentas
 `}),`
 `]}),`
 `]}),`
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 `]}),`
 `,i.jsx("div",{className:"prev swiper-button-disabled sf-hidden",tabIndex:"-1",role:"button","aria-label":"Previous slide","aria-controls":"swiper-wrapper-3dc22a765cde9e3f","aria-disabled":"true",children:`
 
 `}),`
 `,i.jsx("div",{className:"next swiper-button-disabled sf-hidden",tabIndex:"-1",role:"button","aria-label":"Next slide","aria-controls":"swiper-wrapper-3dc22a765cde9e3f","aria-disabled":"true",children:`
 
 `}),`
 `,i.jsx("div",{className:"dots swiper-pagination-clickable swiper-pagination-bullets sf-hidden"}),`
 `,i.jsx("span",{className:"swiper-notification sf-hidden","aria-live":"assertive","aria-atomic":"true"})]}),`
`]})}function hm(){return i.jsxs("div",{className:"floating-whatsapp on-right",children:[`
 `,i.jsxs("a",{href:"https://wa.me/5511974659658?text=Estou%20visitando%20sua%20loja%20tenho%20uma%20d%C3%BAvida.%20Poderia%20me%20ajudar%3F",target:"_blank",rel:"noopener noreferrer","data-test":"dúvida",children:[`
 `,i.jsx("i",{className:"icon icon-whatsapp"}),`
 `]}),`
 `]})}function gm(){return i.jsxs("div",{className:"template-instagram not-slide-drag active-slide",children:[`
 `,i.jsxs("div",{className:"section-header",children:[`
 `,i.jsxs("h2",{className:"title-section",children:[`
 `,i.jsx("a",{href:"https://www.instagram.com/bateforte_/",target:"_blank",rel:"noopener noreferrer",children:`
 Siga-nos no Instagram @bateforte_
 `}),`
 `]}),`
 `]}),`
 
 
 `,i.jsxs("div",{className:"container swiper-container swiper-container-initialized swiper-container-horizontal swiper-container-pointer-events",children:[`
 `,i.jsxs("div",{className:"swiper-wrapper",id:"instafeed","aria-live":"off",children:[`
 
 
 `,i.jsxs("div",{className:"item swiper-slide swiper-slide-active",role:"group","aria-label":"1 / 4",ref:O("width:303.75px;margin-right:25px"),children:[`
 `,i.jsxs("a",{href:"https://www.instagram.com/bateforte_/",target:"_blank",rel:"noopener noreferrer",children:[`
 `,i.jsxs("div",{children:[`
 `,i.jsx("img",{loading:"lazy",className:"lazyload loaded",alt:"Postagem do Instagram",src:"/assets/img-a33168fee286.webp","data-ll-status":"loaded"}),`
 `]}),`
 `]}),`
 `]}),`
 
 
 `,i.jsxs("div",{className:"item swiper-slide swiper-slide-next",role:"group","aria-label":"2 / 4",ref:O("width:303.75px;margin-right:25px"),children:[`
 `,i.jsxs("a",{href:"https://www.instagram.com/bateforte_/",target:"_blank",rel:"noopener noreferrer",children:[`
 `,i.jsxs("div",{children:[`
 `,i.jsx("img",{loading:"lazy",className:"lazyload loaded",alt:"Postagem do Instagram",src:"/assets/img-57373056cbc2.webp","data-ll-status":"loaded"}),`
 `]}),`
 `]}),`
 `]}),`
 
 
 `,i.jsxs("div",{className:"item swiper-slide",role:"group","aria-label":"3 / 4",ref:O("width:303.75px;margin-right:25px"),children:[`
 `,i.jsxs("a",{href:"https://www.instagram.com/bateforte_/",target:"_blank",rel:"noopener noreferrer",children:[`
 `,i.jsxs("div",{children:[`
 `,i.jsx("img",{loading:"lazy",className:"lazyload loaded",alt:"Postagem do Instagram",src:"/assets/img-734b73c0449b.webp","data-ll-status":"loaded"}),`
 `]}),`
 `]}),`
 `]}),`
 
 
 `,i.jsxs("div",{className:"item swiper-slide",role:"group","aria-label":"4 / 4",ref:O("width:303.75px;margin-right:25px"),children:[`
 `,i.jsxs("a",{href:"https://www.instagram.com/bateforte_/",target:"_blank",rel:"noopener noreferrer",children:[`
 `,i.jsxs("div",{children:[`
 `,i.jsx("img",{loading:"lazy",className:"lazyload loaded",alt:"Postagem do Instagram",src:"/assets/img-d6690144e70d.webp","data-ll-status":"loaded"}),`
 `]}),`
 `]}),`
 `]}),`
 
 
 
 
 
 
 
 
 `]}),`
 `,i.jsx("div",{className:"prev swiper-button-disabled sf-hidden",tabIndex:"-1",role:"button","aria-label":"Previous slide","aria-controls":"instafeed","aria-disabled":"true",children:`
 
 `}),`
 `,i.jsx("div",{className:"next swiper-button-disabled sf-hidden",tabIndex:"-1",role:"button","aria-label":"Next slide","aria-controls":"instafeed","aria-disabled":"true",children:`
 
 `}),`
 `,i.jsx("div",{className:"dots swiper-pagination-clickable swiper-pagination-bullets sf-hidden"}),`
 `,i.jsx("span",{className:"swiper-notification sf-hidden","aria-live":"assertive","aria-atomic":"true"})]}),`
 
`]})}function vm(){const e=[{img:"/assets/img-promo-cimento.webp",href:"#/categoria/cimento",alt:"Cimento com preços exclusivos"},{img:"/assets/img-promo-impermeabilizantes.webp",href:"#/categoria/impermeabilizantes",alt:"Impermeabilizantes"},{img:"/assets/img-promo-tintas.webp",href:"#/categoria/tintas",alt:"Tintas e Acessórios"}];return i.jsxs("div",{className:"banners-grid mini-banners group-native-banners",children:[`
 `,i.jsx("div",{className:"container flex f-wrap justify-between",children:e.map(n=>i.jsx("div",{className:"item",children:i.jsx("a",{href:n.href,className:"item-image","aria-label":n.alt,ref:O("--padding:115.38461538462%"),children:i.jsx("img",{loading:"lazy",src:n.img,alt:n.alt,width:"416",height:"480"})})},n.href))}),`
 `]})}function xm(){return i.jsxs("div",{className:"template-partners",children:[`
 `,i.jsxs("div",{className:"section-header",children:[`
 `,i.jsx("h2",{className:"title-section",children:"Nossos Parceiros"}),`
 `]}),`
 `,i.jsxs("div",{className:"container",children:[`
 `,i.jsxs("picture",{className:"bf-partners-img",children:[i.jsx("source",{media:"(max-width: 768px)",srcSet:"/assets/img-parceiros-mobile.webp"}),i.jsx("img",{loading:"lazy",src:"/assets/img-parceiros-pc.webp",alt:"Marcas parceiras da BateForte",width:"1376",height:"768"})]}),`
 `,i.jsxs("div",{className:"bf-choose-brand",children:[`
 `,i.jsx("h3",{className:"bf-choose-brand__title",children:"Escolha pela marca"}),`
 `,i.jsx("ul",{className:"bf-brand-links"}),`
 `]}),`
 `]}),`
`]})}function wm(){return i.jsxs("div",{className:"block-custom custom-home-reviews show",children:[`
 `,i.jsxs("div",{className:"custom-home-reviews__title section-header",children:[`
 `,i.jsx("h2",{className:"title-section",children:"Avaliações dos Clientes"}),`
 `]}),`
 `,i.jsxs("div",{className:"container swiper-container swiper-container-initialized swiper-container-horizontal swiper-container-pointer-events",children:[`
 `,i.jsxs("div",{className:"block-custom__content swiper-wrapper",id:"swiper-wrapper-72b85b651a671016d","aria-live":"off",ref:O("transition-duration:0ms;transform:translate3d(0px,0px,0px)"),children:[`
 
 
 
 
 `,i.jsxs("div",{className:"item swiper-slide flex justify-center align-center swiper-slide-active",role:"group","aria-label":"1 / 4",ref:O("width:416.667px;margin-right:20px"),children:[`
 `,i.jsxs("div",{className:"custom-home-reviews__left",children:[`
 `,i.jsx("img",{loading:"lazy",className:"icon lazyload loaded",alt:"Ana Flávia",src:"/assets/img-417a65984d96.webp","data-ll-status":"loaded"}),`
 `]}),`
 `,i.jsxs("div",{className:"custom-home-reviews__right flex flex-column justify-center align-left",children:[`
 `,i.jsxs("strong",{children:[`
 Ana Flávia
 `,i.jsxs("span",{className:"custom-home-reviews__stars",children:[`
 `,i.jsx("span",{}),`
 `,i.jsx("span",{}),`
 `,i.jsx("span",{}),`
 `,i.jsx("span",{}),`
 `,i.jsx("span",{}),`
 `]}),`
 `]}),` 
 `,i.jsx("small",{children:i.jsx("b",{ref:O("color:green"),children:"Compra verificada"})}),`
 `,i.jsx("p",{children:`
 Recebi antes do prazo, veio tudo certinho!!!!
 `}),`
 `]}),`
 `]}),`
 
 
 
 
 `,i.jsxs("div",{className:"item swiper-slide flex justify-center align-center swiper-slide-next",role:"group","aria-label":"2 / 4",ref:O("width:416.667px;margin-right:20px"),children:[`
 `,i.jsxs("div",{className:"custom-home-reviews__left",children:[`
 `,i.jsx("img",{loading:"lazy",className:"icon lazyload loaded",alt:"Roberta Canari",src:"/assets/img-07a6590330da.webp","data-ll-status":"loaded"}),`
 `]}),`
 `,i.jsxs("div",{className:"custom-home-reviews__right flex flex-column justify-center align-left",children:[`
 `,i.jsxs("strong",{children:[`
 Roberta Canari
 `,i.jsxs("span",{className:"custom-home-reviews__stars",children:[`
 `,i.jsx("span",{}),`
 `,i.jsx("span",{}),`
 `,i.jsx("span",{}),`
 `,i.jsx("span",{}),`
 `,i.jsx("span",{}),`
 `]}),`
 `]}),` 
 `,i.jsx("small",{children:i.jsx("b",{ref:O("color:green"),children:"Compra verificada"})}),`
 `,i.jsx("p",{children:`
 Atendimento com o vendedor foi perfeito!
 `}),`
 `]}),`
 `]}),`
 
 
 
 
 `,i.jsxs("div",{className:"item swiper-slide flex justify-center align-center",role:"group","aria-label":"3 / 4",ref:O("width:416.667px;margin-right:20px"),children:[`
 `,i.jsxs("div",{className:"custom-home-reviews__left",children:[`
 `,i.jsx("img",{loading:"lazy",className:"icon lazyload loaded",alt:"Kelly Bitton",src:"/assets/img-8f5d66864203.webp","data-ll-status":"loaded"}),`
 `]}),`
 `,i.jsxs("div",{className:"custom-home-reviews__right flex flex-column justify-center align-left",children:[`
 `,i.jsxs("strong",{children:[`
 Kelly Bitton
 `,i.jsxs("span",{className:"custom-home-reviews__stars",children:[`
 `,i.jsx("span",{}),`
 `,i.jsx("span",{}),`
 `,i.jsx("span",{}),`
 `,i.jsx("span",{}),`
 `,i.jsx("span",{}),`
 `]}),`
 `]}),` 
 `,i.jsx("small",{children:i.jsx("b",{ref:O("color:green"),children:"Compra verificada"})}),`
 `,i.jsx("p",{children:`
 Toda vez que penso em reforma, já ligo para a BateForte.
 `}),`
 `]}),`
 `]}),`
 
 
 
 
 `,i.jsxs("div",{className:"item swiper-slide flex justify-center align-center",role:"group","aria-label":"4 / 4",ref:O("width:416.667px;margin-right:20px"),children:[`
 `,i.jsxs("div",{className:"custom-home-reviews__left",children:[`
 `,i.jsx("img",{loading:"lazy",className:"icon lazyload loaded",alt:"Henrique Soares",src:"/assets/img-02f90b3981f6.webp","data-ll-status":"loaded"}),`
 `]}),`
 `,i.jsxs("div",{className:"custom-home-reviews__right flex flex-column justify-center align-left",children:[`
 `,i.jsxs("strong",{children:[`
 Henrique Soares
 `,i.jsxs("span",{className:"custom-home-reviews__stars",children:[`
 `,i.jsx("span",{}),`
 `,i.jsx("span",{}),`
 `,i.jsx("span",{}),`
 `,i.jsx("span",{}),`
 `,i.jsx("span",{}),`
 `]}),`
 `]}),` 
 `,i.jsx("small",{children:i.jsx("b",{ref:O("color:green"),children:"Compra verificada"})}),`
 `,i.jsx("p",{children:`
 Não posso comprar os itens da reforma se não for na BateForte.
 `}),`
 `]}),`
 `]}),`
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 `]}),`
 `,i.jsxs("div",{className:"prev swiper-button-disabled",tabIndex:"-1",role:"button","aria-label":"Previous slide","aria-controls":"swiper-wrapper-72b85b651a671016d","aria-disabled":"true",children:[`
 `,i.jsx("i",{className:"icon icon-arrow-left"}),`
 `]}),`
 `,i.jsxs("div",{className:"next",tabIndex:"0",role:"button","aria-label":"Next slide","aria-controls":"swiper-wrapper-72b85b651a671016d","aria-disabled":"false",children:[`
 `,i.jsx("i",{className:"icon icon-arrow-right"}),`
 `]}),`
 `,i.jsx("div",{className:"dots swiper-pagination-clickable swiper-pagination-bullets sf-hidden"}),`
 `,i.jsx("span",{className:"swiper-notification sf-hidden","aria-live":"assertive","aria-atomic":"true"})]}),`
`]})}function ym(){return i.jsxs("div",{className:"section-showcase not-slide-drag show","data-category":"5",type:"all_products",order:"quantity_sold",children:[`
 `,i.jsxs("div",{className:"container",children:[`
 `,i.jsxs("div",{className:"section-header",children:[`
 `,i.jsx("h2",{className:"title-section",children:"Cimento"}),`
 `]}),`
 `,i.jsxs("div",{className:"list-product flex f-wrap swiper-container swiper-container-initialized swiper-container-horizontal swiper-container-pointer-events",children:[`
 `,i.jsxs("div",{className:"list-product__items swiper-wrapper",id:"swiper-wrapper-c270dc42ad2c363f","aria-live":"off",children:[`
 
 `,i.jsxs("div",{className:"item swiper-slide swiper-slide-active",role:"group","aria-label":"1 / 4",ref:O("width:320px"),children:[`
 
 
 
`,i.jsxs("div",{className:"product upon_request has-fast-shopping",id:"product-1726670685","product-ref":"27447",children:[`
 
 `,i.jsxs("div",{className:"image",children:[`
 
 `,i.jsxs("a",{href:"https://www.atlantanet.com.br/material-de-construcao/cimento-cp-iv-rs-32-50kg-caue",className:"space-image",children:[`
 `,i.jsx("img",{loading:"lazy",className:"lazyload loaded",src:"/assets/img-3a2f50f59724.svg",alt:"Cimento Exato CP IV 50KG - Cauê","data-ll-status":"loaded",ref:O("background-blend-mode:normal!important;background-clip:content-box!important;background-position:50% 50%!important;background-color:rgba(0,0,0,0)!important;background-image:var(--sf-img-43)!important;background-size:contain!important;background-origin:content-box!important;background-repeat:no-repeat!important")}),`
 
 `]}),`
 
 
 
 
 
 `,i.jsx("div",{className:"product-tags tags-custom","data-tags-count":"0",children:`
 
 
 
 
 `}),`
 
 `]}),`
 `,i.jsxs("a",{className:"product-info",href:"https://www.atlantanet.com.br/material-de-construcao/cimento-cp-iv-rs-32-50kg-caue",children:[`
 `,i.jsxs("div",{className:"wrapper-product-name",children:[`
 `,i.jsx("h3",{className:"product-name",children:`
 Cimento Exato CP IV 50KG - Cauê
 `}),`
 `]}),`
 `,i.jsx("div",{className:"product-price",children:`
 
 
 `}),`
 
 `]}),`
 
 
 
 
 `,i.jsx("div",{className:"actions",children:`
 `}),`
 
 
 `,i.jsxs("div",{className:"buy-whatsapp buy-whatsapp--list-product",children:[`
 `,i.jsxs("a",{href:"https://api.whatsapp.com/send?phone=5511974659658&text=Ol%C3%83%C2%A1,%20gostei%20deste%20produto:%20Nome:%20Cimento%20Exato%20CP%20IV%2050KG%20-%20Cau%C3%83%C2%AA%20|%20Ref:%2027447",target:"_blank",children:[`
 `,i.jsx("i",{className:"icon icon-whatsapp v-align-middle"}),`
 Comprar pelo Whats
 `]}),`
 `]}),`
 
`]})," "]}),`
 `,i.jsxs("div",{className:"item swiper-slide swiper-slide-next",role:"group","aria-label":"2 / 4",ref:O("width:320px"),children:[`
 
 
 
`,i.jsxs("div",{className:"product upon_request has-fast-shopping",id:"product-1640657925","product-ref":"13998",children:[`
 
 `,i.jsxs("div",{className:"image",children:[`
 
 `,i.jsxs("a",{href:"https://www.atlantanet.com.br/material-de-construcao/cimento-estrutura-40kg-cpv-caue",className:"space-image",children:[`
 `,i.jsx("img",{loading:"lazy",className:"lazyload loaded",src:"/assets/img-3a2f50f59724.svg",alt:"Cimento Estrutura 40KG CP-V - Cauê","data-ll-status":"loaded",ref:O("background-blend-mode:normal!important;background-clip:content-box!important;background-position:50% 50%!important;background-color:rgba(0,0,0,0)!important;background-image:var(--sf-img-46)!important;background-size:contain!important;background-origin:content-box!important;background-repeat:no-repeat!important")}),`
 
 `]}),`
 
 
 
 
 
 `,i.jsx("div",{className:"product-tags tags-custom","data-tags-count":"0",children:`
 
 
 
 
 `}),`
 
 `]}),`
 `,i.jsxs("a",{className:"product-info",href:"https://www.atlantanet.com.br/material-de-construcao/cimento-estrutura-40kg-cpv-caue",children:[`
 `,i.jsxs("div",{className:"wrapper-product-name",children:[`
 `,i.jsx("h3",{className:"product-name",children:`
 Cimento Estrutura 40KG CP-V - Cauê
 `}),`
 `]}),`
 `,i.jsx("div",{className:"product-price",children:`
 
 
 `}),`
 
 `]}),`
 
 
 
 
 `,i.jsx("div",{className:"actions",children:`
 `}),`
 
 
 `,i.jsxs("div",{className:"buy-whatsapp buy-whatsapp--list-product",children:[`
 `,i.jsxs("a",{href:"https://api.whatsapp.com/send?phone=5511974659658&text=Ol%C3%83%C2%A1,%20gostei%20deste%20produto:%20Nome:%20Cimento%20Estrutura%2040KG%20CP-V%20-%20Cau%C3%83%C2%AA%20|%20Ref:%2013998",target:"_blank",children:[`
 `,i.jsx("i",{className:"icon icon-whatsapp v-align-middle"}),`
 Comprar pelo Whats
 `]}),`
 `]}),`
 
`]})," "]}),`
 `,i.jsxs("div",{className:"item swiper-slide",role:"group","aria-label":"3 / 4",ref:O("width:320px"),children:[`
 
 
 
`,i.jsxs("div",{className:"product upon_request has-fast-shopping",id:"product-595912856","product-ref":"10009",children:[`
 
 `,i.jsxs("div",{className:"image",children:[`
 
 `,i.jsxs("a",{href:"https://www.atlantanet.com.br/material-de-construcao/cimento-todas-obras-50kg-cpii-votoran",className:"space-image",children:[`
 `,i.jsx("img",{loading:"lazy",className:"lazyload loaded",src:"/assets/img-3a2f50f59724.svg",alt:"Cimento Todas As Obras 50KG CPII - Votoran","data-ll-status":"loaded",ref:O("background-blend-mode:normal!important;background-clip:content-box!important;background-position:50% 50%!important;background-color:rgba(0,0,0,0)!important;background-image:var(--sf-img-44)!important;background-size:contain!important;background-origin:content-box!important;background-repeat:no-repeat!important")}),`
 
 `]}),`
 
 
 
 
 
 `,i.jsx("div",{className:"product-tags tags-custom","data-tags-count":"0",children:`
 
 
 
 
 `}),`
 
 `]}),`
 `,i.jsxs("a",{className:"product-info",href:"https://www.atlantanet.com.br/material-de-construcao/cimento-todas-obras-50kg-cpii-votoran",children:[`
 `,i.jsxs("div",{className:"wrapper-product-name",children:[`
 `,i.jsx("h3",{className:"product-name",children:`
 Cimento Todas As Obras 50KG CPII - Votoran
 `}),`
 `]}),`
 `,i.jsx("div",{className:"product-price",children:`
 
 
 `}),`
 
 `]}),`
 
 
 
 
 `,i.jsx("div",{className:"actions",children:`
 `}),`
 
 
 `,i.jsxs("div",{className:"buy-whatsapp buy-whatsapp--list-product",children:[`
 `,i.jsxs("a",{href:"https://api.whatsapp.com/send?phone=5511974659658&text=Ol%C3%83%C2%A1,%20gostei%20deste%20produto:%20Nome:%20Cimento%20Todas%20As%20Obras%2050KG%20CPII%20-%20Votoran%20|%20Ref:%2010009",target:"_blank",children:[`
 `,i.jsx("i",{className:"icon icon-whatsapp v-align-middle"}),`
 Comprar pelo Whats
 `]}),`
 `]}),`
 
`]})," "]}),`
 `,i.jsxs("div",{className:"item swiper-slide",role:"group","aria-label":"4 / 4",ref:O("width:320px"),children:[`
 
 
 
`,i.jsxs("div",{className:"product upon_request has-fast-shopping",id:"product-2002283887","product-ref":"22114",children:[`
 
 `,i.jsxs("div",{className:"image",children:[`
 
 `,i.jsxs("a",{href:"https://www.atlantanet.com.br/material-de-construcao/cimento-uso-geral-50kg-cpii-caue",className:"space-image",children:[`
 `,i.jsx("img",{loading:"lazy",className:"lazyload loaded",src:"/assets/img-3a2f50f59724.svg",alt:"Cimento Uso Geral 50 Kg CPII - Cauê","data-ll-status":"loaded",ref:O("background-blend-mode:normal!important;background-clip:content-box!important;background-position:50% 50%!important;background-color:rgba(0,0,0,0)!important;background-image:var(--sf-img-47)!important;background-size:contain!important;background-origin:content-box!important;background-repeat:no-repeat!important")}),`
 
 `]}),`
 
 
 
 
 
 `,i.jsx("div",{className:"product-tags tags-custom","data-tags-count":"0",children:`
 
 
 
 
 `}),`
 
 `]}),`
 `,i.jsxs("a",{className:"product-info",href:"https://www.atlantanet.com.br/material-de-construcao/cimento-uso-geral-50kg-cpii-caue",children:[`
 `,i.jsxs("div",{className:"wrapper-product-name",children:[`
 `,i.jsx("h3",{className:"product-name",children:`
 Cimento Uso Geral 50 Kg CPII - Cauê
 `}),`
 `]}),`
 `,i.jsx("div",{className:"product-price",children:`
 
 
 `}),`
 
 `]}),`
 
 
 
 
 `,i.jsx("div",{className:"actions",children:`
 `}),`
 
 
 `,i.jsxs("div",{className:"buy-whatsapp buy-whatsapp--list-product",children:[`
 `,i.jsxs("a",{href:"https://api.whatsapp.com/send?phone=5511974659658&text=Ol%C3%83%C2%A1,%20gostei%20deste%20produto:%20Nome:%20Cimento%20Uso%20Geral%2050%20Kg%20CPII%20-%20Cau%C3%83%C2%AA%20|%20Ref:%2022114",target:"_blank",children:[`
 `,i.jsx("i",{className:"icon icon-whatsapp v-align-middle"}),`
 Comprar pelo Whats
 `]}),`
 `]}),`
 
`]})," "]}),`
 `]}),`
 
 `,i.jsx("div",{className:"prev swiper-button-disabled sf-hidden",tabIndex:"-1",role:"button","aria-label":"Previous slide","aria-controls":"swiper-wrapper-c270dc42ad2c363f","aria-disabled":"true",children:`
 
 `}),`
 `,i.jsx("div",{className:"next swiper-button-disabled sf-hidden",tabIndex:"-1",role:"button","aria-label":"Next slide","aria-controls":"swiper-wrapper-c270dc42ad2c363f","aria-disabled":"true",children:`
 
 `}),` 
 `,i.jsx("div",{className:"dots swiper-pagination-clickable swiper-pagination-bullets sf-hidden"}),`
 `,i.jsx("span",{className:"swiper-notification sf-hidden","aria-live":"assertive","aria-atomic":"true"})]}),`
 `]}),`
 `]})}function jm(){return i.jsxs("div",{className:"section-showcase not-slide-drag show","data-category":"",type:"featured",order:"hot",children:[`
 `,i.jsxs("div",{className:"container",children:[`
 `,i.jsxs("div",{className:"section-header",children:[`
 `,i.jsx("h2",{className:"title-section",children:"Destaques"}),`
 `]}),`
 `,i.jsxs("div",{className:"list-product flex f-wrap swiper-container swiper-container-initialized swiper-container-horizontal swiper-container-pointer-events",children:[`
 `,i.jsxs("div",{className:"list-product__items swiper-wrapper",id:"swiper-wrapper-5b101065e6776ee10c","aria-live":"off",children:[`
 
 `,i.jsxs("div",{className:"item swiper-slide swiper-slide-active",role:"group","aria-label":"1 / 4",ref:O("width:320px"),children:[`
 
 
 
`,i.jsxs("div",{className:"product upon_request has-fast-shopping",id:"product-1773442570","product-ref":"ref-empty",children:[`
 
 `,i.jsxs("div",{className:"image",children:[`
 
 `,i.jsxs("a",{href:"https://www.atlantanet.com.br/piso-e-revestimos/piso-duragres-copan-cinza-acetinado-71x71-cx2-52m",className:"space-image",children:[`
 `,i.jsx("img",{loading:"lazy",className:"lazyload loaded",src:"/assets/img-2503958638b0.webp",alt:"Piso Duragres Copan Cinza Acetinado 71X71 Cx2,52M²","data-ll-status":"loaded"}),`
 
 `]}),`
 
 
 
 
 
 `,i.jsxs("div",{className:"product-tags tags-custom","data-tags-count":"1",children:[`
 
 `,i.jsxs("div",{className:"tag featured",children:[`
 `,i.jsx("span",{className:"tag-text",children:"Destaque"}),`
 `]}),`
 
 
 
 `]}),`
 
 `]}),`
 `,i.jsxs("a",{className:"product-info",href:"https://www.atlantanet.com.br/piso-e-revestimos/piso-duragres-copan-cinza-acetinado-71x71-cx2-52m",children:[`
 `,i.jsxs("div",{className:"wrapper-product-name",children:[`
 `,i.jsx("h3",{className:"product-name",children:`
 Piso Duragres Copan Cinza Acetinado 71X71 Cx2,52M²
 `}),`
 `]}),`
 `,i.jsx("div",{className:"product-price",children:`
 
 
 `}),`
 
 `]}),`
 
 
 
 
 `,i.jsx("div",{className:"actions",children:`
 `}),`
 
 
 `,i.jsxs("div",{className:"buy-whatsapp buy-whatsapp--list-product",children:[`
 `,i.jsxs("a",{href:"https://api.whatsapp.com/send?phone=5511974659658&text=Ol%C3%83%C2%A1,%20gostei%20deste%20produto:%20Nome:%20Piso%20Duragres%20Copan%20Cinza%20Acetinado%2071X71%20Cx2,52M%C3%82%C2%B2%20|%20Ref:",target:"_blank",children:[`
 `,i.jsx("i",{className:"icon icon-whatsapp v-align-middle"}),`
 Comprar pelo Whats
 `]}),`
 `]}),`
 
`]})," "]}),`
 `,i.jsxs("div",{className:"item swiper-slide swiper-slide-next",role:"group","aria-label":"2 / 4",ref:O("width:320px"),children:[`
 
 
 
`,i.jsxs("div",{className:"product upon_request has-fast-shopping",id:"product-774241422","product-ref":"ref-empty",children:[`
 
 `,i.jsxs("div",{className:"image",children:[`
 
 `,i.jsxs("a",{href:"https://www.atlantanet.com.br/piso-e-revestimos/piso-durag-copan-nude-in-71x71",className:"space-image",children:[`
 `,i.jsx("img",{loading:"lazy",className:"lazyload loaded",src:"/assets/img-40ad59cb890a.webp",alt:"Piso Durag Copan Nude In 71X71","data-ll-status":"loaded"}),`
 
 `]}),`
 
 
 
 
 
 `,i.jsxs("div",{className:"product-tags tags-custom","data-tags-count":"1",children:[`
 
 `,i.jsxs("div",{className:"tag featured",children:[`
 `,i.jsx("span",{className:"tag-text",children:"Destaque"}),`
 `]}),`
 
 
 
 `]}),`
 
 `]}),`
 `,i.jsxs("a",{className:"product-info",href:"https://www.atlantanet.com.br/piso-e-revestimos/piso-durag-copan-nude-in-71x71",children:[`
 `,i.jsxs("div",{className:"wrapper-product-name",children:[`
 `,i.jsx("h3",{className:"product-name",children:`
 Piso Durag Copan Nude In 71X71
 `}),`
 `]}),`
 `,i.jsx("div",{className:"product-price",children:`
 
 
 `}),`
 
 `]}),`
 
 
 
 
 `,i.jsx("div",{className:"actions",children:`
 `}),`
 
 
 `,i.jsxs("div",{className:"buy-whatsapp buy-whatsapp--list-product",children:[`
 `,i.jsxs("a",{href:"https://api.whatsapp.com/send?phone=5511974659658&text=Ol%C3%83%C2%A1,%20gostei%20deste%20produto:%20Nome:%20Piso%20Durag%20Copan%20Nude%20In%2071X71%20|%20Ref:",target:"_blank",children:[`
 `,i.jsx("i",{className:"icon icon-whatsapp v-align-middle"}),`
 Comprar pelo Whats
 `]}),`
 `]}),`
 
`]})," "]}),`
 `,i.jsxs("div",{className:"item swiper-slide",role:"group","aria-label":"3 / 4",ref:O("width:320px"),children:[`
 
 
 
`,i.jsxs("div",{className:"product upon_request has-fast-shopping",id:"product-483712947","product-ref":"ref-empty",children:[`
 
 `,i.jsxs("div",{className:"image",children:[`
 
 `,i.jsxs("a",{href:"https://www.atlantanet.com.br/piso-e-revestimos/piso-durag-alvorada-grafite-in-71x71",className:"space-image",children:[`
 `,i.jsx("img",{loading:"lazy",className:"lazyload loaded",src:"/assets/img-bf740917652b.webp",alt:"Piso Durag Alvorada Grafite In 71x71","data-ll-status":"loaded"}),`
 
 `]}),`
 
 
 
 
 
 `,i.jsxs("div",{className:"product-tags tags-custom","data-tags-count":"1",children:[`
 
 `,i.jsxs("div",{className:"tag featured",children:[`
 `,i.jsx("span",{className:"tag-text",children:"Destaque"}),`
 `]}),`
 
 
 
 `]}),`
 
 `]}),`
 `,i.jsxs("a",{className:"product-info",href:"https://www.atlantanet.com.br/piso-e-revestimos/piso-durag-alvorada-grafite-in-71x71",children:[`
 `,i.jsxs("div",{className:"wrapper-product-name",children:[`
 `,i.jsx("h3",{className:"product-name",children:`
 Piso Durag Alvorada Grafite In 71x71
 `}),`
 `]}),`
 `,i.jsx("div",{className:"product-price",children:`
 
 
 `}),`
 
 `]}),`
 
 
 
 
 `,i.jsx("div",{className:"actions",children:`
 `}),`
 
 
 `,i.jsxs("div",{className:"buy-whatsapp buy-whatsapp--list-product",children:[`
 `,i.jsxs("a",{href:"https://api.whatsapp.com/send?phone=5511974659658&text=Ol%C3%83%C2%A1,%20gostei%20deste%20produto:%20Nome:%20Piso%20Durag%20Alvorada%20Grafite%20In%2071x71%20|%20Ref:",target:"_blank",children:[`
 `,i.jsx("i",{className:"icon icon-whatsapp v-align-middle"}),`
 Comprar pelo Whats
 `]}),`
 `]}),`
 
`]})," "]}),`
 `,i.jsxs("div",{className:"item swiper-slide",role:"group","aria-label":"4 / 4",ref:O("width:320px"),children:[`
 
 
 
`,i.jsxs("div",{className:"product upon_request has-fast-shopping",id:"product-571151898","product-ref":"ref-empty",children:[`
 
 `,i.jsxs("div",{className:"image",children:[`
 
 `,i.jsxs("a",{href:"https://www.atlantanet.com.br/piso-e-revestimos/copan-rustico-acetinado-71x71",className:"space-image",children:[`
 `,i.jsx("img",{loading:"lazy",className:"lazyload loaded",src:"/assets/img-be907d86f80c.webp",alt:"copan rustico acetinado 71x71","data-ll-status":"loaded"}),`
 
 `]}),`
 
 
 
 
 
 `,i.jsxs("div",{className:"product-tags tags-custom","data-tags-count":"1",children:[`
 
 `,i.jsxs("div",{className:"tag featured",children:[`
 `,i.jsx("span",{className:"tag-text",children:"Destaque"}),`
 `]}),`
 
 
 
 `]}),`
 
 `]}),`
 `,i.jsxs("a",{className:"product-info",href:"https://www.atlantanet.com.br/piso-e-revestimos/copan-rustico-acetinado-71x71",children:[`
 `,i.jsxs("div",{className:"wrapper-product-name",children:[`
 `,i.jsx("h3",{className:"product-name",children:`
 copan rustico acetinado 71x71
 `}),`
 `]}),`
 `,i.jsx("div",{className:"product-price",children:`
 
 
 `}),`
 
 `]}),`
 
 
 
 
 `,i.jsx("div",{className:"actions",children:`
 `}),`
 
 
 `,i.jsxs("div",{className:"buy-whatsapp buy-whatsapp--list-product",children:[`
 `,i.jsxs("a",{href:"https://api.whatsapp.com/send?phone=5511974659658&text=Ol%C3%83%C2%A1,%20gostei%20deste%20produto:%20Nome:%20copan%20rustico%20acetinado%2071x71%20|%20Ref:",target:"_blank",children:[`
 `,i.jsx("i",{className:"icon icon-whatsapp v-align-middle"}),`
 Comprar pelo Whats
 `]}),`
 `]}),`
 
`]})," "]}),`
 `]}),`
 
 `,i.jsx("div",{className:"prev swiper-button-disabled sf-hidden",tabIndex:"-1",role:"button","aria-label":"Previous slide","aria-controls":"swiper-wrapper-5b101065e6776ee10c","aria-disabled":"true",children:`
 
 `}),`
 `,i.jsx("div",{className:"next swiper-button-disabled sf-hidden",tabIndex:"-1",role:"button","aria-label":"Next slide","aria-controls":"swiper-wrapper-5b101065e6776ee10c","aria-disabled":"true",children:`
 
 `}),` 
 `,i.jsx("div",{className:"dots swiper-pagination-clickable swiper-pagination-bullets sf-hidden"}),`
 `,i.jsx("span",{className:"swiper-notification sf-hidden","aria-live":"assertive","aria-atomic":"true"})]}),`
 `]}),`
 `]})}function Sm(){return i.jsxs("div",{className:"section-showcase not-slide-drag show",children:[`
 `,i.jsxs("div",{className:"container",children:[`
 
 `,i.jsxs("div",{className:"section-header",children:[`
 `,i.jsx("h2",{className:"title-section",children:`
 Novidades
 `}),`
 `]}),`
 
 `,i.jsxs("div",{className:"list-product flex f-wrap swiper-container swiper-container-initialized swiper-container-horizontal swiper-container-pointer-events",children:[`
 `,i.jsxs("div",{className:"list-product__items swiper-wrapper",id:"swiper-wrapper-1e019d2aa416c8a3","aria-live":"off",children:[`
 `,i.jsxs("div",{className:"item swiper-slide swiper-slide-active",role:"group","aria-label":"1 / 4",ref:O("width:320px"),children:[`
 
 
 
`,i.jsxs("div",{className:"product upon_request has-fast-shopping",id:"product-1772841134","product-ref":"29920",children:[`
 
 `,i.jsxs("div",{className:"image",children:[`
 
 `,i.jsxs("a",{href:"https://www.atlantanet.com.br/eletrica/fios-e-cabos/cabo-flexivel-2-5mm-100m-vermelho-sil-fios",className:"space-image",children:[`
 `,i.jsx("img",{loading:"lazy",className:"lazyload loaded",src:"/assets/img-e88379d3964a.webp",alt:"Cabo Flexível  2,5MM 100M Vermelho - Sil Fios","data-ll-status":"loaded"}),`
 
 `]}),`
 
 
 
 
 
 `,i.jsxs("div",{className:"product-tags tags-custom","data-tags-count":"1",children:[`
 `,i.jsxs("div",{className:"tag new",children:[`
 `,i.jsx("span",{className:"tag-text",children:"Lançamento"}),`
 `]}),`
 
 
 
 
 `]}),`
 
 `]}),`
 `,i.jsxs("a",{className:"product-info",href:"https://www.atlantanet.com.br/eletrica/fios-e-cabos/cabo-flexivel-2-5mm-100m-vermelho-sil-fios",children:[`
 `,i.jsxs("div",{className:"wrapper-product-name",children:[`
 `,i.jsx("h3",{className:"product-name",children:`
 Cabo Flexível 2,5MM 100M Vermelho - Sil Fios
 `}),`
 `]}),`
 `,i.jsx("div",{className:"product-price",children:`
 
 
 `}),`
 
 `]}),`
 
 
 
 
 `,i.jsx("div",{className:"actions",children:`
 `}),`
 
 
 `,i.jsxs("div",{className:"buy-whatsapp buy-whatsapp--list-product",children:[`
 `,i.jsxs("a",{href:"https://api.whatsapp.com/send?phone=5511974659658&text=Ol%C3%83%C2%A1,%20gostei%20deste%20produto:%20Nome:%20Cabo%20Flex%C3%83%C2%ADvel%20%202,5MM%20100M%20Vermelho%20-%20Sil%20Fios%20|%20Ref:%2029920",target:"_blank",children:[`
 `,i.jsx("i",{className:"icon icon-whatsapp v-align-middle"}),`
 Comprar pelo Whats
 `]}),`
 `]}),`
 
`]})," "]}),`
 `,i.jsxs("div",{className:"item swiper-slide swiper-slide-next",role:"group","aria-label":"2 / 4",ref:O("width:320px"),children:[`
 
 
 
`,i.jsxs("div",{className:"product upon_request has-fast-shopping",id:"product-229620143","product-ref":"29926",children:[`
 
 `,i.jsxs("div",{className:"image",children:[`
 
 `,i.jsxs("a",{href:"https://www.atlantanet.com.br/eletrica/fios-e-cabos/cabo-flexivel-1-5mm-100m-preto-sil-fios",className:"space-image",children:[`
 `,i.jsx("img",{loading:"lazy",className:"lazyload loaded",src:"/assets/img-f0cb37b54a37.webp",alt:"Cabo Flexível  1,5MM 100M Preto - Sil Fios","data-ll-status":"loaded"}),`
 
 `]}),`
 
 
 
 
 
 `,i.jsxs("div",{className:"product-tags tags-custom","data-tags-count":"1",children:[`
 `,i.jsxs("div",{className:"tag new",children:[`
 `,i.jsx("span",{className:"tag-text",children:"Lançamento"}),`
 `]}),`
 
 
 
 
 `]}),`
 
 `]}),`
 `,i.jsxs("a",{className:"product-info",href:"https://www.atlantanet.com.br/eletrica/fios-e-cabos/cabo-flexivel-1-5mm-100m-preto-sil-fios",children:[`
 `,i.jsxs("div",{className:"wrapper-product-name",children:[`
 `,i.jsx("h3",{className:"product-name",children:`
 Cabo Flexível 1,5MM 100M Preto - Sil Fios
 `}),`
 `]}),`
 `,i.jsx("div",{className:"product-price",children:`
 
 
 `}),`
 
 `]}),`
 
 
 
 
 `,i.jsx("div",{className:"actions",children:`
 `}),`
 
 
 `,i.jsxs("div",{className:"buy-whatsapp buy-whatsapp--list-product",children:[`
 `,i.jsxs("a",{href:"https://api.whatsapp.com/send?phone=5511974659658&text=Ol%C3%83%C2%A1,%20gostei%20deste%20produto:%20Nome:%20Cabo%20Flex%C3%83%C2%ADvel%20%201,5MM%20100M%20Preto%20-%20Sil%20Fios%20|%20Ref:%2029926",target:"_blank",children:[`
 `,i.jsx("i",{className:"icon icon-whatsapp v-align-middle"}),`
 Comprar pelo Whats
 `]}),`
 `]}),`
 
`]})," "]}),`
 `,i.jsxs("div",{className:"item swiper-slide",role:"group","aria-label":"3 / 4",ref:O("width:320px"),children:[`
 
 
 
`,i.jsxs("div",{className:"product upon_request has-fast-shopping",id:"product-1269001756","product-ref":"29925",children:[`
 
 `,i.jsxs("div",{className:"image",children:[`
 
 `,i.jsxs("a",{href:"https://www.atlantanet.com.br/eletrica/fios-e-cabos/cabo-flexivel-1-5mm-100m-azul-sil-fios",className:"space-image",children:[`
 `,i.jsx("img",{loading:"lazy",className:"lazyload loaded",src:"/assets/img-a0c11dfb3c91.webp",alt:"Cabo Flexível  1,5MM 100M Azul - Sil Fios","data-ll-status":"loaded"}),`
 
 `]}),`
 
 
 
 
 
 `,i.jsxs("div",{className:"product-tags tags-custom","data-tags-count":"1",children:[`
 `,i.jsxs("div",{className:"tag new",children:[`
 `,i.jsx("span",{className:"tag-text",children:"Lançamento"}),`
 `]}),`
 
 
 
 
 `]}),`
 
 `]}),`
 `,i.jsxs("a",{className:"product-info",href:"https://www.atlantanet.com.br/eletrica/fios-e-cabos/cabo-flexivel-1-5mm-100m-azul-sil-fios",children:[`
 `,i.jsxs("div",{className:"wrapper-product-name",children:[`
 `,i.jsx("h3",{className:"product-name",children:`
 Cabo Flexível 1,5MM 100M Azul - Sil Fios
 `}),`
 `]}),`
 `,i.jsx("div",{className:"product-price",children:`
 
 
 `}),`
 
 `]}),`
 
 
 
 
 `,i.jsx("div",{className:"actions",children:`
 `}),`
 
 
 `,i.jsxs("div",{className:"buy-whatsapp buy-whatsapp--list-product",children:[`
 `,i.jsxs("a",{href:"https://api.whatsapp.com/send?phone=5511974659658&text=Ol%C3%83%C2%A1,%20gostei%20deste%20produto:%20Nome:%20Cabo%20Flex%C3%83%C2%ADvel%20%201,5MM%20100M%20Azul%20-%20Sil%20Fios%20|%20Ref:%2029925",target:"_blank",children:[`
 `,i.jsx("i",{className:"icon icon-whatsapp v-align-middle"}),`
 Comprar pelo Whats
 `]}),`
 `]}),`
 
`]})," "]}),`
 `,i.jsxs("div",{className:"item swiper-slide",role:"group","aria-label":"4 / 4",ref:O("width:320px"),children:[`
 
 
 
`,i.jsxs("div",{className:"product upon_request has-fast-shopping",id:"product-398117493","product-ref":"29930",children:[`
 
 `,i.jsxs("div",{className:"image",children:[`
 
 `,i.jsxs("a",{href:"https://www.atlantanet.com.br/eletrica/fios-e-cabos/cabo-flexivel-1-5mm-100m-branco-sil-fios",className:"space-image",children:[`
 `,i.jsx("img",{loading:"lazy",className:"lazyload loaded",src:"/assets/img-6ee1b3a0c4e1.webp",alt:"Cabo Flexível  1,5MM 100M Branco - Sil Fios","data-ll-status":"loaded"}),`
 
 `]}),`
 
 
 
 
 
 `,i.jsxs("div",{className:"product-tags tags-custom","data-tags-count":"1",children:[`
 `,i.jsxs("div",{className:"tag new",children:[`
 `,i.jsx("span",{className:"tag-text",children:"Lançamento"}),`
 `]}),`
 
 
 
 
 `]}),`
 
 `]}),`
 `,i.jsxs("a",{className:"product-info",href:"https://www.atlantanet.com.br/eletrica/fios-e-cabos/cabo-flexivel-1-5mm-100m-branco-sil-fios",children:[`
 `,i.jsxs("div",{className:"wrapper-product-name",children:[`
 `,i.jsx("h3",{className:"product-name",children:`
 Cabo Flexível 1,5MM 100M Branco - Sil Fios
 `}),`
 `]}),`
 `,i.jsx("div",{className:"product-price",children:`
 
 
 `}),`
 
 `]}),`
 
 
 
 
 `,i.jsx("div",{className:"actions",children:`
 `}),`
 
 
 `,i.jsxs("div",{className:"buy-whatsapp buy-whatsapp--list-product",children:[`
 `,i.jsxs("a",{href:"https://api.whatsapp.com/send?phone=5511974659658&text=Ol%C3%83%C2%A1,%20gostei%20deste%20produto:%20Nome:%20Cabo%20Flex%C3%83%C2%ADvel%20%201,5MM%20100M%20Branco%20-%20Sil%20Fios%20|%20Ref:%2029930",target:"_blank",children:[`
 `,i.jsx("i",{className:"icon icon-whatsapp v-align-middle"}),`
 Comprar pelo Whats
 `]}),`
 `]}),`
 
`]})," "]}),`
 `]}),`
 
 `,i.jsx("div",{className:"prev swiper-button-disabled sf-hidden",tabIndex:"-1",role:"button","aria-label":"Previous slide","aria-controls":"swiper-wrapper-1e019d2aa416c8a3","aria-disabled":"true",children:`
 
 `}),`
 `,i.jsx("div",{className:"next swiper-button-disabled sf-hidden",tabIndex:"-1",role:"button","aria-label":"Next slide","aria-controls":"swiper-wrapper-1e019d2aa416c8a3","aria-disabled":"true",children:`
 
 `}),` 
 `,i.jsx("div",{className:"dots swiper-pagination-clickable swiper-pagination-bullets sf-hidden"}),`
 `,i.jsx("span",{className:"swiper-notification sf-hidden","aria-live":"assertive","aria-atomic":"true"})]}),`
 
 `]}),`
 `]})}function bm(){return i.jsxs("div",{className:"section-showcase not-slide-drag show","data-category":"344",type:"all_products",order:"priceLow",children:[`
 `,i.jsxs("div",{className:"container",children:[`
 `,i.jsxs("div",{className:"section-header",children:[`
 `,i.jsx("h2",{className:"title-section",children:"Promoção Da Semana"}),`
 `]}),`
 `,i.jsxs("div",{className:"list-product flex f-wrap swiper-container swiper-container-initialized swiper-container-horizontal swiper-container-pointer-events",children:[`
 `,i.jsxs("div",{className:"list-product__items swiper-wrapper",id:"swiper-wrapper-fe370622819b6102b","aria-live":"off",children:[`
 
 `,i.jsxs("div",{className:"item swiper-slide swiper-slide-active",role:"group","aria-label":"1 / 4",ref:O("width:320px"),children:[`
 
 
 
`,i.jsxs("div",{className:"product upon_request has-fast-shopping",id:"product-2066649671","product-ref":"28116",children:[`
 
 `,i.jsxs("div",{className:"image",children:[`
 
 `,i.jsxs("a",{href:"https://www.atlantanet.com.br/tintas-e-acessorios/tinta-para-parede/acrilica/tinta-rende-e-cobre-muito-3-6l-branco-suvinil",className:"space-image",children:[`
 `,i.jsx("img",{loading:"lazy",className:"lazyload loaded",src:"/assets/img-fa23c8cf4fb3.webp",alt:"Tinta Rende e Cobre Muito 3.6L Branco - Suvinil","data-ll-status":"loaded"}),`
 
 `]}),`
 
 
 
 
 
 `,i.jsx("div",{className:"product-tags tags-custom","data-tags-count":"0",children:`
 
 
 
 
 `}),`
 
 `]}),`
 `,i.jsxs("a",{className:"product-info",href:"https://www.atlantanet.com.br/tintas-e-acessorios/tinta-para-parede/acrilica/tinta-rende-e-cobre-muito-3-6l-branco-suvinil",children:[`
 `,i.jsxs("div",{className:"wrapper-product-name",children:[`
 `,i.jsx("h3",{className:"product-name",children:`
 Tinta Rende e Cobre Muito 3.6L Branco - Suvinil
 `}),`
 `]}),`
 `,i.jsx("div",{className:"product-price",children:`
 
 
 `}),`
 
 `]}),`
 
 
 
 
 `,i.jsx("div",{className:"actions",children:`
 `}),`
 
 
 `,i.jsxs("div",{className:"buy-whatsapp buy-whatsapp--list-product",children:[`
 `,i.jsxs("a",{href:"https://api.whatsapp.com/send?phone=5511974659658&text=Ol%C3%83%C2%A1,%20gostei%20deste%20produto:%20Nome:%20Tinta%20Rende%20e%20Cobre%20Muito%203.6L%20Branco%20-%20Suvinil%20|%20Ref:%2028116",target:"_blank",children:[`
 `,i.jsx("i",{className:"icon icon-whatsapp v-align-middle"}),`
 Comprar pelo Whats
 `]}),`
 `]}),`
 
`]})," "]}),`
 `,i.jsxs("div",{className:"item swiper-slide swiper-slide-next",role:"group","aria-label":"2 / 4",ref:O("width:320px"),children:[`
 
 
 
`,i.jsxs("div",{className:"product upon_request has-fast-shopping",id:"product-1932028822","product-ref":"11923",children:[`
 
 `,i.jsxs("div",{className:"image",children:[`
 
 `,i.jsxs("a",{href:"https://www.atlantanet.com.br/tintas-e-acessorios/tinta-para-parede/acrilica/tinta-toque-de-seda-acet-18l-branco-suvinil",className:"space-image",children:[`
 `,i.jsx("img",{loading:"lazy",className:"lazyload loaded",src:"/assets/img-7ca3a542a05c.webp",alt:"Tinta Toque De Seda Acetinado 18L Branco - Suvinil","data-ll-status":"loaded"}),`
 
 `]}),`
 
 
 
 
 
 `,i.jsx("div",{className:"product-tags tags-custom","data-tags-count":"0",children:`
 
 
 
 
 `}),`
 
 `]}),`
 `,i.jsxs("a",{className:"product-info",href:"https://www.atlantanet.com.br/tintas-e-acessorios/tinta-para-parede/acrilica/tinta-toque-de-seda-acet-18l-branco-suvinil",children:[`
 `,i.jsxs("div",{className:"wrapper-product-name",children:[`
 `,i.jsx("h3",{className:"product-name",children:`
 Tinta Toque De Seda Acetinado 18L Branco - Suvinil
 `}),`
 `]}),`
 `,i.jsx("div",{className:"product-price",children:`
 
 
 `}),`
 
 `]}),`
 
 
 
 
 `,i.jsx("div",{className:"actions",children:`
 `}),`
 
 
 `,i.jsxs("div",{className:"buy-whatsapp buy-whatsapp--list-product",children:[`
 `,i.jsxs("a",{href:"https://api.whatsapp.com/send?phone=5511974659658&text=Ol%C3%83%C2%A1,%20gostei%20deste%20produto:%20Nome:%20Tinta%20Toque%20De%20Seda%20Acetinado%2018L%20Branco%20-%20Suvinil%20|%20Ref:%2011923",target:"_blank",children:[`
 `,i.jsx("i",{className:"icon icon-whatsapp v-align-middle"}),`
 Comprar pelo Whats
 `]}),`
 `]}),`
 
`]})," "]}),`
 `,i.jsxs("div",{className:"item swiper-slide",role:"group","aria-label":"3 / 4",ref:O("width:320px"),children:[`
 
 
 
`,i.jsxs("div",{className:"product upon_request has-fast-shopping",id:"product-905017650","product-ref":"24228",children:[`
 
 `,i.jsxs("div",{className:"image",children:[`
 
 `,i.jsxs("a",{href:"https://www.atlantanet.com.br/tintas-e-acessorios/tinta-ferromadeira/tinta-seca-rapido-esmalte-brilhante-0-9l-branco-suvinil",className:"space-image",children:[`
 `,i.jsx("img",{loading:"lazy",className:"lazyload loaded",src:"/assets/img-d2798b10097d.webp",alt:"Tinta Seca Rápido Esmalte Brilhante 0,9L Branco - Suvinil","data-ll-status":"loaded"}),`
 
 `]}),`
 
 
 
 
 
 `,i.jsx("div",{className:"product-tags tags-custom","data-tags-count":"0",children:`
 
 
 
 
 `}),`
 
 `]}),`
 `,i.jsxs("a",{className:"product-info",href:"https://www.atlantanet.com.br/tintas-e-acessorios/tinta-ferromadeira/tinta-seca-rapido-esmalte-brilhante-0-9l-branco-suvinil",children:[`
 `,i.jsxs("div",{className:"wrapper-product-name",children:[`
 `,i.jsx("h3",{className:"product-name",children:`
 Tinta Seca Rápido Esmalte Brilhante 0,9L Branco - Suvinil
 `}),`
 `]}),`
 `,i.jsx("div",{className:"product-price",children:`
 
 
 `}),`
 
 `]}),`
 
 
 
 
 `,i.jsx("div",{className:"actions",children:`
 `}),`
 
 
 `,i.jsxs("div",{className:"buy-whatsapp buy-whatsapp--list-product",children:[`
 `,i.jsxs("a",{href:"https://api.whatsapp.com/send?phone=5511974659658&text=Ol%C3%83%C2%A1,%20gostei%20deste%20produto:%20Nome:%20Tinta%20Seca%20R%C3%83%C2%A1pido%20Esmalte%20Brilhante%200,9L%20Branco%20-%20Suvinil%20|%20Ref:%2024228",target:"_blank",children:[`
 `,i.jsx("i",{className:"icon icon-whatsapp v-align-middle"}),`
 Comprar pelo Whats
 `]}),`
 `]}),`
 
`]})," "]}),`
 `,i.jsxs("div",{className:"item swiper-slide",role:"group","aria-label":"4 / 4",ref:O("width:320px"),children:[`
 
 
 
`,i.jsxs("div",{className:"product upon_request has-fast-shopping",id:"product-1552235988","product-ref":"22126",children:[`
 
 `,i.jsxs("div",{className:"image",children:[`
 
 `,i.jsxs("a",{href:"https://www.atlantanet.com.br/tintas-e-acessorios/self-base-toque-de-seda-ac-a2-3-2l-suvinil",className:"space-image",children:[`
 `,i.jsx("img",{loading:"lazy",className:"lazyload loaded",src:"/assets/img-9078e9367287.webp",alt:"Self Base Toque de Seda AC A2 3,2L Suvinil","data-ll-status":"loaded"}),`
 
 `]}),`
 
 
 
 
 
 `,i.jsx("div",{className:"product-tags tags-custom","data-tags-count":"0",children:`
 
 
 
 
 `}),`
 
 `]}),`
 `,i.jsxs("a",{className:"product-info",href:"https://www.atlantanet.com.br/tintas-e-acessorios/self-base-toque-de-seda-ac-a2-3-2l-suvinil",children:[`
 `,i.jsxs("div",{className:"wrapper-product-name",children:[`
 `,i.jsx("h3",{className:"product-name",children:`
 Self Base Toque de Seda AC A2 3,2L Suvinil
 `}),`
 `]}),`
 `,i.jsx("div",{className:"product-price",children:`
 
 
 `}),`
 
 `]}),`
 
 
 
 
 `,i.jsx("div",{className:"actions",children:`
 `}),`
 
 
 `,i.jsxs("div",{className:"buy-whatsapp buy-whatsapp--list-product",children:[`
 `,i.jsxs("a",{href:"https://api.whatsapp.com/send?phone=5511974659658&text=Ol%C3%83%C2%A1,%20gostei%20deste%20produto:%20Nome:%20Self%20Base%20Toque%20de%20Seda%20AC%20A2%203,2L%20Suvinil%20|%20Ref:%2022126",target:"_blank",children:[`
 `,i.jsx("i",{className:"icon icon-whatsapp v-align-middle"}),`
 Comprar pelo Whats
 `]}),`
 `]}),`
 
`]})," "]}),`
 `]}),`
 
 `,i.jsx("div",{className:"prev swiper-button-disabled sf-hidden",tabIndex:"-1",role:"button","aria-label":"Previous slide","aria-controls":"swiper-wrapper-fe370622819b6102b","aria-disabled":"true",children:`
 
 `}),`
 `,i.jsx("div",{className:"next swiper-button-disabled sf-hidden",tabIndex:"-1",role:"button","aria-label":"Next slide","aria-controls":"swiper-wrapper-fe370622819b6102b","aria-disabled":"true",children:`
 
 `}),` 
 `,i.jsx("div",{className:"dots swiper-pagination-clickable swiper-pagination-bullets sf-hidden"}),`
 `,i.jsx("span",{className:"swiper-notification sf-hidden","aria-live":"assertive","aria-atomic":"true"})]}),`
 `]}),`
 `]})}function Nm(){return i.jsxs("div",{className:"section-showcase not-slide-drag show",children:[`
 `,i.jsxs("div",{className:"container",children:[`
 
 `,i.jsxs("div",{className:"section-header",children:[`
 `,i.jsx("h2",{className:"title-section",children:`
 Recomendados para você
 `}),`
 `]}),`
 
 `,i.jsxs("div",{className:"list-product flex f-wrap swiper-container swiper-container-initialized swiper-container-horizontal swiper-container-pointer-events",children:[`
 `,i.jsxs("div",{className:"list-product__items swiper-wrapper",id:"swiper-wrapper-5bcc46949db671105","aria-live":"off",children:[`
 `,i.jsxs("div",{className:"item swiper-slide swiper-slide-active",role:"group","aria-label":"1 / 4",ref:O("width:320px"),children:[`
 
 
 
`,i.jsxs("div",{className:"product upon_request has-fast-shopping",id:"product-1448764788","product-ref":"31294",children:[`
 
 `,i.jsxs("div",{className:"image",children:[`
 
 `,i.jsxs("a",{href:"https://www.atlantanet.com.br/material-de-construcao/blocos-e-tijolos/bloco-ceramico-11-5-x-14-x-24-vedacao-tec-brasil",className:"space-image",children:[`
 `,i.jsx("img",{loading:"lazy",className:"lazyload loaded",src:"/assets/img-f468628d8cdf.webp",alt:"Bloco Cerâmico 11,5 X 14 X 24 Vedação - Tec Brasil","data-ll-status":"loaded"}),`
 
 `]}),`
 
 
 
 
 
 `,i.jsx("div",{className:"product-tags tags-custom","data-tags-count":"0",children:`
 
 
 
 
 `}),`
 
 `]}),`
 `,i.jsxs("a",{className:"product-info",href:"https://www.atlantanet.com.br/material-de-construcao/blocos-e-tijolos/bloco-ceramico-11-5-x-14-x-24-vedacao-tec-brasil",children:[`
 `,i.jsxs("div",{className:"wrapper-product-name",children:[`
 `,i.jsx("h3",{className:"product-name",children:`
 Bloco Cerâmico 11,5 X 14 X 24 Vedação - Tec Brasil
 `}),`
 `]}),`
 `,i.jsx("div",{className:"product-price",children:`
 
 
 `}),`
 
 `]}),`
 
 
 
 
 `,i.jsx("div",{className:"actions",children:`
 `}),`
 
 
 `,i.jsxs("div",{className:"buy-whatsapp buy-whatsapp--list-product",children:[`
 `,i.jsxs("a",{href:"https://api.whatsapp.com/send?phone=5511974659658&text=Ol%C3%83%C2%A1,%20gostei%20deste%20produto:%20Nome:%20Bloco%20Cer%C3%83%C2%A2mico%2011,5%20X%2014%20X%2024%20Veda%C3%83%C2%A7%C3%83%C2%A3o%20-%20Tec%20Brasil%20|%20Ref:%2031294",target:"_blank",children:[`
 `,i.jsx("i",{className:"icon icon-whatsapp v-align-middle"}),`
 Comprar pelo Whats
 `]}),`
 `]}),`
 
`]})," "]}),`
 `,i.jsxs("div",{className:"item swiper-slide swiper-slide-next",role:"group","aria-label":"2 / 4",ref:O("width:320px"),children:[`
 
 
 
`,i.jsxs("div",{className:"product upon_request has-fast-shopping",id:"product-1334851089","product-ref":"30137",children:[`
 
 `,i.jsxs("div",{className:"image",children:[`
 
 `,i.jsxs("a",{href:"https://www.atlantanet.com.br/material-de-construcao/cimento-csn-cp3-32rs-50-kg-csn",className:"space-image",children:[`
 `,i.jsx("img",{loading:"lazy",className:"lazyload loaded",src:"/assets/img-3a2f50f59724.svg",alt:"Cimento CPIII 32RS 50KG - CSN","data-ll-status":"loaded",ref:O("background-blend-mode:normal!important;background-clip:content-box!important;background-position:50% 50%!important;background-color:rgba(0,0,0,0)!important;background-image:var(--sf-img-33)!important;background-size:contain!important;background-origin:content-box!important;background-repeat:no-repeat!important")}),`
 
 `]}),`
 
 
 
 
 
 `,i.jsx("div",{className:"product-tags tags-custom","data-tags-count":"0",children:`
 
 
 
 
 `}),`
 
 `]}),`
 `,i.jsxs("a",{className:"product-info",href:"https://www.atlantanet.com.br/material-de-construcao/cimento-csn-cp3-32rs-50-kg-csn",children:[`
 `,i.jsxs("div",{className:"wrapper-product-name",children:[`
 `,i.jsx("h3",{className:"product-name",children:`
 Cimento CPIII 32RS 50KG - CSN
 `}),`
 `]}),`
 `,i.jsx("div",{className:"product-price",children:`
 
 
 `}),`
 
 `]}),`
 
 
 
 
 `,i.jsx("div",{className:"actions",children:`
 `}),`
 
 
 `,i.jsxs("div",{className:"buy-whatsapp buy-whatsapp--list-product",children:[`
 `,i.jsxs("a",{href:"https://api.whatsapp.com/send?phone=5511974659658&text=Ol%C3%83%C2%A1,%20gostei%20deste%20produto:%20Nome:%20Cimento%20CPIII%2032RS%2050KG%20-%20CSN%20|%20Ref:%2030137",target:"_blank",children:[`
 `,i.jsx("i",{className:"icon icon-whatsapp v-align-middle"}),`
 Comprar pelo Whats
 `]}),`
 `]}),`
 
`]})," "]}),`
 `,i.jsxs("div",{className:"item swiper-slide",role:"group","aria-label":"3 / 4",ref:O("width:320px"),children:[`
 
 
 
`,i.jsxs("div",{className:"product upon_request has-fast-shopping",id:"product-1088674939","product-ref":"21380",children:[`
 
 `,i.jsxs("div",{className:"image",children:[`
 
 `,i.jsxs("a",{href:"https://www.atlantanet.com.br/material-de-construcao/areia-e-pedra/areia-media-lavada-saco-20-kg-ensacada-pedrasil",className:"space-image",children:[`
 `,i.jsx("img",{loading:"lazy",className:"lazyload loaded",src:"/assets/img-f614e6824454.webp",alt:"Areia Média Lavada Saco 20 KG Ensacada - Pedrasil","data-ll-status":"loaded"}),`
 
 `]}),`
 
 
 
 
 
 `,i.jsx("div",{className:"product-tags tags-custom","data-tags-count":"0",children:`
 
 
 
 
 `}),`
 
 `]}),`
 `,i.jsxs("a",{className:"product-info",href:"https://www.atlantanet.com.br/material-de-construcao/areia-e-pedra/areia-media-lavada-saco-20-kg-ensacada-pedrasil",children:[`
 `,i.jsxs("div",{className:"wrapper-product-name",children:[`
 `,i.jsx("h3",{className:"product-name",children:`
 Areia Média Lavada Saco 20 KG Ensacada - Pedrasil
 `}),`
 `]}),`
 `,i.jsx("div",{className:"product-price",children:`
 
 
 `}),`
 
 `]}),`
 
 
 
 
 `,i.jsx("div",{className:"actions",children:`
 `}),`
 
 
 `,i.jsxs("div",{className:"buy-whatsapp buy-whatsapp--list-product",children:[`
 `,i.jsxs("a",{href:"https://api.whatsapp.com/send?phone=5511974659658&text=Ol%C3%83%C2%A1,%20gostei%20deste%20produto:%20Nome:%20Areia%20M%C3%83%C2%A9dia%20Lavada%20Saco%2020%20KG%20Ensacada%20-%20Pedrasil%20|%20Ref:%2021380",target:"_blank",children:[`
 `,i.jsx("i",{className:"icon icon-whatsapp v-align-middle"}),`
 Comprar pelo Whats
 `]}),`
 `]}),`
 
`]})," "]}),`
 `,`
 `]}),`
 
 `,i.jsx("div",{className:"prev swiper-button-disabled sf-hidden",tabIndex:"-1",role:"button","aria-label":"Previous slide","aria-controls":"swiper-wrapper-5bcc46949db671105","aria-disabled":"true",children:`
 
 `}),`
 `,i.jsx("div",{className:"next swiper-button-disabled sf-hidden",tabIndex:"-1",role:"button","aria-label":"Next slide","aria-controls":"swiper-wrapper-5bcc46949db671105","aria-disabled":"true",children:`
 
 `}),` 
 `,i.jsx("div",{className:"dots swiper-pagination-clickable swiper-pagination-bullets sf-hidden"}),`
 `,i.jsx("span",{className:"swiper-notification sf-hidden","aria-live":"assertive","aria-atomic":"true"})]}),`
 
 `]}),`
 `]})}function Cm(){return i.jsxs("div",{className:"section-showcase not-slide-drag show","data-category":"340",type:"all_products",order:"priceLow",children:[`
 `,i.jsxs("div",{className:"container",children:[`
 `,i.jsxs("div",{className:"section-header",children:[`
 `,i.jsx("h2",{className:"title-section",children:"Telhas"}),`
 `]}),`
 `,i.jsxs("div",{className:"list-product flex f-wrap swiper-container swiper-container-initialized swiper-container-horizontal swiper-container-pointer-events",children:[`
 `,i.jsxs("div",{className:"list-product__items swiper-wrapper",id:"swiper-wrapper-8930379f6e1152e2","aria-live":"off",children:[`
 
 `,i.jsxs("div",{className:"item swiper-slide swiper-slide-active",role:"group","aria-label":"1 / 4",ref:O("width:320px"),children:[`
 
 
 
`,i.jsxs("div",{className:"product upon_request has-secondary-image has-fast-shopping",id:"product-226963905","product-ref":"23155",children:[`
 
 `,i.jsxs("div",{className:"image",children:[`
 
 `,i.jsxs("a",{href:"https://www.atlantanet.com.br/telha/telhas/telha-ondulada-1-53x1-10-6mm-brasilit",className:"space-image",children:[`
 `,i.jsx("img",{loading:"lazy",className:"lazyload loaded",src:"/assets/img-474648c35ca8.webp",alt:"Telha Ondulada 1.53X1.10 6MM - Brasilit","data-ll-status":"loaded"}),`
 `,i.jsx("img",{loading:"lazy",className:"lazyload loaded",src:"/assets/img-5361042f0011.webp",alt:"Telha Ondulada 1.53X1.10 6MM - Brasilit","data-ll-status":"loaded"}),`
 
 `]}),`
 
 
 
 
 
 `,i.jsx("div",{className:"product-tags tags-custom","data-tags-count":"0",children:`
 
 
 
 
 `}),`
 
 `]}),`
 `,i.jsxs("a",{className:"product-info",href:"https://www.atlantanet.com.br/telha/telhas/telha-ondulada-1-53x1-10-6mm-brasilit",children:[`
 `,i.jsxs("div",{className:"wrapper-product-name",children:[`
 `,i.jsx("h3",{className:"product-name",children:`
 Telha Ondulada 1.53X1.10 6MM - Brasilit
 `}),`
 `]}),`
 `,i.jsx("div",{className:"product-price",children:`
 
 
 `}),`
 
 `]}),`
 
 
 
 
 `,i.jsx("div",{className:"actions",children:`
 `}),`
 
 
 `,i.jsxs("div",{className:"buy-whatsapp buy-whatsapp--list-product",children:[`
 `,i.jsxs("a",{href:"https://api.whatsapp.com/send?phone=5511974659658&text=Ol%C3%83%C2%A1,%20gostei%20deste%20produto:%20Nome:%20Telha%20Ondulada%201.53X1.10%206MM%20-%20Brasilit%20|%20Ref:%2023155",target:"_blank",children:[`
 `,i.jsx("i",{className:"icon icon-whatsapp v-align-middle"}),`
 Comprar pelo Whats
 `]}),`
 `]}),`
 
`]})," "]}),`
 `,i.jsxs("div",{className:"item swiper-slide swiper-slide-next",role:"group","aria-label":"2 / 4",ref:O("width:320px"),children:[`
 
 
 
`,i.jsxs("div",{className:"product upon_request has-fast-shopping",id:"product-1954776339","product-ref":"24392",children:[`
 
 `,i.jsxs("div",{className:"image",children:[`
 
 `,i.jsxs("a",{href:"https://www.atlantanet.com.br/telha/telhas/telha-ondulada-pp-perfil-177-2-13x1-10-atco",className:"space-image",children:[`
 `,i.jsx("img",{loading:"lazy",className:"lazyload loaded",src:"/assets/img-1358d618f948.webp",alt:"Telha Ondulada PP Perfil 177 2.13X1.10  - Atco","data-ll-status":"loaded"}),`
 
 `]}),`
 
 
 
 
 
 `,i.jsx("div",{className:"product-tags tags-custom","data-tags-count":"0",children:`
 
 
 
 
 `}),`
 
 `]}),`
 `,i.jsxs("a",{className:"product-info",href:"https://www.atlantanet.com.br/telha/telhas/telha-ondulada-pp-perfil-177-2-13x1-10-atco",children:[`
 `,i.jsxs("div",{className:"wrapper-product-name",children:[`
 `,i.jsx("h3",{className:"product-name",children:`
 Telha Ondulada PP Perfil 177 2.13X1.10 - Atco
 `}),`
 `]}),`
 `,i.jsx("div",{className:"product-price",children:`
 
 
 `}),`
 
 `]}),`
 
 
 
 
 `,i.jsx("div",{className:"actions",children:`
 `}),`
 
 
 `,i.jsxs("div",{className:"buy-whatsapp buy-whatsapp--list-product",children:[`
 `,i.jsxs("a",{href:"https://api.whatsapp.com/send?phone=5511974659658&text=Ol%C3%83%C2%A1,%20gostei%20deste%20produto:%20Nome:%20Telha%20Ondulada%20PP%20Perfil%20177%202.13X1.10%20%20-%20Atco%20|%20Ref:%2024392",target:"_blank",children:[`
 `,i.jsx("i",{className:"icon icon-whatsapp v-align-middle"}),`
 Comprar pelo Whats
 `]}),`
 `]}),`
 
`]})," "]}),`
 `,i.jsxs("div",{className:"item swiper-slide",role:"group","aria-label":"3 / 4",ref:O("width:320px"),children:[`
 
 
 
`,i.jsxs("div",{className:"product upon_request has-fast-shopping",id:"product-567302461","product-ref":"32323",children:[`
 
 `,i.jsxs("div",{className:"image",children:[`
 
 `,i.jsxs("a",{href:"https://www.atlantanet.com.br/telha/telhas/telha-eco-classica-vermelha-2-00x0-95m-onduline",className:"space-image",children:[`
 `,i.jsx("img",{loading:"lazy",className:"lazyload loaded",src:"/assets/img-f2c6fc054d7b.webp",alt:"Telha Eco Clássica Vermelha 2,00X0,95M - Onduline","data-ll-status":"loaded"}),`
 
 `]}),`
 
 
 
 
 
 `,i.jsx("div",{className:"product-tags tags-custom","data-tags-count":"0",children:`
 
 
 
 
 `}),`
 
 `]}),`
 `,i.jsxs("a",{className:"product-info",href:"https://www.atlantanet.com.br/telha/telhas/telha-eco-classica-vermelha-2-00x0-95m-onduline",children:[`
 `,i.jsxs("div",{className:"wrapper-product-name",children:[`
 `,i.jsx("h3",{className:"product-name",children:`
 Telha Eco Clássica Vermelha 2,00X0,95M - Onduline
 `}),`
 `]}),`
 `,i.jsx("div",{className:"product-price",children:`
 
 
 `}),`
 
 `]}),`
 
 
 
 
 `,i.jsx("div",{className:"actions",children:`
 `}),`
 
 
 `,i.jsxs("div",{className:"buy-whatsapp buy-whatsapp--list-product",children:[`
 `,i.jsxs("a",{href:"https://api.whatsapp.com/send?phone=5511974659658&text=Ol%C3%83%C2%A1,%20gostei%20deste%20produto:%20Nome:%20Telha%20Eco%20Cl%C3%83%C2%A1ssica%20Vermelha%202,00X0,95M%20-%20Onduline%20|%20Ref:%2032323",target:"_blank",children:[`
 `,i.jsx("i",{className:"icon icon-whatsapp v-align-middle"}),`
 Comprar pelo Whats
 `]}),`
 `]}),`
 
`]})," "]}),`
 `,i.jsxs("div",{className:"item swiper-slide",role:"group","aria-label":"4 / 4",ref:O("width:320px"),children:[`
 
 
 
`,i.jsxs("div",{className:"product upon_request has-fast-shopping",id:"product-933549767","product-ref":"31624",children:[`
 
 `,i.jsxs("div",{className:"image",children:[`
 
 `,i.jsxs("a",{href:"https://www.atlantanet.com.br/telha/telhas/telha-ecologica-stilo-2-00x0-96m-verde-onduline",className:"space-image",children:[`
 `,i.jsx("img",{loading:"lazy",className:"lazyload loaded",src:"/assets/img-561880e52bde.webp",alt:"Telha Ecológica Stilo 2,00X0,96M Verde - Onduline","data-ll-status":"loaded"}),`
 
 `]}),`
 
 
 
 
 
 `,i.jsx("div",{className:"product-tags tags-custom","data-tags-count":"0",children:`
 
 
 
 
 `}),`
 
 `]}),`
 `,i.jsxs("a",{className:"product-info",href:"https://www.atlantanet.com.br/telha/telhas/telha-ecologica-stilo-2-00x0-96m-verde-onduline",children:[`
 `,i.jsxs("div",{className:"wrapper-product-name",children:[`
 `,i.jsx("h3",{className:"product-name",children:`
 Telha Ecológica Stilo 2,00X0,96M Verde - Onduline
 `}),`
 `]}),`
 `,i.jsx("div",{className:"product-price",children:`
 
 
 `}),`
 
 `]}),`
 
 
 
 
 `,i.jsx("div",{className:"actions",children:`
 `}),`
 
 
 `,i.jsxs("div",{className:"buy-whatsapp buy-whatsapp--list-product",children:[`
 `,i.jsxs("a",{href:"https://api.whatsapp.com/send?phone=5511974659658&text=Ol%C3%83%C2%A1,%20gostei%20deste%20produto:%20Nome:%20Telha%20Ecol%C3%83%C2%B3gica%20Stilo%202,00X0,96M%20Verde%20-%20Onduline%20|%20Ref:%2031624",target:"_blank",children:[`
 `,i.jsx("i",{className:"icon icon-whatsapp v-align-middle"}),`
 Comprar pelo Whats
 `]}),`
 `]}),`
 
`]})," "]}),`
 `]}),`
 
 `,i.jsx("div",{className:"prev swiper-button-disabled sf-hidden",tabIndex:"-1",role:"button","aria-label":"Previous slide","aria-controls":"swiper-wrapper-8930379f6e1152e2","aria-disabled":"true",children:`
 
 `}),`
 `,i.jsx("div",{className:"next swiper-button-disabled sf-hidden",tabIndex:"-1",role:"button","aria-label":"Next slide","aria-controls":"swiper-wrapper-8930379f6e1152e2","aria-disabled":"true",children:`
 
 `}),` 
 `,i.jsx("div",{className:"dots swiper-pagination-clickable swiper-pagination-bullets sf-hidden"}),`
 `,i.jsx("span",{className:"swiper-notification sf-hidden","aria-live":"assertive","aria-atomic":"true"})]}),`
 `]}),`
 `]})}function km(){return i.jsxs("main",{className:"site-main",children:[`
 
 
 `,i.jsx("div",{className:"slider_parameters d-none hidden hide","data-quantity-desktop":"4","data-quantity-mobile":"2"}),`
 
 `,i.jsx(om,{}),`
 
`,i.jsx(mm,{}),`
 `,i.jsx(vm,{}),`
 
 
 
 
 
 
 
 
 
 `,i.jsx(jm,{}),`
 
 
 
 
 
 
 
 
 
 
 
 `,i.jsx(bm,{}),`
 
 
 
 
 
 
 
 
 
 
 
 `,i.jsx(Cm,{}),`
 
 
 `,i.jsx(pm,{}),`
 
 
 
 
 
 
 
 
 
 
 `,i.jsx(ym,{}),`
 
 
 
 
 
 
 
 
 
 
 `,i.jsx(Sm,{}),`
 
 `,i.jsx(cm,{}),`
 `,i.jsx(dm,{}),`

`,i.jsx(hm,{}),`
 
 
 
 
 
 
 
 
 `,i.jsx(Nm,{}),`
 
 
 `,i.jsx(wm,{}),`
 
`,i.jsx(gm,{}),`

 
 `,i.jsx(xm,{}),` 
 `,i.jsx(um,{}),`
 `,i.jsx(fm,{}),`
 
 
 `]})}function Em(){return i.jsxs("div",{id:"menu-mobile",className:"menu-mobile",children:[`
 `,i.jsxs("div",{className:"close-box close-overlay",children:[`
 `,i.jsx("i",{className:"icon icon-times"}),`
 `]}),`
 `,i.jsxs("div",{className:"block-title flex align-center",children:[`
 `,i.jsx("div",{className:"header-menu sf-hidden",children:`
 
 
 
 `}),`
 Menu
 `]}),`
 `,i.jsxs("form",{className:"bf-menu-search",action:"#",children:[i.jsx("input",{type:"search",placeholder:"O que deseja procurar?","aria-label":"Buscar produtos"}),i.jsx("button",{type:"submit","aria-label":"Buscar",children:i.jsx("i",{className:"icon icon-search"})})]}),i.jsxs("div",{className:"nav-mobile-wrapper",children:[`
 `,i.jsxs("nav",{className:"nav-mobile",children:[` 
 `,i.jsxs("ul",{className:"list first-level",children:[`
 
 `,i.jsxs("li",{children:[`
 `,i.jsxs("a",{href:"#/categoria/cimento",children:[`
 `,i.jsx("div",{className:"category-image",children:i.jsx("img",{src:"/assets/bf-icon-cimento.svg",alt:"Cimento",width:"20",height:"20"})}),`
 Cimento
 `]}),`
 `]}),`
 
 `,i.jsxs("li",{children:[`
 `,i.jsxs("a",{href:"#/categoria/areia",children:[`
 `,i.jsx("div",{className:"category-image",children:i.jsx("img",{src:"/assets/bf-icon-areia.svg",alt:"Areia",width:"20",height:"20"})}),`
 Areia
 `]}),`
 `]}),`
 
 `,i.jsxs("li",{children:[`
 `,i.jsxs("a",{href:"#/categoria/ferro",children:[`
 `,i.jsx("div",{className:"category-image",children:i.jsx("img",{src:"/assets/bf-icon-ferro.svg",alt:"Ferro",width:"20",height:"20"})}),`
 Ferro
 `]}),`
 `]}),`
 
 `,i.jsxs("li",{children:[`
 `,i.jsxs("a",{href:"#/categoria/eletrica",children:[`
 `,i.jsx("div",{className:"category-image",children:i.jsx("img",{src:"/assets/bf-icon-eletrica.svg",alt:"Elétrica",width:"20",height:"20"})}),`
 Elétrica
 `]}),`
 `]}),`
 
 `,i.jsxs("li",{children:[`
 `,i.jsxs("a",{href:"#/categoria/hidraulica",children:[`
 `,i.jsx("div",{className:"category-image",children:i.jsx("img",{src:"/assets/bf-icon-hidraulica.svg",alt:"Hidráulica",width:"20",height:"20"})}),`
 Hidráulica
 `]}),`
 `]}),`
 
 `,`
 
 `,i.jsxs("li",{children:[`
 `,i.jsxs("a",{href:"#/categoria/telhas",children:[`
 `,i.jsx("div",{className:"category-image",children:i.jsx("img",{src:"/assets/bf-icon-telhas.svg",alt:"Telhas",width:"20",height:"20"})}),`
 Telhas
 `]}),`
 `]}),`
 
 `,i.jsxs("li",{children:[`
 `,i.jsxs("a",{href:"#/categoria/tintas",children:[`
 `,i.jsx("div",{className:"category-image",children:i.jsx("img",{src:"/assets/bf-icon-tintas.svg",alt:"Tintas",width:"20",height:"20"})}),`
 Tintas
 `]}),`
 `]}),`
 
 `]}),` 
 `]}),`
 `]}),`
 `,i.jsxs("div",{className:"menu-mobile-actions",children:[`
 `,i.jsxs("a",{className:"bf-menu-wpp",href:"https://wa.me/5511974659658",target:"_blank",rel:"noopener noreferrer",children:[i.jsx("i",{className:"icon icon-whatsapp"})," Comprar pelo WhatsApp"]}),`
 `,i.jsxs("ul",{className:"menu-actions-mobile__contact",children:[`
 `,i.jsx("li",{className:"wpp-mobile hidden sf-hidden",children:`
 
 
 
 
 
 
 `}),`
 
 `,i.jsx("li",{className:"hidden sf-hidden",children:`
 
 `}),`
 
 `,`
 `,`
 `]}),`
 `]}),`
`]})}function _m(){const e=["Parcelamos suas compras em até 6x sem juros","Compre pelo whatsapp","Loja especializada, mais de 20 anos no mercado."];return i.jsxs("div",{className:"message-top active-slide",children:[`
 `,i.jsxs("div",{className:"swiper-container swiper-container-horizontal",children:[`
 `,i.jsx("div",{className:"swiper-wrapper message-top__content","aria-live":"off",children:e.map(n=>i.jsxs("div",{className:"item swiper-slide",role:"group",children:[`
 `,i.jsxs("a",{href:"javascript:void(0)","aria-label":n,children:[`
 `,n,`
 `]}),`
 `]},n))}),`
 `,i.jsx("div",{className:"prev sf-hidden",tabIndex:"0",role:"button","aria-label":"Previous slide"}),`
 `,i.jsx("div",{className:"next sf-hidden",tabIndex:"0",role:"button","aria-label":"Next slide"}),`
 `,i.jsx("div",{className:"dots"}),`
 `,i.jsx("span",{className:"swiper-notification sf-hidden","aria-live":"assertive","aria-atomic":"true"})]}),`
`]})}function Tm(){return i.jsxs("div",{className:"application",children:[`
 
 
`,i.jsx(Em,{}),` 
`,i.jsx(_m,{}),`
`,i.jsx("div",{className:"header-info sf-hidden",children:`
 
`}),`
`,i.jsx(lm,{}),`
 `,i.jsx(km,{}),`
 
`,i.jsx(im,{}),`
 
 `]})}function Pm(){return i.jsxs("div",{className:"cart",children:[`
 `,i.jsx("div",{className:"cart-backdrop"}),`
 `,i.jsxs("section",{id:"cart",className:"dropdown cart__dropdown","aria-label":"Carrinho",children:[`
 `,i.jsxs("div",{className:"cart__vue js-vue-cart",children:[i.jsxs("div",{className:"cart__vue__header",children:[i.jsxs("div",{className:"cart__vue__icon",children:[i.jsx("i",{className:"icon icon-arrow-left"}),`
 Fechar 
 `]})," ",i.jsx("div",{className:"cart__vue__text",children:i.jsx("span",{children:"Carrinho de Compras"})})]})," ",i.jsx("div",{className:"dropdown__content",children:i.jsx("div",{className:"cart__empty",children:i.jsx("p",{children:`
 Seu carrinho está vazio.
 `})})})," ",i.jsx("div",{className:"dropdown__footer align-center",children:i.jsx("p",{children:"Adicione produtos ao carrinho e eles aparecerão aqui."})})]}),`
 `]}),`
`]})}function zm(){return i.jsxs("div",{role:"dialog","aria-live":"polite","aria-label":"cookieconsent","aria-describedby":"cookieconsent:desc",className:"cc-window cc-banner cc-type-info cc-theme-block cc-bottom cc-color-override-1834562721",children:[i.jsxs("span",{id:"cookieconsent:desc",className:"cc-message",children:["            Utilizamos Cookies para garantir que você obtenha a melhor experiência em nosso site. ",i.jsx("a",{"aria-label":"learn more about cookies",role:"button",tabIndex:"0",className:"cc-link",href:"https://https//www.atlantanet.com.br/privacidade",target:"_blank",children:"Política de privacidade!"})]}),i.jsx("div",{className:"cc-compliance",children:i.jsx("a",{"aria-label":"dismiss cookie message",role:"button",tabIndex:"0",className:"cc-btn cc-dismiss",children:"OK"})})]})}function Lm(e=""){return e.trim().split(" ").filter(n=>!!n.trim())}function Mm(e){Object.keys(e).forEach(n=>{try{e[n]=null}catch{}try{delete e[n]}catch{}})}function mu(e,n=0){return setTimeout(e,n)}function Is(){return Date.now()}function Im(e){return window.getComputedStyle(e,null)}function Om(e,n="x"){const t=Im(e),r=t.transform||t.webkitTransform;if(!r||r==="none")return 0;const s=new DOMMatrixReadOnly(r);return n==="x"?s.m41:s.m42}function Gr(e){return typeof e=="object"&&e!==null&&e.constructor===Object&&Object.prototype.toString.call(e).slice(8,-1)==="Object"}function Am(e){return typeof HTMLElement<"u"&&e instanceof HTMLElement?!0:!!e&&typeof e=="object"&&(e.nodeType===1||e.nodeType===11)}function Me(e,...n){const t=Object(e);for(let r=0;r<n.length;r+=1){const s=n[r];if(s==null||Am(s))continue;const a=s,l=Object.keys(Object(a)).filter(o=>o!=="__proto__"&&o!=="constructor"&&o!=="prototype");for(const o of l){const c=Object.getOwnPropertyDescriptor(a,o);if(!c||!c.enumerable)continue;const d=a[o];Gr(t[o])&&Gr(d)?d.__swiper__?t[o]=d:Me(t[o],d):!Gr(t[o])&&Gr(d)?(t[o]={},d.__swiper__?t[o]=d:Me(t[o],d)):t[o]=d}}return t}function tt(e,n,t){e.style.setProperty(n,t)}function an(e,n=""){const t=[...e.children];return e instanceof HTMLSlotElement&&t.push(...e.assignedElements()),n?t.filter(r=>r.matches(n)):t}function $m(e,n){const t=[n];for(;t.length>0;){const r=t.shift();if(e===r)return!0;t.push(...r.children,...r.shadowRoot?r.shadowRoot.children:[],...r.assignedElements?r.assignedElements():[])}return!1}function Dm(e,n){let t=n.contains(e);return!t&&n instanceof HTMLSlotElement&&(t=[...n.assignedElements()].includes(e),t||(t=$m(e,n))),t}function Os(e){try{console.warn(e)}catch{}}function As(e,n=[]){const t=document.createElement(e);return t.classList.add(...Array.isArray(n)?n:Lm(n)),t}function Fm(e,n){const t=[];let r=e.previousElementSibling;for(;r;)(!n||r.matches(n))&&t.push(r),r=r.previousElementSibling;return t}function Bm(e,n){const t=[];let r=e.nextElementSibling;for(;r;)(!n||r.matches(n))&&t.push(r),r=r.nextElementSibling;return t}function kn(e,n){return window.getComputedStyle(e,null).getPropertyValue(n)}function $s(e){if(!(!e||!e.parentNode))return[...e.parentNode.children].indexOf(e)}function hu(e,n){const t=[];let r=e.parentElement;for(;r;)(!n||r.matches(n))&&t.push(r),r=r.parentElement;return t}function _i(e,n,t){{const r=window.getComputedStyle(e,null);return e[n==="width"?"offsetWidth":"offsetHeight"]+parseFloat(r.getPropertyValue(n==="width"?"margin-right":"margin-top"))+parseFloat(r.getPropertyValue(n==="width"?"margin-left":"margin-bottom"))}}function ce(e){return(Array.isArray(e)?e:[e]).filter(n=>!!n)}function Ti(e,n=""){const t=globalThis.trustedTypes;typeof t<"u"?e.innerHTML=t.createPolicy("html",{createHTML:r=>r}).createHTML(n):e.innerHTML=n}let Ta;function Rm(){return typeof window>"u"?{touch:!1}:{touch:"ontouchstart"in window||navigator.maxTouchPoints>0}}function gu(){return Ta||(Ta=Rm()),Ta}let Pa;function Vm({userAgent:e}={}){if(typeof window>"u")return{ios:!1,android:!1};const n=gu(),t=navigator.platform,r=e||navigator.userAgent,s={ios:!1,android:!1},a=/(Android);?[\s/]+([\d.]+)?/.test(r),l=/(iPhone\sOS|iOS|iPod)/.test(r),o=/iPad/.test(r),c=t==="MacIntel"&&n.touch&&navigator.maxTouchPoints>1,d=o||c;return a&&!(t==="Win32")&&(s.os="android",s.android=!0),(d||l)&&(s.os="ios",s.ios=!0),s}function vu(e={}){return Pa||(Pa=Vm(e)),Pa}let za;function Hm(){if(typeof window>"u")return{isSafari:!1,isWebView:!1,need3dFix:!1};const e=vu(),n=navigator.userAgent,t=n.toLowerCase(),r=t.includes("safari")&&!t.includes("chrome")&&!t.includes("android"),s=/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(n),a=r||s&&e.ios;return{isSafari:r,isWebView:s,need3dFix:a}}function xu(){return za||(za=Hm()),za}const as=(e,n)=>{if(!e||e.destroyed||!e.params)return;const t=()=>e.isElement?"swiper-slide":`.${e.params.slideClass}`,r=n.closest(t());if(r){let s=r.querySelector(`.${e.params.lazyPreloaderClass}`);!s&&e.isElement&&(r.shadowRoot?s=r.shadowRoot.querySelector(`.${e.params.lazyPreloaderClass}`):requestAnimationFrame(()=>{if(r.shadowRoot){const a=r.shadowRoot.querySelector(`.${e.params.lazyPreloaderClass}`);a&&!a.lazyPreloaderManaged&&a.remove()}})),s&&!s.lazyPreloaderManaged&&s.remove()}},La=(e,n)=>{if(!e.slides[n])return;const t=e.slides[n].querySelector('[loading="lazy"]');t&&t.removeAttribute("loading")},Pi=e=>{if(!e||e.destroyed||!e.params)return;let n=e.params.lazyPreloadPrevNext;const t=e.slides.length;if(!t||!n||n<0)return;n=Math.min(n,t);const r=e.params.slidesPerView==="auto"?e.slidesPerViewDynamic():Math.ceil(e.params.slidesPerView),s=e.activeIndex;if(e.params.grid&&(e.params.grid.rows??1)>1){const l=s,o=[l-n];o.push(...Array.from({length:n}).map((c,d)=>l+r+d)),e.slides.forEach((c,d)=>{c.column!==void 0&&o.includes(c.column)&&La(e,d)});return}const a=s+r-1;if(e.params.rewind||e.params.loop)for(let l=s-n;l<=a+n;l+=1){const o=(l%t+t)%t;(o<s||o>a)&&La(e,o)}else for(let l=Math.max(s-n,0);l<=Math.min(a+n,t-1);l+=1)l!==s&&(l>a||l<s)&&La(e,l)};function qm(e,n="window",t){if(!e||n==="container"&&!t)return;let r=!1;const s=n==="window"?window.innerHeight:t.clientHeight,a=Object.keys(e).map(l=>{if(typeof l=="string"&&l.indexOf("@")===0){const o=parseFloat(l.substr(1));return{value:s*o,point:l}}return{value:l,point:l}});a.sort((l,o)=>parseInt(String(l.value),10)-parseInt(String(o.value),10));for(let l=0;l<a.length;l+=1){const{point:o,value:c}=a[l];n==="window"?window.matchMedia(`(min-width: ${c}px)`).matches&&(r=o):c<=t.clientWidth&&(r=o)}return r||"max"}const Vo=(e,n)=>!!(e.grid&&n.grid&&n.grid.rows>1);function Gm(){const e=this,{realIndex:n,initialized:t,params:r,el:s}=e,a=r.breakpoints;if(!a||a&&Object.keys(a).length===0)return;const l=r.breakpointsBase==="window"||!r.breakpointsBase?r.breakpointsBase:"container",o=["window","container"].includes(r.breakpointsBase)||!r.breakpointsBase?e.el:document.querySelector(r.breakpointsBase),c=e.getBreakpoint(a,l,o);if(!c||e.currentBreakpoint===c)return;const d=a,h=(c in d?d[c]:void 0)||e.originalParams,g=Vo(e,r),j=Vo(e,h),w=e.params.grabCursor,y=h.grabCursor,C=r.enabled;g&&!j?(s.classList.remove(`${r.containerModifierClass}grid`,`${r.containerModifierClass}grid-column`),e.emitContainerClasses()):!g&&j&&(s.classList.add(`${r.containerModifierClass}grid`),(h.grid.fill&&h.grid.fill==="column"||!h.grid.fill&&r.grid.fill==="column")&&s.classList.add(`${r.containerModifierClass}grid-column`),e.emitContainerClasses()),w&&!y?e.unsetGrabCursor():!w&&y&&e.setGrabCursor();const m=(b,N)=>b[N];["navigation","pagination","scrollbar"].forEach(b=>{var _,P;const N=m(h,b);if(typeof N>"u")return;const k=m(r,b),L=typeof k=="object"&&k!==null&&k.enabled,A=typeof N=="object"&&N!==null&&N.enabled,G=e[b];L&&!A&&((_=G==null?void 0:G.disable)==null||_.call(G)),!L&&A&&((P=G==null?void 0:G.enable)==null||P.call(G))});const u=h.direction&&h.direction!==r.direction,f=r.loop&&(h.slidesPerView!==r.slidesPerView||u),v=r.loop;u&&t&&e.changeDirection(),Me(e.params,h);const x=e.params.enabled,S=e.params.loop;Object.assign(e,{allowTouchMove:e.params.allowTouchMove,allowSlideNext:e.params.allowSlideNext,allowSlidePrev:e.params.allowSlidePrev}),C&&!x?e.disable():!C&&x&&e.enable(),e.currentBreakpoint=c,e.emit("_beforeBreakpoint",h),t&&(f?(e.loopDestroy(),e.loopCreate(n),e.updateSlides()):!v&&S?(e.loopCreate(n),e.updateSlides()):v&&!S&&e.loopDestroy()),e.emit("breakpoint",h)}var Wm={setBreakpoint:Gm,getBreakpoint:qm};function Um(){const e=this,{isLocked:n,params:t}=e,{slidesOffsetBefore:r}=t;if(r){const s=e.slides.length-1,a=e.slidesGrid[s]+e.slidesSizesGrid[s]+r*2;e.isLocked=e.size>a}else e.isLocked=e.snapGrid.length===1;t.allowSlideNext===!0&&(e.allowSlideNext=!e.isLocked),t.allowSlidePrev===!0&&(e.allowSlidePrev=!e.isLocked),n&&n!==e.isLocked&&(e.isEnd=!1),n!==e.isLocked&&e.emit(e.isLocked?"lock":"unlock")}var Xm={checkOverflow:Um};function Qm(e,n){const t=[];return e.forEach(r=>{typeof r=="object"?Object.keys(r).forEach(s=>{r[s]&&t.push(n+s)}):typeof r=="string"&&t.push(n+r)}),t}function Km(){const e=this,{classNames:n,params:t,rtl:r,el:s,device:a}=e,l=Qm(["initialized",t.direction,{"free-mode":e.params.freeMode&&t.freeMode.enabled},{autoheight:t.autoHeight},{rtl:r},{grid:t.grid&&t.grid.rows>1},{"grid-column":t.grid&&t.grid.rows>1&&t.grid.fill==="column"},{android:a.android},{ios:a.ios},{"css-mode":t.cssMode},{centered:t.cssMode&&t.centeredSlides},{"watch-progress":t.watchSlidesProgress}],t.containerModifierClass);n.push(...l),s.classList.add(...n),e.emitContainerClasses()}function Ym(){const e=this,{el:n,classNames:t}=e;!n||typeof n=="string"||(n.classList.remove(...t),e.emitContainerClasses())}var Zm={addClasses:Km,removeClasses:Ym};const wu={init:!0,direction:"horizontal",oneWayMovement:!1,swiperElementNodeName:"SWIPER-CONTAINER",touchEventsTarget:"wrapper",initialSlide:0,speed:300,cssMode:!1,updateOnWindowResize:!0,resizeObserver:!0,nested:!1,createElements:!1,eventsPrefix:"swiper",enabled:!0,focusableElements:"input, select, option, textarea, button, video, label",width:null,height:null,preventInteractionOnTransition:!1,userAgent:null,url:null,edgeSwipeDetection:!1,edgeSwipeThreshold:20,autoHeight:!1,setWrapperSize:!1,virtualTranslate:!1,effect:"slide",breakpoints:void 0,breakpointsBase:"window",spaceBetween:0,slidesPerView:1,slidesPerGroup:1,slidesPerGroupSkip:0,slidesPerGroupAuto:!1,centeredSlides:!1,centeredSlidesBounds:!1,slidesOffsetBefore:0,slidesOffsetAfter:0,normalizeSlideIndex:!0,centerInsufficientSlides:!1,snapToSlideEdge:!1,watchOverflow:!0,roundLengths:!1,touchRatio:1,touchAngle:45,simulateTouch:!0,shortSwipes:!0,longSwipes:!0,longSwipesRatio:.5,longSwipesMs:300,followFinger:!0,allowTouchMove:!0,threshold:5,touchMoveStopPropagation:!1,touchStartPreventDefault:!0,touchStartForcePreventDefault:!1,touchReleaseOnEdges:!1,uniqueNavElements:!0,resistance:!0,resistanceRatio:.85,watchSlidesProgress:!1,grabCursor:!1,preventClicks:!0,preventClicksPropagation:!0,slideToClickedSlide:!1,loop:!1,loopAddBlankSlides:!0,loopAdditionalSlides:0,loopPreventsSliding:!0,rewind:!1,allowSlidePrev:!0,allowSlideNext:!0,swipeHandler:null,noSwiping:!0,noSwipingClass:"swiper-no-swiping",noSwipingSelector:null,passiveListeners:!0,maxBackfaceHiddenSlides:10,containerModifierClass:"swiper-",slideClass:"swiper-slide",slideBlankClass:"swiper-slide-blank",slideActiveClass:"swiper-slide-active",slideVisibleClass:"swiper-slide-visible",slideFullyVisibleClass:"swiper-slide-fully-visible",slideNextClass:"swiper-slide-next",slidePrevClass:"swiper-slide-prev",wrapperClass:"swiper-wrapper",lazyPreloaderClass:"swiper-lazy-preloader",lazyPreloadPrevNext:0,runCallbacksOnInit:!0,_emitClasses:!1};var Jm={on(e,n,t){const r=this;if(!r.eventsListeners||r.destroyed||typeof n!="function")return r;const s=t?"unshift":"push";return e.split(" ").forEach(a=>{r.eventsListeners[a]||(r.eventsListeners[a]=[]),r.eventsListeners[a][s](n)}),r},once(e,n,t){const r=this;if(!r.eventsListeners||r.destroyed||typeof n!="function")return r;const s=function(...l){r.off(e,s),s.__emitterProxy&&delete s.__emitterProxy,n.apply(r,l)};return s.__emitterProxy=n,r.on(e,s,t)},onAny(e,n){const t=this;if(!t.eventsListeners||t.destroyed||typeof e!="function")return t;const r=n?"unshift":"push";return t.eventsAnyListeners.indexOf(e)<0&&t.eventsAnyListeners[r](e),t},offAny(e){const n=this;if(!n.eventsListeners||n.destroyed||!n.eventsAnyListeners)return n;const t=n.eventsAnyListeners.indexOf(e);return t>=0&&n.eventsAnyListeners.splice(t,1),n},off(e,n){const t=this;return!t.eventsListeners||t.destroyed||!t.eventsListeners||e.split(" ").forEach(r=>{typeof n>"u"?t.eventsListeners[r]=[]:t.eventsListeners[r]&&t.eventsListeners[r].forEach((s,a)=>{(s===n||s.__emitterProxy&&s.__emitterProxy===n)&&t.eventsListeners[r].splice(a,1)})}),t},emit(...e){const n=this;if(!n.eventsListeners||n.destroyed||!n.eventsListeners)return n;let t,r,s;if(typeof e[0]=="string"||Array.isArray(e[0]))t=e[0],r=e.slice(1,e.length),s=n;else{const l=e[0];t=l.events,r=l.data??[],s=l.context||n}return r.unshift(s),(Array.isArray(t)?t:t.split(" ")).forEach(l=>{n.eventsAnyListeners&&n.eventsAnyListeners.length&&n.eventsAnyListeners.forEach(o=>{o.apply(s,[l,...r])}),n.eventsListeners&&n.eventsListeners[l]&&n.eventsListeners[l].forEach(o=>{o.apply(s,r)})}),n}};function eh(e){const n=this;n.destroyed||n.enabled&&(n.allowClick||(n.params.preventClicks&&e.preventDefault(),n.params.preventClicksPropagation&&n.animating&&(e.stopPropagation(),e.stopImmediatePropagation())))}function nh(){const e=this;e.destroyed||e.documentTouchHandlerProceeded||(e.documentTouchHandlerProceeded=!0,e.params.touchReleaseOnEdges&&(e.el.style.touchAction="auto"))}function th(e){const n=this;n.destroyed||(as(n,e.target),!(n.params.cssMode||n.params.slidesPerView!=="auto"&&!n.params.autoHeight)&&n.update())}function rh(){var c;const e=this,{params:n,el:t}=e;if(t&&t.offsetWidth===0)return;n.breakpoints&&e.setBreakpoint();const{allowSlideNext:r,allowSlidePrev:s,snapGrid:a}=e,l=e.virtual&&((c=e.params.virtual)==null?void 0:c.enabled);e.allowSlideNext=!0,e.allowSlidePrev=!0,e.updateSize(),e.updateSlides(),e.updateSlidesClasses();const o=l&&n.loop;if((n.slidesPerView==="auto"||n.slidesPerView>1)&&e.isEnd&&!e.isBeginning&&!e.params.centeredSlides&&!o){const d=l?e.virtual.slides.length:e.slides.length;e.slideTo(d-1,0,!1,!0)}else e.params.loop&&!l?e.slideToLoop(e.realIndex,0,!1,!0):e.slideTo(e.activeIndex,0,!1,!0);if(e.autoplay&&e.autoplay.running&&e.autoplay.paused){const d=e.autoplay;clearTimeout(d.resizeTimeout),d.resizeTimeout=setTimeout(()=>{e.autoplay&&e.autoplay.running&&e.autoplay.paused&&e.autoplay.resume()},500)}e.allowSlidePrev=s,e.allowSlideNext=r,e.params.watchOverflow&&a!==e.snapGrid&&e.checkOverflow()}function sh(){const e=this;if(e.destroyed)return;const{wrapperEl:n,rtlTranslate:t,enabled:r}=e;if(!r)return;e.previousTranslate=e.translate,e.isHorizontal()?e.translate=-n.scrollLeft:e.translate=-n.scrollTop,e.translate===0&&(e.translate=0),e.updateActiveIndex(),e.updateSlidesClasses();let s;const a=e.maxTranslate()-e.minTranslate();a===0?s=0:s=(e.translate-e.minTranslate())/a,s!==e.progress&&e.updateProgress(t?-e.translate:e.translate),e.emit("setTranslate",e.translate,!1)}function ah(e){var v;const n=this;if(n.destroyed)return;const t=n.touchEventsData;let r=e.originalEvent??e;if(r.type==="touchend"||r.type==="touchcancel"){const S=[...r.changedTouches].find(b=>b.identifier===t.touchId);if(!S||S.identifier!==t.touchId)return}else if(t.touchId!==null||r.pointerId!==t.pointerId)return;if(["pointercancel","pointerout","pointerleave","contextmenu"].includes(r.type)&&!(["pointercancel","contextmenu"].includes(r.type)&&(n.browser.isSafari||n.browser.isWebView)))return;t.pointerId=null,t.touchId=null;const{params:a,touches:l,rtlTranslate:o,slidesGrid:c,enabled:d}=n;if(!d||!a.simulateTouch&&r.pointerType==="mouse")return;if(t.allowTouchCallbacks&&n.emit("touchEnd",r),t.allowTouchCallbacks=!1,!t.isTouched){t.isMoved&&a.grabCursor&&n.setGrabCursor(!1),t.isMoved=!1,t.startMoving=!1;return}a.grabCursor&&t.isMoved&&t.isTouched&&(n.allowSlideNext===!0||n.allowSlidePrev===!0)&&n.setGrabCursor(!1);const p=Is(),h=p-t.touchStartTime;if(n.allowClick){const x=r.path??(r.composedPath&&r.composedPath());n.updateClickedSlide(x&&x[0],x),n.emit("tap click",r),h<300&&p-t.lastClickTime<300&&n.emit("doubleTap doubleClick",r)}if(t.lastClickTime=Is(),mu(()=>{n.destroyed||(n.allowClick=!0)}),!t.isTouched||!t.isMoved||!n.swipeDirection||l.diff===0&&!t.loopSwapReset||t.currentTranslate===t.startTranslate&&!t.loopSwapReset){t.isTouched=!1,t.isMoved=!1,t.startMoving=!1;return}t.isTouched=!1,t.isMoved=!1,t.startMoving=!1;let g;if(a.followFinger?g=o?n.translate:-n.translate:g=-(t.currentTranslate??0),a.cssMode)return;if(a.freeMode&&a.freeMode.enabled){n.freeMode.onTouchEnd({currentPos:g});return}const j=g>=-n.maxTranslate()&&!n.params.loop;let w=0,y=n.slidesSizesGrid[0];for(let x=0;x<c.length;x+=x<a.slidesPerGroupSkip?1:a.slidesPerGroup){const S=x<a.slidesPerGroupSkip-1?1:a.slidesPerGroup;typeof c[x+S]<"u"?(j||g>=c[x]&&g<c[x+S])&&(w=x,y=c[x+S]-c[x]):(j||g>=c[x])&&(w=x,y=c[c.length-1]-c[c.length-2])}let C=null,m=null;a.rewind&&(n.isBeginning?m=(v=a.virtual)!=null&&v.enabled&&n.virtual?n.virtual.slides.length-1:n.slides.length-1:n.isEnd&&(C=0));const u=(g-c[w])/y,f=w<a.slidesPerGroupSkip-1?1:a.slidesPerGroup;if(h>a.longSwipesMs){if(!a.longSwipes){n.slideTo(n.activeIndex);return}n.swipeDirection==="next"&&(u>=a.longSwipesRatio?n.slideTo(a.rewind&&n.isEnd?C:w+f):n.slideTo(w)),n.swipeDirection==="prev"&&(u>1-a.longSwipesRatio?n.slideTo(w+f):m!==null&&u<0&&Math.abs(u)>a.longSwipesRatio?n.slideTo(m):n.slideTo(w))}else{if(!a.shortSwipes){n.slideTo(n.activeIndex);return}n.navigation&&(r.target===n.navigation.nextEl||r.target===n.navigation.prevEl)?r.target===n.navigation.nextEl?n.slideTo(w+f):n.slideTo(w):(n.swipeDirection==="next"&&n.slideTo(C!==null?C:w+f),n.swipeDirection==="prev"&&n.slideTo(m!==null?m:w))}}function ih(e){const n=this;if(n.destroyed)return;const t=n.touchEventsData,{params:r,touches:s,rtlTranslate:a,enabled:l}=n;if(!l||!r.simulateTouch&&e.pointerType==="mouse")return;const o=e,c=o.originalEvent??o;if(c.type==="pointermove"&&(t.touchId!==null||c.pointerId!==t.pointerId))return;let d;if(c.type==="touchmove"){const b=[...c.changedTouches].find(N=>N.identifier===t.touchId);if(!b||b.identifier!==t.touchId)return;d=b}else d=c;if(!t.isTouched){t.startMoving&&t.isScrolling&&n.emit("touchMoveOpposite",c);return}const p=d.pageX,h=d.pageY;if(c.preventedByNestedSwiper){s.startX=p,s.startY=h;return}if(!n.allowTouchMove){c.target.matches(t.focusableElements)||(n.allowClick=!1),t.isTouched&&(Object.assign(s,{startX:p,startY:h,currentX:p,currentY:h}),t.touchStartTime=Is());return}if(r.touchReleaseOnEdges&&!r.loop)if(n.isVertical()){if(h<s.startY&&n.translate<=n.maxTranslate()||h>s.startY&&n.translate>=n.minTranslate()){t.isTouched=!1,t.isMoved=!1;return}}else{if(a&&(p>s.startX&&-n.translate<=n.maxTranslate()||p<s.startX&&-n.translate>=n.minTranslate()))return;if(!a&&(p<s.startX&&n.translate<=n.maxTranslate()||p>s.startX&&n.translate>=n.minTranslate()))return}if(document.activeElement&&document.activeElement.matches(t.focusableElements)&&document.activeElement!==c.target&&c.pointerType!=="mouse"&&document.activeElement.blur(),document.activeElement&&c.target===document.activeElement&&c.target.matches(t.focusableElements)){t.isMoved=!0,n.allowClick=!1;return}t.allowTouchCallbacks&&n.emit("touchMove",c),s.previousX=s.currentX,s.previousY=s.currentY,s.currentX=p,s.currentY=h;const g=s.currentX-s.startX,j=s.currentY-s.startY;if(n.params.threshold&&Math.sqrt(g**2+j**2)<n.params.threshold)return;if(typeof t.isScrolling>"u"){let S;n.isHorizontal()&&s.currentY===s.startY||n.isVertical()&&s.currentX===s.startX?t.isScrolling=!1:g*g+j*j>=25&&(S=Math.atan2(Math.abs(j),Math.abs(g))*180/Math.PI,t.isScrolling=n.isHorizontal()?S>r.touchAngle:90-S>r.touchAngle)}if(t.isScrolling&&n.emit("touchMoveOpposite",c),typeof t.startMoving>"u"&&(s.currentX!==s.startX||s.currentY!==s.startY)&&(t.startMoving=!0),t.isScrolling||c.type==="touchmove"&&t.preventTouchMoveFromPointerMove){t.isTouched=!1;return}if(!t.startMoving)return;n.allowClick=!1,!r.cssMode&&c.cancelable&&c.preventDefault(),r.touchMoveStopPropagation&&!r.nested&&c.stopPropagation();let w=n.isHorizontal()?g:j,y=n.isHorizontal()?s.currentX-s.previousX:s.currentY-s.previousY;r.oneWayMovement&&(w=Math.abs(w)*(a?1:-1),y=Math.abs(y)*(a?1:-1)),s.diff=w,w*=r.touchRatio,a&&(w=-w,y=-y);const C=n.touchesDirection;n.swipeDirection=w>0?"prev":"next",n.touchesDirection=y>0?"prev":"next";const m=n.params.loop&&!r.cssMode,u=n.touchesDirection==="next"&&n.allowSlideNext||n.touchesDirection==="prev"&&n.allowSlidePrev;if(!t.isMoved){if(m&&u&&n.loopFix({direction:n.swipeDirection}),t.startTranslate=n.getTranslate(),n.setTransition(0),n.animating){const S=new window.CustomEvent("transitionend",{bubbles:!0,cancelable:!0,detail:{bySwiperTouchMove:!0}});n.wrapperEl.dispatchEvent(S)}t.allowMomentumBounce=!1,r.grabCursor&&(n.allowSlideNext===!0||n.allowSlidePrev===!0)&&n.setGrabCursor(!0),n.emit("sliderFirstMove",c)}if(new Date().getTime(),r._loopSwapReset!==!1&&t.isMoved&&t.allowThresholdMove&&C!==n.touchesDirection&&m&&u&&Math.abs(w)>=1){Object.assign(s,{startX:p,startY:h,currentX:p,currentY:h,startTranslate:t.currentTranslate}),t.loopSwapReset=!0,t.startTranslate=t.currentTranslate;return}n.emit("sliderMove",c),t.isMoved=!0;const f=t.startTranslate??0;t.currentTranslate=w+f;let v=!0,x=r.resistanceRatio;if(r.touchReleaseOnEdges&&(x=0),w>0?(m&&u&&t.allowThresholdMove&&t.currentTranslate>(r.centeredSlides?n.minTranslate()-n.slidesSizesGrid[n.activeIndex+1]-(r.slidesPerView!=="auto"&&n.slides.length-r.slidesPerView>=2?n.slidesSizesGrid[n.activeIndex+1]+n.params.spaceBetween:0)-n.params.spaceBetween:n.minTranslate())&&n.loopFix({direction:"prev",setTranslate:!0,activeSlideIndex:0}),t.currentTranslate>n.minTranslate()&&(v=!1,r.resistance&&(t.currentTranslate=n.minTranslate()-1+(-n.minTranslate()+f+w)**x))):w<0&&(m&&u&&t.allowThresholdMove&&t.currentTranslate<(r.centeredSlides?n.maxTranslate()+n.slidesSizesGrid[n.slidesSizesGrid.length-1]+n.params.spaceBetween+(r.slidesPerView!=="auto"&&n.slides.length-r.slidesPerView>=2?n.slidesSizesGrid[n.slidesSizesGrid.length-1]+n.params.spaceBetween:0):n.maxTranslate())&&n.loopFix({direction:"next",setTranslate:!0,activeSlideIndex:n.slides.length-(r.slidesPerView==="auto"?n.slidesPerViewDynamic():Math.ceil(parseFloat(String(r.slidesPerView))))}),t.currentTranslate<n.maxTranslate()&&(v=!1,r.resistance&&(t.currentTranslate=n.maxTranslate()+1-(n.maxTranslate()-f-w)**x))),v&&(c.preventedByNestedSwiper=!0),!n.allowSlideNext&&n.swipeDirection==="next"&&(t.currentTranslate??0)<f&&(t.currentTranslate=f),!n.allowSlidePrev&&n.swipeDirection==="prev"&&(t.currentTranslate??0)>f&&(t.currentTranslate=f),!n.allowSlidePrev&&!n.allowSlideNext&&(t.currentTranslate=f),r.threshold>0)if(Math.abs(w)>r.threshold||t.allowThresholdMove){if(!t.allowThresholdMove){t.allowThresholdMove=!0,s.startX=s.currentX,s.startY=s.currentY,t.currentTranslate=t.startTranslate,s.diff=n.isHorizontal()?s.currentX-s.startX:s.currentY-s.startY;return}}else{t.currentTranslate=t.startTranslate;return}!r.followFinger||r.cssMode||((r.freeMode&&r.freeMode.enabled&&n.freeMode||r.watchSlidesProgress)&&(n.updateActiveIndex(),n.updateSlidesClasses()),r.freeMode&&r.freeMode.enabled&&n.freeMode&&n.freeMode.onTouchMove(),n.updateProgress(t.currentTranslate),n.setTranslate(t.currentTranslate??0))}function lh(e,n){function t(r){if(!r||r===document||r===window)return null;let s=r;s.assignedSlot&&(s=s.assignedSlot);const a=s.closest(e);if(!a&&!s.getRootNode)return null;const l=s.getRootNode();return a||t(l.host)}return t(n)}function Ho(e,n,t){const{params:r}=e,s=r.edgeSwipeDetection,a=r.edgeSwipeThreshold;return s&&(t<=a||t>=window.innerWidth-a)?s==="prevent"?(n.preventDefault(),!0):!1:!0}function oh(e){const n=this;if(n.destroyed)return;const t=e.originalEvent??e,r=n.touchEventsData;if(t.type==="pointerdown"){const u=t;if(r.pointerId!==null&&r.pointerId!==u.pointerId)return;r.pointerId=u.pointerId}else t.type==="touchstart"&&t.targetTouches.length===1&&(r.touchId=t.targetTouches[0].identifier);if(t.type==="touchstart"){Ho(n,t,t.targetTouches[0].pageX);return}const{params:s,touches:a,enabled:l}=n;if(!l||!s.simulateTouch&&t.pointerType==="mouse"||n.animating&&s.preventInteractionOnTransition)return;!n.animating&&s.cssMode&&s.loop&&n.loopFix();let o=t.target;if(s.touchEventsTarget==="wrapper"&&!Dm(o,n.wrapperEl))return;const c=t;if(typeof c.which=="number"&&c.which===3||typeof c.button=="number"&&c.button>0||r.isTouched&&r.isMoved)return;const d=!!s.noSwipingClass&&s.noSwipingClass!=="",p=t.composedPath?t.composedPath():t.path;d&&t.target&&t.target.shadowRoot&&p&&(o=p[0]);const h=s.noSwipingSelector?s.noSwipingSelector:`.${s.noSwipingClass}`,g=!!(t.target&&t.target.shadowRoot);if(s.noSwiping&&(g?lh(h,o):o.closest(h))){n.allowClick=!0;return}if(s.swipeHandler&&typeof s.swipeHandler=="string"&&!o.closest(s.swipeHandler))return;const j=t;a.currentX=j.pageX,a.currentY=j.pageY;const w=a.currentX,y=a.currentY;if(!Ho(n,t,w))return;Object.assign(r,{isTouched:!0,isMoved:!1,allowTouchCallbacks:!0,isScrolling:void 0,startMoving:void 0}),a.startX=w,a.startY=y,r.touchStartTime=Is(),n.allowClick=!0,n.updateSize(),n.swipeDirection=void 0,s.threshold>0&&(r.allowThresholdMove=!1);let C=!0;o.matches(r.focusableElements)&&(C=!1,o.nodeName==="SELECT"&&(r.isTouched=!1)),document.activeElement&&document.activeElement.matches(r.focusableElements)&&document.activeElement!==o&&(j.pointerType==="mouse"||j.pointerType!=="mouse"&&!o.matches(r.focusableElements))&&document.activeElement.blur();const m=C&&n.allowTouchMove&&s.touchStartPreventDefault;(s.touchStartForcePreventDefault||m)&&!o.isContentEditable&&t.preventDefault(),s.freeMode&&s.freeMode.enabled&&n.freeMode&&n.animating&&!s.cssMode&&n.freeMode.onTouchStart(),n.emit("touchStart",t)}const yu=(e,n)=>{const{params:t,el:r,wrapperEl:s,device:a}=e,l=!!t.nested,o=n==="on"?"addEventListener":"removeEventListener",c=n;if(!r||typeof r=="string")return;document[o]("touchstart",e.onDocumentTouchStart,{passive:!1,capture:l}),r[o]("touchstart",e.onTouchStart,{passive:!1}),r[o]("pointerdown",e.onTouchStart,{passive:!1}),document[o]("touchmove",e.onTouchMove,{passive:!1,capture:l}),document[o]("pointermove",e.onTouchMove,{passive:!1,capture:l}),document[o]("touchend",e.onTouchEnd,{passive:!0}),document[o]("pointerup",e.onTouchEnd,{passive:!0}),document[o]("pointercancel",e.onTouchEnd,{passive:!0}),document[o]("touchcancel",e.onTouchEnd,{passive:!0}),document[o]("pointerout",e.onTouchEnd,{passive:!0}),document[o]("pointerleave",e.onTouchEnd,{passive:!0}),document[o]("contextmenu",e.onTouchEnd,{passive:!0}),(t.preventClicks||t.preventClicksPropagation)&&r[o]("click",e.onClick,!0),t.cssMode&&s[o]("scroll",e.onScroll);const d=p=>{e[c](p,rh,!0)};t.updateOnWindowResize?d(a.ios||a.android?"resize orientationchange observerUpdate":"resize observerUpdate"):d("observerUpdate"),r[o]("load",e.onLoad,{capture:!0})};function ch(){const e=this,{params:n}=e;e.onTouchStart=oh.bind(e),e.onTouchMove=ih.bind(e),e.onTouchEnd=ah.bind(e),e.onDocumentTouchStart=nh.bind(e),n.cssMode&&(e.onScroll=sh.bind(e)),e.onClick=eh.bind(e),e.onLoad=th.bind(e),yu(e,"on")}function dh(){yu(this,"off")}var uh={attachEvents:ch,detachEvents:dh};function fh(e){const n=this;if(!n.params.simulateTouch||n.params.watchOverflow&&n.isLocked||n.params.cssMode)return;const t=n.params.touchEventsTarget==="container"?n.el:n.wrapperEl;n.isElement&&(n.__preventObserver__=!0),t.style.cursor="move",t.style.cursor=e?"grabbing":"grab",n.isElement&&requestAnimationFrame(()=>{n.__preventObserver__=!1})}function ph(){const e=this;e.params.watchOverflow&&e.isLocked||e.params.cssMode||(e.isElement&&(e.__preventObserver__=!0),e[e.params.touchEventsTarget==="container"?"el":"wrapperEl"].style.cursor="",e.isElement&&requestAnimationFrame(()=>{e.__preventObserver__=!1}))}var mh={setGrabCursor:fh,unsetGrabCursor:ph};function hh(e,n){var j;const t=this,{params:r,slidesEl:s}=t;if(!r.loop||t.virtual&&((j=t.params.virtual)!=null&&j.enabled))return;const a=()=>{an(s,`.${r.slideClass}, swiper-slide`).forEach((y,C)=>{y.setAttribute("data-swiper-slide-index",String(C))})},l=()=>{const w=an(s,`.${r.slideBlankClass}`);w.forEach(y=>{y.remove()}),w.length>0&&(t.recalcSlides(),t.updateSlides())},o=t.grid&&r.grid&&r.grid.rows>1;r.loopAddBlankSlides&&(r.slidesPerGroup>1||o)&&l();const c=r.slidesPerGroup*(o?r.grid.rows:1),d=t.slides.length%c!==0,p=o&&t.slides.length%r.grid.rows!==0,h=w=>{for(let y=0;y<w;y+=1){const C=t.isElement?As("swiper-slide",[r.slideBlankClass]):As("div",[r.slideClass,r.slideBlankClass]);t.slidesEl.append(C)}};if(d){if(r.loopAddBlankSlides){const w=c-t.slides.length%c;h(w),t.recalcSlides(),t.updateSlides()}else Os("Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");a()}else if(p){if(r.loopAddBlankSlides){const w=r.grid.rows-t.slides.length%r.grid.rows;h(w),t.recalcSlides(),t.updateSlides()}else Os("Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");a()}else a();const g=r.centeredSlides||!!r.slidesOffsetBefore||!!r.slidesOffsetAfter;t.loopFix({slideRealIndex:e,direction:g?void 0:"next",initial:n})}function gh(){var s;const e=this,{params:n,slidesEl:t}=e;if(!n.loop||!t||e.virtual&&((s=e.params.virtual)!=null&&s.enabled))return;e.recalcSlides();const r=[];e.slides.forEach(a=>{const l=a,o=typeof l.swiperSlideIndex>"u"?Number(a.getAttribute("data-swiper-slide-index")):l.swiperSlideIndex;r[o]=a}),e.slides.forEach(a=>{a.removeAttribute("data-swiper-slide-index")}),r.forEach(a=>{t.append(a)}),e.recalcSlides(),e.slideTo(e.realIndex,0)}function vh(e={}){var F,U;const{slideRealIndex:n,slideTo:t=!0,direction:r,setTranslate:s,activeSlideIndex:a,initial:l,byController:o,byMousewheel:c}=e;let d=a;const p=this;if(!p.params.loop)return;p.emit("beforeLoopFix");const{slides:h,allowSlidePrev:g,allowSlideNext:j,slidesEl:w,params:y}=p,{centeredSlides:C,slidesOffsetBefore:m,slidesOffsetAfter:u,initialSlide:f}=y,v=C||!!m||!!u;if(p.allowSlidePrev=!0,p.allowSlideNext=!0,p.virtual&&((F=y.virtual)!=null&&F.enabled)){if(t){const D=p.virtual.slides.length,H=p.virtual.slidesBefore??0;!v&&p.snapIndex===0?p.slideTo(D,0,!1,!0):v&&p.snapIndex<y.slidesPerView?p.slideTo(D+p.snapIndex,0,!1,!0):p.snapIndex===p.snapGrid.length-1&&p.slideTo(H,0,!1,!0)}p.allowSlidePrev=g,p.allowSlideNext=j,p.emit("loopFix");return}let x=y.slidesPerView;x==="auto"?x=p.slidesPerViewDynamic():(x=Math.ceil(parseFloat(String(y.slidesPerView))),v&&x%2===0&&(x=x+1));const S=y.slidesPerGroupAuto?x:y.slidesPerGroup;let b=v?Math.max(S,Math.ceil(x/2)):S;b%S!==0&&(b+=S-b%S),b+=y.loopAdditionalSlides,p.loopedSlides=b;const N=p.grid&&y.grid&&y.grid.rows>1;h.length<x+b||p.params.effect==="cards"&&h.length<x+b*2?Os("Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled or not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters"):N&&y.grid.fill==="row"&&Os("Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`");const k=[],L=[],A=N?Math.ceil(h.length/y.grid.rows):h.length,G=l&&A-f<x&&!v;let _=G?f:p.activeIndex;typeof d>"u"?d=p.getSlideIndex(h.find(D=>D.classList.contains(y.slideActiveClass))):_=d;const P=r==="next"||!r,$=r==="prev"||!r;let W=0,V=0;const T=(N?h[d].column??0:d)+(v&&typeof s>"u"?-x/2+.5:0);if(T<b){W=Math.max(b-T,S);for(let D=0;D<b-T;D+=1){const H=D-Math.floor(D/A)*A;if(N){const fe=A-H-1;for(let Ce=h.length-1;Ce>=0;Ce-=1)h[Ce].column===fe&&k.push(Ce)}else k.push(A-H-1)}}else if(T+x>A-b){V=Math.max(T-(A-b*2),S),G&&(V=Math.max(V,x-A+f+1));for(let D=0;D<V;D+=1){const H=D-Math.floor(D/A)*A;N?h.forEach((fe,Ce)=>{fe.column===H&&L.push(Ce)}):L.push(H)}}if(p.__preventObserver__=!0,requestAnimationFrame(()=>{p.__preventObserver__=!1}),p.params.effect==="cards"&&h.length<x+b*2&&(L.includes(d)&&L.splice(L.indexOf(d),1),k.includes(d)&&k.splice(k.indexOf(d),1)),$&&k.forEach(D=>{const H=h[D];H.swiperLoopMoveDOM=!0,w.prepend(H),H.swiperLoopMoveDOM=!1}),P&&L.forEach(D=>{const H=h[D];H.swiperLoopMoveDOM=!0,w.append(H),H.swiperLoopMoveDOM=!1}),p.recalcSlides(),y.slidesPerView==="auto"?p.updateSlides():N&&(k.length>0&&$||L.length>0&&P)&&p.slides.forEach((D,H)=>{p.grid.updateSlide(H,D,p.slides)}),y.watchSlidesProgress&&p.updateSlidesOffset(),t){if(k.length>0&&$){if(typeof n>"u"){const D=p.slidesGrid[_],fe=p.slidesGrid[_+W]-D;c?p.setTranslate(p.translate-fe):(p.slideTo(_+Math.ceil(W),0,!1,!0),s&&(p.touchEventsData.startTranslate=p.touchEventsData.startTranslate-fe,p.touchEventsData.currentTranslate=p.touchEventsData.currentTranslate-fe))}else if(s){const D=N?k.length/y.grid.rows:k.length;p.slideTo(p.activeIndex+D,0,!1,!0),p.touchEventsData.currentTranslate=p.translate}}else if(L.length>0&&P)if(typeof n>"u"){const D=p.slidesGrid[_],fe=p.slidesGrid[_-V]-D;c?p.setTranslate(p.translate-fe):(p.slideTo(_-V,0,!1,!0),s&&(p.touchEventsData.startTranslate=p.touchEventsData.startTranslate-fe,p.touchEventsData.currentTranslate=p.touchEventsData.currentTranslate-fe))}else{const D=N?L.length/y.grid.rows:L.length;p.slideTo(p.activeIndex-D,0,!1,!0)}}p.allowSlidePrev=g,p.allowSlideNext=j;const M=(U=p.controller)==null?void 0:U.control;if(M&&!o){const D={slideRealIndex:n,direction:r,setTranslate:s,activeSlideIndex:d,byController:!0};Array.isArray(M)?M.forEach(H=>{!H.destroyed&&H.params.loop&&H.loopFix({...D,slideTo:H.params.slidesPerView===y.slidesPerView?t:!1})}):M instanceof p.constructor&&M.params.loop&&M.loopFix({...D,slideTo:M.params.slidesPerView===y.slidesPerView?t:!1})}p.emit("loopFix")}var xh={loopCreate:hh,loopFix:vh,loopDestroy:gh};function wh(e,n){return function(r={}){const s=Object.keys(r)[0],a=r[s];if(typeof a!="object"||a===null){Me(n,r);return}if(e[s]===!0&&(e[s]={enabled:!0}),s==="navigation"&&e[s]&&e[s].enabled&&!e[s].prevEl&&!e[s].nextEl&&(e[s].auto=!0),["pagination","scrollbar"].indexOf(s)>=0&&e[s]&&e[s].enabled&&!e[s].el&&(e[s].auto=!0),!(s in e&&"enabled"in a)){Me(n,r);return}typeof e[s]=="object"&&!("enabled"in e[s])&&(e[s].enabled=!0),e[s]||(e[s]={enabled:!1}),Me(n,r)}}const yh=({swiper:e,extendParams:n,on:t})=>{const r=[],s=(o,c={})=>{const d=window.MutationObserver||window.WebkitMutationObserver;if(!d)return;const p=new d(h=>{if(e.__preventObserver__)return;if(h.length===1){e.emit("observerUpdate",h[0]);return}const g=function(){e.emit("observerUpdate",h[0])};window.requestAnimationFrame?window.requestAnimationFrame(g):window.setTimeout(g,0)});p.observe(o,{attributes:typeof c.attributes>"u"?!0:c.attributes,childList:e.isElement||(typeof c.childList>"u"?!0:c.childList),characterData:typeof c.characterData>"u"?!0:c.characterData}),r.push(p)},a=()=>{if(e.params.observer){if(e.params.observeParents){const o=hu(e.hostEl);for(let c=0;c<o.length;c+=1)s(o[c])}s(e.hostEl,{childList:e.params.observeSlideChildren}),s(e.wrapperEl,{attributes:!1})}},l=()=>{r.forEach(o=>{o.disconnect()}),r.splice(0,r.length)};n({observer:!1,observeParents:!1,observeSlideChildren:!1}),t("init",a),t("destroy",l)},jh=({swiper:e,on:n,emit:t})=>{let r=null,s=null;const a=()=>{!e||e.destroyed||!e.initialized||(t("beforeResize"),t("resize"))},l=()=>{!e||e.destroyed||!e.initialized||(r=new ResizeObserver(d=>{s=window.requestAnimationFrame(()=>{const{width:p,height:h}=e;let g=p,j=h;d.forEach(({contentBoxSize:w,contentRect:y,target:C})=>{if(C&&C!==e.el)return;const m=Array.isArray(w)?w[0]:w;g=y?y.width:m.inlineSize,j=y?y.height:m.blockSize}),(g!==p||j!==h)&&a()})}),r.observe(e.el))},o=()=>{s&&window.cancelAnimationFrame(s),r&&r.unobserve&&e.el&&(r.unobserve(e.el),r=null)},c=()=>{!e||e.destroyed||!e.initialized||t("orientationchange")};n("init",()=>{if(e.params.resizeObserver&&typeof window.ResizeObserver<"u"){l();return}window.addEventListener("resize",a),window.addEventListener("orientationchange",c)}),n("destroy",()=>{o(),window.removeEventListener("resize",a),window.removeEventListener("orientationchange",c)})};function Sh(e,n=!0,t){var p;const r=this,{enabled:s,params:a,animating:l}=r;if(!s||r.destroyed)return r;typeof e>"u"&&(e=r.params.speed);let o=a.slidesPerGroup;a.slidesPerView==="auto"&&a.slidesPerGroup===1&&a.slidesPerGroupAuto&&(o=Math.max(r.slidesPerViewDynamic("current",!0),1));const c=r.activeIndex<a.slidesPerGroupSkip?1:o,d=r.virtual&&((p=a.virtual)==null?void 0:p.enabled);if(a.loop){if(l&&!d&&a.loopPreventsSliding)return!1;if(r.loopFix({direction:"next"}),r._clientLeft=r.wrapperEl.clientLeft,r.activeIndex===r.slides.length-1&&a.cssMode)return requestAnimationFrame(()=>{r.slideTo(r.activeIndex+c,e,n,t)}),!0}return a.rewind&&r.isEnd?r.slideTo(0,e,n,t):r.slideTo(r.activeIndex+c,e,n,t)}function bh(e,n=!0,t){var u,f;const r=this,{params:s,snapGrid:a,slidesGrid:l,rtlTranslate:o,enabled:c,animating:d}=r;if(!c||r.destroyed)return r;typeof e>"u"&&(e=r.params.speed);const p=r.virtual&&((u=s.virtual)==null?void 0:u.enabled);if(s.loop){if(d&&!p&&s.loopPreventsSliding)return!1;r.loopFix({direction:"prev"}),r._clientLeft=r.wrapperEl.clientLeft}const h=o?r.translate:-r.translate;function g(v){return v<0?-Math.floor(Math.abs(v)):Math.floor(v)}const j=g(h),w=a.map(v=>g(v)),y=s.freeMode&&s.freeMode.enabled;let C=a[w.indexOf(j)-1];if(typeof C>"u"&&(s.cssMode||y)){let v;a.forEach((x,S)=>{j>=x&&(v=S)}),typeof v<"u"&&(C=y?a[v]:a[v>0?v-1:v])}let m=0;if(typeof C<"u"&&(m=l.indexOf(C),m<0&&(m=r.activeIndex-1),s.slidesPerView==="auto"&&s.slidesPerGroup===1&&s.slidesPerGroupAuto&&(m=m-r.slidesPerViewDynamic("previous",!0)+1,m=Math.max(m,0))),s.rewind&&r.isBeginning){const v=(f=r.params.virtual)!=null&&f.enabled&&r.virtual?r.virtual.slides.length-1:r.slides.length-1;return r.slideTo(v,e,n,t)}else if(s.loop&&r.activeIndex===0&&s.cssMode)return requestAnimationFrame(()=>{r.slideTo(m,e,n,t)}),!0;return r.slideTo(m,e,n,t)}function Nh(e,n=!0,t){const r=this;if(!r.destroyed)return typeof e>"u"&&(e=r.params.speed),r.slideTo(r.activeIndex,e,n,t)}function Ch(e=0,n,t=!0,r,s){var b;typeof e=="string"&&(e=parseInt(e,10));const a=this;let l=e;l<0&&(l=0);const{params:o,snapGrid:c,slidesGrid:d,previousIndex:p,activeIndex:h,rtlTranslate:g,wrapperEl:j,enabled:w}=a;if(!w&&!r&&!s||a.destroyed||a.animating&&o.preventInteractionOnTransition)return!1;typeof n>"u"&&(n=a.params.speed);const y=Math.min(a.params.slidesPerGroupSkip,l);let C=y+Math.floor((l-y)/a.params.slidesPerGroup);C>=c.length&&(C=c.length-1);const m=-c[C];if(o.normalizeSlideIndex)for(let N=0;N<d.length;N+=1){const k=-Math.floor(m*100),L=Math.floor(d[N]*100),A=Math.floor(d[N+1]*100);typeof d[N+1]<"u"?k>=L&&k<A-(A-L)/2?l=N:k>=L&&k<A&&(l=N+1):k>=L&&(l=N)}if(a.initialized&&l!==h&&(!a.allowSlideNext&&(g?m>a.translate&&m>a.minTranslate():m<a.translate&&m<a.minTranslate())||!a.allowSlidePrev&&m>a.translate&&m>a.maxTranslate()&&(h||0)!==l))return!1;l!==(p||0)&&t&&a.emit("beforeSlideChangeStart"),a.updateProgress(m);let u;l>h?u="next":l<h?u="prev":u="reset";const f=a.virtual&&((b=a.params.virtual)==null?void 0:b.enabled);if(!(f&&s)&&(g&&-m===a.translate||!g&&m===a.translate))return a.updateActiveIndex(l),o.autoHeight&&a.updateAutoHeight(),a.updateSlidesClasses(),o.effect!=="slide"&&a.setTranslate(m),u!=="reset"&&(a.transitionStart(t,u),a.transitionEnd(t,u)),!1;if(o.cssMode){const N=a.isHorizontal(),k=g?m:-m;return n===0?(f&&(a.wrapperEl.style.scrollSnapType="none",a._immediateVirtual=!0),f&&!a._cssModeVirtualInitialSet&&(a.params.initialSlide??0)>0?(a._cssModeVirtualInitialSet=!0,requestAnimationFrame(()=>{j[N?"scrollLeft":"scrollTop"]=k})):j[N?"scrollLeft":"scrollTop"]=k,f&&requestAnimationFrame(()=>{a.wrapperEl.style.scrollSnapType="",a._immediateVirtual=!1})):j.scrollTo({[N?"left":"top"]:k,behavior:"smooth"}),!0}const S=xu().isSafari;return f&&!s&&S&&a.isElement&&a.virtual.update(!1,!1,l),a.setTransition(n),a.setTranslate(m),a.updateActiveIndex(l),a.updateSlidesClasses(),a.emit("beforeTransitionStart",n,r),a.transitionStart(t,u),n===0?a.transitionEnd(t,u):a.animating||(a.animating=!0,a.onSlideToWrapperTransitionEnd||(a.onSlideToWrapperTransitionEnd=function(k){!a||a.destroyed||k.target===this&&(a.wrapperEl.removeEventListener("transitionend",a.onSlideToWrapperTransitionEnd),a.onSlideToWrapperTransitionEnd=null,delete a.onSlideToWrapperTransitionEnd,a.transitionEnd(t,u))}),a.wrapperEl.addEventListener("transitionend",a.onSlideToWrapperTransitionEnd)),!0}function kh(){const e=this;if(e.destroyed)return;const{params:n,slidesEl:t,clickedSlide:r,clickedIndex:s}=e;if(r===void 0||s===void 0)return;const a=n.slidesPerView==="auto"?e.slidesPerViewDynamic():n.slidesPerView;let l=e.getSlideIndexWhenGrid(s),o;const c=e.isElement?"swiper-slide":`.${n.slideClass}`,d=e.grid&&e.params.grid&&e.params.grid.rows>1;if(n.loop){if(e.animating)return;o=parseInt(r.getAttribute("data-swiper-slide-index"),10),n.centeredSlides?e.slideToLoop(o):l>(d?(e.slides.length-a)/2-(e.params.grid.rows-1):e.slides.length-a)?(e.loopFix(),l=e.getSlideIndex(an(t,`${c}[data-swiper-slide-index="${o}"]`)[0]),mu(()=>{e.slideTo(l)})):e.slideTo(l)}else e.slideTo(l)}function Eh(e,n=!0,t,r=.5){const s=this;if(s.destroyed)return;typeof e>"u"&&(e=s.params.speed);let a=s.activeIndex;const l=Math.min(s.params.slidesPerGroupSkip,a),o=l+Math.floor((a-l)/s.params.slidesPerGroup),c=s.rtlTranslate?s.translate:-s.translate;if(c>=s.snapGrid[o]){const d=s.snapGrid[o],p=s.snapGrid[o+1];c-d>(p-d)*r&&(a+=s.params.slidesPerGroup)}else{const d=s.snapGrid[o-1],p=s.snapGrid[o];c-d<=(p-d)*r&&(a-=s.params.slidesPerGroup)}return a=Math.max(a,0),a=Math.min(a,s.slidesGrid.length-1),s.slideTo(a,e,n,t)}function _h(e=0,n,t=!0,r){var o;typeof e=="string"&&(e=parseInt(e,10));const s=this;if(s.destroyed)return;typeof n>"u"&&(n=s.params.speed);const a=s.grid&&s.params.grid&&s.params.grid.rows>1;let l=e;if(s.params.loop)if(s.virtual&&((o=s.params.virtual)!=null&&o.enabled))l=l+(s.virtual.slidesBefore??0);else{let c;if(a){const C=l*s.params.grid.rows,m=s.slides.find(u=>Number(u.getAttribute("data-swiper-slide-index"))===C);c=(m==null?void 0:m.column)??0}else c=s.getSlideIndexByData(l);const d=a?Math.ceil(s.slides.length/s.params.grid.rows):s.slides.length,{centeredSlides:p,slidesOffsetBefore:h,slidesOffsetAfter:g}=s.params,j=p||!!h||!!g;let w;s.params.slidesPerView==="auto"?w=s.slidesPerViewDynamic():(w=Math.ceil(parseFloat(String(s.params.slidesPerView))),j&&w%2===0&&(w=w+1));let y=d-c<w;if(j&&(y=y||c<Math.ceil(w/2)),r&&j&&s.params.slidesPerView!=="auto"&&!a&&(y=!1),y){const C=j?c<s.activeIndex?"prev":"next":c-s.activeIndex-1<s.params.slidesPerView?"next":"prev";s.loopFix({direction:C,slideTo:!0,activeSlideIndex:C==="next"?c+1:c-d+1,slideRealIndex:C==="next"?s.realIndex:void 0})}if(a){const C=l*s.params.grid.rows,m=s.slides.find(u=>Number(u.getAttribute("data-swiper-slide-index"))===C);l=(m==null?void 0:m.column)??0}else l=s.getSlideIndexByData(l)}return requestAnimationFrame(()=>{s.slideTo(l,n,t,r)}),s}var Th={slideTo:Ch,slideToLoop:_h,slideNext:Sh,slidePrev:bh,slideReset:Nh,slideToClosest:Eh,slideToClickedSlide:kh};function Ph(e,n){const t=this;t.params.cssMode||(t.wrapperEl.style.transitionDuration=`${e}ms`,t.wrapperEl.style.transitionDelay=e===0?"0ms":""),t.emit("setTransition",e,n)}function ju({swiper:e,runCallbacks:n,direction:t,step:r}){const{activeIndex:s,previousIndex:a}=e;let l=t;l||(s>a?l="next":s<a?l="prev":l="reset"),e.emit(`transition${r}`),n&&l==="reset"?e.emit(`slideResetTransition${r}`):n&&s!==a&&(e.emit(`slideChangeTransition${r}`),l==="next"?e.emit(`slideNextTransition${r}`):e.emit(`slidePrevTransition${r}`))}function zh(e=!0,n){const t=this,{params:r}=t;t.animating=!1,!r.cssMode&&(t.setTransition(0),ju({swiper:t,runCallbacks:e,direction:n,step:"End"}))}function Lh(e=!0,n){const t=this,{params:r}=t;r.cssMode||(r.autoHeight&&t.updateAutoHeight(),ju({swiper:t,runCallbacks:e,direction:n,step:"Start"}))}var Mh={setTransition:Ph,transitionStart:Lh,transitionEnd:zh};function Ih(e=this.isHorizontal()?"x":"y"){const n=this,{params:t,rtlTranslate:r,translate:s,wrapperEl:a}=n;if(t.virtualTranslate)return r?-s:s;if(t.cssMode)return s;let l=Om(a,e);return l+=n.cssOverflowAdjustment(),r&&(l=-l),l||0}function Oh(){return-this.snapGrid[this.snapGrid.length-1]}function Ah(){return-this.snapGrid[0]}function $h(e,n){const t=this,{rtlTranslate:r,params:s,wrapperEl:a,progress:l}=t;let o=0,c=0;const d=0;t.isHorizontal()?o=r?-e:e:c=e,s.roundLengths&&(o=Math.floor(o),c=Math.floor(c)),t.previousTranslate=t.translate,t.translate=t.isHorizontal()?o:c,s.cssMode?a[t.isHorizontal()?"scrollLeft":"scrollTop"]=t.isHorizontal()?-o:-c:s.virtualTranslate||(t.isHorizontal()?o-=t.cssOverflowAdjustment():c-=t.cssOverflowAdjustment(),a.style.transform=`translate3d(${o}px, ${c}px, ${d}px)`);let p;const h=t.maxTranslate()-t.minTranslate();h===0?p=0:p=(e-t.minTranslate())/h,p!==l&&t.updateProgress(e),t.emit("setTranslate",t.translate,n)}function Dh(e=0,n=this.params.speed,t=!0,r=!0,s){const a=this,{params:l,wrapperEl:o}=a;if(a.animating&&l.preventInteractionOnTransition)return!1;const c=a.minTranslate(),d=a.maxTranslate();let p;if(r&&e>c?p=c:r&&e<d?p=d:p=e,a.updateProgress(p),l.cssMode){const h=a.isHorizontal();return n===0?o[h?"scrollLeft":"scrollTop"]=-p:o.scrollTo({[h?"left":"top"]:-p,behavior:"smooth"}),!0}return n===0?(a.setTransition(0),a.setTranslate(p),t&&(a.emit("beforeTransitionStart",n,s),a.emit("transitionEnd"))):(a.setTransition(n),a.setTranslate(p),t&&(a.emit("beforeTransitionStart",n,s),a.emit("transitionStart")),a.animating||(a.animating=!0,a.onTranslateToWrapperTransitionEnd||(a.onTranslateToWrapperTransitionEnd=function(g){!a||a.destroyed||g.target===this&&(a.wrapperEl.removeEventListener("transitionend",a.onTranslateToWrapperTransitionEnd),a.onTranslateToWrapperTransitionEnd=null,delete a.onTranslateToWrapperTransitionEnd,a.animating=!1,t&&a.emit("transitionEnd"))}),a.wrapperEl.addEventListener("transitionend",a.onTranslateToWrapperTransitionEnd))),!0}var Fh={getTranslate:Ih,setTranslate:$h,minTranslate:Ah,maxTranslate:Oh,translateTo:Dh};function Bh(e){const{slidesGrid:n,params:t}=e,r=e.rtlTranslate?e.translate:-e.translate;let s;for(let a=0;a<n.length;a+=1)typeof n[a+1]<"u"?r>=n[a]&&r<n[a+1]-(n[a+1]-n[a])/2?s=a:r>=n[a]&&r<n[a+1]&&(s=a+1):r>=n[a]&&(s=a);return t.normalizeSlideIndex&&(s<0||typeof s>"u")&&(s=0),s}function Rh(e){var j,w;const n=this,t=n.rtlTranslate?n.translate:-n.translate,{snapGrid:r,params:s,activeIndex:a,realIndex:l,snapIndex:o}=n;let c=e,d;const p=y=>{const C=n.virtual.slides;let m=y-(n.virtual.slidesBefore??0);return m<0&&(m=C.length+m),m>=C.length&&(m-=C.length),m};if(typeof c>"u"&&(c=Bh(n)),r.indexOf(t)>=0)d=r.indexOf(t);else{const y=Math.min(s.slidesPerGroupSkip,c);d=y+Math.floor((c-y)/s.slidesPerGroup)}if(d>=r.length&&(d=r.length-1),c===a&&!n.params.loop){d!==o&&(n.snapIndex=d,n.emit("snapIndexChange"));return}if(c===a&&n.params.loop&&n.virtual&&((j=n.params.virtual)!=null&&j.enabled)){n.realIndex=p(c);return}const h=n.grid&&s.grid&&s.grid.rows>1;let g;if(n.virtual&&((w=s.virtual)!=null&&w.enabled))s.loop?g=p(c):g=c;else if(h){const y=n.slides.find(m=>m.column===c);let C=parseInt(y.getAttribute("data-swiper-slide-index"),10);Number.isNaN(C)&&(C=Math.max(n.slides.indexOf(y),0)),g=Math.floor(C/s.grid.rows)}else if(n.slides[c]){const y=n.slides[c].getAttribute("data-swiper-slide-index");y?g=parseInt(y,10):g=c}else g=c;Object.assign(n,{previousSnapIndex:o,snapIndex:d,previousRealIndex:l,realIndex:g,previousIndex:a,activeIndex:c}),n.initialized&&Pi(n),n.emit("activeIndexChange"),n.emit("snapIndexChange"),(n.initialized||n.params.runCallbacksOnInit)&&(l!==g&&n.emit("realIndexChange"),n.emit("slideChange"))}function Vh(e){var o;const n=this,t=[],r=n.virtual&&((o=n.params.virtual)==null?void 0:o.enabled);let s=0,a;typeof e=="number"?n.setTransition(e):e===!0&&n.setTransition(n.params.speed);const l=c=>r?n.slides[n.getSlideIndexByData(c)]:n.slides[c];if(n.params.slidesPerView!=="auto"&&n.params.slidesPerView>1)if(n.params.centeredSlides)(n.visibleSlides||[]).forEach(c=>{t.push(c)});else for(a=0;a<Math.ceil(n.params.slidesPerView);a+=1){const c=n.activeIndex+a;if(c>n.slides.length&&!r)break;const d=l(c);d&&t.push(d)}else{const c=l(n.activeIndex);c&&t.push(c)}for(a=0;a<t.length;a+=1)if(typeof t[a]<"u"){const c=t[a].offsetHeight;s=c>s?c:s}(s||s===0)&&(n.wrapperEl.style.height=`${s}px`)}function Hh(e,n){var o;const t=this,r=t.params;let s=e.closest(`.${r.slideClass}, swiper-slide`);!s&&t.isElement&&n&&n.length>1&&n.includes(e)&&[...n.slice(n.indexOf(e)+1,n.length)].forEach(c=>{!s&&c.matches&&c.matches(`.${r.slideClass}, swiper-slide`)&&(s=c)});let a=!1,l;if(s){for(let c=0;c<t.slides.length;c+=1)if(t.slides[c]===s){a=!0,l=c;break}}if(s&&a)t.clickedSlide=s,t.virtual&&((o=t.params.virtual)!=null&&o.enabled)?t.clickedIndex=parseInt(s.getAttribute("data-swiper-slide-index"),10):t.clickedIndex=l;else{t.clickedSlide=void 0,t.clickedIndex=void 0;return}r.slideToClickedSlide&&t.clickedIndex!==void 0&&t.clickedIndex!==t.activeIndex&&t.slideToClickedSlide()}function qh(e){const n=this;if(typeof e>"u"){const p=n.rtlTranslate?-1:1;e=n&&n.translate&&n.translate*p||0}const t=n.params,r=n.maxTranslate()-n.minTranslate();let{progress:s,isBeginning:a,isEnd:l}=n,o=n.progressLoop;const c=a,d=l;if(r===0)s=0,a=!0,l=!0;else{s=(e-n.minTranslate())/r;const p=Math.abs(e-n.minTranslate())<1,h=Math.abs(e-n.maxTranslate())<1;a=p||s<=0,l=h||s>=1,p&&(s=0),h&&(s=1)}if(t.loop){const p=n.getSlideIndexByData(0),h=n.getSlideIndexByData(n.slides.length-1),g=n.slidesGrid[p],j=n.slidesGrid[h],w=n.slidesGrid[n.slidesGrid.length-1],y=Math.abs(e);y>=g?o=(y-g)/w:o=(y+w-j)/w,o>1&&(o-=1)}Object.assign(n,{progress:s,progressLoop:o,isBeginning:a,isEnd:l}),(t.watchSlidesProgress||t.centeredSlides&&t.autoHeight)&&n.updateSlidesProgress(e),a&&!c&&n.emit("reachBeginning toEdge"),l&&!d&&n.emit("reachEnd toEdge"),(c&&!a||d&&!l)&&n.emit("fromEdge"),n.emit("progress",s)}function Gh(){const e=this;let n,t;const r=e.el;typeof e.params.width<"u"&&e.params.width!==null?n=e.params.width:n=r.clientWidth,typeof e.params.height<"u"&&e.params.height!==null?t=e.params.height:t=r.clientHeight,!(n===0&&e.isHorizontal()||t===0&&e.isVertical())&&(n=n-parseInt(kn(r,"padding-left")||"0",10)-parseInt(kn(r,"padding-right")||"0",10),t=t-parseInt(kn(r,"padding-top")||"0",10)-parseInt(kn(r,"padding-bottom")||"0",10),Number.isNaN(n)&&(n=0),Number.isNaN(t)&&(t=0),Object.assign(e,{width:n,height:t,size:e.isHorizontal()?n:t}))}function Wh(){var A,G;const e=this;function n(_,P){return parseFloat(_.getPropertyValue(e.getDirectionLabel(P))||"0")}const t=e.params,{wrapperEl:r,slidesEl:s,rtlTranslate:a,wrongRTL:l}=e,o=!!(e.virtual&&((A=t.virtual)!=null&&A.enabled)),c=o?e.virtual.slides.length:e.slides.length,d=an(s,`.${e.params.slideClass}, swiper-slide`),p=o?e.virtual.slides.length:d.length;let h=[];const g=[],j=[],w=_=>typeof _=="function"?_.call(e):_,y=w(t.slidesOffsetBefore),C=w(t.slidesOffsetAfter),m=e.snapGrid.length,u=e.slidesGrid.length,f=e.size-y-C;let v=t.spaceBetween,x=-y,S=0,b=0;if(typeof f>"u")return;typeof v=="string"&&v.indexOf("%")>=0?v=parseFloat(v.replace("%",""))/100*f:typeof v=="string"&&(v=parseFloat(v)),e.virtualSize=-v-y-C,d.forEach(_=>{a?_.style.marginLeft="":_.style.marginRight="",_.style.marginBottom="",_.style.marginTop=""}),t.centeredSlides&&t.cssMode&&(tt(r,"--swiper-centered-offset-before",""),tt(r,"--swiper-centered-offset-after","")),t.cssMode&&(tt(r,"--swiper-slides-offset-before",`${y}px`),tt(r,"--swiper-slides-offset-after",`${C}px`));const N=t.grid&&t.grid.rows>1&&e.grid;N?e.grid.initSlides(d):e.grid&&e.grid.unsetSlides();let k=0;const L=t.slidesPerView==="auto"&&t.breakpoints&&Object.keys(t.breakpoints).filter(_=>{const P=t.breakpoints[_];return typeof(P==null?void 0:P.slidesPerView)<"u"}).length>0;for(let _=0;_<p;_+=1){k=0;const P=d[_];if(!(P&&(N&&e.grid.updateSlide(_,P,d),kn(P,"display")==="none"))){if(o&&t.slidesPerView==="auto")(G=t.virtual)!=null&&G.slidesPerViewAutoSlideSize&&(k=t.virtual.slidesPerViewAutoSlideSize),k&&P&&(t.roundLengths&&(k=Math.floor(k)),P.style[e.getDirectionLabel("width")]=`${k}px`);else if(t.slidesPerView==="auto"){L&&(P.style[e.getDirectionLabel("width")]="");const $=getComputedStyle(P),W=P.style.transform,V=P.style.webkitTransform;if(W&&(P.style.transform="none"),V&&(P.style.webkitTransform="none"),t.roundLengths)k=e.isHorizontal()?_i(P,"width"):_i(P,"height");else{const z=n($,"width"),T=n($,"padding-left"),M=n($,"padding-right"),F=n($,"margin-left"),U=n($,"margin-right"),D=$.getPropertyValue("box-sizing");if(D&&D==="border-box")k=z+F+U;else{const{clientWidth:H,offsetWidth:fe}=P;k=z+T+M+F+U+(fe-H)}}W&&(P.style.transform=W),V&&(P.style.webkitTransform=V),t.roundLengths&&(k=Math.floor(k))}else k=(f-(t.slidesPerView-1)*v)/t.slidesPerView,t.roundLengths&&(k=Math.floor(k)),P&&(P.style[e.getDirectionLabel("width")]=`${k}px`);P&&(P.swiperSlideSize=k),j.push(k),t.centeredSlides?(x=x+k/2+S/2+v,S===0&&_!==0&&(x=x-f/2-v),_===0&&(x=x-f/2-v),Math.abs(x)<1/1e3&&(x=0),t.roundLengths&&(x=Math.floor(x)),b%t.slidesPerGroup===0&&h.push(x),g.push(x)):(t.roundLengths&&(x=Math.floor(x)),(b-Math.min(e.params.slidesPerGroupSkip,b))%e.params.slidesPerGroup===0&&h.push(x),g.push(x),x=x+k+v),e.virtualSize+=k+v,S=k,b+=1}}if(e.virtualSize=Math.max(e.virtualSize,f)+C,a&&l&&(t.effect==="slide"||t.effect==="coverflow")&&(r.style.width=`${e.virtualSize+v}px`),t.setWrapperSize&&(r.style[e.getDirectionLabel("width")]=`${e.virtualSize+v}px`),N&&e.grid.updateWrapperSize(k,h),!t.centeredSlides){const _=t.slidesPerView!=="auto"&&t.slidesPerView%1!==0,P=t.snapToSlideEdge&&!t.loop&&(t.slidesPerView==="auto"||_);let $=h.length;if(P){let V;if(t.slidesPerView==="auto"){V=1;let z=0;for(let T=j.length-1;T>=0&&(z+=j[T]+(T<j.length-1?v:0),z<=f);T-=1)V=j.length-T}else V=Math.floor(t.slidesPerView);$=Math.max(p-V,0)}const W=[];for(let V=0;V<h.length;V+=1){let z=h[V];t.roundLengths&&(z=Math.floor(z)),P?V<=$&&W.push(z):h[V]<=e.virtualSize-f&&W.push(z)}h=W,Math.floor(e.virtualSize-f)-Math.floor(h[h.length-1])>1&&(P||h.push(e.virtualSize-f))}if(o&&t.loop){const _=j[0]+v,P=e.virtual.slidesBefore??0,$=e.virtual.slidesAfter??0,W=P+$;if(t.slidesPerGroup>1){const V=Math.ceil(W/t.slidesPerGroup),z=_*t.slidesPerGroup;for(let T=0;T<V;T+=1)h.push(h[h.length-1]+z)}for(let V=0;V<W;V+=1)t.slidesPerGroup===1&&h.push(h[h.length-1]+_),g.push(g[g.length-1]+_),e.virtualSize+=_}if(h.length===0&&(h=[0]),v!==0){const _=e.isHorizontal()&&a?"marginLeft":e.getDirectionLabel("marginRight");d.filter((P,$)=>!t.cssMode||t.loop?!0:$!==d.length-1).forEach(P=>{P.style[_]=`${v}px`})}if(t.centeredSlides&&t.centeredSlidesBounds){let _=0;j.forEach($=>{_+=$+(v||0)}),_-=v;const P=_>f?_-f:0;h=h.map($=>$<=0?-y:$>P?P+C:$)}if(t.centerInsufficientSlides){let _=0;if(j.forEach(P=>{_+=P+(v||0)}),_-=v,_<f){const P=(f-_)/2;h.forEach(($,W)=>{h[W]=$-P}),g.forEach(($,W)=>{g[W]=$+P})}}if(Object.assign(e,{slides:d,snapGrid:h,slidesGrid:g,slidesSizesGrid:j}),t.centeredSlides&&t.cssMode&&!t.centeredSlidesBounds){tt(r,"--swiper-centered-offset-before",`${-h[0]}px`),tt(r,"--swiper-centered-offset-after",`${e.size/2-j[j.length-1]/2}px`);const _=-e.snapGrid[0],P=-e.slidesGrid[0];e.snapGrid=e.snapGrid.map($=>$+_),e.slidesGrid=e.slidesGrid.map($=>$+P)}if(p!==c&&e.emit("slidesLengthChange"),h.length!==m&&(e.params.watchOverflow&&e.checkOverflow(),e.emit("snapGridLengthChange")),g.length!==u&&e.emit("slidesGridLengthChange"),t.watchSlidesProgress&&e.updateSlidesOffset(),e.emit("slidesUpdated"),!o&&!t.cssMode&&(t.effect==="slide"||t.effect==="fade")){const _=`${t.containerModifierClass}backface-hidden`,P=e.el.classList.contains(_);p<=t.maxBackfaceHiddenSlides?P||e.el.classList.add(_):P&&e.el.classList.remove(_)}}const Ma=(e,n,t)=>{n&&!e.classList.contains(t)?e.classList.add(t):!n&&e.classList.contains(t)&&e.classList.remove(t)};function Uh(){var h;const e=this,{slides:n,params:t,slidesEl:r,activeIndex:s}=e,a=!!(e.virtual&&((h=t.virtual)!=null&&h.enabled)),l=e.grid&&t.grid&&t.grid.rows>1,o=g=>an(r,`.${t.slideClass}${g}, swiper-slide${g}`)[0];let c,d,p;if(a)if(t.loop){const g=e.virtual.slides;let j=s-(e.virtual.slidesBefore??0);j<0&&(j=g.length+j),j>=g.length&&(j-=g.length),c=o(`[data-swiper-slide-index="${j}"]`)}else c=o(`[data-swiper-slide-index="${s}"]`);else l?(c=n.find(g=>g.column===s),p=n.find(g=>g.column===s+1),d=n.find(g=>g.column===s-1)):c=n[s];c&&(l||(p=Bm(c,`.${t.slideClass}, swiper-slide`)[0],t.loop&&!p&&(p=n[0]),d=Fm(c,`.${t.slideClass}, swiper-slide`)[0],t.loop&&!d===0&&(d=n[n.length-1]))),n.forEach(g=>{Ma(g,g===c,t.slideActiveClass),Ma(g,g===p,t.slideNextClass),Ma(g,g===d,t.slidePrevClass)}),e.emitSlidesClasses()}function Xh(){const e=this,n=e.slides,t=e.isElement?e.isHorizontal()?e.wrapperEl.offsetLeft:e.wrapperEl.offsetTop:0;for(let r=0;r<n.length;r+=1)n[r].swiperSlideOffset=(e.isHorizontal()?n[r].offsetLeft:n[r].offsetTop)-t-e.cssOverflowAdjustment()}const qo=(e,n,t)=>{n&&!e.classList.contains(t)?e.classList.add(t):!n&&e.classList.contains(t)&&e.classList.remove(t)};function Qh(e=this&&this.translate||0){const n=this,t=n.params,{slides:r,rtlTranslate:s,snapGrid:a}=n;if(r.length===0)return;typeof r[0].swiperSlideOffset>"u"&&n.updateSlidesOffset();let l=-e;s&&(l=e),n.visibleSlidesIndexes=[],n.visibleSlides=[];let o=t.spaceBetween;typeof o=="string"&&o.indexOf("%")>=0?o=parseFloat(o.replace("%",""))/100*n.size:typeof o=="string"&&(o=parseFloat(o));for(let c=0;c<r.length;c+=1){const d=r[c];let p=d.swiperSlideOffset??0;t.cssMode&&t.centeredSlides&&(p-=r[0].swiperSlideOffset??0);const h=d.swiperSlideSize??0,g=(l+(t.centeredSlides?n.minTranslate():0)-p)/(h+o),j=(l-a[0]+(t.centeredSlides?n.minTranslate():0)-p)/(h+o),w=-(l-p),y=w+n.slidesSizesGrid[c],C=w>=0&&w<=n.size-n.slidesSizesGrid[c],m=w>=0&&w<n.size-1||y>1&&y<=n.size||w<=0&&y>=n.size;m&&(n.visibleSlides.push(d),n.visibleSlidesIndexes.push(c)),qo(d,m,t.slideVisibleClass),qo(d,C,t.slideFullyVisibleClass),d.progress=s?-g:g,d.originalProgress=s?-j:j}}var Kh={updateSize:Gh,updateSlides:Wh,updateAutoHeight:Vh,updateSlidesOffset:Xh,updateSlidesProgress:Qh,updateProgress:qh,updateSlidesClasses:Uh,updateActiveIndex:Rh,updateClickedSlide:Hh};const Yh={eventsEmitter:Jm,update:Kh,translate:Fh,transition:Mh,slide:Th,loop:xh,grabCursor:mh,events:uh,breakpoints:Wm,checkOverflow:Xm,classes:Zm},zi={},Be=class Be{constructor(...n){let t,r;if(n.length===1&&n[0]!==null&&typeof n[0]=="object"&&Object.prototype.toString.call(n[0]).slice(8,-1)==="Object"?r=n[0]:[t,r]=n,r||(r={}),r=Me({},r),t&&!r.el&&(r.el=t),r.el&&typeof r.el=="string"&&typeof document<"u"&&document.querySelectorAll(r.el).length>1){const o=[];return document.querySelectorAll(r.el).forEach(c=>{const d=Me({},r,{el:c});o.push(new Be(d))}),o}const s=this;s.__swiper__=!0,s.support=gu(),s.device=vu({userAgent:r.userAgent??void 0}),s.browser=xu(),s.eventsListeners={},s.eventsAnyListeners=[],s.modules=[...s.__modules__||[]],r.modules&&Array.isArray(r.modules)&&r.modules.forEach(o=>{const c=o;typeof c=="function"&&s.modules.indexOf(c)<0&&s.modules.push(c)});const a={};s.modules.forEach(o=>{o({params:r,swiper:s,extendParams:wh(r,a),on:s.on.bind(s),once:s.once.bind(s),off:s.off.bind(s),emit:s.emit.bind(s)})});const l=Me({},wu,a);if(s.params=Me({},l,zi,r),s.originalParams=Me({},s.params),s.passedParams=Me({},r),s.params&&s.params.on){const o=s.params.on;Object.keys(o).forEach(c=>{const d=o[c];d&&s.on(c,d)})}return s.params&&s.params.onAny&&s.onAny(s.params.onAny),Object.assign(s,{enabled:s.params.enabled,el:t,classNames:[],slides:[],slidesGrid:[],snapGrid:[],slidesSizesGrid:[],isHorizontal(){return s.params.direction==="horizontal"},isVertical(){return s.params.direction==="vertical"},activeIndex:0,realIndex:0,isBeginning:!0,isEnd:!1,translate:0,previousTranslate:0,progress:0,velocity:0,animating:!1,cssOverflowAdjustment(){return Math.trunc(this.translate/2**23)*2**23},allowSlideNext:s.params.allowSlideNext,allowSlidePrev:s.params.allowSlidePrev,touchEventsData:{isTouched:void 0,isMoved:void 0,allowTouchCallbacks:void 0,touchStartTime:void 0,isScrolling:void 0,currentTranslate:void 0,startTranslate:void 0,allowThresholdMove:void 0,focusableElements:s.params.focusableElements,lastClickTime:0,clickTimeout:void 0,velocities:[],allowMomentumBounce:void 0,startMoving:void 0,pointerId:null,touchId:null},allowClick:!0,allowTouchMove:s.params.allowTouchMove,touches:{startX:0,startY:0,currentX:0,currentY:0,diff:0},imagesToLoad:[],imagesLoaded:0}),s.emit("_swiper"),s.params.init&&s.init(),s}getDirectionLabel(n){return this.isHorizontal()?n:{width:"height","margin-top":"margin-left","margin-bottom ":"margin-right","margin-left":"margin-top","margin-right":"margin-bottom","padding-left":"padding-top","padding-right":"padding-bottom",marginRight:"marginBottom"}[n]}isHorizontal(){return this.params.direction==="horizontal"}isVertical(){return this.params.direction==="vertical"}cssOverflowAdjustment(){return Math.trunc(this.translate/2**23)*2**23}getSlideIndex(n){const{slidesEl:t,params:r}=this,s=an(t,`.${r.slideClass}, swiper-slide`),a=$s(s[0]);return $s(n)-(a??0)}getSlideIndexByData(n){return this.getSlideIndex(this.slides.find(t=>Number(t.getAttribute("data-swiper-slide-index"))===n))}getSlideIndexWhenGrid(n){return this.grid&&this.params.grid&&this.params.grid.rows>1&&(this.params.grid.fill==="column"?n=Math.floor(n/this.params.grid.rows):this.params.grid.fill==="row"&&(n=n%Math.ceil(this.slides.length/this.params.grid.rows))),n}recalcSlides(){const{slidesEl:n,params:t}=this;this.slides=an(n,`.${t.slideClass}, swiper-slide`)}enable(){this.enabled||(this.enabled=!0,this.params.grabCursor&&this.setGrabCursor(),this.emit("enable"))}disable(){this.enabled&&(this.enabled=!1,this.params.grabCursor&&this.unsetGrabCursor(),this.emit("disable"))}setProgress(n,t){n=Math.min(Math.max(n,0),1);const r=this.minTranslate(),a=(this.maxTranslate()-r)*n+r;this.translateTo(a,typeof t>"u"?0:t),this.updateActiveIndex(),this.updateSlidesClasses()}emitContainerClasses(){if(!this.params._emitClasses||!this.el)return;const n=this.el.className.split(" ").filter(t=>t.indexOf("swiper")===0||t.indexOf(this.params.containerModifierClass)===0);this.emit("_containerClasses",n.join(" "))}getSlideClasses(n){return this.destroyed?"":n.className.split(" ").filter(t=>t.indexOf("swiper-slide")===0||t.indexOf(this.params.slideClass)===0).join(" ")}emitSlidesClasses(){if(!this.params._emitClasses||!this.el)return;const n=[];this.slides.forEach(t=>{const r=this.getSlideClasses(t);n.push({slideEl:t,classNames:r}),this.emit("_slideClass",t,r)}),this.emit("_slideClasses",n)}slidesPerViewDynamic(n="current",t=!1){const{params:r,slides:s,slidesGrid:a,slidesSizesGrid:l,size:o,activeIndex:c}=this;let d=1;if(typeof r.slidesPerView=="number")return r.slidesPerView;if(r.centeredSlides){let p=s[c]?Math.ceil(s[c].swiperSlideSize??0):0,h=!1;for(let g=c+1;g<s.length;g+=1)s[g]&&!h&&(p+=Math.ceil(s[g].swiperSlideSize??0),d+=1,p>o&&(h=!0));for(let g=c-1;g>=0;g-=1)s[g]&&!h&&(p+=s[g].swiperSlideSize??0,d+=1,p>o&&(h=!0))}else if(n==="current")for(let p=c+1;p<s.length;p+=1)(t?a[p]+l[p]-a[c]<o:a[p]-a[c]<o)&&(d+=1);else for(let p=c-1;p>=0;p-=1)a[c]-a[p]<o&&(d+=1);return d}update(){var l,o;const n=this;if(!n||n.destroyed)return;const{snapGrid:t,params:r}=n;r.breakpoints&&n.setBreakpoint(),[...n.el.querySelectorAll('[loading="lazy"]')].forEach(c=>{c.complete&&as(n,c)}),n.updateSize(),n.updateSlides(),n.updateProgress(),n.updateSlidesClasses();function s(){const c=n.rtlTranslate?n.translate*-1:n.translate,d=Math.min(Math.max(c,n.maxTranslate()),n.minTranslate());n.setTranslate(d),n.updateActiveIndex(),n.updateSlidesClasses()}let a;if((l=r.freeMode)!=null&&l.enabled&&!r.cssMode)s(),r.autoHeight&&n.updateAutoHeight();else{if((r.slidesPerView==="auto"||r.slidesPerView>1)&&n.isEnd&&!r.centeredSlides){const c=n.virtual&&((o=r.virtual)!=null&&o.enabled)?n.virtual.slides.length:n.slides.length;a=n.slideTo(c-1,0,!1,!0)}else a=n.slideTo(n.activeIndex,0,!1,!0);a||s()}r.watchOverflow&&t!==n.snapGrid&&n.checkOverflow(),n.emit("update")}changeDirection(n,t=!0){const r=this,s=r.params.direction;return n||(n=s==="horizontal"?"vertical":"horizontal"),n===s||n!=="horizontal"&&n!=="vertical"||(r.el.classList.remove(`${r.params.containerModifierClass}${s}`),r.el.classList.add(`${r.params.containerModifierClass}${n}`),r.emitContainerClasses(),r.params.direction=n,r.slides.forEach(a=>{n==="vertical"?a.style.width="":a.style.height=""}),r.emit("changeDirection"),t&&r.update()),r}changeLanguageDirection(n){const t=this;t.rtl&&n==="rtl"||!t.rtl&&n==="ltr"||(t.rtl=n==="rtl",t.rtlTranslate=t.params.direction==="horizontal"&&t.rtl,t.rtl?(t.el.classList.add(`${t.params.containerModifierClass}rtl`),t.el.dir="rtl"):(t.el.classList.remove(`${t.params.containerModifierClass}rtl`),t.el.dir="ltr"),t.update())}mount(n){const t=this;if(t.mounted)return!0;if(typeof document>"u")return!1;const r=n??t.params.el;let s=null;if(typeof r=="string"?s=document.querySelector(r):r instanceof HTMLElement&&(s=r),!s)return!1;s.swiper=t;const a=s.parentNode;a&&a.host&&a.host.nodeName===t.params.swiperElementNodeName.toUpperCase()&&(t.isElement=!0);const l=()=>`.${(t.params.wrapperClass||"").trim().split(" ").join(".")}`;let c=s&&s.shadowRoot?s.shadowRoot.querySelector(l()):an(s,l())[0];!c&&t.params.createElements&&(c=As("div",t.params.wrapperClass),s.append(c),an(s,`.${t.params.slideClass}`).forEach(p=>{c.append(p)}));const d=t.isElement?s.parentNode.host:null;return Object.assign(t,{el:s,wrapperEl:c,slidesEl:t.isElement&&!d.slideSlots?d:c,hostEl:t.isElement?d:s,mounted:!0,rtl:s.dir.toLowerCase()==="rtl"||kn(s,"direction")==="rtl",rtlTranslate:t.params.direction==="horizontal"&&(s.dir.toLowerCase()==="rtl"||kn(s,"direction")==="rtl"),wrongRTL:kn(c,"display")==="-webkit-box"}),!0}init(n){var a;const t=this;if(t.initialized||t.mount(n)===!1)return t;t.emit("beforeInit"),t.params.breakpoints&&t.setBreakpoint(),t.addClasses(),t.updateSize(),t.updateSlides(),t.params.watchOverflow&&t.checkOverflow(),t.params.grabCursor&&t.enabled&&t.setGrabCursor(),t.params.loop&&t.virtual&&((a=t.params.virtual)!=null&&a.enabled)?t.slideTo((t.params.initialSlide??0)+(t.virtual.slidesBefore??0),0,t.params.runCallbacksOnInit,!1,!0):t.slideTo(t.params.initialSlide,0,t.params.runCallbacksOnInit,!1,!0),t.params.loop&&t.loopCreate(void 0,!0),t.attachEvents();const s=[...t.el.querySelectorAll('[loading="lazy"]')];return t.isElement&&s.push(...t.hostEl.querySelectorAll('[loading="lazy"]')),s.forEach(l=>{l.complete?as(t,l):l.addEventListener("load",o=>{as(t,o.target)})}),Pi(t),t.initialized=!0,Pi(t),t.emit("init"),t.emit("afterInit"),t}destroy(n=!0,t=!0){const r=this,{params:s,el:a,wrapperEl:l,slides:o}=r;return typeof r.params>"u"||r.destroyed||(r.emit("beforeDestroy"),r.initialized=!1,r.detachEvents(),s.loop&&r.loopDestroy(),t&&(r.removeClasses(),a&&typeof a!="string"&&a.removeAttribute("style"),l&&l.removeAttribute("style"),o&&o.length&&o.forEach(c=>{c.classList.remove(s.slideVisibleClass,s.slideFullyVisibleClass,s.slideActiveClass,s.slideNextClass,s.slidePrevClass),c.removeAttribute("style"),c.removeAttribute("data-swiper-slide-index")})),r.emit("destroy"),Object.keys(r.eventsListeners).forEach(c=>{r.off(c)}),n!==!1&&(r.el&&typeof r.el!="string"&&(r.el.swiper=null),Mm(r)),r.destroyed=!0),null}static extendDefaults(n){Me(zi,n)}static installModule(n){Be.prototype.__modules__||(Be.prototype.__modules__=[]);const t=Be.prototype.__modules__;typeof n=="function"&&t.indexOf(n)<0&&t.push(n)}static use(n){return Array.isArray(n)?(n.forEach(t=>Be.installModule(t)),Be):(Be.installModule(n),Be)}};ta(Be,"extendedDefaults"),ta(Be,"defaults");let He=Be;Object.defineProperty(He,"extendedDefaults",{get(){return zi}});Object.defineProperty(He,"defaults",{get(){return wu}});const Go=Yh,Zh=He.prototype;Object.keys(Go).forEach(e=>{const n=Go[e];Object.keys(n).forEach(t=>{Zh[t]=n[t]})});He.use([jh,yh]);function Su(e,n,t,r){const s=t??{},a=n??{};return e.params.createElements&&Object.keys(r).forEach(l=>{if(!s[l]&&s.auto===!0){let o=an(e.el,`.${r[l]}`)[0];o||(o=As("div",r[l]),o.className=r[l],e.el.append(o)),s[l]=o,a[l]=o}}),s}const Wo='<svg class="swiper-navigation-icon" width="11" height="20" viewBox="0 0 11 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.38296 20.0762C0.111788 19.805 0.111788 19.3654 0.38296 19.0942L9.19758 10.2796L0.38296 1.46497C0.111788 1.19379 0.111788 0.754138 0.38296 0.482966C0.654131 0.211794 1.09379 0.211794 1.36496 0.482966L10.4341 9.55214C10.8359 9.9539 10.8359 10.6053 10.4341 11.007L1.36496 20.0762C1.09379 20.3474 0.654131 20.3474 0.38296 20.0762Z" fill="currentColor"/></svg>',Wr=({swiper:e,extendParams:n,on:t,emit:r})=>{n({navigation:{nextEl:null,prevEl:null,addIcons:!0,hideOnClick:!1,disabledClass:"swiper-button-disabled",hiddenClass:"swiper-button-hidden",lockClass:"swiper-button-lock",navigationDisabledClass:"swiper-navigation-disabled"}}),e.navigation={nextEl:null,prevEl:null,arrowSvg:Wo};function s(){return e.params.navigation}function a(w){let y;return w&&typeof w=="string"&&e.isElement&&(y=e.el.querySelector(w)||e.hostEl.querySelector(w),y)?y:(w&&(typeof w=="string"&&(y=[...document.querySelectorAll(w)]),e.params.uniqueNavElements&&typeof w=="string"&&y&&y.length>1&&e.el.querySelectorAll(w).length===1?y=e.el.querySelector(w):y&&y.length===1&&(y=y[0])),w&&!y?w:y)}function l(w,y){const C=s();ce(w).forEach(u=>{u&&(u.classList[y?"add":"remove"](...C.disabledClass.split(" ")),u.tagName==="BUTTON"&&(u.disabled=y),e.params.watchOverflow&&e.enabled&&u.classList[e.isLocked?"add":"remove"](C.lockClass))})}function o(){const{nextEl:w,prevEl:y}=e.navigation;if(e.params.loop){l(y,!1),l(w,!1);return}l(y,e.isBeginning&&!e.params.rewind),l(w,e.isEnd&&!e.params.rewind)}function c(w){w.preventDefault(),!(e.isBeginning&&!e.params.loop&&!e.params.rewind)&&(e.slidePrev(),r("navigationPrev"))}function d(w){w.preventDefault(),!(e.isEnd&&!e.params.loop&&!e.params.rewind)&&(e.slideNext(),r("navigationNext"))}function p(){e.params.navigation=Su(e,e.originalParams.navigation,e.params.navigation,{nextEl:"swiper-button-next",prevEl:"swiper-button-prev"});const w=s();if(!(w.nextEl||w.prevEl))return;const y=a(w.nextEl),C=a(w.prevEl);Object.assign(e.navigation,{nextEl:y,prevEl:C});const m=ce(y),u=ce(C),f=(v,x)=>{if(v){if(w.addIcons&&v.matches(".swiper-button-next,.swiper-button-prev")&&!v.querySelector("svg")){const S=document.createElement("div");Ti(S,Wo);const b=S.querySelector("svg");b&&v.appendChild(b),S.remove()}v.addEventListener("click",x==="next"?d:c)}!e.enabled&&v&&v.classList.add(...w.lockClass.split(" "))};m.forEach(v=>f(v,"next")),u.forEach(v=>f(v,"prev"))}function h(){const w=s(),{nextEl:y,prevEl:C}=e.navigation,m=ce(y),u=ce(C),f=(v,x)=>{v.removeEventListener("click",x==="next"?d:c),v.classList.remove(...w.disabledClass.split(" "))};m.forEach(v=>f(v,"next")),u.forEach(v=>f(v,"prev"))}t("init",()=>{s().enabled===!1?j():(p(),o())}),t("toEdge fromEdge lock unlock",()=>{o()}),t("destroy",()=>{h()}),t("enable disable",()=>{const w=s(),{nextEl:y,prevEl:C}=e.navigation,m=ce(y),u=ce(C);if(e.enabled){o();return}[...m,...u].filter(f=>!!f).forEach(f=>f.classList.add(w.lockClass))}),t("click",(w,y)=>{const C=s(),{nextEl:m,prevEl:u}=e.navigation,f=ce(m),v=ce(u),x=y.target;let S=v.includes(x)||f.includes(x);if(e.isElement&&!S){const b=y.composedPath?y.composedPath():[];b.length&&(S=b.find(N=>f.includes(N)||v.includes(N)))}if(C.hideOnClick&&!S){if(e.pagination&&e.params.pagination&&e.params.pagination.clickable&&(e.pagination.el===x||e.pagination.el.contains(x)))return;let b;f.length?b=f[0].classList.contains(C.hiddenClass):v.length&&(b=v[0].classList.contains(C.hiddenClass)),r(b===!0?"navigationShow":"navigationHide"),[...f,...v].filter(N=>!!N).forEach(N=>N.classList.toggle(C.hiddenClass))}});const g=()=>{const w=s();e.el.classList.remove(...w.navigationDisabledClass.split(" ")),p(),o()},j=()=>{const w=s();e.el.classList.add(...w.navigationDisabledClass.split(" ")),h()};Object.assign(e.navigation,{enable:g,disable:j,update:o,init:p,destroy:h})};function Rt(e=""){return`.${e.trim().replace(/([.:!+/()[\]#>~*^$|=,'"@{}\\])/g,"\\$1").replace(/ /g,".")}`}const Jh=e=>{var n;return!!e.virtual&&!!((n=e.params.virtual)!=null&&n.enabled)},eg=e=>{var n;return!!((n=e.params.freeMode)!=null&&n.enabled)},Uo=e=>{var t;if(Jh(e))return e.virtual.slides.length;const n=(t=e.params.grid)==null?void 0:t.rows;return e.grid&&n&&n>1?e.slides.length/Math.ceil(n):e.slides.length},Xo=({swiper:e,extendParams:n,on:t,emit:r})=>{const s="swiper-pagination";n({pagination:{el:null,bulletElement:"span",clickable:!1,hideOnClick:!1,renderBullet:null,renderProgressbar:null,renderFraction:null,renderCustom:null,progressbarOpposite:!1,type:"bullets",dynamicBullets:!1,dynamicMainBullets:1,formatFractionCurrent:u=>u,formatFractionTotal:u=>u,bulletClass:`${s}-bullet`,bulletActiveClass:`${s}-bullet-active`,modifierClass:`${s}-`,currentClass:`${s}-current`,totalClass:`${s}-total`,hiddenClass:`${s}-hidden`,progressbarFillClass:`${s}-progressbar-fill`,progressbarOppositeClass:`${s}-progressbar-opposite`,clickableClass:`${s}-clickable`,lockClass:`${s}-lock`,horizontalClass:`${s}-horizontal`,verticalClass:`${s}-vertical`,paginationDisabledClass:`${s}-disabled`}}),e.pagination={el:null,bullets:[]};let a,l=0;function o(){return e.params.pagination}function c(){return!o().el||!e.pagination.el||Array.isArray(e.pagination.el)&&e.pagination.el.length===0}function d(u,f){const{bulletActiveClass:v}=o();if(!u)return;let x=u[`${f==="prev"?"previous":"next"}ElementSibling`];x&&(x.classList.add(`${v}-${f}`),x=x[`${f==="prev"?"previous":"next"}ElementSibling`],x&&x.classList.add(`${v}-${f}-${f}`))}function p(u,f,v){if(u=u%v,f=f%v,f===u+1)return"next";if(f===u-1)return"previous"}function h(u){const v=u.target.closest(Rt(o().bulletClass));if(!v)return;u.preventDefault();const x=($s(v)??0)*(e.params.slidesPerGroup??1);if(e.params.loop){if(e.realIndex===x)return;const S=p(e.realIndex,x,e.slides.length);S==="next"?e.slideNext():S==="previous"?e.slidePrev():e.slideToLoop(x)}else e.slideTo(x)}function g(){const u=e.rtl,f=o();if(c())return;const v=ce(e.pagination.el);let x,S;const b=Uo(e),N=e.params.loop?Math.ceil(b/(e.params.slidesPerGroup??1)):e.snapGrid.length;if(e.params.loop?(S=e.previousRealIndex||0,x=(e.params.slidesPerGroup??1)>1?Math.floor(e.realIndex/(e.params.slidesPerGroup??1)):e.realIndex):typeof e.snapIndex<"u"?(x=e.snapIndex,S=e.previousSnapIndex):(S=e.previousIndex||0,x=e.activeIndex||0),f.type==="bullets"&&e.pagination.bullets&&e.pagination.bullets.length>0){const k=e.pagination.bullets;let L=0,A=0,G=0;if(f.dynamicBullets){a=_i(k[0],e.isHorizontal()?"width":"height");const _=e.isHorizontal()?"width":"height";v.forEach(P=>{P.style[_]=`${(a??0)*(f.dynamicMainBullets+4)}px`}),f.dynamicMainBullets>1&&S!==void 0&&(l+=x-(S||0),l>f.dynamicMainBullets-1?l=f.dynamicMainBullets-1:l<0&&(l=0)),L=Math.max(x-l,0),A=L+(Math.min(k.length,f.dynamicMainBullets)-1),G=(A+L)/2}if(k.forEach(_=>{const P=["","-next","-next-next","-prev","-prev-prev","-main"].map($=>`${f.bulletActiveClass}${$}`).flatMap($=>typeof $=="string"&&$.includes(" ")?$.split(" "):[$]);_.classList.remove(...P)}),v.length>1)k.forEach(_=>{const P=$s(_);P===x?_.classList.add(...f.bulletActiveClass.split(" ")):e.isElement&&_.setAttribute("part","bullet"),f.dynamicBullets&&P!==void 0&&(P>=L&&P<=A&&_.classList.add(...`${f.bulletActiveClass}-main`.split(" ")),P===L&&d(_,"prev"),P===A&&d(_,"next"))});else{const _=k[x];if(_&&_.classList.add(...f.bulletActiveClass.split(" ")),e.isElement&&k.forEach((P,$)=>{P.setAttribute("part",$===x?"bullet-active":"bullet")}),f.dynamicBullets){const P=k[L],$=k[A];for(let W=L;W<=A;W+=1)k[W]&&k[W].classList.add(...`${f.bulletActiveClass}-main`.split(" "));d(P,"prev"),d($,"next")}}if(f.dynamicBullets){const _=Math.min(k.length,f.dynamicMainBullets+4),P=((a??0)*_-(a??0))/2-G*(a??0),$=u?"right":"left",W=e.isHorizontal()?$:"top";k.forEach(V=>{V.style[W]=`${P}px`})}}v.forEach((k,L)=>{if(f.type==="fraction"&&(k.querySelectorAll(Rt(f.currentClass)).forEach(A=>{A.textContent=String(f.formatFractionCurrent(x+1))}),k.querySelectorAll(Rt(f.totalClass)).forEach(A=>{A.textContent=String(f.formatFractionTotal(N))})),f.type==="progressbar"){let A;f.progressbarOpposite?A=e.isHorizontal()?"vertical":"horizontal":A=e.isHorizontal()?"horizontal":"vertical";const G=(x+1)/N;let _=1,P=1;A==="horizontal"?_=G:P=G,k.querySelectorAll(Rt(f.progressbarFillClass)).forEach($=>{$.style.transform=`translate3d(0,0,0) scaleX(${_}) scaleY(${P})`,$.style.transitionDuration=`${e.params.speed}ms`})}f.type==="custom"&&f.renderCustom?(Ti(k,f.renderCustom(e,x+1,N)),L===0&&r("paginationRender",k)):(L===0&&r("paginationRender",k),r("paginationUpdate",k)),e.params.watchOverflow&&e.enabled&&k.classList[e.isLocked?"add":"remove"](f.lockClass)})}function j(){const u=o();if(c())return;const f=Uo(e),v=ce(e.pagination.el);let x="";if(u.type==="bullets"){let S=e.params.loop?Math.ceil(f/(e.params.slidesPerGroup??1)):e.snapGrid.length;e.params.freeMode&&eg(e)&&S>f&&(S=f);for(let b=0;b<S;b+=1)u.renderBullet?x+=u.renderBullet.call(e,b,u.bulletClass):x+=`<${u.bulletElement} ${e.isElement?'part="bullet"':""} class="${u.bulletClass}"></${u.bulletElement}>`}u.type==="fraction"&&(u.renderFraction?x=u.renderFraction.call(e,u.currentClass,u.totalClass):x=`<span class="${u.currentClass}"></span> / <span class="${u.totalClass}"></span>`),u.type==="progressbar"&&(u.renderProgressbar?x=u.renderProgressbar.call(e,u.progressbarFillClass):x=`<span class="${u.progressbarFillClass}"></span>`),e.pagination.bullets=[],v.forEach(S=>{u.type!=="custom"&&Ti(S,x||""),u.type==="bullets"&&e.pagination.bullets.push(...Array.from(S.querySelectorAll(Rt(u.bulletClass))))}),u.type!=="custom"&&r("paginationRender",v[0])}function w(){e.params.pagination=Su(e,e.originalParams.pagination,e.params.pagination,{el:"swiper-pagination"});const u=o();if(!u.el)return;let f;if(typeof u.el=="string"&&e.isElement&&(f=e.el.querySelector(u.el)),!f&&typeof u.el=="string"&&(f=[...document.querySelectorAll(u.el)]),f||(f=u.el),!f||Array.isArray(f)&&f.length===0)return;if(e.params.uniqueNavElements&&typeof u.el=="string"&&Array.isArray(f)&&f.length>1&&(f=[...e.el.querySelectorAll(u.el)],f.length>1)){const x=f.find(S=>hu(S,".swiper")[0]===e.el);x&&(f=x)}Array.isArray(f)&&f.length===1&&(f=f[0]),Object.assign(e.pagination,{el:f}),ce(f).forEach(x=>{u.type==="bullets"&&u.clickable&&x.classList.add(...(u.clickableClass||"").split(" ")),x.classList.add(u.modifierClass+u.type),x.classList.add(e.isHorizontal()?u.horizontalClass:u.verticalClass),u.type==="bullets"&&u.dynamicBullets&&(x.classList.add(`${u.modifierClass}${u.type}-dynamic`),l=0,u.dynamicMainBullets<1&&(u.dynamicMainBullets=1)),u.type==="progressbar"&&u.progressbarOpposite&&x.classList.add(u.progressbarOppositeClass),u.clickable&&x.addEventListener("click",h),e.enabled||x.classList.add(u.lockClass)})}function y(){const u=o();if(c())return;const f=e.pagination.el;f&&ce(f).forEach(x=>{x.classList.remove(u.hiddenClass),x.classList.remove(u.modifierClass+u.type),x.classList.remove(e.isHorizontal()?u.horizontalClass:u.verticalClass),u.clickable&&(x.classList.remove(...(u.clickableClass||"").split(" ")),x.removeEventListener("click",h))}),e.pagination.bullets&&e.pagination.bullets.forEach(v=>v.classList.remove(...u.bulletActiveClass.split(" ")))}t("changeDirection",()=>{if(!e.pagination||!e.pagination.el)return;const u=o();ce(e.pagination.el).forEach(v=>{v.classList.remove(u.horizontalClass,u.verticalClass),v.classList.add(e.isHorizontal()?u.horizontalClass:u.verticalClass)})}),t("init",()=>{o().enabled===!1?m():(w(),j(),g())}),t("activeIndexChange",()=>{typeof e.snapIndex>"u"&&g()}),t("snapIndexChange",()=>{g()}),t("snapGridLengthChange",()=>{j(),g()}),t("destroy",()=>{y()}),t("enable disable",()=>{const{el:u}=e.pagination;if(u){const f=o();ce(u).forEach(x=>x.classList[e.enabled?"remove":"add"](f.lockClass))}}),t("lock unlock",()=>{g()}),t("click",(u,f)=>{const v=f.target,x=ce(e.pagination.el),S=o();if(S.el&&S.hideOnClick&&x&&x.length>0&&!v.classList.contains(S.bulletClass)){if(e.navigation&&(e.navigation.nextEl&&v===e.navigation.nextEl||e.navigation.prevEl&&v===e.navigation.prevEl))return;const b=x[0].classList.contains(S.hiddenClass);r(b===!0?"paginationShow":"paginationHide"),x.forEach(N=>N.classList.toggle(S.hiddenClass))}});const C=()=>{const u=o();e.el.classList.remove(u.paginationDisabledClass);const{el:f}=e.pagination;f&&ce(f).forEach(x=>x.classList.remove(u.paginationDisabledClass)),w(),j(),g()},m=()=>{const u=o();e.el.classList.add(u.paginationDisabledClass);const{el:f}=e.pagination;f&&ce(f).forEach(x=>x.classList.add(u.paginationDisabledClass)),y()};Object.assign(e.pagination,{enable:C,disable:m,render:j,update:g,init:w,destroy:y})},is=({swiper:e,extendParams:n,on:t,emit:r,params:s})=>{e.autoplay={running:!1,paused:!1,timeLeft:0},n({autoplay:{enabled:!1,delay:3e3,waitForTransition:!0,disableOnInteraction:!1,stopOnLastSlide:!1,reverseDirection:!1,pauseOnMouseEnter:!1}});function a(){return e.params.autoplay}const l=typeof s.autoplay=="object"&&s.autoplay&&typeof s.autoplay.delay=="number"?s.autoplay.delay:3e3;let o,c,d=l,p=l,h=0,g=new Date().getTime(),j=!1,w=!1,y=!1,C,m=!1,u=!1;function f(T){if(!e||e.destroyed||!e.wrapperEl||T.target!==e.wrapperEl)return;e.wrapperEl.removeEventListener("transitionend",f);const M=T.detail;u||M&&M.bySwiperTouchMove||A()}const v=()=>{if(e.destroyed||!e.autoplay.running)return;e.autoplay.paused?j=!0:j&&(p=h,j=!1);const T=e.autoplay.paused?h:g+p-new Date().getTime();e.autoplay.timeLeft=T,r("autoplayTimeLeft",T,T/d),c=requestAnimationFrame(()=>{v()})},x=()=>{var U;let T;const M=!!((U=e.params.virtual)!=null&&U.enabled);if(e.virtual&&M?T=e.slides.find(D=>D.classList.contains("swiper-slide-active")):T=e.slides[e.activeIndex],!T)return;const F=T.getAttribute("data-swiper-autoplay");if(F!=null)return parseInt(F,10)},S=()=>{let T=a().delay;const M=x();return typeof M=="number"&&!Number.isNaN(M)&&M>0&&(T=M),T},b=T=>{if(e.destroyed||!e.autoplay.running)return 0;c!==void 0&&cancelAnimationFrame(c),v();let M=T;typeof M>"u"&&(M=S(),d=M,p=M),h=M;const F=e.params.speed,U=()=>{if(!e||e.destroyed)return;const D=a();D.reverseDirection?!e.isBeginning||e.params.loop||e.params.rewind?(e.slidePrev(F,!0,!0),r("autoplay")):D.stopOnLastSlide||(e.slideTo(e.slides.length-1,F,!0,!0),r("autoplay")):!e.isEnd||e.params.loop||e.params.rewind?(e.slideNext(F,!0,!0),r("autoplay")):D.stopOnLastSlide||(e.slideTo(0,F,!0,!0),r("autoplay")),e.params.cssMode&&(g=new Date().getTime(),requestAnimationFrame(()=>{b()}))};return M>0?(o!==void 0&&clearTimeout(o),o=setTimeout(()=>{U()},M)):requestAnimationFrame(()=>{U()}),M},N=()=>(g=new Date().getTime(),e.autoplay.running=!0,b(),r("autoplayStart"),!0),k=()=>(e.autoplay.running=!1,o!==void 0&&clearTimeout(o),c!==void 0&&cancelAnimationFrame(c),r("autoplayStop"),!0),L=(T,M)=>{if(e.destroyed||!e.autoplay.running)return;o!==void 0&&clearTimeout(o),T||(m=!0);const F=()=>{r("autoplayPause"),a().waitForTransition?e.wrapperEl.addEventListener("transitionend",f):A()};if(e.autoplay.paused=!0,M){F();return}h=(h||a().delay)-(new Date().getTime()-g),!(e.isEnd&&h<0&&!e.params.loop)&&(h<0&&(h=0),F())},A=()=>{e.isEnd&&h<0&&!e.params.loop||e.destroyed||!e.autoplay.running||(g=new Date().getTime(),m?(m=!1,b(h)):b(),e.autoplay.paused=!1,r("autoplayResume"))},G=()=>{e.destroyed||!e.autoplay.running||(document.visibilityState==="hidden"&&(m=!0,L(!0)),document.visibilityState==="visible"&&A())},_=T=>{T.pointerType==="mouse"&&(m=!0,u=!0,!(e.animating||e.autoplay.paused)&&L(!0))},P=T=>{T.pointerType==="mouse"&&(u=!1,e.autoplay.paused&&A())},$=()=>{a().pauseOnMouseEnter&&(e.el.addEventListener("pointerenter",_),e.el.addEventListener("pointerleave",P))},W=()=>{e.el&&typeof e.el!="string"&&(e.el.removeEventListener("pointerenter",_),e.el.removeEventListener("pointerleave",P))},V=()=>{document.addEventListener("visibilitychange",G)},z=()=>{document.removeEventListener("visibilitychange",G)};t("init",()=>{a().enabled&&($(),V(),N())}),t("destroy",()=>{W(),z(),e.autoplay.running&&k()}),t("_freeModeStaticRelease",()=>{(y||m)&&A()}),t("_freeModeNoMomentumRelease",()=>{a().disableOnInteraction?k():L(!0,!0)}),t("beforeTransitionStart",(T,M,F)=>{e.destroyed||!e.autoplay.running||(F||!a().disableOnInteraction?L(!0,!0):k())}),t("sliderFirstMove",()=>{if(!(e.destroyed||!e.autoplay.running)){if(a().disableOnInteraction){k();return}w=!0,y=!1,m=!1,C=setTimeout(()=>{m=!0,y=!0,L(!0)},200)}}),t("touchEnd",()=>{if(!(e.destroyed||!e.autoplay.running||!w)){if(C!==void 0&&clearTimeout(C),o!==void 0&&clearTimeout(o),a().disableOnInteraction){y=!1,w=!1;return}y&&e.params.cssMode&&A(),y=!1,w=!1}}),t("slideChange",()=>{e.destroyed||!e.autoplay.running||e.autoplay.paused&&(h=S(),d=S())}),Object.assign(e.autoplay,{start:N,stop:k,pause:L,resume:A})},ng="https://docs.google.com/spreadsheets/d/e/2PACX-1vTcM837zqsyDwbQ1j9ILkaTGZCtsyt796NcxKJ_0Ed9FcqTo2HaG0gr_jj2U4xcslxm-jt7KRlxSplw/pub?gid=665645625&single=true&output=csv",tg="https://docs.google.com/spreadsheets/d/e/2PACX-1vTcM837zqsyDwbQ1j9ILkaTGZCtsyt796NcxKJ_0Ed9FcqTo2HaG0gr_jj2U4xcslxm-jt7KRlxSplw/pub?gid=595172747&single=true&output=csv",rg={lat:-23.7169,lng:-46.8492},sg=100,ag="https://script.google.com/macros/s/AKfycbwwuNgFh7gKDJR4a5qlI0tJk-9GzfBQwkDOPFworoR6vCscLRxr5hWYAGIGm0bGA7cE/exec",ig="5511974659658",na="BateForte Materiais para Construção",lg=e=>e.toLocaleString("pt-BR",{style:"currency",currency:"BRL"});function Bn(e){return`https://api.whatsapp.com/send?phone=${ig}&text=${encodeURIComponent(e)}`}function Tl({nome:e,referencia:n,preco:t,qtd:r}={}){const s=[`Olá! Vim pelo site da ${na} e tenho interesse neste produto:`,"",`Produto: ${e}`];return n&&s.push(`Referência: ${n}`),r&&r>1&&s.push(`Quantidade: ${r}`),t!=null&&s.push(`Valor unitário: ${lg(t)}`),s.push("","Ele está disponível? Gostaria de confirmar o valor e as condições de pagamento e entrega."),s.join(`
`)}function og(e){return[`Olá! Falo com a ${na}?`,"",`Procurei por "${e}" no site e não encontrei. Vocês têm esse item disponível?`].join(`
`)}function Pl(e){return[`Olá! Falo com a ${na}?`,"",`Gostaria de conhecer as opções de ${e} que vocês têm disponíveis, com valores e condições de pagamento.`].join(`
`)}function cg(){return`Olá! Acabei de finalizar um pedido pelo site da ${na}.`}const dg=4e3,Ds=[],ls=[],Qo=[],ug=new Set(["cimento","areia","ferro","eletrica","hidraulica","telhas","tintas","ferramentas","adesivos-e-selantes","argamassas-e-rejuntes","impermeabilizantes"]),Ko={eletrica:"Elétrica",hidraulica:"Hidráulica"},Yo=e=>e.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,""),os=e=>`/assets/bf-icon-${ug.has(e)?e:"generic"}.svg`;function fg(e,n){return Ko[n]?Ko[n]:e===e.toLowerCase()?e.replace(/(^|\s)\S/g,t=>t.toUpperCase()):e}function bu(e){const n=[];let t=[],r="",s=!1;for(let a=0;a<e.length;a++){const l=e[a];s?l==='"'&&e[a+1]==='"'?(r+='"',a++):l==='"'?s=!1:r+=l:l==='"'?s=!0:l===","?(t.push(r),r=""):l===`
`||l==="\r"?(l==="\r"&&e[a+1]===`
`&&a++,t.push(r),r="",t.some(o=>o.trim()!=="")&&n.push(t),t=[]):r+=l}return t.push(r),t.some(a=>a.trim()!=="")&&n.push(t),n}function pg(e){if(!e.length)return[];const n=e[0].map(a=>a.trim().toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"")),t=a=>n.indexOf(a),r={ativo:t("ativo"),nome:t("nome"),categoria:t("categoria"),vitrine:t("vitrine"),imagem:t("imagem"),referencia:t("referencia"),tag:t("tag"),preco:t("preco"),marca:t("marca")};if(r.nome===-1)return[];const s=(a,l)=>l>=0&&a[l]!=null?String(a[l]).trim():"";return e.slice(1).map((a,l)=>({id:`product-bf-${l+1}`,ativo:s(a,r.ativo),nome:s(a,r.nome),categoria:Yo(s(a,r.categoria)),categoriaNome:s(a,r.categoria).trim(),vitrine:s(a,r.vitrine),imagem:mg(s(a,r.imagem)),referencia:s(a,r.referencia),tag:s(a,r.tag),preco:Nu(s(a,r.preco)),marca:s(a,r.marca),marcaSlug:Yo(s(a,r.marca))})).filter(a=>a.nome&&!/^(nao|não|n|0|false)$/i.test(a.ativo))}function mg(e){const n=e.match(/drive\.google\.com\/(?:file\/d\/|open\?id=)([\w-]+)/);return n?`https://lh3.googleusercontent.com/d/${n[1]}`:e}function Nu(e){if(!e)return null;const n=e.replace(/[^\d,.]/g,"");if(!n)return null;const t=n.includes(",")?n.replace(/\./g,"").replace(",","."):n,r=parseFloat(t);return Number.isFinite(r)?r:null}function Ae(e){return e.toLocaleString("pt-BR",{style:"currency",currency:"BRL"})}function Y(e){const n=document.createElement("div");return n.textContent=e||"",n.innerHTML}const hg={destaque:"featured",novidade:"new",promocao:"discount",promoção:"discount"};function Cu(e){const n=Bn(Tl({nome:e.nome,referencia:e.referencia,preco:e.preco})),t=hg[e.tag.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"")]||"featured";return`
  <div class="item swiper-slide">
    <div class="product upon_request has-fast-shopping" id="${e.id}" product-ref="${Y(e.referencia)||"ref-empty"}" data-bf-category="${Y(e.categoria)}"${e.preco!=null?` data-bf-price="${e.preco}"`:""}>
      <div class="image">
        <a href="#/produto/${e.id}" class="space-image"><img loading="lazy" class="lazyload loaded" src="${Y(e.imagem)}" alt="${Y(e.nome)}"></a>
        <div class="product-tags tags-custom" data-tags-count="${e.tag?1:0}">
          ${e.tag?`<div class="tag ${t}"><span class="tag-text">${Y(e.tag)}</span></div>`:""}
        </div>
      </div>
      <a class="product-info" href="#/produto/${e.id}">
        <div class="wrapper-product-name"><h3 class="product-name">${Y(e.nome)}</h3></div>
        <div class="product-price">${e.preco!=null?`<span class="bf-price">${Ae(e.preco)}</span>`:""}</div>
      </a>
      <div class="actions"></div>
      <div class="buy-whatsapp buy-whatsapp--list-product">
        <a href="${n}" target="_blank" rel="noopener noreferrer"><i class="icon icon-whatsapp v-align-middle"></i> Comprar pelo Whats </a>
      </div>
    </div>
  </div>`}const tr=e=>e.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").trim();function gg(){const e=new Map;return document.querySelectorAll(".site-main .section-showcase .product[id]").forEach(n=>{var a;const t=n.querySelector(".image img");if(!t)return;let r=t.getAttribute("src")||"";if(r.endsWith(".svg")){const l=getComputedStyle(t).backgroundImage.match(/url\("(data:[^"]+)"\)/);l&&(r=l[1])}const s=(a=n.querySelector(".product-name"))==null?void 0:a.textContent.trim();s&&r&&e.set(tr(s),r)}),e}function vg(e){const n=gg();e.forEach(r=>{(!r.imagem||r.imagem.endsWith(".svg"))&&(r.imagem=n.get(tr(r.nome))||r.imagem)});const t=new Map;e.forEach(r=>{const s=tr(r.vitrine||"");t.has(s)||t.set(s,[]),t.get(s).push(r)}),document.querySelectorAll(".site-main .section-showcase").forEach(r=>{var o;const s=tr(((o=r.querySelector(".title-section"))==null?void 0:o.textContent)||""),a=r.querySelector(".list-product .swiper-wrapper");if(!s||!a)return;const l=t.get(s)||[];if(!l.length){r.style.display="none";return}a.innerHTML=l.map(Cu).join("")})}function xg(e){if(!e.length)return;const n=l=>`
    <a href="#/categoria/${l.slug}" title="${Y(l.name)}">
      <div class="category-image"><img src="${os(l.slug)}" alt="${Y(l.name)}" width="20" height="20"></div>
      <div class="name"> ${Y(l.name)} </div>
    </a>`,t=document.querySelector(".nav .list");if(t){t.querySelectorAll(":scope > li").forEach(o=>{o.querySelector(':scope > a[href^="#/categoria/"]')&&o.remove()});const l=t.querySelector("li.categoria-offer");e.forEach(o=>{const c=document.createElement("li");c.className="first-level",c.innerHTML=n(o),t.insertBefore(c,l)})}const r=document.querySelector(".nav .all-categories .wrapper-categories");r&&(r.innerHTML=e.map(l=>`<li class="sub"><a href="#/categoria/${l.slug}" title="${Y(l.name)}">
        <div class="category-image"><img src="${os(l.slug)}" alt="${Y(l.name)}" width="20" height="20"></div>
        ${Y(l.name)} </a></li>`).join(""));const s=document.querySelector("#menu-mobile .nav-mobile .list");s&&(s.innerHTML=e.map(l=>`<li><a href="#/categoria/${l.slug}">
        <div class="category-image"><img src="${os(l.slug)}" alt="${Y(l.name)}" width="20" height="20"></div>
        ${Y(l.name)} </a></li>`).join(""));const a=document.querySelector(".footer .box-categories .list");a&&(a.innerHTML=e.map(l=>`<li><a href="#/categoria/${l.slug}" title="${Y(l.name)}">${Y(l.name)}</a></li>`).join(""))}function wg(e){if(!e.length)return;const n=document.querySelector(".buy-sizes"),t=n==null?void 0:n.querySelector(".buy-sizes__content");t&&(t.innerHTML=e.map(r=>`
    <div class="item swiper-slide">
      <a href="#/categoria/${r.slug}" title="${Y(r.name)}">
        <div class="buy-sizes__image"><img loading="lazy" src="${os(r.slug)}" alt="${Y(r.name)}"></div>
        <div class="buy-sizes__name"> ${Y(r.name)} </div>
      </a>
    </div>`).join(""),n.classList.add("bf-cats-dynamic"))}function yg(e){const n=document.querySelector(".template-instagram #instafeed");if(!n)return;const t=new Map;e.forEach(a=>{if(!a.imagem||a.imagem.endsWith(".svg"))return;const l=a.categoria||"";t.has(l)||t.set(l,[]),t.get(l).push(a)});for(const a of t.values())a.sort((l,o)=>(o.tag?1:0)-(l.tag?1:0)||(o.preco||0)-(l.preco||0));const r=[];let s=!0;for(;s&&r.length<12;){s=!1;for(const a of t.values())a.length&&r.length<12&&(r.push(a.shift()),s=!0)}r.length&&(n.innerHTML=r.map(a=>`
    <div class="item swiper-slide">
      <a href="#/produto/${a.id}" aria-label="${Y(a.nome)}">
        <div>
          <img loading="lazy" src="${Y(a.imagem)}" alt="${Y(a.nome)}">
          <span class="bf-insta-cap">${Y(a.nome)}</span>
        </div>
      </a>
    </div>`).join(""))}function jg(e){var t;const n=document.querySelector(".bf-brand-links");if(n){if(!e.length){(t=n.closest(".bf-choose-brand"))==null||t.style.setProperty("display","none");return}n.innerHTML=e.map(r=>`<li><a href="#/marca/${r.slug}" title="${Y(r.name)}">${Y(r.name)}</a></li>`).join("")}}const ku=e=>/promo|oferta/.test(tr(e.tag||""));function Sg(e){const n=document.querySelector(".nav .list li.categoria-offer");if(!n)return;const t=e.filter(ku);if(!t.length){n.style.display="none";return}n.style.display="";const r=n.querySelector(":scope > a");r&&r.setAttribute("href","#/ofertas");const s=n.querySelector(".categoria-offer__button");s&&s.setAttribute("href","#/ofertas");const a=n.querySelector(".categoria-offer__products .swiper-wrapper");a&&(a.innerHTML=t.slice(0,12).map(Cu).join(""))}async function bg(){const e=window.__bfCatalogUrl??ng;if(!e)return!1;try{const n=new AbortController,t=setTimeout(()=>n.abort(),dg),r=await fetch(e,{signal:n.signal});if(clearTimeout(t),!r.ok)throw new Error(`HTTP ${r.status}`);const s=pg(bu(await r.text()));if(!s.length)throw new Error("planilha sem produtos");vg(s),Ds.length=0,Ds.push(...s);const a=new Set;s.forEach(o=>{o.categoria&&!a.has(o.categoria)&&(a.add(o.categoria),ls.push({slug:o.categoria,name:fg(o.categoriaNome,o.categoria)}))}),xg(ls),wg(ls),yg(s),Sg(s);const l=new Set;return s.forEach(o=>{o.marca&&!l.has(o.marcaSlug)&&(l.add(o.marcaSlug),Qo.push({slug:o.marcaSlug,name:o.marca}))}),jg(Qo),!0}catch(n){return console.warn("[catalogo] usando catálogo embutido:",n.message),!1}}const Eu="bf_cart";let je=Ng();function Ng(){try{return JSON.parse(localStorage.getItem(Eu))||[]}catch{return[]}}function cs(){localStorage.setItem(Eu,JSON.stringify(je))}function rt(e){const n=document.createElement("div");return n.textContent=e,n.innerHTML}function Li(){return je.map(e=>({...e}))}function _u({id:e,ref:n,name:t,img:r,href:s,price:a=null},l=1){const o=je.find(c=>c.id===e);o?o.qty+=l:je.push({id:e,ref:n,name:t,img:r,href:s,price:a,qty:l}),cs(),Wt()}function Cg(){document.querySelector(".cart")&&(document.querySelectorAll(".product").forEach(n=>{const t=n.querySelector(".actions");if(!t||t.querySelector(".bf-add-cart"))return;const r=document.createElement("button");r.type="button",r.className="bf-add-cart",r.textContent="Adicionar ao carrinho",t.appendChild(r)}),document.addEventListener("click",n=>{var a,l,o,c;const t=n.target.closest(".bf-add-cart");if(t){const d=t.closest(".product");_u({id:d.id||((a=d.querySelector(".product-name"))==null?void 0:a.textContent.trim()),ref:(d.getAttribute("product-ref")||"").replace("ref-empty",""),name:((l=d.querySelector(".product-name"))==null?void 0:l.textContent.trim())||"Produto",img:((o=d.querySelector(".image img"))==null?void 0:o.getAttribute("src"))||"",href:((c=d.querySelector(".product-info"))==null?void 0:c.getAttribute("href"))||"",price:d.dataset.bfPrice?Number(d.dataset.bfPrice):null}),Mi();return}if(n.target.closest(".cart-toggle")){n.preventDefault(),Mi();return}if(n.target.closest(".cart__vue__icon")||n.target.closest(".cart-backdrop")){rn();return}const r=n.target.closest("[data-bf-qty]");if(r){const d=je.find(p=>p.id===r.dataset.bfId);d&&(d.qty+=Number(r.dataset.bfQty),d.qty<=0&&(je=je.filter(p=>p!==d)),cs(),Wt());return}const s=n.target.closest("[data-bf-remove]");if(s){je=je.filter(d=>d.id!==s.dataset.bfRemove),cs(),Wt();return}if(n.target.closest(".bf-cart-clear")){je=[],cs(),Wt();return}n.target.closest(".bf-cart-checkout")&&(rn(),location.hash="#/finalizar")}),Wt())}function Mi(){var e,n;(e=document.querySelector(".cart"))==null||e.classList.add("bf-open"),(n=document.querySelector(".overlay-shadow"))==null||n.classList.add("bf-visible"),document.body.classList.add("bf-no-scroll")}function rn(){var e,n;(e=document.querySelector(".cart"))==null||e.classList.remove("bf-open"),document.querySelector(".menu-mobile.bf-open")||((n=document.querySelector(".overlay-shadow"))==null||n.classList.remove("bf-visible"),document.body.classList.remove("bf-no-scroll"))}function Wt(){const e=je.reduce((a,l)=>a+l.qty,0);document.querySelectorAll('[data-cart="amount"]').forEach(a=>{a.textContent=String(e)});const n=document.querySelector(".cart .dropdown__content"),t=document.querySelector(".cart .dropdown__footer");if(!n||!t)return;if(!je.length){n.innerHTML=`<div class="cart__empty"><p>
 Seu carrinho está vazio.
 </p></div>`,t.innerHTML="<p>Adicione produtos ao carrinho e eles aparecerão aqui.</p>";return}n.innerHTML=`<ul class="bf-cart-list">${je.map(a=>`
    <li class="bf-cart-item">
      ${a.img?`<img src="${rt(a.img)}" alt="">`:""}
      <div class="bf-cart-item__info">
        <a class="bf-cart-item__name" href="${rt(a.href)}">${rt(a.name)}</a>
        <span class="bf-cart-item__price">${a.price!=null?Ae(a.price):"Preço sob consulta"}</span>
        <div class="bf-cart-item__qty">
          <button type="button" data-bf-qty="-1" data-bf-id="${rt(a.id)}" aria-label="Diminuir">−</button>
          <span>${a.qty}</span>
          <button type="button" data-bf-qty="1" data-bf-id="${rt(a.id)}" aria-label="Aumentar">+</button>
        </div>
      </div>
      <button type="button" class="bf-cart-item__remove" data-bf-remove="${rt(a.id)}" aria-label="Remover">×</button>
    </li>`).join("")}</ul>`;const r=je.every(a=>a.price!=null),s=je.reduce((a,l)=>a+(l.price||0)*l.qty,0);t.innerHTML=`
    <p class="bf-cart-summary">${r?`${e} ${e===1?"item":"itens"} — total <strong>${Ae(s)}</strong>`:`${e} ${e===1?"item":"itens"} no carrinho — preços confirmados no atendimento.`}</p>
    <button type="button" class="bf-cart-checkout">Finalizar pelo WhatsApp</button>
    <button type="button" class="bf-cart-clear">Limpar carrinho</button>`}function Zo(e){const n=document.createElement("div");return n.textContent=e||"",n.innerHTML}let Ia=null;async function kg(){var n;if(Ia)return Ia;const e=window.__bfFreteUrl??tg;if(!e)return null;try{const t=await fetch(e);if(!t.ok)throw new Error(`HTTP ${t.status}`);const r=bu(await t.text()),s=[];for(const[a,l]of r.slice(1)){const o=parseFloat(String(a).replace(",",".")),c=Nu(String(l));Number.isFinite(o)&&c!=null&&s.push({km:o,valor:c})}return s.sort((a,l)=>a.km-l.km),console.info(`[frete] tabela carregada: ${s.length} faixas (até ${((n=s.at(-1))==null?void 0:n.km)??0} km)`),Ia=s,s}catch(t){return console.warn("[frete] tabela indisponível:",t.message),null}}function Eg(e,n){const t=l=>l*Math.PI/180,r=t(n.lat-e.lat),s=t(n.lng-e.lng),a=Math.sin(r/2)**2+Math.cos(t(e.lat))*Math.cos(t(n.lat))*Math.sin(s/2)**2;return 6371*2*Math.asin(Math.sqrt(a))}async function _g(e){var r,s;let n=null,t=null;try{const a=await fetch((window.__bfCepBase??"https://brasilapi.com.br/api/cep/v2/")+e);if(a.ok){const l=await a.json();n=[l.street,l.neighborhood,l.city&&`${l.city} - ${l.state}`].filter(Boolean).join(", "),(s=(r=l.location)==null?void 0:r.coordinates)!=null&&s.latitude&&(t={lat:Number(l.location.coordinates.latitude),lng:Number(l.location.coordinates.longitude)})}}catch{}if(!t)try{const a=await fetch((window.__bfCepGeoBase??"https://cep.awesomeapi.com.br/json/")+e);if(a.ok){const l=await a.json();l.lat&&l.lng&&(t={lat:Number(l.lat),lng:Number(l.lng)}),n||(n=[l.address,l.district,l.city&&`${l.city} - ${l.state}`].filter(Boolean).join(", "))}}catch{}return t||console.warn(`[frete] CEP ${e} sem coordenadas nas duas fontes`),{endereco:n||null,coords:t}}async function Tg(e,n){const t=e.replace(/\D/g,"");if(t.length!==8)return{valor:null,label:"CEP inválido",endereco:null,km:null};const{endereco:r,coords:s}=await _g(t);if(n>=sg)return{valor:0,label:"Grátis",endereco:r,km:null};const a=await kg();if(!a||!s)return{valor:null,label:"Frete a combinar pelo WhatsApp",endereco:r,km:null};const l=Eg(rg,s);console.info(`[frete] CEP ${t}: ~${l.toFixed(1)} km da loja`);const o=a.find(c=>l<=c.km);return o?{valor:o.valor,label:Ae(o.valor),endereco:r,km:l}:{valor:null,label:`Frete a combinar pelo WhatsApp (~${Math.round(l)} km)`,endereco:r,km:l}}let ae={valor:null,label:"—",endereco:null,km:null};function Pg(e){const n=Li();if(!n.length){e.innerHTML=`
      <div class="container">
        <div class="section-header"><h2 class="title-section">Finalizar pedido</h2></div>
        <div class="bf-cat__empty">
          <p>Seu carrinho está vazio. Adicione produtos e volte aqui para finalizar.</p>
          <a class="bf-pdp__whats" style="background:var(--color_button_buy_bg)" href="#" data-bf-close-pdp>Ver produtos</a>
        </div>
      </div>`,document.title="Finalizar pedido - BateForte Materiais para Construção";return}const t=n.reduce((s,a)=>s+(a.price||0)*a.qty,0),r=n.every(s=>s.price!=null);ae={valor:null,label:"—",endereco:null,km:null},e.innerHTML=`
    <div class="container">
      <nav class="bf-pdp__breadcrumb">
        <a href="#" data-bf-close-pdp>Início</a><span> / </span><strong>Finalizar pedido</strong>
      </nav>
      <div class="section-header"><h2 class="title-section">Finalizar pedido</h2></div>
      <div class="bf-checkout">
        <div class="bf-checkout__items bf-account__card">
          <h3>Seu pedido</h3>
          <ul class="bf-cart-list">
            ${n.map(s=>`
            <li class="bf-cart-item">
              ${s.img?`<img src="${Zo(s.img)}" alt="">`:""}
              <div class="bf-cart-item__info">
                <span class="bf-cart-item__name">${Zo(s.name)}</span>
                <span class="bf-cart-item__price">${s.qty}x — ${s.price!=null?Ae(s.price*s.qty):"sob consulta"}</span>
              </div>
            </li>`).join("")}
          </ul>
        </div>
        <form class="bf-checkout__form bf-account__card" data-bf-checkout novalidate>
          <h3>Entrega</h3>
          <label>Nome <input type="text" name="nome" required placeholder="Seu nome"></label>
          <label>WhatsApp <input type="tel" name="fone" required placeholder="(11) 9...."></label>
          <label>CEP <input type="tel" name="cep" required placeholder="00000-000" maxlength="9" data-bf-cep></label>
          <p class="bf-checkout__endereco" data-bf-endereco hidden></p>
          <div class="bf-checkout__resumo">
            <div><span>Subtotal</span><strong>${r?Ae(t):`${Ae(t)} + itens sob consulta`}</strong></div>
            <div><span>Frete</span><strong data-bf-frete>Informe o CEP</strong></div>
            <div class="bf-checkout__total"><span>Total</span><strong data-bf-total>—</strong></div>
          </div>
          <p class="bf-account__error" hidden></p>
          <button type="submit" class="bf-cart-checkout">Enviar pedido pelo WhatsApp</button>
          <p class="bf-account__note">Sem pagamento pelo site: o pedido é registrado e a compra é confirmada na conversa do WhatsApp.</p>
        </form>
      </div>
    </div>`,document.title="Finalizar pedido - BateForte Materiais para Construção"}function zg(e,n){const t=n.reduce((a,l)=>a+(l.price||0)*l.qty,0),r=n.every(a=>a.price!=null);e.querySelector("[data-bf-frete]").textContent=ae.label;const s=e.querySelector("[data-bf-total]");ae.valor!=null&&r?s.textContent=Ae(t+ae.valor):ae.valor!=null?s.textContent=`${Ae(t+ae.valor)} + itens sob consulta`:s.textContent="a confirmar"}function Lg(){const e=new Date,n=t=>String(t).padStart(2,"0");return`BF-${e.getFullYear()}${n(e.getMonth()+1)}${n(e.getDate())}-${n(e.getHours())}${n(e.getMinutes())}${n(e.getSeconds())}`}function Mg(e){var t;const n=window.__bfPedidosUrl??ag;if(n)try{const r=JSON.stringify(e);(t=navigator.sendBeacon)!=null&&t.call(navigator,n,new Blob([r],{type:"text/plain"}))||fetch(n,{method:"POST",mode:"no-cors",body:r})}catch(r){console.warn("[pedidos] registro falhou:",r.message)}}function Ig(){document.addEventListener("input",async e=>{if(!e.target.matches("[data-bf-cep]"))return;const n=e.target.closest("[data-bf-checkout]"),t=e.target.value.replace(/\D/g,"");if(e.target.value=t.length>5?`${t.slice(0,5)}-${t.slice(5,8)}`:t,t.length!==8)return;const r=Li(),s=r.reduce((l,o)=>l+(o.price||0)*o.qty,0);n.querySelector("[data-bf-frete]").textContent="calculando...",ae=await Tg(t,s);const a=n.querySelector("[data-bf-endereco]");a.hidden=!ae.endereco,a.textContent=ae.endereco||"",zg(n,r)}),document.addEventListener("submit",e=>{const n=e.target.closest("[data-bf-checkout]");if(!n)return;e.preventDefault();const t=Object.fromEntries(new FormData(n)),r=n.querySelector(".bf-account__error");if(!t.nome.trim()||!t.fone.trim()||t.cep.replace(/\D/g,"").length!==8){r.textContent="Preencha nome, WhatsApp e um CEP válido.",r.hidden=!1;return}r.hidden=!0;const s=Li(),a=s.reduce((d,p)=>d+(p.price||0)*p.qty,0),l=Lg();Mg({numero:l,nome:t.nome.trim(),fone:t.fone.trim(),cep:t.cep,endereco:ae.endereco||"",km:ae.km!=null?Math.round(ae.km*10)/10:"",itens:s.map(d=>({ref:d.ref||"",nome:d.name,qtd:d.qty,preco_alegado:d.price})),subtotal_alegado:a,frete_alegado:ae.valor,total_alegado:ae.valor!=null?a+ae.valor:null});const o=s.map(d=>`- ${d.qty}x ${d.name}${d.ref?` (Ref: ${d.ref})`:""}${d.price!=null?` — ${Ae(d.price*d.qty)}`:" — sob consulta"}`),c=[cg(),"",`Pedido: *${l}*`,`Nome: ${t.nome.trim()}`,`Entrega no CEP: ${t.cep}${ae.endereco?` (${ae.endereco})`:""}`,"","Itens:",...o,"",`Subtotal: ${Ae(a)}`,`Frete: ${ae.label}`,`Total: ${ae.valor!=null?`*${Ae(a+ae.valor)}*`:"a confirmar"}`,"","Podem confirmar a disponibilidade e as formas de pagamento?"].join(`
`);window.open(Bn(c),"_blank")})}const _e=new Map;let Tu="";const yr={cimento:{name:"Cimento",test:/cimento|argamassa|concreto|bloco|\bcal\b/i},areia:{name:"Areia",test:/areia|pedra|brita/i},ferro:{name:"Ferro",test:/\bferro\b|vergalh|treli|arame|prego/i},eletrica:{name:"Elétrica",test:/cabo|\bfio\b|fios|el[eé]tr|disjuntor|tomada|interruptor/i},hidraulica:{name:"Hidráulica",test:/hidr|tubo|cano|conex|torneira|caixa d/i},telhas:{name:"Telhas",test:/telha/i},tintas:{name:"Tintas",test:/tinta|esmalte|self base|verniz|selador/i}},Og="https://wa.me/5511974659658";function zl(){var n;let e=document.querySelector(".bf-pdp");return e||(e=document.createElement("div"),e.className="bf-pdp",(n=document.querySelector("main.site-main"))==null||n.appendChild(e)),e}function Pu(e){const n=ls.find(t=>t.slug===e);return n||(yr[e]?{slug:e,name:yr[e].name}:null)}function R(e){const n=document.createElement("div");return n.textContent=e||"",n.innerHTML}function Ag(e){if(!e)return"";const n=e.getAttribute("src")||"",t=getComputedStyle(e).backgroundImage,r=t&&t.match(/url\("(data:[^"]+)"\)/);return r&&n.endsWith(".svg")?r[1]:n}function $g(){if(Ds.length){Ds.forEach(e=>{_e.has(e.id)||_e.set(e.id,{id:e.id,ref:e.referencia||"",name:e.nome||"Produto",img:e.imagem||"",tag:e.tag||"",section:e.vitrine||e.categoriaNome||"Produtos",sectionEl:null,cat:e.categoria||"",marca:e.marca||"",marcaSlug:e.marcaSlug||"",price:e.preco!=null?e.preco:null})});return}document.querySelectorAll(".product[id]").forEach(e=>{var r,s,a;const n=e.id;if(!n||_e.has(n))return;const t=e.closest(".section-showcase");_e.set(n,{id:n,ref:(e.getAttribute("product-ref")||"").replace("ref-empty",""),name:((r=e.querySelector(".product-name"))==null?void 0:r.textContent.trim())||"Produto",img:Ag(e.querySelector(".image img")),tag:((s=e.querySelector(".product-tags .tag-text"))==null?void 0:s.textContent.trim())||"",section:((a=t==null?void 0:t.querySelector(".title-section"))==null?void 0:a.textContent.trim())||"Produtos",sectionEl:t,cat:e.dataset.bfCategory||"",price:e.dataset.bfPrice?Number(e.dataset.bfPrice):null})})}const Tt=e=>e.price!=null?Ae(e.price):"Preço sob consulta";function Dg(){document.querySelectorAll('a[href*="atlantanet.com.br"]').forEach(e=>{const n=e.closest(".product[id]");if(n&&_e.has(n.id)){e.setAttribute("href",`#/produto/${n.id}`),e.removeAttribute("target");return}const t=`${e.textContent} ${e.getAttribute("href")}`,r=Object.keys(yr).find(s=>yr[s].test.test(t));e.setAttribute("href",r?`#/categoria/${r}`:"/"),e.removeAttribute("target")})}function Fg(e,n=4){const t=[];for(const r of _e.values())if(r.id!==e.id&&r.section===e.section&&t.push(r),t.length>=n)break;return t}function Bg(e){var r;let n=document.querySelector(".bf-pdp");n||(n=document.createElement("div"),n.className="bf-pdp",(r=document.querySelector("main.site-main"))==null||r.appendChild(n));const t=Fg(e);n.innerHTML=`
    <div class="container">
      <nav class="bf-pdp__breadcrumb">
        <a href="#" data-bf-close-pdp>Início</a>
        <span> / ${R(e.section)} / </span>
        <strong>${R(e.name)}</strong>
      </nav>
      <div class="bf-pdp__grid">
        <div class="bf-pdp__image">
          ${e.tag?`<span class="bf-pdp__tag">${R(e.tag)}</span>`:""}
          <img src="${R(e.img)}" alt="${R(e.name)}">
        </div>
        <div class="bf-pdp__info">
          <h1 class="bf-pdp__name">${R(e.name)}</h1>
          ${e.ref?`<p class="bf-pdp__ref">Referência: ${R(e.ref)}</p>`:""}
          <p class="bf-pdp__price">${Tt(e)}</p>
          <p class="bf-pdp__note">Consulte condições, estoque e formas de pagamento pelo WhatsApp <a href="${Og}" target="_blank" rel="noopener noreferrer">(11) 97465-9658</a>.</p>
          <div class="bf-pdp__qty">
            <span>Quantidade</span>
            <button type="button" data-bf-pdp-qty="-1" aria-label="Diminuir">−</button>
            <strong data-bf-pdp-qty-value>1</strong>
            <button type="button" data-bf-pdp-qty="1" aria-label="Aumentar">+</button>
          </div>
          <button type="button" class="bf-pdp__add" data-bf-pdp-add="${R(e.id)}">Adicionar ao carrinho</button>
          <a class="bf-pdp__whats" data-bf-pdp-whats href="${Bn(Tl({nome:e.name,referencia:e.ref,preco:e.price,qtd:1}))}" target="_blank" rel="noopener noreferrer"><i class="icon icon-whatsapp v-align-middle"></i> Comprar pelo WhatsApp</a>
        </div>
      </div>
      ${t.length?`
      <div class="bf-pdp__related">
        <div class="section-header"><h2 class="title-section">Produtos relacionados</h2></div>
        <div class="bf-pdp__related-grid">
          ${t.map(s=>`
          <a class="bf-pdp__related-card" href="#/produto/${R(s.id)}">
            <img src="${R(s.img)}" alt="${R(s.name)}">
            <span class="bf-pdp__related-name">${R(s.name)}</span>
            <span class="bf-pdp__related-price">${Tt(s)}</span>
          </a>`).join("")}
        </div>
      </div>`:""}
    </div>`,document.body.classList.add("bf-pdp-open"),document.title=`${e.name} - BateForte Materiais para Construção`,window.scrollTo(0,0)}const Jo=e=>e.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/\s+/g," ").trim();function Rg(e){var l;let n=document.querySelector(".bf-pdp");n||(n=document.createElement("div"),n.className="bf-pdp",(l=document.querySelector("main.site-main"))==null||l.appendChild(n));const t=Jo(e).split(" ").filter(Boolean),r=new Set,s=[..._e.values()].filter(o=>{const c=Jo(o.name);return!t.every(d=>c.includes(d))||r.has(c)?!1:(r.add(c),!0)}),a=Bn(og(e));n.innerHTML=`
    <div class="container">
      <nav class="bf-pdp__breadcrumb">
        <a href="#" data-bf-close-pdp>Início</a><span> / </span><strong>Busca</strong>
      </nav>
      <div class="section-header"><h2 class="title-section">Resultados para “${R(e)}”</h2></div>
      ${s.length?`
      <p class="bf-cat__count">${s.length} ${s.length===1?"produto encontrado":"produtos encontrados"}</p>
      <div class="bf-pdp__related-grid">
        ${s.map(o=>`
        <a class="bf-pdp__related-card" href="#/produto/${R(o.id)}">
          <img src="${R(o.img)}" alt="${R(o.name)}">
          <span class="bf-pdp__related-name">${R(o.name)}</span>
          <span class="bf-pdp__related-price">${Tt(o)}</span>
        </a>`).join("")}
      </div>`:`
      <div class="bf-cat__empty">
        <p>Não encontramos <strong>“${R(e)}”</strong> no catálogo online — mas a loja tem muito mais em estoque. Fale com a gente!</p>
        <a class="bf-pdp__whats" href="${a}" target="_blank" rel="noopener noreferrer"><i class="icon icon-whatsapp v-align-middle"></i> Perguntar pelo WhatsApp</a>
      </div>`}
    </div>`,document.body.classList.add("bf-pdp-open"),document.title=`Busca: ${e} - BateForte Materiais para Construção`,window.scrollTo(0,0)}function Vg(e){var o;const n=Pu(e),t=yr[e];let r=document.querySelector(".bf-pdp");r||(r=document.createElement("div"),r.className="bf-pdp",(o=document.querySelector("main.site-main"))==null||o.appendChild(r));const s=new Set,a=[..._e.values()].filter(c=>{if(c.cat?c.cat!==e:!(t&&t.test.test(c.name)))return!1;const d=c.name.toLowerCase().replace(/\s+/g," ");return s.has(d)?!1:(s.add(d),!0)}),l=Bn(Pl(n.name));r.innerHTML=`
    <div class="container">
      <nav class="bf-pdp__breadcrumb">
        <a href="#" data-bf-close-pdp>Início</a>
        <span> / </span>
        <strong>${R(n.name)}</strong>
      </nav>
      <div class="section-header"><h2 class="title-section">${R(n.name)}</h2></div>
      ${a.length?`
      <p class="bf-cat__count">${a.length} ${a.length===1?"produto":"produtos"}</p>
      <div class="bf-pdp__related-grid">
        ${a.map(c=>`
        <a class="bf-pdp__related-card" href="#/produto/${R(c.id)}">
          <img src="${R(c.img)}" alt="${R(c.name)}">
          <span class="bf-pdp__related-name">${R(c.name)}</span>
          <span class="bf-pdp__related-price">${Tt(c)}</span>
        </a>`).join("")}
      </div>`:`
      <div class="bf-cat__empty">
        <p>Trabalhamos com toda a linha de <strong>${R(n.name)}</strong> na loja — o catálogo online mostra só uma parte do estoque.</p>
        <a class="bf-pdp__whats" href="${l}" target="_blank" rel="noopener noreferrer"><i class="icon icon-whatsapp v-align-middle"></i> Consultar pelo WhatsApp</a>
      </div>`}
    </div>`,document.body.classList.add("bf-pdp-open"),document.title=`${n.name} - BateForte Materiais para Construção`,window.scrollTo(0,0)}function Hg(){const e=zl(),n=new Set,t=[..._e.values()].filter(s=>{if(!ku(s))return!1;const a=s.name.toLowerCase().replace(/\s+/g," ");return n.has(a)?!1:(n.add(a),!0)}),r=Bn(Pl("ofertas e promoções"));e.innerHTML=`
    <div class="container">
      <nav class="bf-pdp__breadcrumb">
        <a href="#" data-bf-close-pdp>Início</a><span> / </span><strong>Ofertas Especiais</strong>
      </nav>
      <div class="section-header"><h2 class="title-section">Ofertas Especiais</h2></div>
      ${t.length?`
      <p class="bf-cat__count">${t.length} ${t.length===1?"produto em oferta":"produtos em oferta"}</p>
      <div class="bf-pdp__related-grid">
        ${t.map(s=>`
        <a class="bf-pdp__related-card" href="#/produto/${R(s.id)}">
          <img src="${R(s.img)}" alt="${R(s.name)}">
          <span class="bf-pdp__related-name">${R(s.name)}</span>
          <span class="bf-pdp__related-price">${Tt(s)}</span>
        </a>`).join("")}
      </div>`:`
      <div class="bf-cat__empty">
        <p>Nenhuma oferta no momento. Fale com a gente para conferir as condições da semana.</p>
        <a class="bf-pdp__whats" href="${r}" target="_blank" rel="noopener noreferrer"><i class="icon icon-whatsapp v-align-middle"></i> Falar pelo WhatsApp</a>
      </div>`}
    </div>`,document.body.classList.add("bf-pdp-open"),document.title="Ofertas Especiais - BateForte Materiais para Construção",window.scrollTo(0,0)}function qg(e){const n=zl();let t="";const r=new Set,s=[..._e.values()].filter(l=>{if(l.marcaSlug!==e)return!1;t||(t=l.marca);const o=l.name.toLowerCase().replace(/\s+/g," ");return r.has(o)?!1:(r.add(o),!0)});t=t||e;const a=Bn(Pl(t));n.innerHTML=`
    <div class="container">
      <nav class="bf-pdp__breadcrumb">
        <a href="#" data-bf-close-pdp>Início</a><span> / </span><span>Marcas</span><span> / </span><strong>${R(t)}</strong>
      </nav>
      <div class="section-header"><h2 class="title-section">${R(t)}</h2></div>
      ${s.length?`
      <p class="bf-cat__count">${s.length} ${s.length===1?"produto":"produtos"}</p>
      <div class="bf-pdp__related-grid">
        ${s.map(l=>`
        <a class="bf-pdp__related-card" href="#/produto/${R(l.id)}">
          <img src="${R(l.img)}" alt="${R(l.name)}">
          <span class="bf-pdp__related-name">${R(l.name)}</span>
          <span class="bf-pdp__related-price">${Tt(l)}</span>
        </a>`).join("")}
      </div>`:`
      <div class="bf-cat__empty">
        <p>Não encontramos produtos da marca <strong>${R(t)}</strong> no catálogo online — mas temos muito mais na loja.</p>
        <a class="bf-pdp__whats" href="${a}" target="_blank" rel="noopener noreferrer"><i class="icon icon-whatsapp v-align-middle"></i> Consultar pelo WhatsApp</a>
      </div>`}
    </div>`,document.body.classList.add("bf-pdp-open"),document.title=`${t} - BateForte Materiais para Construção`,window.scrollTo(0,0)}function Gg(){document.body.classList.remove("bf-pdp-open"),document.title=Tu}function ec(){const e=location.hash.match(/^#\/produto\/(.+)$/);if(e){const s=_e.get(decodeURIComponent(e[1]));if(s){rn(),Bg(s);return}}const n=location.hash.match(/^#\/categoria\/([a-z0-9-]+)$/);if(n&&Pu(n[1])){rn(),Vg(n[1]);return}const t=location.hash.match(/^#\/marca\/([a-z0-9-]+)$/);if(t){rn(),qg(t[1]);return}if(location.hash==="#/ofertas"){rn(),Hg();return}if(location.hash==="#/finalizar"){rn(),Pg(zl()),document.body.classList.add("bf-pdp-open"),window.scrollTo(0,0);return}const r=location.hash.match(/^#\/busca\/(.+)$/);if(r){rn(),Rg(decodeURIComponent(r[1]));return}Gg()}function Wg(){Tu=document.title,$g(),Dg(),document.addEventListener("click",e=>{var s,a,l;const n=e.target.closest(".product a.space-image, .product a.product-info");if(n){const o=(s=n.closest(".product"))==null?void 0:s.id;o&&_e.has(o)&&(e.preventDefault(),location.hash=`#/produto/${o}`);return}if(e.target.closest("[data-bf-close-pdp]")){e.preventDefault(),location.hash="";return}const t=e.target.closest("[data-bf-pdp-qty]");if(t){const o=t.parentElement.querySelector("[data-bf-pdp-qty-value]"),c=Math.max(1,Number(o.textContent)+Number(t.dataset.bfPdpQty));o.textContent=String(c);const d=document.querySelector("[data-bf-pdp-whats]"),p=_e.get((a=document.querySelector("[data-bf-pdp-add]"))==null?void 0:a.dataset.bfPdpAdd);d&&p&&(d.href=Bn(Tl({nome:p.name,referencia:p.ref,preco:p.price,qtd:c})));return}const r=e.target.closest("[data-bf-pdp-add]");if(r){const o=_e.get(r.dataset.bfPdpAdd),c=Number(((l=document.querySelector("[data-bf-pdp-qty-value]"))==null?void 0:l.textContent)||1);o&&(_u({id:o.id,ref:o.ref,name:o.name,img:o.img,href:`#/produto/${o.id}`,price:o.price},c),Mi())}}),Ig(),window.addEventListener("hashchange",ec),ec()}function Ug(){const e=r=>r.classList.add("bf-img-ready"),n=r=>{r.target.tagName==="IMG"&&e(r.target)};document.addEventListener("load",n,!0),document.addEventListener("error",n,!0);const t=()=>document.querySelectorAll("img:not(.bf-img-ready)").forEach(r=>{r.complete&&e(r)});t(),setTimeout(t,400),setTimeout(t,1500)}async function Xg(){if(!window.__bfInteractive){window.__bfInteractive=!0,Ug();try{await bg()}finally{document.documentElement.classList.remove("bf-loading"),document.documentElement.classList.add("bf-loaded")}Qg(),Kg(),Wg(),Yg(),Jg(),Cg(),tv(),nv(),ev()}}function Oa(e){const n=e.querySelector(".prev"),t=e.querySelector(".next");for(const[r,s]of[[n,"icon-arrow-left"],[t,"icon-arrow-right"]])r&&!r.querySelector(".icon")&&(r.classList.remove("sf-hidden"),r.removeAttribute("aria-disabled"),r.insertAdjacentHTML("beforeend",`<i class="icon ${s}"></i>`));return{prev:n,next:t}}function Qg(){var s;const e=document.querySelector(".message-top .swiper-container"),n=e==null?void 0:e.querySelector(".swiper-wrapper");if(!n)return;const t=new Set,r=[];n.querySelectorAll(".swiper-slide a").forEach(a=>{const l=a.textContent.trim();l&&!t.has(l)&&(t.add(l),r.push(l))}),r.length&&(n.style.cssText="",n.innerHTML=r.map(a=>`<div class="item swiper-slide"><a href="javascript:void(0)" aria-label="${a.replace(/"/g,"&quot;")}">${a}</a></div>`).join(""),new He(e,{modules:[is],slidesPerView:1,loop:r.length>1,allowTouchMove:!1,autoplay:r.length>1?{delay:4e3,disableOnInteraction:!1}:!1}),(s=e.closest(".message-top"))==null||s.classList.add("bf-ready"))}function Kg(){document.querySelectorAll(".section-showcase .list-product.swiper-container").forEach(a=>{a.classList.add("bf-carousel");const{prev:l,next:o}=Oa(a);new He(a,{modules:[Wr],slidesPerView:2,spaceBetween:8,breakpoints:{768:{slidesPerView:4,spaceBetween:0}},navigation:{prevEl:l,nextEl:o},watchOverflow:!0})});const e=document.querySelector(".buy-sizes .swiper-container");if(e){e.classList.add("bf-carousel");const a=Oa(e);new He(e,{modules:[Wr],slidesPerView:2.3,spaceBetween:12,breakpoints:{480:{slidesPerView:3.3,spaceBetween:16},768:{slidesPerView:4.3,spaceBetween:20},1024:{slidesPerView:5.3,spaceBetween:24}},navigation:{prevEl:a.prev,nextEl:a.next},watchOverflow:!0})}const n=a=>{const l=document.createElement("div");return l.className="swiper-pagination bf-dots",a.appendChild(l),l},t=document.querySelector('.custom-home-reviews .swiper-container, [class*="reviews"] .swiper-container');if(t){t.classList.add("bf-carousel");const a=Oa(t.closest('[class*="reviews"]')||t);new He(t,{modules:[is,Wr,Xo],slidesPerView:1.12,spaceBetween:12,breakpoints:{768:{slidesPerView:2,spaceBetween:20},1024:{slidesPerView:3,spaceBetween:20}},loop:!0,autoplay:{delay:4500,disableOnInteraction:!1,pauseOnMouseEnter:!0},navigation:{prevEl:a.prev,nextEl:a.next},pagination:{el:n(t),clickable:!0}})}const r=document.querySelector(".template-instagram .swiper-container");r&&(r.classList.add("bf-carousel"),new He(r,{modules:[is,Xo],slidesPerView:1.15,spaceBetween:12,breakpoints:{480:{slidesPerView:2,spaceBetween:18},992:{slidesPerView:4,spaceBetween:25}},loop:!0,autoplay:{delay:3500,disableOnInteraction:!1,pauseOnMouseEnter:!0},watchOverflow:!0,pagination:{el:n(r),clickable:!0}}));const s=document.querySelector(".brands-custom .swiper-container");s&&(s.classList.add("bf-carousel"),new He(s,{modules:[is,Wr],slidesPerView:2,spaceBetween:30,breakpoints:{768:{slidesPerView:6,spaceBetween:60}},loop:!0,speed:4e3,autoplay:{delay:0,disableOnInteraction:!1,pauseOnMouseEnter:!0},navigation:{prevEl:document.querySelector(".brands-custom .prev"),nextEl:document.querySelector(".brands-custom .next")}}))}function Yg(){const e=document.getElementById("menu-mobile");if(!e)return;const n=[...document.querySelectorAll(".header .nav .list > li.first-level")],t=r=>r.trim().toLowerCase().replace(/\s+/g," ");e.querySelectorAll(".nav-mobile > .list > li.sub").forEach(r=>{var p;const s=r.querySelector(":scope > a"),a=r.querySelector(":scope > ul.second-level");if(!s||!a)return;const l=t(s.textContent),o=n.find(h=>{const g=h.querySelector(".name");return g&&l.includes(t(g.textContent))}),c=new Set,d=o?[...o.querySelectorAll(".second-level a")].filter(h=>{const g=h.textContent.trim().toLowerCase();return!g||c.has(g)?!1:(c.add(g),!0)}).slice(0,24):[];if(!d.length){(p=s.querySelector(".icon-arrow-down"))==null||p.remove();return}a.classList.remove("sf-hidden"),a.innerHTML=d.map(h=>`<li><a href="${h.getAttribute("href")}">${h.textContent.trim()}</a></li>`).join(""),s.addEventListener("click",h=>{h.preventDefault(),r.classList.toggle("bf-expanded")})}),document.addEventListener("click",r=>{r.target.closest('[data-target="#menu-mobile"], .bf-burger')?Zg():(r.target.closest(".menu-mobile .close-box")||r.target.closest('.menu-mobile a[href^="#/"]'))&&jr()})}function Zg(){var e,n;(e=document.getElementById("menu-mobile"))==null||e.classList.add("bf-open"),(n=document.querySelector(".overlay-shadow"))==null||n.classList.add("bf-visible"),document.body.classList.add("bf-no-scroll")}function jr(){var e,n;(e=document.getElementById("menu-mobile"))==null||e.classList.remove("bf-open"),document.querySelector(".cart.bf-open")||((n=document.querySelector(".overlay-shadow"))==null||n.classList.remove("bf-visible"),document.body.classList.remove("bf-no-scroll"))}function Jg(){var n;const e=document.querySelector(".cc-window");if(e){if(localStorage.getItem("bf_cookie_consent")){e.classList.add("bf-hidden");return}(n=e.querySelector(".cc-dismiss"))==null||n.addEventListener("click",()=>{localStorage.setItem("bf_cookie_consent","dismiss"),e.classList.add("bf-hiding"),setTimeout(()=>e.classList.add("bf-hidden"),1e3)})}}function ev(){document.addEventListener("submit",e=>{var r;const n=e.target.closest(".header-search-wrapper, .bf-menu-search");if(!n)return;e.preventDefault();const t=(r=n.querySelector("input"))==null?void 0:r.value.trim();t&&(location.hash=`#/busca/${encodeURIComponent(t)}`,jr())})}function nv(){document.querySelectorAll(".footer .box").forEach(e=>{var r;const n=e.querySelector(":scope > .title"),t=e.querySelector(":scope > .overflow");!n||!t||((r=n.querySelector(".icon-arrow-down"))==null||r.classList.remove("sf-hidden"),n.addEventListener("click",()=>{window.innerWidth>768||e.classList.toggle("bf-expanded")}))})}function tv(){var e;(e=document.querySelector(".overlay-shadow"))==null||e.addEventListener("click",()=>{jr(),rn()}),document.addEventListener("keydown",n=>{n.key==="Escape"&&(jr(),rn())})}function rv(){return Di.useEffect(()=>{Xg()},[]),null}function sv(){return i.jsxs(i.Fragment,{children:[i.jsxs("div",{children:[`
 `,i.jsx("input",{type:"checkbox",id:"alert-show",defaultValue:"on",className:"sf-hidden"}),`
`,i.jsx("div",{className:"box-alerts sf-hidden",children:`
 
`})," "]}),i.jsx("div",{className:"site-lgpd sf-hidden",children:`
 
 
 `}),i.jsx("div",{className:"modal fade sf-hidden",id:"modal",tabIndex:"-1",role:"dialog","aria-labelledby":"myModalLabel1","aria-hidden":"true",children:`
 
`}),i.jsx("div",{"data-module":"render","data-render":"snippets/cart_preview",className:"sf-hidden",children:i.jsx("div",{className:"modal cart-preview sf-hidden","data-module":"cartPreview","data-cart-preview":"modal",tabIndex:"-1",role:"dialog","aria-labelledby":"myModalLabel","aria-hidden":"true",children:`
 
`})}),i.jsx("div",{className:"modal fade sf-hidden",id:"modal-form",tabIndex:"-1",role:"dialog","aria-labelledby":"myModalLabel2","aria-hidden":"true",children:`
 
`}),i.jsx("iframe",{id:"modal-form-iframe",height:"0",width:"0",frameBorder:"0",marginWidth:"0",marginHeight:"0",ref:O("display:none")})]})}function av(){return i.jsxs(i.Fragment,{children:[i.jsx(zm,{}),i.jsx(Pm,{}),i.jsx("div",{className:"overlay-shadow"}),i.jsx(Tm,{}),i.jsx(sv,{}),i.jsx(rv,{})]})}document.documentElement.classList.add("bf-loading");setTimeout(()=>document.documentElement.classList.remove("bf-loading"),6e3);"scrollRestoration"in history&&(history.scrollRestoration="manual");pu(document.getElementById("root")).render(i.jsx(av,{}));
