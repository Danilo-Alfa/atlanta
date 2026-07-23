(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const l of s)if(l.type==="childList")for(const i of l.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function t(s){const l={};return s.integrity&&(l.integrity=s.integrity),s.referrerPolicy&&(l.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?l.credentials="include":s.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(s){if(s.ep)return;s.ep=!0;const l=t(s);fetch(s.href,l)}})();var $i={exports:{}},ea={},Wi={exports:{}},b={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Xt=Symbol.for("react.element"),au=Symbol.for("react.portal"),su=Symbol.for("react.fragment"),lu=Symbol.for("react.strict_mode"),iu=Symbol.for("react.profiler"),ou=Symbol.for("react.provider"),cu=Symbol.for("react.context"),uu=Symbol.for("react.forward_ref"),du=Symbol.for("react.suspense"),pu=Symbol.for("react.memo"),fu=Symbol.for("react.lazy"),Ml=Symbol.iterator;function mu(e){return e===null||typeof e!="object"?null:(e=Ml&&e[Ml]||e["@@iterator"],typeof e=="function"?e:null)}var Hi={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Qi=Object.assign,Ki={};function st(e,n,t){this.props=e,this.context=n,this.refs=Ki,this.updater=t||Hi}st.prototype.isReactComponent={};st.prototype.setState=function(e,n){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,n,"setState")};st.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Xi(){}Xi.prototype=st.prototype;function Fs(e,n,t){this.props=e,this.context=n,this.refs=Ki,this.updater=t||Hi}var As=Fs.prototype=new Xi;As.constructor=Fs;Qi(As,st.prototype);As.isPureReactComponent=!0;var Il=Array.isArray,Gi=Object.prototype.hasOwnProperty,Ds={current:null},qi={key:!0,ref:!0,__self:!0,__source:!0};function Yi(e,n,t){var r,s={},l=null,i=null;if(n!=null)for(r in n.ref!==void 0&&(i=n.ref),n.key!==void 0&&(l=""+n.key),n)Gi.call(n,r)&&!qi.hasOwnProperty(r)&&(s[r]=n[r]);var o=arguments.length-2;if(o===1)s.children=t;else if(1<o){for(var c=Array(o),d=0;d<o;d++)c[d]=arguments[d+2];s.children=c}if(e&&e.defaultProps)for(r in o=e.defaultProps,o)s[r]===void 0&&(s[r]=o[r]);return{$$typeof:Xt,type:e,key:l,ref:i,props:s,_owner:Ds.current}}function hu(e,n){return{$$typeof:Xt,type:e.type,key:n,ref:e.ref,props:e.props,_owner:e._owner}}function Bs(e){return typeof e=="object"&&e!==null&&e.$$typeof===Xt}function vu(e){var n={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(t){return n[t]})}var Rl=/\/+/g;function wa(e,n){return typeof e=="object"&&e!==null&&e.key!=null?vu(""+e.key):n.toString(36)}function xr(e,n,t,r,s){var l=typeof e;(l==="undefined"||l==="boolean")&&(e=null);var i=!1;if(e===null)i=!0;else switch(l){case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case Xt:case au:i=!0}}if(i)return i=e,s=s(i),e=r===""?"."+wa(i,0):r,Il(s)?(t="",e!=null&&(t=e.replace(Rl,"$&/")+"/"),xr(s,n,t,"",function(d){return d})):s!=null&&(Bs(s)&&(s=hu(s,t+(!s.key||i&&i.key===s.key?"":(""+s.key).replace(Rl,"$&/")+"/")+e)),n.push(s)),1;if(i=0,r=r===""?".":r+":",Il(e))for(var o=0;o<e.length;o++){l=e[o];var c=r+wa(l,o);i+=xr(l,n,t,c,s)}else if(c=mu(e),typeof c=="function")for(e=c.call(e),o=0;!(l=e.next()).done;)l=l.value,c=r+wa(l,o++),i+=xr(l,n,t,c,s);else if(l==="object")throw n=String(e),Error("Objects are not valid as a React child (found: "+(n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n)+"). If you meant to render a collection of children, use an array instead.");return i}function nr(e,n,t){if(e==null)return e;var r=[],s=0;return xr(e,r,"","",function(l){return n.call(t,l,s++)}),r}function gu(e){if(e._status===-1){var n=e._result;n=n(),n.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=n)}if(e._status===1)return e._result.default;throw e._result}var oe={current:null},wr={transition:null},xu={ReactCurrentDispatcher:oe,ReactCurrentBatchConfig:wr,ReactCurrentOwner:Ds};function Zi(){throw Error("act(...) is not supported in production builds of React.")}b.Children={map:nr,forEach:function(e,n,t){nr(e,function(){n.apply(this,arguments)},t)},count:function(e){var n=0;return nr(e,function(){n++}),n},toArray:function(e){return nr(e,function(n){return n})||[]},only:function(e){if(!Bs(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};b.Component=st;b.Fragment=su;b.Profiler=iu;b.PureComponent=Fs;b.StrictMode=lu;b.Suspense=du;b.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=xu;b.act=Zi;b.cloneElement=function(e,n,t){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Qi({},e.props),s=e.key,l=e.ref,i=e._owner;if(n!=null){if(n.ref!==void 0&&(l=n.ref,i=Ds.current),n.key!==void 0&&(s=""+n.key),e.type&&e.type.defaultProps)var o=e.type.defaultProps;for(c in n)Gi.call(n,c)&&!qi.hasOwnProperty(c)&&(r[c]=n[c]===void 0&&o!==void 0?o[c]:n[c])}var c=arguments.length-2;if(c===1)r.children=t;else if(1<c){o=Array(c);for(var d=0;d<c;d++)o[d]=arguments[d+2];r.children=o}return{$$typeof:Xt,type:e.type,key:s,ref:l,props:r,_owner:i}};b.createContext=function(e){return e={$$typeof:cu,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:ou,_context:e},e.Consumer=e};b.createElement=Yi;b.createFactory=function(e){var n=Yi.bind(null,e);return n.type=e,n};b.createRef=function(){return{current:null}};b.forwardRef=function(e){return{$$typeof:uu,render:e}};b.isValidElement=Bs;b.lazy=function(e){return{$$typeof:fu,_payload:{_status:-1,_result:e},_init:gu}};b.memo=function(e,n){return{$$typeof:pu,type:e,compare:n===void 0?null:n}};b.startTransition=function(e){var n=wr.transition;wr.transition={};try{e()}finally{wr.transition=n}};b.unstable_act=Zi;b.useCallback=function(e,n){return oe.current.useCallback(e,n)};b.useContext=function(e){return oe.current.useContext(e)};b.useDebugValue=function(){};b.useDeferredValue=function(e){return oe.current.useDeferredValue(e)};b.useEffect=function(e,n){return oe.current.useEffect(e,n)};b.useId=function(){return oe.current.useId()};b.useImperativeHandle=function(e,n,t){return oe.current.useImperativeHandle(e,n,t)};b.useInsertionEffect=function(e,n){return oe.current.useInsertionEffect(e,n)};b.useLayoutEffect=function(e,n){return oe.current.useLayoutEffect(e,n)};b.useMemo=function(e,n){return oe.current.useMemo(e,n)};b.useReducer=function(e,n,t){return oe.current.useReducer(e,n,t)};b.useRef=function(e){return oe.current.useRef(e)};b.useState=function(e){return oe.current.useState(e)};b.useSyncExternalStore=function(e,n,t){return oe.current.useSyncExternalStore(e,n,t)};b.useTransition=function(){return oe.current.useTransition()};b.version="18.3.1";Wi.exports=b;var Vs=Wi.exports;/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var wu=Vs,yu=Symbol.for("react.element"),ju=Symbol.for("react.fragment"),Nu=Object.prototype.hasOwnProperty,ku=wu.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Su={key:!0,ref:!0,__self:!0,__source:!0};function Ji(e,n,t){var r,s={},l=null,i=null;t!==void 0&&(l=""+t),n.key!==void 0&&(l=""+n.key),n.ref!==void 0&&(i=n.ref);for(r in n)Nu.call(n,r)&&!Su.hasOwnProperty(r)&&(s[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps,n)s[r]===void 0&&(s[r]=n[r]);return{$$typeof:yu,type:e,key:l,ref:i,props:s,_owner:ku.current}}ea.Fragment=ju;ea.jsx=Ji;ea.jsxs=Ji;$i.exports=ea;var a=$i.exports,eo={exports:{}},we={},no={exports:{}},to={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function n(S,P){var T=S.length;S.push(P);e:for(;0<T;){var H=T-1>>>1,q=S[H];if(0<s(q,P))S[H]=P,S[T]=q,T=H;else break e}}function t(S){return S.length===0?null:S[0]}function r(S){if(S.length===0)return null;var P=S[0],T=S.pop();if(T!==P){S[0]=T;e:for(var H=0,q=S.length,Jt=q>>>1;H<Jt;){var gn=2*(H+1)-1,xa=S[gn],xn=gn+1,er=S[xn];if(0>s(xa,T))xn<q&&0>s(er,xa)?(S[H]=er,S[xn]=T,H=xn):(S[H]=xa,S[gn]=T,H=gn);else if(xn<q&&0>s(er,T))S[H]=er,S[xn]=T,H=xn;else break e}}return P}function s(S,P){var T=S.sortIndex-P.sortIndex;return T!==0?T:S.id-P.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;e.unstable_now=function(){return l.now()}}else{var i=Date,o=i.now();e.unstable_now=function(){return i.now()-o}}var c=[],d=[],v=1,h=null,m=3,w=!1,y=!1,j=!1,A=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,u=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function f(S){for(var P=t(d);P!==null;){if(P.callback===null)r(d);else if(P.startTime<=S)r(d),P.sortIndex=P.expirationTime,n(c,P);else break;P=t(d)}}function g(S){if(j=!1,f(S),!y)if(t(c)!==null)y=!0,va(k);else{var P=t(d);P!==null&&ga(g,P.startTime-S)}}function k(S,P){y=!1,j&&(j=!1,p(E),E=-1),w=!0;var T=m;try{for(f(P),h=t(c);h!==null&&(!(h.expirationTime>P)||S&&!ze());){var H=h.callback;if(typeof H=="function"){h.callback=null,m=h.priorityLevel;var q=H(h.expirationTime<=P);P=e.unstable_now(),typeof q=="function"?h.callback=q:h===t(c)&&r(c),f(P)}else r(c);h=t(c)}if(h!==null)var Jt=!0;else{var gn=t(d);gn!==null&&ga(g,gn.startTime-P),Jt=!1}return Jt}finally{h=null,m=T,w=!1}}var _=!1,z=null,E=-1,W=5,L=-1;function ze(){return!(e.unstable_now()-L<W)}function ot(){if(z!==null){var S=e.unstable_now();L=S;var P=!0;try{P=z(!0,S)}finally{P?ct():(_=!1,z=null)}}else _=!1}var ct;if(typeof u=="function")ct=function(){u(ot)};else if(typeof MessageChannel<"u"){var Ll=new MessageChannel,ru=Ll.port2;Ll.port1.onmessage=ot,ct=function(){ru.postMessage(null)}}else ct=function(){A(ot,0)};function va(S){z=S,_||(_=!0,ct())}function ga(S,P){E=A(function(){S(e.unstable_now())},P)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(S){S.callback=null},e.unstable_continueExecution=function(){y||w||(y=!0,va(k))},e.unstable_forceFrameRate=function(S){0>S||125<S?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):W=0<S?Math.floor(1e3/S):5},e.unstable_getCurrentPriorityLevel=function(){return m},e.unstable_getFirstCallbackNode=function(){return t(c)},e.unstable_next=function(S){switch(m){case 1:case 2:case 3:var P=3;break;default:P=m}var T=m;m=P;try{return S()}finally{m=T}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(S,P){switch(S){case 1:case 2:case 3:case 4:case 5:break;default:S=3}var T=m;m=S;try{return P()}finally{m=T}},e.unstable_scheduleCallback=function(S,P,T){var H=e.unstable_now();switch(typeof T=="object"&&T!==null?(T=T.delay,T=typeof T=="number"&&0<T?H+T:H):T=H,S){case 1:var q=-1;break;case 2:q=250;break;case 5:q=1073741823;break;case 4:q=1e4;break;default:q=5e3}return q=T+q,S={id:v++,callback:P,priorityLevel:S,startTime:T,expirationTime:q,sortIndex:-1},T>H?(S.sortIndex=T,n(d,S),t(c)===null&&S===t(d)&&(j?(p(E),E=-1):j=!0,ga(g,T-H))):(S.sortIndex=q,n(c,S),y||w||(y=!0,va(k))),S},e.unstable_shouldYield=ze,e.unstable_wrapCallback=function(S){var P=m;return function(){var T=m;m=P;try{return S.apply(this,arguments)}finally{m=T}}}})(to);no.exports=to;var Cu=no.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _u=Vs,xe=Cu;function x(e){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)n+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var ro=new Set,bt={};function bn(e,n){Zn(e,n),Zn(e+"Capture",n)}function Zn(e,n){for(bt[e]=n,e=0;e<n.length;e++)ro.add(n[e])}var He=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ha=Object.prototype.hasOwnProperty,zu=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Ol={},Fl={};function Eu(e){return Ha.call(Fl,e)?!0:Ha.call(Ol,e)?!1:zu.test(e)?Fl[e]=!0:(Ol[e]=!0,!1)}function Pu(e,n,t,r){if(t!==null&&t.type===0)return!1;switch(typeof n){case"function":case"symbol":return!0;case"boolean":return r?!1:t!==null?!t.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Tu(e,n,t,r){if(n===null||typeof n>"u"||Pu(e,n,t,r))return!0;if(r)return!1;if(t!==null)switch(t.type){case 3:return!n;case 4:return n===!1;case 5:return isNaN(n);case 6:return isNaN(n)||1>n}return!1}function ce(e,n,t,r,s,l,i){this.acceptsBooleans=n===2||n===3||n===4,this.attributeName=r,this.attributeNamespace=s,this.mustUseProperty=t,this.propertyName=e,this.type=n,this.sanitizeURL=l,this.removeEmptyString=i}var ne={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ne[e]=new ce(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var n=e[0];ne[n]=new ce(n,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ne[e]=new ce(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ne[e]=new ce(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ne[e]=new ce(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ne[e]=new ce(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ne[e]=new ce(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ne[e]=new ce(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ne[e]=new ce(e,5,!1,e.toLowerCase(),null,!1,!1)});var Us=/[\-:]([a-z])/g;function $s(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var n=e.replace(Us,$s);ne[n]=new ce(n,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var n=e.replace(Us,$s);ne[n]=new ce(n,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var n=e.replace(Us,$s);ne[n]=new ce(n,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ne[e]=new ce(e,1,!1,e.toLowerCase(),null,!1,!1)});ne.xlinkHref=new ce("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ne[e]=new ce(e,1,!1,e.toLowerCase(),null,!0,!0)});function Ws(e,n,t,r){var s=ne.hasOwnProperty(n)?ne[n]:null;(s!==null?s.type!==0:r||!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(Tu(n,t,s,r)&&(t=null),r||s===null?Eu(n)&&(t===null?e.removeAttribute(n):e.setAttribute(n,""+t)):s.mustUseProperty?e[s.propertyName]=t===null?s.type===3?!1:"":t:(n=s.attributeName,r=s.attributeNamespace,t===null?e.removeAttribute(n):(s=s.type,t=s===3||s===4&&t===!0?"":""+t,r?e.setAttributeNS(r,n,t):e.setAttribute(n,t))))}var Ge=_u.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,tr=Symbol.for("react.element"),In=Symbol.for("react.portal"),Rn=Symbol.for("react.fragment"),Hs=Symbol.for("react.strict_mode"),Qa=Symbol.for("react.profiler"),ao=Symbol.for("react.provider"),so=Symbol.for("react.context"),Qs=Symbol.for("react.forward_ref"),Ka=Symbol.for("react.suspense"),Xa=Symbol.for("react.suspense_list"),Ks=Symbol.for("react.memo"),Ye=Symbol.for("react.lazy"),lo=Symbol.for("react.offscreen"),Al=Symbol.iterator;function ut(e){return e===null||typeof e!="object"?null:(e=Al&&e[Al]||e["@@iterator"],typeof e=="function"?e:null)}var U=Object.assign,ya;function xt(e){if(ya===void 0)try{throw Error()}catch(t){var n=t.stack.trim().match(/\n( *(at )?)/);ya=n&&n[1]||""}return`
`+ya+e}var ja=!1;function Na(e,n){if(!e||ja)return"";ja=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(n)if(n=function(){throw Error()},Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(n,[])}catch(d){var r=d}Reflect.construct(e,[],n)}else{try{n.call()}catch(d){r=d}e.call(n.prototype)}else{try{throw Error()}catch(d){r=d}e()}}catch(d){if(d&&r&&typeof d.stack=="string"){for(var s=d.stack.split(`
`),l=r.stack.split(`
`),i=s.length-1,o=l.length-1;1<=i&&0<=o&&s[i]!==l[o];)o--;for(;1<=i&&0<=o;i--,o--)if(s[i]!==l[o]){if(i!==1||o!==1)do if(i--,o--,0>o||s[i]!==l[o]){var c=`
`+s[i].replace(" at new "," at ");return e.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",e.displayName)),c}while(1<=i&&0<=o);break}}}finally{ja=!1,Error.prepareStackTrace=t}return(e=e?e.displayName||e.name:"")?xt(e):""}function bu(e){switch(e.tag){case 5:return xt(e.type);case 16:return xt("Lazy");case 13:return xt("Suspense");case 19:return xt("SuspenseList");case 0:case 2:case 15:return e=Na(e.type,!1),e;case 11:return e=Na(e.type.render,!1),e;case 1:return e=Na(e.type,!0),e;default:return""}}function Ga(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Rn:return"Fragment";case In:return"Portal";case Qa:return"Profiler";case Hs:return"StrictMode";case Ka:return"Suspense";case Xa:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case so:return(e.displayName||"Context")+".Consumer";case ao:return(e._context.displayName||"Context")+".Provider";case Qs:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Ks:return n=e.displayName||null,n!==null?n:Ga(e.type)||"Memo";case Ye:n=e._payload,e=e._init;try{return Ga(e(n))}catch{}}return null}function Lu(e){var n=e.type;switch(e.tag){case 24:return"Cache";case 9:return(n.displayName||"Context")+".Consumer";case 10:return(n._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=n.render,e=e.displayName||e.name||"",n.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return n;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ga(n);case 8:return n===Hs?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n}return null}function pn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function io(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Mu(e){var n=io(e)?"checked":"value",t=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),r=""+e[n];if(!e.hasOwnProperty(n)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var s=t.get,l=t.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return s.call(this)},set:function(i){r=""+i,l.call(this,i)}}),Object.defineProperty(e,n,{enumerable:t.enumerable}),{getValue:function(){return r},setValue:function(i){r=""+i},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function rr(e){e._valueTracker||(e._valueTracker=Mu(e))}function oo(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var t=n.getValue(),r="";return e&&(r=io(e)?e.checked?"true":"false":e.value),e=r,e!==t?(n.setValue(e),!0):!1}function Tr(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function qa(e,n){var t=n.checked;return U({},n,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??e._wrapperState.initialChecked})}function Dl(e,n){var t=n.defaultValue==null?"":n.defaultValue,r=n.checked!=null?n.checked:n.defaultChecked;t=pn(n.value!=null?n.value:t),e._wrapperState={initialChecked:r,initialValue:t,controlled:n.type==="checkbox"||n.type==="radio"?n.checked!=null:n.value!=null}}function co(e,n){n=n.checked,n!=null&&Ws(e,"checked",n,!1)}function Ya(e,n){co(e,n);var t=pn(n.value),r=n.type;if(t!=null)r==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+t):e.value!==""+t&&(e.value=""+t);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}n.hasOwnProperty("value")?Za(e,n.type,t):n.hasOwnProperty("defaultValue")&&Za(e,n.type,pn(n.defaultValue)),n.checked==null&&n.defaultChecked!=null&&(e.defaultChecked=!!n.defaultChecked)}function Bl(e,n,t){if(n.hasOwnProperty("value")||n.hasOwnProperty("defaultValue")){var r=n.type;if(!(r!=="submit"&&r!=="reset"||n.value!==void 0&&n.value!==null))return;n=""+e._wrapperState.initialValue,t||n===e.value||(e.value=n),e.defaultValue=n}t=e.name,t!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,t!==""&&(e.name=t)}function Za(e,n,t){(n!=="number"||Tr(e.ownerDocument)!==e)&&(t==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+t&&(e.defaultValue=""+t))}var wt=Array.isArray;function Qn(e,n,t,r){if(e=e.options,n){n={};for(var s=0;s<t.length;s++)n["$"+t[s]]=!0;for(t=0;t<e.length;t++)s=n.hasOwnProperty("$"+e[t].value),e[t].selected!==s&&(e[t].selected=s),s&&r&&(e[t].defaultSelected=!0)}else{for(t=""+pn(t),n=null,s=0;s<e.length;s++){if(e[s].value===t){e[s].selected=!0,r&&(e[s].defaultSelected=!0);return}n!==null||e[s].disabled||(n=e[s])}n!==null&&(n.selected=!0)}}function Ja(e,n){if(n.dangerouslySetInnerHTML!=null)throw Error(x(91));return U({},n,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Vl(e,n){var t=n.value;if(t==null){if(t=n.children,n=n.defaultValue,t!=null){if(n!=null)throw Error(x(92));if(wt(t)){if(1<t.length)throw Error(x(93));t=t[0]}n=t}n==null&&(n=""),t=n}e._wrapperState={initialValue:pn(t)}}function uo(e,n){var t=pn(n.value),r=pn(n.defaultValue);t!=null&&(t=""+t,t!==e.value&&(e.value=t),n.defaultValue==null&&e.defaultValue!==t&&(e.defaultValue=t)),r!=null&&(e.defaultValue=""+r)}function Ul(e){var n=e.textContent;n===e._wrapperState.initialValue&&n!==""&&n!==null&&(e.value=n)}function po(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function es(e,n){return e==null||e==="http://www.w3.org/1999/xhtml"?po(n):e==="http://www.w3.org/2000/svg"&&n==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var ar,fo=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(n,t,r,s){MSApp.execUnsafeLocalFunction(function(){return e(n,t,r,s)})}:e}(function(e,n){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=n;else{for(ar=ar||document.createElement("div"),ar.innerHTML="<svg>"+n.valueOf().toString()+"</svg>",n=ar.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;n.firstChild;)e.appendChild(n.firstChild)}});function Lt(e,n){if(n){var t=e.firstChild;if(t&&t===e.lastChild&&t.nodeType===3){t.nodeValue=n;return}}e.textContent=n}var Nt={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Iu=["Webkit","ms","Moz","O"];Object.keys(Nt).forEach(function(e){Iu.forEach(function(n){n=n+e.charAt(0).toUpperCase()+e.substring(1),Nt[n]=Nt[e]})});function mo(e,n,t){return n==null||typeof n=="boolean"||n===""?"":t||typeof n!="number"||n===0||Nt.hasOwnProperty(e)&&Nt[e]?(""+n).trim():n+"px"}function ho(e,n){e=e.style;for(var t in n)if(n.hasOwnProperty(t)){var r=t.indexOf("--")===0,s=mo(t,n[t],r);t==="float"&&(t="cssFloat"),r?e.setProperty(t,s):e[t]=s}}var Ru=U({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ns(e,n){if(n){if(Ru[e]&&(n.children!=null||n.dangerouslySetInnerHTML!=null))throw Error(x(137,e));if(n.dangerouslySetInnerHTML!=null){if(n.children!=null)throw Error(x(60));if(typeof n.dangerouslySetInnerHTML!="object"||!("__html"in n.dangerouslySetInnerHTML))throw Error(x(61))}if(n.style!=null&&typeof n.style!="object")throw Error(x(62))}}function ts(e,n){if(e.indexOf("-")===-1)return typeof n.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var rs=null;function Xs(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var as=null,Kn=null,Xn=null;function $l(e){if(e=Yt(e)){if(typeof as!="function")throw Error(x(280));var n=e.stateNode;n&&(n=sa(n),as(e.stateNode,e.type,n))}}function vo(e){Kn?Xn?Xn.push(e):Xn=[e]:Kn=e}function go(){if(Kn){var e=Kn,n=Xn;if(Xn=Kn=null,$l(e),n)for(e=0;e<n.length;e++)$l(n[e])}}function xo(e,n){return e(n)}function wo(){}var ka=!1;function yo(e,n,t){if(ka)return e(n,t);ka=!0;try{return xo(e,n,t)}finally{ka=!1,(Kn!==null||Xn!==null)&&(wo(),go())}}function Mt(e,n){var t=e.stateNode;if(t===null)return null;var r=sa(t);if(r===null)return null;t=r[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(t&&typeof t!="function")throw Error(x(231,n,typeof t));return t}var ss=!1;if(He)try{var dt={};Object.defineProperty(dt,"passive",{get:function(){ss=!0}}),window.addEventListener("test",dt,dt),window.removeEventListener("test",dt,dt)}catch{ss=!1}function Ou(e,n,t,r,s,l,i,o,c){var d=Array.prototype.slice.call(arguments,3);try{n.apply(t,d)}catch(v){this.onError(v)}}var kt=!1,br=null,Lr=!1,ls=null,Fu={onError:function(e){kt=!0,br=e}};function Au(e,n,t,r,s,l,i,o,c){kt=!1,br=null,Ou.apply(Fu,arguments)}function Du(e,n,t,r,s,l,i,o,c){if(Au.apply(this,arguments),kt){if(kt){var d=br;kt=!1,br=null}else throw Error(x(198));Lr||(Lr=!0,ls=d)}}function Ln(e){var n=e,t=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,n.flags&4098&&(t=n.return),e=n.return;while(e)}return n.tag===3?t:null}function jo(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function Wl(e){if(Ln(e)!==e)throw Error(x(188))}function Bu(e){var n=e.alternate;if(!n){if(n=Ln(e),n===null)throw Error(x(188));return n!==e?null:e}for(var t=e,r=n;;){var s=t.return;if(s===null)break;var l=s.alternate;if(l===null){if(r=s.return,r!==null){t=r;continue}break}if(s.child===l.child){for(l=s.child;l;){if(l===t)return Wl(s),e;if(l===r)return Wl(s),n;l=l.sibling}throw Error(x(188))}if(t.return!==r.return)t=s,r=l;else{for(var i=!1,o=s.child;o;){if(o===t){i=!0,t=s,r=l;break}if(o===r){i=!0,r=s,t=l;break}o=o.sibling}if(!i){for(o=l.child;o;){if(o===t){i=!0,t=l,r=s;break}if(o===r){i=!0,r=l,t=s;break}o=o.sibling}if(!i)throw Error(x(189))}}if(t.alternate!==r)throw Error(x(190))}if(t.tag!==3)throw Error(x(188));return t.stateNode.current===t?e:n}function No(e){return e=Bu(e),e!==null?ko(e):null}function ko(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var n=ko(e);if(n!==null)return n;e=e.sibling}return null}var So=xe.unstable_scheduleCallback,Hl=xe.unstable_cancelCallback,Vu=xe.unstable_shouldYield,Uu=xe.unstable_requestPaint,Q=xe.unstable_now,$u=xe.unstable_getCurrentPriorityLevel,Gs=xe.unstable_ImmediatePriority,Co=xe.unstable_UserBlockingPriority,Mr=xe.unstable_NormalPriority,Wu=xe.unstable_LowPriority,_o=xe.unstable_IdlePriority,na=null,Ae=null;function Hu(e){if(Ae&&typeof Ae.onCommitFiberRoot=="function")try{Ae.onCommitFiberRoot(na,e,void 0,(e.current.flags&128)===128)}catch{}}var Le=Math.clz32?Math.clz32:Xu,Qu=Math.log,Ku=Math.LN2;function Xu(e){return e>>>=0,e===0?32:31-(Qu(e)/Ku|0)|0}var sr=64,lr=4194304;function yt(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Ir(e,n){var t=e.pendingLanes;if(t===0)return 0;var r=0,s=e.suspendedLanes,l=e.pingedLanes,i=t&268435455;if(i!==0){var o=i&~s;o!==0?r=yt(o):(l&=i,l!==0&&(r=yt(l)))}else i=t&~s,i!==0?r=yt(i):l!==0&&(r=yt(l));if(r===0)return 0;if(n!==0&&n!==r&&!(n&s)&&(s=r&-r,l=n&-n,s>=l||s===16&&(l&4194240)!==0))return n;if(r&4&&(r|=t&16),n=e.entangledLanes,n!==0)for(e=e.entanglements,n&=r;0<n;)t=31-Le(n),s=1<<t,r|=e[t],n&=~s;return r}function Gu(e,n){switch(e){case 1:case 2:case 4:return n+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function qu(e,n){for(var t=e.suspendedLanes,r=e.pingedLanes,s=e.expirationTimes,l=e.pendingLanes;0<l;){var i=31-Le(l),o=1<<i,c=s[i];c===-1?(!(o&t)||o&r)&&(s[i]=Gu(o,n)):c<=n&&(e.expiredLanes|=o),l&=~o}}function is(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function zo(){var e=sr;return sr<<=1,!(sr&4194240)&&(sr=64),e}function Sa(e){for(var n=[],t=0;31>t;t++)n.push(e);return n}function Gt(e,n,t){e.pendingLanes|=n,n!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,n=31-Le(n),e[n]=t}function Yu(e,n){var t=e.pendingLanes&~n;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=n,e.mutableReadLanes&=n,e.entangledLanes&=n,n=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<t;){var s=31-Le(t),l=1<<s;n[s]=0,r[s]=-1,e[s]=-1,t&=~l}}function qs(e,n){var t=e.entangledLanes|=n;for(e=e.entanglements;t;){var r=31-Le(t),s=1<<r;s&n|e[r]&n&&(e[r]|=n),t&=~s}}var I=0;function Eo(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Po,Ys,To,bo,Lo,os=!1,ir=[],rn=null,an=null,sn=null,It=new Map,Rt=new Map,Je=[],Zu="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ql(e,n){switch(e){case"focusin":case"focusout":rn=null;break;case"dragenter":case"dragleave":an=null;break;case"mouseover":case"mouseout":sn=null;break;case"pointerover":case"pointerout":It.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Rt.delete(n.pointerId)}}function pt(e,n,t,r,s,l){return e===null||e.nativeEvent!==l?(e={blockedOn:n,domEventName:t,eventSystemFlags:r,nativeEvent:l,targetContainers:[s]},n!==null&&(n=Yt(n),n!==null&&Ys(n)),e):(e.eventSystemFlags|=r,n=e.targetContainers,s!==null&&n.indexOf(s)===-1&&n.push(s),e)}function Ju(e,n,t,r,s){switch(n){case"focusin":return rn=pt(rn,e,n,t,r,s),!0;case"dragenter":return an=pt(an,e,n,t,r,s),!0;case"mouseover":return sn=pt(sn,e,n,t,r,s),!0;case"pointerover":var l=s.pointerId;return It.set(l,pt(It.get(l)||null,e,n,t,r,s)),!0;case"gotpointercapture":return l=s.pointerId,Rt.set(l,pt(Rt.get(l)||null,e,n,t,r,s)),!0}return!1}function Mo(e){var n=jn(e.target);if(n!==null){var t=Ln(n);if(t!==null){if(n=t.tag,n===13){if(n=jo(t),n!==null){e.blockedOn=n,Lo(e.priority,function(){To(t)});return}}else if(n===3&&t.stateNode.current.memoizedState.isDehydrated){e.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}e.blockedOn=null}function yr(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var t=cs(e.domEventName,e.eventSystemFlags,n[0],e.nativeEvent);if(t===null){t=e.nativeEvent;var r=new t.constructor(t.type,t);rs=r,t.target.dispatchEvent(r),rs=null}else return n=Yt(t),n!==null&&Ys(n),e.blockedOn=t,!1;n.shift()}return!0}function Kl(e,n,t){yr(e)&&t.delete(n)}function ed(){os=!1,rn!==null&&yr(rn)&&(rn=null),an!==null&&yr(an)&&(an=null),sn!==null&&yr(sn)&&(sn=null),It.forEach(Kl),Rt.forEach(Kl)}function ft(e,n){e.blockedOn===n&&(e.blockedOn=null,os||(os=!0,xe.unstable_scheduleCallback(xe.unstable_NormalPriority,ed)))}function Ot(e){function n(s){return ft(s,e)}if(0<ir.length){ft(ir[0],e);for(var t=1;t<ir.length;t++){var r=ir[t];r.blockedOn===e&&(r.blockedOn=null)}}for(rn!==null&&ft(rn,e),an!==null&&ft(an,e),sn!==null&&ft(sn,e),It.forEach(n),Rt.forEach(n),t=0;t<Je.length;t++)r=Je[t],r.blockedOn===e&&(r.blockedOn=null);for(;0<Je.length&&(t=Je[0],t.blockedOn===null);)Mo(t),t.blockedOn===null&&Je.shift()}var Gn=Ge.ReactCurrentBatchConfig,Rr=!0;function nd(e,n,t,r){var s=I,l=Gn.transition;Gn.transition=null;try{I=1,Zs(e,n,t,r)}finally{I=s,Gn.transition=l}}function td(e,n,t,r){var s=I,l=Gn.transition;Gn.transition=null;try{I=4,Zs(e,n,t,r)}finally{I=s,Gn.transition=l}}function Zs(e,n,t,r){if(Rr){var s=cs(e,n,t,r);if(s===null)Ia(e,n,r,Or,t),Ql(e,r);else if(Ju(s,e,n,t,r))r.stopPropagation();else if(Ql(e,r),n&4&&-1<Zu.indexOf(e)){for(;s!==null;){var l=Yt(s);if(l!==null&&Po(l),l=cs(e,n,t,r),l===null&&Ia(e,n,r,Or,t),l===s)break;s=l}s!==null&&r.stopPropagation()}else Ia(e,n,r,null,t)}}var Or=null;function cs(e,n,t,r){if(Or=null,e=Xs(r),e=jn(e),e!==null)if(n=Ln(e),n===null)e=null;else if(t=n.tag,t===13){if(e=jo(n),e!==null)return e;e=null}else if(t===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null);return Or=e,null}function Io(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch($u()){case Gs:return 1;case Co:return 4;case Mr:case Wu:return 16;case _o:return 536870912;default:return 16}default:return 16}}var nn=null,Js=null,jr=null;function Ro(){if(jr)return jr;var e,n=Js,t=n.length,r,s="value"in nn?nn.value:nn.textContent,l=s.length;for(e=0;e<t&&n[e]===s[e];e++);var i=t-e;for(r=1;r<=i&&n[t-r]===s[l-r];r++);return jr=s.slice(e,1<r?1-r:void 0)}function Nr(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function or(){return!0}function Xl(){return!1}function ye(e){function n(t,r,s,l,i){this._reactName=t,this._targetInst=s,this.type=r,this.nativeEvent=l,this.target=i,this.currentTarget=null;for(var o in e)e.hasOwnProperty(o)&&(t=e[o],this[o]=t?t(l):l[o]);return this.isDefaultPrevented=(l.defaultPrevented!=null?l.defaultPrevented:l.returnValue===!1)?or:Xl,this.isPropagationStopped=Xl,this}return U(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=or)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=or)},persist:function(){},isPersistent:or}),n}var lt={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},el=ye(lt),qt=U({},lt,{view:0,detail:0}),rd=ye(qt),Ca,_a,mt,ta=U({},qt,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:nl,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==mt&&(mt&&e.type==="mousemove"?(Ca=e.screenX-mt.screenX,_a=e.screenY-mt.screenY):_a=Ca=0,mt=e),Ca)},movementY:function(e){return"movementY"in e?e.movementY:_a}}),Gl=ye(ta),ad=U({},ta,{dataTransfer:0}),sd=ye(ad),ld=U({},qt,{relatedTarget:0}),za=ye(ld),id=U({},lt,{animationName:0,elapsedTime:0,pseudoElement:0}),od=ye(id),cd=U({},lt,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),ud=ye(cd),dd=U({},lt,{data:0}),ql=ye(dd),pd={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},fd={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},md={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function hd(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=md[e])?!!n[e]:!1}function nl(){return hd}var vd=U({},qt,{key:function(e){if(e.key){var n=pd[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=Nr(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?fd[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:nl,charCode:function(e){return e.type==="keypress"?Nr(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Nr(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),gd=ye(vd),xd=U({},ta,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Yl=ye(xd),wd=U({},qt,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:nl}),yd=ye(wd),jd=U({},lt,{propertyName:0,elapsedTime:0,pseudoElement:0}),Nd=ye(jd),kd=U({},ta,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Sd=ye(kd),Cd=[9,13,27,32],tl=He&&"CompositionEvent"in window,St=null;He&&"documentMode"in document&&(St=document.documentMode);var _d=He&&"TextEvent"in window&&!St,Oo=He&&(!tl||St&&8<St&&11>=St),Zl=" ",Jl=!1;function Fo(e,n){switch(e){case"keyup":return Cd.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ao(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var On=!1;function zd(e,n){switch(e){case"compositionend":return Ao(n);case"keypress":return n.which!==32?null:(Jl=!0,Zl);case"textInput":return e=n.data,e===Zl&&Jl?null:e;default:return null}}function Ed(e,n){if(On)return e==="compositionend"||!tl&&Fo(e,n)?(e=Ro(),jr=Js=nn=null,On=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Oo&&n.locale!=="ko"?null:n.data;default:return null}}var Pd={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ei(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!Pd[e.type]:n==="textarea"}function Do(e,n,t,r){vo(r),n=Fr(n,"onChange"),0<n.length&&(t=new el("onChange","change",null,t,r),e.push({event:t,listeners:n}))}var Ct=null,Ft=null;function Td(e){qo(e,0)}function ra(e){var n=Dn(e);if(oo(n))return e}function bd(e,n){if(e==="change")return n}var Bo=!1;if(He){var Ea;if(He){var Pa="oninput"in document;if(!Pa){var ni=document.createElement("div");ni.setAttribute("oninput","return;"),Pa=typeof ni.oninput=="function"}Ea=Pa}else Ea=!1;Bo=Ea&&(!document.documentMode||9<document.documentMode)}function ti(){Ct&&(Ct.detachEvent("onpropertychange",Vo),Ft=Ct=null)}function Vo(e){if(e.propertyName==="value"&&ra(Ft)){var n=[];Do(n,Ft,e,Xs(e)),yo(Td,n)}}function Ld(e,n,t){e==="focusin"?(ti(),Ct=n,Ft=t,Ct.attachEvent("onpropertychange",Vo)):e==="focusout"&&ti()}function Md(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ra(Ft)}function Id(e,n){if(e==="click")return ra(n)}function Rd(e,n){if(e==="input"||e==="change")return ra(n)}function Od(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var Ie=typeof Object.is=="function"?Object.is:Od;function At(e,n){if(Ie(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var t=Object.keys(e),r=Object.keys(n);if(t.length!==r.length)return!1;for(r=0;r<t.length;r++){var s=t[r];if(!Ha.call(n,s)||!Ie(e[s],n[s]))return!1}return!0}function ri(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function ai(e,n){var t=ri(e);e=0;for(var r;t;){if(t.nodeType===3){if(r=e+t.textContent.length,e<=n&&r>=n)return{node:t,offset:n-e};e=r}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=ri(t)}}function Uo(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?Uo(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function $o(){for(var e=window,n=Tr();n instanceof e.HTMLIFrameElement;){try{var t=typeof n.contentWindow.location.href=="string"}catch{t=!1}if(t)e=n.contentWindow;else break;n=Tr(e.document)}return n}function rl(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}function Fd(e){var n=$o(),t=e.focusedElem,r=e.selectionRange;if(n!==t&&t&&t.ownerDocument&&Uo(t.ownerDocument.documentElement,t)){if(r!==null&&rl(t)){if(n=r.start,e=r.end,e===void 0&&(e=n),"selectionStart"in t)t.selectionStart=n,t.selectionEnd=Math.min(e,t.value.length);else if(e=(n=t.ownerDocument||document)&&n.defaultView||window,e.getSelection){e=e.getSelection();var s=t.textContent.length,l=Math.min(r.start,s);r=r.end===void 0?l:Math.min(r.end,s),!e.extend&&l>r&&(s=r,r=l,l=s),s=ai(t,l);var i=ai(t,r);s&&i&&(e.rangeCount!==1||e.anchorNode!==s.node||e.anchorOffset!==s.offset||e.focusNode!==i.node||e.focusOffset!==i.offset)&&(n=n.createRange(),n.setStart(s.node,s.offset),e.removeAllRanges(),l>r?(e.addRange(n),e.extend(i.node,i.offset)):(n.setEnd(i.node,i.offset),e.addRange(n)))}}for(n=[],e=t;e=e.parentNode;)e.nodeType===1&&n.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<n.length;t++)e=n[t],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Ad=He&&"documentMode"in document&&11>=document.documentMode,Fn=null,us=null,_t=null,ds=!1;function si(e,n,t){var r=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;ds||Fn==null||Fn!==Tr(r)||(r=Fn,"selectionStart"in r&&rl(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),_t&&At(_t,r)||(_t=r,r=Fr(us,"onSelect"),0<r.length&&(n=new el("onSelect","select",null,n,t),e.push({event:n,listeners:r}),n.target=Fn)))}function cr(e,n){var t={};return t[e.toLowerCase()]=n.toLowerCase(),t["Webkit"+e]="webkit"+n,t["Moz"+e]="moz"+n,t}var An={animationend:cr("Animation","AnimationEnd"),animationiteration:cr("Animation","AnimationIteration"),animationstart:cr("Animation","AnimationStart"),transitionend:cr("Transition","TransitionEnd")},Ta={},Wo={};He&&(Wo=document.createElement("div").style,"AnimationEvent"in window||(delete An.animationend.animation,delete An.animationiteration.animation,delete An.animationstart.animation),"TransitionEvent"in window||delete An.transitionend.transition);function aa(e){if(Ta[e])return Ta[e];if(!An[e])return e;var n=An[e],t;for(t in n)if(n.hasOwnProperty(t)&&t in Wo)return Ta[e]=n[t];return e}var Ho=aa("animationend"),Qo=aa("animationiteration"),Ko=aa("animationstart"),Xo=aa("transitionend"),Go=new Map,li="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function mn(e,n){Go.set(e,n),bn(n,[e])}for(var ba=0;ba<li.length;ba++){var La=li[ba],Dd=La.toLowerCase(),Bd=La[0].toUpperCase()+La.slice(1);mn(Dd,"on"+Bd)}mn(Ho,"onAnimationEnd");mn(Qo,"onAnimationIteration");mn(Ko,"onAnimationStart");mn("dblclick","onDoubleClick");mn("focusin","onFocus");mn("focusout","onBlur");mn(Xo,"onTransitionEnd");Zn("onMouseEnter",["mouseout","mouseover"]);Zn("onMouseLeave",["mouseout","mouseover"]);Zn("onPointerEnter",["pointerout","pointerover"]);Zn("onPointerLeave",["pointerout","pointerover"]);bn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));bn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));bn("onBeforeInput",["compositionend","keypress","textInput","paste"]);bn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));bn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));bn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var jt="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Vd=new Set("cancel close invalid load scroll toggle".split(" ").concat(jt));function ii(e,n,t){var r=e.type||"unknown-event";e.currentTarget=t,Du(r,n,void 0,e),e.currentTarget=null}function qo(e,n){n=(n&4)!==0;for(var t=0;t<e.length;t++){var r=e[t],s=r.event;r=r.listeners;e:{var l=void 0;if(n)for(var i=r.length-1;0<=i;i--){var o=r[i],c=o.instance,d=o.currentTarget;if(o=o.listener,c!==l&&s.isPropagationStopped())break e;ii(s,o,d),l=c}else for(i=0;i<r.length;i++){if(o=r[i],c=o.instance,d=o.currentTarget,o=o.listener,c!==l&&s.isPropagationStopped())break e;ii(s,o,d),l=c}}}if(Lr)throw e=ls,Lr=!1,ls=null,e}function O(e,n){var t=n[vs];t===void 0&&(t=n[vs]=new Set);var r=e+"__bubble";t.has(r)||(Yo(n,e,2,!1),t.add(r))}function Ma(e,n,t){var r=0;n&&(r|=4),Yo(t,e,r,n)}var ur="_reactListening"+Math.random().toString(36).slice(2);function Dt(e){if(!e[ur]){e[ur]=!0,ro.forEach(function(t){t!=="selectionchange"&&(Vd.has(t)||Ma(t,!1,e),Ma(t,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[ur]||(n[ur]=!0,Ma("selectionchange",!1,n))}}function Yo(e,n,t,r){switch(Io(n)){case 1:var s=nd;break;case 4:s=td;break;default:s=Zs}t=s.bind(null,n,t,e),s=void 0,!ss||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(s=!0),r?s!==void 0?e.addEventListener(n,t,{capture:!0,passive:s}):e.addEventListener(n,t,!0):s!==void 0?e.addEventListener(n,t,{passive:s}):e.addEventListener(n,t,!1)}function Ia(e,n,t,r,s){var l=r;if(!(n&1)&&!(n&2)&&r!==null)e:for(;;){if(r===null)return;var i=r.tag;if(i===3||i===4){var o=r.stateNode.containerInfo;if(o===s||o.nodeType===8&&o.parentNode===s)break;if(i===4)for(i=r.return;i!==null;){var c=i.tag;if((c===3||c===4)&&(c=i.stateNode.containerInfo,c===s||c.nodeType===8&&c.parentNode===s))return;i=i.return}for(;o!==null;){if(i=jn(o),i===null)return;if(c=i.tag,c===5||c===6){r=l=i;continue e}o=o.parentNode}}r=r.return}yo(function(){var d=l,v=Xs(t),h=[];e:{var m=Go.get(e);if(m!==void 0){var w=el,y=e;switch(e){case"keypress":if(Nr(t)===0)break e;case"keydown":case"keyup":w=gd;break;case"focusin":y="focus",w=za;break;case"focusout":y="blur",w=za;break;case"beforeblur":case"afterblur":w=za;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":w=Gl;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":w=sd;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":w=yd;break;case Ho:case Qo:case Ko:w=od;break;case Xo:w=Nd;break;case"scroll":w=rd;break;case"wheel":w=Sd;break;case"copy":case"cut":case"paste":w=ud;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":w=Yl}var j=(n&4)!==0,A=!j&&e==="scroll",p=j?m!==null?m+"Capture":null:m;j=[];for(var u=d,f;u!==null;){f=u;var g=f.stateNode;if(f.tag===5&&g!==null&&(f=g,p!==null&&(g=Mt(u,p),g!=null&&j.push(Bt(u,g,f)))),A)break;u=u.return}0<j.length&&(m=new w(m,y,null,t,v),h.push({event:m,listeners:j}))}}if(!(n&7)){e:{if(m=e==="mouseover"||e==="pointerover",w=e==="mouseout"||e==="pointerout",m&&t!==rs&&(y=t.relatedTarget||t.fromElement)&&(jn(y)||y[Qe]))break e;if((w||m)&&(m=v.window===v?v:(m=v.ownerDocument)?m.defaultView||m.parentWindow:window,w?(y=t.relatedTarget||t.toElement,w=d,y=y?jn(y):null,y!==null&&(A=Ln(y),y!==A||y.tag!==5&&y.tag!==6)&&(y=null)):(w=null,y=d),w!==y)){if(j=Gl,g="onMouseLeave",p="onMouseEnter",u="mouse",(e==="pointerout"||e==="pointerover")&&(j=Yl,g="onPointerLeave",p="onPointerEnter",u="pointer"),A=w==null?m:Dn(w),f=y==null?m:Dn(y),m=new j(g,u+"leave",w,t,v),m.target=A,m.relatedTarget=f,g=null,jn(v)===d&&(j=new j(p,u+"enter",y,t,v),j.target=f,j.relatedTarget=A,g=j),A=g,w&&y)n:{for(j=w,p=y,u=0,f=j;f;f=Mn(f))u++;for(f=0,g=p;g;g=Mn(g))f++;for(;0<u-f;)j=Mn(j),u--;for(;0<f-u;)p=Mn(p),f--;for(;u--;){if(j===p||p!==null&&j===p.alternate)break n;j=Mn(j),p=Mn(p)}j=null}else j=null;w!==null&&oi(h,m,w,j,!1),y!==null&&A!==null&&oi(h,A,y,j,!0)}}e:{if(m=d?Dn(d):window,w=m.nodeName&&m.nodeName.toLowerCase(),w==="select"||w==="input"&&m.type==="file")var k=bd;else if(ei(m))if(Bo)k=Rd;else{k=Md;var _=Ld}else(w=m.nodeName)&&w.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(k=Id);if(k&&(k=k(e,d))){Do(h,k,t,v);break e}_&&_(e,m,d),e==="focusout"&&(_=m._wrapperState)&&_.controlled&&m.type==="number"&&Za(m,"number",m.value)}switch(_=d?Dn(d):window,e){case"focusin":(ei(_)||_.contentEditable==="true")&&(Fn=_,us=d,_t=null);break;case"focusout":_t=us=Fn=null;break;case"mousedown":ds=!0;break;case"contextmenu":case"mouseup":case"dragend":ds=!1,si(h,t,v);break;case"selectionchange":if(Ad)break;case"keydown":case"keyup":si(h,t,v)}var z;if(tl)e:{switch(e){case"compositionstart":var E="onCompositionStart";break e;case"compositionend":E="onCompositionEnd";break e;case"compositionupdate":E="onCompositionUpdate";break e}E=void 0}else On?Fo(e,t)&&(E="onCompositionEnd"):e==="keydown"&&t.keyCode===229&&(E="onCompositionStart");E&&(Oo&&t.locale!=="ko"&&(On||E!=="onCompositionStart"?E==="onCompositionEnd"&&On&&(z=Ro()):(nn=v,Js="value"in nn?nn.value:nn.textContent,On=!0)),_=Fr(d,E),0<_.length&&(E=new ql(E,e,null,t,v),h.push({event:E,listeners:_}),z?E.data=z:(z=Ao(t),z!==null&&(E.data=z)))),(z=_d?zd(e,t):Ed(e,t))&&(d=Fr(d,"onBeforeInput"),0<d.length&&(v=new ql("onBeforeInput","beforeinput",null,t,v),h.push({event:v,listeners:d}),v.data=z))}qo(h,n)})}function Bt(e,n,t){return{instance:e,listener:n,currentTarget:t}}function Fr(e,n){for(var t=n+"Capture",r=[];e!==null;){var s=e,l=s.stateNode;s.tag===5&&l!==null&&(s=l,l=Mt(e,t),l!=null&&r.unshift(Bt(e,l,s)),l=Mt(e,n),l!=null&&r.push(Bt(e,l,s))),e=e.return}return r}function Mn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function oi(e,n,t,r,s){for(var l=n._reactName,i=[];t!==null&&t!==r;){var o=t,c=o.alternate,d=o.stateNode;if(c!==null&&c===r)break;o.tag===5&&d!==null&&(o=d,s?(c=Mt(t,l),c!=null&&i.unshift(Bt(t,c,o))):s||(c=Mt(t,l),c!=null&&i.push(Bt(t,c,o)))),t=t.return}i.length!==0&&e.push({event:n,listeners:i})}var Ud=/\r\n?/g,$d=/\u0000|\uFFFD/g;function ci(e){return(typeof e=="string"?e:""+e).replace(Ud,`
`).replace($d,"")}function dr(e,n,t){if(n=ci(n),ci(e)!==n&&t)throw Error(x(425))}function Ar(){}var ps=null,fs=null;function ms(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var hs=typeof setTimeout=="function"?setTimeout:void 0,Wd=typeof clearTimeout=="function"?clearTimeout:void 0,ui=typeof Promise=="function"?Promise:void 0,Hd=typeof queueMicrotask=="function"?queueMicrotask:typeof ui<"u"?function(e){return ui.resolve(null).then(e).catch(Qd)}:hs;function Qd(e){setTimeout(function(){throw e})}function Ra(e,n){var t=n,r=0;do{var s=t.nextSibling;if(e.removeChild(t),s&&s.nodeType===8)if(t=s.data,t==="/$"){if(r===0){e.removeChild(s),Ot(n);return}r--}else t!=="$"&&t!=="$?"&&t!=="$!"||r++;t=s}while(t);Ot(n)}function ln(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?")break;if(n==="/$")return null}}return e}function di(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="$"||t==="$!"||t==="$?"){if(n===0)return e;n--}else t==="/$"&&n++}e=e.previousSibling}return null}var it=Math.random().toString(36).slice(2),Fe="__reactFiber$"+it,Vt="__reactProps$"+it,Qe="__reactContainer$"+it,vs="__reactEvents$"+it,Kd="__reactListeners$"+it,Xd="__reactHandles$"+it;function jn(e){var n=e[Fe];if(n)return n;for(var t=e.parentNode;t;){if(n=t[Qe]||t[Fe]){if(t=n.alternate,n.child!==null||t!==null&&t.child!==null)for(e=di(e);e!==null;){if(t=e[Fe])return t;e=di(e)}return n}e=t,t=e.parentNode}return null}function Yt(e){return e=e[Fe]||e[Qe],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Dn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(x(33))}function sa(e){return e[Vt]||null}var gs=[],Bn=-1;function hn(e){return{current:e}}function F(e){0>Bn||(e.current=gs[Bn],gs[Bn]=null,Bn--)}function R(e,n){Bn++,gs[Bn]=e.current,e.current=n}var fn={},se=hn(fn),pe=hn(!1),_n=fn;function Jn(e,n){var t=e.type.contextTypes;if(!t)return fn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===n)return r.__reactInternalMemoizedMaskedChildContext;var s={},l;for(l in t)s[l]=n[l];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=n,e.__reactInternalMemoizedMaskedChildContext=s),s}function fe(e){return e=e.childContextTypes,e!=null}function Dr(){F(pe),F(se)}function pi(e,n,t){if(se.current!==fn)throw Error(x(168));R(se,n),R(pe,t)}function Zo(e,n,t){var r=e.stateNode;if(n=n.childContextTypes,typeof r.getChildContext!="function")return t;r=r.getChildContext();for(var s in r)if(!(s in n))throw Error(x(108,Lu(e)||"Unknown",s));return U({},t,r)}function Br(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||fn,_n=se.current,R(se,e),R(pe,pe.current),!0}function fi(e,n,t){var r=e.stateNode;if(!r)throw Error(x(169));t?(e=Zo(e,n,_n),r.__reactInternalMemoizedMergedChildContext=e,F(pe),F(se),R(se,e)):F(pe),R(pe,t)}var Ve=null,la=!1,Oa=!1;function Jo(e){Ve===null?Ve=[e]:Ve.push(e)}function Gd(e){la=!0,Jo(e)}function vn(){if(!Oa&&Ve!==null){Oa=!0;var e=0,n=I;try{var t=Ve;for(I=1;e<t.length;e++){var r=t[e];do r=r(!0);while(r!==null)}Ve=null,la=!1}catch(s){throw Ve!==null&&(Ve=Ve.slice(e+1)),So(Gs,vn),s}finally{I=n,Oa=!1}}return null}var Vn=[],Un=0,Vr=null,Ur=0,je=[],Ne=0,zn=null,Ue=1,$e="";function wn(e,n){Vn[Un++]=Ur,Vn[Un++]=Vr,Vr=e,Ur=n}function ec(e,n,t){je[Ne++]=Ue,je[Ne++]=$e,je[Ne++]=zn,zn=e;var r=Ue;e=$e;var s=32-Le(r)-1;r&=~(1<<s),t+=1;var l=32-Le(n)+s;if(30<l){var i=s-s%5;l=(r&(1<<i)-1).toString(32),r>>=i,s-=i,Ue=1<<32-Le(n)+s|t<<s|r,$e=l+e}else Ue=1<<l|t<<s|r,$e=e}function al(e){e.return!==null&&(wn(e,1),ec(e,1,0))}function sl(e){for(;e===Vr;)Vr=Vn[--Un],Vn[Un]=null,Ur=Vn[--Un],Vn[Un]=null;for(;e===zn;)zn=je[--Ne],je[Ne]=null,$e=je[--Ne],je[Ne]=null,Ue=je[--Ne],je[Ne]=null}var ge=null,ve=null,D=!1,be=null;function nc(e,n){var t=ke(5,null,null,0);t.elementType="DELETED",t.stateNode=n,t.return=e,n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)}function mi(e,n){switch(e.tag){case 5:var t=e.type;return n=n.nodeType!==1||t.toLowerCase()!==n.nodeName.toLowerCase()?null:n,n!==null?(e.stateNode=n,ge=e,ve=ln(n.firstChild),!0):!1;case 6:return n=e.pendingProps===""||n.nodeType!==3?null:n,n!==null?(e.stateNode=n,ge=e,ve=null,!0):!1;case 13:return n=n.nodeType!==8?null:n,n!==null?(t=zn!==null?{id:Ue,overflow:$e}:null,e.memoizedState={dehydrated:n,treeContext:t,retryLane:1073741824},t=ke(18,null,null,0),t.stateNode=n,t.return=e,e.child=t,ge=e,ve=null,!0):!1;default:return!1}}function xs(e){return(e.mode&1)!==0&&(e.flags&128)===0}function ws(e){if(D){var n=ve;if(n){var t=n;if(!mi(e,n)){if(xs(e))throw Error(x(418));n=ln(t.nextSibling);var r=ge;n&&mi(e,n)?nc(r,t):(e.flags=e.flags&-4097|2,D=!1,ge=e)}}else{if(xs(e))throw Error(x(418));e.flags=e.flags&-4097|2,D=!1,ge=e}}}function hi(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;ge=e}function pr(e){if(e!==ge)return!1;if(!D)return hi(e),D=!0,!1;var n;if((n=e.tag!==3)&&!(n=e.tag!==5)&&(n=e.type,n=n!=="head"&&n!=="body"&&!ms(e.type,e.memoizedProps)),n&&(n=ve)){if(xs(e))throw tc(),Error(x(418));for(;n;)nc(e,n),n=ln(n.nextSibling)}if(hi(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(x(317));e:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="/$"){if(n===0){ve=ln(e.nextSibling);break e}n--}else t!=="$"&&t!=="$!"&&t!=="$?"||n++}e=e.nextSibling}ve=null}}else ve=ge?ln(e.stateNode.nextSibling):null;return!0}function tc(){for(var e=ve;e;)e=ln(e.nextSibling)}function et(){ve=ge=null,D=!1}function ll(e){be===null?be=[e]:be.push(e)}var qd=Ge.ReactCurrentBatchConfig;function ht(e,n,t){if(e=t.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(x(309));var r=t.stateNode}if(!r)throw Error(x(147,e));var s=r,l=""+e;return n!==null&&n.ref!==null&&typeof n.ref=="function"&&n.ref._stringRef===l?n.ref:(n=function(i){var o=s.refs;i===null?delete o[l]:o[l]=i},n._stringRef=l,n)}if(typeof e!="string")throw Error(x(284));if(!t._owner)throw Error(x(290,e))}return e}function fr(e,n){throw e=Object.prototype.toString.call(n),Error(x(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e))}function vi(e){var n=e._init;return n(e._payload)}function rc(e){function n(p,u){if(e){var f=p.deletions;f===null?(p.deletions=[u],p.flags|=16):f.push(u)}}function t(p,u){if(!e)return null;for(;u!==null;)n(p,u),u=u.sibling;return null}function r(p,u){for(p=new Map;u!==null;)u.key!==null?p.set(u.key,u):p.set(u.index,u),u=u.sibling;return p}function s(p,u){return p=dn(p,u),p.index=0,p.sibling=null,p}function l(p,u,f){return p.index=f,e?(f=p.alternate,f!==null?(f=f.index,f<u?(p.flags|=2,u):f):(p.flags|=2,u)):(p.flags|=1048576,u)}function i(p){return e&&p.alternate===null&&(p.flags|=2),p}function o(p,u,f,g){return u===null||u.tag!==6?(u=$a(f,p.mode,g),u.return=p,u):(u=s(u,f),u.return=p,u)}function c(p,u,f,g){var k=f.type;return k===Rn?v(p,u,f.props.children,g,f.key):u!==null&&(u.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===Ye&&vi(k)===u.type)?(g=s(u,f.props),g.ref=ht(p,u,f),g.return=p,g):(g=Pr(f.type,f.key,f.props,null,p.mode,g),g.ref=ht(p,u,f),g.return=p,g)}function d(p,u,f,g){return u===null||u.tag!==4||u.stateNode.containerInfo!==f.containerInfo||u.stateNode.implementation!==f.implementation?(u=Wa(f,p.mode,g),u.return=p,u):(u=s(u,f.children||[]),u.return=p,u)}function v(p,u,f,g,k){return u===null||u.tag!==7?(u=Cn(f,p.mode,g,k),u.return=p,u):(u=s(u,f),u.return=p,u)}function h(p,u,f){if(typeof u=="string"&&u!==""||typeof u=="number")return u=$a(""+u,p.mode,f),u.return=p,u;if(typeof u=="object"&&u!==null){switch(u.$$typeof){case tr:return f=Pr(u.type,u.key,u.props,null,p.mode,f),f.ref=ht(p,null,u),f.return=p,f;case In:return u=Wa(u,p.mode,f),u.return=p,u;case Ye:var g=u._init;return h(p,g(u._payload),f)}if(wt(u)||ut(u))return u=Cn(u,p.mode,f,null),u.return=p,u;fr(p,u)}return null}function m(p,u,f,g){var k=u!==null?u.key:null;if(typeof f=="string"&&f!==""||typeof f=="number")return k!==null?null:o(p,u,""+f,g);if(typeof f=="object"&&f!==null){switch(f.$$typeof){case tr:return f.key===k?c(p,u,f,g):null;case In:return f.key===k?d(p,u,f,g):null;case Ye:return k=f._init,m(p,u,k(f._payload),g)}if(wt(f)||ut(f))return k!==null?null:v(p,u,f,g,null);fr(p,f)}return null}function w(p,u,f,g,k){if(typeof g=="string"&&g!==""||typeof g=="number")return p=p.get(f)||null,o(u,p,""+g,k);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case tr:return p=p.get(g.key===null?f:g.key)||null,c(u,p,g,k);case In:return p=p.get(g.key===null?f:g.key)||null,d(u,p,g,k);case Ye:var _=g._init;return w(p,u,f,_(g._payload),k)}if(wt(g)||ut(g))return p=p.get(f)||null,v(u,p,g,k,null);fr(u,g)}return null}function y(p,u,f,g){for(var k=null,_=null,z=u,E=u=0,W=null;z!==null&&E<f.length;E++){z.index>E?(W=z,z=null):W=z.sibling;var L=m(p,z,f[E],g);if(L===null){z===null&&(z=W);break}e&&z&&L.alternate===null&&n(p,z),u=l(L,u,E),_===null?k=L:_.sibling=L,_=L,z=W}if(E===f.length)return t(p,z),D&&wn(p,E),k;if(z===null){for(;E<f.length;E++)z=h(p,f[E],g),z!==null&&(u=l(z,u,E),_===null?k=z:_.sibling=z,_=z);return D&&wn(p,E),k}for(z=r(p,z);E<f.length;E++)W=w(z,p,E,f[E],g),W!==null&&(e&&W.alternate!==null&&z.delete(W.key===null?E:W.key),u=l(W,u,E),_===null?k=W:_.sibling=W,_=W);return e&&z.forEach(function(ze){return n(p,ze)}),D&&wn(p,E),k}function j(p,u,f,g){var k=ut(f);if(typeof k!="function")throw Error(x(150));if(f=k.call(f),f==null)throw Error(x(151));for(var _=k=null,z=u,E=u=0,W=null,L=f.next();z!==null&&!L.done;E++,L=f.next()){z.index>E?(W=z,z=null):W=z.sibling;var ze=m(p,z,L.value,g);if(ze===null){z===null&&(z=W);break}e&&z&&ze.alternate===null&&n(p,z),u=l(ze,u,E),_===null?k=ze:_.sibling=ze,_=ze,z=W}if(L.done)return t(p,z),D&&wn(p,E),k;if(z===null){for(;!L.done;E++,L=f.next())L=h(p,L.value,g),L!==null&&(u=l(L,u,E),_===null?k=L:_.sibling=L,_=L);return D&&wn(p,E),k}for(z=r(p,z);!L.done;E++,L=f.next())L=w(z,p,E,L.value,g),L!==null&&(e&&L.alternate!==null&&z.delete(L.key===null?E:L.key),u=l(L,u,E),_===null?k=L:_.sibling=L,_=L);return e&&z.forEach(function(ot){return n(p,ot)}),D&&wn(p,E),k}function A(p,u,f,g){if(typeof f=="object"&&f!==null&&f.type===Rn&&f.key===null&&(f=f.props.children),typeof f=="object"&&f!==null){switch(f.$$typeof){case tr:e:{for(var k=f.key,_=u;_!==null;){if(_.key===k){if(k=f.type,k===Rn){if(_.tag===7){t(p,_.sibling),u=s(_,f.props.children),u.return=p,p=u;break e}}else if(_.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===Ye&&vi(k)===_.type){t(p,_.sibling),u=s(_,f.props),u.ref=ht(p,_,f),u.return=p,p=u;break e}t(p,_);break}else n(p,_);_=_.sibling}f.type===Rn?(u=Cn(f.props.children,p.mode,g,f.key),u.return=p,p=u):(g=Pr(f.type,f.key,f.props,null,p.mode,g),g.ref=ht(p,u,f),g.return=p,p=g)}return i(p);case In:e:{for(_=f.key;u!==null;){if(u.key===_)if(u.tag===4&&u.stateNode.containerInfo===f.containerInfo&&u.stateNode.implementation===f.implementation){t(p,u.sibling),u=s(u,f.children||[]),u.return=p,p=u;break e}else{t(p,u);break}else n(p,u);u=u.sibling}u=Wa(f,p.mode,g),u.return=p,p=u}return i(p);case Ye:return _=f._init,A(p,u,_(f._payload),g)}if(wt(f))return y(p,u,f,g);if(ut(f))return j(p,u,f,g);fr(p,f)}return typeof f=="string"&&f!==""||typeof f=="number"?(f=""+f,u!==null&&u.tag===6?(t(p,u.sibling),u=s(u,f),u.return=p,p=u):(t(p,u),u=$a(f,p.mode,g),u.return=p,p=u),i(p)):t(p,u)}return A}var nt=rc(!0),ac=rc(!1),$r=hn(null),Wr=null,$n=null,il=null;function ol(){il=$n=Wr=null}function cl(e){var n=$r.current;F($r),e._currentValue=n}function ys(e,n,t){for(;e!==null;){var r=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,r!==null&&(r.childLanes|=n)):r!==null&&(r.childLanes&n)!==n&&(r.childLanes|=n),e===t)break;e=e.return}}function qn(e,n){Wr=e,il=$n=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&n&&(de=!0),e.firstContext=null)}function Ce(e){var n=e._currentValue;if(il!==e)if(e={context:e,memoizedValue:n,next:null},$n===null){if(Wr===null)throw Error(x(308));$n=e,Wr.dependencies={lanes:0,firstContext:e}}else $n=$n.next=e;return n}var Nn=null;function ul(e){Nn===null?Nn=[e]:Nn.push(e)}function sc(e,n,t,r){var s=n.interleaved;return s===null?(t.next=t,ul(n)):(t.next=s.next,s.next=t),n.interleaved=t,Ke(e,r)}function Ke(e,n){e.lanes|=n;var t=e.alternate;for(t!==null&&(t.lanes|=n),t=e,e=e.return;e!==null;)e.childLanes|=n,t=e.alternate,t!==null&&(t.childLanes|=n),t=e,e=e.return;return t.tag===3?t.stateNode:null}var Ze=!1;function dl(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function lc(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function We(e,n){return{eventTime:e,lane:n,tag:0,payload:null,callback:null,next:null}}function on(e,n,t){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,M&2){var s=r.pending;return s===null?n.next=n:(n.next=s.next,s.next=n),r.pending=n,Ke(e,t)}return s=r.interleaved,s===null?(n.next=n,ul(r)):(n.next=s.next,s.next=n),r.interleaved=n,Ke(e,t)}function kr(e,n,t){if(n=n.updateQueue,n!==null&&(n=n.shared,(t&4194240)!==0)){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,qs(e,t)}}function gi(e,n){var t=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,t===r)){var s=null,l=null;if(t=t.firstBaseUpdate,t!==null){do{var i={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};l===null?s=l=i:l=l.next=i,t=t.next}while(t!==null);l===null?s=l=n:l=l.next=n}else s=l=n;t={baseState:r.baseState,firstBaseUpdate:s,lastBaseUpdate:l,shared:r.shared,effects:r.effects},e.updateQueue=t;return}e=t.lastBaseUpdate,e===null?t.firstBaseUpdate=n:e.next=n,t.lastBaseUpdate=n}function Hr(e,n,t,r){var s=e.updateQueue;Ze=!1;var l=s.firstBaseUpdate,i=s.lastBaseUpdate,o=s.shared.pending;if(o!==null){s.shared.pending=null;var c=o,d=c.next;c.next=null,i===null?l=d:i.next=d,i=c;var v=e.alternate;v!==null&&(v=v.updateQueue,o=v.lastBaseUpdate,o!==i&&(o===null?v.firstBaseUpdate=d:o.next=d,v.lastBaseUpdate=c))}if(l!==null){var h=s.baseState;i=0,v=d=c=null,o=l;do{var m=o.lane,w=o.eventTime;if((r&m)===m){v!==null&&(v=v.next={eventTime:w,lane:0,tag:o.tag,payload:o.payload,callback:o.callback,next:null});e:{var y=e,j=o;switch(m=n,w=t,j.tag){case 1:if(y=j.payload,typeof y=="function"){h=y.call(w,h,m);break e}h=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=j.payload,m=typeof y=="function"?y.call(w,h,m):y,m==null)break e;h=U({},h,m);break e;case 2:Ze=!0}}o.callback!==null&&o.lane!==0&&(e.flags|=64,m=s.effects,m===null?s.effects=[o]:m.push(o))}else w={eventTime:w,lane:m,tag:o.tag,payload:o.payload,callback:o.callback,next:null},v===null?(d=v=w,c=h):v=v.next=w,i|=m;if(o=o.next,o===null){if(o=s.shared.pending,o===null)break;m=o,o=m.next,m.next=null,s.lastBaseUpdate=m,s.shared.pending=null}}while(!0);if(v===null&&(c=h),s.baseState=c,s.firstBaseUpdate=d,s.lastBaseUpdate=v,n=s.shared.interleaved,n!==null){s=n;do i|=s.lane,s=s.next;while(s!==n)}else l===null&&(s.shared.lanes=0);Pn|=i,e.lanes=i,e.memoizedState=h}}function xi(e,n,t){if(e=n.effects,n.effects=null,e!==null)for(n=0;n<e.length;n++){var r=e[n],s=r.callback;if(s!==null){if(r.callback=null,r=t,typeof s!="function")throw Error(x(191,s));s.call(r)}}}var Zt={},De=hn(Zt),Ut=hn(Zt),$t=hn(Zt);function kn(e){if(e===Zt)throw Error(x(174));return e}function pl(e,n){switch(R($t,n),R(Ut,e),R(De,Zt),e=n.nodeType,e){case 9:case 11:n=(n=n.documentElement)?n.namespaceURI:es(null,"");break;default:e=e===8?n.parentNode:n,n=e.namespaceURI||null,e=e.tagName,n=es(n,e)}F(De),R(De,n)}function tt(){F(De),F(Ut),F($t)}function ic(e){kn($t.current);var n=kn(De.current),t=es(n,e.type);n!==t&&(R(Ut,e),R(De,t))}function fl(e){Ut.current===e&&(F(De),F(Ut))}var B=hn(0);function Qr(e){for(var n=e;n!==null;){if(n.tag===13){var t=n.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if(n.flags&128)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Fa=[];function ml(){for(var e=0;e<Fa.length;e++)Fa[e]._workInProgressVersionPrimary=null;Fa.length=0}var Sr=Ge.ReactCurrentDispatcher,Aa=Ge.ReactCurrentBatchConfig,En=0,V=null,X=null,Y=null,Kr=!1,zt=!1,Wt=0,Yd=0;function te(){throw Error(x(321))}function hl(e,n){if(n===null)return!1;for(var t=0;t<n.length&&t<e.length;t++)if(!Ie(e[t],n[t]))return!1;return!0}function vl(e,n,t,r,s,l){if(En=l,V=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,Sr.current=e===null||e.memoizedState===null?np:tp,e=t(r,s),zt){l=0;do{if(zt=!1,Wt=0,25<=l)throw Error(x(301));l+=1,Y=X=null,n.updateQueue=null,Sr.current=rp,e=t(r,s)}while(zt)}if(Sr.current=Xr,n=X!==null&&X.next!==null,En=0,Y=X=V=null,Kr=!1,n)throw Error(x(300));return e}function gl(){var e=Wt!==0;return Wt=0,e}function Oe(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Y===null?V.memoizedState=Y=e:Y=Y.next=e,Y}function _e(){if(X===null){var e=V.alternate;e=e!==null?e.memoizedState:null}else e=X.next;var n=Y===null?V.memoizedState:Y.next;if(n!==null)Y=n,X=e;else{if(e===null)throw Error(x(310));X=e,e={memoizedState:X.memoizedState,baseState:X.baseState,baseQueue:X.baseQueue,queue:X.queue,next:null},Y===null?V.memoizedState=Y=e:Y=Y.next=e}return Y}function Ht(e,n){return typeof n=="function"?n(e):n}function Da(e){var n=_e(),t=n.queue;if(t===null)throw Error(x(311));t.lastRenderedReducer=e;var r=X,s=r.baseQueue,l=t.pending;if(l!==null){if(s!==null){var i=s.next;s.next=l.next,l.next=i}r.baseQueue=s=l,t.pending=null}if(s!==null){l=s.next,r=r.baseState;var o=i=null,c=null,d=l;do{var v=d.lane;if((En&v)===v)c!==null&&(c=c.next={lane:0,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null}),r=d.hasEagerState?d.eagerState:e(r,d.action);else{var h={lane:v,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null};c===null?(o=c=h,i=r):c=c.next=h,V.lanes|=v,Pn|=v}d=d.next}while(d!==null&&d!==l);c===null?i=r:c.next=o,Ie(r,n.memoizedState)||(de=!0),n.memoizedState=r,n.baseState=i,n.baseQueue=c,t.lastRenderedState=r}if(e=t.interleaved,e!==null){s=e;do l=s.lane,V.lanes|=l,Pn|=l,s=s.next;while(s!==e)}else s===null&&(t.lanes=0);return[n.memoizedState,t.dispatch]}function Ba(e){var n=_e(),t=n.queue;if(t===null)throw Error(x(311));t.lastRenderedReducer=e;var r=t.dispatch,s=t.pending,l=n.memoizedState;if(s!==null){t.pending=null;var i=s=s.next;do l=e(l,i.action),i=i.next;while(i!==s);Ie(l,n.memoizedState)||(de=!0),n.memoizedState=l,n.baseQueue===null&&(n.baseState=l),t.lastRenderedState=l}return[l,r]}function oc(){}function cc(e,n){var t=V,r=_e(),s=n(),l=!Ie(r.memoizedState,s);if(l&&(r.memoizedState=s,de=!0),r=r.queue,xl(pc.bind(null,t,r,e),[e]),r.getSnapshot!==n||l||Y!==null&&Y.memoizedState.tag&1){if(t.flags|=2048,Qt(9,dc.bind(null,t,r,s,n),void 0,null),Z===null)throw Error(x(349));En&30||uc(t,n,s)}return s}function uc(e,n,t){e.flags|=16384,e={getSnapshot:n,value:t},n=V.updateQueue,n===null?(n={lastEffect:null,stores:null},V.updateQueue=n,n.stores=[e]):(t=n.stores,t===null?n.stores=[e]:t.push(e))}function dc(e,n,t,r){n.value=t,n.getSnapshot=r,fc(n)&&mc(e)}function pc(e,n,t){return t(function(){fc(n)&&mc(e)})}function fc(e){var n=e.getSnapshot;e=e.value;try{var t=n();return!Ie(e,t)}catch{return!0}}function mc(e){var n=Ke(e,1);n!==null&&Me(n,e,1,-1)}function wi(e){var n=Oe();return typeof e=="function"&&(e=e()),n.memoizedState=n.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ht,lastRenderedState:e},n.queue=e,e=e.dispatch=ep.bind(null,V,e),[n.memoizedState,e]}function Qt(e,n,t,r){return e={tag:e,create:n,destroy:t,deps:r,next:null},n=V.updateQueue,n===null?(n={lastEffect:null,stores:null},V.updateQueue=n,n.lastEffect=e.next=e):(t=n.lastEffect,t===null?n.lastEffect=e.next=e:(r=t.next,t.next=e,e.next=r,n.lastEffect=e)),e}function hc(){return _e().memoizedState}function Cr(e,n,t,r){var s=Oe();V.flags|=e,s.memoizedState=Qt(1|n,t,void 0,r===void 0?null:r)}function ia(e,n,t,r){var s=_e();r=r===void 0?null:r;var l=void 0;if(X!==null){var i=X.memoizedState;if(l=i.destroy,r!==null&&hl(r,i.deps)){s.memoizedState=Qt(n,t,l,r);return}}V.flags|=e,s.memoizedState=Qt(1|n,t,l,r)}function yi(e,n){return Cr(8390656,8,e,n)}function xl(e,n){return ia(2048,8,e,n)}function vc(e,n){return ia(4,2,e,n)}function gc(e,n){return ia(4,4,e,n)}function xc(e,n){if(typeof n=="function")return e=e(),n(e),function(){n(null)};if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function wc(e,n,t){return t=t!=null?t.concat([e]):null,ia(4,4,xc.bind(null,n,e),t)}function wl(){}function yc(e,n){var t=_e();n=n===void 0?null:n;var r=t.memoizedState;return r!==null&&n!==null&&hl(n,r[1])?r[0]:(t.memoizedState=[e,n],e)}function jc(e,n){var t=_e();n=n===void 0?null:n;var r=t.memoizedState;return r!==null&&n!==null&&hl(n,r[1])?r[0]:(e=e(),t.memoizedState=[e,n],e)}function Nc(e,n,t){return En&21?(Ie(t,n)||(t=zo(),V.lanes|=t,Pn|=t,e.baseState=!0),n):(e.baseState&&(e.baseState=!1,de=!0),e.memoizedState=t)}function Zd(e,n){var t=I;I=t!==0&&4>t?t:4,e(!0);var r=Aa.transition;Aa.transition={};try{e(!1),n()}finally{I=t,Aa.transition=r}}function kc(){return _e().memoizedState}function Jd(e,n,t){var r=un(e);if(t={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null},Sc(e))Cc(n,t);else if(t=sc(e,n,t,r),t!==null){var s=ie();Me(t,e,r,s),_c(t,n,r)}}function ep(e,n,t){var r=un(e),s={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null};if(Sc(e))Cc(n,s);else{var l=e.alternate;if(e.lanes===0&&(l===null||l.lanes===0)&&(l=n.lastRenderedReducer,l!==null))try{var i=n.lastRenderedState,o=l(i,t);if(s.hasEagerState=!0,s.eagerState=o,Ie(o,i)){var c=n.interleaved;c===null?(s.next=s,ul(n)):(s.next=c.next,c.next=s),n.interleaved=s;return}}catch{}finally{}t=sc(e,n,s,r),t!==null&&(s=ie(),Me(t,e,r,s),_c(t,n,r))}}function Sc(e){var n=e.alternate;return e===V||n!==null&&n===V}function Cc(e,n){zt=Kr=!0;var t=e.pending;t===null?n.next=n:(n.next=t.next,t.next=n),e.pending=n}function _c(e,n,t){if(t&4194240){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,qs(e,t)}}var Xr={readContext:Ce,useCallback:te,useContext:te,useEffect:te,useImperativeHandle:te,useInsertionEffect:te,useLayoutEffect:te,useMemo:te,useReducer:te,useRef:te,useState:te,useDebugValue:te,useDeferredValue:te,useTransition:te,useMutableSource:te,useSyncExternalStore:te,useId:te,unstable_isNewReconciler:!1},np={readContext:Ce,useCallback:function(e,n){return Oe().memoizedState=[e,n===void 0?null:n],e},useContext:Ce,useEffect:yi,useImperativeHandle:function(e,n,t){return t=t!=null?t.concat([e]):null,Cr(4194308,4,xc.bind(null,n,e),t)},useLayoutEffect:function(e,n){return Cr(4194308,4,e,n)},useInsertionEffect:function(e,n){return Cr(4,2,e,n)},useMemo:function(e,n){var t=Oe();return n=n===void 0?null:n,e=e(),t.memoizedState=[e,n],e},useReducer:function(e,n,t){var r=Oe();return n=t!==void 0?t(n):n,r.memoizedState=r.baseState=n,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},r.queue=e,e=e.dispatch=Jd.bind(null,V,e),[r.memoizedState,e]},useRef:function(e){var n=Oe();return e={current:e},n.memoizedState=e},useState:wi,useDebugValue:wl,useDeferredValue:function(e){return Oe().memoizedState=e},useTransition:function(){var e=wi(!1),n=e[0];return e=Zd.bind(null,e[1]),Oe().memoizedState=e,[n,e]},useMutableSource:function(){},useSyncExternalStore:function(e,n,t){var r=V,s=Oe();if(D){if(t===void 0)throw Error(x(407));t=t()}else{if(t=n(),Z===null)throw Error(x(349));En&30||uc(r,n,t)}s.memoizedState=t;var l={value:t,getSnapshot:n};return s.queue=l,yi(pc.bind(null,r,l,e),[e]),r.flags|=2048,Qt(9,dc.bind(null,r,l,t,n),void 0,null),t},useId:function(){var e=Oe(),n=Z.identifierPrefix;if(D){var t=$e,r=Ue;t=(r&~(1<<32-Le(r)-1)).toString(32)+t,n=":"+n+"R"+t,t=Wt++,0<t&&(n+="H"+t.toString(32)),n+=":"}else t=Yd++,n=":"+n+"r"+t.toString(32)+":";return e.memoizedState=n},unstable_isNewReconciler:!1},tp={readContext:Ce,useCallback:yc,useContext:Ce,useEffect:xl,useImperativeHandle:wc,useInsertionEffect:vc,useLayoutEffect:gc,useMemo:jc,useReducer:Da,useRef:hc,useState:function(){return Da(Ht)},useDebugValue:wl,useDeferredValue:function(e){var n=_e();return Nc(n,X.memoizedState,e)},useTransition:function(){var e=Da(Ht)[0],n=_e().memoizedState;return[e,n]},useMutableSource:oc,useSyncExternalStore:cc,useId:kc,unstable_isNewReconciler:!1},rp={readContext:Ce,useCallback:yc,useContext:Ce,useEffect:xl,useImperativeHandle:wc,useInsertionEffect:vc,useLayoutEffect:gc,useMemo:jc,useReducer:Ba,useRef:hc,useState:function(){return Ba(Ht)},useDebugValue:wl,useDeferredValue:function(e){var n=_e();return X===null?n.memoizedState=e:Nc(n,X.memoizedState,e)},useTransition:function(){var e=Ba(Ht)[0],n=_e().memoizedState;return[e,n]},useMutableSource:oc,useSyncExternalStore:cc,useId:kc,unstable_isNewReconciler:!1};function Pe(e,n){if(e&&e.defaultProps){n=U({},n),e=e.defaultProps;for(var t in e)n[t]===void 0&&(n[t]=e[t]);return n}return n}function js(e,n,t,r){n=e.memoizedState,t=t(r,n),t=t==null?n:U({},n,t),e.memoizedState=t,e.lanes===0&&(e.updateQueue.baseState=t)}var oa={isMounted:function(e){return(e=e._reactInternals)?Ln(e)===e:!1},enqueueSetState:function(e,n,t){e=e._reactInternals;var r=ie(),s=un(e),l=We(r,s);l.payload=n,t!=null&&(l.callback=t),n=on(e,l,s),n!==null&&(Me(n,e,s,r),kr(n,e,s))},enqueueReplaceState:function(e,n,t){e=e._reactInternals;var r=ie(),s=un(e),l=We(r,s);l.tag=1,l.payload=n,t!=null&&(l.callback=t),n=on(e,l,s),n!==null&&(Me(n,e,s,r),kr(n,e,s))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var t=ie(),r=un(e),s=We(t,r);s.tag=2,n!=null&&(s.callback=n),n=on(e,s,r),n!==null&&(Me(n,e,r,t),kr(n,e,r))}};function ji(e,n,t,r,s,l,i){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,l,i):n.prototype&&n.prototype.isPureReactComponent?!At(t,r)||!At(s,l):!0}function zc(e,n,t){var r=!1,s=fn,l=n.contextType;return typeof l=="object"&&l!==null?l=Ce(l):(s=fe(n)?_n:se.current,r=n.contextTypes,l=(r=r!=null)?Jn(e,s):fn),n=new n(t,l),e.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,n.updater=oa,e.stateNode=n,n._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=s,e.__reactInternalMemoizedMaskedChildContext=l),n}function Ni(e,n,t,r){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(t,r),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(t,r),n.state!==e&&oa.enqueueReplaceState(n,n.state,null)}function Ns(e,n,t,r){var s=e.stateNode;s.props=t,s.state=e.memoizedState,s.refs={},dl(e);var l=n.contextType;typeof l=="object"&&l!==null?s.context=Ce(l):(l=fe(n)?_n:se.current,s.context=Jn(e,l)),s.state=e.memoizedState,l=n.getDerivedStateFromProps,typeof l=="function"&&(js(e,n,l,t),s.state=e.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof s.getSnapshotBeforeUpdate=="function"||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(n=s.state,typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount(),n!==s.state&&oa.enqueueReplaceState(s,s.state,null),Hr(e,t,s,r),s.state=e.memoizedState),typeof s.componentDidMount=="function"&&(e.flags|=4194308)}function rt(e,n){try{var t="",r=n;do t+=bu(r),r=r.return;while(r);var s=t}catch(l){s=`
Error generating stack: `+l.message+`
`+l.stack}return{value:e,source:n,stack:s,digest:null}}function Va(e,n,t){return{value:e,source:null,stack:t??null,digest:n??null}}function ks(e,n){try{console.error(n.value)}catch(t){setTimeout(function(){throw t})}}var ap=typeof WeakMap=="function"?WeakMap:Map;function Ec(e,n,t){t=We(-1,t),t.tag=3,t.payload={element:null};var r=n.value;return t.callback=function(){qr||(qr=!0,Ms=r),ks(e,n)},t}function Pc(e,n,t){t=We(-1,t),t.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var s=n.value;t.payload=function(){return r(s)},t.callback=function(){ks(e,n)}}var l=e.stateNode;return l!==null&&typeof l.componentDidCatch=="function"&&(t.callback=function(){ks(e,n),typeof r!="function"&&(cn===null?cn=new Set([this]):cn.add(this));var i=n.stack;this.componentDidCatch(n.value,{componentStack:i!==null?i:""})}),t}function ki(e,n,t){var r=e.pingCache;if(r===null){r=e.pingCache=new ap;var s=new Set;r.set(n,s)}else s=r.get(n),s===void 0&&(s=new Set,r.set(n,s));s.has(t)||(s.add(t),e=xp.bind(null,e,n,t),n.then(e,e))}function Si(e){do{var n;if((n=e.tag===13)&&(n=e.memoizedState,n=n!==null?n.dehydrated!==null:!0),n)return e;e=e.return}while(e!==null);return null}function Ci(e,n,t,r,s){return e.mode&1?(e.flags|=65536,e.lanes=s,e):(e===n?e.flags|=65536:(e.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(n=We(-1,1),n.tag=2,on(t,n,1))),t.lanes|=1),e)}var sp=Ge.ReactCurrentOwner,de=!1;function le(e,n,t,r){n.child=e===null?ac(n,null,t,r):nt(n,e.child,t,r)}function _i(e,n,t,r,s){t=t.render;var l=n.ref;return qn(n,s),r=vl(e,n,t,r,l,s),t=gl(),e!==null&&!de?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~s,Xe(e,n,s)):(D&&t&&al(n),n.flags|=1,le(e,n,r,s),n.child)}function zi(e,n,t,r,s){if(e===null){var l=t.type;return typeof l=="function"&&!zl(l)&&l.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(n.tag=15,n.type=l,Tc(e,n,l,r,s)):(e=Pr(t.type,null,r,n,n.mode,s),e.ref=n.ref,e.return=n,n.child=e)}if(l=e.child,!(e.lanes&s)){var i=l.memoizedProps;if(t=t.compare,t=t!==null?t:At,t(i,r)&&e.ref===n.ref)return Xe(e,n,s)}return n.flags|=1,e=dn(l,r),e.ref=n.ref,e.return=n,n.child=e}function Tc(e,n,t,r,s){if(e!==null){var l=e.memoizedProps;if(At(l,r)&&e.ref===n.ref)if(de=!1,n.pendingProps=r=l,(e.lanes&s)!==0)e.flags&131072&&(de=!0);else return n.lanes=e.lanes,Xe(e,n,s)}return Ss(e,n,t,r,s)}function bc(e,n,t){var r=n.pendingProps,s=r.children,l=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(n.mode&1))n.memoizedState={baseLanes:0,cachePool:null,transitions:null},R(Hn,he),he|=t;else{if(!(t&1073741824))return e=l!==null?l.baseLanes|t:t,n.lanes=n.childLanes=1073741824,n.memoizedState={baseLanes:e,cachePool:null,transitions:null},n.updateQueue=null,R(Hn,he),he|=e,null;n.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=l!==null?l.baseLanes:t,R(Hn,he),he|=r}else l!==null?(r=l.baseLanes|t,n.memoizedState=null):r=t,R(Hn,he),he|=r;return le(e,n,s,t),n.child}function Lc(e,n){var t=n.ref;(e===null&&t!==null||e!==null&&e.ref!==t)&&(n.flags|=512,n.flags|=2097152)}function Ss(e,n,t,r,s){var l=fe(t)?_n:se.current;return l=Jn(n,l),qn(n,s),t=vl(e,n,t,r,l,s),r=gl(),e!==null&&!de?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~s,Xe(e,n,s)):(D&&r&&al(n),n.flags|=1,le(e,n,t,s),n.child)}function Ei(e,n,t,r,s){if(fe(t)){var l=!0;Br(n)}else l=!1;if(qn(n,s),n.stateNode===null)_r(e,n),zc(n,t,r),Ns(n,t,r,s),r=!0;else if(e===null){var i=n.stateNode,o=n.memoizedProps;i.props=o;var c=i.context,d=t.contextType;typeof d=="object"&&d!==null?d=Ce(d):(d=fe(t)?_n:se.current,d=Jn(n,d));var v=t.getDerivedStateFromProps,h=typeof v=="function"||typeof i.getSnapshotBeforeUpdate=="function";h||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(o!==r||c!==d)&&Ni(n,i,r,d),Ze=!1;var m=n.memoizedState;i.state=m,Hr(n,r,i,s),c=n.memoizedState,o!==r||m!==c||pe.current||Ze?(typeof v=="function"&&(js(n,t,v,r),c=n.memoizedState),(o=Ze||ji(n,t,o,r,m,c,d))?(h||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(n.flags|=4194308)):(typeof i.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=r,n.memoizedState=c),i.props=r,i.state=c,i.context=d,r=o):(typeof i.componentDidMount=="function"&&(n.flags|=4194308),r=!1)}else{i=n.stateNode,lc(e,n),o=n.memoizedProps,d=n.type===n.elementType?o:Pe(n.type,o),i.props=d,h=n.pendingProps,m=i.context,c=t.contextType,typeof c=="object"&&c!==null?c=Ce(c):(c=fe(t)?_n:se.current,c=Jn(n,c));var w=t.getDerivedStateFromProps;(v=typeof w=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(o!==h||m!==c)&&Ni(n,i,r,c),Ze=!1,m=n.memoizedState,i.state=m,Hr(n,r,i,s);var y=n.memoizedState;o!==h||m!==y||pe.current||Ze?(typeof w=="function"&&(js(n,t,w,r),y=n.memoizedState),(d=Ze||ji(n,t,d,r,m,y,c)||!1)?(v||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(r,y,c),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(r,y,c)),typeof i.componentDidUpdate=="function"&&(n.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof i.componentDidUpdate!="function"||o===e.memoizedProps&&m===e.memoizedState||(n.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||o===e.memoizedProps&&m===e.memoizedState||(n.flags|=1024),n.memoizedProps=r,n.memoizedState=y),i.props=r,i.state=y,i.context=c,r=d):(typeof i.componentDidUpdate!="function"||o===e.memoizedProps&&m===e.memoizedState||(n.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||o===e.memoizedProps&&m===e.memoizedState||(n.flags|=1024),r=!1)}return Cs(e,n,t,r,l,s)}function Cs(e,n,t,r,s,l){Lc(e,n);var i=(n.flags&128)!==0;if(!r&&!i)return s&&fi(n,t,!1),Xe(e,n,l);r=n.stateNode,sp.current=n;var o=i&&typeof t.getDerivedStateFromError!="function"?null:r.render();return n.flags|=1,e!==null&&i?(n.child=nt(n,e.child,null,l),n.child=nt(n,null,o,l)):le(e,n,o,l),n.memoizedState=r.state,s&&fi(n,t,!0),n.child}function Mc(e){var n=e.stateNode;n.pendingContext?pi(e,n.pendingContext,n.pendingContext!==n.context):n.context&&pi(e,n.context,!1),pl(e,n.containerInfo)}function Pi(e,n,t,r,s){return et(),ll(s),n.flags|=256,le(e,n,t,r),n.child}var _s={dehydrated:null,treeContext:null,retryLane:0};function zs(e){return{baseLanes:e,cachePool:null,transitions:null}}function Ic(e,n,t){var r=n.pendingProps,s=B.current,l=!1,i=(n.flags&128)!==0,o;if((o=i)||(o=e!==null&&e.memoizedState===null?!1:(s&2)!==0),o?(l=!0,n.flags&=-129):(e===null||e.memoizedState!==null)&&(s|=1),R(B,s&1),e===null)return ws(n),e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(n.mode&1?e.data==="$!"?n.lanes=8:n.lanes=1073741824:n.lanes=1,null):(i=r.children,e=r.fallback,l?(r=n.mode,l=n.child,i={mode:"hidden",children:i},!(r&1)&&l!==null?(l.childLanes=0,l.pendingProps=i):l=da(i,r,0,null),e=Cn(e,r,t,null),l.return=n,e.return=n,l.sibling=e,n.child=l,n.child.memoizedState=zs(t),n.memoizedState=_s,e):yl(n,i));if(s=e.memoizedState,s!==null&&(o=s.dehydrated,o!==null))return lp(e,n,i,r,o,s,t);if(l){l=r.fallback,i=n.mode,s=e.child,o=s.sibling;var c={mode:"hidden",children:r.children};return!(i&1)&&n.child!==s?(r=n.child,r.childLanes=0,r.pendingProps=c,n.deletions=null):(r=dn(s,c),r.subtreeFlags=s.subtreeFlags&14680064),o!==null?l=dn(o,l):(l=Cn(l,i,t,null),l.flags|=2),l.return=n,r.return=n,r.sibling=l,n.child=r,r=l,l=n.child,i=e.child.memoizedState,i=i===null?zs(t):{baseLanes:i.baseLanes|t,cachePool:null,transitions:i.transitions},l.memoizedState=i,l.childLanes=e.childLanes&~t,n.memoizedState=_s,r}return l=e.child,e=l.sibling,r=dn(l,{mode:"visible",children:r.children}),!(n.mode&1)&&(r.lanes=t),r.return=n,r.sibling=null,e!==null&&(t=n.deletions,t===null?(n.deletions=[e],n.flags|=16):t.push(e)),n.child=r,n.memoizedState=null,r}function yl(e,n){return n=da({mode:"visible",children:n},e.mode,0,null),n.return=e,e.child=n}function mr(e,n,t,r){return r!==null&&ll(r),nt(n,e.child,null,t),e=yl(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function lp(e,n,t,r,s,l,i){if(t)return n.flags&256?(n.flags&=-257,r=Va(Error(x(422))),mr(e,n,i,r)):n.memoizedState!==null?(n.child=e.child,n.flags|=128,null):(l=r.fallback,s=n.mode,r=da({mode:"visible",children:r.children},s,0,null),l=Cn(l,s,i,null),l.flags|=2,r.return=n,l.return=n,r.sibling=l,n.child=r,n.mode&1&&nt(n,e.child,null,i),n.child.memoizedState=zs(i),n.memoizedState=_s,l);if(!(n.mode&1))return mr(e,n,i,null);if(s.data==="$!"){if(r=s.nextSibling&&s.nextSibling.dataset,r)var o=r.dgst;return r=o,l=Error(x(419)),r=Va(l,r,void 0),mr(e,n,i,r)}if(o=(i&e.childLanes)!==0,de||o){if(r=Z,r!==null){switch(i&-i){case 4:s=2;break;case 16:s=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:s=32;break;case 536870912:s=268435456;break;default:s=0}s=s&(r.suspendedLanes|i)?0:s,s!==0&&s!==l.retryLane&&(l.retryLane=s,Ke(e,s),Me(r,e,s,-1))}return _l(),r=Va(Error(x(421))),mr(e,n,i,r)}return s.data==="$?"?(n.flags|=128,n.child=e.child,n=wp.bind(null,e),s._reactRetry=n,null):(e=l.treeContext,ve=ln(s.nextSibling),ge=n,D=!0,be=null,e!==null&&(je[Ne++]=Ue,je[Ne++]=$e,je[Ne++]=zn,Ue=e.id,$e=e.overflow,zn=n),n=yl(n,r.children),n.flags|=4096,n)}function Ti(e,n,t){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n),ys(e.return,n,t)}function Ua(e,n,t,r,s){var l=e.memoizedState;l===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:r,tail:t,tailMode:s}:(l.isBackwards=n,l.rendering=null,l.renderingStartTime=0,l.last=r,l.tail=t,l.tailMode=s)}function Rc(e,n,t){var r=n.pendingProps,s=r.revealOrder,l=r.tail;if(le(e,n,r.children,t),r=B.current,r&2)r=r&1|2,n.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Ti(e,t,n);else if(e.tag===19)Ti(e,t,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(R(B,r),!(n.mode&1))n.memoizedState=null;else switch(s){case"forwards":for(t=n.child,s=null;t!==null;)e=t.alternate,e!==null&&Qr(e)===null&&(s=t),t=t.sibling;t=s,t===null?(s=n.child,n.child=null):(s=t.sibling,t.sibling=null),Ua(n,!1,s,t,l);break;case"backwards":for(t=null,s=n.child,n.child=null;s!==null;){if(e=s.alternate,e!==null&&Qr(e)===null){n.child=s;break}e=s.sibling,s.sibling=t,t=s,s=e}Ua(n,!0,t,null,l);break;case"together":Ua(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function _r(e,n){!(n.mode&1)&&e!==null&&(e.alternate=null,n.alternate=null,n.flags|=2)}function Xe(e,n,t){if(e!==null&&(n.dependencies=e.dependencies),Pn|=n.lanes,!(t&n.childLanes))return null;if(e!==null&&n.child!==e.child)throw Error(x(153));if(n.child!==null){for(e=n.child,t=dn(e,e.pendingProps),n.child=t,t.return=n;e.sibling!==null;)e=e.sibling,t=t.sibling=dn(e,e.pendingProps),t.return=n;t.sibling=null}return n.child}function ip(e,n,t){switch(n.tag){case 3:Mc(n),et();break;case 5:ic(n);break;case 1:fe(n.type)&&Br(n);break;case 4:pl(n,n.stateNode.containerInfo);break;case 10:var r=n.type._context,s=n.memoizedProps.value;R($r,r._currentValue),r._currentValue=s;break;case 13:if(r=n.memoizedState,r!==null)return r.dehydrated!==null?(R(B,B.current&1),n.flags|=128,null):t&n.child.childLanes?Ic(e,n,t):(R(B,B.current&1),e=Xe(e,n,t),e!==null?e.sibling:null);R(B,B.current&1);break;case 19:if(r=(t&n.childLanes)!==0,e.flags&128){if(r)return Rc(e,n,t);n.flags|=128}if(s=n.memoizedState,s!==null&&(s.rendering=null,s.tail=null,s.lastEffect=null),R(B,B.current),r)break;return null;case 22:case 23:return n.lanes=0,bc(e,n,t)}return Xe(e,n,t)}var Oc,Es,Fc,Ac;Oc=function(e,n){for(var t=n.child;t!==null;){if(t.tag===5||t.tag===6)e.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break;for(;t.sibling===null;){if(t.return===null||t.return===n)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};Es=function(){};Fc=function(e,n,t,r){var s=e.memoizedProps;if(s!==r){e=n.stateNode,kn(De.current);var l=null;switch(t){case"input":s=qa(e,s),r=qa(e,r),l=[];break;case"select":s=U({},s,{value:void 0}),r=U({},r,{value:void 0}),l=[];break;case"textarea":s=Ja(e,s),r=Ja(e,r),l=[];break;default:typeof s.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Ar)}ns(t,r);var i;t=null;for(d in s)if(!r.hasOwnProperty(d)&&s.hasOwnProperty(d)&&s[d]!=null)if(d==="style"){var o=s[d];for(i in o)o.hasOwnProperty(i)&&(t||(t={}),t[i]="")}else d!=="dangerouslySetInnerHTML"&&d!=="children"&&d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&d!=="autoFocus"&&(bt.hasOwnProperty(d)?l||(l=[]):(l=l||[]).push(d,null));for(d in r){var c=r[d];if(o=s!=null?s[d]:void 0,r.hasOwnProperty(d)&&c!==o&&(c!=null||o!=null))if(d==="style")if(o){for(i in o)!o.hasOwnProperty(i)||c&&c.hasOwnProperty(i)||(t||(t={}),t[i]="");for(i in c)c.hasOwnProperty(i)&&o[i]!==c[i]&&(t||(t={}),t[i]=c[i])}else t||(l||(l=[]),l.push(d,t)),t=c;else d==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,o=o?o.__html:void 0,c!=null&&o!==c&&(l=l||[]).push(d,c)):d==="children"?typeof c!="string"&&typeof c!="number"||(l=l||[]).push(d,""+c):d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&(bt.hasOwnProperty(d)?(c!=null&&d==="onScroll"&&O("scroll",e),l||o===c||(l=[])):(l=l||[]).push(d,c))}t&&(l=l||[]).push("style",t);var d=l;(n.updateQueue=d)&&(n.flags|=4)}};Ac=function(e,n,t,r){t!==r&&(n.flags|=4)};function vt(e,n){if(!D)switch(e.tailMode){case"hidden":n=e.tail;for(var t=null;n!==null;)n.alternate!==null&&(t=n),n=n.sibling;t===null?e.tail=null:t.sibling=null;break;case"collapsed":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function re(e){var n=e.alternate!==null&&e.alternate.child===e.child,t=0,r=0;if(n)for(var s=e.child;s!==null;)t|=s.lanes|s.childLanes,r|=s.subtreeFlags&14680064,r|=s.flags&14680064,s.return=e,s=s.sibling;else for(s=e.child;s!==null;)t|=s.lanes|s.childLanes,r|=s.subtreeFlags,r|=s.flags,s.return=e,s=s.sibling;return e.subtreeFlags|=r,e.childLanes=t,n}function op(e,n,t){var r=n.pendingProps;switch(sl(n),n.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return re(n),null;case 1:return fe(n.type)&&Dr(),re(n),null;case 3:return r=n.stateNode,tt(),F(pe),F(se),ml(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(pr(n)?n.flags|=4:e===null||e.memoizedState.isDehydrated&&!(n.flags&256)||(n.flags|=1024,be!==null&&(Os(be),be=null))),Es(e,n),re(n),null;case 5:fl(n);var s=kn($t.current);if(t=n.type,e!==null&&n.stateNode!=null)Fc(e,n,t,r,s),e.ref!==n.ref&&(n.flags|=512,n.flags|=2097152);else{if(!r){if(n.stateNode===null)throw Error(x(166));return re(n),null}if(e=kn(De.current),pr(n)){r=n.stateNode,t=n.type;var l=n.memoizedProps;switch(r[Fe]=n,r[Vt]=l,e=(n.mode&1)!==0,t){case"dialog":O("cancel",r),O("close",r);break;case"iframe":case"object":case"embed":O("load",r);break;case"video":case"audio":for(s=0;s<jt.length;s++)O(jt[s],r);break;case"source":O("error",r);break;case"img":case"image":case"link":O("error",r),O("load",r);break;case"details":O("toggle",r);break;case"input":Dl(r,l),O("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!l.multiple},O("invalid",r);break;case"textarea":Vl(r,l),O("invalid",r)}ns(t,l),s=null;for(var i in l)if(l.hasOwnProperty(i)){var o=l[i];i==="children"?typeof o=="string"?r.textContent!==o&&(l.suppressHydrationWarning!==!0&&dr(r.textContent,o,e),s=["children",o]):typeof o=="number"&&r.textContent!==""+o&&(l.suppressHydrationWarning!==!0&&dr(r.textContent,o,e),s=["children",""+o]):bt.hasOwnProperty(i)&&o!=null&&i==="onScroll"&&O("scroll",r)}switch(t){case"input":rr(r),Bl(r,l,!0);break;case"textarea":rr(r),Ul(r);break;case"select":case"option":break;default:typeof l.onClick=="function"&&(r.onclick=Ar)}r=s,n.updateQueue=r,r!==null&&(n.flags|=4)}else{i=s.nodeType===9?s:s.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=po(t)),e==="http://www.w3.org/1999/xhtml"?t==="script"?(e=i.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=i.createElement(t,{is:r.is}):(e=i.createElement(t),t==="select"&&(i=e,r.multiple?i.multiple=!0:r.size&&(i.size=r.size))):e=i.createElementNS(e,t),e[Fe]=n,e[Vt]=r,Oc(e,n,!1,!1),n.stateNode=e;e:{switch(i=ts(t,r),t){case"dialog":O("cancel",e),O("close",e),s=r;break;case"iframe":case"object":case"embed":O("load",e),s=r;break;case"video":case"audio":for(s=0;s<jt.length;s++)O(jt[s],e);s=r;break;case"source":O("error",e),s=r;break;case"img":case"image":case"link":O("error",e),O("load",e),s=r;break;case"details":O("toggle",e),s=r;break;case"input":Dl(e,r),s=qa(e,r),O("invalid",e);break;case"option":s=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},s=U({},r,{value:void 0}),O("invalid",e);break;case"textarea":Vl(e,r),s=Ja(e,r),O("invalid",e);break;default:s=r}ns(t,s),o=s;for(l in o)if(o.hasOwnProperty(l)){var c=o[l];l==="style"?ho(e,c):l==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&fo(e,c)):l==="children"?typeof c=="string"?(t!=="textarea"||c!=="")&&Lt(e,c):typeof c=="number"&&Lt(e,""+c):l!=="suppressContentEditableWarning"&&l!=="suppressHydrationWarning"&&l!=="autoFocus"&&(bt.hasOwnProperty(l)?c!=null&&l==="onScroll"&&O("scroll",e):c!=null&&Ws(e,l,c,i))}switch(t){case"input":rr(e),Bl(e,r,!1);break;case"textarea":rr(e),Ul(e);break;case"option":r.value!=null&&e.setAttribute("value",""+pn(r.value));break;case"select":e.multiple=!!r.multiple,l=r.value,l!=null?Qn(e,!!r.multiple,l,!1):r.defaultValue!=null&&Qn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof s.onClick=="function"&&(e.onclick=Ar)}switch(t){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(n.flags|=4)}n.ref!==null&&(n.flags|=512,n.flags|=2097152)}return re(n),null;case 6:if(e&&n.stateNode!=null)Ac(e,n,e.memoizedProps,r);else{if(typeof r!="string"&&n.stateNode===null)throw Error(x(166));if(t=kn($t.current),kn(De.current),pr(n)){if(r=n.stateNode,t=n.memoizedProps,r[Fe]=n,(l=r.nodeValue!==t)&&(e=ge,e!==null))switch(e.tag){case 3:dr(r.nodeValue,t,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&dr(r.nodeValue,t,(e.mode&1)!==0)}l&&(n.flags|=4)}else r=(t.nodeType===9?t:t.ownerDocument).createTextNode(r),r[Fe]=n,n.stateNode=r}return re(n),null;case 13:if(F(B),r=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(D&&ve!==null&&n.mode&1&&!(n.flags&128))tc(),et(),n.flags|=98560,l=!1;else if(l=pr(n),r!==null&&r.dehydrated!==null){if(e===null){if(!l)throw Error(x(318));if(l=n.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(x(317));l[Fe]=n}else et(),!(n.flags&128)&&(n.memoizedState=null),n.flags|=4;re(n),l=!1}else be!==null&&(Os(be),be=null),l=!0;if(!l)return n.flags&65536?n:null}return n.flags&128?(n.lanes=t,n):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(n.child.flags|=8192,n.mode&1&&(e===null||B.current&1?G===0&&(G=3):_l())),n.updateQueue!==null&&(n.flags|=4),re(n),null);case 4:return tt(),Es(e,n),e===null&&Dt(n.stateNode.containerInfo),re(n),null;case 10:return cl(n.type._context),re(n),null;case 17:return fe(n.type)&&Dr(),re(n),null;case 19:if(F(B),l=n.memoizedState,l===null)return re(n),null;if(r=(n.flags&128)!==0,i=l.rendering,i===null)if(r)vt(l,!1);else{if(G!==0||e!==null&&e.flags&128)for(e=n.child;e!==null;){if(i=Qr(e),i!==null){for(n.flags|=128,vt(l,!1),r=i.updateQueue,r!==null&&(n.updateQueue=r,n.flags|=4),n.subtreeFlags=0,r=t,t=n.child;t!==null;)l=t,e=r,l.flags&=14680066,i=l.alternate,i===null?(l.childLanes=0,l.lanes=e,l.child=null,l.subtreeFlags=0,l.memoizedProps=null,l.memoizedState=null,l.updateQueue=null,l.dependencies=null,l.stateNode=null):(l.childLanes=i.childLanes,l.lanes=i.lanes,l.child=i.child,l.subtreeFlags=0,l.deletions=null,l.memoizedProps=i.memoizedProps,l.memoizedState=i.memoizedState,l.updateQueue=i.updateQueue,l.type=i.type,e=i.dependencies,l.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t=t.sibling;return R(B,B.current&1|2),n.child}e=e.sibling}l.tail!==null&&Q()>at&&(n.flags|=128,r=!0,vt(l,!1),n.lanes=4194304)}else{if(!r)if(e=Qr(i),e!==null){if(n.flags|=128,r=!0,t=e.updateQueue,t!==null&&(n.updateQueue=t,n.flags|=4),vt(l,!0),l.tail===null&&l.tailMode==="hidden"&&!i.alternate&&!D)return re(n),null}else 2*Q()-l.renderingStartTime>at&&t!==1073741824&&(n.flags|=128,r=!0,vt(l,!1),n.lanes=4194304);l.isBackwards?(i.sibling=n.child,n.child=i):(t=l.last,t!==null?t.sibling=i:n.child=i,l.last=i)}return l.tail!==null?(n=l.tail,l.rendering=n,l.tail=n.sibling,l.renderingStartTime=Q(),n.sibling=null,t=B.current,R(B,r?t&1|2:t&1),n):(re(n),null);case 22:case 23:return Cl(),r=n.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(n.flags|=8192),r&&n.mode&1?he&1073741824&&(re(n),n.subtreeFlags&6&&(n.flags|=8192)):re(n),null;case 24:return null;case 25:return null}throw Error(x(156,n.tag))}function cp(e,n){switch(sl(n),n.tag){case 1:return fe(n.type)&&Dr(),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return tt(),F(pe),F(se),ml(),e=n.flags,e&65536&&!(e&128)?(n.flags=e&-65537|128,n):null;case 5:return fl(n),null;case 13:if(F(B),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(x(340));et()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return F(B),null;case 4:return tt(),null;case 10:return cl(n.type._context),null;case 22:case 23:return Cl(),null;case 24:return null;default:return null}}var hr=!1,ae=!1,up=typeof WeakSet=="function"?WeakSet:Set,N=null;function Wn(e,n){var t=e.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(r){$(e,n,r)}else t.current=null}function Ps(e,n,t){try{t()}catch(r){$(e,n,r)}}var bi=!1;function dp(e,n){if(ps=Rr,e=$o(),rl(e)){if("selectionStart"in e)var t={start:e.selectionStart,end:e.selectionEnd};else e:{t=(t=e.ownerDocument)&&t.defaultView||window;var r=t.getSelection&&t.getSelection();if(r&&r.rangeCount!==0){t=r.anchorNode;var s=r.anchorOffset,l=r.focusNode;r=r.focusOffset;try{t.nodeType,l.nodeType}catch{t=null;break e}var i=0,o=-1,c=-1,d=0,v=0,h=e,m=null;n:for(;;){for(var w;h!==t||s!==0&&h.nodeType!==3||(o=i+s),h!==l||r!==0&&h.nodeType!==3||(c=i+r),h.nodeType===3&&(i+=h.nodeValue.length),(w=h.firstChild)!==null;)m=h,h=w;for(;;){if(h===e)break n;if(m===t&&++d===s&&(o=i),m===l&&++v===r&&(c=i),(w=h.nextSibling)!==null)break;h=m,m=h.parentNode}h=w}t=o===-1||c===-1?null:{start:o,end:c}}else t=null}t=t||{start:0,end:0}}else t=null;for(fs={focusedElem:e,selectionRange:t},Rr=!1,N=n;N!==null;)if(n=N,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,N=e;else for(;N!==null;){n=N;try{var y=n.alternate;if(n.flags&1024)switch(n.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var j=y.memoizedProps,A=y.memoizedState,p=n.stateNode,u=p.getSnapshotBeforeUpdate(n.elementType===n.type?j:Pe(n.type,j),A);p.__reactInternalSnapshotBeforeUpdate=u}break;case 3:var f=n.stateNode.containerInfo;f.nodeType===1?f.textContent="":f.nodeType===9&&f.documentElement&&f.removeChild(f.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(x(163))}}catch(g){$(n,n.return,g)}if(e=n.sibling,e!==null){e.return=n.return,N=e;break}N=n.return}return y=bi,bi=!1,y}function Et(e,n,t){var r=n.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var s=r=r.next;do{if((s.tag&e)===e){var l=s.destroy;s.destroy=void 0,l!==void 0&&Ps(n,t,l)}s=s.next}while(s!==r)}}function ca(e,n){if(n=n.updateQueue,n=n!==null?n.lastEffect:null,n!==null){var t=n=n.next;do{if((t.tag&e)===e){var r=t.create;t.destroy=r()}t=t.next}while(t!==n)}}function Ts(e){var n=e.ref;if(n!==null){var t=e.stateNode;switch(e.tag){case 5:e=t;break;default:e=t}typeof n=="function"?n(e):n.current=e}}function Dc(e){var n=e.alternate;n!==null&&(e.alternate=null,Dc(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&(delete n[Fe],delete n[Vt],delete n[vs],delete n[Kd],delete n[Xd])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Bc(e){return e.tag===5||e.tag===3||e.tag===4}function Li(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Bc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function bs(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?t.nodeType===8?t.parentNode.insertBefore(e,n):t.insertBefore(e,n):(t.nodeType===8?(n=t.parentNode,n.insertBefore(e,t)):(n=t,n.appendChild(e)),t=t._reactRootContainer,t!=null||n.onclick!==null||(n.onclick=Ar));else if(r!==4&&(e=e.child,e!==null))for(bs(e,n,t),e=e.sibling;e!==null;)bs(e,n,t),e=e.sibling}function Ls(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?t.insertBefore(e,n):t.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Ls(e,n,t),e=e.sibling;e!==null;)Ls(e,n,t),e=e.sibling}var J=null,Te=!1;function qe(e,n,t){for(t=t.child;t!==null;)Vc(e,n,t),t=t.sibling}function Vc(e,n,t){if(Ae&&typeof Ae.onCommitFiberUnmount=="function")try{Ae.onCommitFiberUnmount(na,t)}catch{}switch(t.tag){case 5:ae||Wn(t,n);case 6:var r=J,s=Te;J=null,qe(e,n,t),J=r,Te=s,J!==null&&(Te?(e=J,t=t.stateNode,e.nodeType===8?e.parentNode.removeChild(t):e.removeChild(t)):J.removeChild(t.stateNode));break;case 18:J!==null&&(Te?(e=J,t=t.stateNode,e.nodeType===8?Ra(e.parentNode,t):e.nodeType===1&&Ra(e,t),Ot(e)):Ra(J,t.stateNode));break;case 4:r=J,s=Te,J=t.stateNode.containerInfo,Te=!0,qe(e,n,t),J=r,Te=s;break;case 0:case 11:case 14:case 15:if(!ae&&(r=t.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){s=r=r.next;do{var l=s,i=l.destroy;l=l.tag,i!==void 0&&(l&2||l&4)&&Ps(t,n,i),s=s.next}while(s!==r)}qe(e,n,t);break;case 1:if(!ae&&(Wn(t,n),r=t.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=t.memoizedProps,r.state=t.memoizedState,r.componentWillUnmount()}catch(o){$(t,n,o)}qe(e,n,t);break;case 21:qe(e,n,t);break;case 22:t.mode&1?(ae=(r=ae)||t.memoizedState!==null,qe(e,n,t),ae=r):qe(e,n,t);break;default:qe(e,n,t)}}function Mi(e){var n=e.updateQueue;if(n!==null){e.updateQueue=null;var t=e.stateNode;t===null&&(t=e.stateNode=new up),n.forEach(function(r){var s=yp.bind(null,e,r);t.has(r)||(t.add(r),r.then(s,s))})}}function Ee(e,n){var t=n.deletions;if(t!==null)for(var r=0;r<t.length;r++){var s=t[r];try{var l=e,i=n,o=i;e:for(;o!==null;){switch(o.tag){case 5:J=o.stateNode,Te=!1;break e;case 3:J=o.stateNode.containerInfo,Te=!0;break e;case 4:J=o.stateNode.containerInfo,Te=!0;break e}o=o.return}if(J===null)throw Error(x(160));Vc(l,i,s),J=null,Te=!1;var c=s.alternate;c!==null&&(c.return=null),s.return=null}catch(d){$(s,n,d)}}if(n.subtreeFlags&12854)for(n=n.child;n!==null;)Uc(n,e),n=n.sibling}function Uc(e,n){var t=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Ee(n,e),Re(e),r&4){try{Et(3,e,e.return),ca(3,e)}catch(j){$(e,e.return,j)}try{Et(5,e,e.return)}catch(j){$(e,e.return,j)}}break;case 1:Ee(n,e),Re(e),r&512&&t!==null&&Wn(t,t.return);break;case 5:if(Ee(n,e),Re(e),r&512&&t!==null&&Wn(t,t.return),e.flags&32){var s=e.stateNode;try{Lt(s,"")}catch(j){$(e,e.return,j)}}if(r&4&&(s=e.stateNode,s!=null)){var l=e.memoizedProps,i=t!==null?t.memoizedProps:l,o=e.type,c=e.updateQueue;if(e.updateQueue=null,c!==null)try{o==="input"&&l.type==="radio"&&l.name!=null&&co(s,l),ts(o,i);var d=ts(o,l);for(i=0;i<c.length;i+=2){var v=c[i],h=c[i+1];v==="style"?ho(s,h):v==="dangerouslySetInnerHTML"?fo(s,h):v==="children"?Lt(s,h):Ws(s,v,h,d)}switch(o){case"input":Ya(s,l);break;case"textarea":uo(s,l);break;case"select":var m=s._wrapperState.wasMultiple;s._wrapperState.wasMultiple=!!l.multiple;var w=l.value;w!=null?Qn(s,!!l.multiple,w,!1):m!==!!l.multiple&&(l.defaultValue!=null?Qn(s,!!l.multiple,l.defaultValue,!0):Qn(s,!!l.multiple,l.multiple?[]:"",!1))}s[Vt]=l}catch(j){$(e,e.return,j)}}break;case 6:if(Ee(n,e),Re(e),r&4){if(e.stateNode===null)throw Error(x(162));s=e.stateNode,l=e.memoizedProps;try{s.nodeValue=l}catch(j){$(e,e.return,j)}}break;case 3:if(Ee(n,e),Re(e),r&4&&t!==null&&t.memoizedState.isDehydrated)try{Ot(n.containerInfo)}catch(j){$(e,e.return,j)}break;case 4:Ee(n,e),Re(e);break;case 13:Ee(n,e),Re(e),s=e.child,s.flags&8192&&(l=s.memoizedState!==null,s.stateNode.isHidden=l,!l||s.alternate!==null&&s.alternate.memoizedState!==null||(kl=Q())),r&4&&Mi(e);break;case 22:if(v=t!==null&&t.memoizedState!==null,e.mode&1?(ae=(d=ae)||v,Ee(n,e),ae=d):Ee(n,e),Re(e),r&8192){if(d=e.memoizedState!==null,(e.stateNode.isHidden=d)&&!v&&e.mode&1)for(N=e,v=e.child;v!==null;){for(h=N=v;N!==null;){switch(m=N,w=m.child,m.tag){case 0:case 11:case 14:case 15:Et(4,m,m.return);break;case 1:Wn(m,m.return);var y=m.stateNode;if(typeof y.componentWillUnmount=="function"){r=m,t=m.return;try{n=r,y.props=n.memoizedProps,y.state=n.memoizedState,y.componentWillUnmount()}catch(j){$(r,t,j)}}break;case 5:Wn(m,m.return);break;case 22:if(m.memoizedState!==null){Ri(h);continue}}w!==null?(w.return=m,N=w):Ri(h)}v=v.sibling}e:for(v=null,h=e;;){if(h.tag===5){if(v===null){v=h;try{s=h.stateNode,d?(l=s.style,typeof l.setProperty=="function"?l.setProperty("display","none","important"):l.display="none"):(o=h.stateNode,c=h.memoizedProps.style,i=c!=null&&c.hasOwnProperty("display")?c.display:null,o.style.display=mo("display",i))}catch(j){$(e,e.return,j)}}}else if(h.tag===6){if(v===null)try{h.stateNode.nodeValue=d?"":h.memoizedProps}catch(j){$(e,e.return,j)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===e)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===e)break e;for(;h.sibling===null;){if(h.return===null||h.return===e)break e;v===h&&(v=null),h=h.return}v===h&&(v=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:Ee(n,e),Re(e),r&4&&Mi(e);break;case 21:break;default:Ee(n,e),Re(e)}}function Re(e){var n=e.flags;if(n&2){try{e:{for(var t=e.return;t!==null;){if(Bc(t)){var r=t;break e}t=t.return}throw Error(x(160))}switch(r.tag){case 5:var s=r.stateNode;r.flags&32&&(Lt(s,""),r.flags&=-33);var l=Li(e);Ls(e,l,s);break;case 3:case 4:var i=r.stateNode.containerInfo,o=Li(e);bs(e,o,i);break;default:throw Error(x(161))}}catch(c){$(e,e.return,c)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function pp(e,n,t){N=e,$c(e)}function $c(e,n,t){for(var r=(e.mode&1)!==0;N!==null;){var s=N,l=s.child;if(s.tag===22&&r){var i=s.memoizedState!==null||hr;if(!i){var o=s.alternate,c=o!==null&&o.memoizedState!==null||ae;o=hr;var d=ae;if(hr=i,(ae=c)&&!d)for(N=s;N!==null;)i=N,c=i.child,i.tag===22&&i.memoizedState!==null?Oi(s):c!==null?(c.return=i,N=c):Oi(s);for(;l!==null;)N=l,$c(l),l=l.sibling;N=s,hr=o,ae=d}Ii(e)}else s.subtreeFlags&8772&&l!==null?(l.return=s,N=l):Ii(e)}}function Ii(e){for(;N!==null;){var n=N;if(n.flags&8772){var t=n.alternate;try{if(n.flags&8772)switch(n.tag){case 0:case 11:case 15:ae||ca(5,n);break;case 1:var r=n.stateNode;if(n.flags&4&&!ae)if(t===null)r.componentDidMount();else{var s=n.elementType===n.type?t.memoizedProps:Pe(n.type,t.memoizedProps);r.componentDidUpdate(s,t.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var l=n.updateQueue;l!==null&&xi(n,l,r);break;case 3:var i=n.updateQueue;if(i!==null){if(t=null,n.child!==null)switch(n.child.tag){case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}xi(n,i,t)}break;case 5:var o=n.stateNode;if(t===null&&n.flags&4){t=o;var c=n.memoizedProps;switch(n.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&t.focus();break;case"img":c.src&&(t.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(n.memoizedState===null){var d=n.alternate;if(d!==null){var v=d.memoizedState;if(v!==null){var h=v.dehydrated;h!==null&&Ot(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(x(163))}ae||n.flags&512&&Ts(n)}catch(m){$(n,n.return,m)}}if(n===e){N=null;break}if(t=n.sibling,t!==null){t.return=n.return,N=t;break}N=n.return}}function Ri(e){for(;N!==null;){var n=N;if(n===e){N=null;break}var t=n.sibling;if(t!==null){t.return=n.return,N=t;break}N=n.return}}function Oi(e){for(;N!==null;){var n=N;try{switch(n.tag){case 0:case 11:case 15:var t=n.return;try{ca(4,n)}catch(c){$(n,t,c)}break;case 1:var r=n.stateNode;if(typeof r.componentDidMount=="function"){var s=n.return;try{r.componentDidMount()}catch(c){$(n,s,c)}}var l=n.return;try{Ts(n)}catch(c){$(n,l,c)}break;case 5:var i=n.return;try{Ts(n)}catch(c){$(n,i,c)}}}catch(c){$(n,n.return,c)}if(n===e){N=null;break}var o=n.sibling;if(o!==null){o.return=n.return,N=o;break}N=n.return}}var fp=Math.ceil,Gr=Ge.ReactCurrentDispatcher,jl=Ge.ReactCurrentOwner,Se=Ge.ReactCurrentBatchConfig,M=0,Z=null,K=null,ee=0,he=0,Hn=hn(0),G=0,Kt=null,Pn=0,ua=0,Nl=0,Pt=null,ue=null,kl=0,at=1/0,Be=null,qr=!1,Ms=null,cn=null,vr=!1,tn=null,Yr=0,Tt=0,Is=null,zr=-1,Er=0;function ie(){return M&6?Q():zr!==-1?zr:zr=Q()}function un(e){return e.mode&1?M&2&&ee!==0?ee&-ee:qd.transition!==null?(Er===0&&(Er=zo()),Er):(e=I,e!==0||(e=window.event,e=e===void 0?16:Io(e.type)),e):1}function Me(e,n,t,r){if(50<Tt)throw Tt=0,Is=null,Error(x(185));Gt(e,t,r),(!(M&2)||e!==Z)&&(e===Z&&(!(M&2)&&(ua|=t),G===4&&en(e,ee)),me(e,r),t===1&&M===0&&!(n.mode&1)&&(at=Q()+500,la&&vn()))}function me(e,n){var t=e.callbackNode;qu(e,n);var r=Ir(e,e===Z?ee:0);if(r===0)t!==null&&Hl(t),e.callbackNode=null,e.callbackPriority=0;else if(n=r&-r,e.callbackPriority!==n){if(t!=null&&Hl(t),n===1)e.tag===0?Gd(Fi.bind(null,e)):Jo(Fi.bind(null,e)),Hd(function(){!(M&6)&&vn()}),t=null;else{switch(Eo(r)){case 1:t=Gs;break;case 4:t=Co;break;case 16:t=Mr;break;case 536870912:t=_o;break;default:t=Mr}t=Yc(t,Wc.bind(null,e))}e.callbackPriority=n,e.callbackNode=t}}function Wc(e,n){if(zr=-1,Er=0,M&6)throw Error(x(327));var t=e.callbackNode;if(Yn()&&e.callbackNode!==t)return null;var r=Ir(e,e===Z?ee:0);if(r===0)return null;if(r&30||r&e.expiredLanes||n)n=Zr(e,r);else{n=r;var s=M;M|=2;var l=Qc();(Z!==e||ee!==n)&&(Be=null,at=Q()+500,Sn(e,n));do try{vp();break}catch(o){Hc(e,o)}while(!0);ol(),Gr.current=l,M=s,K!==null?n=0:(Z=null,ee=0,n=G)}if(n!==0){if(n===2&&(s=is(e),s!==0&&(r=s,n=Rs(e,s))),n===1)throw t=Kt,Sn(e,0),en(e,r),me(e,Q()),t;if(n===6)en(e,r);else{if(s=e.current.alternate,!(r&30)&&!mp(s)&&(n=Zr(e,r),n===2&&(l=is(e),l!==0&&(r=l,n=Rs(e,l))),n===1))throw t=Kt,Sn(e,0),en(e,r),me(e,Q()),t;switch(e.finishedWork=s,e.finishedLanes=r,n){case 0:case 1:throw Error(x(345));case 2:yn(e,ue,Be);break;case 3:if(en(e,r),(r&130023424)===r&&(n=kl+500-Q(),10<n)){if(Ir(e,0)!==0)break;if(s=e.suspendedLanes,(s&r)!==r){ie(),e.pingedLanes|=e.suspendedLanes&s;break}e.timeoutHandle=hs(yn.bind(null,e,ue,Be),n);break}yn(e,ue,Be);break;case 4:if(en(e,r),(r&4194240)===r)break;for(n=e.eventTimes,s=-1;0<r;){var i=31-Le(r);l=1<<i,i=n[i],i>s&&(s=i),r&=~l}if(r=s,r=Q()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*fp(r/1960))-r,10<r){e.timeoutHandle=hs(yn.bind(null,e,ue,Be),r);break}yn(e,ue,Be);break;case 5:yn(e,ue,Be);break;default:throw Error(x(329))}}}return me(e,Q()),e.callbackNode===t?Wc.bind(null,e):null}function Rs(e,n){var t=Pt;return e.current.memoizedState.isDehydrated&&(Sn(e,n).flags|=256),e=Zr(e,n),e!==2&&(n=ue,ue=t,n!==null&&Os(n)),e}function Os(e){ue===null?ue=e:ue.push.apply(ue,e)}function mp(e){for(var n=e;;){if(n.flags&16384){var t=n.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var r=0;r<t.length;r++){var s=t[r],l=s.getSnapshot;s=s.value;try{if(!Ie(l(),s))return!1}catch{return!1}}}if(t=n.child,n.subtreeFlags&16384&&t!==null)t.return=n,n=t;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function en(e,n){for(n&=~Nl,n&=~ua,e.suspendedLanes|=n,e.pingedLanes&=~n,e=e.expirationTimes;0<n;){var t=31-Le(n),r=1<<t;e[t]=-1,n&=~r}}function Fi(e){if(M&6)throw Error(x(327));Yn();var n=Ir(e,0);if(!(n&1))return me(e,Q()),null;var t=Zr(e,n);if(e.tag!==0&&t===2){var r=is(e);r!==0&&(n=r,t=Rs(e,r))}if(t===1)throw t=Kt,Sn(e,0),en(e,n),me(e,Q()),t;if(t===6)throw Error(x(345));return e.finishedWork=e.current.alternate,e.finishedLanes=n,yn(e,ue,Be),me(e,Q()),null}function Sl(e,n){var t=M;M|=1;try{return e(n)}finally{M=t,M===0&&(at=Q()+500,la&&vn())}}function Tn(e){tn!==null&&tn.tag===0&&!(M&6)&&Yn();var n=M;M|=1;var t=Se.transition,r=I;try{if(Se.transition=null,I=1,e)return e()}finally{I=r,Se.transition=t,M=n,!(M&6)&&vn()}}function Cl(){he=Hn.current,F(Hn)}function Sn(e,n){e.finishedWork=null,e.finishedLanes=0;var t=e.timeoutHandle;if(t!==-1&&(e.timeoutHandle=-1,Wd(t)),K!==null)for(t=K.return;t!==null;){var r=t;switch(sl(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Dr();break;case 3:tt(),F(pe),F(se),ml();break;case 5:fl(r);break;case 4:tt();break;case 13:F(B);break;case 19:F(B);break;case 10:cl(r.type._context);break;case 22:case 23:Cl()}t=t.return}if(Z=e,K=e=dn(e.current,null),ee=he=n,G=0,Kt=null,Nl=ua=Pn=0,ue=Pt=null,Nn!==null){for(n=0;n<Nn.length;n++)if(t=Nn[n],r=t.interleaved,r!==null){t.interleaved=null;var s=r.next,l=t.pending;if(l!==null){var i=l.next;l.next=s,r.next=i}t.pending=r}Nn=null}return e}function Hc(e,n){do{var t=K;try{if(ol(),Sr.current=Xr,Kr){for(var r=V.memoizedState;r!==null;){var s=r.queue;s!==null&&(s.pending=null),r=r.next}Kr=!1}if(En=0,Y=X=V=null,zt=!1,Wt=0,jl.current=null,t===null||t.return===null){G=1,Kt=n,K=null;break}e:{var l=e,i=t.return,o=t,c=n;if(n=ee,o.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var d=c,v=o,h=v.tag;if(!(v.mode&1)&&(h===0||h===11||h===15)){var m=v.alternate;m?(v.updateQueue=m.updateQueue,v.memoizedState=m.memoizedState,v.lanes=m.lanes):(v.updateQueue=null,v.memoizedState=null)}var w=Si(i);if(w!==null){w.flags&=-257,Ci(w,i,o,l,n),w.mode&1&&ki(l,d,n),n=w,c=d;var y=n.updateQueue;if(y===null){var j=new Set;j.add(c),n.updateQueue=j}else y.add(c);break e}else{if(!(n&1)){ki(l,d,n),_l();break e}c=Error(x(426))}}else if(D&&o.mode&1){var A=Si(i);if(A!==null){!(A.flags&65536)&&(A.flags|=256),Ci(A,i,o,l,n),ll(rt(c,o));break e}}l=c=rt(c,o),G!==4&&(G=2),Pt===null?Pt=[l]:Pt.push(l),l=i;do{switch(l.tag){case 3:l.flags|=65536,n&=-n,l.lanes|=n;var p=Ec(l,c,n);gi(l,p);break e;case 1:o=c;var u=l.type,f=l.stateNode;if(!(l.flags&128)&&(typeof u.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(cn===null||!cn.has(f)))){l.flags|=65536,n&=-n,l.lanes|=n;var g=Pc(l,o,n);gi(l,g);break e}}l=l.return}while(l!==null)}Xc(t)}catch(k){n=k,K===t&&t!==null&&(K=t=t.return);continue}break}while(!0)}function Qc(){var e=Gr.current;return Gr.current=Xr,e===null?Xr:e}function _l(){(G===0||G===3||G===2)&&(G=4),Z===null||!(Pn&268435455)&&!(ua&268435455)||en(Z,ee)}function Zr(e,n){var t=M;M|=2;var r=Qc();(Z!==e||ee!==n)&&(Be=null,Sn(e,n));do try{hp();break}catch(s){Hc(e,s)}while(!0);if(ol(),M=t,Gr.current=r,K!==null)throw Error(x(261));return Z=null,ee=0,G}function hp(){for(;K!==null;)Kc(K)}function vp(){for(;K!==null&&!Vu();)Kc(K)}function Kc(e){var n=qc(e.alternate,e,he);e.memoizedProps=e.pendingProps,n===null?Xc(e):K=n,jl.current=null}function Xc(e){var n=e;do{var t=n.alternate;if(e=n.return,n.flags&32768){if(t=cp(t,n),t!==null){t.flags&=32767,K=t;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{G=6,K=null;return}}else if(t=op(t,n,he),t!==null){K=t;return}if(n=n.sibling,n!==null){K=n;return}K=n=e}while(n!==null);G===0&&(G=5)}function yn(e,n,t){var r=I,s=Se.transition;try{Se.transition=null,I=1,gp(e,n,t,r)}finally{Se.transition=s,I=r}return null}function gp(e,n,t,r){do Yn();while(tn!==null);if(M&6)throw Error(x(327));t=e.finishedWork;var s=e.finishedLanes;if(t===null)return null;if(e.finishedWork=null,e.finishedLanes=0,t===e.current)throw Error(x(177));e.callbackNode=null,e.callbackPriority=0;var l=t.lanes|t.childLanes;if(Yu(e,l),e===Z&&(K=Z=null,ee=0),!(t.subtreeFlags&2064)&&!(t.flags&2064)||vr||(vr=!0,Yc(Mr,function(){return Yn(),null})),l=(t.flags&15990)!==0,t.subtreeFlags&15990||l){l=Se.transition,Se.transition=null;var i=I;I=1;var o=M;M|=4,jl.current=null,dp(e,t),Uc(t,e),Fd(fs),Rr=!!ps,fs=ps=null,e.current=t,pp(t),Uu(),M=o,I=i,Se.transition=l}else e.current=t;if(vr&&(vr=!1,tn=e,Yr=s),l=e.pendingLanes,l===0&&(cn=null),Hu(t.stateNode),me(e,Q()),n!==null)for(r=e.onRecoverableError,t=0;t<n.length;t++)s=n[t],r(s.value,{componentStack:s.stack,digest:s.digest});if(qr)throw qr=!1,e=Ms,Ms=null,e;return Yr&1&&e.tag!==0&&Yn(),l=e.pendingLanes,l&1?e===Is?Tt++:(Tt=0,Is=e):Tt=0,vn(),null}function Yn(){if(tn!==null){var e=Eo(Yr),n=Se.transition,t=I;try{if(Se.transition=null,I=16>e?16:e,tn===null)var r=!1;else{if(e=tn,tn=null,Yr=0,M&6)throw Error(x(331));var s=M;for(M|=4,N=e.current;N!==null;){var l=N,i=l.child;if(N.flags&16){var o=l.deletions;if(o!==null){for(var c=0;c<o.length;c++){var d=o[c];for(N=d;N!==null;){var v=N;switch(v.tag){case 0:case 11:case 15:Et(8,v,l)}var h=v.child;if(h!==null)h.return=v,N=h;else for(;N!==null;){v=N;var m=v.sibling,w=v.return;if(Dc(v),v===d){N=null;break}if(m!==null){m.return=w,N=m;break}N=w}}}var y=l.alternate;if(y!==null){var j=y.child;if(j!==null){y.child=null;do{var A=j.sibling;j.sibling=null,j=A}while(j!==null)}}N=l}}if(l.subtreeFlags&2064&&i!==null)i.return=l,N=i;else e:for(;N!==null;){if(l=N,l.flags&2048)switch(l.tag){case 0:case 11:case 15:Et(9,l,l.return)}var p=l.sibling;if(p!==null){p.return=l.return,N=p;break e}N=l.return}}var u=e.current;for(N=u;N!==null;){i=N;var f=i.child;if(i.subtreeFlags&2064&&f!==null)f.return=i,N=f;else e:for(i=u;N!==null;){if(o=N,o.flags&2048)try{switch(o.tag){case 0:case 11:case 15:ca(9,o)}}catch(k){$(o,o.return,k)}if(o===i){N=null;break e}var g=o.sibling;if(g!==null){g.return=o.return,N=g;break e}N=o.return}}if(M=s,vn(),Ae&&typeof Ae.onPostCommitFiberRoot=="function")try{Ae.onPostCommitFiberRoot(na,e)}catch{}r=!0}return r}finally{I=t,Se.transition=n}}return!1}function Ai(e,n,t){n=rt(t,n),n=Ec(e,n,1),e=on(e,n,1),n=ie(),e!==null&&(Gt(e,1,n),me(e,n))}function $(e,n,t){if(e.tag===3)Ai(e,e,t);else for(;n!==null;){if(n.tag===3){Ai(n,e,t);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(cn===null||!cn.has(r))){e=rt(t,e),e=Pc(n,e,1),n=on(n,e,1),e=ie(),n!==null&&(Gt(n,1,e),me(n,e));break}}n=n.return}}function xp(e,n,t){var r=e.pingCache;r!==null&&r.delete(n),n=ie(),e.pingedLanes|=e.suspendedLanes&t,Z===e&&(ee&t)===t&&(G===4||G===3&&(ee&130023424)===ee&&500>Q()-kl?Sn(e,0):Nl|=t),me(e,n)}function Gc(e,n){n===0&&(e.mode&1?(n=lr,lr<<=1,!(lr&130023424)&&(lr=4194304)):n=1);var t=ie();e=Ke(e,n),e!==null&&(Gt(e,n,t),me(e,t))}function wp(e){var n=e.memoizedState,t=0;n!==null&&(t=n.retryLane),Gc(e,t)}function yp(e,n){var t=0;switch(e.tag){case 13:var r=e.stateNode,s=e.memoizedState;s!==null&&(t=s.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(x(314))}r!==null&&r.delete(n),Gc(e,t)}var qc;qc=function(e,n,t){if(e!==null)if(e.memoizedProps!==n.pendingProps||pe.current)de=!0;else{if(!(e.lanes&t)&&!(n.flags&128))return de=!1,ip(e,n,t);de=!!(e.flags&131072)}else de=!1,D&&n.flags&1048576&&ec(n,Ur,n.index);switch(n.lanes=0,n.tag){case 2:var r=n.type;_r(e,n),e=n.pendingProps;var s=Jn(n,se.current);qn(n,t),s=vl(null,n,r,e,s,t);var l=gl();return n.flags|=1,typeof s=="object"&&s!==null&&typeof s.render=="function"&&s.$$typeof===void 0?(n.tag=1,n.memoizedState=null,n.updateQueue=null,fe(r)?(l=!0,Br(n)):l=!1,n.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,dl(n),s.updater=oa,n.stateNode=s,s._reactInternals=n,Ns(n,r,e,t),n=Cs(null,n,r,!0,l,t)):(n.tag=0,D&&l&&al(n),le(null,n,s,t),n=n.child),n;case 16:r=n.elementType;e:{switch(_r(e,n),e=n.pendingProps,s=r._init,r=s(r._payload),n.type=r,s=n.tag=Np(r),e=Pe(r,e),s){case 0:n=Ss(null,n,r,e,t);break e;case 1:n=Ei(null,n,r,e,t);break e;case 11:n=_i(null,n,r,e,t);break e;case 14:n=zi(null,n,r,Pe(r.type,e),t);break e}throw Error(x(306,r,""))}return n;case 0:return r=n.type,s=n.pendingProps,s=n.elementType===r?s:Pe(r,s),Ss(e,n,r,s,t);case 1:return r=n.type,s=n.pendingProps,s=n.elementType===r?s:Pe(r,s),Ei(e,n,r,s,t);case 3:e:{if(Mc(n),e===null)throw Error(x(387));r=n.pendingProps,l=n.memoizedState,s=l.element,lc(e,n),Hr(n,r,null,t);var i=n.memoizedState;if(r=i.element,l.isDehydrated)if(l={element:r,isDehydrated:!1,cache:i.cache,pendingSuspenseBoundaries:i.pendingSuspenseBoundaries,transitions:i.transitions},n.updateQueue.baseState=l,n.memoizedState=l,n.flags&256){s=rt(Error(x(423)),n),n=Pi(e,n,r,t,s);break e}else if(r!==s){s=rt(Error(x(424)),n),n=Pi(e,n,r,t,s);break e}else for(ve=ln(n.stateNode.containerInfo.firstChild),ge=n,D=!0,be=null,t=ac(n,null,r,t),n.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(et(),r===s){n=Xe(e,n,t);break e}le(e,n,r,t)}n=n.child}return n;case 5:return ic(n),e===null&&ws(n),r=n.type,s=n.pendingProps,l=e!==null?e.memoizedProps:null,i=s.children,ms(r,s)?i=null:l!==null&&ms(r,l)&&(n.flags|=32),Lc(e,n),le(e,n,i,t),n.child;case 6:return e===null&&ws(n),null;case 13:return Ic(e,n,t);case 4:return pl(n,n.stateNode.containerInfo),r=n.pendingProps,e===null?n.child=nt(n,null,r,t):le(e,n,r,t),n.child;case 11:return r=n.type,s=n.pendingProps,s=n.elementType===r?s:Pe(r,s),_i(e,n,r,s,t);case 7:return le(e,n,n.pendingProps,t),n.child;case 8:return le(e,n,n.pendingProps.children,t),n.child;case 12:return le(e,n,n.pendingProps.children,t),n.child;case 10:e:{if(r=n.type._context,s=n.pendingProps,l=n.memoizedProps,i=s.value,R($r,r._currentValue),r._currentValue=i,l!==null)if(Ie(l.value,i)){if(l.children===s.children&&!pe.current){n=Xe(e,n,t);break e}}else for(l=n.child,l!==null&&(l.return=n);l!==null;){var o=l.dependencies;if(o!==null){i=l.child;for(var c=o.firstContext;c!==null;){if(c.context===r){if(l.tag===1){c=We(-1,t&-t),c.tag=2;var d=l.updateQueue;if(d!==null){d=d.shared;var v=d.pending;v===null?c.next=c:(c.next=v.next,v.next=c),d.pending=c}}l.lanes|=t,c=l.alternate,c!==null&&(c.lanes|=t),ys(l.return,t,n),o.lanes|=t;break}c=c.next}}else if(l.tag===10)i=l.type===n.type?null:l.child;else if(l.tag===18){if(i=l.return,i===null)throw Error(x(341));i.lanes|=t,o=i.alternate,o!==null&&(o.lanes|=t),ys(i,t,n),i=l.sibling}else i=l.child;if(i!==null)i.return=l;else for(i=l;i!==null;){if(i===n){i=null;break}if(l=i.sibling,l!==null){l.return=i.return,i=l;break}i=i.return}l=i}le(e,n,s.children,t),n=n.child}return n;case 9:return s=n.type,r=n.pendingProps.children,qn(n,t),s=Ce(s),r=r(s),n.flags|=1,le(e,n,r,t),n.child;case 14:return r=n.type,s=Pe(r,n.pendingProps),s=Pe(r.type,s),zi(e,n,r,s,t);case 15:return Tc(e,n,n.type,n.pendingProps,t);case 17:return r=n.type,s=n.pendingProps,s=n.elementType===r?s:Pe(r,s),_r(e,n),n.tag=1,fe(r)?(e=!0,Br(n)):e=!1,qn(n,t),zc(n,r,s),Ns(n,r,s,t),Cs(null,n,r,!0,e,t);case 19:return Rc(e,n,t);case 22:return bc(e,n,t)}throw Error(x(156,n.tag))};function Yc(e,n){return So(e,n)}function jp(e,n,t,r){this.tag=e,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ke(e,n,t,r){return new jp(e,n,t,r)}function zl(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Np(e){if(typeof e=="function")return zl(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Qs)return 11;if(e===Ks)return 14}return 2}function dn(e,n){var t=e.alternate;return t===null?(t=ke(e.tag,n,e.key,e.mode),t.elementType=e.elementType,t.type=e.type,t.stateNode=e.stateNode,t.alternate=e,e.alternate=t):(t.pendingProps=n,t.type=e.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=e.flags&14680064,t.childLanes=e.childLanes,t.lanes=e.lanes,t.child=e.child,t.memoizedProps=e.memoizedProps,t.memoizedState=e.memoizedState,t.updateQueue=e.updateQueue,n=e.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},t.sibling=e.sibling,t.index=e.index,t.ref=e.ref,t}function Pr(e,n,t,r,s,l){var i=2;if(r=e,typeof e=="function")zl(e)&&(i=1);else if(typeof e=="string")i=5;else e:switch(e){case Rn:return Cn(t.children,s,l,n);case Hs:i=8,s|=8;break;case Qa:return e=ke(12,t,n,s|2),e.elementType=Qa,e.lanes=l,e;case Ka:return e=ke(13,t,n,s),e.elementType=Ka,e.lanes=l,e;case Xa:return e=ke(19,t,n,s),e.elementType=Xa,e.lanes=l,e;case lo:return da(t,s,l,n);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case ao:i=10;break e;case so:i=9;break e;case Qs:i=11;break e;case Ks:i=14;break e;case Ye:i=16,r=null;break e}throw Error(x(130,e==null?e:typeof e,""))}return n=ke(i,t,n,s),n.elementType=e,n.type=r,n.lanes=l,n}function Cn(e,n,t,r){return e=ke(7,e,r,n),e.lanes=t,e}function da(e,n,t,r){return e=ke(22,e,r,n),e.elementType=lo,e.lanes=t,e.stateNode={isHidden:!1},e}function $a(e,n,t){return e=ke(6,e,null,n),e.lanes=t,e}function Wa(e,n,t){return n=ke(4,e.children!==null?e.children:[],e.key,n),n.lanes=t,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}function kp(e,n,t,r,s){this.tag=n,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Sa(0),this.expirationTimes=Sa(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Sa(0),this.identifierPrefix=r,this.onRecoverableError=s,this.mutableSourceEagerHydrationData=null}function El(e,n,t,r,s,l,i,o,c){return e=new kp(e,n,t,o,c),n===1?(n=1,l===!0&&(n|=8)):n=0,l=ke(3,null,null,n),e.current=l,l.stateNode=e,l.memoizedState={element:r,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},dl(l),e}function Sp(e,n,t){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:In,key:r==null?null:""+r,children:e,containerInfo:n,implementation:t}}function Zc(e){if(!e)return fn;e=e._reactInternals;e:{if(Ln(e)!==e||e.tag!==1)throw Error(x(170));var n=e;do{switch(n.tag){case 3:n=n.stateNode.context;break e;case 1:if(fe(n.type)){n=n.stateNode.__reactInternalMemoizedMergedChildContext;break e}}n=n.return}while(n!==null);throw Error(x(171))}if(e.tag===1){var t=e.type;if(fe(t))return Zo(e,t,n)}return n}function Jc(e,n,t,r,s,l,i,o,c){return e=El(t,r,!0,e,s,l,i,o,c),e.context=Zc(null),t=e.current,r=ie(),s=un(t),l=We(r,s),l.callback=n??null,on(t,l,s),e.current.lanes=s,Gt(e,s,r),me(e,r),e}function pa(e,n,t,r){var s=n.current,l=ie(),i=un(s);return t=Zc(t),n.context===null?n.context=t:n.pendingContext=t,n=We(l,i),n.payload={element:e},r=r===void 0?null:r,r!==null&&(n.callback=r),e=on(s,n,i),e!==null&&(Me(e,s,i,l),kr(e,s,i)),i}function Jr(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Di(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var t=e.retryLane;e.retryLane=t!==0&&t<n?t:n}}function Pl(e,n){Di(e,n),(e=e.alternate)&&Di(e,n)}function Cp(){return null}var eu=typeof reportError=="function"?reportError:function(e){console.error(e)};function Tl(e){this._internalRoot=e}fa.prototype.render=Tl.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(x(409));pa(e,n,null,null)};fa.prototype.unmount=Tl.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;Tn(function(){pa(null,e,null,null)}),n[Qe]=null}};function fa(e){this._internalRoot=e}fa.prototype.unstable_scheduleHydration=function(e){if(e){var n=bo();e={blockedOn:null,target:e,priority:n};for(var t=0;t<Je.length&&n!==0&&n<Je[t].priority;t++);Je.splice(t,0,e),t===0&&Mo(e)}};function bl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function ma(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Bi(){}function _p(e,n,t,r,s){if(s){if(typeof r=="function"){var l=r;r=function(){var d=Jr(i);l.call(d)}}var i=Jc(n,r,e,0,null,!1,!1,"",Bi);return e._reactRootContainer=i,e[Qe]=i.current,Dt(e.nodeType===8?e.parentNode:e),Tn(),i}for(;s=e.lastChild;)e.removeChild(s);if(typeof r=="function"){var o=r;r=function(){var d=Jr(c);o.call(d)}}var c=El(e,0,!1,null,null,!1,!1,"",Bi);return e._reactRootContainer=c,e[Qe]=c.current,Dt(e.nodeType===8?e.parentNode:e),Tn(function(){pa(n,c,t,r)}),c}function ha(e,n,t,r,s){var l=t._reactRootContainer;if(l){var i=l;if(typeof s=="function"){var o=s;s=function(){var c=Jr(i);o.call(c)}}pa(n,i,e,s)}else i=_p(t,n,e,s,r);return Jr(i)}Po=function(e){switch(e.tag){case 3:var n=e.stateNode;if(n.current.memoizedState.isDehydrated){var t=yt(n.pendingLanes);t!==0&&(qs(n,t|1),me(n,Q()),!(M&6)&&(at=Q()+500,vn()))}break;case 13:Tn(function(){var r=Ke(e,1);if(r!==null){var s=ie();Me(r,e,1,s)}}),Pl(e,1)}};Ys=function(e){if(e.tag===13){var n=Ke(e,134217728);if(n!==null){var t=ie();Me(n,e,134217728,t)}Pl(e,134217728)}};To=function(e){if(e.tag===13){var n=un(e),t=Ke(e,n);if(t!==null){var r=ie();Me(t,e,n,r)}Pl(e,n)}};bo=function(){return I};Lo=function(e,n){var t=I;try{return I=e,n()}finally{I=t}};as=function(e,n,t){switch(n){case"input":if(Ya(e,t),n=t.name,t.type==="radio"&&n!=null){for(t=e;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+n)+'][type="radio"]'),n=0;n<t.length;n++){var r=t[n];if(r!==e&&r.form===e.form){var s=sa(r);if(!s)throw Error(x(90));oo(r),Ya(r,s)}}}break;case"textarea":uo(e,t);break;case"select":n=t.value,n!=null&&Qn(e,!!t.multiple,n,!1)}};xo=Sl;wo=Tn;var zp={usingClientEntryPoint:!1,Events:[Yt,Dn,sa,vo,go,Sl]},gt={findFiberByHostInstance:jn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Ep={bundleType:gt.bundleType,version:gt.version,rendererPackageName:gt.rendererPackageName,rendererConfig:gt.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ge.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=No(e),e===null?null:e.stateNode},findFiberByHostInstance:gt.findFiberByHostInstance||Cp,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var gr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!gr.isDisabled&&gr.supportsFiber)try{na=gr.inject(Ep),Ae=gr}catch{}}we.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=zp;we.createPortal=function(e,n){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!bl(n))throw Error(x(200));return Sp(e,n,null,t)};we.createRoot=function(e,n){if(!bl(e))throw Error(x(299));var t=!1,r="",s=eu;return n!=null&&(n.unstable_strictMode===!0&&(t=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),n=El(e,1,!1,null,null,t,!1,r,s),e[Qe]=n.current,Dt(e.nodeType===8?e.parentNode:e),new Tl(n)};we.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(x(188)):(e=Object.keys(e).join(","),Error(x(268,e)));return e=No(n),e=e===null?null:e.stateNode,e};we.flushSync=function(e){return Tn(e)};we.hydrate=function(e,n,t){if(!ma(n))throw Error(x(200));return ha(null,e,n,!0,t)};we.hydrateRoot=function(e,n,t){if(!bl(e))throw Error(x(405));var r=t!=null&&t.hydratedSources||null,s=!1,l="",i=eu;if(t!=null&&(t.unstable_strictMode===!0&&(s=!0),t.identifierPrefix!==void 0&&(l=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),n=Jc(n,null,e,1,t??null,s,!1,l,i),e[Qe]=n.current,Dt(e),r)for(e=0;e<r.length;e++)t=r[e],s=t._getVersion,s=s(t._source),n.mutableSourceEagerHydrationData==null?n.mutableSourceEagerHydrationData=[t,s]:n.mutableSourceEagerHydrationData.push(t,s);return new fa(n)};we.render=function(e,n,t){if(!ma(n))throw Error(x(200));return ha(null,e,n,!1,t)};we.unmountComponentAtNode=function(e){if(!ma(e))throw Error(x(40));return e._reactRootContainer?(Tn(function(){ha(null,null,e,!1,function(){e._reactRootContainer=null,e[Qe]=null})}),!0):!1};we.unstable_batchedUpdates=Sl;we.unstable_renderSubtreeIntoContainer=function(e,n,t,r){if(!ma(t))throw Error(x(200));if(e==null||e._reactInternals===void 0)throw Error(x(38));return ha(e,n,t,!1,r)};we.version="18.3.1-next-f1338f8080-20240426";function nu(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(nu)}catch(e){console.error(e)}}nu(),eo.exports=we;var Pp=eo.exports,tu,Vi=Pp;tu=Vi.createRoot,Vi.hydrateRoot;function Tp(){return a.jsxs("footer",{className:"footer",children:[`
 
 `,a.jsxs("div",{className:"cols",children:[`
 `,a.jsxs("div",{className:"container flex justify-between f-wrap",children:[`
 `,a.jsxs("div",{className:"box box-logo",children:[`
 `,a.jsxs("a",{className:"logo",href:"/",title:"BateForte Materiais para Construção",children:[`
 `,a.jsx("img",{src:"/assets/img-dc6278851a6d.webp",alt:"BateForte Materiais para Construção",width:"auto",height:"auto"}),`
 `]}),` 
 `,a.jsxs("div",{className:"box-logo-socials",children:[`
 `,`
 `,a.jsxs("a",{href:"https://www.instagram.com/bateforte_/",title:"Instagram","aria-label":"Instagram",target:"_blank",rel:"noopener noreferrer",children:[`
 `,a.jsx("i",{className:"icon icon-instagram v-align-middle"}),`
 `]}),`
 `,`
 `]}),`
 `]}),`
 `,a.jsxs("div",{className:"box box-categories",children:[`
 `,a.jsxs("div",{className:"title",children:["Categorias ",a.jsx("i",{className:"icon icon-arrow-down sf-hidden"})]}),`
 `,a.jsxs("div",{className:"overflow",children:[`
 `,a.jsxs("ul",{className:"list",children:[a.jsx("li",{children:a.jsx("a",{href:"#/categoria/cimento",title:"Cimento",children:"Cimento"})}),a.jsx("li",{children:a.jsx("a",{href:"#/categoria/areia",title:"Areia",children:"Areia"})}),a.jsx("li",{children:a.jsx("a",{href:"#/categoria/ferro",title:"Ferro",children:"Ferro"})}),a.jsx("li",{children:a.jsx("a",{href:"#/categoria/eletrica",title:"Elétrica",children:"Elétrica"})}),a.jsx("li",{children:a.jsx("a",{href:"#/categoria/hidraulica",title:"Hidráulica",children:"Hidráulica"})}),a.jsx("li",{children:a.jsx("a",{href:"#/categoria/telhas",title:"Telhas",children:"Telhas"})}),a.jsx("li",{children:a.jsx("a",{href:"#/categoria/tintas",title:"Tintas",children:"Tintas"})})]}),`
 `]}),`
 `]}),`
 `,a.jsxs("div",{className:"box box-pages",children:[`
 `,a.jsxs("div",{className:"title",children:["Institucional ",a.jsx("i",{className:"icon icon-arrow-down sf-hidden"})]}),`
 `,a.jsxs("div",{className:"overflow",children:[`
 `,a.jsxs("ul",{className:"list",children:[`
 `,a.jsxs("li",{children:[`
 `,a.jsx("a",{href:"https://www.atlantanet.com.br/empresa",title:"Empresa",children:"Empresa"}),`
 `]}),`
 `,a.jsxs("li",{children:[`
 `,a.jsx("a",{href:"https://www.atlantanet.com.br/seguranca",title:"Seguranca",children:"Seguranca"}),`
 `]}),`
 `,a.jsxs("li",{children:[`
 `,a.jsx("a",{href:"https://www.atlantanet.com.br/privacidade",title:"Política de Privacidade",children:"Política de Privacidade"}),`
 `]}),`
 `,a.jsxs("li",{children:[`
 `,a.jsx("a",{href:"https://www.atlantanet.com.br/relatorio-de-transparencia",title:"Relatório de Transparência",children:"Relatório de Transparência"}),`
 `]}),`
 `,a.jsxs("li",{children:[`
 `,a.jsx("a",{href:"https://wa.me/5511974659658",target:"_blank",rel:"noopener noreferrer",title:"Fale Conosco",children:"Fale Conosco"}),`
 `]}),`
 `]}),`
 `]}),`
 `]}),`
 `,a.jsxs("div",{className:"box box-infos",children:[`
 `,a.jsxs("div",{className:"title",children:["Atendimento ",a.jsx("i",{className:"icon icon-arrow-down sf-hidden"})]}),`
 `,a.jsxs("div",{className:"overflow",children:[`
 `,a.jsxs("ul",{className:"list",children:[a.jsxs("li",{children:[`
 `,a.jsxs("a",{href:"https://api.whatsapp.com/send/?phone=5511974659658",title:"WhatsApp",target:"_blank",rel:"noopener noreferrer",children:[`
 `,a.jsx("i",{className:"icon icon-whatsapp v-align-middle"}),`
 `,a.jsx("span",{children:"(11) 97465-9658"}),`
 `]}),`
 `]}),`
 `,a.jsxs("li",{className:"hour",children:[`
 `,a.jsxs("div",{className:"flex",children:[`
 `,a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",children:a.jsx("path",{d:"M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm5.848 12.459c.202.038.202.333.001.372-1.907.361-6.045 1.111-6.547 1.111-.719 0-1.301-.582-1.301-1.301 0-.512.77-5.447 1.125-7.445.034-.192.312-.181.343.014l.985 6.238 5.394 1.011z"})}),`
 `,a.jsx("span",{children:"Horário de Atendimento:"}),`
 `]}),`
 `,a.jsxs("div",{className:"text",children:[`
 `,a.jsx("span",{children:"Segunda a Sexta 08:00 as 18:00 e Sábado das 08:00 as 13:00"}),`
 `]}),`
 `]}),`
 `,a.jsxs("li",{children:[`
 `,a.jsxs("a",{href:"https://www.google.com/maps/search/?api=1&query=Av.+Quinze+de+Novembro,+1764+-+Centro,+Itapecerica+da+Serra+-+SP,+06850-100",target:"_blank",rel:"noopener noreferrer",title:"Endereço",children:[`
 `,a.jsx("i",{className:"icon icon-place v-align-middle"}),`
 `,a.jsx("span",{children:"Av. Quinze de Novembro, 1764 - Centro, Itapecerica da Serra - SP, 06850-100"}),`
 `]}),`
 `]})]}),`
 `]}),`
 `]}),`
 
 `,a.jsxs("div",{className:"box payments-seals",children:[`
 `,a.jsxs("div",{className:"overflow",children:[` 
 `,a.jsx("div",{className:"title",children:"Formas de pagamento"}),`
 `,a.jsxs("ul",{className:"payment-list flex f-wrap",children:[`
 `,a.jsxs("li",{className:"payment-form",children:[`
 `,a.jsx("img",{className:"lazyload loaded",alt:"Cartão Visa - Vindi",src:"/assets/img-4fcfba1d7119.webp","data-ll-status":"loaded"}),`
 `]}),`
 `,a.jsxs("li",{className:"payment-form",children:[`
 `,a.jsx("img",{className:"lazyload loaded",alt:"Cartão MasterCard - Vindi",src:"/assets/img-78fa4608ee50.webp","data-ll-status":"loaded"}),`
 `]}),`
 `,a.jsxs("li",{className:"payment-form",children:[`
 `,a.jsx("img",{className:"lazyload loaded",alt:"Cartão Elo - Vindi",src:"/assets/img-b517fb144ccd.webp","data-ll-status":"loaded"}),`
 `]}),`
 
 `,a.jsxs("li",{className:"payment-form",children:[`
 `,a.jsx("img",{className:"lazyload loaded",alt:"pix",src:"/assets/img-80e133f18f9d.webp","data-ll-status":"loaded"}),`
 `]}),`
 
`]})," "]}),`
 
 `,a.jsxs("div",{className:"overflow",children:[` 
 `,a.jsx("div",{className:"title",children:"Selos de Segurança"}),`
 `,a.jsxs("ul",{className:"security-seals flex f-wrap",children:[` 
 
 `,a.jsxs("li",{className:"google-seal",children:[`
 `,a.jsxs("a",{href:"#",target:"_blank",rel:"noreferrer noopener",title:"Google Safe Browsing",children:[`
 `,a.jsx("span",{className:"icon icon-shield vertical-align"}),`
 `,a.jsx("span",{className:"icon icon-google vertical-align"}),`
 `]}),`
 `]}),`
 
 
 `,a.jsxs("li",{className:"loja-protegida-seal",children:[`
 `,a.jsxs("center",{children:[`
 `,a.jsxs("a",{href:"#",target:"_blank",rel:"noopener",children:[`
 `,a.jsx("img",{src:"/assets/img-2077ee59210f.gif",alt:"Loja Protegida",title:"Loja Protegida",border:"0"}),`
 `]}),`
 `]}),`
 `]}),`
 
 
 
 
 
 
 
 
 
 
 
 `]}),`
 `]}),`
 `]}),`
 `]}),`
 `]}),`
 
 
 
 `,a.jsxs("div",{className:"copy",children:[`
 `,a.jsxs("div",{className:"container flex align-center flex-column",children:[`
 
 
 `,a.jsx("div",{className:"text",children:`BateForte Materiais para Construção - © Todos os direitos reservados.
CNPJ: 32.603.413/0001-57`}),`
 
 `,a.jsxs("div",{className:"tray",children:[`
 `,a.jsxs("div",{className:"credits-partner sama-partner",children:[`
 `,a.jsxs("span",{children:[`Desenvolvimento 
 `,a.jsxs("a",{href:"https://www.instagram.com/dunamis_mkt/",rel:"noopener noreferrer",target:"_blank",children:[`
 `,a.jsx("img",{src:"/assets/logo-dunamis.png",width:"42",height:"42",alt:"Dunamis",className:"bf-logo-dunamis"}),`
 `]}),`
 `]}),`
 `]}),`
 
 `,`
 `]}),`
 `]}),`
 `]}),`
`]})}const C=e=>n=>{n&&(n.style.cssText=e)};function bp(){return a.jsxs("header",{className:"header",children:[`
 `,a.jsxs("div",{className:"bg header-desktop",children:[`
 `,a.jsxs("div",{className:"line flex align-center justify-between container",children:[`
 `,a.jsx("div",{className:"header-menu sf-hidden","data-toggle":"overlay-shadow","data-target":"#menu-mobile",children:`
 
 
 
 `}),`
 `,a.jsxs("a",{className:"logo",href:"/",title:"BateForte Materiais para Construção",children:[`
 `,a.jsx("img",{src:"/assets/img-fb172cf24605.webp",alt:"BateForte Materiais para Construção",width:"222",height:"36"}),`
 
 `,a.jsx("h1",{className:"title-store sf-hidden",children:"BateForte Materiais para Construção"}),`
 `]}),` 
 `,a.jsxs("div",{className:"search-move",children:[`
 `,a.jsxs("form",{className:"header-search-wrapper",action:"/loja/busca.php?loja=1018104","data-search":"suggestion",children:[`
 
 `,a.jsx("input",{className:"input-search",placeholder:"O que deseja procurar?",spellCheck:"false",autoComplete:"off","data-input":"suggestion",type:"text",name:"palavra_busca",defaultValue:""}),`
 `,a.jsxs("button",{className:"button-search","aria-label":"Buscar",children:[`
 `,a.jsx("i",{className:"icon icon-search"}),`
 `]}),`
 `,a.jsx("div",{className:"suggestion is-hidden sf-hidden","data-container":"suggestion"}),`
`]})," "]}),`
 `,a.jsxs("div",{className:"header-right",children:[`
 `,a.jsxs("div",{className:"contact flex align-center",children:[`
 `,a.jsxs("i",{className:"contact-icon icon",children:[`
 `,a.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",className:"svg-icon",viewBox:"0 0 1024 1024",version:"1.1",fill:"currentColor",children:[a.jsx("path",{d:"M512 947.106726c-239.915162 0-435.106726-195.191564-435.106726-435.106726S272.084838 76.893274 512 76.893274s435.106726 195.191564 435.106726 435.106726S751.915162 947.106726 512 947.106726zM512 111.019513c-221.1027 0-400.980487 179.877787-400.980487 400.980487s179.877787 400.980487 400.980487 400.980487 400.980487-179.877787 400.980487-400.980487S733.1027 111.019513 512 111.019513z"}),a.jsx("path",{d:"M481.170854 613.473089l-1.192152-15.524578c-3.577478-32.265868 7.178493-67.549465 37.060057-103.417371 26.888394-31.682583 41.829687-54.993498 41.829687-81.858356 0-30.513968-19.126616-50.808176-56.769958-51.392484-21.51092 0-45.430702 7.153934-60.370972 18.49319l-14.332427-37.619806c19.709901-14.356986 53.776787-23.944342 85.459371-23.944342 68.74264 0 99.816357 42.437531 99.816357 87.892793 0 40.636512-22.703071 69.934792-51.392484 104.001679-26.304086 31.049157-35.867906 57.378825-34.066887 87.843674l0.584308 15.524578L481.170854 613.472066zM468.030579 697.18056c0-22.143323 14.941294-37.667901 35.867906-37.667901 20.902052 0 35.259038 15.524578 35.259038 37.667901 0 20.926612-13.748119 37.035498-35.867906 37.035498C482.363006 734.216058 468.030579 718.107171 468.030579 697.18056z"})]}),`
 `]}),`
 `,a.jsxs("div",{className:"contact-text",children:[`
 `,a.jsx("span",{children:"Precisa de Ajuda?"}),`
 `,a.jsx("strong",{children:"Atendimento"}),`
 `]}),`
 `,a.jsxs("div",{className:"header-wrapper flex align-center",children:[`
 `,a.jsxs("div",{className:"header-wrapper__content flex flex-column",children:[`
 `,a.jsxs("div",{className:"header-wrapper__item header-wrapper__item--whatsapp",children:[`
 `,a.jsxs("a",{href:"https://api.whatsapp.com/send?phone=5511974659658",title:"WhatsApp: (11) 97465-9658",target:"_blank",children:[`
 `,a.jsxs("span",{children:[a.jsx("i",{className:"icon icon-whatsapp v-align-middle"}),"Whatsapp:"]}),`
 (11) 97465-9658
 `]}),`
 `]}),`
 
 
 
 `,`
 `,`
 `]}),`
 `]}),`
 `]}),`
 
 `,`
 
 `,a.jsxs("a",{className:"cart-toggle",href:"javascript:void(0)",title:"Carrinho",children:[`
 `,a.jsxs("i",{className:"icon v-align-middle",children:[`
 `,a.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",role:"presentation","aria-hidden":"true",viewBox:"0 0 17 20",fill:"currentColor",children:[`
 `,a.jsx("path",{d:"M0 20V4.995l1 .006v.015l4-.002V4c0-2.484 1.274-4 3.5-4C10.518 0 12 1.48 12 4v1.012l5-.003v.985H1V19h15V6.005h1V20H0zM11 4.49C11 2.267 10.507 1 8.5 1 6.5 1 6 2.27 6 4.49V5l5-.002V4.49z",fill:"currentColor"}),`
 `]}),`
 `]}),`
 `,a.jsx("span",{className:"cart-quantity","data-cart":"amount",children:"0"}),`
 `]}),`
 `]}),`
 `]}),`
 
`,a.jsxs("nav",{className:"nav",children:[`
 `,a.jsxs("div",{className:"container",children:[`
 `,a.jsxs("ul",{className:"list flex justify-between",children:[`
 
 `,a.jsxs("li",{className:"first-level sub all-categories",children:[`
 `,a.jsxs("span",{role:"button",title:"Todas Categorias",children:[`
 `,a.jsxs("div",{className:"category-image",children:[`
 `,a.jsx("img",{className:"lazyload loaded",alt:"Todos os Departamentos",src:"/assets/img-a0da2ec22bf6.webp","data-ll-status":"loaded"}),`
 `]}),`
 `,a.jsx("div",{className:"name",children:`
 Todas Categorias
 `}),`
 `]}),`
 `,a.jsxs("ul",{className:"sub-list second-level",children:[` 
 `,a.jsxs("ul",{className:"wrapper-categories",children:[`
 
 `,a.jsxs("li",{className:"sub",children:[`
 `,a.jsxs("a",{href:"#/categoria/cimento",title:"Cimento",children:[`
 `,a.jsx("div",{className:"category-image",children:a.jsx("img",{src:"/assets/bf-icon-cimento.svg",alt:"Cimento",width:"20",height:"20"})}),`
 Cimento
 `]}),`
 `]}),`
 
 `,a.jsxs("li",{className:"sub",children:[`
 `,a.jsxs("a",{href:"#/categoria/areia",title:"Areia",children:[`
 `,a.jsx("div",{className:"category-image",children:a.jsx("img",{src:"/assets/bf-icon-areia.svg",alt:"Areia",width:"20",height:"20"})}),`
 Areia
 `]}),`
 `]}),`
 
 `,a.jsxs("li",{className:"sub",children:[`
 `,a.jsxs("a",{href:"#/categoria/ferro",title:"Ferro",children:[`
 `,a.jsx("div",{className:"category-image",children:a.jsx("img",{src:"/assets/bf-icon-ferro.svg",alt:"Ferro",width:"20",height:"20"})}),`
 Ferro
 `]}),`
 `]}),`
 
 `,a.jsxs("li",{className:"sub",children:[`
 `,a.jsxs("a",{href:"#/categoria/eletrica",title:"Elétrica",children:[`
 `,a.jsx("div",{className:"category-image",children:a.jsx("img",{src:"/assets/bf-icon-eletrica.svg",alt:"Elétrica",width:"20",height:"20"})}),`
 Elétrica
 `]}),`
 `]}),`
 
 `,a.jsxs("li",{className:"sub",children:[`
 `,a.jsxs("a",{href:"#/categoria/hidraulica",title:"Hidráulica",children:[`
 `,a.jsx("div",{className:"category-image",children:a.jsx("img",{src:"/assets/bf-icon-hidraulica.svg",alt:"Hidráulica",width:"20",height:"20"})}),`
 Hidráulica
 `]}),`
 `]}),`
 
 `,a.jsxs("li",{className:"sub",children:[`
 `,a.jsxs("a",{href:"#/categoria/telhas",title:"Telhas",children:[`
 `,a.jsx("div",{className:"category-image",children:a.jsx("img",{src:"/assets/bf-icon-telhas.svg",alt:"Telhas",width:"20",height:"20"})}),`
 Telhas
 `]}),`
 `]}),`
 
 `,a.jsxs("li",{className:"sub",children:[`
 `,a.jsxs("a",{href:"#/categoria/tintas",title:"Tintas",children:[`
 `,a.jsx("div",{className:"category-image",children:a.jsx("img",{src:"/assets/bf-icon-tintas.svg",alt:"Tintas",width:"20",height:"20"})}),`
 Tintas
 `]}),`
 `]}),`
 
 `]}),`
 `]}),` 
 
 `]}),`
 
 `,a.jsxs("li",{className:"first-level",children:[`
 `,a.jsxs("a",{href:"#/categoria/cimento",title:"Cimento",children:[`
 `,a.jsx("div",{className:"category-image",children:a.jsx("img",{alt:"Cimento",src:"/assets/bf-icon-cimento.svg",width:"20",height:"20"})}),`
 `,a.jsx("div",{className:"name",children:`
 Cimento
 `}),`
 `]}),`
 `]}),`
 
 `,a.jsxs("li",{className:"first-level",children:[`
 `,a.jsxs("a",{href:"#/categoria/areia",title:"Areia",children:[`
 `,a.jsx("div",{className:"category-image",children:a.jsx("img",{alt:"Areia",src:"/assets/bf-icon-areia.svg",width:"20",height:"20"})}),`
 `,a.jsx("div",{className:"name",children:`
 Areia
 `}),`
 `]}),`
 `]}),`
 
 `,a.jsxs("li",{className:"first-level",children:[`
 `,a.jsxs("a",{href:"#/categoria/ferro",title:"Ferro",children:[`
 `,a.jsx("div",{className:"category-image",children:a.jsx("img",{alt:"Ferro",src:"/assets/bf-icon-ferro.svg",width:"20",height:"20"})}),`
 `,a.jsx("div",{className:"name",children:`
 Ferro
 `}),`
 `]}),`
 `]}),`
 
 `,a.jsxs("li",{className:"first-level",children:[`
 `,a.jsxs("a",{href:"#/categoria/eletrica",title:"Elétrica",children:[`
 `,a.jsx("div",{className:"category-image",children:a.jsx("img",{alt:"Elétrica",src:"/assets/bf-icon-eletrica.svg",width:"20",height:"20"})}),`
 `,a.jsx("div",{className:"name",children:`
 Elétrica
 `}),`
 `]}),`
 `]}),`
 
 `,a.jsxs("li",{className:"first-level",children:[`
 `,a.jsxs("a",{href:"#/categoria/hidraulica",title:"Hidráulica",children:[`
 `,a.jsx("div",{className:"category-image",children:a.jsx("img",{alt:"Hidráulica",src:"/assets/bf-icon-hidraulica.svg",width:"20",height:"20"})}),`
 `,a.jsx("div",{className:"name",children:`
 Hidráulica
 `}),`
 `]}),`
 `]}),`
 
 `,`
 
 `,a.jsxs("li",{className:"first-level",children:[`
 `,a.jsxs("a",{href:"#/categoria/telhas",title:"Telhas",children:[`
 `,a.jsx("div",{className:"category-image",children:a.jsx("img",{alt:"Telhas",src:"/assets/bf-icon-telhas.svg",width:"20",height:"20"})}),`
 `,a.jsx("div",{className:"name",children:`
 Telhas
 `}),`
 `]}),`
 `]}),`
 
 `,a.jsxs("li",{className:"first-level",children:[`
 `,a.jsxs("a",{href:"#/categoria/tintas",title:"Tintas",children:[`
 `,a.jsx("div",{className:"category-image",children:a.jsx("img",{alt:"Tintas",src:"/assets/bf-icon-tintas.svg",width:"20",height:"20"})}),`
 `,a.jsx("div",{className:"name",children:`
 Tintas
 `}),`
 `]}),`
 `]}),`
 
 `,a.jsxs("li",{className:"first-level categoria-offer",children:[`
 `,a.jsxs("a",{href:"https://www.atlantanet.com.br/cimento",title:"Ofertas Especiais",children:[`
 `,a.jsxs("div",{className:"category-image",children:[`
 `,a.jsx("img",{className:"lazyload loaded",alt:"Todas Categorias",src:"/assets/img-4715e72ca586.webp","data-ll-status":"loaded"}),`
 `]}),`
 `,a.jsx("div",{className:"name",children:`
 Ofertas Especiais
 `}),`
 `]}),`
 `,a.jsxs("ul",{className:"sub-list second-level",children:[`
 `,a.jsxs("div",{className:"categoria-offer__products active-slide","data-countdown":"12/05/2025 00:00:00",children:[`
 
 `,a.jsxs("div",{className:"section-showcase show",children:[`
 `,a.jsxs("div",{className:"container",children:[`
 `,a.jsxs("div",{className:"list-product swiper-container swiper-container-initialized swiper-container-horizontal swiper-container-pointer-events",children:[`
 `,a.jsx("div",{className:"list-product__items flex swiper-wrapper","aria-live":"polite"}),`
 `,a.jsxs("div",{className:"prev swiper-button-disabled",tabIndex:"-1",role:"button","aria-label":"Previous slide","aria-controls":"swiper-wrapper-5fb9360d3a4a801e","aria-disabled":"true",children:[`
 `,a.jsx("i",{className:"icon icon-arrow-left"}),`
 `]}),`
 `,a.jsxs("div",{className:"next",tabIndex:"0",role:"button","aria-label":"Next slide","aria-controls":"swiper-wrapper-5fb9360d3a4a801e","aria-disabled":"false",children:[`
 `,a.jsx("i",{className:"icon icon-arrow-right"}),`
 `]}),` 
 `,a.jsx("span",{className:"swiper-notification sf-hidden","aria-live":"assertive","aria-atomic":"true"})]}),`
 
 `]}),`
 `]}),`
 `]}),`
 `,a.jsxs("div",{className:"categoria-offer__descriptions",children:[`
 `,a.jsxs("div",{className:"categoria-offer__title",children:[`
 `,a.jsx("strong",{children:"Ofertas Imperdíveis!"}),`
 `,a.jsx("span",{children:"Corre que já está acabandooo!!"}),`
 `]}),`
 `,a.jsx("ul",{className:"categoria-offer__countdown"}),`
 `,a.jsx("a",{href:"https://www.atlantanet.com.br/cimento",className:"categoria-offer__button",children:"Ver todos os produtos"}),`
 `]}),`
 `]}),`
 `]}),`
 
 `]}),`
 `]}),`
`]})," "]}),`
 
 `,a.jsx("div",{className:"bg header-mobile search-closed",children:a.jsxs("div",{className:"bf-header-mobile",children:[a.jsxs("button",{type:"button",className:"bf-burger","aria-label":"Abrir menu","data-toggle":"overlay-shadow","data-target":"#menu-mobile",children:[a.jsx("span",{}),a.jsx("span",{}),a.jsx("span",{})]}),a.jsx("a",{className:"bf-logo-mobile",href:"/",title:"BateForte Materiais para Construção",children:a.jsx("img",{src:"/assets/img-fb172cf24605.webp",alt:"BateForte Materiais para Construção",width:"178",height:"29"})}),a.jsxs("a",{className:"cart-toggle",href:"javascript:void(0)",title:"Carrinho",children:[a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",role:"presentation","aria-hidden":"true",viewBox:"0 0 17 20",fill:"currentColor",children:a.jsx("path",{d:"M0 20V4.995l1 .006v.015l4-.002V4c0-2.484 1.274-4 3.5-4C10.518 0 12 1.48 12 4v1.012l5-.003v.985H1V19h15V6.005h1V20H0zM11 4.49C11 2.267 10.507 1 8.5 1 6.5 1 6 2.27 6 4.49V5l5-.002V4.49z",fill:"currentColor"})}),a.jsx("span",{className:"cart-quantity","data-cart":"amount",children:"0"})]})]})}),`
`]})}function Lp(){return a.jsxs("div",{className:"banner-home","data-settings":'{"stopOnHover":false,"timer":null,"isMobile":false,"speed":null,"isLoop":true,"isAutoplay":true}',children:[`
 
 `,a.jsxs("div",{className:"item",children:[`
 
 
 
 `,a.jsxs("span",{className:"item-image","aria-label":"Banner",ref:C("--padding:55.121%"),children:[`
 `,a.jsxs("picture",{children:[a.jsx("source",{media:"(max-width: 768px)",srcSet:"/assets/img-hero-bf-768.webp",width:"768",height:"423"}),a.jsx("img",{src:"/assets/img-hero-bf.webp",alt:"BateForte — tudo que sua construção precisa está aqui",width:"1689",height:"931",fetchpriority:"high"})]}),`
 `]}),`
 `]}),`
 `]})}function Mp(){return a.jsxs("div",{className:"banners-grid banners-showcase group-native-banners",children:[`
 `,a.jsxs("div",{className:"container flex f-wrap justify-between",children:[`
 `,a.jsxs("div",{className:"item",children:[`
 
 
 
 `,a.jsxs("a",{href:"https://www.atlantanet.com.br/loja/clic.php?loja=1018104&banner=188",className:"item-image","aria-label":"Banner",ref:C("--padding:47.244094488189%"),children:[`
 `,a.jsx("img",{loading:"lazy",src:"/assets/img-3c1edb97cf21.webp",alt:"Banner",width:"635",height:"300"}),`
 `]}),`
 `]}),`
 `,a.jsxs("div",{className:"item",children:[`
 
 
 
 `,a.jsxs("a",{href:"https://www.atlantanet.com.br/loja/clic.php?loja=1018104&banner=190",className:"item-image","aria-label":"Banner",ref:C("--padding:47.244094488189%"),children:[`
 `,a.jsx("img",{loading:"lazy",src:"/assets/img-c5ecad89b44e.webp",alt:"Banner",width:"635",height:"300"}),`
 `]}),`
 `]}),`
 `]}),`
 `]})}function Ip(){return a.jsxs("div",{className:"banners-grid banners-showcase group-native-banners",children:[`
 `,a.jsxs("div",{className:"container flex f-wrap justify-between",children:[`
 `,a.jsxs("div",{className:"item",children:[`
 
 
 
 `,a.jsxs("a",{href:"https://www.atlantanet.com.br/loja/clic.php?loja=1018104&banner=192",className:"item-image","aria-label":"Banner",ref:C("--padding:15.625%"),children:[`
 `,a.jsx("img",{loading:"lazy",src:"/assets/img-ab0d38a2f174.webp",alt:"Banner",width:"1920",height:"300"}),`
 `]}),`
 `]}),`
 `]}),`
 `]})}function Rp(){return null}function Op(){return a.jsx("div",{className:"banners-grid banners-showcase md-none group-native-banners sf-hidden",children:`
 
 `})}function Fp(){return a.jsxs("div",{className:"brands-custom active-slide",children:[`
 `,a.jsxs("div",{className:"brands-custom__title section-header",children:[`
 `,a.jsx("h2",{className:"title-section",children:`Escolha pela Marca
 `})]}),`
 `,a.jsxs("div",{className:"container swiper-container swiper-container-initialized swiper-container-horizontal swiper-container-pointer-events",children:[`
 `,a.jsxs("div",{className:"brands-custom__content swiper-wrapper",id:"swiper-wrapper-f8de9e1099f082abe","aria-live":"off",ref:C("transition-duration:0ms;transform:translate3d(0px,0px,0px)"),children:[`
 
 
 
 
 `,a.jsxs("div",{className:"item swiper-slide swiper-slide-active",role:"group","aria-label":"1 / 8",ref:C("width:151.667px;margin-right:60px"),children:[`
 `,a.jsxs("a",{href:"https://www.atlantanet.com.br/brasilit","aria-label":"Brasilit",children:[`
 `,a.jsxs("div",{className:"brands-custom__image",children:[`
 `,a.jsx("img",{loading:"lazy",className:"lazyload loaded",alt:"Brasilit",src:"/assets/img-feae831e8be8.webp","data-ll-status":"loaded"}),`
 `]}),`
 `]}),`
 `]}),`
 
 
 
 
 `,a.jsxs("div",{className:"item swiper-slide swiper-slide-next",role:"group","aria-label":"2 / 8",ref:C("width:151.667px;margin-right:60px"),children:[`
 `,a.jsxs("a",{href:"https://www.atlantanet.com.br/fortlev","aria-label":"Fortlev",children:[`
 `,a.jsxs("div",{className:"brands-custom__image",children:[`
 `,a.jsx("img",{loading:"lazy",className:"lazyload loaded",alt:"Fortlev",src:"/assets/img-7acd537651c2.webp","data-ll-status":"loaded"}),`
 `]}),`
 `]}),`
 `]}),`
 
 
 
 
 `,a.jsxs("div",{className:"item swiper-slide",role:"group","aria-label":"3 / 8",ref:C("width:151.667px;margin-right:60px"),children:[`
 `,a.jsxs("a",{href:"https://www.atlantanet.com.br/csn","aria-label":"CSN",children:[`
 `,a.jsxs("div",{className:"brands-custom__image",children:[`
 `,a.jsx("img",{loading:"lazy",className:"lazyload loaded",alt:"CSN",src:"/assets/img-75c30ec81aa4.webp","data-ll-status":"loaded"}),`
 `]}),`
 `]}),`
 `]}),`
 
 
 
 
 `,a.jsxs("div",{className:"item swiper-slide",role:"group","aria-label":"4 / 8",ref:C("width:151.667px;margin-right:60px"),children:[`
 `,a.jsxs("a",{href:"https://www.atlantanet.com.br/quartzolit","aria-label":"Quartzolit",children:[`
 `,a.jsxs("div",{className:"brands-custom__image",children:[`
 `,a.jsx("img",{loading:"lazy",className:"lazyload loaded",alt:"Quartzolit",src:"/assets/img-b9a7051c7a86.webp","data-ll-status":"loaded"}),`
 `]}),`
 `]}),`
 `]}),`
 
 
 
 
 `,a.jsxs("div",{className:"item swiper-slide",role:"group","aria-label":"5 / 8",ref:C("width:151.667px;margin-right:60px"),children:[`
 `,a.jsxs("a",{href:"https://www.atlantanet.com.br/suvinil","aria-label":"Suvinil",children:[`
 `,a.jsxs("div",{className:"brands-custom__image",children:[`
 `,a.jsx("img",{loading:"lazy",className:"lazyload loaded",alt:"Suvinil",src:"/assets/img-7b61390d7b7d.webp","data-ll-status":"loaded"}),`
 `]}),`
 `]}),`
 `]}),`
 
 
 
 
 `,a.jsxs("div",{className:"item swiper-slide",role:"group","aria-label":"6 / 8",ref:C("width:151.667px;margin-right:60px"),children:[`
 `,a.jsxs("a",{href:"https://www.atlantanet.com.br/tigre","aria-label":"Tigre",children:[`
 `,a.jsxs("div",{className:"brands-custom__image",children:[`
 `,a.jsx("img",{loading:"lazy",className:"lazyload loaded",alt:"Tigre",src:"/assets/img-d6da4ebad948.webp","data-ll-status":"loaded"}),`
 `]}),`
 `]}),`
 `]}),`
 
 
 
 
 `,a.jsxs("div",{className:"item swiper-slide",role:"group","aria-label":"7 / 8",ref:C("width:151.667px;margin-right:60px"),children:[`
 `,a.jsxs("a",{href:"https://www.atlantanet.com.br/vedacit","aria-label":"Vedacit",children:[`
 `,a.jsxs("div",{className:"brands-custom__image",children:[`
 `,a.jsx("img",{loading:"lazy",className:"lazyload loaded",alt:"Vedacit",src:"/assets/img-12ea9f63e4e9.webp","data-ll-status":"loaded"}),`
 `]}),`
 `]}),`
 `]}),`
 
 
 
 
 `,a.jsxs("div",{className:"item swiper-slide",role:"group","aria-label":"8 / 8",ref:C("width:151.667px;margin-right:60px"),children:[`
 `,a.jsxs("a",{href:"https://www.atlantanet.com.br/votorantim","aria-label":"Votorantim",children:[`
 `,a.jsxs("div",{className:"brands-custom__image",children:[`
 `,a.jsx("img",{loading:"lazy",className:"lazyload loaded",alt:"Votorantim",src:"/assets/img-9892a82c262d.webp","data-ll-status":"loaded"}),`
 `]}),`
 `]}),`
 `]}),`
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 `]}),`
 `,a.jsxs("div",{className:"prev swiper-button-disabled",tabIndex:"-1",role:"button","aria-label":"Previous slide","aria-controls":"swiper-wrapper-f8de9e1099f082abe","aria-disabled":"true",children:[`
 `,a.jsx("i",{className:"icon icon-arrow-left"}),`
 `]}),`
 `,a.jsxs("div",{className:"next",tabIndex:"0",role:"button","aria-label":"Next slide","aria-controls":"swiper-wrapper-f8de9e1099f082abe","aria-disabled":"false",children:[`
 `,a.jsx("i",{className:"icon icon-arrow-right"}),`
 `]}),`
 `,a.jsx("div",{className:"dots swiper-pagination-clickable swiper-pagination-bullets sf-hidden"}),`
 `,a.jsx("span",{className:"swiper-notification sf-hidden","aria-live":"assertive","aria-atomic":"true"})]}),`
`]})}function Ap(){return a.jsxs("div",{className:"buy-sizes not-slide-drag active-slide",children:[`
 `,a.jsxs("div",{className:"buy-sizes__title section-header",children:[`
 `,a.jsx("h2",{className:"title-section",children:"Navegue por Categorias"}),`
 `]}),`
 `,a.jsxs("div",{className:"container swiper-container swiper-container-initialized swiper-container-horizontal swiper-container-pointer-events",children:[`
 `,a.jsxs("div",{className:"buy-sizes__content swiper-wrapper",id:"swiper-wrapper-3dc22a765cde9e3f","aria-live":"off",children:[`
 
 
 
 
 `,a.jsxs("div",{className:"item swiper-slide swiper-slide-active",role:"group","aria-label":"1 / 6",ref:C("width:190px;margin-right:30px"),children:[`
 `,a.jsxs("a",{href:"https://www.atlantanet.com.br/cimento",children:[`
 `,a.jsxs("div",{className:"buy-sizes__image",children:[`
 `,a.jsx("img",{loading:"lazy",className:"lazyload loaded",alt:"Compre por Categorias - Cimentos",src:"/assets/img-04964a6b18a0.webp","data-ll-status":"loaded"}),`
 `]}),`
 `,a.jsx("div",{className:"buy-sizes__name",children:`
 Cimentos
 `}),`
 `]}),`
 `]}),`
 
 
 
 
 
 `,a.jsxs("div",{className:"item swiper-slide swiper-slide-next",role:"group","aria-label":"2 / 6",ref:C("width:190px;margin-right:30px"),children:[`
 `,a.jsxs("a",{href:"https://www.atlantanet.com.br/eletrica",children:[`
 `,a.jsxs("div",{className:"buy-sizes__image",children:[`
 `,a.jsx("img",{loading:"lazy",className:"lazyload loaded",alt:"Compre por Categorias - Elétrica",src:"/assets/img-e1cea5e6bf30.webp","data-ll-status":"loaded"}),`
 `]}),`
 `,a.jsx("div",{className:"buy-sizes__name",children:`
 Elétrica
 `}),`
 `]}),`
 `]}),`
 
 
 
 
 
 `,a.jsxs("div",{className:"item swiper-slide",role:"group","aria-label":"3 / 6",ref:C("width:190px;margin-right:30px"),children:[`
 `,a.jsxs("a",{href:"https://www.atlantanet.com.br/piso-e-revestimos",children:[`
 `,a.jsxs("div",{className:"buy-sizes__image",children:[`
 `,a.jsx("img",{loading:"lazy",className:"lazyload loaded",alt:"Compre por Categorias - Pisos",src:"/assets/img-794b40ba5a64.webp","data-ll-status":"loaded"}),`
 `]}),`
 `,a.jsx("div",{className:"buy-sizes__name",children:`
 Pisos
 `}),`
 `]}),`
 `]}),`
 
 
 
 
 
 `,a.jsxs("div",{className:"item swiper-slide",role:"group","aria-label":"4 / 6",ref:C("width:190px;margin-right:30px"),children:[`
 `,a.jsxs("a",{href:"https://www.atlantanet.com.br/telha",children:[`
 `,a.jsxs("div",{className:"buy-sizes__image",children:[`
 `,a.jsx("img",{loading:"lazy",className:"lazyload loaded",alt:"Compre por Categorias - Telhas",src:"/assets/img-1df34a704890.webp","data-ll-status":"loaded"}),`
 `]}),`
 `,a.jsx("div",{className:"buy-sizes__name",children:`
 Telhas
 `}),`
 `]}),`
 `]}),`
 
 
 
 
 
 `,a.jsxs("div",{className:"item swiper-slide",role:"group","aria-label":"5 / 6",ref:C("width:190px;margin-right:30px"),children:[`
 `,a.jsxs("a",{href:"https://www.atlantanet.com.br/tintas-eacessorios",children:[`
 `,a.jsxs("div",{className:"buy-sizes__image",children:[`
 `,a.jsx("img",{loading:"lazy",className:"lazyload loaded",alt:"Compre por Categorias - Tinta",src:"/assets/img-b8f9cd5052fe.webp","data-ll-status":"loaded"}),`
 `]}),`
 `,a.jsx("div",{className:"buy-sizes__name",children:`
 Tinta
 `}),`
 `]}),`
 `]}),`
 
 
 
 
 
 `,a.jsxs("div",{className:"item swiper-slide",role:"group","aria-label":"6 / 6",ref:C("width:190px;margin-right:30px"),children:[`
 `,a.jsxs("a",{href:"https://www.atlantanet.com.br/ferramentas",children:[`
 `,a.jsxs("div",{className:"buy-sizes__image",children:[`
 `,a.jsx("img",{loading:"lazy",className:"lazyload loaded",alt:"Compre por Categorias - Ferramentas",src:"/assets/img-79da79c22f83.webp","data-ll-status":"loaded"}),`
 `]}),`
 `,a.jsx("div",{className:"buy-sizes__name",children:`
 Ferramentas
 `}),`
 `]}),`
 `]}),`
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 `]}),`
 `,a.jsx("div",{className:"prev swiper-button-disabled sf-hidden",tabIndex:"-1",role:"button","aria-label":"Previous slide","aria-controls":"swiper-wrapper-3dc22a765cde9e3f","aria-disabled":"true",children:`
 
 `}),`
 `,a.jsx("div",{className:"next swiper-button-disabled sf-hidden",tabIndex:"-1",role:"button","aria-label":"Next slide","aria-controls":"swiper-wrapper-3dc22a765cde9e3f","aria-disabled":"true",children:`
 
 `}),`
 `,a.jsx("div",{className:"dots swiper-pagination-clickable swiper-pagination-bullets sf-hidden"}),`
 `,a.jsx("span",{className:"swiper-notification sf-hidden","aria-live":"assertive","aria-atomic":"true"})]}),`
`]})}function Dp(){return a.jsxs("div",{className:"floating-whatsapp on-right",children:[`
 `,a.jsxs("a",{href:"https://wa.me/5511974659658?text=Estou%20visitando%20sua%20loja%20tenho%20uma%20d%C3%BAvida.%20Poderia%20me%20ajudar%3F",target:"_blank",rel:"noopener noreferrer","data-test":"dúvida",children:[`
 `,a.jsx("i",{className:"icon icon-whatsapp"}),`
 `]}),`
 `]})}function Bp(){return a.jsxs("div",{className:"template-instagram not-slide-drag active-slide",children:[`
 `,a.jsxs("div",{className:"section-header",children:[`
 `,a.jsxs("h2",{className:"title-section",children:[`
 `,a.jsx("a",{href:"https://www.instagram.com/bateforte_/",target:"_blank",rel:"noopener noreferrer",children:`
 Siga-nos no Instagram @bateforte_
 `}),`
 `]}),`
 `]}),`
 
 
 `,a.jsxs("div",{className:"container swiper-container swiper-container-initialized swiper-container-horizontal swiper-container-pointer-events",children:[`
 `,a.jsxs("div",{className:"swiper-wrapper",id:"instafeed","aria-live":"off",children:[`
 
 
 `,a.jsxs("div",{className:"item swiper-slide swiper-slide-active",role:"group","aria-label":"1 / 4",ref:C("width:303.75px;margin-right:25px"),children:[`
 `,a.jsxs("a",{href:"https://www.instagram.com/bateforte_/",target:"_blank",rel:"noopener noreferrer",children:[`
 `,a.jsxs("div",{children:[`
 `,a.jsx("img",{loading:"lazy",className:"lazyload loaded",alt:"Postagem do Instagram",src:"/assets/img-a33168fee286.webp","data-ll-status":"loaded"}),`
 `]}),`
 `]}),`
 `]}),`
 
 
 `,a.jsxs("div",{className:"item swiper-slide swiper-slide-next",role:"group","aria-label":"2 / 4",ref:C("width:303.75px;margin-right:25px"),children:[`
 `,a.jsxs("a",{href:"https://www.instagram.com/bateforte_/",target:"_blank",rel:"noopener noreferrer",children:[`
 `,a.jsxs("div",{children:[`
 `,a.jsx("img",{loading:"lazy",className:"lazyload loaded",alt:"Postagem do Instagram",src:"/assets/img-57373056cbc2.webp","data-ll-status":"loaded"}),`
 `]}),`
 `]}),`
 `]}),`
 
 
 `,a.jsxs("div",{className:"item swiper-slide",role:"group","aria-label":"3 / 4",ref:C("width:303.75px;margin-right:25px"),children:[`
 `,a.jsxs("a",{href:"https://www.instagram.com/bateforte_/",target:"_blank",rel:"noopener noreferrer",children:[`
 `,a.jsxs("div",{children:[`
 `,a.jsx("img",{loading:"lazy",className:"lazyload loaded",alt:"Postagem do Instagram",src:"/assets/img-734b73c0449b.webp","data-ll-status":"loaded"}),`
 `]}),`
 `]}),`
 `]}),`
 
 
 `,a.jsxs("div",{className:"item swiper-slide",role:"group","aria-label":"4 / 4",ref:C("width:303.75px;margin-right:25px"),children:[`
 `,a.jsxs("a",{href:"https://www.instagram.com/bateforte_/",target:"_blank",rel:"noopener noreferrer",children:[`
 `,a.jsxs("div",{children:[`
 `,a.jsx("img",{loading:"lazy",className:"lazyload loaded",alt:"Postagem do Instagram",src:"/assets/img-d6690144e70d.webp","data-ll-status":"loaded"}),`
 `]}),`
 `]}),`
 `]}),`
 
 
 
 
 
 
 
 
 `]}),`
 `,a.jsx("div",{className:"prev swiper-button-disabled sf-hidden",tabIndex:"-1",role:"button","aria-label":"Previous slide","aria-controls":"instafeed","aria-disabled":"true",children:`
 
 `}),`
 `,a.jsx("div",{className:"next swiper-button-disabled sf-hidden",tabIndex:"-1",role:"button","aria-label":"Next slide","aria-controls":"instafeed","aria-disabled":"true",children:`
 
 `}),`
 `,a.jsx("div",{className:"dots swiper-pagination-clickable swiper-pagination-bullets sf-hidden"}),`
 `,a.jsx("span",{className:"swiper-notification sf-hidden","aria-live":"assertive","aria-atomic":"true"})]}),`
 
`]})}function Vp(){const e=[{img:"/assets/img-promo-cimento.webp",href:"#/categoria/cimento",alt:"Cimento com preços exclusivos"},{img:"/assets/img-promo-impermeabilizantes.webp",href:"#/categoria/impermeabilizantes",alt:"Impermeabilizantes"},{img:"/assets/img-promo-tintas.webp",href:"#/categoria/tintas",alt:"Tintas e Acessórios"}];return a.jsxs("div",{className:"banners-grid mini-banners group-native-banners",children:[`
 `,a.jsx("div",{className:"container flex f-wrap justify-between",children:e.map(n=>a.jsx("div",{className:"item",children:a.jsx("a",{href:n.href,className:"item-image","aria-label":n.alt,ref:C("--padding:115.38461538462%"),children:a.jsx("img",{loading:"lazy",src:n.img,alt:n.alt,width:"416",height:"480"})})},n.href))}),`
 `]})}function Up(){return a.jsxs("div",{className:"template-partners",children:[`
 `,a.jsxs("div",{className:"section-header",children:[`
 `,a.jsx("h2",{className:"title-section",children:"Nossos Parceiros"}),`
 `]}),`
 `,a.jsxs("div",{className:"container",children:[`
 `,a.jsxs("picture",{className:"bf-partners-img",children:[a.jsx("source",{media:"(max-width: 768px)",srcSet:"/assets/img-parceiros-mobile.webp"}),a.jsx("img",{loading:"lazy",src:"/assets/img-parceiros-pc.webp",alt:"Marcas parceiras da BateForte",width:"1376",height:"768"})]}),`
 `,a.jsxs("div",{className:"bf-choose-brand",children:[`
 `,a.jsx("h3",{className:"bf-choose-brand__title",children:"Escolha pela marca"}),`
 `,a.jsx("ul",{className:"bf-brand-links"}),`
 `]}),`
 `]}),`
`]})}function $p(){return a.jsxs("div",{className:"block-custom custom-home-reviews show",children:[`
 `,a.jsxs("div",{className:"custom-home-reviews__title section-header",children:[`
 `,a.jsx("h2",{className:"title-section",children:"Avaliações dos Clientes"}),`
 `]}),`
 `,a.jsxs("div",{className:"container swiper-container swiper-container-initialized swiper-container-horizontal swiper-container-pointer-events",children:[`
 `,a.jsxs("div",{className:"block-custom__content swiper-wrapper",id:"swiper-wrapper-72b85b651a671016d","aria-live":"off",ref:C("transition-duration:0ms;transform:translate3d(0px,0px,0px)"),children:[`
 
 
 
 
 `,a.jsxs("div",{className:"item swiper-slide flex justify-center align-center swiper-slide-active",role:"group","aria-label":"1 / 4",ref:C("width:416.667px;margin-right:20px"),children:[`
 `,a.jsxs("div",{className:"custom-home-reviews__left",children:[`
 `,a.jsx("img",{loading:"lazy",className:"icon lazyload loaded",alt:"Ana Flávia",src:"/assets/img-417a65984d96.webp","data-ll-status":"loaded"}),`
 `]}),`
 `,a.jsxs("div",{className:"custom-home-reviews__right flex flex-column justify-center align-left",children:[`
 `,a.jsxs("strong",{children:[`
 Ana Flávia
 `,a.jsxs("span",{className:"custom-home-reviews__stars",children:[`
 `,a.jsx("span",{}),`
 `,a.jsx("span",{}),`
 `,a.jsx("span",{}),`
 `,a.jsx("span",{}),`
 `,a.jsx("span",{}),`
 `]}),`
 `]}),` 
 `,a.jsx("small",{children:a.jsx("b",{ref:C("color:green"),children:"Compra verificada"})}),`
 `,a.jsx("p",{children:`
 Recebi antes do prazo, veio tudo certinho!!!!
 `}),`
 `]}),`
 `]}),`
 
 
 
 
 `,a.jsxs("div",{className:"item swiper-slide flex justify-center align-center swiper-slide-next",role:"group","aria-label":"2 / 4",ref:C("width:416.667px;margin-right:20px"),children:[`
 `,a.jsxs("div",{className:"custom-home-reviews__left",children:[`
 `,a.jsx("img",{loading:"lazy",className:"icon lazyload loaded",alt:"Roberta Canari",src:"/assets/img-07a6590330da.webp","data-ll-status":"loaded"}),`
 `]}),`
 `,a.jsxs("div",{className:"custom-home-reviews__right flex flex-column justify-center align-left",children:[`
 `,a.jsxs("strong",{children:[`
 Roberta Canari
 `,a.jsxs("span",{className:"custom-home-reviews__stars",children:[`
 `,a.jsx("span",{}),`
 `,a.jsx("span",{}),`
 `,a.jsx("span",{}),`
 `,a.jsx("span",{}),`
 `,a.jsx("span",{}),`
 `]}),`
 `]}),` 
 `,a.jsx("small",{children:a.jsx("b",{ref:C("color:green"),children:"Compra verificada"})}),`
 `,a.jsx("p",{children:`
 Atendimento com o vendedor foi perfeito!
 `}),`
 `]}),`
 `]}),`
 
 
 
 
 `,a.jsxs("div",{className:"item swiper-slide flex justify-center align-center",role:"group","aria-label":"3 / 4",ref:C("width:416.667px;margin-right:20px"),children:[`
 `,a.jsxs("div",{className:"custom-home-reviews__left",children:[`
 `,a.jsx("img",{loading:"lazy",className:"icon lazyload loaded",alt:"Kelly Bitton",src:"/assets/img-8f5d66864203.webp","data-ll-status":"loaded"}),`
 `]}),`
 `,a.jsxs("div",{className:"custom-home-reviews__right flex flex-column justify-center align-left",children:[`
 `,a.jsxs("strong",{children:[`
 Kelly Bitton
 `,a.jsxs("span",{className:"custom-home-reviews__stars",children:[`
 `,a.jsx("span",{}),`
 `,a.jsx("span",{}),`
 `,a.jsx("span",{}),`
 `,a.jsx("span",{}),`
 `,a.jsx("span",{}),`
 `]}),`
 `]}),` 
 `,a.jsx("small",{children:a.jsx("b",{ref:C("color:green"),children:"Compra verificada"})}),`
 `,a.jsx("p",{children:`
 Toda vez que penso em reforma, já ligo para a BateForte.
 `}),`
 `]}),`
 `]}),`
 
 
 
 
 `,a.jsxs("div",{className:"item swiper-slide flex justify-center align-center",role:"group","aria-label":"4 / 4",ref:C("width:416.667px;margin-right:20px"),children:[`
 `,a.jsxs("div",{className:"custom-home-reviews__left",children:[`
 `,a.jsx("img",{loading:"lazy",className:"icon lazyload loaded",alt:"Henrique Soares",src:"/assets/img-02f90b3981f6.webp","data-ll-status":"loaded"}),`
 `]}),`
 `,a.jsxs("div",{className:"custom-home-reviews__right flex flex-column justify-center align-left",children:[`
 `,a.jsxs("strong",{children:[`
 Henrique Soares
 `,a.jsxs("span",{className:"custom-home-reviews__stars",children:[`
 `,a.jsx("span",{}),`
 `,a.jsx("span",{}),`
 `,a.jsx("span",{}),`
 `,a.jsx("span",{}),`
 `,a.jsx("span",{}),`
 `]}),`
 `]}),` 
 `,a.jsx("small",{children:a.jsx("b",{ref:C("color:green"),children:"Compra verificada"})}),`
 `,a.jsx("p",{children:`
 Não posso comprar os itens da reforma se não for na BateForte.
 `}),`
 `]}),`
 `]}),`
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 `]}),`
 `,a.jsxs("div",{className:"prev swiper-button-disabled",tabIndex:"-1",role:"button","aria-label":"Previous slide","aria-controls":"swiper-wrapper-72b85b651a671016d","aria-disabled":"true",children:[`
 `,a.jsx("i",{className:"icon icon-arrow-left"}),`
 `]}),`
 `,a.jsxs("div",{className:"next",tabIndex:"0",role:"button","aria-label":"Next slide","aria-controls":"swiper-wrapper-72b85b651a671016d","aria-disabled":"false",children:[`
 `,a.jsx("i",{className:"icon icon-arrow-right"}),`
 `]}),`
 `,a.jsx("div",{className:"dots swiper-pagination-clickable swiper-pagination-bullets sf-hidden"}),`
 `,a.jsx("span",{className:"swiper-notification sf-hidden","aria-live":"assertive","aria-atomic":"true"})]}),`
`]})}function Wp(){return a.jsxs("div",{className:"section-showcase not-slide-drag show","data-category":"5",type:"all_products",order:"quantity_sold",children:[`
 `,a.jsxs("div",{className:"container",children:[`
 `,a.jsxs("div",{className:"section-header",children:[`
 `,a.jsx("h2",{className:"title-section",children:"Cimento"}),`
 `]}),`
 `,a.jsxs("div",{className:"list-product flex f-wrap swiper-container swiper-container-initialized swiper-container-horizontal swiper-container-pointer-events",children:[`
 `,a.jsxs("div",{className:"list-product__items swiper-wrapper",id:"swiper-wrapper-c270dc42ad2c363f","aria-live":"off",children:[`
 
 `,a.jsxs("div",{className:"item swiper-slide swiper-slide-active",role:"group","aria-label":"1 / 4",ref:C("width:320px"),children:[`
 
 
 
`,a.jsxs("div",{className:"product upon_request has-fast-shopping",id:"product-1726670685","product-ref":"27447",children:[`
 
 `,a.jsxs("div",{className:"image",children:[`
 
 `,a.jsxs("a",{href:"https://www.atlantanet.com.br/material-de-construcao/cimento-cp-iv-rs-32-50kg-caue",className:"space-image",children:[`
 `,a.jsx("img",{loading:"lazy",className:"lazyload loaded",src:"/assets/img-3a2f50f59724.svg",alt:"Cimento Exato CP IV 50KG - Cauê","data-ll-status":"loaded",ref:C("background-blend-mode:normal!important;background-clip:content-box!important;background-position:50% 50%!important;background-color:rgba(0,0,0,0)!important;background-image:var(--sf-img-43)!important;background-size:contain!important;background-origin:content-box!important;background-repeat:no-repeat!important")}),`
 
 `]}),`
 
 
 
 
 
 `,a.jsx("div",{className:"product-tags tags-custom","data-tags-count":"0",children:`
 
 
 
 
 `}),`
 
 `]}),`
 `,a.jsxs("a",{className:"product-info",href:"https://www.atlantanet.com.br/material-de-construcao/cimento-cp-iv-rs-32-50kg-caue",children:[`
 `,a.jsxs("div",{className:"wrapper-product-name",children:[`
 `,a.jsx("h3",{className:"product-name",children:`
 Cimento Exato CP IV 50KG - Cauê
 `}),`
 `]}),`
 `,a.jsx("div",{className:"product-price",children:`
 
 
 `}),`
 
 `]}),`
 
 
 
 
 `,a.jsx("div",{className:"actions",children:`
 `}),`
 
 
 `,a.jsxs("div",{className:"buy-whatsapp buy-whatsapp--list-product",children:[`
 `,a.jsxs("a",{href:"https://api.whatsapp.com/send?phone=5511974659658&text=Ol%C3%83%C2%A1,%20gostei%20deste%20produto:%20Nome:%20Cimento%20Exato%20CP%20IV%2050KG%20-%20Cau%C3%83%C2%AA%20|%20Ref:%2027447",target:"_blank",children:[`
 `,a.jsx("i",{className:"icon icon-whatsapp v-align-middle"}),`
 Comprar pelo Whats
 `]}),`
 `]}),`
 
`]})," "]}),`
 `,a.jsxs("div",{className:"item swiper-slide swiper-slide-next",role:"group","aria-label":"2 / 4",ref:C("width:320px"),children:[`
 
 
 
`,a.jsxs("div",{className:"product upon_request has-fast-shopping",id:"product-1640657925","product-ref":"13998",children:[`
 
 `,a.jsxs("div",{className:"image",children:[`
 
 `,a.jsxs("a",{href:"https://www.atlantanet.com.br/material-de-construcao/cimento-estrutura-40kg-cpv-caue",className:"space-image",children:[`
 `,a.jsx("img",{loading:"lazy",className:"lazyload loaded",src:"/assets/img-3a2f50f59724.svg",alt:"Cimento Estrutura 40KG CP-V - Cauê","data-ll-status":"loaded",ref:C("background-blend-mode:normal!important;background-clip:content-box!important;background-position:50% 50%!important;background-color:rgba(0,0,0,0)!important;background-image:var(--sf-img-46)!important;background-size:contain!important;background-origin:content-box!important;background-repeat:no-repeat!important")}),`
 
 `]}),`
 
 
 
 
 
 `,a.jsx("div",{className:"product-tags tags-custom","data-tags-count":"0",children:`
 
 
 
 
 `}),`
 
 `]}),`
 `,a.jsxs("a",{className:"product-info",href:"https://www.atlantanet.com.br/material-de-construcao/cimento-estrutura-40kg-cpv-caue",children:[`
 `,a.jsxs("div",{className:"wrapper-product-name",children:[`
 `,a.jsx("h3",{className:"product-name",children:`
 Cimento Estrutura 40KG CP-V - Cauê
 `}),`
 `]}),`
 `,a.jsx("div",{className:"product-price",children:`
 
 
 `}),`
 
 `]}),`
 
 
 
 
 `,a.jsx("div",{className:"actions",children:`
 `}),`
 
 
 `,a.jsxs("div",{className:"buy-whatsapp buy-whatsapp--list-product",children:[`
 `,a.jsxs("a",{href:"https://api.whatsapp.com/send?phone=5511974659658&text=Ol%C3%83%C2%A1,%20gostei%20deste%20produto:%20Nome:%20Cimento%20Estrutura%2040KG%20CP-V%20-%20Cau%C3%83%C2%AA%20|%20Ref:%2013998",target:"_blank",children:[`
 `,a.jsx("i",{className:"icon icon-whatsapp v-align-middle"}),`
 Comprar pelo Whats
 `]}),`
 `]}),`
 
`]})," "]}),`
 `,a.jsxs("div",{className:"item swiper-slide",role:"group","aria-label":"3 / 4",ref:C("width:320px"),children:[`
 
 
 
`,a.jsxs("div",{className:"product upon_request has-fast-shopping",id:"product-595912856","product-ref":"10009",children:[`
 
 `,a.jsxs("div",{className:"image",children:[`
 
 `,a.jsxs("a",{href:"https://www.atlantanet.com.br/material-de-construcao/cimento-todas-obras-50kg-cpii-votoran",className:"space-image",children:[`
 `,a.jsx("img",{loading:"lazy",className:"lazyload loaded",src:"/assets/img-3a2f50f59724.svg",alt:"Cimento Todas As Obras 50KG CPII - Votoran","data-ll-status":"loaded",ref:C("background-blend-mode:normal!important;background-clip:content-box!important;background-position:50% 50%!important;background-color:rgba(0,0,0,0)!important;background-image:var(--sf-img-44)!important;background-size:contain!important;background-origin:content-box!important;background-repeat:no-repeat!important")}),`
 
 `]}),`
 
 
 
 
 
 `,a.jsx("div",{className:"product-tags tags-custom","data-tags-count":"0",children:`
 
 
 
 
 `}),`
 
 `]}),`
 `,a.jsxs("a",{className:"product-info",href:"https://www.atlantanet.com.br/material-de-construcao/cimento-todas-obras-50kg-cpii-votoran",children:[`
 `,a.jsxs("div",{className:"wrapper-product-name",children:[`
 `,a.jsx("h3",{className:"product-name",children:`
 Cimento Todas As Obras 50KG CPII - Votoran
 `}),`
 `]}),`
 `,a.jsx("div",{className:"product-price",children:`
 
 
 `}),`
 
 `]}),`
 
 
 
 
 `,a.jsx("div",{className:"actions",children:`
 `}),`
 
 
 `,a.jsxs("div",{className:"buy-whatsapp buy-whatsapp--list-product",children:[`
 `,a.jsxs("a",{href:"https://api.whatsapp.com/send?phone=5511974659658&text=Ol%C3%83%C2%A1,%20gostei%20deste%20produto:%20Nome:%20Cimento%20Todas%20As%20Obras%2050KG%20CPII%20-%20Votoran%20|%20Ref:%2010009",target:"_blank",children:[`
 `,a.jsx("i",{className:"icon icon-whatsapp v-align-middle"}),`
 Comprar pelo Whats
 `]}),`
 `]}),`
 
`]})," "]}),`
 `,a.jsxs("div",{className:"item swiper-slide",role:"group","aria-label":"4 / 4",ref:C("width:320px"),children:[`
 
 
 
`,a.jsxs("div",{className:"product upon_request has-fast-shopping",id:"product-2002283887","product-ref":"22114",children:[`
 
 `,a.jsxs("div",{className:"image",children:[`
 
 `,a.jsxs("a",{href:"https://www.atlantanet.com.br/material-de-construcao/cimento-uso-geral-50kg-cpii-caue",className:"space-image",children:[`
 `,a.jsx("img",{loading:"lazy",className:"lazyload loaded",src:"/assets/img-3a2f50f59724.svg",alt:"Cimento Uso Geral 50 Kg CPII - Cauê","data-ll-status":"loaded",ref:C("background-blend-mode:normal!important;background-clip:content-box!important;background-position:50% 50%!important;background-color:rgba(0,0,0,0)!important;background-image:var(--sf-img-47)!important;background-size:contain!important;background-origin:content-box!important;background-repeat:no-repeat!important")}),`
 
 `]}),`
 
 
 
 
 
 `,a.jsx("div",{className:"product-tags tags-custom","data-tags-count":"0",children:`
 
 
 
 
 `}),`
 
 `]}),`
 `,a.jsxs("a",{className:"product-info",href:"https://www.atlantanet.com.br/material-de-construcao/cimento-uso-geral-50kg-cpii-caue",children:[`
 `,a.jsxs("div",{className:"wrapper-product-name",children:[`
 `,a.jsx("h3",{className:"product-name",children:`
 Cimento Uso Geral 50 Kg CPII - Cauê
 `}),`
 `]}),`
 `,a.jsx("div",{className:"product-price",children:`
 
 
 `}),`
 
 `]}),`
 
 
 
 
 `,a.jsx("div",{className:"actions",children:`
 `}),`
 
 
 `,a.jsxs("div",{className:"buy-whatsapp buy-whatsapp--list-product",children:[`
 `,a.jsxs("a",{href:"https://api.whatsapp.com/send?phone=5511974659658&text=Ol%C3%83%C2%A1,%20gostei%20deste%20produto:%20Nome:%20Cimento%20Uso%20Geral%2050%20Kg%20CPII%20-%20Cau%C3%83%C2%AA%20|%20Ref:%2022114",target:"_blank",children:[`
 `,a.jsx("i",{className:"icon icon-whatsapp v-align-middle"}),`
 Comprar pelo Whats
 `]}),`
 `]}),`
 
`]})," "]}),`
 `]}),`
 
 `,a.jsx("div",{className:"prev swiper-button-disabled sf-hidden",tabIndex:"-1",role:"button","aria-label":"Previous slide","aria-controls":"swiper-wrapper-c270dc42ad2c363f","aria-disabled":"true",children:`
 
 `}),`
 `,a.jsx("div",{className:"next swiper-button-disabled sf-hidden",tabIndex:"-1",role:"button","aria-label":"Next slide","aria-controls":"swiper-wrapper-c270dc42ad2c363f","aria-disabled":"true",children:`
 
 `}),` 
 `,a.jsx("div",{className:"dots swiper-pagination-clickable swiper-pagination-bullets sf-hidden"}),`
 `,a.jsx("span",{className:"swiper-notification sf-hidden","aria-live":"assertive","aria-atomic":"true"})]}),`
 `]}),`
 `]})}function Hp(){return a.jsxs("div",{className:"section-showcase not-slide-drag show","data-category":"",type:"featured",order:"hot",children:[`
 `,a.jsxs("div",{className:"container",children:[`
 `,a.jsxs("div",{className:"section-header",children:[`
 `,a.jsx("h2",{className:"title-section",children:"Destaques"}),`
 `]}),`
 `,a.jsxs("div",{className:"list-product flex f-wrap swiper-container swiper-container-initialized swiper-container-horizontal swiper-container-pointer-events",children:[`
 `,a.jsxs("div",{className:"list-product__items swiper-wrapper",id:"swiper-wrapper-5b101065e6776ee10c","aria-live":"off",children:[`
 
 `,a.jsxs("div",{className:"item swiper-slide swiper-slide-active",role:"group","aria-label":"1 / 4",ref:C("width:320px"),children:[`
 
 
 
`,a.jsxs("div",{className:"product upon_request has-fast-shopping",id:"product-1773442570","product-ref":"ref-empty",children:[`
 
 `,a.jsxs("div",{className:"image",children:[`
 
 `,a.jsxs("a",{href:"https://www.atlantanet.com.br/piso-e-revestimos/piso-duragres-copan-cinza-acetinado-71x71-cx2-52m",className:"space-image",children:[`
 `,a.jsx("img",{loading:"lazy",className:"lazyload loaded",src:"/assets/img-2503958638b0.webp",alt:"Piso Duragres Copan Cinza Acetinado 71X71 Cx2,52M²","data-ll-status":"loaded"}),`
 
 `]}),`
 
 
 
 
 
 `,a.jsxs("div",{className:"product-tags tags-custom","data-tags-count":"1",children:[`
 
 `,a.jsxs("div",{className:"tag featured",children:[`
 `,a.jsx("span",{className:"tag-text",children:"Destaque"}),`
 `]}),`
 
 
 
 `]}),`
 
 `]}),`
 `,a.jsxs("a",{className:"product-info",href:"https://www.atlantanet.com.br/piso-e-revestimos/piso-duragres-copan-cinza-acetinado-71x71-cx2-52m",children:[`
 `,a.jsxs("div",{className:"wrapper-product-name",children:[`
 `,a.jsx("h3",{className:"product-name",children:`
 Piso Duragres Copan Cinza Acetinado 71X71 Cx2,52M²
 `}),`
 `]}),`
 `,a.jsx("div",{className:"product-price",children:`
 
 
 `}),`
 
 `]}),`
 
 
 
 
 `,a.jsx("div",{className:"actions",children:`
 `}),`
 
 
 `,a.jsxs("div",{className:"buy-whatsapp buy-whatsapp--list-product",children:[`
 `,a.jsxs("a",{href:"https://api.whatsapp.com/send?phone=5511974659658&text=Ol%C3%83%C2%A1,%20gostei%20deste%20produto:%20Nome:%20Piso%20Duragres%20Copan%20Cinza%20Acetinado%2071X71%20Cx2,52M%C3%82%C2%B2%20|%20Ref:",target:"_blank",children:[`
 `,a.jsx("i",{className:"icon icon-whatsapp v-align-middle"}),`
 Comprar pelo Whats
 `]}),`
 `]}),`
 
`]})," "]}),`
 `,a.jsxs("div",{className:"item swiper-slide swiper-slide-next",role:"group","aria-label":"2 / 4",ref:C("width:320px"),children:[`
 
 
 
`,a.jsxs("div",{className:"product upon_request has-fast-shopping",id:"product-774241422","product-ref":"ref-empty",children:[`
 
 `,a.jsxs("div",{className:"image",children:[`
 
 `,a.jsxs("a",{href:"https://www.atlantanet.com.br/piso-e-revestimos/piso-durag-copan-nude-in-71x71",className:"space-image",children:[`
 `,a.jsx("img",{loading:"lazy",className:"lazyload loaded",src:"/assets/img-40ad59cb890a.webp",alt:"Piso Durag Copan Nude In 71X71","data-ll-status":"loaded"}),`
 
 `]}),`
 
 
 
 
 
 `,a.jsxs("div",{className:"product-tags tags-custom","data-tags-count":"1",children:[`
 
 `,a.jsxs("div",{className:"tag featured",children:[`
 `,a.jsx("span",{className:"tag-text",children:"Destaque"}),`
 `]}),`
 
 
 
 `]}),`
 
 `]}),`
 `,a.jsxs("a",{className:"product-info",href:"https://www.atlantanet.com.br/piso-e-revestimos/piso-durag-copan-nude-in-71x71",children:[`
 `,a.jsxs("div",{className:"wrapper-product-name",children:[`
 `,a.jsx("h3",{className:"product-name",children:`
 Piso Durag Copan Nude In 71X71
 `}),`
 `]}),`
 `,a.jsx("div",{className:"product-price",children:`
 
 
 `}),`
 
 `]}),`
 
 
 
 
 `,a.jsx("div",{className:"actions",children:`
 `}),`
 
 
 `,a.jsxs("div",{className:"buy-whatsapp buy-whatsapp--list-product",children:[`
 `,a.jsxs("a",{href:"https://api.whatsapp.com/send?phone=5511974659658&text=Ol%C3%83%C2%A1,%20gostei%20deste%20produto:%20Nome:%20Piso%20Durag%20Copan%20Nude%20In%2071X71%20|%20Ref:",target:"_blank",children:[`
 `,a.jsx("i",{className:"icon icon-whatsapp v-align-middle"}),`
 Comprar pelo Whats
 `]}),`
 `]}),`
 
`]})," "]}),`
 `,a.jsxs("div",{className:"item swiper-slide",role:"group","aria-label":"3 / 4",ref:C("width:320px"),children:[`
 
 
 
`,a.jsxs("div",{className:"product upon_request has-fast-shopping",id:"product-483712947","product-ref":"ref-empty",children:[`
 
 `,a.jsxs("div",{className:"image",children:[`
 
 `,a.jsxs("a",{href:"https://www.atlantanet.com.br/piso-e-revestimos/piso-durag-alvorada-grafite-in-71x71",className:"space-image",children:[`
 `,a.jsx("img",{loading:"lazy",className:"lazyload loaded",src:"/assets/img-bf740917652b.webp",alt:"Piso Durag Alvorada Grafite In 71x71","data-ll-status":"loaded"}),`
 
 `]}),`
 
 
 
 
 
 `,a.jsxs("div",{className:"product-tags tags-custom","data-tags-count":"1",children:[`
 
 `,a.jsxs("div",{className:"tag featured",children:[`
 `,a.jsx("span",{className:"tag-text",children:"Destaque"}),`
 `]}),`
 
 
 
 `]}),`
 
 `]}),`
 `,a.jsxs("a",{className:"product-info",href:"https://www.atlantanet.com.br/piso-e-revestimos/piso-durag-alvorada-grafite-in-71x71",children:[`
 `,a.jsxs("div",{className:"wrapper-product-name",children:[`
 `,a.jsx("h3",{className:"product-name",children:`
 Piso Durag Alvorada Grafite In 71x71
 `}),`
 `]}),`
 `,a.jsx("div",{className:"product-price",children:`
 
 
 `}),`
 
 `]}),`
 
 
 
 
 `,a.jsx("div",{className:"actions",children:`
 `}),`
 
 
 `,a.jsxs("div",{className:"buy-whatsapp buy-whatsapp--list-product",children:[`
 `,a.jsxs("a",{href:"https://api.whatsapp.com/send?phone=5511974659658&text=Ol%C3%83%C2%A1,%20gostei%20deste%20produto:%20Nome:%20Piso%20Durag%20Alvorada%20Grafite%20In%2071x71%20|%20Ref:",target:"_blank",children:[`
 `,a.jsx("i",{className:"icon icon-whatsapp v-align-middle"}),`
 Comprar pelo Whats
 `]}),`
 `]}),`
 
`]})," "]}),`
 `,a.jsxs("div",{className:"item swiper-slide",role:"group","aria-label":"4 / 4",ref:C("width:320px"),children:[`
 
 
 
`,a.jsxs("div",{className:"product upon_request has-fast-shopping",id:"product-571151898","product-ref":"ref-empty",children:[`
 
 `,a.jsxs("div",{className:"image",children:[`
 
 `,a.jsxs("a",{href:"https://www.atlantanet.com.br/piso-e-revestimos/copan-rustico-acetinado-71x71",className:"space-image",children:[`
 `,a.jsx("img",{loading:"lazy",className:"lazyload loaded",src:"/assets/img-be907d86f80c.webp",alt:"copan rustico acetinado 71x71","data-ll-status":"loaded"}),`
 
 `]}),`
 
 
 
 
 
 `,a.jsxs("div",{className:"product-tags tags-custom","data-tags-count":"1",children:[`
 
 `,a.jsxs("div",{className:"tag featured",children:[`
 `,a.jsx("span",{className:"tag-text",children:"Destaque"}),`
 `]}),`
 
 
 
 `]}),`
 
 `]}),`
 `,a.jsxs("a",{className:"product-info",href:"https://www.atlantanet.com.br/piso-e-revestimos/copan-rustico-acetinado-71x71",children:[`
 `,a.jsxs("div",{className:"wrapper-product-name",children:[`
 `,a.jsx("h3",{className:"product-name",children:`
 copan rustico acetinado 71x71
 `}),`
 `]}),`
 `,a.jsx("div",{className:"product-price",children:`
 
 
 `}),`
 
 `]}),`
 
 
 
 
 `,a.jsx("div",{className:"actions",children:`
 `}),`
 
 
 `,a.jsxs("div",{className:"buy-whatsapp buy-whatsapp--list-product",children:[`
 `,a.jsxs("a",{href:"https://api.whatsapp.com/send?phone=5511974659658&text=Ol%C3%83%C2%A1,%20gostei%20deste%20produto:%20Nome:%20copan%20rustico%20acetinado%2071x71%20|%20Ref:",target:"_blank",children:[`
 `,a.jsx("i",{className:"icon icon-whatsapp v-align-middle"}),`
 Comprar pelo Whats
 `]}),`
 `]}),`
 
`]})," "]}),`
 `]}),`
 
 `,a.jsx("div",{className:"prev swiper-button-disabled sf-hidden",tabIndex:"-1",role:"button","aria-label":"Previous slide","aria-controls":"swiper-wrapper-5b101065e6776ee10c","aria-disabled":"true",children:`
 
 `}),`
 `,a.jsx("div",{className:"next swiper-button-disabled sf-hidden",tabIndex:"-1",role:"button","aria-label":"Next slide","aria-controls":"swiper-wrapper-5b101065e6776ee10c","aria-disabled":"true",children:`
 
 `}),` 
 `,a.jsx("div",{className:"dots swiper-pagination-clickable swiper-pagination-bullets sf-hidden"}),`
 `,a.jsx("span",{className:"swiper-notification sf-hidden","aria-live":"assertive","aria-atomic":"true"})]}),`
 `]}),`
 `]})}function Qp(){return a.jsxs("div",{className:"section-showcase not-slide-drag show",children:[`
 `,a.jsxs("div",{className:"container",children:[`
 
 `,a.jsxs("div",{className:"section-header",children:[`
 `,a.jsx("h2",{className:"title-section",children:`
 Novidades
 `}),`
 `]}),`
 
 `,a.jsxs("div",{className:"list-product flex f-wrap swiper-container swiper-container-initialized swiper-container-horizontal swiper-container-pointer-events",children:[`
 `,a.jsxs("div",{className:"list-product__items swiper-wrapper",id:"swiper-wrapper-1e019d2aa416c8a3","aria-live":"off",children:[`
 `,a.jsxs("div",{className:"item swiper-slide swiper-slide-active",role:"group","aria-label":"1 / 4",ref:C("width:320px"),children:[`
 
 
 
`,a.jsxs("div",{className:"product upon_request has-fast-shopping",id:"product-1772841134","product-ref":"29920",children:[`
 
 `,a.jsxs("div",{className:"image",children:[`
 
 `,a.jsxs("a",{href:"https://www.atlantanet.com.br/eletrica/fios-e-cabos/cabo-flexivel-2-5mm-100m-vermelho-sil-fios",className:"space-image",children:[`
 `,a.jsx("img",{loading:"lazy",className:"lazyload loaded",src:"/assets/img-e88379d3964a.webp",alt:"Cabo Flexível  2,5MM 100M Vermelho - Sil Fios","data-ll-status":"loaded"}),`
 
 `]}),`
 
 
 
 
 
 `,a.jsxs("div",{className:"product-tags tags-custom","data-tags-count":"1",children:[`
 `,a.jsxs("div",{className:"tag new",children:[`
 `,a.jsx("span",{className:"tag-text",children:"Lançamento"}),`
 `]}),`
 
 
 
 
 `]}),`
 
 `]}),`
 `,a.jsxs("a",{className:"product-info",href:"https://www.atlantanet.com.br/eletrica/fios-e-cabos/cabo-flexivel-2-5mm-100m-vermelho-sil-fios",children:[`
 `,a.jsxs("div",{className:"wrapper-product-name",children:[`
 `,a.jsx("h3",{className:"product-name",children:`
 Cabo Flexível 2,5MM 100M Vermelho - Sil Fios
 `}),`
 `]}),`
 `,a.jsx("div",{className:"product-price",children:`
 
 
 `}),`
 
 `]}),`
 
 
 
 
 `,a.jsx("div",{className:"actions",children:`
 `}),`
 
 
 `,a.jsxs("div",{className:"buy-whatsapp buy-whatsapp--list-product",children:[`
 `,a.jsxs("a",{href:"https://api.whatsapp.com/send?phone=5511974659658&text=Ol%C3%83%C2%A1,%20gostei%20deste%20produto:%20Nome:%20Cabo%20Flex%C3%83%C2%ADvel%20%202,5MM%20100M%20Vermelho%20-%20Sil%20Fios%20|%20Ref:%2029920",target:"_blank",children:[`
 `,a.jsx("i",{className:"icon icon-whatsapp v-align-middle"}),`
 Comprar pelo Whats
 `]}),`
 `]}),`
 
`]})," "]}),`
 `,a.jsxs("div",{className:"item swiper-slide swiper-slide-next",role:"group","aria-label":"2 / 4",ref:C("width:320px"),children:[`
 
 
 
`,a.jsxs("div",{className:"product upon_request has-fast-shopping",id:"product-229620143","product-ref":"29926",children:[`
 
 `,a.jsxs("div",{className:"image",children:[`
 
 `,a.jsxs("a",{href:"https://www.atlantanet.com.br/eletrica/fios-e-cabos/cabo-flexivel-1-5mm-100m-preto-sil-fios",className:"space-image",children:[`
 `,a.jsx("img",{loading:"lazy",className:"lazyload loaded",src:"/assets/img-f0cb37b54a37.webp",alt:"Cabo Flexível  1,5MM 100M Preto - Sil Fios","data-ll-status":"loaded"}),`
 
 `]}),`
 
 
 
 
 
 `,a.jsxs("div",{className:"product-tags tags-custom","data-tags-count":"1",children:[`
 `,a.jsxs("div",{className:"tag new",children:[`
 `,a.jsx("span",{className:"tag-text",children:"Lançamento"}),`
 `]}),`
 
 
 
 
 `]}),`
 
 `]}),`
 `,a.jsxs("a",{className:"product-info",href:"https://www.atlantanet.com.br/eletrica/fios-e-cabos/cabo-flexivel-1-5mm-100m-preto-sil-fios",children:[`
 `,a.jsxs("div",{className:"wrapper-product-name",children:[`
 `,a.jsx("h3",{className:"product-name",children:`
 Cabo Flexível 1,5MM 100M Preto - Sil Fios
 `}),`
 `]}),`
 `,a.jsx("div",{className:"product-price",children:`
 
 
 `}),`
 
 `]}),`
 
 
 
 
 `,a.jsx("div",{className:"actions",children:`
 `}),`
 
 
 `,a.jsxs("div",{className:"buy-whatsapp buy-whatsapp--list-product",children:[`
 `,a.jsxs("a",{href:"https://api.whatsapp.com/send?phone=5511974659658&text=Ol%C3%83%C2%A1,%20gostei%20deste%20produto:%20Nome:%20Cabo%20Flex%C3%83%C2%ADvel%20%201,5MM%20100M%20Preto%20-%20Sil%20Fios%20|%20Ref:%2029926",target:"_blank",children:[`
 `,a.jsx("i",{className:"icon icon-whatsapp v-align-middle"}),`
 Comprar pelo Whats
 `]}),`
 `]}),`
 
`]})," "]}),`
 `,a.jsxs("div",{className:"item swiper-slide",role:"group","aria-label":"3 / 4",ref:C("width:320px"),children:[`
 
 
 
`,a.jsxs("div",{className:"product upon_request has-fast-shopping",id:"product-1269001756","product-ref":"29925",children:[`
 
 `,a.jsxs("div",{className:"image",children:[`
 
 `,a.jsxs("a",{href:"https://www.atlantanet.com.br/eletrica/fios-e-cabos/cabo-flexivel-1-5mm-100m-azul-sil-fios",className:"space-image",children:[`
 `,a.jsx("img",{loading:"lazy",className:"lazyload loaded",src:"/assets/img-a0c11dfb3c91.webp",alt:"Cabo Flexível  1,5MM 100M Azul - Sil Fios","data-ll-status":"loaded"}),`
 
 `]}),`
 
 
 
 
 
 `,a.jsxs("div",{className:"product-tags tags-custom","data-tags-count":"1",children:[`
 `,a.jsxs("div",{className:"tag new",children:[`
 `,a.jsx("span",{className:"tag-text",children:"Lançamento"}),`
 `]}),`
 
 
 
 
 `]}),`
 
 `]}),`
 `,a.jsxs("a",{className:"product-info",href:"https://www.atlantanet.com.br/eletrica/fios-e-cabos/cabo-flexivel-1-5mm-100m-azul-sil-fios",children:[`
 `,a.jsxs("div",{className:"wrapper-product-name",children:[`
 `,a.jsx("h3",{className:"product-name",children:`
 Cabo Flexível 1,5MM 100M Azul - Sil Fios
 `}),`
 `]}),`
 `,a.jsx("div",{className:"product-price",children:`
 
 
 `}),`
 
 `]}),`
 
 
 
 
 `,a.jsx("div",{className:"actions",children:`
 `}),`
 
 
 `,a.jsxs("div",{className:"buy-whatsapp buy-whatsapp--list-product",children:[`
 `,a.jsxs("a",{href:"https://api.whatsapp.com/send?phone=5511974659658&text=Ol%C3%83%C2%A1,%20gostei%20deste%20produto:%20Nome:%20Cabo%20Flex%C3%83%C2%ADvel%20%201,5MM%20100M%20Azul%20-%20Sil%20Fios%20|%20Ref:%2029925",target:"_blank",children:[`
 `,a.jsx("i",{className:"icon icon-whatsapp v-align-middle"}),`
 Comprar pelo Whats
 `]}),`
 `]}),`
 
`]})," "]}),`
 `,a.jsxs("div",{className:"item swiper-slide",role:"group","aria-label":"4 / 4",ref:C("width:320px"),children:[`
 
 
 
`,a.jsxs("div",{className:"product upon_request has-fast-shopping",id:"product-398117493","product-ref":"29930",children:[`
 
 `,a.jsxs("div",{className:"image",children:[`
 
 `,a.jsxs("a",{href:"https://www.atlantanet.com.br/eletrica/fios-e-cabos/cabo-flexivel-1-5mm-100m-branco-sil-fios",className:"space-image",children:[`
 `,a.jsx("img",{loading:"lazy",className:"lazyload loaded",src:"/assets/img-6ee1b3a0c4e1.webp",alt:"Cabo Flexível  1,5MM 100M Branco - Sil Fios","data-ll-status":"loaded"}),`
 
 `]}),`
 
 
 
 
 
 `,a.jsxs("div",{className:"product-tags tags-custom","data-tags-count":"1",children:[`
 `,a.jsxs("div",{className:"tag new",children:[`
 `,a.jsx("span",{className:"tag-text",children:"Lançamento"}),`
 `]}),`
 
 
 
 
 `]}),`
 
 `]}),`
 `,a.jsxs("a",{className:"product-info",href:"https://www.atlantanet.com.br/eletrica/fios-e-cabos/cabo-flexivel-1-5mm-100m-branco-sil-fios",children:[`
 `,a.jsxs("div",{className:"wrapper-product-name",children:[`
 `,a.jsx("h3",{className:"product-name",children:`
 Cabo Flexível 1,5MM 100M Branco - Sil Fios
 `}),`
 `]}),`
 `,a.jsx("div",{className:"product-price",children:`
 
 
 `}),`
 
 `]}),`
 
 
 
 
 `,a.jsx("div",{className:"actions",children:`
 `}),`
 
 
 `,a.jsxs("div",{className:"buy-whatsapp buy-whatsapp--list-product",children:[`
 `,a.jsxs("a",{href:"https://api.whatsapp.com/send?phone=5511974659658&text=Ol%C3%83%C2%A1,%20gostei%20deste%20produto:%20Nome:%20Cabo%20Flex%C3%83%C2%ADvel%20%201,5MM%20100M%20Branco%20-%20Sil%20Fios%20|%20Ref:%2029930",target:"_blank",children:[`
 `,a.jsx("i",{className:"icon icon-whatsapp v-align-middle"}),`
 Comprar pelo Whats
 `]}),`
 `]}),`
 
`]})," "]}),`
 `]}),`
 
 `,a.jsx("div",{className:"prev swiper-button-disabled sf-hidden",tabIndex:"-1",role:"button","aria-label":"Previous slide","aria-controls":"swiper-wrapper-1e019d2aa416c8a3","aria-disabled":"true",children:`
 
 `}),`
 `,a.jsx("div",{className:"next swiper-button-disabled sf-hidden",tabIndex:"-1",role:"button","aria-label":"Next slide","aria-controls":"swiper-wrapper-1e019d2aa416c8a3","aria-disabled":"true",children:`
 
 `}),` 
 `,a.jsx("div",{className:"dots swiper-pagination-clickable swiper-pagination-bullets sf-hidden"}),`
 `,a.jsx("span",{className:"swiper-notification sf-hidden","aria-live":"assertive","aria-atomic":"true"})]}),`
 
 `]}),`
 `]})}function Kp(){return a.jsxs("div",{className:"section-showcase not-slide-drag show","data-category":"344",type:"all_products",order:"priceLow",children:[`
 `,a.jsxs("div",{className:"container",children:[`
 `,a.jsxs("div",{className:"section-header",children:[`
 `,a.jsx("h2",{className:"title-section",children:"Promoção Da Semana"}),`
 `]}),`
 `,a.jsxs("div",{className:"list-product flex f-wrap swiper-container swiper-container-initialized swiper-container-horizontal swiper-container-pointer-events",children:[`
 `,a.jsxs("div",{className:"list-product__items swiper-wrapper",id:"swiper-wrapper-fe370622819b6102b","aria-live":"off",children:[`
 
 `,a.jsxs("div",{className:"item swiper-slide swiper-slide-active",role:"group","aria-label":"1 / 4",ref:C("width:320px"),children:[`
 
 
 
`,a.jsxs("div",{className:"product upon_request has-fast-shopping",id:"product-2066649671","product-ref":"28116",children:[`
 
 `,a.jsxs("div",{className:"image",children:[`
 
 `,a.jsxs("a",{href:"https://www.atlantanet.com.br/tintas-e-acessorios/tinta-para-parede/acrilica/tinta-rende-e-cobre-muito-3-6l-branco-suvinil",className:"space-image",children:[`
 `,a.jsx("img",{loading:"lazy",className:"lazyload loaded",src:"/assets/img-fa23c8cf4fb3.webp",alt:"Tinta Rende e Cobre Muito 3.6L Branco - Suvinil","data-ll-status":"loaded"}),`
 
 `]}),`
 
 
 
 
 
 `,a.jsx("div",{className:"product-tags tags-custom","data-tags-count":"0",children:`
 
 
 
 
 `}),`
 
 `]}),`
 `,a.jsxs("a",{className:"product-info",href:"https://www.atlantanet.com.br/tintas-e-acessorios/tinta-para-parede/acrilica/tinta-rende-e-cobre-muito-3-6l-branco-suvinil",children:[`
 `,a.jsxs("div",{className:"wrapper-product-name",children:[`
 `,a.jsx("h3",{className:"product-name",children:`
 Tinta Rende e Cobre Muito 3.6L Branco - Suvinil
 `}),`
 `]}),`
 `,a.jsx("div",{className:"product-price",children:`
 
 
 `}),`
 
 `]}),`
 
 
 
 
 `,a.jsx("div",{className:"actions",children:`
 `}),`
 
 
 `,a.jsxs("div",{className:"buy-whatsapp buy-whatsapp--list-product",children:[`
 `,a.jsxs("a",{href:"https://api.whatsapp.com/send?phone=5511974659658&text=Ol%C3%83%C2%A1,%20gostei%20deste%20produto:%20Nome:%20Tinta%20Rende%20e%20Cobre%20Muito%203.6L%20Branco%20-%20Suvinil%20|%20Ref:%2028116",target:"_blank",children:[`
 `,a.jsx("i",{className:"icon icon-whatsapp v-align-middle"}),`
 Comprar pelo Whats
 `]}),`
 `]}),`
 
`]})," "]}),`
 `,a.jsxs("div",{className:"item swiper-slide swiper-slide-next",role:"group","aria-label":"2 / 4",ref:C("width:320px"),children:[`
 
 
 
`,a.jsxs("div",{className:"product upon_request has-fast-shopping",id:"product-1932028822","product-ref":"11923",children:[`
 
 `,a.jsxs("div",{className:"image",children:[`
 
 `,a.jsxs("a",{href:"https://www.atlantanet.com.br/tintas-e-acessorios/tinta-para-parede/acrilica/tinta-toque-de-seda-acet-18l-branco-suvinil",className:"space-image",children:[`
 `,a.jsx("img",{loading:"lazy",className:"lazyload loaded",src:"/assets/img-7ca3a542a05c.webp",alt:"Tinta Toque De Seda Acetinado 18L Branco - Suvinil","data-ll-status":"loaded"}),`
 
 `]}),`
 
 
 
 
 
 `,a.jsx("div",{className:"product-tags tags-custom","data-tags-count":"0",children:`
 
 
 
 
 `}),`
 
 `]}),`
 `,a.jsxs("a",{className:"product-info",href:"https://www.atlantanet.com.br/tintas-e-acessorios/tinta-para-parede/acrilica/tinta-toque-de-seda-acet-18l-branco-suvinil",children:[`
 `,a.jsxs("div",{className:"wrapper-product-name",children:[`
 `,a.jsx("h3",{className:"product-name",children:`
 Tinta Toque De Seda Acetinado 18L Branco - Suvinil
 `}),`
 `]}),`
 `,a.jsx("div",{className:"product-price",children:`
 
 
 `}),`
 
 `]}),`
 
 
 
 
 `,a.jsx("div",{className:"actions",children:`
 `}),`
 
 
 `,a.jsxs("div",{className:"buy-whatsapp buy-whatsapp--list-product",children:[`
 `,a.jsxs("a",{href:"https://api.whatsapp.com/send?phone=5511974659658&text=Ol%C3%83%C2%A1,%20gostei%20deste%20produto:%20Nome:%20Tinta%20Toque%20De%20Seda%20Acetinado%2018L%20Branco%20-%20Suvinil%20|%20Ref:%2011923",target:"_blank",children:[`
 `,a.jsx("i",{className:"icon icon-whatsapp v-align-middle"}),`
 Comprar pelo Whats
 `]}),`
 `]}),`
 
`]})," "]}),`
 `,a.jsxs("div",{className:"item swiper-slide",role:"group","aria-label":"3 / 4",ref:C("width:320px"),children:[`
 
 
 
`,a.jsxs("div",{className:"product upon_request has-fast-shopping",id:"product-905017650","product-ref":"24228",children:[`
 
 `,a.jsxs("div",{className:"image",children:[`
 
 `,a.jsxs("a",{href:"https://www.atlantanet.com.br/tintas-e-acessorios/tinta-ferromadeira/tinta-seca-rapido-esmalte-brilhante-0-9l-branco-suvinil",className:"space-image",children:[`
 `,a.jsx("img",{loading:"lazy",className:"lazyload loaded",src:"/assets/img-d2798b10097d.webp",alt:"Tinta Seca Rápido Esmalte Brilhante 0,9L Branco - Suvinil","data-ll-status":"loaded"}),`
 
 `]}),`
 
 
 
 
 
 `,a.jsx("div",{className:"product-tags tags-custom","data-tags-count":"0",children:`
 
 
 
 
 `}),`
 
 `]}),`
 `,a.jsxs("a",{className:"product-info",href:"https://www.atlantanet.com.br/tintas-e-acessorios/tinta-ferromadeira/tinta-seca-rapido-esmalte-brilhante-0-9l-branco-suvinil",children:[`
 `,a.jsxs("div",{className:"wrapper-product-name",children:[`
 `,a.jsx("h3",{className:"product-name",children:`
 Tinta Seca Rápido Esmalte Brilhante 0,9L Branco - Suvinil
 `}),`
 `]}),`
 `,a.jsx("div",{className:"product-price",children:`
 
 
 `}),`
 
 `]}),`
 
 
 
 
 `,a.jsx("div",{className:"actions",children:`
 `}),`
 
 
 `,a.jsxs("div",{className:"buy-whatsapp buy-whatsapp--list-product",children:[`
 `,a.jsxs("a",{href:"https://api.whatsapp.com/send?phone=5511974659658&text=Ol%C3%83%C2%A1,%20gostei%20deste%20produto:%20Nome:%20Tinta%20Seca%20R%C3%83%C2%A1pido%20Esmalte%20Brilhante%200,9L%20Branco%20-%20Suvinil%20|%20Ref:%2024228",target:"_blank",children:[`
 `,a.jsx("i",{className:"icon icon-whatsapp v-align-middle"}),`
 Comprar pelo Whats
 `]}),`
 `]}),`
 
`]})," "]}),`
 `,a.jsxs("div",{className:"item swiper-slide",role:"group","aria-label":"4 / 4",ref:C("width:320px"),children:[`
 
 
 
`,a.jsxs("div",{className:"product upon_request has-fast-shopping",id:"product-1552235988","product-ref":"22126",children:[`
 
 `,a.jsxs("div",{className:"image",children:[`
 
 `,a.jsxs("a",{href:"https://www.atlantanet.com.br/tintas-e-acessorios/self-base-toque-de-seda-ac-a2-3-2l-suvinil",className:"space-image",children:[`
 `,a.jsx("img",{loading:"lazy",className:"lazyload loaded",src:"/assets/img-9078e9367287.webp",alt:"Self Base Toque de Seda AC A2 3,2L Suvinil","data-ll-status":"loaded"}),`
 
 `]}),`
 
 
 
 
 
 `,a.jsx("div",{className:"product-tags tags-custom","data-tags-count":"0",children:`
 
 
 
 
 `}),`
 
 `]}),`
 `,a.jsxs("a",{className:"product-info",href:"https://www.atlantanet.com.br/tintas-e-acessorios/self-base-toque-de-seda-ac-a2-3-2l-suvinil",children:[`
 `,a.jsxs("div",{className:"wrapper-product-name",children:[`
 `,a.jsx("h3",{className:"product-name",children:`
 Self Base Toque de Seda AC A2 3,2L Suvinil
 `}),`
 `]}),`
 `,a.jsx("div",{className:"product-price",children:`
 
 
 `}),`
 
 `]}),`
 
 
 
 
 `,a.jsx("div",{className:"actions",children:`
 `}),`
 
 
 `,a.jsxs("div",{className:"buy-whatsapp buy-whatsapp--list-product",children:[`
 `,a.jsxs("a",{href:"https://api.whatsapp.com/send?phone=5511974659658&text=Ol%C3%83%C2%A1,%20gostei%20deste%20produto:%20Nome:%20Self%20Base%20Toque%20de%20Seda%20AC%20A2%203,2L%20Suvinil%20|%20Ref:%2022126",target:"_blank",children:[`
 `,a.jsx("i",{className:"icon icon-whatsapp v-align-middle"}),`
 Comprar pelo Whats
 `]}),`
 `]}),`
 
`]})," "]}),`
 `]}),`
 
 `,a.jsx("div",{className:"prev swiper-button-disabled sf-hidden",tabIndex:"-1",role:"button","aria-label":"Previous slide","aria-controls":"swiper-wrapper-fe370622819b6102b","aria-disabled":"true",children:`
 
 `}),`
 `,a.jsx("div",{className:"next swiper-button-disabled sf-hidden",tabIndex:"-1",role:"button","aria-label":"Next slide","aria-controls":"swiper-wrapper-fe370622819b6102b","aria-disabled":"true",children:`
 
 `}),` 
 `,a.jsx("div",{className:"dots swiper-pagination-clickable swiper-pagination-bullets sf-hidden"}),`
 `,a.jsx("span",{className:"swiper-notification sf-hidden","aria-live":"assertive","aria-atomic":"true"})]}),`
 `]}),`
 `]})}function Xp(){return a.jsxs("div",{className:"section-showcase not-slide-drag show",children:[`
 `,a.jsxs("div",{className:"container",children:[`
 
 `,a.jsxs("div",{className:"section-header",children:[`
 `,a.jsx("h2",{className:"title-section",children:`
 Recomendados para você
 `}),`
 `]}),`
 
 `,a.jsxs("div",{className:"list-product flex f-wrap swiper-container swiper-container-initialized swiper-container-horizontal swiper-container-pointer-events",children:[`
 `,a.jsxs("div",{className:"list-product__items swiper-wrapper",id:"swiper-wrapper-5bcc46949db671105","aria-live":"off",children:[`
 `,a.jsxs("div",{className:"item swiper-slide swiper-slide-active",role:"group","aria-label":"1 / 4",ref:C("width:320px"),children:[`
 
 
 
`,a.jsxs("div",{className:"product upon_request has-fast-shopping",id:"product-1448764788","product-ref":"31294",children:[`
 
 `,a.jsxs("div",{className:"image",children:[`
 
 `,a.jsxs("a",{href:"https://www.atlantanet.com.br/material-de-construcao/blocos-e-tijolos/bloco-ceramico-11-5-x-14-x-24-vedacao-tec-brasil",className:"space-image",children:[`
 `,a.jsx("img",{loading:"lazy",className:"lazyload loaded",src:"/assets/img-f468628d8cdf.webp",alt:"Bloco Cerâmico 11,5 X 14 X 24 Vedação - Tec Brasil","data-ll-status":"loaded"}),`
 
 `]}),`
 
 
 
 
 
 `,a.jsx("div",{className:"product-tags tags-custom","data-tags-count":"0",children:`
 
 
 
 
 `}),`
 
 `]}),`
 `,a.jsxs("a",{className:"product-info",href:"https://www.atlantanet.com.br/material-de-construcao/blocos-e-tijolos/bloco-ceramico-11-5-x-14-x-24-vedacao-tec-brasil",children:[`
 `,a.jsxs("div",{className:"wrapper-product-name",children:[`
 `,a.jsx("h3",{className:"product-name",children:`
 Bloco Cerâmico 11,5 X 14 X 24 Vedação - Tec Brasil
 `}),`
 `]}),`
 `,a.jsx("div",{className:"product-price",children:`
 
 
 `}),`
 
 `]}),`
 
 
 
 
 `,a.jsx("div",{className:"actions",children:`
 `}),`
 
 
 `,a.jsxs("div",{className:"buy-whatsapp buy-whatsapp--list-product",children:[`
 `,a.jsxs("a",{href:"https://api.whatsapp.com/send?phone=5511974659658&text=Ol%C3%83%C2%A1,%20gostei%20deste%20produto:%20Nome:%20Bloco%20Cer%C3%83%C2%A2mico%2011,5%20X%2014%20X%2024%20Veda%C3%83%C2%A7%C3%83%C2%A3o%20-%20Tec%20Brasil%20|%20Ref:%2031294",target:"_blank",children:[`
 `,a.jsx("i",{className:"icon icon-whatsapp v-align-middle"}),`
 Comprar pelo Whats
 `]}),`
 `]}),`
 
`]})," "]}),`
 `,a.jsxs("div",{className:"item swiper-slide swiper-slide-next",role:"group","aria-label":"2 / 4",ref:C("width:320px"),children:[`
 
 
 
`,a.jsxs("div",{className:"product upon_request has-fast-shopping",id:"product-1334851089","product-ref":"30137",children:[`
 
 `,a.jsxs("div",{className:"image",children:[`
 
 `,a.jsxs("a",{href:"https://www.atlantanet.com.br/material-de-construcao/cimento-csn-cp3-32rs-50-kg-csn",className:"space-image",children:[`
 `,a.jsx("img",{loading:"lazy",className:"lazyload loaded",src:"/assets/img-3a2f50f59724.svg",alt:"Cimento CPIII 32RS 50KG - CSN","data-ll-status":"loaded",ref:C("background-blend-mode:normal!important;background-clip:content-box!important;background-position:50% 50%!important;background-color:rgba(0,0,0,0)!important;background-image:var(--sf-img-33)!important;background-size:contain!important;background-origin:content-box!important;background-repeat:no-repeat!important")}),`
 
 `]}),`
 
 
 
 
 
 `,a.jsx("div",{className:"product-tags tags-custom","data-tags-count":"0",children:`
 
 
 
 
 `}),`
 
 `]}),`
 `,a.jsxs("a",{className:"product-info",href:"https://www.atlantanet.com.br/material-de-construcao/cimento-csn-cp3-32rs-50-kg-csn",children:[`
 `,a.jsxs("div",{className:"wrapper-product-name",children:[`
 `,a.jsx("h3",{className:"product-name",children:`
 Cimento CPIII 32RS 50KG - CSN
 `}),`
 `]}),`
 `,a.jsx("div",{className:"product-price",children:`
 
 
 `}),`
 
 `]}),`
 
 
 
 
 `,a.jsx("div",{className:"actions",children:`
 `}),`
 
 
 `,a.jsxs("div",{className:"buy-whatsapp buy-whatsapp--list-product",children:[`
 `,a.jsxs("a",{href:"https://api.whatsapp.com/send?phone=5511974659658&text=Ol%C3%83%C2%A1,%20gostei%20deste%20produto:%20Nome:%20Cimento%20CPIII%2032RS%2050KG%20-%20CSN%20|%20Ref:%2030137",target:"_blank",children:[`
 `,a.jsx("i",{className:"icon icon-whatsapp v-align-middle"}),`
 Comprar pelo Whats
 `]}),`
 `]}),`
 
`]})," "]}),`
 `,a.jsxs("div",{className:"item swiper-slide",role:"group","aria-label":"3 / 4",ref:C("width:320px"),children:[`
 
 
 
`,a.jsxs("div",{className:"product upon_request has-fast-shopping",id:"product-1088674939","product-ref":"21380",children:[`
 
 `,a.jsxs("div",{className:"image",children:[`
 
 `,a.jsxs("a",{href:"https://www.atlantanet.com.br/material-de-construcao/areia-e-pedra/areia-media-lavada-saco-20-kg-ensacada-pedrasil",className:"space-image",children:[`
 `,a.jsx("img",{loading:"lazy",className:"lazyload loaded",src:"/assets/img-f614e6824454.webp",alt:"Areia Média Lavada Saco 20 KG Ensacada - Pedrasil","data-ll-status":"loaded"}),`
 
 `]}),`
 
 
 
 
 
 `,a.jsx("div",{className:"product-tags tags-custom","data-tags-count":"0",children:`
 
 
 
 
 `}),`
 
 `]}),`
 `,a.jsxs("a",{className:"product-info",href:"https://www.atlantanet.com.br/material-de-construcao/areia-e-pedra/areia-media-lavada-saco-20-kg-ensacada-pedrasil",children:[`
 `,a.jsxs("div",{className:"wrapper-product-name",children:[`
 `,a.jsx("h3",{className:"product-name",children:`
 Areia Média Lavada Saco 20 KG Ensacada - Pedrasil
 `}),`
 `]}),`
 `,a.jsx("div",{className:"product-price",children:`
 
 
 `}),`
 
 `]}),`
 
 
 
 
 `,a.jsx("div",{className:"actions",children:`
 `}),`
 
 
 `,a.jsxs("div",{className:"buy-whatsapp buy-whatsapp--list-product",children:[`
 `,a.jsxs("a",{href:"https://api.whatsapp.com/send?phone=5511974659658&text=Ol%C3%83%C2%A1,%20gostei%20deste%20produto:%20Nome:%20Areia%20M%C3%83%C2%A9dia%20Lavada%20Saco%2020%20KG%20Ensacada%20-%20Pedrasil%20|%20Ref:%2021380",target:"_blank",children:[`
 `,a.jsx("i",{className:"icon icon-whatsapp v-align-middle"}),`
 Comprar pelo Whats
 `]}),`
 `]}),`
 
`]})," "]}),`
 `,`
 `]}),`
 
 `,a.jsx("div",{className:"prev swiper-button-disabled sf-hidden",tabIndex:"-1",role:"button","aria-label":"Previous slide","aria-controls":"swiper-wrapper-5bcc46949db671105","aria-disabled":"true",children:`
 
 `}),`
 `,a.jsx("div",{className:"next swiper-button-disabled sf-hidden",tabIndex:"-1",role:"button","aria-label":"Next slide","aria-controls":"swiper-wrapper-5bcc46949db671105","aria-disabled":"true",children:`
 
 `}),` 
 `,a.jsx("div",{className:"dots swiper-pagination-clickable swiper-pagination-bullets sf-hidden"}),`
 `,a.jsx("span",{className:"swiper-notification sf-hidden","aria-live":"assertive","aria-atomic":"true"})]}),`
 
 `]}),`
 `]})}function Gp(){return a.jsxs("div",{className:"section-showcase not-slide-drag show","data-category":"340",type:"all_products",order:"priceLow",children:[`
 `,a.jsxs("div",{className:"container",children:[`
 `,a.jsxs("div",{className:"section-header",children:[`
 `,a.jsx("h2",{className:"title-section",children:"Telhas"}),`
 `]}),`
 `,a.jsxs("div",{className:"list-product flex f-wrap swiper-container swiper-container-initialized swiper-container-horizontal swiper-container-pointer-events",children:[`
 `,a.jsxs("div",{className:"list-product__items swiper-wrapper",id:"swiper-wrapper-8930379f6e1152e2","aria-live":"off",children:[`
 
 `,a.jsxs("div",{className:"item swiper-slide swiper-slide-active",role:"group","aria-label":"1 / 4",ref:C("width:320px"),children:[`
 
 
 
`,a.jsxs("div",{className:"product upon_request has-secondary-image has-fast-shopping",id:"product-226963905","product-ref":"23155",children:[`
 
 `,a.jsxs("div",{className:"image",children:[`
 
 `,a.jsxs("a",{href:"https://www.atlantanet.com.br/telha/telhas/telha-ondulada-1-53x1-10-6mm-brasilit",className:"space-image",children:[`
 `,a.jsx("img",{loading:"lazy",className:"lazyload loaded",src:"/assets/img-474648c35ca8.webp",alt:"Telha Ondulada 1.53X1.10 6MM - Brasilit","data-ll-status":"loaded"}),`
 `,a.jsx("img",{loading:"lazy",className:"lazyload loaded",src:"/assets/img-5361042f0011.webp",alt:"Telha Ondulada 1.53X1.10 6MM - Brasilit","data-ll-status":"loaded"}),`
 
 `]}),`
 
 
 
 
 
 `,a.jsx("div",{className:"product-tags tags-custom","data-tags-count":"0",children:`
 
 
 
 
 `}),`
 
 `]}),`
 `,a.jsxs("a",{className:"product-info",href:"https://www.atlantanet.com.br/telha/telhas/telha-ondulada-1-53x1-10-6mm-brasilit",children:[`
 `,a.jsxs("div",{className:"wrapper-product-name",children:[`
 `,a.jsx("h3",{className:"product-name",children:`
 Telha Ondulada 1.53X1.10 6MM - Brasilit
 `}),`
 `]}),`
 `,a.jsx("div",{className:"product-price",children:`
 
 
 `}),`
 
 `]}),`
 
 
 
 
 `,a.jsx("div",{className:"actions",children:`
 `}),`
 
 
 `,a.jsxs("div",{className:"buy-whatsapp buy-whatsapp--list-product",children:[`
 `,a.jsxs("a",{href:"https://api.whatsapp.com/send?phone=5511974659658&text=Ol%C3%83%C2%A1,%20gostei%20deste%20produto:%20Nome:%20Telha%20Ondulada%201.53X1.10%206MM%20-%20Brasilit%20|%20Ref:%2023155",target:"_blank",children:[`
 `,a.jsx("i",{className:"icon icon-whatsapp v-align-middle"}),`
 Comprar pelo Whats
 `]}),`
 `]}),`
 
`]})," "]}),`
 `,a.jsxs("div",{className:"item swiper-slide swiper-slide-next",role:"group","aria-label":"2 / 4",ref:C("width:320px"),children:[`
 
 
 
`,a.jsxs("div",{className:"product upon_request has-fast-shopping",id:"product-1954776339","product-ref":"24392",children:[`
 
 `,a.jsxs("div",{className:"image",children:[`
 
 `,a.jsxs("a",{href:"https://www.atlantanet.com.br/telha/telhas/telha-ondulada-pp-perfil-177-2-13x1-10-atco",className:"space-image",children:[`
 `,a.jsx("img",{loading:"lazy",className:"lazyload loaded",src:"/assets/img-1358d618f948.webp",alt:"Telha Ondulada PP Perfil 177 2.13X1.10  - Atco","data-ll-status":"loaded"}),`
 
 `]}),`
 
 
 
 
 
 `,a.jsx("div",{className:"product-tags tags-custom","data-tags-count":"0",children:`
 
 
 
 
 `}),`
 
 `]}),`
 `,a.jsxs("a",{className:"product-info",href:"https://www.atlantanet.com.br/telha/telhas/telha-ondulada-pp-perfil-177-2-13x1-10-atco",children:[`
 `,a.jsxs("div",{className:"wrapper-product-name",children:[`
 `,a.jsx("h3",{className:"product-name",children:`
 Telha Ondulada PP Perfil 177 2.13X1.10 - Atco
 `}),`
 `]}),`
 `,a.jsx("div",{className:"product-price",children:`
 
 
 `}),`
 
 `]}),`
 
 
 
 
 `,a.jsx("div",{className:"actions",children:`
 `}),`
 
 
 `,a.jsxs("div",{className:"buy-whatsapp buy-whatsapp--list-product",children:[`
 `,a.jsxs("a",{href:"https://api.whatsapp.com/send?phone=5511974659658&text=Ol%C3%83%C2%A1,%20gostei%20deste%20produto:%20Nome:%20Telha%20Ondulada%20PP%20Perfil%20177%202.13X1.10%20%20-%20Atco%20|%20Ref:%2024392",target:"_blank",children:[`
 `,a.jsx("i",{className:"icon icon-whatsapp v-align-middle"}),`
 Comprar pelo Whats
 `]}),`
 `]}),`
 
`]})," "]}),`
 `,a.jsxs("div",{className:"item swiper-slide",role:"group","aria-label":"3 / 4",ref:C("width:320px"),children:[`
 
 
 
`,a.jsxs("div",{className:"product upon_request has-fast-shopping",id:"product-567302461","product-ref":"32323",children:[`
 
 `,a.jsxs("div",{className:"image",children:[`
 
 `,a.jsxs("a",{href:"https://www.atlantanet.com.br/telha/telhas/telha-eco-classica-vermelha-2-00x0-95m-onduline",className:"space-image",children:[`
 `,a.jsx("img",{loading:"lazy",className:"lazyload loaded",src:"/assets/img-f2c6fc054d7b.webp",alt:"Telha Eco Clássica Vermelha 2,00X0,95M - Onduline","data-ll-status":"loaded"}),`
 
 `]}),`
 
 
 
 
 
 `,a.jsx("div",{className:"product-tags tags-custom","data-tags-count":"0",children:`
 
 
 
 
 `}),`
 
 `]}),`
 `,a.jsxs("a",{className:"product-info",href:"https://www.atlantanet.com.br/telha/telhas/telha-eco-classica-vermelha-2-00x0-95m-onduline",children:[`
 `,a.jsxs("div",{className:"wrapper-product-name",children:[`
 `,a.jsx("h3",{className:"product-name",children:`
 Telha Eco Clássica Vermelha 2,00X0,95M - Onduline
 `}),`
 `]}),`
 `,a.jsx("div",{className:"product-price",children:`
 
 
 `}),`
 
 `]}),`
 
 
 
 
 `,a.jsx("div",{className:"actions",children:`
 `}),`
 
 
 `,a.jsxs("div",{className:"buy-whatsapp buy-whatsapp--list-product",children:[`
 `,a.jsxs("a",{href:"https://api.whatsapp.com/send?phone=5511974659658&text=Ol%C3%83%C2%A1,%20gostei%20deste%20produto:%20Nome:%20Telha%20Eco%20Cl%C3%83%C2%A1ssica%20Vermelha%202,00X0,95M%20-%20Onduline%20|%20Ref:%2032323",target:"_blank",children:[`
 `,a.jsx("i",{className:"icon icon-whatsapp v-align-middle"}),`
 Comprar pelo Whats
 `]}),`
 `]}),`
 
`]})," "]}),`
 `,a.jsxs("div",{className:"item swiper-slide",role:"group","aria-label":"4 / 4",ref:C("width:320px"),children:[`
 
 
 
`,a.jsxs("div",{className:"product upon_request has-fast-shopping",id:"product-933549767","product-ref":"31624",children:[`
 
 `,a.jsxs("div",{className:"image",children:[`
 
 `,a.jsxs("a",{href:"https://www.atlantanet.com.br/telha/telhas/telha-ecologica-stilo-2-00x0-96m-verde-onduline",className:"space-image",children:[`
 `,a.jsx("img",{loading:"lazy",className:"lazyload loaded",src:"/assets/img-561880e52bde.webp",alt:"Telha Ecológica Stilo 2,00X0,96M Verde - Onduline","data-ll-status":"loaded"}),`
 
 `]}),`
 
 
 
 
 
 `,a.jsx("div",{className:"product-tags tags-custom","data-tags-count":"0",children:`
 
 
 
 
 `}),`
 
 `]}),`
 `,a.jsxs("a",{className:"product-info",href:"https://www.atlantanet.com.br/telha/telhas/telha-ecologica-stilo-2-00x0-96m-verde-onduline",children:[`
 `,a.jsxs("div",{className:"wrapper-product-name",children:[`
 `,a.jsx("h3",{className:"product-name",children:`
 Telha Ecológica Stilo 2,00X0,96M Verde - Onduline
 `}),`
 `]}),`
 `,a.jsx("div",{className:"product-price",children:`
 
 
 `}),`
 
 `]}),`
 
 
 
 
 `,a.jsx("div",{className:"actions",children:`
 `}),`
 
 
 `,a.jsxs("div",{className:"buy-whatsapp buy-whatsapp--list-product",children:[`
 `,a.jsxs("a",{href:"https://api.whatsapp.com/send?phone=5511974659658&text=Ol%C3%83%C2%A1,%20gostei%20deste%20produto:%20Nome:%20Telha%20Ecol%C3%83%C2%B3gica%20Stilo%202,00X0,96M%20Verde%20-%20Onduline%20|%20Ref:%2031624",target:"_blank",children:[`
 `,a.jsx("i",{className:"icon icon-whatsapp v-align-middle"}),`
 Comprar pelo Whats
 `]}),`
 `]}),`
 
`]})," "]}),`
 `]}),`
 
 `,a.jsx("div",{className:"prev swiper-button-disabled sf-hidden",tabIndex:"-1",role:"button","aria-label":"Previous slide","aria-controls":"swiper-wrapper-8930379f6e1152e2","aria-disabled":"true",children:`
 
 `}),`
 `,a.jsx("div",{className:"next swiper-button-disabled sf-hidden",tabIndex:"-1",role:"button","aria-label":"Next slide","aria-controls":"swiper-wrapper-8930379f6e1152e2","aria-disabled":"true",children:`
 
 `}),` 
 `,a.jsx("div",{className:"dots swiper-pagination-clickable swiper-pagination-bullets sf-hidden"}),`
 `,a.jsx("span",{className:"swiper-notification sf-hidden","aria-live":"assertive","aria-atomic":"true"})]}),`
 `]}),`
 `]})}function qp(){return a.jsxs("main",{className:"site-main",children:[`
 
 
 `,a.jsx("div",{className:"slider_parameters d-none hidden hide","data-quantity-desktop":"4","data-quantity-mobile":"2"}),`
 
 `,a.jsx(Lp,{}),`
 
`,a.jsx(Ap,{}),`
 `,a.jsx(Vp,{}),`
 
 
 
 
 
 
 
 
 
 `,a.jsx(Hp,{}),`
 
 
 
 
 
 
 
 
 
 
 
 `,a.jsx(Kp,{}),`
 
 
 
 
 
 
 
 
 
 
 
 `,a.jsx(Gp,{}),`
 
 
 `,a.jsx(Fp,{}),`
 
 
 
 
 
 
 
 
 
 
 `,a.jsx(Wp,{}),`
 
 
 
 
 
 
 
 
 
 
 `,a.jsx(Qp,{}),`
 
 `,a.jsx(Mp,{}),`
 `,a.jsx(Ip,{}),`

`,a.jsx(Dp,{}),`
 
 
 
 
 
 
 
 
 `,a.jsx(Xp,{}),`
 
 
 `,a.jsx($p,{}),`
 
`,a.jsx(Bp,{}),`

 
 `,a.jsx(Up,{}),` 
 `,a.jsx(Rp,{}),`
 `,a.jsx(Op,{}),`
 
 
 `]})}function Yp(){return a.jsxs("div",{id:"menu-mobile",className:"menu-mobile",children:[`
 `,a.jsxs("div",{className:"close-box close-overlay",children:[`
 `,a.jsx("i",{className:"icon icon-times"}),`
 `]}),`
 `,a.jsxs("div",{className:"block-title flex align-center",children:[`
 `,a.jsx("div",{className:"header-menu sf-hidden",children:`
 
 
 
 `}),`
 Menu
 `]}),`
 `,a.jsxs("form",{className:"bf-menu-search",action:"#",children:[a.jsx("input",{type:"search",placeholder:"O que deseja procurar?","aria-label":"Buscar produtos"}),a.jsx("button",{type:"submit","aria-label":"Buscar",children:a.jsx("i",{className:"icon icon-search"})})]}),a.jsxs("div",{className:"nav-mobile-wrapper",children:[`
 `,a.jsxs("nav",{className:"nav-mobile",children:[` 
 `,a.jsxs("ul",{className:"list first-level",children:[`
 
 `,a.jsxs("li",{children:[`
 `,a.jsxs("a",{href:"#/categoria/cimento",children:[`
 `,a.jsx("div",{className:"category-image",children:a.jsx("img",{src:"/assets/bf-icon-cimento.svg",alt:"Cimento",width:"20",height:"20"})}),`
 Cimento
 `]}),`
 `]}),`
 
 `,a.jsxs("li",{children:[`
 `,a.jsxs("a",{href:"#/categoria/areia",children:[`
 `,a.jsx("div",{className:"category-image",children:a.jsx("img",{src:"/assets/bf-icon-areia.svg",alt:"Areia",width:"20",height:"20"})}),`
 Areia
 `]}),`
 `]}),`
 
 `,a.jsxs("li",{children:[`
 `,a.jsxs("a",{href:"#/categoria/ferro",children:[`
 `,a.jsx("div",{className:"category-image",children:a.jsx("img",{src:"/assets/bf-icon-ferro.svg",alt:"Ferro",width:"20",height:"20"})}),`
 Ferro
 `]}),`
 `]}),`
 
 `,a.jsxs("li",{children:[`
 `,a.jsxs("a",{href:"#/categoria/eletrica",children:[`
 `,a.jsx("div",{className:"category-image",children:a.jsx("img",{src:"/assets/bf-icon-eletrica.svg",alt:"Elétrica",width:"20",height:"20"})}),`
 Elétrica
 `]}),`
 `]}),`
 
 `,a.jsxs("li",{children:[`
 `,a.jsxs("a",{href:"#/categoria/hidraulica",children:[`
 `,a.jsx("div",{className:"category-image",children:a.jsx("img",{src:"/assets/bf-icon-hidraulica.svg",alt:"Hidráulica",width:"20",height:"20"})}),`
 Hidráulica
 `]}),`
 `]}),`
 
 `,`
 
 `,a.jsxs("li",{children:[`
 `,a.jsxs("a",{href:"#/categoria/telhas",children:[`
 `,a.jsx("div",{className:"category-image",children:a.jsx("img",{src:"/assets/bf-icon-telhas.svg",alt:"Telhas",width:"20",height:"20"})}),`
 Telhas
 `]}),`
 `]}),`
 
 `,a.jsxs("li",{children:[`
 `,a.jsxs("a",{href:"#/categoria/tintas",children:[`
 `,a.jsx("div",{className:"category-image",children:a.jsx("img",{src:"/assets/bf-icon-tintas.svg",alt:"Tintas",width:"20",height:"20"})}),`
 Tintas
 `]}),`
 `]}),`
 
 `]}),` 
 `]}),`
 `]}),`
 `,a.jsxs("div",{className:"menu-mobile-actions",children:[`
 `,a.jsxs("a",{className:"bf-menu-wpp",href:"https://wa.me/5511974659658",target:"_blank",rel:"noopener noreferrer",children:[a.jsx("i",{className:"icon icon-whatsapp"})," Comprar pelo WhatsApp"]}),`
 `,a.jsxs("ul",{className:"menu-actions-mobile__contact",children:[`
 `,a.jsx("li",{className:"wpp-mobile hidden sf-hidden",children:`
 
 
 
 
 
 
 `}),`
 
 `,a.jsx("li",{className:"hidden sf-hidden",children:`
 
 `}),`
 
 `,`
 `,`
 `]}),`
 `]}),`
`]})}function Zp(){const e=["Parcelamos suas compras em até 6x sem juros","Compre pelo whatsapp","Loja especializada, mais de 20 anos no mercado."];return a.jsxs("div",{className:"message-top active-slide",children:[`
 `,a.jsxs("div",{className:"swiper-container swiper-container-horizontal",children:[`
 `,a.jsx("div",{className:"swiper-wrapper message-top__content","aria-live":"off",children:e.map(n=>a.jsxs("div",{className:"item swiper-slide",role:"group",children:[`
 `,a.jsxs("a",{href:"javascript:void(0)","aria-label":n,children:[`
 `,n,`
 `]}),`
 `]},n))}),`
 `,a.jsx("div",{className:"prev sf-hidden",tabIndex:"0",role:"button","aria-label":"Previous slide"}),`
 `,a.jsx("div",{className:"next sf-hidden",tabIndex:"0",role:"button","aria-label":"Next slide"}),`
 `,a.jsx("div",{className:"dots"}),`
 `,a.jsx("span",{className:"swiper-notification sf-hidden","aria-live":"assertive","aria-atomic":"true"})]}),`
`]})}function Jp(){return a.jsxs("div",{className:"application",children:[`
 
 
`,a.jsx(Yp,{}),` 
`,a.jsx(Zp,{}),`
`,a.jsx("div",{className:"header-info sf-hidden",children:`
 
`}),`
`,a.jsx(bp,{}),`
 `,a.jsx(qp,{}),`
 
`,a.jsx(Tp,{}),`
 
 `]})}function ef(){return a.jsxs("div",{className:"cart",children:[`
 `,a.jsx("div",{className:"cart-backdrop"}),`
 `,a.jsxs("section",{id:"cart",className:"dropdown cart__dropdown","aria-label":"Carrinho",children:[`
 `,a.jsxs("div",{className:"cart__vue js-vue-cart",children:[a.jsxs("div",{className:"cart__vue__header",children:[a.jsxs("div",{className:"cart__vue__icon",children:[a.jsx("i",{className:"icon icon-arrow-left"}),`
 Fechar 
 `]})," ",a.jsx("div",{className:"cart__vue__text",children:a.jsx("span",{children:"Carrinho de Compras"})})]})," ",a.jsx("div",{className:"dropdown__content",children:a.jsx("div",{className:"cart__empty",children:a.jsx("p",{children:`
 Seu carrinho está vazio.
 `})})})," ",a.jsx("div",{className:"dropdown__footer align-center",children:a.jsx("p",{children:"Adicione produtos ao carrinho e eles aparecerão aqui."})})]}),`
 `]}),`
`]})}function nf(){return a.jsxs("div",{role:"dialog","aria-live":"polite","aria-label":"cookieconsent","aria-describedby":"cookieconsent:desc",className:"cc-window cc-banner cc-type-info cc-theme-block cc-bottom cc-color-override-1834562721",children:[a.jsxs("span",{id:"cookieconsent:desc",className:"cc-message",children:["            Utilizamos Cookies para garantir que você obtenha a melhor experiência em nosso site. ",a.jsx("a",{"aria-label":"learn more about cookies",role:"button",tabIndex:"0",className:"cc-link",href:"https://https//www.atlantanet.com.br/privacidade",target:"_blank",children:"Política de privacidade!"})]}),a.jsx("div",{className:"cc-compliance",children:a.jsx("a",{"aria-label":"dismiss cookie message",role:"button",tabIndex:"0",className:"cc-btn cc-dismiss",children:"OK"})})]})}const tf="modulepreload",rf=function(e){return"/"+e},Ui={},af=function(n,t,r){let s=Promise.resolve();if(t&&t.length>0){document.getElementsByTagName("link");const i=document.querySelector("meta[property=csp-nonce]"),o=(i==null?void 0:i.nonce)||(i==null?void 0:i.getAttribute("nonce"));s=Promise.allSettled(t.map(c=>{if(c=rf(c),c in Ui)return;Ui[c]=!0;const d=c.endsWith(".css"),v=d?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${c}"]${v}`))return;const h=document.createElement("link");if(h.rel=d?"stylesheet":tf,d||(h.as="script"),h.crossOrigin="",h.href=c,o&&h.setAttribute("nonce",o),document.head.appendChild(h),d)return new Promise((m,w)=>{h.addEventListener("load",m),h.addEventListener("error",()=>w(new Error(`Unable to preload CSS for ${c}`)))})}))}function l(i){const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=i,window.dispatchEvent(o),!o.defaultPrevented)throw i}return s.then(i=>{for(const o of i||[])o.status==="rejected"&&l(o.reason);return n().catch(l)})};function sf(){return Vs.useEffect(()=>{af(()=>import("./interactive-BZiHvdIw.js"),[]).then(e=>e.initInteractive())},[]),null}function lf(){return a.jsxs(a.Fragment,{children:[a.jsxs("div",{children:[`
 `,a.jsx("input",{type:"checkbox",id:"alert-show",defaultValue:"on",className:"sf-hidden"}),`
`,a.jsx("div",{className:"box-alerts sf-hidden",children:`
 
`})," "]}),a.jsx("div",{className:"site-lgpd sf-hidden",children:`
 
 
 `}),a.jsx("div",{className:"modal fade sf-hidden",id:"modal",tabIndex:"-1",role:"dialog","aria-labelledby":"myModalLabel1","aria-hidden":"true",children:`
 
`}),a.jsx("div",{"data-module":"render","data-render":"snippets/cart_preview",className:"sf-hidden",children:a.jsx("div",{className:"modal cart-preview sf-hidden","data-module":"cartPreview","data-cart-preview":"modal",tabIndex:"-1",role:"dialog","aria-labelledby":"myModalLabel","aria-hidden":"true",children:`
 
`})}),a.jsx("div",{className:"modal fade sf-hidden",id:"modal-form",tabIndex:"-1",role:"dialog","aria-labelledby":"myModalLabel2","aria-hidden":"true",children:`
 
`}),a.jsx("iframe",{id:"modal-form-iframe",height:"0",width:"0",frameBorder:"0",marginWidth:"0",marginHeight:"0",ref:C("display:none")})]})}function of(){return a.jsxs(a.Fragment,{children:[a.jsx(nf,{}),a.jsx(ef,{}),a.jsx("div",{className:"overlay-shadow"}),a.jsx(Jp,{}),a.jsx(lf,{}),a.jsx(sf,{})]})}document.documentElement.classList.add("bf-loading");setTimeout(()=>document.documentElement.classList.remove("bf-loading"),6e3);"scrollRestoration"in history&&(history.scrollRestoration="manual");tu(document.getElementById("root")).render(a.jsx(of,{}));
