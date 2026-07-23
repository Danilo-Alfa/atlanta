(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const l of a)if(l.type==="childList")for(const i of l.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function t(a){const l={};return a.integrity&&(l.integrity=a.integrity),a.referrerPolicy&&(l.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?l.credentials="include":a.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(a){if(a.ep)return;a.ep=!0;const l=t(a);fetch(a.href,l)}})();var $i={exports:{}},es={},Wi={exports:{}},b={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Gt=Symbol.for("react.element"),su=Symbol.for("react.portal"),au=Symbol.for("react.fragment"),lu=Symbol.for("react.strict_mode"),iu=Symbol.for("react.profiler"),ou=Symbol.for("react.provider"),cu=Symbol.for("react.context"),uu=Symbol.for("react.forward_ref"),du=Symbol.for("react.suspense"),pu=Symbol.for("react.memo"),fu=Symbol.for("react.lazy"),Ml=Symbol.iterator;function mu(e){return e===null||typeof e!="object"?null:(e=Ml&&e[Ml]||e["@@iterator"],typeof e=="function"?e:null)}var Hi={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Qi=Object.assign,Ki={};function at(e,n,t){this.props=e,this.context=n,this.refs=Ki,this.updater=t||Hi}at.prototype.isReactComponent={};at.prototype.setState=function(e,n){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,n,"setState")};at.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Gi(){}Gi.prototype=at.prototype;function Fa(e,n,t){this.props=e,this.context=n,this.refs=Ki,this.updater=t||Hi}var Aa=Fa.prototype=new Gi;Aa.constructor=Fa;Qi(Aa,at.prototype);Aa.isPureReactComponent=!0;var Il=Array.isArray,Xi=Object.prototype.hasOwnProperty,Da={current:null},qi={key:!0,ref:!0,__self:!0,__source:!0};function Yi(e,n,t){var r,a={},l=null,i=null;if(n!=null)for(r in n.ref!==void 0&&(i=n.ref),n.key!==void 0&&(l=""+n.key),n)Xi.call(n,r)&&!qi.hasOwnProperty(r)&&(a[r]=n[r]);var o=arguments.length-2;if(o===1)a.children=t;else if(1<o){for(var c=Array(o),d=0;d<o;d++)c[d]=arguments[d+2];a.children=c}if(e&&e.defaultProps)for(r in o=e.defaultProps,o)a[r]===void 0&&(a[r]=o[r]);return{$$typeof:Gt,type:e,key:l,ref:i,props:a,_owner:Da.current}}function hu(e,n){return{$$typeof:Gt,type:e.type,key:n,ref:e.ref,props:e.props,_owner:e._owner}}function Ba(e){return typeof e=="object"&&e!==null&&e.$$typeof===Gt}function gu(e){var n={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(t){return n[t]})}var Rl=/\/+/g;function ws(e,n){return typeof e=="object"&&e!==null&&e.key!=null?gu(""+e.key):n.toString(36)}function xr(e,n,t,r,a){var l=typeof e;(l==="undefined"||l==="boolean")&&(e=null);var i=!1;if(e===null)i=!0;else switch(l){case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case Gt:case su:i=!0}}if(i)return i=e,a=a(i),e=r===""?"."+ws(i,0):r,Il(a)?(t="",e!=null&&(t=e.replace(Rl,"$&/")+"/"),xr(a,n,t,"",function(d){return d})):a!=null&&(Ba(a)&&(a=hu(a,t+(!a.key||i&&i.key===a.key?"":(""+a.key).replace(Rl,"$&/")+"/")+e)),n.push(a)),1;if(i=0,r=r===""?".":r+":",Il(e))for(var o=0;o<e.length;o++){l=e[o];var c=r+ws(l,o);i+=xr(l,n,t,c,a)}else if(c=mu(e),typeof c=="function")for(e=c.call(e),o=0;!(l=e.next()).done;)l=l.value,c=r+ws(l,o++),i+=xr(l,n,t,c,a);else if(l==="object")throw n=String(e),Error("Objects are not valid as a React child (found: "+(n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n)+"). If you meant to render a collection of children, use an array instead.");return i}function nr(e,n,t){if(e==null)return e;var r=[],a=0;return xr(e,r,"","",function(l){return n.call(t,l,a++)}),r}function vu(e){if(e._status===-1){var n=e._result;n=n(),n.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=n)}if(e._status===1)return e._result.default;throw e._result}var oe={current:null},wr={transition:null},xu={ReactCurrentDispatcher:oe,ReactCurrentBatchConfig:wr,ReactCurrentOwner:Da};function Zi(){throw Error("act(...) is not supported in production builds of React.")}b.Children={map:nr,forEach:function(e,n,t){nr(e,function(){n.apply(this,arguments)},t)},count:function(e){var n=0;return nr(e,function(){n++}),n},toArray:function(e){return nr(e,function(n){return n})||[]},only:function(e){if(!Ba(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};b.Component=at;b.Fragment=au;b.Profiler=iu;b.PureComponent=Fa;b.StrictMode=lu;b.Suspense=du;b.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=xu;b.act=Zi;b.cloneElement=function(e,n,t){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Qi({},e.props),a=e.key,l=e.ref,i=e._owner;if(n!=null){if(n.ref!==void 0&&(l=n.ref,i=Da.current),n.key!==void 0&&(a=""+n.key),e.type&&e.type.defaultProps)var o=e.type.defaultProps;for(c in n)Xi.call(n,c)&&!qi.hasOwnProperty(c)&&(r[c]=n[c]===void 0&&o!==void 0?o[c]:n[c])}var c=arguments.length-2;if(c===1)r.children=t;else if(1<c){o=Array(c);for(var d=0;d<c;d++)o[d]=arguments[d+2];r.children=o}return{$$typeof:Gt,type:e.type,key:a,ref:l,props:r,_owner:i}};b.createContext=function(e){return e={$$typeof:cu,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:ou,_context:e},e.Consumer=e};b.createElement=Yi;b.createFactory=function(e){var n=Yi.bind(null,e);return n.type=e,n};b.createRef=function(){return{current:null}};b.forwardRef=function(e){return{$$typeof:uu,render:e}};b.isValidElement=Ba;b.lazy=function(e){return{$$typeof:fu,_payload:{_status:-1,_result:e},_init:vu}};b.memo=function(e,n){return{$$typeof:pu,type:e,compare:n===void 0?null:n}};b.startTransition=function(e){var n=wr.transition;wr.transition={};try{e()}finally{wr.transition=n}};b.unstable_act=Zi;b.useCallback=function(e,n){return oe.current.useCallback(e,n)};b.useContext=function(e){return oe.current.useContext(e)};b.useDebugValue=function(){};b.useDeferredValue=function(e){return oe.current.useDeferredValue(e)};b.useEffect=function(e,n){return oe.current.useEffect(e,n)};b.useId=function(){return oe.current.useId()};b.useImperativeHandle=function(e,n,t){return oe.current.useImperativeHandle(e,n,t)};b.useInsertionEffect=function(e,n){return oe.current.useInsertionEffect(e,n)};b.useLayoutEffect=function(e,n){return oe.current.useLayoutEffect(e,n)};b.useMemo=function(e,n){return oe.current.useMemo(e,n)};b.useReducer=function(e,n,t){return oe.current.useReducer(e,n,t)};b.useRef=function(e){return oe.current.useRef(e)};b.useState=function(e){return oe.current.useState(e)};b.useSyncExternalStore=function(e,n,t){return oe.current.useSyncExternalStore(e,n,t)};b.useTransition=function(){return oe.current.useTransition()};b.version="18.3.1";Wi.exports=b;var Va=Wi.exports;/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var wu=Va,yu=Symbol.for("react.element"),ju=Symbol.for("react.fragment"),Nu=Object.prototype.hasOwnProperty,ku=wu.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Cu={key:!0,ref:!0,__self:!0,__source:!0};function Ji(e,n,t){var r,a={},l=null,i=null;t!==void 0&&(l=""+t),n.key!==void 0&&(l=""+n.key),n.ref!==void 0&&(i=n.ref);for(r in n)Nu.call(n,r)&&!Cu.hasOwnProperty(r)&&(a[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps,n)a[r]===void 0&&(a[r]=n[r]);return{$$typeof:yu,type:e,key:l,ref:i,props:a,_owner:ku.current}}es.Fragment=ju;es.jsx=Ji;es.jsxs=Ji;$i.exports=es;var s=$i.exports,eo={exports:{}},we={},no={exports:{}},to={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function n(C,P){var T=C.length;C.push(P);e:for(;0<T;){var H=T-1>>>1,q=C[H];if(0<a(q,P))C[H]=P,C[T]=q,T=H;else break e}}function t(C){return C.length===0?null:C[0]}function r(C){if(C.length===0)return null;var P=C[0],T=C.pop();if(T!==P){C[0]=T;e:for(var H=0,q=C.length,Jt=q>>>1;H<Jt;){var vn=2*(H+1)-1,xs=C[vn],xn=vn+1,er=C[xn];if(0>a(xs,T))xn<q&&0>a(er,xs)?(C[H]=er,C[xn]=T,H=xn):(C[H]=xs,C[vn]=T,H=vn);else if(xn<q&&0>a(er,T))C[H]=er,C[xn]=T,H=xn;else break e}}return P}function a(C,P){var T=C.sortIndex-P.sortIndex;return T!==0?T:C.id-P.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;e.unstable_now=function(){return l.now()}}else{var i=Date,o=i.now();e.unstable_now=function(){return i.now()-o}}var c=[],d=[],g=1,h=null,m=3,w=!1,y=!1,j=!1,A=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,u=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function f(C){for(var P=t(d);P!==null;){if(P.callback===null)r(d);else if(P.startTime<=C)r(d),P.sortIndex=P.expirationTime,n(c,P);else break;P=t(d)}}function v(C){if(j=!1,f(C),!y)if(t(c)!==null)y=!0,gs(k);else{var P=t(d);P!==null&&vs(v,P.startTime-C)}}function k(C,P){y=!1,j&&(j=!1,p(z),z=-1),w=!0;var T=m;try{for(f(P),h=t(c);h!==null&&(!(h.expirationTime>P)||C&&!Ee());){var H=h.callback;if(typeof H=="function"){h.callback=null,m=h.priorityLevel;var q=H(h.expirationTime<=P);P=e.unstable_now(),typeof q=="function"?h.callback=q:h===t(c)&&r(c),f(P)}else r(c);h=t(c)}if(h!==null)var Jt=!0;else{var vn=t(d);vn!==null&&vs(v,vn.startTime-P),Jt=!1}return Jt}finally{h=null,m=T,w=!1}}var _=!1,E=null,z=-1,W=5,L=-1;function Ee(){return!(e.unstable_now()-L<W)}function ot(){if(E!==null){var C=e.unstable_now();L=C;var P=!0;try{P=E(!0,C)}finally{P?ct():(_=!1,E=null)}}else _=!1}var ct;if(typeof u=="function")ct=function(){u(ot)};else if(typeof MessageChannel<"u"){var Ll=new MessageChannel,ru=Ll.port2;Ll.port1.onmessage=ot,ct=function(){ru.postMessage(null)}}else ct=function(){A(ot,0)};function gs(C){E=C,_||(_=!0,ct())}function vs(C,P){z=A(function(){C(e.unstable_now())},P)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(C){C.callback=null},e.unstable_continueExecution=function(){y||w||(y=!0,gs(k))},e.unstable_forceFrameRate=function(C){0>C||125<C?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):W=0<C?Math.floor(1e3/C):5},e.unstable_getCurrentPriorityLevel=function(){return m},e.unstable_getFirstCallbackNode=function(){return t(c)},e.unstable_next=function(C){switch(m){case 1:case 2:case 3:var P=3;break;default:P=m}var T=m;m=P;try{return C()}finally{m=T}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(C,P){switch(C){case 1:case 2:case 3:case 4:case 5:break;default:C=3}var T=m;m=C;try{return P()}finally{m=T}},e.unstable_scheduleCallback=function(C,P,T){var H=e.unstable_now();switch(typeof T=="object"&&T!==null?(T=T.delay,T=typeof T=="number"&&0<T?H+T:H):T=H,C){case 1:var q=-1;break;case 2:q=250;break;case 5:q=1073741823;break;case 4:q=1e4;break;default:q=5e3}return q=T+q,C={id:g++,callback:P,priorityLevel:C,startTime:T,expirationTime:q,sortIndex:-1},T>H?(C.sortIndex=T,n(d,C),t(c)===null&&C===t(d)&&(j?(p(z),z=-1):j=!0,vs(v,T-H))):(C.sortIndex=q,n(c,C),y||w||(y=!0,gs(k))),C},e.unstable_shouldYield=Ee,e.unstable_wrapCallback=function(C){var P=m;return function(){var T=m;m=P;try{return C.apply(this,arguments)}finally{m=T}}}})(to);no.exports=to;var Su=no.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _u=Va,xe=Su;function x(e){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)n+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var ro=new Set,bt={};function bn(e,n){Zn(e,n),Zn(e+"Capture",n)}function Zn(e,n){for(bt[e]=n,e=0;e<n.length;e++)ro.add(n[e])}var He=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Hs=Object.prototype.hasOwnProperty,Eu=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Ol={},Fl={};function zu(e){return Hs.call(Fl,e)?!0:Hs.call(Ol,e)?!1:Eu.test(e)?Fl[e]=!0:(Ol[e]=!0,!1)}function Pu(e,n,t,r){if(t!==null&&t.type===0)return!1;switch(typeof n){case"function":case"symbol":return!0;case"boolean":return r?!1:t!==null?!t.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Tu(e,n,t,r){if(n===null||typeof n>"u"||Pu(e,n,t,r))return!0;if(r)return!1;if(t!==null)switch(t.type){case 3:return!n;case 4:return n===!1;case 5:return isNaN(n);case 6:return isNaN(n)||1>n}return!1}function ce(e,n,t,r,a,l,i){this.acceptsBooleans=n===2||n===3||n===4,this.attributeName=r,this.attributeNamespace=a,this.mustUseProperty=t,this.propertyName=e,this.type=n,this.sanitizeURL=l,this.removeEmptyString=i}var ne={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ne[e]=new ce(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var n=e[0];ne[n]=new ce(n,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ne[e]=new ce(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ne[e]=new ce(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ne[e]=new ce(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ne[e]=new ce(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ne[e]=new ce(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ne[e]=new ce(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ne[e]=new ce(e,5,!1,e.toLowerCase(),null,!1,!1)});var Ua=/[\-:]([a-z])/g;function $a(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var n=e.replace(Ua,$a);ne[n]=new ce(n,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var n=e.replace(Ua,$a);ne[n]=new ce(n,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var n=e.replace(Ua,$a);ne[n]=new ce(n,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ne[e]=new ce(e,1,!1,e.toLowerCase(),null,!1,!1)});ne.xlinkHref=new ce("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ne[e]=new ce(e,1,!1,e.toLowerCase(),null,!0,!0)});function Wa(e,n,t,r){var a=ne.hasOwnProperty(n)?ne[n]:null;(a!==null?a.type!==0:r||!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(Tu(n,t,a,r)&&(t=null),r||a===null?zu(n)&&(t===null?e.removeAttribute(n):e.setAttribute(n,""+t)):a.mustUseProperty?e[a.propertyName]=t===null?a.type===3?!1:"":t:(n=a.attributeName,r=a.attributeNamespace,t===null?e.removeAttribute(n):(a=a.type,t=a===3||a===4&&t===!0?"":""+t,r?e.setAttributeNS(r,n,t):e.setAttribute(n,t))))}var Xe=_u.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,tr=Symbol.for("react.element"),In=Symbol.for("react.portal"),Rn=Symbol.for("react.fragment"),Ha=Symbol.for("react.strict_mode"),Qs=Symbol.for("react.profiler"),so=Symbol.for("react.provider"),ao=Symbol.for("react.context"),Qa=Symbol.for("react.forward_ref"),Ks=Symbol.for("react.suspense"),Gs=Symbol.for("react.suspense_list"),Ka=Symbol.for("react.memo"),Ye=Symbol.for("react.lazy"),lo=Symbol.for("react.offscreen"),Al=Symbol.iterator;function ut(e){return e===null||typeof e!="object"?null:(e=Al&&e[Al]||e["@@iterator"],typeof e=="function"?e:null)}var U=Object.assign,ys;function xt(e){if(ys===void 0)try{throw Error()}catch(t){var n=t.stack.trim().match(/\n( *(at )?)/);ys=n&&n[1]||""}return`
`+ys+e}var js=!1;function Ns(e,n){if(!e||js)return"";js=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(n)if(n=function(){throw Error()},Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(n,[])}catch(d){var r=d}Reflect.construct(e,[],n)}else{try{n.call()}catch(d){r=d}e.call(n.prototype)}else{try{throw Error()}catch(d){r=d}e()}}catch(d){if(d&&r&&typeof d.stack=="string"){for(var a=d.stack.split(`
`),l=r.stack.split(`
`),i=a.length-1,o=l.length-1;1<=i&&0<=o&&a[i]!==l[o];)o--;for(;1<=i&&0<=o;i--,o--)if(a[i]!==l[o]){if(i!==1||o!==1)do if(i--,o--,0>o||a[i]!==l[o]){var c=`
`+a[i].replace(" at new "," at ");return e.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",e.displayName)),c}while(1<=i&&0<=o);break}}}finally{js=!1,Error.prepareStackTrace=t}return(e=e?e.displayName||e.name:"")?xt(e):""}function bu(e){switch(e.tag){case 5:return xt(e.type);case 16:return xt("Lazy");case 13:return xt("Suspense");case 19:return xt("SuspenseList");case 0:case 2:case 15:return e=Ns(e.type,!1),e;case 11:return e=Ns(e.type.render,!1),e;case 1:return e=Ns(e.type,!0),e;default:return""}}function Xs(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Rn:return"Fragment";case In:return"Portal";case Qs:return"Profiler";case Ha:return"StrictMode";case Ks:return"Suspense";case Gs:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case ao:return(e.displayName||"Context")+".Consumer";case so:return(e._context.displayName||"Context")+".Provider";case Qa:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Ka:return n=e.displayName||null,n!==null?n:Xs(e.type)||"Memo";case Ye:n=e._payload,e=e._init;try{return Xs(e(n))}catch{}}return null}function Lu(e){var n=e.type;switch(e.tag){case 24:return"Cache";case 9:return(n.displayName||"Context")+".Consumer";case 10:return(n._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=n.render,e=e.displayName||e.name||"",n.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return n;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Xs(n);case 8:return n===Ha?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n}return null}function pn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function io(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Mu(e){var n=io(e)?"checked":"value",t=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),r=""+e[n];if(!e.hasOwnProperty(n)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var a=t.get,l=t.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return a.call(this)},set:function(i){r=""+i,l.call(this,i)}}),Object.defineProperty(e,n,{enumerable:t.enumerable}),{getValue:function(){return r},setValue:function(i){r=""+i},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function rr(e){e._valueTracker||(e._valueTracker=Mu(e))}function oo(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var t=n.getValue(),r="";return e&&(r=io(e)?e.checked?"true":"false":e.value),e=r,e!==t?(n.setValue(e),!0):!1}function Tr(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function qs(e,n){var t=n.checked;return U({},n,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??e._wrapperState.initialChecked})}function Dl(e,n){var t=n.defaultValue==null?"":n.defaultValue,r=n.checked!=null?n.checked:n.defaultChecked;t=pn(n.value!=null?n.value:t),e._wrapperState={initialChecked:r,initialValue:t,controlled:n.type==="checkbox"||n.type==="radio"?n.checked!=null:n.value!=null}}function co(e,n){n=n.checked,n!=null&&Wa(e,"checked",n,!1)}function Ys(e,n){co(e,n);var t=pn(n.value),r=n.type;if(t!=null)r==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+t):e.value!==""+t&&(e.value=""+t);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}n.hasOwnProperty("value")?Zs(e,n.type,t):n.hasOwnProperty("defaultValue")&&Zs(e,n.type,pn(n.defaultValue)),n.checked==null&&n.defaultChecked!=null&&(e.defaultChecked=!!n.defaultChecked)}function Bl(e,n,t){if(n.hasOwnProperty("value")||n.hasOwnProperty("defaultValue")){var r=n.type;if(!(r!=="submit"&&r!=="reset"||n.value!==void 0&&n.value!==null))return;n=""+e._wrapperState.initialValue,t||n===e.value||(e.value=n),e.defaultValue=n}t=e.name,t!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,t!==""&&(e.name=t)}function Zs(e,n,t){(n!=="number"||Tr(e.ownerDocument)!==e)&&(t==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+t&&(e.defaultValue=""+t))}var wt=Array.isArray;function Qn(e,n,t,r){if(e=e.options,n){n={};for(var a=0;a<t.length;a++)n["$"+t[a]]=!0;for(t=0;t<e.length;t++)a=n.hasOwnProperty("$"+e[t].value),e[t].selected!==a&&(e[t].selected=a),a&&r&&(e[t].defaultSelected=!0)}else{for(t=""+pn(t),n=null,a=0;a<e.length;a++){if(e[a].value===t){e[a].selected=!0,r&&(e[a].defaultSelected=!0);return}n!==null||e[a].disabled||(n=e[a])}n!==null&&(n.selected=!0)}}function Js(e,n){if(n.dangerouslySetInnerHTML!=null)throw Error(x(91));return U({},n,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Vl(e,n){var t=n.value;if(t==null){if(t=n.children,n=n.defaultValue,t!=null){if(n!=null)throw Error(x(92));if(wt(t)){if(1<t.length)throw Error(x(93));t=t[0]}n=t}n==null&&(n=""),t=n}e._wrapperState={initialValue:pn(t)}}function uo(e,n){var t=pn(n.value),r=pn(n.defaultValue);t!=null&&(t=""+t,t!==e.value&&(e.value=t),n.defaultValue==null&&e.defaultValue!==t&&(e.defaultValue=t)),r!=null&&(e.defaultValue=""+r)}function Ul(e){var n=e.textContent;n===e._wrapperState.initialValue&&n!==""&&n!==null&&(e.value=n)}function po(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ea(e,n){return e==null||e==="http://www.w3.org/1999/xhtml"?po(n):e==="http://www.w3.org/2000/svg"&&n==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var sr,fo=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(n,t,r,a){MSApp.execUnsafeLocalFunction(function(){return e(n,t,r,a)})}:e}(function(e,n){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=n;else{for(sr=sr||document.createElement("div"),sr.innerHTML="<svg>"+n.valueOf().toString()+"</svg>",n=sr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;n.firstChild;)e.appendChild(n.firstChild)}});function Lt(e,n){if(n){var t=e.firstChild;if(t&&t===e.lastChild&&t.nodeType===3){t.nodeValue=n;return}}e.textContent=n}var Nt={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Iu=["Webkit","ms","Moz","O"];Object.keys(Nt).forEach(function(e){Iu.forEach(function(n){n=n+e.charAt(0).toUpperCase()+e.substring(1),Nt[n]=Nt[e]})});function mo(e,n,t){return n==null||typeof n=="boolean"||n===""?"":t||typeof n!="number"||n===0||Nt.hasOwnProperty(e)&&Nt[e]?(""+n).trim():n+"px"}function ho(e,n){e=e.style;for(var t in n)if(n.hasOwnProperty(t)){var r=t.indexOf("--")===0,a=mo(t,n[t],r);t==="float"&&(t="cssFloat"),r?e.setProperty(t,a):e[t]=a}}var Ru=U({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function na(e,n){if(n){if(Ru[e]&&(n.children!=null||n.dangerouslySetInnerHTML!=null))throw Error(x(137,e));if(n.dangerouslySetInnerHTML!=null){if(n.children!=null)throw Error(x(60));if(typeof n.dangerouslySetInnerHTML!="object"||!("__html"in n.dangerouslySetInnerHTML))throw Error(x(61))}if(n.style!=null&&typeof n.style!="object")throw Error(x(62))}}function ta(e,n){if(e.indexOf("-")===-1)return typeof n.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ra=null;function Ga(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var sa=null,Kn=null,Gn=null;function $l(e){if(e=Yt(e)){if(typeof sa!="function")throw Error(x(280));var n=e.stateNode;n&&(n=as(n),sa(e.stateNode,e.type,n))}}function go(e){Kn?Gn?Gn.push(e):Gn=[e]:Kn=e}function vo(){if(Kn){var e=Kn,n=Gn;if(Gn=Kn=null,$l(e),n)for(e=0;e<n.length;e++)$l(n[e])}}function xo(e,n){return e(n)}function wo(){}var ks=!1;function yo(e,n,t){if(ks)return e(n,t);ks=!0;try{return xo(e,n,t)}finally{ks=!1,(Kn!==null||Gn!==null)&&(wo(),vo())}}function Mt(e,n){var t=e.stateNode;if(t===null)return null;var r=as(t);if(r===null)return null;t=r[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(t&&typeof t!="function")throw Error(x(231,n,typeof t));return t}var aa=!1;if(He)try{var dt={};Object.defineProperty(dt,"passive",{get:function(){aa=!0}}),window.addEventListener("test",dt,dt),window.removeEventListener("test",dt,dt)}catch{aa=!1}function Ou(e,n,t,r,a,l,i,o,c){var d=Array.prototype.slice.call(arguments,3);try{n.apply(t,d)}catch(g){this.onError(g)}}var kt=!1,br=null,Lr=!1,la=null,Fu={onError:function(e){kt=!0,br=e}};function Au(e,n,t,r,a,l,i,o,c){kt=!1,br=null,Ou.apply(Fu,arguments)}function Du(e,n,t,r,a,l,i,o,c){if(Au.apply(this,arguments),kt){if(kt){var d=br;kt=!1,br=null}else throw Error(x(198));Lr||(Lr=!0,la=d)}}function Ln(e){var n=e,t=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,n.flags&4098&&(t=n.return),e=n.return;while(e)}return n.tag===3?t:null}function jo(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function Wl(e){if(Ln(e)!==e)throw Error(x(188))}function Bu(e){var n=e.alternate;if(!n){if(n=Ln(e),n===null)throw Error(x(188));return n!==e?null:e}for(var t=e,r=n;;){var a=t.return;if(a===null)break;var l=a.alternate;if(l===null){if(r=a.return,r!==null){t=r;continue}break}if(a.child===l.child){for(l=a.child;l;){if(l===t)return Wl(a),e;if(l===r)return Wl(a),n;l=l.sibling}throw Error(x(188))}if(t.return!==r.return)t=a,r=l;else{for(var i=!1,o=a.child;o;){if(o===t){i=!0,t=a,r=l;break}if(o===r){i=!0,r=a,t=l;break}o=o.sibling}if(!i){for(o=l.child;o;){if(o===t){i=!0,t=l,r=a;break}if(o===r){i=!0,r=l,t=a;break}o=o.sibling}if(!i)throw Error(x(189))}}if(t.alternate!==r)throw Error(x(190))}if(t.tag!==3)throw Error(x(188));return t.stateNode.current===t?e:n}function No(e){return e=Bu(e),e!==null?ko(e):null}function ko(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var n=ko(e);if(n!==null)return n;e=e.sibling}return null}var Co=xe.unstable_scheduleCallback,Hl=xe.unstable_cancelCallback,Vu=xe.unstable_shouldYield,Uu=xe.unstable_requestPaint,Q=xe.unstable_now,$u=xe.unstable_getCurrentPriorityLevel,Xa=xe.unstable_ImmediatePriority,So=xe.unstable_UserBlockingPriority,Mr=xe.unstable_NormalPriority,Wu=xe.unstable_LowPriority,_o=xe.unstable_IdlePriority,ns=null,Ae=null;function Hu(e){if(Ae&&typeof Ae.onCommitFiberRoot=="function")try{Ae.onCommitFiberRoot(ns,e,void 0,(e.current.flags&128)===128)}catch{}}var Le=Math.clz32?Math.clz32:Gu,Qu=Math.log,Ku=Math.LN2;function Gu(e){return e>>>=0,e===0?32:31-(Qu(e)/Ku|0)|0}var ar=64,lr=4194304;function yt(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Ir(e,n){var t=e.pendingLanes;if(t===0)return 0;var r=0,a=e.suspendedLanes,l=e.pingedLanes,i=t&268435455;if(i!==0){var o=i&~a;o!==0?r=yt(o):(l&=i,l!==0&&(r=yt(l)))}else i=t&~a,i!==0?r=yt(i):l!==0&&(r=yt(l));if(r===0)return 0;if(n!==0&&n!==r&&!(n&a)&&(a=r&-r,l=n&-n,a>=l||a===16&&(l&4194240)!==0))return n;if(r&4&&(r|=t&16),n=e.entangledLanes,n!==0)for(e=e.entanglements,n&=r;0<n;)t=31-Le(n),a=1<<t,r|=e[t],n&=~a;return r}function Xu(e,n){switch(e){case 1:case 2:case 4:return n+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function qu(e,n){for(var t=e.suspendedLanes,r=e.pingedLanes,a=e.expirationTimes,l=e.pendingLanes;0<l;){var i=31-Le(l),o=1<<i,c=a[i];c===-1?(!(o&t)||o&r)&&(a[i]=Xu(o,n)):c<=n&&(e.expiredLanes|=o),l&=~o}}function ia(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Eo(){var e=ar;return ar<<=1,!(ar&4194240)&&(ar=64),e}function Cs(e){for(var n=[],t=0;31>t;t++)n.push(e);return n}function Xt(e,n,t){e.pendingLanes|=n,n!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,n=31-Le(n),e[n]=t}function Yu(e,n){var t=e.pendingLanes&~n;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=n,e.mutableReadLanes&=n,e.entangledLanes&=n,n=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<t;){var a=31-Le(t),l=1<<a;n[a]=0,r[a]=-1,e[a]=-1,t&=~l}}function qa(e,n){var t=e.entangledLanes|=n;for(e=e.entanglements;t;){var r=31-Le(t),a=1<<r;a&n|e[r]&n&&(e[r]|=n),t&=~a}}var I=0;function zo(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Po,Ya,To,bo,Lo,oa=!1,ir=[],rn=null,sn=null,an=null,It=new Map,Rt=new Map,Je=[],Zu="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ql(e,n){switch(e){case"focusin":case"focusout":rn=null;break;case"dragenter":case"dragleave":sn=null;break;case"mouseover":case"mouseout":an=null;break;case"pointerover":case"pointerout":It.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Rt.delete(n.pointerId)}}function pt(e,n,t,r,a,l){return e===null||e.nativeEvent!==l?(e={blockedOn:n,domEventName:t,eventSystemFlags:r,nativeEvent:l,targetContainers:[a]},n!==null&&(n=Yt(n),n!==null&&Ya(n)),e):(e.eventSystemFlags|=r,n=e.targetContainers,a!==null&&n.indexOf(a)===-1&&n.push(a),e)}function Ju(e,n,t,r,a){switch(n){case"focusin":return rn=pt(rn,e,n,t,r,a),!0;case"dragenter":return sn=pt(sn,e,n,t,r,a),!0;case"mouseover":return an=pt(an,e,n,t,r,a),!0;case"pointerover":var l=a.pointerId;return It.set(l,pt(It.get(l)||null,e,n,t,r,a)),!0;case"gotpointercapture":return l=a.pointerId,Rt.set(l,pt(Rt.get(l)||null,e,n,t,r,a)),!0}return!1}function Mo(e){var n=jn(e.target);if(n!==null){var t=Ln(n);if(t!==null){if(n=t.tag,n===13){if(n=jo(t),n!==null){e.blockedOn=n,Lo(e.priority,function(){To(t)});return}}else if(n===3&&t.stateNode.current.memoizedState.isDehydrated){e.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}e.blockedOn=null}function yr(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var t=ca(e.domEventName,e.eventSystemFlags,n[0],e.nativeEvent);if(t===null){t=e.nativeEvent;var r=new t.constructor(t.type,t);ra=r,t.target.dispatchEvent(r),ra=null}else return n=Yt(t),n!==null&&Ya(n),e.blockedOn=t,!1;n.shift()}return!0}function Kl(e,n,t){yr(e)&&t.delete(n)}function ed(){oa=!1,rn!==null&&yr(rn)&&(rn=null),sn!==null&&yr(sn)&&(sn=null),an!==null&&yr(an)&&(an=null),It.forEach(Kl),Rt.forEach(Kl)}function ft(e,n){e.blockedOn===n&&(e.blockedOn=null,oa||(oa=!0,xe.unstable_scheduleCallback(xe.unstable_NormalPriority,ed)))}function Ot(e){function n(a){return ft(a,e)}if(0<ir.length){ft(ir[0],e);for(var t=1;t<ir.length;t++){var r=ir[t];r.blockedOn===e&&(r.blockedOn=null)}}for(rn!==null&&ft(rn,e),sn!==null&&ft(sn,e),an!==null&&ft(an,e),It.forEach(n),Rt.forEach(n),t=0;t<Je.length;t++)r=Je[t],r.blockedOn===e&&(r.blockedOn=null);for(;0<Je.length&&(t=Je[0],t.blockedOn===null);)Mo(t),t.blockedOn===null&&Je.shift()}var Xn=Xe.ReactCurrentBatchConfig,Rr=!0;function nd(e,n,t,r){var a=I,l=Xn.transition;Xn.transition=null;try{I=1,Za(e,n,t,r)}finally{I=a,Xn.transition=l}}function td(e,n,t,r){var a=I,l=Xn.transition;Xn.transition=null;try{I=4,Za(e,n,t,r)}finally{I=a,Xn.transition=l}}function Za(e,n,t,r){if(Rr){var a=ca(e,n,t,r);if(a===null)Is(e,n,r,Or,t),Ql(e,r);else if(Ju(a,e,n,t,r))r.stopPropagation();else if(Ql(e,r),n&4&&-1<Zu.indexOf(e)){for(;a!==null;){var l=Yt(a);if(l!==null&&Po(l),l=ca(e,n,t,r),l===null&&Is(e,n,r,Or,t),l===a)break;a=l}a!==null&&r.stopPropagation()}else Is(e,n,r,null,t)}}var Or=null;function ca(e,n,t,r){if(Or=null,e=Ga(r),e=jn(e),e!==null)if(n=Ln(e),n===null)e=null;else if(t=n.tag,t===13){if(e=jo(n),e!==null)return e;e=null}else if(t===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null);return Or=e,null}function Io(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch($u()){case Xa:return 1;case So:return 4;case Mr:case Wu:return 16;case _o:return 536870912;default:return 16}default:return 16}}var nn=null,Ja=null,jr=null;function Ro(){if(jr)return jr;var e,n=Ja,t=n.length,r,a="value"in nn?nn.value:nn.textContent,l=a.length;for(e=0;e<t&&n[e]===a[e];e++);var i=t-e;for(r=1;r<=i&&n[t-r]===a[l-r];r++);return jr=a.slice(e,1<r?1-r:void 0)}function Nr(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function or(){return!0}function Gl(){return!1}function ye(e){function n(t,r,a,l,i){this._reactName=t,this._targetInst=a,this.type=r,this.nativeEvent=l,this.target=i,this.currentTarget=null;for(var o in e)e.hasOwnProperty(o)&&(t=e[o],this[o]=t?t(l):l[o]);return this.isDefaultPrevented=(l.defaultPrevented!=null?l.defaultPrevented:l.returnValue===!1)?or:Gl,this.isPropagationStopped=Gl,this}return U(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=or)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=or)},persist:function(){},isPersistent:or}),n}var lt={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},el=ye(lt),qt=U({},lt,{view:0,detail:0}),rd=ye(qt),Ss,_s,mt,ts=U({},qt,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:nl,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==mt&&(mt&&e.type==="mousemove"?(Ss=e.screenX-mt.screenX,_s=e.screenY-mt.screenY):_s=Ss=0,mt=e),Ss)},movementY:function(e){return"movementY"in e?e.movementY:_s}}),Xl=ye(ts),sd=U({},ts,{dataTransfer:0}),ad=ye(sd),ld=U({},qt,{relatedTarget:0}),Es=ye(ld),id=U({},lt,{animationName:0,elapsedTime:0,pseudoElement:0}),od=ye(id),cd=U({},lt,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),ud=ye(cd),dd=U({},lt,{data:0}),ql=ye(dd),pd={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},fd={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},md={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function hd(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=md[e])?!!n[e]:!1}function nl(){return hd}var gd=U({},qt,{key:function(e){if(e.key){var n=pd[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=Nr(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?fd[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:nl,charCode:function(e){return e.type==="keypress"?Nr(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Nr(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),vd=ye(gd),xd=U({},ts,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Yl=ye(xd),wd=U({},qt,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:nl}),yd=ye(wd),jd=U({},lt,{propertyName:0,elapsedTime:0,pseudoElement:0}),Nd=ye(jd),kd=U({},ts,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Cd=ye(kd),Sd=[9,13,27,32],tl=He&&"CompositionEvent"in window,Ct=null;He&&"documentMode"in document&&(Ct=document.documentMode);var _d=He&&"TextEvent"in window&&!Ct,Oo=He&&(!tl||Ct&&8<Ct&&11>=Ct),Zl=" ",Jl=!1;function Fo(e,n){switch(e){case"keyup":return Sd.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ao(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var On=!1;function Ed(e,n){switch(e){case"compositionend":return Ao(n);case"keypress":return n.which!==32?null:(Jl=!0,Zl);case"textInput":return e=n.data,e===Zl&&Jl?null:e;default:return null}}function zd(e,n){if(On)return e==="compositionend"||!tl&&Fo(e,n)?(e=Ro(),jr=Ja=nn=null,On=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Oo&&n.locale!=="ko"?null:n.data;default:return null}}var Pd={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ei(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!Pd[e.type]:n==="textarea"}function Do(e,n,t,r){go(r),n=Fr(n,"onChange"),0<n.length&&(t=new el("onChange","change",null,t,r),e.push({event:t,listeners:n}))}var St=null,Ft=null;function Td(e){qo(e,0)}function rs(e){var n=Dn(e);if(oo(n))return e}function bd(e,n){if(e==="change")return n}var Bo=!1;if(He){var zs;if(He){var Ps="oninput"in document;if(!Ps){var ni=document.createElement("div");ni.setAttribute("oninput","return;"),Ps=typeof ni.oninput=="function"}zs=Ps}else zs=!1;Bo=zs&&(!document.documentMode||9<document.documentMode)}function ti(){St&&(St.detachEvent("onpropertychange",Vo),Ft=St=null)}function Vo(e){if(e.propertyName==="value"&&rs(Ft)){var n=[];Do(n,Ft,e,Ga(e)),yo(Td,n)}}function Ld(e,n,t){e==="focusin"?(ti(),St=n,Ft=t,St.attachEvent("onpropertychange",Vo)):e==="focusout"&&ti()}function Md(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return rs(Ft)}function Id(e,n){if(e==="click")return rs(n)}function Rd(e,n){if(e==="input"||e==="change")return rs(n)}function Od(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var Ie=typeof Object.is=="function"?Object.is:Od;function At(e,n){if(Ie(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var t=Object.keys(e),r=Object.keys(n);if(t.length!==r.length)return!1;for(r=0;r<t.length;r++){var a=t[r];if(!Hs.call(n,a)||!Ie(e[a],n[a]))return!1}return!0}function ri(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function si(e,n){var t=ri(e);e=0;for(var r;t;){if(t.nodeType===3){if(r=e+t.textContent.length,e<=n&&r>=n)return{node:t,offset:n-e};e=r}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=ri(t)}}function Uo(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?Uo(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function $o(){for(var e=window,n=Tr();n instanceof e.HTMLIFrameElement;){try{var t=typeof n.contentWindow.location.href=="string"}catch{t=!1}if(t)e=n.contentWindow;else break;n=Tr(e.document)}return n}function rl(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}function Fd(e){var n=$o(),t=e.focusedElem,r=e.selectionRange;if(n!==t&&t&&t.ownerDocument&&Uo(t.ownerDocument.documentElement,t)){if(r!==null&&rl(t)){if(n=r.start,e=r.end,e===void 0&&(e=n),"selectionStart"in t)t.selectionStart=n,t.selectionEnd=Math.min(e,t.value.length);else if(e=(n=t.ownerDocument||document)&&n.defaultView||window,e.getSelection){e=e.getSelection();var a=t.textContent.length,l=Math.min(r.start,a);r=r.end===void 0?l:Math.min(r.end,a),!e.extend&&l>r&&(a=r,r=l,l=a),a=si(t,l);var i=si(t,r);a&&i&&(e.rangeCount!==1||e.anchorNode!==a.node||e.anchorOffset!==a.offset||e.focusNode!==i.node||e.focusOffset!==i.offset)&&(n=n.createRange(),n.setStart(a.node,a.offset),e.removeAllRanges(),l>r?(e.addRange(n),e.extend(i.node,i.offset)):(n.setEnd(i.node,i.offset),e.addRange(n)))}}for(n=[],e=t;e=e.parentNode;)e.nodeType===1&&n.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<n.length;t++)e=n[t],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Ad=He&&"documentMode"in document&&11>=document.documentMode,Fn=null,ua=null,_t=null,da=!1;function ai(e,n,t){var r=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;da||Fn==null||Fn!==Tr(r)||(r=Fn,"selectionStart"in r&&rl(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),_t&&At(_t,r)||(_t=r,r=Fr(ua,"onSelect"),0<r.length&&(n=new el("onSelect","select",null,n,t),e.push({event:n,listeners:r}),n.target=Fn)))}function cr(e,n){var t={};return t[e.toLowerCase()]=n.toLowerCase(),t["Webkit"+e]="webkit"+n,t["Moz"+e]="moz"+n,t}var An={animationend:cr("Animation","AnimationEnd"),animationiteration:cr("Animation","AnimationIteration"),animationstart:cr("Animation","AnimationStart"),transitionend:cr("Transition","TransitionEnd")},Ts={},Wo={};He&&(Wo=document.createElement("div").style,"AnimationEvent"in window||(delete An.animationend.animation,delete An.animationiteration.animation,delete An.animationstart.animation),"TransitionEvent"in window||delete An.transitionend.transition);function ss(e){if(Ts[e])return Ts[e];if(!An[e])return e;var n=An[e],t;for(t in n)if(n.hasOwnProperty(t)&&t in Wo)return Ts[e]=n[t];return e}var Ho=ss("animationend"),Qo=ss("animationiteration"),Ko=ss("animationstart"),Go=ss("transitionend"),Xo=new Map,li="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function mn(e,n){Xo.set(e,n),bn(n,[e])}for(var bs=0;bs<li.length;bs++){var Ls=li[bs],Dd=Ls.toLowerCase(),Bd=Ls[0].toUpperCase()+Ls.slice(1);mn(Dd,"on"+Bd)}mn(Ho,"onAnimationEnd");mn(Qo,"onAnimationIteration");mn(Ko,"onAnimationStart");mn("dblclick","onDoubleClick");mn("focusin","onFocus");mn("focusout","onBlur");mn(Go,"onTransitionEnd");Zn("onMouseEnter",["mouseout","mouseover"]);Zn("onMouseLeave",["mouseout","mouseover"]);Zn("onPointerEnter",["pointerout","pointerover"]);Zn("onPointerLeave",["pointerout","pointerover"]);bn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));bn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));bn("onBeforeInput",["compositionend","keypress","textInput","paste"]);bn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));bn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));bn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var jt="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Vd=new Set("cancel close invalid load scroll toggle".split(" ").concat(jt));function ii(e,n,t){var r=e.type||"unknown-event";e.currentTarget=t,Du(r,n,void 0,e),e.currentTarget=null}function qo(e,n){n=(n&4)!==0;for(var t=0;t<e.length;t++){var r=e[t],a=r.event;r=r.listeners;e:{var l=void 0;if(n)for(var i=r.length-1;0<=i;i--){var o=r[i],c=o.instance,d=o.currentTarget;if(o=o.listener,c!==l&&a.isPropagationStopped())break e;ii(a,o,d),l=c}else for(i=0;i<r.length;i++){if(o=r[i],c=o.instance,d=o.currentTarget,o=o.listener,c!==l&&a.isPropagationStopped())break e;ii(a,o,d),l=c}}}if(Lr)throw e=la,Lr=!1,la=null,e}function O(e,n){var t=n[ga];t===void 0&&(t=n[ga]=new Set);var r=e+"__bubble";t.has(r)||(Yo(n,e,2,!1),t.add(r))}function Ms(e,n,t){var r=0;n&&(r|=4),Yo(t,e,r,n)}var ur="_reactListening"+Math.random().toString(36).slice(2);function Dt(e){if(!e[ur]){e[ur]=!0,ro.forEach(function(t){t!=="selectionchange"&&(Vd.has(t)||Ms(t,!1,e),Ms(t,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[ur]||(n[ur]=!0,Ms("selectionchange",!1,n))}}function Yo(e,n,t,r){switch(Io(n)){case 1:var a=nd;break;case 4:a=td;break;default:a=Za}t=a.bind(null,n,t,e),a=void 0,!aa||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(a=!0),r?a!==void 0?e.addEventListener(n,t,{capture:!0,passive:a}):e.addEventListener(n,t,!0):a!==void 0?e.addEventListener(n,t,{passive:a}):e.addEventListener(n,t,!1)}function Is(e,n,t,r,a){var l=r;if(!(n&1)&&!(n&2)&&r!==null)e:for(;;){if(r===null)return;var i=r.tag;if(i===3||i===4){var o=r.stateNode.containerInfo;if(o===a||o.nodeType===8&&o.parentNode===a)break;if(i===4)for(i=r.return;i!==null;){var c=i.tag;if((c===3||c===4)&&(c=i.stateNode.containerInfo,c===a||c.nodeType===8&&c.parentNode===a))return;i=i.return}for(;o!==null;){if(i=jn(o),i===null)return;if(c=i.tag,c===5||c===6){r=l=i;continue e}o=o.parentNode}}r=r.return}yo(function(){var d=l,g=Ga(t),h=[];e:{var m=Xo.get(e);if(m!==void 0){var w=el,y=e;switch(e){case"keypress":if(Nr(t)===0)break e;case"keydown":case"keyup":w=vd;break;case"focusin":y="focus",w=Es;break;case"focusout":y="blur",w=Es;break;case"beforeblur":case"afterblur":w=Es;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":w=Xl;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":w=ad;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":w=yd;break;case Ho:case Qo:case Ko:w=od;break;case Go:w=Nd;break;case"scroll":w=rd;break;case"wheel":w=Cd;break;case"copy":case"cut":case"paste":w=ud;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":w=Yl}var j=(n&4)!==0,A=!j&&e==="scroll",p=j?m!==null?m+"Capture":null:m;j=[];for(var u=d,f;u!==null;){f=u;var v=f.stateNode;if(f.tag===5&&v!==null&&(f=v,p!==null&&(v=Mt(u,p),v!=null&&j.push(Bt(u,v,f)))),A)break;u=u.return}0<j.length&&(m=new w(m,y,null,t,g),h.push({event:m,listeners:j}))}}if(!(n&7)){e:{if(m=e==="mouseover"||e==="pointerover",w=e==="mouseout"||e==="pointerout",m&&t!==ra&&(y=t.relatedTarget||t.fromElement)&&(jn(y)||y[Qe]))break e;if((w||m)&&(m=g.window===g?g:(m=g.ownerDocument)?m.defaultView||m.parentWindow:window,w?(y=t.relatedTarget||t.toElement,w=d,y=y?jn(y):null,y!==null&&(A=Ln(y),y!==A||y.tag!==5&&y.tag!==6)&&(y=null)):(w=null,y=d),w!==y)){if(j=Xl,v="onMouseLeave",p="onMouseEnter",u="mouse",(e==="pointerout"||e==="pointerover")&&(j=Yl,v="onPointerLeave",p="onPointerEnter",u="pointer"),A=w==null?m:Dn(w),f=y==null?m:Dn(y),m=new j(v,u+"leave",w,t,g),m.target=A,m.relatedTarget=f,v=null,jn(g)===d&&(j=new j(p,u+"enter",y,t,g),j.target=f,j.relatedTarget=A,v=j),A=v,w&&y)n:{for(j=w,p=y,u=0,f=j;f;f=Mn(f))u++;for(f=0,v=p;v;v=Mn(v))f++;for(;0<u-f;)j=Mn(j),u--;for(;0<f-u;)p=Mn(p),f--;for(;u--;){if(j===p||p!==null&&j===p.alternate)break n;j=Mn(j),p=Mn(p)}j=null}else j=null;w!==null&&oi(h,m,w,j,!1),y!==null&&A!==null&&oi(h,A,y,j,!0)}}e:{if(m=d?Dn(d):window,w=m.nodeName&&m.nodeName.toLowerCase(),w==="select"||w==="input"&&m.type==="file")var k=bd;else if(ei(m))if(Bo)k=Rd;else{k=Md;var _=Ld}else(w=m.nodeName)&&w.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(k=Id);if(k&&(k=k(e,d))){Do(h,k,t,g);break e}_&&_(e,m,d),e==="focusout"&&(_=m._wrapperState)&&_.controlled&&m.type==="number"&&Zs(m,"number",m.value)}switch(_=d?Dn(d):window,e){case"focusin":(ei(_)||_.contentEditable==="true")&&(Fn=_,ua=d,_t=null);break;case"focusout":_t=ua=Fn=null;break;case"mousedown":da=!0;break;case"contextmenu":case"mouseup":case"dragend":da=!1,ai(h,t,g);break;case"selectionchange":if(Ad)break;case"keydown":case"keyup":ai(h,t,g)}var E;if(tl)e:{switch(e){case"compositionstart":var z="onCompositionStart";break e;case"compositionend":z="onCompositionEnd";break e;case"compositionupdate":z="onCompositionUpdate";break e}z=void 0}else On?Fo(e,t)&&(z="onCompositionEnd"):e==="keydown"&&t.keyCode===229&&(z="onCompositionStart");z&&(Oo&&t.locale!=="ko"&&(On||z!=="onCompositionStart"?z==="onCompositionEnd"&&On&&(E=Ro()):(nn=g,Ja="value"in nn?nn.value:nn.textContent,On=!0)),_=Fr(d,z),0<_.length&&(z=new ql(z,e,null,t,g),h.push({event:z,listeners:_}),E?z.data=E:(E=Ao(t),E!==null&&(z.data=E)))),(E=_d?Ed(e,t):zd(e,t))&&(d=Fr(d,"onBeforeInput"),0<d.length&&(g=new ql("onBeforeInput","beforeinput",null,t,g),h.push({event:g,listeners:d}),g.data=E))}qo(h,n)})}function Bt(e,n,t){return{instance:e,listener:n,currentTarget:t}}function Fr(e,n){for(var t=n+"Capture",r=[];e!==null;){var a=e,l=a.stateNode;a.tag===5&&l!==null&&(a=l,l=Mt(e,t),l!=null&&r.unshift(Bt(e,l,a)),l=Mt(e,n),l!=null&&r.push(Bt(e,l,a))),e=e.return}return r}function Mn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function oi(e,n,t,r,a){for(var l=n._reactName,i=[];t!==null&&t!==r;){var o=t,c=o.alternate,d=o.stateNode;if(c!==null&&c===r)break;o.tag===5&&d!==null&&(o=d,a?(c=Mt(t,l),c!=null&&i.unshift(Bt(t,c,o))):a||(c=Mt(t,l),c!=null&&i.push(Bt(t,c,o)))),t=t.return}i.length!==0&&e.push({event:n,listeners:i})}var Ud=/\r\n?/g,$d=/\u0000|\uFFFD/g;function ci(e){return(typeof e=="string"?e:""+e).replace(Ud,`
`).replace($d,"")}function dr(e,n,t){if(n=ci(n),ci(e)!==n&&t)throw Error(x(425))}function Ar(){}var pa=null,fa=null;function ma(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var ha=typeof setTimeout=="function"?setTimeout:void 0,Wd=typeof clearTimeout=="function"?clearTimeout:void 0,ui=typeof Promise=="function"?Promise:void 0,Hd=typeof queueMicrotask=="function"?queueMicrotask:typeof ui<"u"?function(e){return ui.resolve(null).then(e).catch(Qd)}:ha;function Qd(e){setTimeout(function(){throw e})}function Rs(e,n){var t=n,r=0;do{var a=t.nextSibling;if(e.removeChild(t),a&&a.nodeType===8)if(t=a.data,t==="/$"){if(r===0){e.removeChild(a),Ot(n);return}r--}else t!=="$"&&t!=="$?"&&t!=="$!"||r++;t=a}while(t);Ot(n)}function ln(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?")break;if(n==="/$")return null}}return e}function di(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="$"||t==="$!"||t==="$?"){if(n===0)return e;n--}else t==="/$"&&n++}e=e.previousSibling}return null}var it=Math.random().toString(36).slice(2),Fe="__reactFiber$"+it,Vt="__reactProps$"+it,Qe="__reactContainer$"+it,ga="__reactEvents$"+it,Kd="__reactListeners$"+it,Gd="__reactHandles$"+it;function jn(e){var n=e[Fe];if(n)return n;for(var t=e.parentNode;t;){if(n=t[Qe]||t[Fe]){if(t=n.alternate,n.child!==null||t!==null&&t.child!==null)for(e=di(e);e!==null;){if(t=e[Fe])return t;e=di(e)}return n}e=t,t=e.parentNode}return null}function Yt(e){return e=e[Fe]||e[Qe],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Dn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(x(33))}function as(e){return e[Vt]||null}var va=[],Bn=-1;function hn(e){return{current:e}}function F(e){0>Bn||(e.current=va[Bn],va[Bn]=null,Bn--)}function R(e,n){Bn++,va[Bn]=e.current,e.current=n}var fn={},ae=hn(fn),pe=hn(!1),_n=fn;function Jn(e,n){var t=e.type.contextTypes;if(!t)return fn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===n)return r.__reactInternalMemoizedMaskedChildContext;var a={},l;for(l in t)a[l]=n[l];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=n,e.__reactInternalMemoizedMaskedChildContext=a),a}function fe(e){return e=e.childContextTypes,e!=null}function Dr(){F(pe),F(ae)}function pi(e,n,t){if(ae.current!==fn)throw Error(x(168));R(ae,n),R(pe,t)}function Zo(e,n,t){var r=e.stateNode;if(n=n.childContextTypes,typeof r.getChildContext!="function")return t;r=r.getChildContext();for(var a in r)if(!(a in n))throw Error(x(108,Lu(e)||"Unknown",a));return U({},t,r)}function Br(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||fn,_n=ae.current,R(ae,e),R(pe,pe.current),!0}function fi(e,n,t){var r=e.stateNode;if(!r)throw Error(x(169));t?(e=Zo(e,n,_n),r.__reactInternalMemoizedMergedChildContext=e,F(pe),F(ae),R(ae,e)):F(pe),R(pe,t)}var Ve=null,ls=!1,Os=!1;function Jo(e){Ve===null?Ve=[e]:Ve.push(e)}function Xd(e){ls=!0,Jo(e)}function gn(){if(!Os&&Ve!==null){Os=!0;var e=0,n=I;try{var t=Ve;for(I=1;e<t.length;e++){var r=t[e];do r=r(!0);while(r!==null)}Ve=null,ls=!1}catch(a){throw Ve!==null&&(Ve=Ve.slice(e+1)),Co(Xa,gn),a}finally{I=n,Os=!1}}return null}var Vn=[],Un=0,Vr=null,Ur=0,je=[],Ne=0,En=null,Ue=1,$e="";function wn(e,n){Vn[Un++]=Ur,Vn[Un++]=Vr,Vr=e,Ur=n}function ec(e,n,t){je[Ne++]=Ue,je[Ne++]=$e,je[Ne++]=En,En=e;var r=Ue;e=$e;var a=32-Le(r)-1;r&=~(1<<a),t+=1;var l=32-Le(n)+a;if(30<l){var i=a-a%5;l=(r&(1<<i)-1).toString(32),r>>=i,a-=i,Ue=1<<32-Le(n)+a|t<<a|r,$e=l+e}else Ue=1<<l|t<<a|r,$e=e}function sl(e){e.return!==null&&(wn(e,1),ec(e,1,0))}function al(e){for(;e===Vr;)Vr=Vn[--Un],Vn[Un]=null,Ur=Vn[--Un],Vn[Un]=null;for(;e===En;)En=je[--Ne],je[Ne]=null,$e=je[--Ne],je[Ne]=null,Ue=je[--Ne],je[Ne]=null}var ve=null,ge=null,D=!1,be=null;function nc(e,n){var t=ke(5,null,null,0);t.elementType="DELETED",t.stateNode=n,t.return=e,n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)}function mi(e,n){switch(e.tag){case 5:var t=e.type;return n=n.nodeType!==1||t.toLowerCase()!==n.nodeName.toLowerCase()?null:n,n!==null?(e.stateNode=n,ve=e,ge=ln(n.firstChild),!0):!1;case 6:return n=e.pendingProps===""||n.nodeType!==3?null:n,n!==null?(e.stateNode=n,ve=e,ge=null,!0):!1;case 13:return n=n.nodeType!==8?null:n,n!==null?(t=En!==null?{id:Ue,overflow:$e}:null,e.memoizedState={dehydrated:n,treeContext:t,retryLane:1073741824},t=ke(18,null,null,0),t.stateNode=n,t.return=e,e.child=t,ve=e,ge=null,!0):!1;default:return!1}}function xa(e){return(e.mode&1)!==0&&(e.flags&128)===0}function wa(e){if(D){var n=ge;if(n){var t=n;if(!mi(e,n)){if(xa(e))throw Error(x(418));n=ln(t.nextSibling);var r=ve;n&&mi(e,n)?nc(r,t):(e.flags=e.flags&-4097|2,D=!1,ve=e)}}else{if(xa(e))throw Error(x(418));e.flags=e.flags&-4097|2,D=!1,ve=e}}}function hi(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;ve=e}function pr(e){if(e!==ve)return!1;if(!D)return hi(e),D=!0,!1;var n;if((n=e.tag!==3)&&!(n=e.tag!==5)&&(n=e.type,n=n!=="head"&&n!=="body"&&!ma(e.type,e.memoizedProps)),n&&(n=ge)){if(xa(e))throw tc(),Error(x(418));for(;n;)nc(e,n),n=ln(n.nextSibling)}if(hi(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(x(317));e:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="/$"){if(n===0){ge=ln(e.nextSibling);break e}n--}else t!=="$"&&t!=="$!"&&t!=="$?"||n++}e=e.nextSibling}ge=null}}else ge=ve?ln(e.stateNode.nextSibling):null;return!0}function tc(){for(var e=ge;e;)e=ln(e.nextSibling)}function et(){ge=ve=null,D=!1}function ll(e){be===null?be=[e]:be.push(e)}var qd=Xe.ReactCurrentBatchConfig;function ht(e,n,t){if(e=t.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(x(309));var r=t.stateNode}if(!r)throw Error(x(147,e));var a=r,l=""+e;return n!==null&&n.ref!==null&&typeof n.ref=="function"&&n.ref._stringRef===l?n.ref:(n=function(i){var o=a.refs;i===null?delete o[l]:o[l]=i},n._stringRef=l,n)}if(typeof e!="string")throw Error(x(284));if(!t._owner)throw Error(x(290,e))}return e}function fr(e,n){throw e=Object.prototype.toString.call(n),Error(x(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e))}function gi(e){var n=e._init;return n(e._payload)}function rc(e){function n(p,u){if(e){var f=p.deletions;f===null?(p.deletions=[u],p.flags|=16):f.push(u)}}function t(p,u){if(!e)return null;for(;u!==null;)n(p,u),u=u.sibling;return null}function r(p,u){for(p=new Map;u!==null;)u.key!==null?p.set(u.key,u):p.set(u.index,u),u=u.sibling;return p}function a(p,u){return p=dn(p,u),p.index=0,p.sibling=null,p}function l(p,u,f){return p.index=f,e?(f=p.alternate,f!==null?(f=f.index,f<u?(p.flags|=2,u):f):(p.flags|=2,u)):(p.flags|=1048576,u)}function i(p){return e&&p.alternate===null&&(p.flags|=2),p}function o(p,u,f,v){return u===null||u.tag!==6?(u=$s(f,p.mode,v),u.return=p,u):(u=a(u,f),u.return=p,u)}function c(p,u,f,v){var k=f.type;return k===Rn?g(p,u,f.props.children,v,f.key):u!==null&&(u.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===Ye&&gi(k)===u.type)?(v=a(u,f.props),v.ref=ht(p,u,f),v.return=p,v):(v=Pr(f.type,f.key,f.props,null,p.mode,v),v.ref=ht(p,u,f),v.return=p,v)}function d(p,u,f,v){return u===null||u.tag!==4||u.stateNode.containerInfo!==f.containerInfo||u.stateNode.implementation!==f.implementation?(u=Ws(f,p.mode,v),u.return=p,u):(u=a(u,f.children||[]),u.return=p,u)}function g(p,u,f,v,k){return u===null||u.tag!==7?(u=Sn(f,p.mode,v,k),u.return=p,u):(u=a(u,f),u.return=p,u)}function h(p,u,f){if(typeof u=="string"&&u!==""||typeof u=="number")return u=$s(""+u,p.mode,f),u.return=p,u;if(typeof u=="object"&&u!==null){switch(u.$$typeof){case tr:return f=Pr(u.type,u.key,u.props,null,p.mode,f),f.ref=ht(p,null,u),f.return=p,f;case In:return u=Ws(u,p.mode,f),u.return=p,u;case Ye:var v=u._init;return h(p,v(u._payload),f)}if(wt(u)||ut(u))return u=Sn(u,p.mode,f,null),u.return=p,u;fr(p,u)}return null}function m(p,u,f,v){var k=u!==null?u.key:null;if(typeof f=="string"&&f!==""||typeof f=="number")return k!==null?null:o(p,u,""+f,v);if(typeof f=="object"&&f!==null){switch(f.$$typeof){case tr:return f.key===k?c(p,u,f,v):null;case In:return f.key===k?d(p,u,f,v):null;case Ye:return k=f._init,m(p,u,k(f._payload),v)}if(wt(f)||ut(f))return k!==null?null:g(p,u,f,v,null);fr(p,f)}return null}function w(p,u,f,v,k){if(typeof v=="string"&&v!==""||typeof v=="number")return p=p.get(f)||null,o(u,p,""+v,k);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case tr:return p=p.get(v.key===null?f:v.key)||null,c(u,p,v,k);case In:return p=p.get(v.key===null?f:v.key)||null,d(u,p,v,k);case Ye:var _=v._init;return w(p,u,f,_(v._payload),k)}if(wt(v)||ut(v))return p=p.get(f)||null,g(u,p,v,k,null);fr(u,v)}return null}function y(p,u,f,v){for(var k=null,_=null,E=u,z=u=0,W=null;E!==null&&z<f.length;z++){E.index>z?(W=E,E=null):W=E.sibling;var L=m(p,E,f[z],v);if(L===null){E===null&&(E=W);break}e&&E&&L.alternate===null&&n(p,E),u=l(L,u,z),_===null?k=L:_.sibling=L,_=L,E=W}if(z===f.length)return t(p,E),D&&wn(p,z),k;if(E===null){for(;z<f.length;z++)E=h(p,f[z],v),E!==null&&(u=l(E,u,z),_===null?k=E:_.sibling=E,_=E);return D&&wn(p,z),k}for(E=r(p,E);z<f.length;z++)W=w(E,p,z,f[z],v),W!==null&&(e&&W.alternate!==null&&E.delete(W.key===null?z:W.key),u=l(W,u,z),_===null?k=W:_.sibling=W,_=W);return e&&E.forEach(function(Ee){return n(p,Ee)}),D&&wn(p,z),k}function j(p,u,f,v){var k=ut(f);if(typeof k!="function")throw Error(x(150));if(f=k.call(f),f==null)throw Error(x(151));for(var _=k=null,E=u,z=u=0,W=null,L=f.next();E!==null&&!L.done;z++,L=f.next()){E.index>z?(W=E,E=null):W=E.sibling;var Ee=m(p,E,L.value,v);if(Ee===null){E===null&&(E=W);break}e&&E&&Ee.alternate===null&&n(p,E),u=l(Ee,u,z),_===null?k=Ee:_.sibling=Ee,_=Ee,E=W}if(L.done)return t(p,E),D&&wn(p,z),k;if(E===null){for(;!L.done;z++,L=f.next())L=h(p,L.value,v),L!==null&&(u=l(L,u,z),_===null?k=L:_.sibling=L,_=L);return D&&wn(p,z),k}for(E=r(p,E);!L.done;z++,L=f.next())L=w(E,p,z,L.value,v),L!==null&&(e&&L.alternate!==null&&E.delete(L.key===null?z:L.key),u=l(L,u,z),_===null?k=L:_.sibling=L,_=L);return e&&E.forEach(function(ot){return n(p,ot)}),D&&wn(p,z),k}function A(p,u,f,v){if(typeof f=="object"&&f!==null&&f.type===Rn&&f.key===null&&(f=f.props.children),typeof f=="object"&&f!==null){switch(f.$$typeof){case tr:e:{for(var k=f.key,_=u;_!==null;){if(_.key===k){if(k=f.type,k===Rn){if(_.tag===7){t(p,_.sibling),u=a(_,f.props.children),u.return=p,p=u;break e}}else if(_.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===Ye&&gi(k)===_.type){t(p,_.sibling),u=a(_,f.props),u.ref=ht(p,_,f),u.return=p,p=u;break e}t(p,_);break}else n(p,_);_=_.sibling}f.type===Rn?(u=Sn(f.props.children,p.mode,v,f.key),u.return=p,p=u):(v=Pr(f.type,f.key,f.props,null,p.mode,v),v.ref=ht(p,u,f),v.return=p,p=v)}return i(p);case In:e:{for(_=f.key;u!==null;){if(u.key===_)if(u.tag===4&&u.stateNode.containerInfo===f.containerInfo&&u.stateNode.implementation===f.implementation){t(p,u.sibling),u=a(u,f.children||[]),u.return=p,p=u;break e}else{t(p,u);break}else n(p,u);u=u.sibling}u=Ws(f,p.mode,v),u.return=p,p=u}return i(p);case Ye:return _=f._init,A(p,u,_(f._payload),v)}if(wt(f))return y(p,u,f,v);if(ut(f))return j(p,u,f,v);fr(p,f)}return typeof f=="string"&&f!==""||typeof f=="number"?(f=""+f,u!==null&&u.tag===6?(t(p,u.sibling),u=a(u,f),u.return=p,p=u):(t(p,u),u=$s(f,p.mode,v),u.return=p,p=u),i(p)):t(p,u)}return A}var nt=rc(!0),sc=rc(!1),$r=hn(null),Wr=null,$n=null,il=null;function ol(){il=$n=Wr=null}function cl(e){var n=$r.current;F($r),e._currentValue=n}function ya(e,n,t){for(;e!==null;){var r=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,r!==null&&(r.childLanes|=n)):r!==null&&(r.childLanes&n)!==n&&(r.childLanes|=n),e===t)break;e=e.return}}function qn(e,n){Wr=e,il=$n=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&n&&(de=!0),e.firstContext=null)}function Se(e){var n=e._currentValue;if(il!==e)if(e={context:e,memoizedValue:n,next:null},$n===null){if(Wr===null)throw Error(x(308));$n=e,Wr.dependencies={lanes:0,firstContext:e}}else $n=$n.next=e;return n}var Nn=null;function ul(e){Nn===null?Nn=[e]:Nn.push(e)}function ac(e,n,t,r){var a=n.interleaved;return a===null?(t.next=t,ul(n)):(t.next=a.next,a.next=t),n.interleaved=t,Ke(e,r)}function Ke(e,n){e.lanes|=n;var t=e.alternate;for(t!==null&&(t.lanes|=n),t=e,e=e.return;e!==null;)e.childLanes|=n,t=e.alternate,t!==null&&(t.childLanes|=n),t=e,e=e.return;return t.tag===3?t.stateNode:null}var Ze=!1;function dl(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function lc(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function We(e,n){return{eventTime:e,lane:n,tag:0,payload:null,callback:null,next:null}}function on(e,n,t){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,M&2){var a=r.pending;return a===null?n.next=n:(n.next=a.next,a.next=n),r.pending=n,Ke(e,t)}return a=r.interleaved,a===null?(n.next=n,ul(r)):(n.next=a.next,a.next=n),r.interleaved=n,Ke(e,t)}function kr(e,n,t){if(n=n.updateQueue,n!==null&&(n=n.shared,(t&4194240)!==0)){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,qa(e,t)}}function vi(e,n){var t=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,t===r)){var a=null,l=null;if(t=t.firstBaseUpdate,t!==null){do{var i={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};l===null?a=l=i:l=l.next=i,t=t.next}while(t!==null);l===null?a=l=n:l=l.next=n}else a=l=n;t={baseState:r.baseState,firstBaseUpdate:a,lastBaseUpdate:l,shared:r.shared,effects:r.effects},e.updateQueue=t;return}e=t.lastBaseUpdate,e===null?t.firstBaseUpdate=n:e.next=n,t.lastBaseUpdate=n}function Hr(e,n,t,r){var a=e.updateQueue;Ze=!1;var l=a.firstBaseUpdate,i=a.lastBaseUpdate,o=a.shared.pending;if(o!==null){a.shared.pending=null;var c=o,d=c.next;c.next=null,i===null?l=d:i.next=d,i=c;var g=e.alternate;g!==null&&(g=g.updateQueue,o=g.lastBaseUpdate,o!==i&&(o===null?g.firstBaseUpdate=d:o.next=d,g.lastBaseUpdate=c))}if(l!==null){var h=a.baseState;i=0,g=d=c=null,o=l;do{var m=o.lane,w=o.eventTime;if((r&m)===m){g!==null&&(g=g.next={eventTime:w,lane:0,tag:o.tag,payload:o.payload,callback:o.callback,next:null});e:{var y=e,j=o;switch(m=n,w=t,j.tag){case 1:if(y=j.payload,typeof y=="function"){h=y.call(w,h,m);break e}h=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=j.payload,m=typeof y=="function"?y.call(w,h,m):y,m==null)break e;h=U({},h,m);break e;case 2:Ze=!0}}o.callback!==null&&o.lane!==0&&(e.flags|=64,m=a.effects,m===null?a.effects=[o]:m.push(o))}else w={eventTime:w,lane:m,tag:o.tag,payload:o.payload,callback:o.callback,next:null},g===null?(d=g=w,c=h):g=g.next=w,i|=m;if(o=o.next,o===null){if(o=a.shared.pending,o===null)break;m=o,o=m.next,m.next=null,a.lastBaseUpdate=m,a.shared.pending=null}}while(!0);if(g===null&&(c=h),a.baseState=c,a.firstBaseUpdate=d,a.lastBaseUpdate=g,n=a.shared.interleaved,n!==null){a=n;do i|=a.lane,a=a.next;while(a!==n)}else l===null&&(a.shared.lanes=0);Pn|=i,e.lanes=i,e.memoizedState=h}}function xi(e,n,t){if(e=n.effects,n.effects=null,e!==null)for(n=0;n<e.length;n++){var r=e[n],a=r.callback;if(a!==null){if(r.callback=null,r=t,typeof a!="function")throw Error(x(191,a));a.call(r)}}}var Zt={},De=hn(Zt),Ut=hn(Zt),$t=hn(Zt);function kn(e){if(e===Zt)throw Error(x(174));return e}function pl(e,n){switch(R($t,n),R(Ut,e),R(De,Zt),e=n.nodeType,e){case 9:case 11:n=(n=n.documentElement)?n.namespaceURI:ea(null,"");break;default:e=e===8?n.parentNode:n,n=e.namespaceURI||null,e=e.tagName,n=ea(n,e)}F(De),R(De,n)}function tt(){F(De),F(Ut),F($t)}function ic(e){kn($t.current);var n=kn(De.current),t=ea(n,e.type);n!==t&&(R(Ut,e),R(De,t))}function fl(e){Ut.current===e&&(F(De),F(Ut))}var B=hn(0);function Qr(e){for(var n=e;n!==null;){if(n.tag===13){var t=n.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if(n.flags&128)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Fs=[];function ml(){for(var e=0;e<Fs.length;e++)Fs[e]._workInProgressVersionPrimary=null;Fs.length=0}var Cr=Xe.ReactCurrentDispatcher,As=Xe.ReactCurrentBatchConfig,zn=0,V=null,G=null,Y=null,Kr=!1,Et=!1,Wt=0,Yd=0;function te(){throw Error(x(321))}function hl(e,n){if(n===null)return!1;for(var t=0;t<n.length&&t<e.length;t++)if(!Ie(e[t],n[t]))return!1;return!0}function gl(e,n,t,r,a,l){if(zn=l,V=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,Cr.current=e===null||e.memoizedState===null?np:tp,e=t(r,a),Et){l=0;do{if(Et=!1,Wt=0,25<=l)throw Error(x(301));l+=1,Y=G=null,n.updateQueue=null,Cr.current=rp,e=t(r,a)}while(Et)}if(Cr.current=Gr,n=G!==null&&G.next!==null,zn=0,Y=G=V=null,Kr=!1,n)throw Error(x(300));return e}function vl(){var e=Wt!==0;return Wt=0,e}function Oe(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Y===null?V.memoizedState=Y=e:Y=Y.next=e,Y}function _e(){if(G===null){var e=V.alternate;e=e!==null?e.memoizedState:null}else e=G.next;var n=Y===null?V.memoizedState:Y.next;if(n!==null)Y=n,G=e;else{if(e===null)throw Error(x(310));G=e,e={memoizedState:G.memoizedState,baseState:G.baseState,baseQueue:G.baseQueue,queue:G.queue,next:null},Y===null?V.memoizedState=Y=e:Y=Y.next=e}return Y}function Ht(e,n){return typeof n=="function"?n(e):n}function Ds(e){var n=_e(),t=n.queue;if(t===null)throw Error(x(311));t.lastRenderedReducer=e;var r=G,a=r.baseQueue,l=t.pending;if(l!==null){if(a!==null){var i=a.next;a.next=l.next,l.next=i}r.baseQueue=a=l,t.pending=null}if(a!==null){l=a.next,r=r.baseState;var o=i=null,c=null,d=l;do{var g=d.lane;if((zn&g)===g)c!==null&&(c=c.next={lane:0,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null}),r=d.hasEagerState?d.eagerState:e(r,d.action);else{var h={lane:g,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null};c===null?(o=c=h,i=r):c=c.next=h,V.lanes|=g,Pn|=g}d=d.next}while(d!==null&&d!==l);c===null?i=r:c.next=o,Ie(r,n.memoizedState)||(de=!0),n.memoizedState=r,n.baseState=i,n.baseQueue=c,t.lastRenderedState=r}if(e=t.interleaved,e!==null){a=e;do l=a.lane,V.lanes|=l,Pn|=l,a=a.next;while(a!==e)}else a===null&&(t.lanes=0);return[n.memoizedState,t.dispatch]}function Bs(e){var n=_e(),t=n.queue;if(t===null)throw Error(x(311));t.lastRenderedReducer=e;var r=t.dispatch,a=t.pending,l=n.memoizedState;if(a!==null){t.pending=null;var i=a=a.next;do l=e(l,i.action),i=i.next;while(i!==a);Ie(l,n.memoizedState)||(de=!0),n.memoizedState=l,n.baseQueue===null&&(n.baseState=l),t.lastRenderedState=l}return[l,r]}function oc(){}function cc(e,n){var t=V,r=_e(),a=n(),l=!Ie(r.memoizedState,a);if(l&&(r.memoizedState=a,de=!0),r=r.queue,xl(pc.bind(null,t,r,e),[e]),r.getSnapshot!==n||l||Y!==null&&Y.memoizedState.tag&1){if(t.flags|=2048,Qt(9,dc.bind(null,t,r,a,n),void 0,null),Z===null)throw Error(x(349));zn&30||uc(t,n,a)}return a}function uc(e,n,t){e.flags|=16384,e={getSnapshot:n,value:t},n=V.updateQueue,n===null?(n={lastEffect:null,stores:null},V.updateQueue=n,n.stores=[e]):(t=n.stores,t===null?n.stores=[e]:t.push(e))}function dc(e,n,t,r){n.value=t,n.getSnapshot=r,fc(n)&&mc(e)}function pc(e,n,t){return t(function(){fc(n)&&mc(e)})}function fc(e){var n=e.getSnapshot;e=e.value;try{var t=n();return!Ie(e,t)}catch{return!0}}function mc(e){var n=Ke(e,1);n!==null&&Me(n,e,1,-1)}function wi(e){var n=Oe();return typeof e=="function"&&(e=e()),n.memoizedState=n.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ht,lastRenderedState:e},n.queue=e,e=e.dispatch=ep.bind(null,V,e),[n.memoizedState,e]}function Qt(e,n,t,r){return e={tag:e,create:n,destroy:t,deps:r,next:null},n=V.updateQueue,n===null?(n={lastEffect:null,stores:null},V.updateQueue=n,n.lastEffect=e.next=e):(t=n.lastEffect,t===null?n.lastEffect=e.next=e:(r=t.next,t.next=e,e.next=r,n.lastEffect=e)),e}function hc(){return _e().memoizedState}function Sr(e,n,t,r){var a=Oe();V.flags|=e,a.memoizedState=Qt(1|n,t,void 0,r===void 0?null:r)}function is(e,n,t,r){var a=_e();r=r===void 0?null:r;var l=void 0;if(G!==null){var i=G.memoizedState;if(l=i.destroy,r!==null&&hl(r,i.deps)){a.memoizedState=Qt(n,t,l,r);return}}V.flags|=e,a.memoizedState=Qt(1|n,t,l,r)}function yi(e,n){return Sr(8390656,8,e,n)}function xl(e,n){return is(2048,8,e,n)}function gc(e,n){return is(4,2,e,n)}function vc(e,n){return is(4,4,e,n)}function xc(e,n){if(typeof n=="function")return e=e(),n(e),function(){n(null)};if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function wc(e,n,t){return t=t!=null?t.concat([e]):null,is(4,4,xc.bind(null,n,e),t)}function wl(){}function yc(e,n){var t=_e();n=n===void 0?null:n;var r=t.memoizedState;return r!==null&&n!==null&&hl(n,r[1])?r[0]:(t.memoizedState=[e,n],e)}function jc(e,n){var t=_e();n=n===void 0?null:n;var r=t.memoizedState;return r!==null&&n!==null&&hl(n,r[1])?r[0]:(e=e(),t.memoizedState=[e,n],e)}function Nc(e,n,t){return zn&21?(Ie(t,n)||(t=Eo(),V.lanes|=t,Pn|=t,e.baseState=!0),n):(e.baseState&&(e.baseState=!1,de=!0),e.memoizedState=t)}function Zd(e,n){var t=I;I=t!==0&&4>t?t:4,e(!0);var r=As.transition;As.transition={};try{e(!1),n()}finally{I=t,As.transition=r}}function kc(){return _e().memoizedState}function Jd(e,n,t){var r=un(e);if(t={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null},Cc(e))Sc(n,t);else if(t=ac(e,n,t,r),t!==null){var a=ie();Me(t,e,r,a),_c(t,n,r)}}function ep(e,n,t){var r=un(e),a={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null};if(Cc(e))Sc(n,a);else{var l=e.alternate;if(e.lanes===0&&(l===null||l.lanes===0)&&(l=n.lastRenderedReducer,l!==null))try{var i=n.lastRenderedState,o=l(i,t);if(a.hasEagerState=!0,a.eagerState=o,Ie(o,i)){var c=n.interleaved;c===null?(a.next=a,ul(n)):(a.next=c.next,c.next=a),n.interleaved=a;return}}catch{}finally{}t=ac(e,n,a,r),t!==null&&(a=ie(),Me(t,e,r,a),_c(t,n,r))}}function Cc(e){var n=e.alternate;return e===V||n!==null&&n===V}function Sc(e,n){Et=Kr=!0;var t=e.pending;t===null?n.next=n:(n.next=t.next,t.next=n),e.pending=n}function _c(e,n,t){if(t&4194240){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,qa(e,t)}}var Gr={readContext:Se,useCallback:te,useContext:te,useEffect:te,useImperativeHandle:te,useInsertionEffect:te,useLayoutEffect:te,useMemo:te,useReducer:te,useRef:te,useState:te,useDebugValue:te,useDeferredValue:te,useTransition:te,useMutableSource:te,useSyncExternalStore:te,useId:te,unstable_isNewReconciler:!1},np={readContext:Se,useCallback:function(e,n){return Oe().memoizedState=[e,n===void 0?null:n],e},useContext:Se,useEffect:yi,useImperativeHandle:function(e,n,t){return t=t!=null?t.concat([e]):null,Sr(4194308,4,xc.bind(null,n,e),t)},useLayoutEffect:function(e,n){return Sr(4194308,4,e,n)},useInsertionEffect:function(e,n){return Sr(4,2,e,n)},useMemo:function(e,n){var t=Oe();return n=n===void 0?null:n,e=e(),t.memoizedState=[e,n],e},useReducer:function(e,n,t){var r=Oe();return n=t!==void 0?t(n):n,r.memoizedState=r.baseState=n,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},r.queue=e,e=e.dispatch=Jd.bind(null,V,e),[r.memoizedState,e]},useRef:function(e){var n=Oe();return e={current:e},n.memoizedState=e},useState:wi,useDebugValue:wl,useDeferredValue:function(e){return Oe().memoizedState=e},useTransition:function(){var e=wi(!1),n=e[0];return e=Zd.bind(null,e[1]),Oe().memoizedState=e,[n,e]},useMutableSource:function(){},useSyncExternalStore:function(e,n,t){var r=V,a=Oe();if(D){if(t===void 0)throw Error(x(407));t=t()}else{if(t=n(),Z===null)throw Error(x(349));zn&30||uc(r,n,t)}a.memoizedState=t;var l={value:t,getSnapshot:n};return a.queue=l,yi(pc.bind(null,r,l,e),[e]),r.flags|=2048,Qt(9,dc.bind(null,r,l,t,n),void 0,null),t},useId:function(){var e=Oe(),n=Z.identifierPrefix;if(D){var t=$e,r=Ue;t=(r&~(1<<32-Le(r)-1)).toString(32)+t,n=":"+n+"R"+t,t=Wt++,0<t&&(n+="H"+t.toString(32)),n+=":"}else t=Yd++,n=":"+n+"r"+t.toString(32)+":";return e.memoizedState=n},unstable_isNewReconciler:!1},tp={readContext:Se,useCallback:yc,useContext:Se,useEffect:xl,useImperativeHandle:wc,useInsertionEffect:gc,useLayoutEffect:vc,useMemo:jc,useReducer:Ds,useRef:hc,useState:function(){return Ds(Ht)},useDebugValue:wl,useDeferredValue:function(e){var n=_e();return Nc(n,G.memoizedState,e)},useTransition:function(){var e=Ds(Ht)[0],n=_e().memoizedState;return[e,n]},useMutableSource:oc,useSyncExternalStore:cc,useId:kc,unstable_isNewReconciler:!1},rp={readContext:Se,useCallback:yc,useContext:Se,useEffect:xl,useImperativeHandle:wc,useInsertionEffect:gc,useLayoutEffect:vc,useMemo:jc,useReducer:Bs,useRef:hc,useState:function(){return Bs(Ht)},useDebugValue:wl,useDeferredValue:function(e){var n=_e();return G===null?n.memoizedState=e:Nc(n,G.memoizedState,e)},useTransition:function(){var e=Bs(Ht)[0],n=_e().memoizedState;return[e,n]},useMutableSource:oc,useSyncExternalStore:cc,useId:kc,unstable_isNewReconciler:!1};function Pe(e,n){if(e&&e.defaultProps){n=U({},n),e=e.defaultProps;for(var t in e)n[t]===void 0&&(n[t]=e[t]);return n}return n}function ja(e,n,t,r){n=e.memoizedState,t=t(r,n),t=t==null?n:U({},n,t),e.memoizedState=t,e.lanes===0&&(e.updateQueue.baseState=t)}var os={isMounted:function(e){return(e=e._reactInternals)?Ln(e)===e:!1},enqueueSetState:function(e,n,t){e=e._reactInternals;var r=ie(),a=un(e),l=We(r,a);l.payload=n,t!=null&&(l.callback=t),n=on(e,l,a),n!==null&&(Me(n,e,a,r),kr(n,e,a))},enqueueReplaceState:function(e,n,t){e=e._reactInternals;var r=ie(),a=un(e),l=We(r,a);l.tag=1,l.payload=n,t!=null&&(l.callback=t),n=on(e,l,a),n!==null&&(Me(n,e,a,r),kr(n,e,a))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var t=ie(),r=un(e),a=We(t,r);a.tag=2,n!=null&&(a.callback=n),n=on(e,a,r),n!==null&&(Me(n,e,r,t),kr(n,e,r))}};function ji(e,n,t,r,a,l,i){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,l,i):n.prototype&&n.prototype.isPureReactComponent?!At(t,r)||!At(a,l):!0}function Ec(e,n,t){var r=!1,a=fn,l=n.contextType;return typeof l=="object"&&l!==null?l=Se(l):(a=fe(n)?_n:ae.current,r=n.contextTypes,l=(r=r!=null)?Jn(e,a):fn),n=new n(t,l),e.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,n.updater=os,e.stateNode=n,n._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=a,e.__reactInternalMemoizedMaskedChildContext=l),n}function Ni(e,n,t,r){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(t,r),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(t,r),n.state!==e&&os.enqueueReplaceState(n,n.state,null)}function Na(e,n,t,r){var a=e.stateNode;a.props=t,a.state=e.memoizedState,a.refs={},dl(e);var l=n.contextType;typeof l=="object"&&l!==null?a.context=Se(l):(l=fe(n)?_n:ae.current,a.context=Jn(e,l)),a.state=e.memoizedState,l=n.getDerivedStateFromProps,typeof l=="function"&&(ja(e,n,l,t),a.state=e.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof a.getSnapshotBeforeUpdate=="function"||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(n=a.state,typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount(),n!==a.state&&os.enqueueReplaceState(a,a.state,null),Hr(e,t,a,r),a.state=e.memoizedState),typeof a.componentDidMount=="function"&&(e.flags|=4194308)}function rt(e,n){try{var t="",r=n;do t+=bu(r),r=r.return;while(r);var a=t}catch(l){a=`
Error generating stack: `+l.message+`
`+l.stack}return{value:e,source:n,stack:a,digest:null}}function Vs(e,n,t){return{value:e,source:null,stack:t??null,digest:n??null}}function ka(e,n){try{console.error(n.value)}catch(t){setTimeout(function(){throw t})}}var sp=typeof WeakMap=="function"?WeakMap:Map;function zc(e,n,t){t=We(-1,t),t.tag=3,t.payload={element:null};var r=n.value;return t.callback=function(){qr||(qr=!0,Ma=r),ka(e,n)},t}function Pc(e,n,t){t=We(-1,t),t.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var a=n.value;t.payload=function(){return r(a)},t.callback=function(){ka(e,n)}}var l=e.stateNode;return l!==null&&typeof l.componentDidCatch=="function"&&(t.callback=function(){ka(e,n),typeof r!="function"&&(cn===null?cn=new Set([this]):cn.add(this));var i=n.stack;this.componentDidCatch(n.value,{componentStack:i!==null?i:""})}),t}function ki(e,n,t){var r=e.pingCache;if(r===null){r=e.pingCache=new sp;var a=new Set;r.set(n,a)}else a=r.get(n),a===void 0&&(a=new Set,r.set(n,a));a.has(t)||(a.add(t),e=xp.bind(null,e,n,t),n.then(e,e))}function Ci(e){do{var n;if((n=e.tag===13)&&(n=e.memoizedState,n=n!==null?n.dehydrated!==null:!0),n)return e;e=e.return}while(e!==null);return null}function Si(e,n,t,r,a){return e.mode&1?(e.flags|=65536,e.lanes=a,e):(e===n?e.flags|=65536:(e.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(n=We(-1,1),n.tag=2,on(t,n,1))),t.lanes|=1),e)}var ap=Xe.ReactCurrentOwner,de=!1;function le(e,n,t,r){n.child=e===null?sc(n,null,t,r):nt(n,e.child,t,r)}function _i(e,n,t,r,a){t=t.render;var l=n.ref;return qn(n,a),r=gl(e,n,t,r,l,a),t=vl(),e!==null&&!de?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a,Ge(e,n,a)):(D&&t&&sl(n),n.flags|=1,le(e,n,r,a),n.child)}function Ei(e,n,t,r,a){if(e===null){var l=t.type;return typeof l=="function"&&!El(l)&&l.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(n.tag=15,n.type=l,Tc(e,n,l,r,a)):(e=Pr(t.type,null,r,n,n.mode,a),e.ref=n.ref,e.return=n,n.child=e)}if(l=e.child,!(e.lanes&a)){var i=l.memoizedProps;if(t=t.compare,t=t!==null?t:At,t(i,r)&&e.ref===n.ref)return Ge(e,n,a)}return n.flags|=1,e=dn(l,r),e.ref=n.ref,e.return=n,n.child=e}function Tc(e,n,t,r,a){if(e!==null){var l=e.memoizedProps;if(At(l,r)&&e.ref===n.ref)if(de=!1,n.pendingProps=r=l,(e.lanes&a)!==0)e.flags&131072&&(de=!0);else return n.lanes=e.lanes,Ge(e,n,a)}return Ca(e,n,t,r,a)}function bc(e,n,t){var r=n.pendingProps,a=r.children,l=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(n.mode&1))n.memoizedState={baseLanes:0,cachePool:null,transitions:null},R(Hn,he),he|=t;else{if(!(t&1073741824))return e=l!==null?l.baseLanes|t:t,n.lanes=n.childLanes=1073741824,n.memoizedState={baseLanes:e,cachePool:null,transitions:null},n.updateQueue=null,R(Hn,he),he|=e,null;n.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=l!==null?l.baseLanes:t,R(Hn,he),he|=r}else l!==null?(r=l.baseLanes|t,n.memoizedState=null):r=t,R(Hn,he),he|=r;return le(e,n,a,t),n.child}function Lc(e,n){var t=n.ref;(e===null&&t!==null||e!==null&&e.ref!==t)&&(n.flags|=512,n.flags|=2097152)}function Ca(e,n,t,r,a){var l=fe(t)?_n:ae.current;return l=Jn(n,l),qn(n,a),t=gl(e,n,t,r,l,a),r=vl(),e!==null&&!de?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a,Ge(e,n,a)):(D&&r&&sl(n),n.flags|=1,le(e,n,t,a),n.child)}function zi(e,n,t,r,a){if(fe(t)){var l=!0;Br(n)}else l=!1;if(qn(n,a),n.stateNode===null)_r(e,n),Ec(n,t,r),Na(n,t,r,a),r=!0;else if(e===null){var i=n.stateNode,o=n.memoizedProps;i.props=o;var c=i.context,d=t.contextType;typeof d=="object"&&d!==null?d=Se(d):(d=fe(t)?_n:ae.current,d=Jn(n,d));var g=t.getDerivedStateFromProps,h=typeof g=="function"||typeof i.getSnapshotBeforeUpdate=="function";h||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(o!==r||c!==d)&&Ni(n,i,r,d),Ze=!1;var m=n.memoizedState;i.state=m,Hr(n,r,i,a),c=n.memoizedState,o!==r||m!==c||pe.current||Ze?(typeof g=="function"&&(ja(n,t,g,r),c=n.memoizedState),(o=Ze||ji(n,t,o,r,m,c,d))?(h||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(n.flags|=4194308)):(typeof i.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=r,n.memoizedState=c),i.props=r,i.state=c,i.context=d,r=o):(typeof i.componentDidMount=="function"&&(n.flags|=4194308),r=!1)}else{i=n.stateNode,lc(e,n),o=n.memoizedProps,d=n.type===n.elementType?o:Pe(n.type,o),i.props=d,h=n.pendingProps,m=i.context,c=t.contextType,typeof c=="object"&&c!==null?c=Se(c):(c=fe(t)?_n:ae.current,c=Jn(n,c));var w=t.getDerivedStateFromProps;(g=typeof w=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(o!==h||m!==c)&&Ni(n,i,r,c),Ze=!1,m=n.memoizedState,i.state=m,Hr(n,r,i,a);var y=n.memoizedState;o!==h||m!==y||pe.current||Ze?(typeof w=="function"&&(ja(n,t,w,r),y=n.memoizedState),(d=Ze||ji(n,t,d,r,m,y,c)||!1)?(g||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(r,y,c),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(r,y,c)),typeof i.componentDidUpdate=="function"&&(n.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof i.componentDidUpdate!="function"||o===e.memoizedProps&&m===e.memoizedState||(n.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||o===e.memoizedProps&&m===e.memoizedState||(n.flags|=1024),n.memoizedProps=r,n.memoizedState=y),i.props=r,i.state=y,i.context=c,r=d):(typeof i.componentDidUpdate!="function"||o===e.memoizedProps&&m===e.memoizedState||(n.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||o===e.memoizedProps&&m===e.memoizedState||(n.flags|=1024),r=!1)}return Sa(e,n,t,r,l,a)}function Sa(e,n,t,r,a,l){Lc(e,n);var i=(n.flags&128)!==0;if(!r&&!i)return a&&fi(n,t,!1),Ge(e,n,l);r=n.stateNode,ap.current=n;var o=i&&typeof t.getDerivedStateFromError!="function"?null:r.render();return n.flags|=1,e!==null&&i?(n.child=nt(n,e.child,null,l),n.child=nt(n,null,o,l)):le(e,n,o,l),n.memoizedState=r.state,a&&fi(n,t,!0),n.child}function Mc(e){var n=e.stateNode;n.pendingContext?pi(e,n.pendingContext,n.pendingContext!==n.context):n.context&&pi(e,n.context,!1),pl(e,n.containerInfo)}function Pi(e,n,t,r,a){return et(),ll(a),n.flags|=256,le(e,n,t,r),n.child}var _a={dehydrated:null,treeContext:null,retryLane:0};function Ea(e){return{baseLanes:e,cachePool:null,transitions:null}}function Ic(e,n,t){var r=n.pendingProps,a=B.current,l=!1,i=(n.flags&128)!==0,o;if((o=i)||(o=e!==null&&e.memoizedState===null?!1:(a&2)!==0),o?(l=!0,n.flags&=-129):(e===null||e.memoizedState!==null)&&(a|=1),R(B,a&1),e===null)return wa(n),e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(n.mode&1?e.data==="$!"?n.lanes=8:n.lanes=1073741824:n.lanes=1,null):(i=r.children,e=r.fallback,l?(r=n.mode,l=n.child,i={mode:"hidden",children:i},!(r&1)&&l!==null?(l.childLanes=0,l.pendingProps=i):l=ds(i,r,0,null),e=Sn(e,r,t,null),l.return=n,e.return=n,l.sibling=e,n.child=l,n.child.memoizedState=Ea(t),n.memoizedState=_a,e):yl(n,i));if(a=e.memoizedState,a!==null&&(o=a.dehydrated,o!==null))return lp(e,n,i,r,o,a,t);if(l){l=r.fallback,i=n.mode,a=e.child,o=a.sibling;var c={mode:"hidden",children:r.children};return!(i&1)&&n.child!==a?(r=n.child,r.childLanes=0,r.pendingProps=c,n.deletions=null):(r=dn(a,c),r.subtreeFlags=a.subtreeFlags&14680064),o!==null?l=dn(o,l):(l=Sn(l,i,t,null),l.flags|=2),l.return=n,r.return=n,r.sibling=l,n.child=r,r=l,l=n.child,i=e.child.memoizedState,i=i===null?Ea(t):{baseLanes:i.baseLanes|t,cachePool:null,transitions:i.transitions},l.memoizedState=i,l.childLanes=e.childLanes&~t,n.memoizedState=_a,r}return l=e.child,e=l.sibling,r=dn(l,{mode:"visible",children:r.children}),!(n.mode&1)&&(r.lanes=t),r.return=n,r.sibling=null,e!==null&&(t=n.deletions,t===null?(n.deletions=[e],n.flags|=16):t.push(e)),n.child=r,n.memoizedState=null,r}function yl(e,n){return n=ds({mode:"visible",children:n},e.mode,0,null),n.return=e,e.child=n}function mr(e,n,t,r){return r!==null&&ll(r),nt(n,e.child,null,t),e=yl(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function lp(e,n,t,r,a,l,i){if(t)return n.flags&256?(n.flags&=-257,r=Vs(Error(x(422))),mr(e,n,i,r)):n.memoizedState!==null?(n.child=e.child,n.flags|=128,null):(l=r.fallback,a=n.mode,r=ds({mode:"visible",children:r.children},a,0,null),l=Sn(l,a,i,null),l.flags|=2,r.return=n,l.return=n,r.sibling=l,n.child=r,n.mode&1&&nt(n,e.child,null,i),n.child.memoizedState=Ea(i),n.memoizedState=_a,l);if(!(n.mode&1))return mr(e,n,i,null);if(a.data==="$!"){if(r=a.nextSibling&&a.nextSibling.dataset,r)var o=r.dgst;return r=o,l=Error(x(419)),r=Vs(l,r,void 0),mr(e,n,i,r)}if(o=(i&e.childLanes)!==0,de||o){if(r=Z,r!==null){switch(i&-i){case 4:a=2;break;case 16:a=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:a=32;break;case 536870912:a=268435456;break;default:a=0}a=a&(r.suspendedLanes|i)?0:a,a!==0&&a!==l.retryLane&&(l.retryLane=a,Ke(e,a),Me(r,e,a,-1))}return _l(),r=Vs(Error(x(421))),mr(e,n,i,r)}return a.data==="$?"?(n.flags|=128,n.child=e.child,n=wp.bind(null,e),a._reactRetry=n,null):(e=l.treeContext,ge=ln(a.nextSibling),ve=n,D=!0,be=null,e!==null&&(je[Ne++]=Ue,je[Ne++]=$e,je[Ne++]=En,Ue=e.id,$e=e.overflow,En=n),n=yl(n,r.children),n.flags|=4096,n)}function Ti(e,n,t){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n),ya(e.return,n,t)}function Us(e,n,t,r,a){var l=e.memoizedState;l===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:r,tail:t,tailMode:a}:(l.isBackwards=n,l.rendering=null,l.renderingStartTime=0,l.last=r,l.tail=t,l.tailMode=a)}function Rc(e,n,t){var r=n.pendingProps,a=r.revealOrder,l=r.tail;if(le(e,n,r.children,t),r=B.current,r&2)r=r&1|2,n.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Ti(e,t,n);else if(e.tag===19)Ti(e,t,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(R(B,r),!(n.mode&1))n.memoizedState=null;else switch(a){case"forwards":for(t=n.child,a=null;t!==null;)e=t.alternate,e!==null&&Qr(e)===null&&(a=t),t=t.sibling;t=a,t===null?(a=n.child,n.child=null):(a=t.sibling,t.sibling=null),Us(n,!1,a,t,l);break;case"backwards":for(t=null,a=n.child,n.child=null;a!==null;){if(e=a.alternate,e!==null&&Qr(e)===null){n.child=a;break}e=a.sibling,a.sibling=t,t=a,a=e}Us(n,!0,t,null,l);break;case"together":Us(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function _r(e,n){!(n.mode&1)&&e!==null&&(e.alternate=null,n.alternate=null,n.flags|=2)}function Ge(e,n,t){if(e!==null&&(n.dependencies=e.dependencies),Pn|=n.lanes,!(t&n.childLanes))return null;if(e!==null&&n.child!==e.child)throw Error(x(153));if(n.child!==null){for(e=n.child,t=dn(e,e.pendingProps),n.child=t,t.return=n;e.sibling!==null;)e=e.sibling,t=t.sibling=dn(e,e.pendingProps),t.return=n;t.sibling=null}return n.child}function ip(e,n,t){switch(n.tag){case 3:Mc(n),et();break;case 5:ic(n);break;case 1:fe(n.type)&&Br(n);break;case 4:pl(n,n.stateNode.containerInfo);break;case 10:var r=n.type._context,a=n.memoizedProps.value;R($r,r._currentValue),r._currentValue=a;break;case 13:if(r=n.memoizedState,r!==null)return r.dehydrated!==null?(R(B,B.current&1),n.flags|=128,null):t&n.child.childLanes?Ic(e,n,t):(R(B,B.current&1),e=Ge(e,n,t),e!==null?e.sibling:null);R(B,B.current&1);break;case 19:if(r=(t&n.childLanes)!==0,e.flags&128){if(r)return Rc(e,n,t);n.flags|=128}if(a=n.memoizedState,a!==null&&(a.rendering=null,a.tail=null,a.lastEffect=null),R(B,B.current),r)break;return null;case 22:case 23:return n.lanes=0,bc(e,n,t)}return Ge(e,n,t)}var Oc,za,Fc,Ac;Oc=function(e,n){for(var t=n.child;t!==null;){if(t.tag===5||t.tag===6)e.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break;for(;t.sibling===null;){if(t.return===null||t.return===n)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};za=function(){};Fc=function(e,n,t,r){var a=e.memoizedProps;if(a!==r){e=n.stateNode,kn(De.current);var l=null;switch(t){case"input":a=qs(e,a),r=qs(e,r),l=[];break;case"select":a=U({},a,{value:void 0}),r=U({},r,{value:void 0}),l=[];break;case"textarea":a=Js(e,a),r=Js(e,r),l=[];break;default:typeof a.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Ar)}na(t,r);var i;t=null;for(d in a)if(!r.hasOwnProperty(d)&&a.hasOwnProperty(d)&&a[d]!=null)if(d==="style"){var o=a[d];for(i in o)o.hasOwnProperty(i)&&(t||(t={}),t[i]="")}else d!=="dangerouslySetInnerHTML"&&d!=="children"&&d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&d!=="autoFocus"&&(bt.hasOwnProperty(d)?l||(l=[]):(l=l||[]).push(d,null));for(d in r){var c=r[d];if(o=a!=null?a[d]:void 0,r.hasOwnProperty(d)&&c!==o&&(c!=null||o!=null))if(d==="style")if(o){for(i in o)!o.hasOwnProperty(i)||c&&c.hasOwnProperty(i)||(t||(t={}),t[i]="");for(i in c)c.hasOwnProperty(i)&&o[i]!==c[i]&&(t||(t={}),t[i]=c[i])}else t||(l||(l=[]),l.push(d,t)),t=c;else d==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,o=o?o.__html:void 0,c!=null&&o!==c&&(l=l||[]).push(d,c)):d==="children"?typeof c!="string"&&typeof c!="number"||(l=l||[]).push(d,""+c):d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&(bt.hasOwnProperty(d)?(c!=null&&d==="onScroll"&&O("scroll",e),l||o===c||(l=[])):(l=l||[]).push(d,c))}t&&(l=l||[]).push("style",t);var d=l;(n.updateQueue=d)&&(n.flags|=4)}};Ac=function(e,n,t,r){t!==r&&(n.flags|=4)};function gt(e,n){if(!D)switch(e.tailMode){case"hidden":n=e.tail;for(var t=null;n!==null;)n.alternate!==null&&(t=n),n=n.sibling;t===null?e.tail=null:t.sibling=null;break;case"collapsed":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function re(e){var n=e.alternate!==null&&e.alternate.child===e.child,t=0,r=0;if(n)for(var a=e.child;a!==null;)t|=a.lanes|a.childLanes,r|=a.subtreeFlags&14680064,r|=a.flags&14680064,a.return=e,a=a.sibling;else for(a=e.child;a!==null;)t|=a.lanes|a.childLanes,r|=a.subtreeFlags,r|=a.flags,a.return=e,a=a.sibling;return e.subtreeFlags|=r,e.childLanes=t,n}function op(e,n,t){var r=n.pendingProps;switch(al(n),n.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return re(n),null;case 1:return fe(n.type)&&Dr(),re(n),null;case 3:return r=n.stateNode,tt(),F(pe),F(ae),ml(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(pr(n)?n.flags|=4:e===null||e.memoizedState.isDehydrated&&!(n.flags&256)||(n.flags|=1024,be!==null&&(Oa(be),be=null))),za(e,n),re(n),null;case 5:fl(n);var a=kn($t.current);if(t=n.type,e!==null&&n.stateNode!=null)Fc(e,n,t,r,a),e.ref!==n.ref&&(n.flags|=512,n.flags|=2097152);else{if(!r){if(n.stateNode===null)throw Error(x(166));return re(n),null}if(e=kn(De.current),pr(n)){r=n.stateNode,t=n.type;var l=n.memoizedProps;switch(r[Fe]=n,r[Vt]=l,e=(n.mode&1)!==0,t){case"dialog":O("cancel",r),O("close",r);break;case"iframe":case"object":case"embed":O("load",r);break;case"video":case"audio":for(a=0;a<jt.length;a++)O(jt[a],r);break;case"source":O("error",r);break;case"img":case"image":case"link":O("error",r),O("load",r);break;case"details":O("toggle",r);break;case"input":Dl(r,l),O("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!l.multiple},O("invalid",r);break;case"textarea":Vl(r,l),O("invalid",r)}na(t,l),a=null;for(var i in l)if(l.hasOwnProperty(i)){var o=l[i];i==="children"?typeof o=="string"?r.textContent!==o&&(l.suppressHydrationWarning!==!0&&dr(r.textContent,o,e),a=["children",o]):typeof o=="number"&&r.textContent!==""+o&&(l.suppressHydrationWarning!==!0&&dr(r.textContent,o,e),a=["children",""+o]):bt.hasOwnProperty(i)&&o!=null&&i==="onScroll"&&O("scroll",r)}switch(t){case"input":rr(r),Bl(r,l,!0);break;case"textarea":rr(r),Ul(r);break;case"select":case"option":break;default:typeof l.onClick=="function"&&(r.onclick=Ar)}r=a,n.updateQueue=r,r!==null&&(n.flags|=4)}else{i=a.nodeType===9?a:a.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=po(t)),e==="http://www.w3.org/1999/xhtml"?t==="script"?(e=i.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=i.createElement(t,{is:r.is}):(e=i.createElement(t),t==="select"&&(i=e,r.multiple?i.multiple=!0:r.size&&(i.size=r.size))):e=i.createElementNS(e,t),e[Fe]=n,e[Vt]=r,Oc(e,n,!1,!1),n.stateNode=e;e:{switch(i=ta(t,r),t){case"dialog":O("cancel",e),O("close",e),a=r;break;case"iframe":case"object":case"embed":O("load",e),a=r;break;case"video":case"audio":for(a=0;a<jt.length;a++)O(jt[a],e);a=r;break;case"source":O("error",e),a=r;break;case"img":case"image":case"link":O("error",e),O("load",e),a=r;break;case"details":O("toggle",e),a=r;break;case"input":Dl(e,r),a=qs(e,r),O("invalid",e);break;case"option":a=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},a=U({},r,{value:void 0}),O("invalid",e);break;case"textarea":Vl(e,r),a=Js(e,r),O("invalid",e);break;default:a=r}na(t,a),o=a;for(l in o)if(o.hasOwnProperty(l)){var c=o[l];l==="style"?ho(e,c):l==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&fo(e,c)):l==="children"?typeof c=="string"?(t!=="textarea"||c!=="")&&Lt(e,c):typeof c=="number"&&Lt(e,""+c):l!=="suppressContentEditableWarning"&&l!=="suppressHydrationWarning"&&l!=="autoFocus"&&(bt.hasOwnProperty(l)?c!=null&&l==="onScroll"&&O("scroll",e):c!=null&&Wa(e,l,c,i))}switch(t){case"input":rr(e),Bl(e,r,!1);break;case"textarea":rr(e),Ul(e);break;case"option":r.value!=null&&e.setAttribute("value",""+pn(r.value));break;case"select":e.multiple=!!r.multiple,l=r.value,l!=null?Qn(e,!!r.multiple,l,!1):r.defaultValue!=null&&Qn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof a.onClick=="function"&&(e.onclick=Ar)}switch(t){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(n.flags|=4)}n.ref!==null&&(n.flags|=512,n.flags|=2097152)}return re(n),null;case 6:if(e&&n.stateNode!=null)Ac(e,n,e.memoizedProps,r);else{if(typeof r!="string"&&n.stateNode===null)throw Error(x(166));if(t=kn($t.current),kn(De.current),pr(n)){if(r=n.stateNode,t=n.memoizedProps,r[Fe]=n,(l=r.nodeValue!==t)&&(e=ve,e!==null))switch(e.tag){case 3:dr(r.nodeValue,t,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&dr(r.nodeValue,t,(e.mode&1)!==0)}l&&(n.flags|=4)}else r=(t.nodeType===9?t:t.ownerDocument).createTextNode(r),r[Fe]=n,n.stateNode=r}return re(n),null;case 13:if(F(B),r=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(D&&ge!==null&&n.mode&1&&!(n.flags&128))tc(),et(),n.flags|=98560,l=!1;else if(l=pr(n),r!==null&&r.dehydrated!==null){if(e===null){if(!l)throw Error(x(318));if(l=n.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(x(317));l[Fe]=n}else et(),!(n.flags&128)&&(n.memoizedState=null),n.flags|=4;re(n),l=!1}else be!==null&&(Oa(be),be=null),l=!0;if(!l)return n.flags&65536?n:null}return n.flags&128?(n.lanes=t,n):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(n.child.flags|=8192,n.mode&1&&(e===null||B.current&1?X===0&&(X=3):_l())),n.updateQueue!==null&&(n.flags|=4),re(n),null);case 4:return tt(),za(e,n),e===null&&Dt(n.stateNode.containerInfo),re(n),null;case 10:return cl(n.type._context),re(n),null;case 17:return fe(n.type)&&Dr(),re(n),null;case 19:if(F(B),l=n.memoizedState,l===null)return re(n),null;if(r=(n.flags&128)!==0,i=l.rendering,i===null)if(r)gt(l,!1);else{if(X!==0||e!==null&&e.flags&128)for(e=n.child;e!==null;){if(i=Qr(e),i!==null){for(n.flags|=128,gt(l,!1),r=i.updateQueue,r!==null&&(n.updateQueue=r,n.flags|=4),n.subtreeFlags=0,r=t,t=n.child;t!==null;)l=t,e=r,l.flags&=14680066,i=l.alternate,i===null?(l.childLanes=0,l.lanes=e,l.child=null,l.subtreeFlags=0,l.memoizedProps=null,l.memoizedState=null,l.updateQueue=null,l.dependencies=null,l.stateNode=null):(l.childLanes=i.childLanes,l.lanes=i.lanes,l.child=i.child,l.subtreeFlags=0,l.deletions=null,l.memoizedProps=i.memoizedProps,l.memoizedState=i.memoizedState,l.updateQueue=i.updateQueue,l.type=i.type,e=i.dependencies,l.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t=t.sibling;return R(B,B.current&1|2),n.child}e=e.sibling}l.tail!==null&&Q()>st&&(n.flags|=128,r=!0,gt(l,!1),n.lanes=4194304)}else{if(!r)if(e=Qr(i),e!==null){if(n.flags|=128,r=!0,t=e.updateQueue,t!==null&&(n.updateQueue=t,n.flags|=4),gt(l,!0),l.tail===null&&l.tailMode==="hidden"&&!i.alternate&&!D)return re(n),null}else 2*Q()-l.renderingStartTime>st&&t!==1073741824&&(n.flags|=128,r=!0,gt(l,!1),n.lanes=4194304);l.isBackwards?(i.sibling=n.child,n.child=i):(t=l.last,t!==null?t.sibling=i:n.child=i,l.last=i)}return l.tail!==null?(n=l.tail,l.rendering=n,l.tail=n.sibling,l.renderingStartTime=Q(),n.sibling=null,t=B.current,R(B,r?t&1|2:t&1),n):(re(n),null);case 22:case 23:return Sl(),r=n.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(n.flags|=8192),r&&n.mode&1?he&1073741824&&(re(n),n.subtreeFlags&6&&(n.flags|=8192)):re(n),null;case 24:return null;case 25:return null}throw Error(x(156,n.tag))}function cp(e,n){switch(al(n),n.tag){case 1:return fe(n.type)&&Dr(),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return tt(),F(pe),F(ae),ml(),e=n.flags,e&65536&&!(e&128)?(n.flags=e&-65537|128,n):null;case 5:return fl(n),null;case 13:if(F(B),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(x(340));et()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return F(B),null;case 4:return tt(),null;case 10:return cl(n.type._context),null;case 22:case 23:return Sl(),null;case 24:return null;default:return null}}var hr=!1,se=!1,up=typeof WeakSet=="function"?WeakSet:Set,N=null;function Wn(e,n){var t=e.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(r){$(e,n,r)}else t.current=null}function Pa(e,n,t){try{t()}catch(r){$(e,n,r)}}var bi=!1;function dp(e,n){if(pa=Rr,e=$o(),rl(e)){if("selectionStart"in e)var t={start:e.selectionStart,end:e.selectionEnd};else e:{t=(t=e.ownerDocument)&&t.defaultView||window;var r=t.getSelection&&t.getSelection();if(r&&r.rangeCount!==0){t=r.anchorNode;var a=r.anchorOffset,l=r.focusNode;r=r.focusOffset;try{t.nodeType,l.nodeType}catch{t=null;break e}var i=0,o=-1,c=-1,d=0,g=0,h=e,m=null;n:for(;;){for(var w;h!==t||a!==0&&h.nodeType!==3||(o=i+a),h!==l||r!==0&&h.nodeType!==3||(c=i+r),h.nodeType===3&&(i+=h.nodeValue.length),(w=h.firstChild)!==null;)m=h,h=w;for(;;){if(h===e)break n;if(m===t&&++d===a&&(o=i),m===l&&++g===r&&(c=i),(w=h.nextSibling)!==null)break;h=m,m=h.parentNode}h=w}t=o===-1||c===-1?null:{start:o,end:c}}else t=null}t=t||{start:0,end:0}}else t=null;for(fa={focusedElem:e,selectionRange:t},Rr=!1,N=n;N!==null;)if(n=N,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,N=e;else for(;N!==null;){n=N;try{var y=n.alternate;if(n.flags&1024)switch(n.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var j=y.memoizedProps,A=y.memoizedState,p=n.stateNode,u=p.getSnapshotBeforeUpdate(n.elementType===n.type?j:Pe(n.type,j),A);p.__reactInternalSnapshotBeforeUpdate=u}break;case 3:var f=n.stateNode.containerInfo;f.nodeType===1?f.textContent="":f.nodeType===9&&f.documentElement&&f.removeChild(f.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(x(163))}}catch(v){$(n,n.return,v)}if(e=n.sibling,e!==null){e.return=n.return,N=e;break}N=n.return}return y=bi,bi=!1,y}function zt(e,n,t){var r=n.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var a=r=r.next;do{if((a.tag&e)===e){var l=a.destroy;a.destroy=void 0,l!==void 0&&Pa(n,t,l)}a=a.next}while(a!==r)}}function cs(e,n){if(n=n.updateQueue,n=n!==null?n.lastEffect:null,n!==null){var t=n=n.next;do{if((t.tag&e)===e){var r=t.create;t.destroy=r()}t=t.next}while(t!==n)}}function Ta(e){var n=e.ref;if(n!==null){var t=e.stateNode;switch(e.tag){case 5:e=t;break;default:e=t}typeof n=="function"?n(e):n.current=e}}function Dc(e){var n=e.alternate;n!==null&&(e.alternate=null,Dc(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&(delete n[Fe],delete n[Vt],delete n[ga],delete n[Kd],delete n[Gd])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Bc(e){return e.tag===5||e.tag===3||e.tag===4}function Li(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Bc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function ba(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?t.nodeType===8?t.parentNode.insertBefore(e,n):t.insertBefore(e,n):(t.nodeType===8?(n=t.parentNode,n.insertBefore(e,t)):(n=t,n.appendChild(e)),t=t._reactRootContainer,t!=null||n.onclick!==null||(n.onclick=Ar));else if(r!==4&&(e=e.child,e!==null))for(ba(e,n,t),e=e.sibling;e!==null;)ba(e,n,t),e=e.sibling}function La(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?t.insertBefore(e,n):t.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(La(e,n,t),e=e.sibling;e!==null;)La(e,n,t),e=e.sibling}var J=null,Te=!1;function qe(e,n,t){for(t=t.child;t!==null;)Vc(e,n,t),t=t.sibling}function Vc(e,n,t){if(Ae&&typeof Ae.onCommitFiberUnmount=="function")try{Ae.onCommitFiberUnmount(ns,t)}catch{}switch(t.tag){case 5:se||Wn(t,n);case 6:var r=J,a=Te;J=null,qe(e,n,t),J=r,Te=a,J!==null&&(Te?(e=J,t=t.stateNode,e.nodeType===8?e.parentNode.removeChild(t):e.removeChild(t)):J.removeChild(t.stateNode));break;case 18:J!==null&&(Te?(e=J,t=t.stateNode,e.nodeType===8?Rs(e.parentNode,t):e.nodeType===1&&Rs(e,t),Ot(e)):Rs(J,t.stateNode));break;case 4:r=J,a=Te,J=t.stateNode.containerInfo,Te=!0,qe(e,n,t),J=r,Te=a;break;case 0:case 11:case 14:case 15:if(!se&&(r=t.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){a=r=r.next;do{var l=a,i=l.destroy;l=l.tag,i!==void 0&&(l&2||l&4)&&Pa(t,n,i),a=a.next}while(a!==r)}qe(e,n,t);break;case 1:if(!se&&(Wn(t,n),r=t.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=t.memoizedProps,r.state=t.memoizedState,r.componentWillUnmount()}catch(o){$(t,n,o)}qe(e,n,t);break;case 21:qe(e,n,t);break;case 22:t.mode&1?(se=(r=se)||t.memoizedState!==null,qe(e,n,t),se=r):qe(e,n,t);break;default:qe(e,n,t)}}function Mi(e){var n=e.updateQueue;if(n!==null){e.updateQueue=null;var t=e.stateNode;t===null&&(t=e.stateNode=new up),n.forEach(function(r){var a=yp.bind(null,e,r);t.has(r)||(t.add(r),r.then(a,a))})}}function ze(e,n){var t=n.deletions;if(t!==null)for(var r=0;r<t.length;r++){var a=t[r];try{var l=e,i=n,o=i;e:for(;o!==null;){switch(o.tag){case 5:J=o.stateNode,Te=!1;break e;case 3:J=o.stateNode.containerInfo,Te=!0;break e;case 4:J=o.stateNode.containerInfo,Te=!0;break e}o=o.return}if(J===null)throw Error(x(160));Vc(l,i,a),J=null,Te=!1;var c=a.alternate;c!==null&&(c.return=null),a.return=null}catch(d){$(a,n,d)}}if(n.subtreeFlags&12854)for(n=n.child;n!==null;)Uc(n,e),n=n.sibling}function Uc(e,n){var t=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(ze(n,e),Re(e),r&4){try{zt(3,e,e.return),cs(3,e)}catch(j){$(e,e.return,j)}try{zt(5,e,e.return)}catch(j){$(e,e.return,j)}}break;case 1:ze(n,e),Re(e),r&512&&t!==null&&Wn(t,t.return);break;case 5:if(ze(n,e),Re(e),r&512&&t!==null&&Wn(t,t.return),e.flags&32){var a=e.stateNode;try{Lt(a,"")}catch(j){$(e,e.return,j)}}if(r&4&&(a=e.stateNode,a!=null)){var l=e.memoizedProps,i=t!==null?t.memoizedProps:l,o=e.type,c=e.updateQueue;if(e.updateQueue=null,c!==null)try{o==="input"&&l.type==="radio"&&l.name!=null&&co(a,l),ta(o,i);var d=ta(o,l);for(i=0;i<c.length;i+=2){var g=c[i],h=c[i+1];g==="style"?ho(a,h):g==="dangerouslySetInnerHTML"?fo(a,h):g==="children"?Lt(a,h):Wa(a,g,h,d)}switch(o){case"input":Ys(a,l);break;case"textarea":uo(a,l);break;case"select":var m=a._wrapperState.wasMultiple;a._wrapperState.wasMultiple=!!l.multiple;var w=l.value;w!=null?Qn(a,!!l.multiple,w,!1):m!==!!l.multiple&&(l.defaultValue!=null?Qn(a,!!l.multiple,l.defaultValue,!0):Qn(a,!!l.multiple,l.multiple?[]:"",!1))}a[Vt]=l}catch(j){$(e,e.return,j)}}break;case 6:if(ze(n,e),Re(e),r&4){if(e.stateNode===null)throw Error(x(162));a=e.stateNode,l=e.memoizedProps;try{a.nodeValue=l}catch(j){$(e,e.return,j)}}break;case 3:if(ze(n,e),Re(e),r&4&&t!==null&&t.memoizedState.isDehydrated)try{Ot(n.containerInfo)}catch(j){$(e,e.return,j)}break;case 4:ze(n,e),Re(e);break;case 13:ze(n,e),Re(e),a=e.child,a.flags&8192&&(l=a.memoizedState!==null,a.stateNode.isHidden=l,!l||a.alternate!==null&&a.alternate.memoizedState!==null||(kl=Q())),r&4&&Mi(e);break;case 22:if(g=t!==null&&t.memoizedState!==null,e.mode&1?(se=(d=se)||g,ze(n,e),se=d):ze(n,e),Re(e),r&8192){if(d=e.memoizedState!==null,(e.stateNode.isHidden=d)&&!g&&e.mode&1)for(N=e,g=e.child;g!==null;){for(h=N=g;N!==null;){switch(m=N,w=m.child,m.tag){case 0:case 11:case 14:case 15:zt(4,m,m.return);break;case 1:Wn(m,m.return);var y=m.stateNode;if(typeof y.componentWillUnmount=="function"){r=m,t=m.return;try{n=r,y.props=n.memoizedProps,y.state=n.memoizedState,y.componentWillUnmount()}catch(j){$(r,t,j)}}break;case 5:Wn(m,m.return);break;case 22:if(m.memoizedState!==null){Ri(h);continue}}w!==null?(w.return=m,N=w):Ri(h)}g=g.sibling}e:for(g=null,h=e;;){if(h.tag===5){if(g===null){g=h;try{a=h.stateNode,d?(l=a.style,typeof l.setProperty=="function"?l.setProperty("display","none","important"):l.display="none"):(o=h.stateNode,c=h.memoizedProps.style,i=c!=null&&c.hasOwnProperty("display")?c.display:null,o.style.display=mo("display",i))}catch(j){$(e,e.return,j)}}}else if(h.tag===6){if(g===null)try{h.stateNode.nodeValue=d?"":h.memoizedProps}catch(j){$(e,e.return,j)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===e)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===e)break e;for(;h.sibling===null;){if(h.return===null||h.return===e)break e;g===h&&(g=null),h=h.return}g===h&&(g=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:ze(n,e),Re(e),r&4&&Mi(e);break;case 21:break;default:ze(n,e),Re(e)}}function Re(e){var n=e.flags;if(n&2){try{e:{for(var t=e.return;t!==null;){if(Bc(t)){var r=t;break e}t=t.return}throw Error(x(160))}switch(r.tag){case 5:var a=r.stateNode;r.flags&32&&(Lt(a,""),r.flags&=-33);var l=Li(e);La(e,l,a);break;case 3:case 4:var i=r.stateNode.containerInfo,o=Li(e);ba(e,o,i);break;default:throw Error(x(161))}}catch(c){$(e,e.return,c)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function pp(e,n,t){N=e,$c(e)}function $c(e,n,t){for(var r=(e.mode&1)!==0;N!==null;){var a=N,l=a.child;if(a.tag===22&&r){var i=a.memoizedState!==null||hr;if(!i){var o=a.alternate,c=o!==null&&o.memoizedState!==null||se;o=hr;var d=se;if(hr=i,(se=c)&&!d)for(N=a;N!==null;)i=N,c=i.child,i.tag===22&&i.memoizedState!==null?Oi(a):c!==null?(c.return=i,N=c):Oi(a);for(;l!==null;)N=l,$c(l),l=l.sibling;N=a,hr=o,se=d}Ii(e)}else a.subtreeFlags&8772&&l!==null?(l.return=a,N=l):Ii(e)}}function Ii(e){for(;N!==null;){var n=N;if(n.flags&8772){var t=n.alternate;try{if(n.flags&8772)switch(n.tag){case 0:case 11:case 15:se||cs(5,n);break;case 1:var r=n.stateNode;if(n.flags&4&&!se)if(t===null)r.componentDidMount();else{var a=n.elementType===n.type?t.memoizedProps:Pe(n.type,t.memoizedProps);r.componentDidUpdate(a,t.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var l=n.updateQueue;l!==null&&xi(n,l,r);break;case 3:var i=n.updateQueue;if(i!==null){if(t=null,n.child!==null)switch(n.child.tag){case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}xi(n,i,t)}break;case 5:var o=n.stateNode;if(t===null&&n.flags&4){t=o;var c=n.memoizedProps;switch(n.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&t.focus();break;case"img":c.src&&(t.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(n.memoizedState===null){var d=n.alternate;if(d!==null){var g=d.memoizedState;if(g!==null){var h=g.dehydrated;h!==null&&Ot(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(x(163))}se||n.flags&512&&Ta(n)}catch(m){$(n,n.return,m)}}if(n===e){N=null;break}if(t=n.sibling,t!==null){t.return=n.return,N=t;break}N=n.return}}function Ri(e){for(;N!==null;){var n=N;if(n===e){N=null;break}var t=n.sibling;if(t!==null){t.return=n.return,N=t;break}N=n.return}}function Oi(e){for(;N!==null;){var n=N;try{switch(n.tag){case 0:case 11:case 15:var t=n.return;try{cs(4,n)}catch(c){$(n,t,c)}break;case 1:var r=n.stateNode;if(typeof r.componentDidMount=="function"){var a=n.return;try{r.componentDidMount()}catch(c){$(n,a,c)}}var l=n.return;try{Ta(n)}catch(c){$(n,l,c)}break;case 5:var i=n.return;try{Ta(n)}catch(c){$(n,i,c)}}}catch(c){$(n,n.return,c)}if(n===e){N=null;break}var o=n.sibling;if(o!==null){o.return=n.return,N=o;break}N=n.return}}var fp=Math.ceil,Xr=Xe.ReactCurrentDispatcher,jl=Xe.ReactCurrentOwner,Ce=Xe.ReactCurrentBatchConfig,M=0,Z=null,K=null,ee=0,he=0,Hn=hn(0),X=0,Kt=null,Pn=0,us=0,Nl=0,Pt=null,ue=null,kl=0,st=1/0,Be=null,qr=!1,Ma=null,cn=null,gr=!1,tn=null,Yr=0,Tt=0,Ia=null,Er=-1,zr=0;function ie(){return M&6?Q():Er!==-1?Er:Er=Q()}function un(e){return e.mode&1?M&2&&ee!==0?ee&-ee:qd.transition!==null?(zr===0&&(zr=Eo()),zr):(e=I,e!==0||(e=window.event,e=e===void 0?16:Io(e.type)),e):1}function Me(e,n,t,r){if(50<Tt)throw Tt=0,Ia=null,Error(x(185));Xt(e,t,r),(!(M&2)||e!==Z)&&(e===Z&&(!(M&2)&&(us|=t),X===4&&en(e,ee)),me(e,r),t===1&&M===0&&!(n.mode&1)&&(st=Q()+500,ls&&gn()))}function me(e,n){var t=e.callbackNode;qu(e,n);var r=Ir(e,e===Z?ee:0);if(r===0)t!==null&&Hl(t),e.callbackNode=null,e.callbackPriority=0;else if(n=r&-r,e.callbackPriority!==n){if(t!=null&&Hl(t),n===1)e.tag===0?Xd(Fi.bind(null,e)):Jo(Fi.bind(null,e)),Hd(function(){!(M&6)&&gn()}),t=null;else{switch(zo(r)){case 1:t=Xa;break;case 4:t=So;break;case 16:t=Mr;break;case 536870912:t=_o;break;default:t=Mr}t=Yc(t,Wc.bind(null,e))}e.callbackPriority=n,e.callbackNode=t}}function Wc(e,n){if(Er=-1,zr=0,M&6)throw Error(x(327));var t=e.callbackNode;if(Yn()&&e.callbackNode!==t)return null;var r=Ir(e,e===Z?ee:0);if(r===0)return null;if(r&30||r&e.expiredLanes||n)n=Zr(e,r);else{n=r;var a=M;M|=2;var l=Qc();(Z!==e||ee!==n)&&(Be=null,st=Q()+500,Cn(e,n));do try{gp();break}catch(o){Hc(e,o)}while(!0);ol(),Xr.current=l,M=a,K!==null?n=0:(Z=null,ee=0,n=X)}if(n!==0){if(n===2&&(a=ia(e),a!==0&&(r=a,n=Ra(e,a))),n===1)throw t=Kt,Cn(e,0),en(e,r),me(e,Q()),t;if(n===6)en(e,r);else{if(a=e.current.alternate,!(r&30)&&!mp(a)&&(n=Zr(e,r),n===2&&(l=ia(e),l!==0&&(r=l,n=Ra(e,l))),n===1))throw t=Kt,Cn(e,0),en(e,r),me(e,Q()),t;switch(e.finishedWork=a,e.finishedLanes=r,n){case 0:case 1:throw Error(x(345));case 2:yn(e,ue,Be);break;case 3:if(en(e,r),(r&130023424)===r&&(n=kl+500-Q(),10<n)){if(Ir(e,0)!==0)break;if(a=e.suspendedLanes,(a&r)!==r){ie(),e.pingedLanes|=e.suspendedLanes&a;break}e.timeoutHandle=ha(yn.bind(null,e,ue,Be),n);break}yn(e,ue,Be);break;case 4:if(en(e,r),(r&4194240)===r)break;for(n=e.eventTimes,a=-1;0<r;){var i=31-Le(r);l=1<<i,i=n[i],i>a&&(a=i),r&=~l}if(r=a,r=Q()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*fp(r/1960))-r,10<r){e.timeoutHandle=ha(yn.bind(null,e,ue,Be),r);break}yn(e,ue,Be);break;case 5:yn(e,ue,Be);break;default:throw Error(x(329))}}}return me(e,Q()),e.callbackNode===t?Wc.bind(null,e):null}function Ra(e,n){var t=Pt;return e.current.memoizedState.isDehydrated&&(Cn(e,n).flags|=256),e=Zr(e,n),e!==2&&(n=ue,ue=t,n!==null&&Oa(n)),e}function Oa(e){ue===null?ue=e:ue.push.apply(ue,e)}function mp(e){for(var n=e;;){if(n.flags&16384){var t=n.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var r=0;r<t.length;r++){var a=t[r],l=a.getSnapshot;a=a.value;try{if(!Ie(l(),a))return!1}catch{return!1}}}if(t=n.child,n.subtreeFlags&16384&&t!==null)t.return=n,n=t;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function en(e,n){for(n&=~Nl,n&=~us,e.suspendedLanes|=n,e.pingedLanes&=~n,e=e.expirationTimes;0<n;){var t=31-Le(n),r=1<<t;e[t]=-1,n&=~r}}function Fi(e){if(M&6)throw Error(x(327));Yn();var n=Ir(e,0);if(!(n&1))return me(e,Q()),null;var t=Zr(e,n);if(e.tag!==0&&t===2){var r=ia(e);r!==0&&(n=r,t=Ra(e,r))}if(t===1)throw t=Kt,Cn(e,0),en(e,n),me(e,Q()),t;if(t===6)throw Error(x(345));return e.finishedWork=e.current.alternate,e.finishedLanes=n,yn(e,ue,Be),me(e,Q()),null}function Cl(e,n){var t=M;M|=1;try{return e(n)}finally{M=t,M===0&&(st=Q()+500,ls&&gn())}}function Tn(e){tn!==null&&tn.tag===0&&!(M&6)&&Yn();var n=M;M|=1;var t=Ce.transition,r=I;try{if(Ce.transition=null,I=1,e)return e()}finally{I=r,Ce.transition=t,M=n,!(M&6)&&gn()}}function Sl(){he=Hn.current,F(Hn)}function Cn(e,n){e.finishedWork=null,e.finishedLanes=0;var t=e.timeoutHandle;if(t!==-1&&(e.timeoutHandle=-1,Wd(t)),K!==null)for(t=K.return;t!==null;){var r=t;switch(al(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Dr();break;case 3:tt(),F(pe),F(ae),ml();break;case 5:fl(r);break;case 4:tt();break;case 13:F(B);break;case 19:F(B);break;case 10:cl(r.type._context);break;case 22:case 23:Sl()}t=t.return}if(Z=e,K=e=dn(e.current,null),ee=he=n,X=0,Kt=null,Nl=us=Pn=0,ue=Pt=null,Nn!==null){for(n=0;n<Nn.length;n++)if(t=Nn[n],r=t.interleaved,r!==null){t.interleaved=null;var a=r.next,l=t.pending;if(l!==null){var i=l.next;l.next=a,r.next=i}t.pending=r}Nn=null}return e}function Hc(e,n){do{var t=K;try{if(ol(),Cr.current=Gr,Kr){for(var r=V.memoizedState;r!==null;){var a=r.queue;a!==null&&(a.pending=null),r=r.next}Kr=!1}if(zn=0,Y=G=V=null,Et=!1,Wt=0,jl.current=null,t===null||t.return===null){X=1,Kt=n,K=null;break}e:{var l=e,i=t.return,o=t,c=n;if(n=ee,o.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var d=c,g=o,h=g.tag;if(!(g.mode&1)&&(h===0||h===11||h===15)){var m=g.alternate;m?(g.updateQueue=m.updateQueue,g.memoizedState=m.memoizedState,g.lanes=m.lanes):(g.updateQueue=null,g.memoizedState=null)}var w=Ci(i);if(w!==null){w.flags&=-257,Si(w,i,o,l,n),w.mode&1&&ki(l,d,n),n=w,c=d;var y=n.updateQueue;if(y===null){var j=new Set;j.add(c),n.updateQueue=j}else y.add(c);break e}else{if(!(n&1)){ki(l,d,n),_l();break e}c=Error(x(426))}}else if(D&&o.mode&1){var A=Ci(i);if(A!==null){!(A.flags&65536)&&(A.flags|=256),Si(A,i,o,l,n),ll(rt(c,o));break e}}l=c=rt(c,o),X!==4&&(X=2),Pt===null?Pt=[l]:Pt.push(l),l=i;do{switch(l.tag){case 3:l.flags|=65536,n&=-n,l.lanes|=n;var p=zc(l,c,n);vi(l,p);break e;case 1:o=c;var u=l.type,f=l.stateNode;if(!(l.flags&128)&&(typeof u.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(cn===null||!cn.has(f)))){l.flags|=65536,n&=-n,l.lanes|=n;var v=Pc(l,o,n);vi(l,v);break e}}l=l.return}while(l!==null)}Gc(t)}catch(k){n=k,K===t&&t!==null&&(K=t=t.return);continue}break}while(!0)}function Qc(){var e=Xr.current;return Xr.current=Gr,e===null?Gr:e}function _l(){(X===0||X===3||X===2)&&(X=4),Z===null||!(Pn&268435455)&&!(us&268435455)||en(Z,ee)}function Zr(e,n){var t=M;M|=2;var r=Qc();(Z!==e||ee!==n)&&(Be=null,Cn(e,n));do try{hp();break}catch(a){Hc(e,a)}while(!0);if(ol(),M=t,Xr.current=r,K!==null)throw Error(x(261));return Z=null,ee=0,X}function hp(){for(;K!==null;)Kc(K)}function gp(){for(;K!==null&&!Vu();)Kc(K)}function Kc(e){var n=qc(e.alternate,e,he);e.memoizedProps=e.pendingProps,n===null?Gc(e):K=n,jl.current=null}function Gc(e){var n=e;do{var t=n.alternate;if(e=n.return,n.flags&32768){if(t=cp(t,n),t!==null){t.flags&=32767,K=t;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{X=6,K=null;return}}else if(t=op(t,n,he),t!==null){K=t;return}if(n=n.sibling,n!==null){K=n;return}K=n=e}while(n!==null);X===0&&(X=5)}function yn(e,n,t){var r=I,a=Ce.transition;try{Ce.transition=null,I=1,vp(e,n,t,r)}finally{Ce.transition=a,I=r}return null}function vp(e,n,t,r){do Yn();while(tn!==null);if(M&6)throw Error(x(327));t=e.finishedWork;var a=e.finishedLanes;if(t===null)return null;if(e.finishedWork=null,e.finishedLanes=0,t===e.current)throw Error(x(177));e.callbackNode=null,e.callbackPriority=0;var l=t.lanes|t.childLanes;if(Yu(e,l),e===Z&&(K=Z=null,ee=0),!(t.subtreeFlags&2064)&&!(t.flags&2064)||gr||(gr=!0,Yc(Mr,function(){return Yn(),null})),l=(t.flags&15990)!==0,t.subtreeFlags&15990||l){l=Ce.transition,Ce.transition=null;var i=I;I=1;var o=M;M|=4,jl.current=null,dp(e,t),Uc(t,e),Fd(fa),Rr=!!pa,fa=pa=null,e.current=t,pp(t),Uu(),M=o,I=i,Ce.transition=l}else e.current=t;if(gr&&(gr=!1,tn=e,Yr=a),l=e.pendingLanes,l===0&&(cn=null),Hu(t.stateNode),me(e,Q()),n!==null)for(r=e.onRecoverableError,t=0;t<n.length;t++)a=n[t],r(a.value,{componentStack:a.stack,digest:a.digest});if(qr)throw qr=!1,e=Ma,Ma=null,e;return Yr&1&&e.tag!==0&&Yn(),l=e.pendingLanes,l&1?e===Ia?Tt++:(Tt=0,Ia=e):Tt=0,gn(),null}function Yn(){if(tn!==null){var e=zo(Yr),n=Ce.transition,t=I;try{if(Ce.transition=null,I=16>e?16:e,tn===null)var r=!1;else{if(e=tn,tn=null,Yr=0,M&6)throw Error(x(331));var a=M;for(M|=4,N=e.current;N!==null;){var l=N,i=l.child;if(N.flags&16){var o=l.deletions;if(o!==null){for(var c=0;c<o.length;c++){var d=o[c];for(N=d;N!==null;){var g=N;switch(g.tag){case 0:case 11:case 15:zt(8,g,l)}var h=g.child;if(h!==null)h.return=g,N=h;else for(;N!==null;){g=N;var m=g.sibling,w=g.return;if(Dc(g),g===d){N=null;break}if(m!==null){m.return=w,N=m;break}N=w}}}var y=l.alternate;if(y!==null){var j=y.child;if(j!==null){y.child=null;do{var A=j.sibling;j.sibling=null,j=A}while(j!==null)}}N=l}}if(l.subtreeFlags&2064&&i!==null)i.return=l,N=i;else e:for(;N!==null;){if(l=N,l.flags&2048)switch(l.tag){case 0:case 11:case 15:zt(9,l,l.return)}var p=l.sibling;if(p!==null){p.return=l.return,N=p;break e}N=l.return}}var u=e.current;for(N=u;N!==null;){i=N;var f=i.child;if(i.subtreeFlags&2064&&f!==null)f.return=i,N=f;else e:for(i=u;N!==null;){if(o=N,o.flags&2048)try{switch(o.tag){case 0:case 11:case 15:cs(9,o)}}catch(k){$(o,o.return,k)}if(o===i){N=null;break e}var v=o.sibling;if(v!==null){v.return=o.return,N=v;break e}N=o.return}}if(M=a,gn(),Ae&&typeof Ae.onPostCommitFiberRoot=="function")try{Ae.onPostCommitFiberRoot(ns,e)}catch{}r=!0}return r}finally{I=t,Ce.transition=n}}return!1}function Ai(e,n,t){n=rt(t,n),n=zc(e,n,1),e=on(e,n,1),n=ie(),e!==null&&(Xt(e,1,n),me(e,n))}function $(e,n,t){if(e.tag===3)Ai(e,e,t);else for(;n!==null;){if(n.tag===3){Ai(n,e,t);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(cn===null||!cn.has(r))){e=rt(t,e),e=Pc(n,e,1),n=on(n,e,1),e=ie(),n!==null&&(Xt(n,1,e),me(n,e));break}}n=n.return}}function xp(e,n,t){var r=e.pingCache;r!==null&&r.delete(n),n=ie(),e.pingedLanes|=e.suspendedLanes&t,Z===e&&(ee&t)===t&&(X===4||X===3&&(ee&130023424)===ee&&500>Q()-kl?Cn(e,0):Nl|=t),me(e,n)}function Xc(e,n){n===0&&(e.mode&1?(n=lr,lr<<=1,!(lr&130023424)&&(lr=4194304)):n=1);var t=ie();e=Ke(e,n),e!==null&&(Xt(e,n,t),me(e,t))}function wp(e){var n=e.memoizedState,t=0;n!==null&&(t=n.retryLane),Xc(e,t)}function yp(e,n){var t=0;switch(e.tag){case 13:var r=e.stateNode,a=e.memoizedState;a!==null&&(t=a.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(x(314))}r!==null&&r.delete(n),Xc(e,t)}var qc;qc=function(e,n,t){if(e!==null)if(e.memoizedProps!==n.pendingProps||pe.current)de=!0;else{if(!(e.lanes&t)&&!(n.flags&128))return de=!1,ip(e,n,t);de=!!(e.flags&131072)}else de=!1,D&&n.flags&1048576&&ec(n,Ur,n.index);switch(n.lanes=0,n.tag){case 2:var r=n.type;_r(e,n),e=n.pendingProps;var a=Jn(n,ae.current);qn(n,t),a=gl(null,n,r,e,a,t);var l=vl();return n.flags|=1,typeof a=="object"&&a!==null&&typeof a.render=="function"&&a.$$typeof===void 0?(n.tag=1,n.memoizedState=null,n.updateQueue=null,fe(r)?(l=!0,Br(n)):l=!1,n.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,dl(n),a.updater=os,n.stateNode=a,a._reactInternals=n,Na(n,r,e,t),n=Sa(null,n,r,!0,l,t)):(n.tag=0,D&&l&&sl(n),le(null,n,a,t),n=n.child),n;case 16:r=n.elementType;e:{switch(_r(e,n),e=n.pendingProps,a=r._init,r=a(r._payload),n.type=r,a=n.tag=Np(r),e=Pe(r,e),a){case 0:n=Ca(null,n,r,e,t);break e;case 1:n=zi(null,n,r,e,t);break e;case 11:n=_i(null,n,r,e,t);break e;case 14:n=Ei(null,n,r,Pe(r.type,e),t);break e}throw Error(x(306,r,""))}return n;case 0:return r=n.type,a=n.pendingProps,a=n.elementType===r?a:Pe(r,a),Ca(e,n,r,a,t);case 1:return r=n.type,a=n.pendingProps,a=n.elementType===r?a:Pe(r,a),zi(e,n,r,a,t);case 3:e:{if(Mc(n),e===null)throw Error(x(387));r=n.pendingProps,l=n.memoizedState,a=l.element,lc(e,n),Hr(n,r,null,t);var i=n.memoizedState;if(r=i.element,l.isDehydrated)if(l={element:r,isDehydrated:!1,cache:i.cache,pendingSuspenseBoundaries:i.pendingSuspenseBoundaries,transitions:i.transitions},n.updateQueue.baseState=l,n.memoizedState=l,n.flags&256){a=rt(Error(x(423)),n),n=Pi(e,n,r,t,a);break e}else if(r!==a){a=rt(Error(x(424)),n),n=Pi(e,n,r,t,a);break e}else for(ge=ln(n.stateNode.containerInfo.firstChild),ve=n,D=!0,be=null,t=sc(n,null,r,t),n.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(et(),r===a){n=Ge(e,n,t);break e}le(e,n,r,t)}n=n.child}return n;case 5:return ic(n),e===null&&wa(n),r=n.type,a=n.pendingProps,l=e!==null?e.memoizedProps:null,i=a.children,ma(r,a)?i=null:l!==null&&ma(r,l)&&(n.flags|=32),Lc(e,n),le(e,n,i,t),n.child;case 6:return e===null&&wa(n),null;case 13:return Ic(e,n,t);case 4:return pl(n,n.stateNode.containerInfo),r=n.pendingProps,e===null?n.child=nt(n,null,r,t):le(e,n,r,t),n.child;case 11:return r=n.type,a=n.pendingProps,a=n.elementType===r?a:Pe(r,a),_i(e,n,r,a,t);case 7:return le(e,n,n.pendingProps,t),n.child;case 8:return le(e,n,n.pendingProps.children,t),n.child;case 12:return le(e,n,n.pendingProps.children,t),n.child;case 10:e:{if(r=n.type._context,a=n.pendingProps,l=n.memoizedProps,i=a.value,R($r,r._currentValue),r._currentValue=i,l!==null)if(Ie(l.value,i)){if(l.children===a.children&&!pe.current){n=Ge(e,n,t);break e}}else for(l=n.child,l!==null&&(l.return=n);l!==null;){var o=l.dependencies;if(o!==null){i=l.child;for(var c=o.firstContext;c!==null;){if(c.context===r){if(l.tag===1){c=We(-1,t&-t),c.tag=2;var d=l.updateQueue;if(d!==null){d=d.shared;var g=d.pending;g===null?c.next=c:(c.next=g.next,g.next=c),d.pending=c}}l.lanes|=t,c=l.alternate,c!==null&&(c.lanes|=t),ya(l.return,t,n),o.lanes|=t;break}c=c.next}}else if(l.tag===10)i=l.type===n.type?null:l.child;else if(l.tag===18){if(i=l.return,i===null)throw Error(x(341));i.lanes|=t,o=i.alternate,o!==null&&(o.lanes|=t),ya(i,t,n),i=l.sibling}else i=l.child;if(i!==null)i.return=l;else for(i=l;i!==null;){if(i===n){i=null;break}if(l=i.sibling,l!==null){l.return=i.return,i=l;break}i=i.return}l=i}le(e,n,a.children,t),n=n.child}return n;case 9:return a=n.type,r=n.pendingProps.children,qn(n,t),a=Se(a),r=r(a),n.flags|=1,le(e,n,r,t),n.child;case 14:return r=n.type,a=Pe(r,n.pendingProps),a=Pe(r.type,a),Ei(e,n,r,a,t);case 15:return Tc(e,n,n.type,n.pendingProps,t);case 17:return r=n.type,a=n.pendingProps,a=n.elementType===r?a:Pe(r,a),_r(e,n),n.tag=1,fe(r)?(e=!0,Br(n)):e=!1,qn(n,t),Ec(n,r,a),Na(n,r,a,t),Sa(null,n,r,!0,e,t);case 19:return Rc(e,n,t);case 22:return bc(e,n,t)}throw Error(x(156,n.tag))};function Yc(e,n){return Co(e,n)}function jp(e,n,t,r){this.tag=e,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ke(e,n,t,r){return new jp(e,n,t,r)}function El(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Np(e){if(typeof e=="function")return El(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Qa)return 11;if(e===Ka)return 14}return 2}function dn(e,n){var t=e.alternate;return t===null?(t=ke(e.tag,n,e.key,e.mode),t.elementType=e.elementType,t.type=e.type,t.stateNode=e.stateNode,t.alternate=e,e.alternate=t):(t.pendingProps=n,t.type=e.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=e.flags&14680064,t.childLanes=e.childLanes,t.lanes=e.lanes,t.child=e.child,t.memoizedProps=e.memoizedProps,t.memoizedState=e.memoizedState,t.updateQueue=e.updateQueue,n=e.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},t.sibling=e.sibling,t.index=e.index,t.ref=e.ref,t}function Pr(e,n,t,r,a,l){var i=2;if(r=e,typeof e=="function")El(e)&&(i=1);else if(typeof e=="string")i=5;else e:switch(e){case Rn:return Sn(t.children,a,l,n);case Ha:i=8,a|=8;break;case Qs:return e=ke(12,t,n,a|2),e.elementType=Qs,e.lanes=l,e;case Ks:return e=ke(13,t,n,a),e.elementType=Ks,e.lanes=l,e;case Gs:return e=ke(19,t,n,a),e.elementType=Gs,e.lanes=l,e;case lo:return ds(t,a,l,n);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case so:i=10;break e;case ao:i=9;break e;case Qa:i=11;break e;case Ka:i=14;break e;case Ye:i=16,r=null;break e}throw Error(x(130,e==null?e:typeof e,""))}return n=ke(i,t,n,a),n.elementType=e,n.type=r,n.lanes=l,n}function Sn(e,n,t,r){return e=ke(7,e,r,n),e.lanes=t,e}function ds(e,n,t,r){return e=ke(22,e,r,n),e.elementType=lo,e.lanes=t,e.stateNode={isHidden:!1},e}function $s(e,n,t){return e=ke(6,e,null,n),e.lanes=t,e}function Ws(e,n,t){return n=ke(4,e.children!==null?e.children:[],e.key,n),n.lanes=t,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}function kp(e,n,t,r,a){this.tag=n,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Cs(0),this.expirationTimes=Cs(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Cs(0),this.identifierPrefix=r,this.onRecoverableError=a,this.mutableSourceEagerHydrationData=null}function zl(e,n,t,r,a,l,i,o,c){return e=new kp(e,n,t,o,c),n===1?(n=1,l===!0&&(n|=8)):n=0,l=ke(3,null,null,n),e.current=l,l.stateNode=e,l.memoizedState={element:r,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},dl(l),e}function Cp(e,n,t){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:In,key:r==null?null:""+r,children:e,containerInfo:n,implementation:t}}function Zc(e){if(!e)return fn;e=e._reactInternals;e:{if(Ln(e)!==e||e.tag!==1)throw Error(x(170));var n=e;do{switch(n.tag){case 3:n=n.stateNode.context;break e;case 1:if(fe(n.type)){n=n.stateNode.__reactInternalMemoizedMergedChildContext;break e}}n=n.return}while(n!==null);throw Error(x(171))}if(e.tag===1){var t=e.type;if(fe(t))return Zo(e,t,n)}return n}function Jc(e,n,t,r,a,l,i,o,c){return e=zl(t,r,!0,e,a,l,i,o,c),e.context=Zc(null),t=e.current,r=ie(),a=un(t),l=We(r,a),l.callback=n??null,on(t,l,a),e.current.lanes=a,Xt(e,a,r),me(e,r),e}function ps(e,n,t,r){var a=n.current,l=ie(),i=un(a);return t=Zc(t),n.context===null?n.context=t:n.pendingContext=t,n=We(l,i),n.payload={element:e},r=r===void 0?null:r,r!==null&&(n.callback=r),e=on(a,n,i),e!==null&&(Me(e,a,i,l),kr(e,a,i)),i}function Jr(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Di(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var t=e.retryLane;e.retryLane=t!==0&&t<n?t:n}}function Pl(e,n){Di(e,n),(e=e.alternate)&&Di(e,n)}function Sp(){return null}var eu=typeof reportError=="function"?reportError:function(e){console.error(e)};function Tl(e){this._internalRoot=e}fs.prototype.render=Tl.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(x(409));ps(e,n,null,null)};fs.prototype.unmount=Tl.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;Tn(function(){ps(null,e,null,null)}),n[Qe]=null}};function fs(e){this._internalRoot=e}fs.prototype.unstable_scheduleHydration=function(e){if(e){var n=bo();e={blockedOn:null,target:e,priority:n};for(var t=0;t<Je.length&&n!==0&&n<Je[t].priority;t++);Je.splice(t,0,e),t===0&&Mo(e)}};function bl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function ms(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Bi(){}function _p(e,n,t,r,a){if(a){if(typeof r=="function"){var l=r;r=function(){var d=Jr(i);l.call(d)}}var i=Jc(n,r,e,0,null,!1,!1,"",Bi);return e._reactRootContainer=i,e[Qe]=i.current,Dt(e.nodeType===8?e.parentNode:e),Tn(),i}for(;a=e.lastChild;)e.removeChild(a);if(typeof r=="function"){var o=r;r=function(){var d=Jr(c);o.call(d)}}var c=zl(e,0,!1,null,null,!1,!1,"",Bi);return e._reactRootContainer=c,e[Qe]=c.current,Dt(e.nodeType===8?e.parentNode:e),Tn(function(){ps(n,c,t,r)}),c}function hs(e,n,t,r,a){var l=t._reactRootContainer;if(l){var i=l;if(typeof a=="function"){var o=a;a=function(){var c=Jr(i);o.call(c)}}ps(n,i,e,a)}else i=_p(t,n,e,a,r);return Jr(i)}Po=function(e){switch(e.tag){case 3:var n=e.stateNode;if(n.current.memoizedState.isDehydrated){var t=yt(n.pendingLanes);t!==0&&(qa(n,t|1),me(n,Q()),!(M&6)&&(st=Q()+500,gn()))}break;case 13:Tn(function(){var r=Ke(e,1);if(r!==null){var a=ie();Me(r,e,1,a)}}),Pl(e,1)}};Ya=function(e){if(e.tag===13){var n=Ke(e,134217728);if(n!==null){var t=ie();Me(n,e,134217728,t)}Pl(e,134217728)}};To=function(e){if(e.tag===13){var n=un(e),t=Ke(e,n);if(t!==null){var r=ie();Me(t,e,n,r)}Pl(e,n)}};bo=function(){return I};Lo=function(e,n){var t=I;try{return I=e,n()}finally{I=t}};sa=function(e,n,t){switch(n){case"input":if(Ys(e,t),n=t.name,t.type==="radio"&&n!=null){for(t=e;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+n)+'][type="radio"]'),n=0;n<t.length;n++){var r=t[n];if(r!==e&&r.form===e.form){var a=as(r);if(!a)throw Error(x(90));oo(r),Ys(r,a)}}}break;case"textarea":uo(e,t);break;case"select":n=t.value,n!=null&&Qn(e,!!t.multiple,n,!1)}};xo=Cl;wo=Tn;var Ep={usingClientEntryPoint:!1,Events:[Yt,Dn,as,go,vo,Cl]},vt={findFiberByHostInstance:jn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},zp={bundleType:vt.bundleType,version:vt.version,rendererPackageName:vt.rendererPackageName,rendererConfig:vt.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Xe.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=No(e),e===null?null:e.stateNode},findFiberByHostInstance:vt.findFiberByHostInstance||Sp,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var vr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!vr.isDisabled&&vr.supportsFiber)try{ns=vr.inject(zp),Ae=vr}catch{}}we.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Ep;we.createPortal=function(e,n){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!bl(n))throw Error(x(200));return Cp(e,n,null,t)};we.createRoot=function(e,n){if(!bl(e))throw Error(x(299));var t=!1,r="",a=eu;return n!=null&&(n.unstable_strictMode===!0&&(t=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),n=zl(e,1,!1,null,null,t,!1,r,a),e[Qe]=n.current,Dt(e.nodeType===8?e.parentNode:e),new Tl(n)};we.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(x(188)):(e=Object.keys(e).join(","),Error(x(268,e)));return e=No(n),e=e===null?null:e.stateNode,e};we.flushSync=function(e){return Tn(e)};we.hydrate=function(e,n,t){if(!ms(n))throw Error(x(200));return hs(null,e,n,!0,t)};we.hydrateRoot=function(e,n,t){if(!bl(e))throw Error(x(405));var r=t!=null&&t.hydratedSources||null,a=!1,l="",i=eu;if(t!=null&&(t.unstable_strictMode===!0&&(a=!0),t.identifierPrefix!==void 0&&(l=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),n=Jc(n,null,e,1,t??null,a,!1,l,i),e[Qe]=n.current,Dt(e),r)for(e=0;e<r.length;e++)t=r[e],a=t._getVersion,a=a(t._source),n.mutableSourceEagerHydrationData==null?n.mutableSourceEagerHydrationData=[t,a]:n.mutableSourceEagerHydrationData.push(t,a);return new fs(n)};we.render=function(e,n,t){if(!ms(n))throw Error(x(200));return hs(null,e,n,!1,t)};we.unmountComponentAtNode=function(e){if(!ms(e))throw Error(x(40));return e._reactRootContainer?(Tn(function(){hs(null,null,e,!1,function(){e._reactRootContainer=null,e[Qe]=null})}),!0):!1};we.unstable_batchedUpdates=Cl;we.unstable_renderSubtreeIntoContainer=function(e,n,t,r){if(!ms(t))throw Error(x(200));if(e==null||e._reactInternals===void 0)throw Error(x(38));return hs(e,n,t,!1,r)};we.version="18.3.1-next-f1338f8080-20240426";function nu(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(nu)}catch(e){console.error(e)}}nu(),eo.exports=we;var Pp=eo.exports,tu,Vi=Pp;tu=Vi.createRoot,Vi.hydrateRoot;function Tp(){return s.jsxs("footer",{className:"footer",children:[`
 
 `,s.jsxs("div",{className:"cols",children:[`
 `,s.jsxs("div",{className:"container flex justify-between f-wrap",children:[`
 `,s.jsxs("div",{className:"box box-logo",children:[`
 `,s.jsxs("a",{className:"logo",href:"/",title:"BateForte Materiais para Construção",children:[`
 `,s.jsx("img",{src:"/assets/img-dc6278851a6d.webp",alt:"BateForte Materiais para Construção",width:"auto",height:"auto"}),`
 `]}),` 
 `,s.jsxs("div",{className:"box-logo-socials",children:[`
 `,`
 `,s.jsxs("a",{href:"https://www.instagram.com/bateforte_/",title:"Instagram","aria-label":"Instagram",target:"_blank",rel:"noopener noreferrer",children:[`
 `,s.jsx("i",{className:"icon icon-instagram v-align-middle"}),`
 `]}),`
 `,`
 `]}),`
 `]}),`
 `,s.jsxs("div",{className:"box box-categories",children:[`
 `,s.jsxs("div",{className:"title",children:["Categorias ",s.jsx("i",{className:"icon icon-arrow-down sf-hidden"})]}),`
 `,s.jsxs("div",{className:"overflow",children:[`
 `,s.jsxs("ul",{className:"list",children:[s.jsx("li",{children:s.jsx("a",{href:"#/categoria/cimento",title:"Cimento",children:"Cimento"})}),s.jsx("li",{children:s.jsx("a",{href:"#/categoria/areia",title:"Areia",children:"Areia"})}),s.jsx("li",{children:s.jsx("a",{href:"#/categoria/ferro",title:"Ferro",children:"Ferro"})}),s.jsx("li",{children:s.jsx("a",{href:"#/categoria/eletrica",title:"Elétrica",children:"Elétrica"})}),s.jsx("li",{children:s.jsx("a",{href:"#/categoria/hidraulica",title:"Hidráulica",children:"Hidráulica"})}),s.jsx("li",{children:s.jsx("a",{href:"#/categoria/telhas",title:"Telhas",children:"Telhas"})}),s.jsx("li",{children:s.jsx("a",{href:"#/categoria/tintas",title:"Tintas",children:"Tintas"})})]}),`
 `]}),`
 `]}),`
 `,s.jsxs("div",{className:"box box-pages",children:[`
 `,s.jsxs("div",{className:"title",children:["Institucional ",s.jsx("i",{className:"icon icon-arrow-down sf-hidden"})]}),`
 `,s.jsxs("div",{className:"overflow",children:[`
 `,s.jsxs("ul",{className:"list",children:[`
 `,s.jsxs("li",{children:[`
 `,s.jsx("a",{href:"https://www.atlantanet.com.br/empresa",title:"Empresa",children:"Empresa"}),`
 `]}),`
 `,s.jsxs("li",{children:[`
 `,s.jsx("a",{href:"https://www.atlantanet.com.br/seguranca",title:"Seguranca",children:"Seguranca"}),`
 `]}),`
 `,s.jsxs("li",{children:[`
 `,s.jsx("a",{href:"https://www.atlantanet.com.br/privacidade",title:"Política de Privacidade",children:"Política de Privacidade"}),`
 `]}),`
 `,s.jsxs("li",{children:[`
 `,s.jsx("a",{href:"https://www.atlantanet.com.br/relatorio-de-transparencia",title:"Relatório de Transparência",children:"Relatório de Transparência"}),`
 `]}),`
 `,s.jsxs("li",{children:[`
 `,s.jsx("a",{href:"https://wa.me/5511974659658",target:"_blank",rel:"noopener noreferrer",title:"Fale Conosco",children:"Fale Conosco"}),`
 `]}),`
 `]}),`
 `]}),`
 `]}),`
 `,s.jsxs("div",{className:"box box-infos",children:[`
 `,s.jsxs("div",{className:"title",children:["Atendimento ",s.jsx("i",{className:"icon icon-arrow-down sf-hidden"})]}),`
 `,s.jsxs("div",{className:"overflow",children:[`
 `,s.jsxs("ul",{className:"list",children:[s.jsxs("li",{children:[`
 `,s.jsxs("a",{href:"https://api.whatsapp.com/send/?phone=5511974659658",title:"WhatsApp",target:"_blank",rel:"noopener noreferrer",children:[`
 `,s.jsx("i",{className:"icon icon-whatsapp v-align-middle"}),`
 `,s.jsx("span",{children:"(11) 97465-9658"}),`
 `]}),`
 `]}),`
 `,s.jsxs("li",{className:"hour",children:[`
 `,s.jsxs("div",{className:"flex",children:[`
 `,s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",children:s.jsx("path",{d:"M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm5.848 12.459c.202.038.202.333.001.372-1.907.361-6.045 1.111-6.547 1.111-.719 0-1.301-.582-1.301-1.301 0-.512.77-5.447 1.125-7.445.034-.192.312-.181.343.014l.985 6.238 5.394 1.011z"})}),`
 `,s.jsx("span",{children:"Horário de Atendimento:"}),`
 `]}),`
 `,s.jsxs("div",{className:"text",children:[`
 `,s.jsx("span",{children:"Segunda a Sexta 08:00 as 18:00 e Sábado das 08:00 as 13:00"}),`
 `]}),`
 `]}),`
 `,s.jsxs("li",{children:[`
 `,s.jsxs("a",{href:"https://www.google.com/maps/search/?api=1&query=Av.+Quinze+de+Novembro,+1764+-+Centro,+Itapecerica+da+Serra+-+SP,+06850-100",target:"_blank",rel:"noopener noreferrer",title:"Endereço",children:[`
 `,s.jsx("i",{className:"icon icon-place v-align-middle"}),`
 `,s.jsx("span",{children:"Av. Quinze de Novembro, 1764 - Centro, Itapecerica da Serra - SP, 06850-100"}),`
 `]}),`
 `]})]}),`
 `]}),`
 `]}),`
 
 `,s.jsxs("div",{className:"box payments-seals",children:[`
 `,s.jsxs("div",{className:"overflow",children:[` 
 `,s.jsx("div",{className:"title",children:"Formas de pagamento"}),`
 `,s.jsxs("ul",{className:"payment-list flex f-wrap",children:[`
 `,s.jsxs("li",{className:"payment-form",children:[`
 `,s.jsx("img",{className:"lazyload loaded",alt:"Cartão Visa - Vindi",src:"/assets/img-4fcfba1d7119.webp","data-ll-status":"loaded"}),`
 `]}),`
 `,s.jsxs("li",{className:"payment-form",children:[`
 `,s.jsx("img",{className:"lazyload loaded",alt:"Cartão MasterCard - Vindi",src:"/assets/img-78fa4608ee50.webp","data-ll-status":"loaded"}),`
 `]}),`
 `,s.jsxs("li",{className:"payment-form",children:[`
 `,s.jsx("img",{className:"lazyload loaded",alt:"Cartão Elo - Vindi",src:"/assets/img-b517fb144ccd.webp","data-ll-status":"loaded"}),`
 `]}),`
 
 `,s.jsxs("li",{className:"payment-form",children:[`
 `,s.jsx("img",{className:"lazyload loaded",alt:"pix",src:"/assets/img-80e133f18f9d.webp","data-ll-status":"loaded"}),`
 `]}),`
 
`]})," "]}),`
 
 `,s.jsxs("div",{className:"overflow",children:[` 
 `,s.jsx("div",{className:"title",children:"Selos de Segurança"}),`
 `,s.jsxs("ul",{className:"security-seals flex f-wrap",children:[` 
 
 `,s.jsxs("li",{className:"google-seal",children:[`
 `,s.jsxs("a",{href:"#",target:"_blank",rel:"noreferrer noopener",title:"Google Safe Browsing",children:[`
 `,s.jsx("span",{className:"icon icon-shield vertical-align"}),`
 `,s.jsx("span",{className:"icon icon-google vertical-align"}),`
 `]}),`
 `]}),`
 
 
 `,s.jsxs("li",{className:"loja-protegida-seal",children:[`
 `,s.jsxs("center",{children:[`
 `,s.jsxs("a",{href:"#",target:"_blank",rel:"noopener",children:[`
 `,s.jsx("img",{src:"/assets/img-2077ee59210f.gif",alt:"Loja Protegida",title:"Loja Protegida",border:"0"}),`
 `]}),`
 `]}),`
 `]}),`
 
 
 
 
 
 
 
 
 
 
 
 `]}),`
 `]}),`
 `]}),`
 `]}),`
 `]}),`
 
 
 
 `,s.jsxs("div",{className:"copy",children:[`
 `,s.jsxs("div",{className:"container flex align-center flex-column",children:[`
 
 
 `,s.jsx("div",{className:"text",children:`BateForte Materiais para Construção - © Todos os direitos reservados.
CNPJ: 32.603.413/0001-57`}),`
 
 `,s.jsxs("div",{className:"tray",children:[`
 `,s.jsxs("div",{className:"credits-partner sama-partner",children:[`
 `,s.jsxs("span",{children:[`Desenvolvimento 
 `,s.jsxs("a",{href:"https://www.instagram.com/dunamis_mkt/",rel:"noopener noreferrer",target:"_blank",children:[`
 `,s.jsx("img",{src:"/assets/logo-dunamis.png",width:"42",height:"42",alt:"Dunamis",className:"bf-logo-dunamis"}),`
 `]}),`
 `]}),`
 `]}),`
 
 `,`
 `]}),`
 `]}),`
 `]}),`
`]})}const S=e=>n=>{n&&(n.style.cssText=e)};function bp(){return s.jsxs("header",{className:"header",children:[`
 `,s.jsxs("div",{className:"bg header-desktop",children:[`
 `,s.jsxs("div",{className:"line flex align-center justify-between container",children:[`
 `,s.jsx("div",{className:"header-menu sf-hidden","data-toggle":"overlay-shadow","data-target":"#menu-mobile",children:`
 
 
 
 `}),`
 `,s.jsxs("a",{className:"logo",href:"/",title:"BateForte Materiais para Construção",children:[`
 `,s.jsx("img",{src:"/assets/img-fb172cf24605.webp",alt:"BateForte Materiais para Construção",width:"222",height:"36"}),`
 
 `,s.jsx("h1",{className:"title-store sf-hidden",children:"BateForte Materiais para Construção"}),`
 `]}),` 
 `,s.jsxs("div",{className:"search-move",children:[`
 `,s.jsxs("form",{className:"header-search-wrapper",action:"/loja/busca.php?loja=1018104","data-search":"suggestion",children:[`
 
 `,s.jsx("input",{className:"input-search",placeholder:"O que deseja procurar?",spellCheck:"false",autoComplete:"off","data-input":"suggestion",type:"text",name:"palavra_busca",defaultValue:""}),`
 `,s.jsxs("button",{className:"button-search","aria-label":"Buscar",children:[`
 `,s.jsx("i",{className:"icon icon-search"}),`
 `]}),`
 `,s.jsx("div",{className:"suggestion is-hidden sf-hidden","data-container":"suggestion"}),`
`]})," "]}),`
 `,s.jsxs("div",{className:"header-right",children:[`
 `,s.jsxs("div",{className:"contact flex align-center",children:[`
 `,s.jsxs("i",{className:"contact-icon icon",children:[`
 `,s.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",className:"svg-icon",viewBox:"0 0 1024 1024",version:"1.1",fill:"currentColor",children:[s.jsx("path",{d:"M512 947.106726c-239.915162 0-435.106726-195.191564-435.106726-435.106726S272.084838 76.893274 512 76.893274s435.106726 195.191564 435.106726 435.106726S751.915162 947.106726 512 947.106726zM512 111.019513c-221.1027 0-400.980487 179.877787-400.980487 400.980487s179.877787 400.980487 400.980487 400.980487 400.980487-179.877787 400.980487-400.980487S733.1027 111.019513 512 111.019513z"}),s.jsx("path",{d:"M481.170854 613.473089l-1.192152-15.524578c-3.577478-32.265868 7.178493-67.549465 37.060057-103.417371 26.888394-31.682583 41.829687-54.993498 41.829687-81.858356 0-30.513968-19.126616-50.808176-56.769958-51.392484-21.51092 0-45.430702 7.153934-60.370972 18.49319l-14.332427-37.619806c19.709901-14.356986 53.776787-23.944342 85.459371-23.944342 68.74264 0 99.816357 42.437531 99.816357 87.892793 0 40.636512-22.703071 69.934792-51.392484 104.001679-26.304086 31.049157-35.867906 57.378825-34.066887 87.843674l0.584308 15.524578L481.170854 613.472066zM468.030579 697.18056c0-22.143323 14.941294-37.667901 35.867906-37.667901 20.902052 0 35.259038 15.524578 35.259038 37.667901 0 20.926612-13.748119 37.035498-35.867906 37.035498C482.363006 734.216058 468.030579 718.107171 468.030579 697.18056z"})]}),`
 `]}),`
 `,s.jsxs("div",{className:"contact-text",children:[`
 `,s.jsx("span",{children:"Precisa de Ajuda?"}),`
 `,s.jsx("strong",{children:"Atendimento"}),`
 `]}),`
 `,s.jsxs("div",{className:"header-wrapper flex align-center",children:[`
 `,s.jsxs("div",{className:"header-wrapper__content flex flex-column",children:[`
 `,s.jsxs("div",{className:"header-wrapper__item header-wrapper__item--whatsapp",children:[`
 `,s.jsxs("a",{href:"https://api.whatsapp.com/send?phone=5511974659658",title:"WhatsApp: (11) 97465-9658",target:"_blank",children:[`
 `,s.jsxs("span",{children:[s.jsx("i",{className:"icon icon-whatsapp v-align-middle"}),"Whatsapp:"]}),`
 (11) 97465-9658
 `]}),`
 `]}),`
 
 
 
 `,`
 `,`
 `]}),`
 `]}),`
 `]}),`
 
 `,`
 
 `,s.jsxs("a",{className:"cart-toggle",href:"javascript:void(0)",title:"Carrinho",children:[`
 `,s.jsxs("i",{className:"icon v-align-middle",children:[`
 `,s.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",role:"presentation","aria-hidden":"true",viewBox:"0 0 17 20",fill:"currentColor",children:[`
 `,s.jsx("path",{d:"M0 20V4.995l1 .006v.015l4-.002V4c0-2.484 1.274-4 3.5-4C10.518 0 12 1.48 12 4v1.012l5-.003v.985H1V19h15V6.005h1V20H0zM11 4.49C11 2.267 10.507 1 8.5 1 6.5 1 6 2.27 6 4.49V5l5-.002V4.49z",fill:"currentColor"}),`
 `]}),`
 `]}),`
 `,s.jsx("span",{className:"cart-quantity","data-cart":"amount",children:"0"}),`
 `]}),`
 `]}),`
 `]}),`
 
`,s.jsxs("nav",{className:"nav",children:[`
 `,s.jsxs("div",{className:"container",children:[`
 `,s.jsxs("ul",{className:"list flex justify-between",children:[`
 
 `,s.jsxs("li",{className:"first-level sub all-categories",children:[`
 `,s.jsxs("span",{role:"button",title:"Todas Categorias",children:[`
 `,s.jsxs("div",{className:"category-image",children:[`
 `,s.jsx("img",{className:"lazyload loaded",alt:"Todos os Departamentos",src:"/assets/img-a0da2ec22bf6.webp","data-ll-status":"loaded"}),`
 `]}),`
 `,s.jsx("div",{className:"name",children:`
 Todas Categorias
 `}),`
 `]}),`
 `,s.jsxs("ul",{className:"sub-list second-level",children:[` 
 `,s.jsxs("ul",{className:"wrapper-categories",children:[`
 
 `,s.jsxs("li",{className:"sub",children:[`
 `,s.jsxs("a",{href:"#/categoria/cimento",title:"Cimento",children:[`
 `,s.jsx("div",{className:"category-image",children:s.jsx("img",{src:"/assets/bf-icon-cimento.svg",alt:"Cimento",width:"20",height:"20"})}),`
 Cimento
 `]}),`
 `]}),`
 
 `,s.jsxs("li",{className:"sub",children:[`
 `,s.jsxs("a",{href:"#/categoria/areia",title:"Areia",children:[`
 `,s.jsx("div",{className:"category-image",children:s.jsx("img",{src:"/assets/bf-icon-areia.svg",alt:"Areia",width:"20",height:"20"})}),`
 Areia
 `]}),`
 `]}),`
 
 `,s.jsxs("li",{className:"sub",children:[`
 `,s.jsxs("a",{href:"#/categoria/ferro",title:"Ferro",children:[`
 `,s.jsx("div",{className:"category-image",children:s.jsx("img",{src:"/assets/bf-icon-ferro.svg",alt:"Ferro",width:"20",height:"20"})}),`
 Ferro
 `]}),`
 `]}),`
 
 `,s.jsxs("li",{className:"sub",children:[`
 `,s.jsxs("a",{href:"#/categoria/eletrica",title:"Elétrica",children:[`
 `,s.jsx("div",{className:"category-image",children:s.jsx("img",{src:"/assets/bf-icon-eletrica.svg",alt:"Elétrica",width:"20",height:"20"})}),`
 Elétrica
 `]}),`
 `]}),`
 
 `,s.jsxs("li",{className:"sub",children:[`
 `,s.jsxs("a",{href:"#/categoria/hidraulica",title:"Hidráulica",children:[`
 `,s.jsx("div",{className:"category-image",children:s.jsx("img",{src:"/assets/bf-icon-hidraulica.svg",alt:"Hidráulica",width:"20",height:"20"})}),`
 Hidráulica
 `]}),`
 `]}),`
 
 `,s.jsxs("li",{className:"sub",children:[`
 `,s.jsxs("a",{href:"#/categoria/telhas",title:"Telhas",children:[`
 `,s.jsx("div",{className:"category-image",children:s.jsx("img",{src:"/assets/bf-icon-telhas.svg",alt:"Telhas",width:"20",height:"20"})}),`
 Telhas
 `]}),`
 `]}),`
 
 `,s.jsxs("li",{className:"sub",children:[`
 `,s.jsxs("a",{href:"#/categoria/tintas",title:"Tintas",children:[`
 `,s.jsx("div",{className:"category-image",children:s.jsx("img",{src:"/assets/bf-icon-tintas.svg",alt:"Tintas",width:"20",height:"20"})}),`
 Tintas
 `]}),`
 `]}),`
 
 `]}),`
 `]}),` 
 
 `]}),`
 
 `,s.jsxs("li",{className:"first-level",children:[`
 `,s.jsxs("a",{href:"#/categoria/cimento",title:"Cimento",children:[`
 `,s.jsx("div",{className:"category-image",children:s.jsx("img",{alt:"Cimento",src:"/assets/bf-icon-cimento.svg",width:"20",height:"20"})}),`
 `,s.jsx("div",{className:"name",children:`
 Cimento
 `}),`
 `]}),`
 `]}),`
 
 `,s.jsxs("li",{className:"first-level",children:[`
 `,s.jsxs("a",{href:"#/categoria/areia",title:"Areia",children:[`
 `,s.jsx("div",{className:"category-image",children:s.jsx("img",{alt:"Areia",src:"/assets/bf-icon-areia.svg",width:"20",height:"20"})}),`
 `,s.jsx("div",{className:"name",children:`
 Areia
 `}),`
 `]}),`
 `]}),`
 
 `,s.jsxs("li",{className:"first-level",children:[`
 `,s.jsxs("a",{href:"#/categoria/ferro",title:"Ferro",children:[`
 `,s.jsx("div",{className:"category-image",children:s.jsx("img",{alt:"Ferro",src:"/assets/bf-icon-ferro.svg",width:"20",height:"20"})}),`
 `,s.jsx("div",{className:"name",children:`
 Ferro
 `}),`
 `]}),`
 `]}),`
 
 `,s.jsxs("li",{className:"first-level",children:[`
 `,s.jsxs("a",{href:"#/categoria/eletrica",title:"Elétrica",children:[`
 `,s.jsx("div",{className:"category-image",children:s.jsx("img",{alt:"Elétrica",src:"/assets/bf-icon-eletrica.svg",width:"20",height:"20"})}),`
 `,s.jsx("div",{className:"name",children:`
 Elétrica
 `}),`
 `]}),`
 `]}),`
 
 `,s.jsxs("li",{className:"first-level",children:[`
 `,s.jsxs("a",{href:"#/categoria/hidraulica",title:"Hidráulica",children:[`
 `,s.jsx("div",{className:"category-image",children:s.jsx("img",{alt:"Hidráulica",src:"/assets/bf-icon-hidraulica.svg",width:"20",height:"20"})}),`
 `,s.jsx("div",{className:"name",children:`
 Hidráulica
 `}),`
 `]}),`
 `]}),`
 
 `,`
 
 `,s.jsxs("li",{className:"first-level",children:[`
 `,s.jsxs("a",{href:"#/categoria/telhas",title:"Telhas",children:[`
 `,s.jsx("div",{className:"category-image",children:s.jsx("img",{alt:"Telhas",src:"/assets/bf-icon-telhas.svg",width:"20",height:"20"})}),`
 `,s.jsx("div",{className:"name",children:`
 Telhas
 `}),`
 `]}),`
 `]}),`
 
 `,s.jsxs("li",{className:"first-level",children:[`
 `,s.jsxs("a",{href:"#/categoria/tintas",title:"Tintas",children:[`
 `,s.jsx("div",{className:"category-image",children:s.jsx("img",{alt:"Tintas",src:"/assets/bf-icon-tintas.svg",width:"20",height:"20"})}),`
 `,s.jsx("div",{className:"name",children:`
 Tintas
 `}),`
 `]}),`
 `]}),`
 
 `,s.jsxs("li",{className:"first-level categoria-offer",children:[`
 `,s.jsxs("a",{href:"https://www.atlantanet.com.br/cimento",title:"Ofertas Especiais",children:[`
 `,s.jsxs("div",{className:"category-image",children:[`
 `,s.jsx("img",{className:"lazyload loaded",alt:"Todas Categorias",src:"/assets/img-4715e72ca586.webp","data-ll-status":"loaded"}),`
 `]}),`
 `,s.jsx("div",{className:"name",children:`
 Ofertas Especiais
 `}),`
 `]}),`
 `,s.jsxs("ul",{className:"sub-list second-level",children:[`
 `,s.jsxs("div",{className:"categoria-offer__products active-slide","data-countdown":"12/05/2025 00:00:00",children:[`
 
 `,s.jsxs("div",{className:"section-showcase show",children:[`
 `,s.jsxs("div",{className:"container",children:[`
 `,s.jsxs("div",{className:"list-product swiper-container swiper-container-initialized swiper-container-horizontal swiper-container-pointer-events",children:[`
 `,s.jsx("div",{className:"list-product__items flex swiper-wrapper","aria-live":"polite"}),`
 `,s.jsxs("div",{className:"prev swiper-button-disabled",tabIndex:"-1",role:"button","aria-label":"Previous slide","aria-controls":"swiper-wrapper-5fb9360d3a4a801e","aria-disabled":"true",children:[`
 `,s.jsx("i",{className:"icon icon-arrow-left"}),`
 `]}),`
 `,s.jsxs("div",{className:"next",tabIndex:"0",role:"button","aria-label":"Next slide","aria-controls":"swiper-wrapper-5fb9360d3a4a801e","aria-disabled":"false",children:[`
 `,s.jsx("i",{className:"icon icon-arrow-right"}),`
 `]}),` 
 `,s.jsx("span",{className:"swiper-notification sf-hidden","aria-live":"assertive","aria-atomic":"true"})]}),`
 
 `]}),`
 `]}),`
 `]}),`
 `,s.jsxs("div",{className:"categoria-offer__descriptions",children:[`
 `,s.jsxs("div",{className:"categoria-offer__title",children:[`
 `,s.jsx("strong",{children:"Ofertas Imperdíveis!"}),`
 `,s.jsx("span",{children:"Corre que já está acabandooo!!"}),`
 `]}),`
 `,s.jsx("ul",{className:"categoria-offer__countdown"}),`
 `,s.jsx("a",{href:"https://www.atlantanet.com.br/cimento",className:"categoria-offer__button",children:"Ver todos os produtos"}),`
 `]}),`
 `]}),`
 `]}),`
 
 `]}),`
 `]}),`
`]})," "]}),`
 
 `,s.jsx("div",{className:"bg header-mobile search-closed",children:s.jsxs("div",{className:"bf-header-mobile",children:[s.jsxs("button",{type:"button",className:"bf-burger","aria-label":"Abrir menu","data-toggle":"overlay-shadow","data-target":"#menu-mobile",children:[s.jsx("span",{}),s.jsx("span",{}),s.jsx("span",{})]}),s.jsx("a",{className:"bf-logo-mobile",href:"/",title:"BateForte Materiais para Construção",children:s.jsx("img",{src:"/assets/img-fb172cf24605.webp",alt:"BateForte Materiais para Construção",width:"178",height:"29"})}),s.jsxs("a",{className:"cart-toggle",href:"javascript:void(0)",title:"Carrinho",children:[s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",role:"presentation","aria-hidden":"true",viewBox:"0 0 17 20",fill:"currentColor",children:s.jsx("path",{d:"M0 20V4.995l1 .006v.015l4-.002V4c0-2.484 1.274-4 3.5-4C10.518 0 12 1.48 12 4v1.012l5-.003v.985H1V19h15V6.005h1V20H0zM11 4.49C11 2.267 10.507 1 8.5 1 6.5 1 6 2.27 6 4.49V5l5-.002V4.49z",fill:"currentColor"})}),s.jsx("span",{className:"cart-quantity","data-cart":"amount",children:"0"})]})]})}),`
`]})}function Lp(){return s.jsxs("div",{className:"banner-home","data-settings":'{"stopOnHover":false,"timer":null,"isMobile":false,"speed":null,"isLoop":true,"isAutoplay":true}',children:[`
 
 `,s.jsxs("div",{className:"item",children:[`
 
 
 
 `,s.jsxs("span",{className:"item-image","aria-label":"Banner",ref:S("--padding:55.121%"),children:[`
 `,s.jsxs("picture",{children:[s.jsx("source",{media:"(max-width: 768px)",srcSet:"/assets/img-hero-bf-768.webp",width:"768",height:"423"}),s.jsx("img",{src:"/assets/img-hero-bf.webp",alt:"BateForte — tudo que sua construção precisa está aqui",width:"1689",height:"931",fetchpriority:"high"})]}),`
 `]}),`
 `]}),`
 `]})}function Mp(){return s.jsxs("div",{className:"banners-grid banners-showcase group-native-banners",children:[`
 `,s.jsxs("div",{className:"container flex f-wrap justify-between",children:[`
 `,s.jsxs("div",{className:"item",children:[`
 
 
 
 `,s.jsxs("a",{href:"https://www.atlantanet.com.br/loja/clic.php?loja=1018104&banner=188",className:"item-image","aria-label":"Banner",ref:S("--padding:47.244094488189%"),children:[`
 `,s.jsx("img",{loading:"lazy",src:"/assets/img-3c1edb97cf21.webp",alt:"Banner",width:"635",height:"300"}),`
 `]}),`
 `]}),`
 `,s.jsxs("div",{className:"item",children:[`
 
 
 
 `,s.jsxs("a",{href:"https://www.atlantanet.com.br/loja/clic.php?loja=1018104&banner=190",className:"item-image","aria-label":"Banner",ref:S("--padding:47.244094488189%"),children:[`
 `,s.jsx("img",{loading:"lazy",src:"/assets/img-c5ecad89b44e.webp",alt:"Banner",width:"635",height:"300"}),`
 `]}),`
 `]}),`
 `]}),`
 `]})}function Ip(){return s.jsxs("div",{className:"banners-grid banners-showcase group-native-banners",children:[`
 `,s.jsxs("div",{className:"container flex f-wrap justify-between",children:[`
 `,s.jsxs("div",{className:"item",children:[`
 
 
 
 `,s.jsxs("a",{href:"https://www.atlantanet.com.br/loja/clic.php?loja=1018104&banner=192",className:"item-image","aria-label":"Banner",ref:S("--padding:15.625%"),children:[`
 `,s.jsx("img",{loading:"lazy",src:"/assets/img-ab0d38a2f174.webp",alt:"Banner",width:"1920",height:"300"}),`
 `]}),`
 `]}),`
 `]}),`
 `]})}function Rp(){return null}function Op(){return s.jsx("div",{className:"banners-grid banners-showcase md-none group-native-banners sf-hidden",children:`
 
 `})}function Fp(){return s.jsxs("div",{className:"brands-custom active-slide",children:[`
 `,s.jsxs("div",{className:"brands-custom__title section-header",children:[`
 `,s.jsx("h2",{className:"title-section",children:`Escolha pela Marca
 `})]}),`
 `,s.jsxs("div",{className:"container swiper-container swiper-container-initialized swiper-container-horizontal swiper-container-pointer-events",children:[`
 `,s.jsxs("div",{className:"brands-custom__content swiper-wrapper",id:"swiper-wrapper-f8de9e1099f082abe","aria-live":"off",ref:S("transition-duration:0ms;transform:translate3d(0px,0px,0px)"),children:[`
 
 
 
 
 `,s.jsxs("div",{className:"item swiper-slide swiper-slide-active",role:"group","aria-label":"1 / 8",ref:S("width:151.667px;margin-right:60px"),children:[`
 `,s.jsxs("a",{href:"https://www.atlantanet.com.br/brasilit","aria-label":"Brasilit",children:[`
 `,s.jsxs("div",{className:"brands-custom__image",children:[`
 `,s.jsx("img",{loading:"lazy",className:"lazyload loaded",alt:"Brasilit",src:"/assets/img-feae831e8be8.webp","data-ll-status":"loaded"}),`
 `]}),`
 `]}),`
 `]}),`
 
 
 
 
 `,s.jsxs("div",{className:"item swiper-slide swiper-slide-next",role:"group","aria-label":"2 / 8",ref:S("width:151.667px;margin-right:60px"),children:[`
 `,s.jsxs("a",{href:"https://www.atlantanet.com.br/fortlev","aria-label":"Fortlev",children:[`
 `,s.jsxs("div",{className:"brands-custom__image",children:[`
 `,s.jsx("img",{loading:"lazy",className:"lazyload loaded",alt:"Fortlev",src:"/assets/img-7acd537651c2.webp","data-ll-status":"loaded"}),`
 `]}),`
 `]}),`
 `]}),`
 
 
 
 
 `,s.jsxs("div",{className:"item swiper-slide",role:"group","aria-label":"3 / 8",ref:S("width:151.667px;margin-right:60px"),children:[`
 `,s.jsxs("a",{href:"https://www.atlantanet.com.br/csn","aria-label":"CSN",children:[`
 `,s.jsxs("div",{className:"brands-custom__image",children:[`
 `,s.jsx("img",{loading:"lazy",className:"lazyload loaded",alt:"CSN",src:"/assets/img-75c30ec81aa4.webp","data-ll-status":"loaded"}),`
 `]}),`
 `]}),`
 `]}),`
 
 
 
 
 `,s.jsxs("div",{className:"item swiper-slide",role:"group","aria-label":"4 / 8",ref:S("width:151.667px;margin-right:60px"),children:[`
 `,s.jsxs("a",{href:"https://www.atlantanet.com.br/quartzolit","aria-label":"Quartzolit",children:[`
 `,s.jsxs("div",{className:"brands-custom__image",children:[`
 `,s.jsx("img",{loading:"lazy",className:"lazyload loaded",alt:"Quartzolit",src:"/assets/img-b9a7051c7a86.webp","data-ll-status":"loaded"}),`
 `]}),`
 `]}),`
 `]}),`
 
 
 
 
 `,s.jsxs("div",{className:"item swiper-slide",role:"group","aria-label":"5 / 8",ref:S("width:151.667px;margin-right:60px"),children:[`
 `,s.jsxs("a",{href:"https://www.atlantanet.com.br/suvinil","aria-label":"Suvinil",children:[`
 `,s.jsxs("div",{className:"brands-custom__image",children:[`
 `,s.jsx("img",{loading:"lazy",className:"lazyload loaded",alt:"Suvinil",src:"/assets/img-7b61390d7b7d.webp","data-ll-status":"loaded"}),`
 `]}),`
 `]}),`
 `]}),`
 
 
 
 
 `,s.jsxs("div",{className:"item swiper-slide",role:"group","aria-label":"6 / 8",ref:S("width:151.667px;margin-right:60px"),children:[`
 `,s.jsxs("a",{href:"https://www.atlantanet.com.br/tigre","aria-label":"Tigre",children:[`
 `,s.jsxs("div",{className:"brands-custom__image",children:[`
 `,s.jsx("img",{loading:"lazy",className:"lazyload loaded",alt:"Tigre",src:"/assets/img-d6da4ebad948.webp","data-ll-status":"loaded"}),`
 `]}),`
 `]}),`
 `]}),`
 
 
 
 
 `,s.jsxs("div",{className:"item swiper-slide",role:"group","aria-label":"7 / 8",ref:S("width:151.667px;margin-right:60px"),children:[`
 `,s.jsxs("a",{href:"https://www.atlantanet.com.br/vedacit","aria-label":"Vedacit",children:[`
 `,s.jsxs("div",{className:"brands-custom__image",children:[`
 `,s.jsx("img",{loading:"lazy",className:"lazyload loaded",alt:"Vedacit",src:"/assets/img-12ea9f63e4e9.webp","data-ll-status":"loaded"}),`
 `]}),`
 `]}),`
 `]}),`
 
 
 
 
 `,s.jsxs("div",{className:"item swiper-slide",role:"group","aria-label":"8 / 8",ref:S("width:151.667px;margin-right:60px"),children:[`
 `,s.jsxs("a",{href:"https://www.atlantanet.com.br/votorantim","aria-label":"Votorantim",children:[`
 `,s.jsxs("div",{className:"brands-custom__image",children:[`
 `,s.jsx("img",{loading:"lazy",className:"lazyload loaded",alt:"Votorantim",src:"/assets/img-9892a82c262d.webp","data-ll-status":"loaded"}),`
 `]}),`
 `]}),`
 `]}),`
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 `]}),`
 `,s.jsxs("div",{className:"prev swiper-button-disabled",tabIndex:"-1",role:"button","aria-label":"Previous slide","aria-controls":"swiper-wrapper-f8de9e1099f082abe","aria-disabled":"true",children:[`
 `,s.jsx("i",{className:"icon icon-arrow-left"}),`
 `]}),`
 `,s.jsxs("div",{className:"next",tabIndex:"0",role:"button","aria-label":"Next slide","aria-controls":"swiper-wrapper-f8de9e1099f082abe","aria-disabled":"false",children:[`
 `,s.jsx("i",{className:"icon icon-arrow-right"}),`
 `]}),`
 `,s.jsx("div",{className:"dots swiper-pagination-clickable swiper-pagination-bullets sf-hidden"}),`
 `,s.jsx("span",{className:"swiper-notification sf-hidden","aria-live":"assertive","aria-atomic":"true"})]}),`
`]})}function Ap(){return s.jsxs("div",{className:"buy-sizes not-slide-drag active-slide",children:[`
 `,s.jsxs("div",{className:"buy-sizes__title section-header",children:[`
 `,s.jsx("h2",{className:"title-section",children:"Navegue por Categorias"}),`
 `]}),`
 `,s.jsxs("div",{className:"container swiper-container swiper-container-initialized swiper-container-horizontal swiper-container-pointer-events",children:[`
 `,s.jsxs("div",{className:"buy-sizes__content swiper-wrapper",id:"swiper-wrapper-3dc22a765cde9e3f","aria-live":"off",children:[`
 
 
 
 
 `,s.jsxs("div",{className:"item swiper-slide swiper-slide-active",role:"group","aria-label":"1 / 6",ref:S("width:190px;margin-right:30px"),children:[`
 `,s.jsxs("a",{href:"https://www.atlantanet.com.br/cimento",children:[`
 `,s.jsxs("div",{className:"buy-sizes__image",children:[`
 `,s.jsx("img",{loading:"lazy",className:"lazyload loaded",alt:"Compre por Categorias - Cimentos",src:"/assets/img-04964a6b18a0.webp","data-ll-status":"loaded"}),`
 `]}),`
 `,s.jsx("div",{className:"buy-sizes__name",children:`
 Cimentos
 `}),`
 `]}),`
 `]}),`
 
 
 
 
 
 `,s.jsxs("div",{className:"item swiper-slide swiper-slide-next",role:"group","aria-label":"2 / 6",ref:S("width:190px;margin-right:30px"),children:[`
 `,s.jsxs("a",{href:"https://www.atlantanet.com.br/eletrica",children:[`
 `,s.jsxs("div",{className:"buy-sizes__image",children:[`
 `,s.jsx("img",{loading:"lazy",className:"lazyload loaded",alt:"Compre por Categorias - Elétrica",src:"/assets/img-e1cea5e6bf30.webp","data-ll-status":"loaded"}),`
 `]}),`
 `,s.jsx("div",{className:"buy-sizes__name",children:`
 Elétrica
 `}),`
 `]}),`
 `]}),`
 
 
 
 
 
 `,s.jsxs("div",{className:"item swiper-slide",role:"group","aria-label":"3 / 6",ref:S("width:190px;margin-right:30px"),children:[`
 `,s.jsxs("a",{href:"https://www.atlantanet.com.br/piso-e-revestimos",children:[`
 `,s.jsxs("div",{className:"buy-sizes__image",children:[`
 `,s.jsx("img",{loading:"lazy",className:"lazyload loaded",alt:"Compre por Categorias - Pisos",src:"/assets/img-794b40ba5a64.webp","data-ll-status":"loaded"}),`
 `]}),`
 `,s.jsx("div",{className:"buy-sizes__name",children:`
 Pisos
 `}),`
 `]}),`
 `]}),`
 
 
 
 
 
 `,s.jsxs("div",{className:"item swiper-slide",role:"group","aria-label":"4 / 6",ref:S("width:190px;margin-right:30px"),children:[`
 `,s.jsxs("a",{href:"https://www.atlantanet.com.br/telha",children:[`
 `,s.jsxs("div",{className:"buy-sizes__image",children:[`
 `,s.jsx("img",{loading:"lazy",className:"lazyload loaded",alt:"Compre por Categorias - Telhas",src:"/assets/img-1df34a704890.webp","data-ll-status":"loaded"}),`
 `]}),`
 `,s.jsx("div",{className:"buy-sizes__name",children:`
 Telhas
 `}),`
 `]}),`
 `]}),`
 
 
 
 
 
 `,s.jsxs("div",{className:"item swiper-slide",role:"group","aria-label":"5 / 6",ref:S("width:190px;margin-right:30px"),children:[`
 `,s.jsxs("a",{href:"https://www.atlantanet.com.br/tintas-eacessorios",children:[`
 `,s.jsxs("div",{className:"buy-sizes__image",children:[`
 `,s.jsx("img",{loading:"lazy",className:"lazyload loaded",alt:"Compre por Categorias - Tinta",src:"/assets/img-b8f9cd5052fe.webp","data-ll-status":"loaded"}),`
 `]}),`
 `,s.jsx("div",{className:"buy-sizes__name",children:`
 Tinta
 `}),`
 `]}),`
 `]}),`
 
 
 
 
 
 `,s.jsxs("div",{className:"item swiper-slide",role:"group","aria-label":"6 / 6",ref:S("width:190px;margin-right:30px"),children:[`
 `,s.jsxs("a",{href:"https://www.atlantanet.com.br/ferramentas",children:[`
 `,s.jsxs("div",{className:"buy-sizes__image",children:[`
 `,s.jsx("img",{loading:"lazy",className:"lazyload loaded",alt:"Compre por Categorias - Ferramentas",src:"/assets/img-79da79c22f83.webp","data-ll-status":"loaded"}),`
 `]}),`
 `,s.jsx("div",{className:"buy-sizes__name",children:`
 Ferramentas
 `}),`
 `]}),`
 `]}),`
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 `]}),`
 `,s.jsx("div",{className:"prev swiper-button-disabled sf-hidden",tabIndex:"-1",role:"button","aria-label":"Previous slide","aria-controls":"swiper-wrapper-3dc22a765cde9e3f","aria-disabled":"true",children:`
 
 `}),`
 `,s.jsx("div",{className:"next swiper-button-disabled sf-hidden",tabIndex:"-1",role:"button","aria-label":"Next slide","aria-controls":"swiper-wrapper-3dc22a765cde9e3f","aria-disabled":"true",children:`
 
 `}),`
 `,s.jsx("div",{className:"dots swiper-pagination-clickable swiper-pagination-bullets sf-hidden"}),`
 `,s.jsx("span",{className:"swiper-notification sf-hidden","aria-live":"assertive","aria-atomic":"true"})]}),`
`]})}function Dp(){return s.jsxs("div",{className:"floating-whatsapp on-right",children:[`
 `,s.jsxs("a",{href:"https://wa.me/5511974659658?text=Estou%20visitando%20sua%20loja%20tenho%20uma%20d%C3%BAvida.%20Poderia%20me%20ajudar%3F",target:"_blank",rel:"noopener noreferrer","data-test":"dúvida",children:[`
 `,s.jsx("i",{className:"icon icon-whatsapp"}),`
 `]}),`
 `]})}function Bp(){return s.jsxs("div",{className:"template-instagram not-slide-drag active-slide",children:[`
 `,s.jsxs("div",{className:"section-header",children:[`
 `,s.jsxs("h2",{className:"title-section",children:[`
 `,s.jsx("a",{href:"https://www.instagram.com/bateforte_/",target:"_blank",rel:"noopener noreferrer",children:`
 Siga-nos no Instagram @bateforte_
 `}),`
 `]}),`
 `]}),`
 
 
 `,s.jsxs("div",{className:"container swiper-container swiper-container-initialized swiper-container-horizontal swiper-container-pointer-events",children:[`
 `,s.jsxs("div",{className:"swiper-wrapper",id:"instafeed","aria-live":"off",children:[`
 
 
 `,s.jsxs("div",{className:"item swiper-slide swiper-slide-active",role:"group","aria-label":"1 / 4",ref:S("width:303.75px;margin-right:25px"),children:[`
 `,s.jsxs("a",{href:"https://www.instagram.com/bateforte_/",target:"_blank",rel:"noopener noreferrer",children:[`
 `,s.jsxs("div",{children:[`
 `,s.jsx("img",{loading:"lazy",className:"lazyload loaded",alt:"Postagem do Instagram",src:"/assets/img-a33168fee286.webp","data-ll-status":"loaded"}),`
 `]}),`
 `]}),`
 `]}),`
 
 
 `,s.jsxs("div",{className:"item swiper-slide swiper-slide-next",role:"group","aria-label":"2 / 4",ref:S("width:303.75px;margin-right:25px"),children:[`
 `,s.jsxs("a",{href:"https://www.instagram.com/bateforte_/",target:"_blank",rel:"noopener noreferrer",children:[`
 `,s.jsxs("div",{children:[`
 `,s.jsx("img",{loading:"lazy",className:"lazyload loaded",alt:"Postagem do Instagram",src:"/assets/img-57373056cbc2.webp","data-ll-status":"loaded"}),`
 `]}),`
 `]}),`
 `]}),`
 
 
 `,s.jsxs("div",{className:"item swiper-slide",role:"group","aria-label":"3 / 4",ref:S("width:303.75px;margin-right:25px"),children:[`
 `,s.jsxs("a",{href:"https://www.instagram.com/bateforte_/",target:"_blank",rel:"noopener noreferrer",children:[`
 `,s.jsxs("div",{children:[`
 `,s.jsx("img",{loading:"lazy",className:"lazyload loaded",alt:"Postagem do Instagram",src:"/assets/img-734b73c0449b.webp","data-ll-status":"loaded"}),`
 `]}),`
 `]}),`
 `]}),`
 
 
 `,s.jsxs("div",{className:"item swiper-slide",role:"group","aria-label":"4 / 4",ref:S("width:303.75px;margin-right:25px"),children:[`
 `,s.jsxs("a",{href:"https://www.instagram.com/bateforte_/",target:"_blank",rel:"noopener noreferrer",children:[`
 `,s.jsxs("div",{children:[`
 `,s.jsx("img",{loading:"lazy",className:"lazyload loaded",alt:"Postagem do Instagram",src:"/assets/img-d6690144e70d.webp","data-ll-status":"loaded"}),`
 `]}),`
 `]}),`
 `]}),`
 
 
 
 
 
 
 
 
 `]}),`
 `,s.jsx("div",{className:"prev swiper-button-disabled sf-hidden",tabIndex:"-1",role:"button","aria-label":"Previous slide","aria-controls":"instafeed","aria-disabled":"true",children:`
 
 `}),`
 `,s.jsx("div",{className:"next swiper-button-disabled sf-hidden",tabIndex:"-1",role:"button","aria-label":"Next slide","aria-controls":"instafeed","aria-disabled":"true",children:`
 
 `}),`
 `,s.jsx("div",{className:"dots swiper-pagination-clickable swiper-pagination-bullets sf-hidden"}),`
 `,s.jsx("span",{className:"swiper-notification sf-hidden","aria-live":"assertive","aria-atomic":"true"})]}),`
 
`]})}function Vp(){const e=[{img:"/assets/img-promo-cimento.webp",href:"#/categoria/cimento",alt:"Cimento com preços exclusivos"},{img:"/assets/img-promo-impermeabilizantes.webp",href:"#/categoria/impermeabilizantes",alt:"Impermeabilizantes"},{img:"/assets/img-promo-tintas.webp",href:"#/categoria/tintas",alt:"Tintas e Acessórios"}];return s.jsxs("div",{className:"banners-grid mini-banners group-native-banners",children:[`
 `,s.jsx("div",{className:"container flex f-wrap justify-between",children:e.map(n=>s.jsx("div",{className:"item",children:s.jsx("a",{href:n.href,className:"item-image","aria-label":n.alt,ref:S("--padding:115.38461538462%"),children:s.jsx("img",{loading:"lazy",src:n.img,alt:n.alt,width:"416",height:"480"})})},n.href))}),`
 `]})}function Up(){return s.jsxs("div",{className:"template-partners",children:[`
 `,s.jsxs("div",{className:"section-header",children:[`
 `,s.jsx("h2",{className:"title-section",children:"Nossos Parceiros"}),`
 `]}),`
 `,s.jsxs("div",{className:"container",children:[`
 `,s.jsxs("picture",{className:"bf-partners-img",children:[s.jsx("source",{media:"(max-width: 768px)",srcSet:"/assets/img-parceiros-mobile.webp"}),s.jsx("img",{loading:"lazy",src:"/assets/img-parceiros-pc.webp",alt:"Marcas parceiras da BateForte",width:"1376",height:"768"})]}),`
 `,s.jsxs("div",{className:"bf-choose-brand",children:[`
 `,s.jsx("h3",{className:"bf-choose-brand__title",children:"Escolha pela marca"}),`
 `,s.jsx("ul",{className:"bf-brand-links"}),`
 `]}),`
 `]}),`
`]})}function $p(){return s.jsxs("div",{className:"block-custom custom-home-reviews show",children:[`
 `,s.jsxs("div",{className:"custom-home-reviews__title section-header",children:[`
 `,s.jsx("h2",{className:"title-section",children:"Avaliações dos Clientes"}),`
 `]}),`
 `,s.jsxs("div",{className:"container swiper-container swiper-container-initialized swiper-container-horizontal swiper-container-pointer-events",children:[`
 `,s.jsxs("div",{className:"block-custom__content swiper-wrapper",id:"swiper-wrapper-72b85b651a671016d","aria-live":"off",ref:S("transition-duration:0ms;transform:translate3d(0px,0px,0px)"),children:[`
 
 
 
 
 `,s.jsxs("div",{className:"item swiper-slide flex justify-center align-center swiper-slide-active",role:"group","aria-label":"1 / 4",ref:S("width:416.667px;margin-right:20px"),children:[`
 `,s.jsxs("div",{className:"custom-home-reviews__left",children:[`
 `,s.jsx("img",{loading:"lazy",className:"icon lazyload loaded",alt:"Ana Flávia",src:"/assets/img-417a65984d96.webp","data-ll-status":"loaded"}),`
 `]}),`
 `,s.jsxs("div",{className:"custom-home-reviews__right flex flex-column justify-center align-left",children:[`
 `,s.jsxs("strong",{children:[`
 Ana Flávia
 `,s.jsxs("span",{className:"custom-home-reviews__stars",children:[`
 `,s.jsx("span",{}),`
 `,s.jsx("span",{}),`
 `,s.jsx("span",{}),`
 `,s.jsx("span",{}),`
 `,s.jsx("span",{}),`
 `]}),`
 `]}),` 
 `,s.jsx("small",{children:s.jsx("b",{ref:S("color:green"),children:"Compra verificada"})}),`
 `,s.jsx("p",{children:`
 Recebi antes do prazo, veio tudo certinho!!!!
 `}),`
 `]}),`
 `]}),`
 
 
 
 
 `,s.jsxs("div",{className:"item swiper-slide flex justify-center align-center swiper-slide-next",role:"group","aria-label":"2 / 4",ref:S("width:416.667px;margin-right:20px"),children:[`
 `,s.jsxs("div",{className:"custom-home-reviews__left",children:[`
 `,s.jsx("img",{loading:"lazy",className:"icon lazyload loaded",alt:"Roberta Canari",src:"/assets/img-07a6590330da.webp","data-ll-status":"loaded"}),`
 `]}),`
 `,s.jsxs("div",{className:"custom-home-reviews__right flex flex-column justify-center align-left",children:[`
 `,s.jsxs("strong",{children:[`
 Roberta Canari
 `,s.jsxs("span",{className:"custom-home-reviews__stars",children:[`
 `,s.jsx("span",{}),`
 `,s.jsx("span",{}),`
 `,s.jsx("span",{}),`
 `,s.jsx("span",{}),`
 `,s.jsx("span",{}),`
 `]}),`
 `]}),` 
 `,s.jsx("small",{children:s.jsx("b",{ref:S("color:green"),children:"Compra verificada"})}),`
 `,s.jsx("p",{children:`
 Atendimento com o vendedor foi perfeito!
 `}),`
 `]}),`
 `]}),`
 
 
 
 
 `,s.jsxs("div",{className:"item swiper-slide flex justify-center align-center",role:"group","aria-label":"3 / 4",ref:S("width:416.667px;margin-right:20px"),children:[`
 `,s.jsxs("div",{className:"custom-home-reviews__left",children:[`
 `,s.jsx("img",{loading:"lazy",className:"icon lazyload loaded",alt:"Kelly Bitton",src:"/assets/img-8f5d66864203.webp","data-ll-status":"loaded"}),`
 `]}),`
 `,s.jsxs("div",{className:"custom-home-reviews__right flex flex-column justify-center align-left",children:[`
 `,s.jsxs("strong",{children:[`
 Kelly Bitton
 `,s.jsxs("span",{className:"custom-home-reviews__stars",children:[`
 `,s.jsx("span",{}),`
 `,s.jsx("span",{}),`
 `,s.jsx("span",{}),`
 `,s.jsx("span",{}),`
 `,s.jsx("span",{}),`
 `]}),`
 `]}),` 
 `,s.jsx("small",{children:s.jsx("b",{ref:S("color:green"),children:"Compra verificada"})}),`
 `,s.jsx("p",{children:`
 Toda vez que penso em reforma, já ligo para a BateForte.
 `}),`
 `]}),`
 `]}),`
 
 
 
 
 `,s.jsxs("div",{className:"item swiper-slide flex justify-center align-center",role:"group","aria-label":"4 / 4",ref:S("width:416.667px;margin-right:20px"),children:[`
 `,s.jsxs("div",{className:"custom-home-reviews__left",children:[`
 `,s.jsx("img",{loading:"lazy",className:"icon lazyload loaded",alt:"Henrique Soares",src:"/assets/img-02f90b3981f6.webp","data-ll-status":"loaded"}),`
 `]}),`
 `,s.jsxs("div",{className:"custom-home-reviews__right flex flex-column justify-center align-left",children:[`
 `,s.jsxs("strong",{children:[`
 Henrique Soares
 `,s.jsxs("span",{className:"custom-home-reviews__stars",children:[`
 `,s.jsx("span",{}),`
 `,s.jsx("span",{}),`
 `,s.jsx("span",{}),`
 `,s.jsx("span",{}),`
 `,s.jsx("span",{}),`
 `]}),`
 `]}),` 
 `,s.jsx("small",{children:s.jsx("b",{ref:S("color:green"),children:"Compra verificada"})}),`
 `,s.jsx("p",{children:`
 Não posso comprar os itens da reforma se não for na BateForte.
 `}),`
 `]}),`
 `]}),`
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 `]}),`
 `,s.jsxs("div",{className:"prev swiper-button-disabled",tabIndex:"-1",role:"button","aria-label":"Previous slide","aria-controls":"swiper-wrapper-72b85b651a671016d","aria-disabled":"true",children:[`
 `,s.jsx("i",{className:"icon icon-arrow-left"}),`
 `]}),`
 `,s.jsxs("div",{className:"next",tabIndex:"0",role:"button","aria-label":"Next slide","aria-controls":"swiper-wrapper-72b85b651a671016d","aria-disabled":"false",children:[`
 `,s.jsx("i",{className:"icon icon-arrow-right"}),`
 `]}),`
 `,s.jsx("div",{className:"dots swiper-pagination-clickable swiper-pagination-bullets sf-hidden"}),`
 `,s.jsx("span",{className:"swiper-notification sf-hidden","aria-live":"assertive","aria-atomic":"true"})]}),`
`]})}function Wp(){return s.jsxs("div",{className:"section-showcase not-slide-drag show","data-category":"5",type:"all_products",order:"quantity_sold",children:[`
 `,s.jsxs("div",{className:"container",children:[`
 `,s.jsxs("div",{className:"section-header",children:[`
 `,s.jsx("h2",{className:"title-section",children:"Cimento"}),`
 `]}),`
 `,s.jsxs("div",{className:"list-product flex f-wrap swiper-container swiper-container-initialized swiper-container-horizontal swiper-container-pointer-events",children:[`
 `,s.jsxs("div",{className:"list-product__items swiper-wrapper",id:"swiper-wrapper-c270dc42ad2c363f","aria-live":"off",children:[`
 
 `,s.jsxs("div",{className:"item swiper-slide swiper-slide-active",role:"group","aria-label":"1 / 4",ref:S("width:320px"),children:[`
 
 
 
`,s.jsxs("div",{className:"product upon_request has-fast-shopping",id:"product-1726670685","product-ref":"27447",children:[`
 
 `,s.jsxs("div",{className:"image",children:[`
 
 `,s.jsxs("a",{href:"https://www.atlantanet.com.br/material-de-construcao/cimento-cp-iv-rs-32-50kg-caue",className:"space-image",children:[`
 `,s.jsx("img",{loading:"lazy",className:"lazyload loaded",src:"/assets/img-3a2f50f59724.svg",alt:"Cimento Exato CP IV 50KG - Cauê","data-ll-status":"loaded",ref:S("background-blend-mode:normal!important;background-clip:content-box!important;background-position:50% 50%!important;background-color:rgba(0,0,0,0)!important;background-image:var(--sf-img-43)!important;background-size:contain!important;background-origin:content-box!important;background-repeat:no-repeat!important")}),`
 
 `]}),`
 
 
 
 
 
 `,s.jsx("div",{className:"product-tags tags-custom","data-tags-count":"0",children:`
 
 
 
 
 `}),`
 
 `]}),`
 `,s.jsxs("a",{className:"product-info",href:"https://www.atlantanet.com.br/material-de-construcao/cimento-cp-iv-rs-32-50kg-caue",children:[`
 `,s.jsxs("div",{className:"wrapper-product-name",children:[`
 `,s.jsx("h3",{className:"product-name",children:`
 Cimento Exato CP IV 50KG - Cauê
 `}),`
 `]}),`
 `,s.jsx("div",{className:"product-price",children:`
 
 
 `}),`
 
 `]}),`
 
 
 
 
 `,s.jsx("div",{className:"actions",children:`
 `}),`
 
 
 `,s.jsxs("div",{className:"buy-whatsapp buy-whatsapp--list-product",children:[`
 `,s.jsxs("a",{href:"https://api.whatsapp.com/send?phone=5511974659658&text=Ol%C3%83%C2%A1,%20gostei%20deste%20produto:%20Nome:%20Cimento%20Exato%20CP%20IV%2050KG%20-%20Cau%C3%83%C2%AA%20|%20Ref:%2027447",target:"_blank",children:[`
 `,s.jsx("i",{className:"icon icon-whatsapp v-align-middle"}),`
 Comprar pelo Whats
 `]}),`
 `]}),`
 
`]})," "]}),`
 `,s.jsxs("div",{className:"item swiper-slide swiper-slide-next",role:"group","aria-label":"2 / 4",ref:S("width:320px"),children:[`
 
 
 
`,s.jsxs("div",{className:"product upon_request has-fast-shopping",id:"product-1640657925","product-ref":"13998",children:[`
 
 `,s.jsxs("div",{className:"image",children:[`
 
 `,s.jsxs("a",{href:"https://www.atlantanet.com.br/material-de-construcao/cimento-estrutura-40kg-cpv-caue",className:"space-image",children:[`
 `,s.jsx("img",{loading:"lazy",className:"lazyload loaded",src:"/assets/img-3a2f50f59724.svg",alt:"Cimento Estrutura 40KG CP-V - Cauê","data-ll-status":"loaded",ref:S("background-blend-mode:normal!important;background-clip:content-box!important;background-position:50% 50%!important;background-color:rgba(0,0,0,0)!important;background-image:var(--sf-img-46)!important;background-size:contain!important;background-origin:content-box!important;background-repeat:no-repeat!important")}),`
 
 `]}),`
 
 
 
 
 
 `,s.jsx("div",{className:"product-tags tags-custom","data-tags-count":"0",children:`
 
 
 
 
 `}),`
 
 `]}),`
 `,s.jsxs("a",{className:"product-info",href:"https://www.atlantanet.com.br/material-de-construcao/cimento-estrutura-40kg-cpv-caue",children:[`
 `,s.jsxs("div",{className:"wrapper-product-name",children:[`
 `,s.jsx("h3",{className:"product-name",children:`
 Cimento Estrutura 40KG CP-V - Cauê
 `}),`
 `]}),`
 `,s.jsx("div",{className:"product-price",children:`
 
 
 `}),`
 
 `]}),`
 
 
 
 
 `,s.jsx("div",{className:"actions",children:`
 `}),`
 
 
 `,s.jsxs("div",{className:"buy-whatsapp buy-whatsapp--list-product",children:[`
 `,s.jsxs("a",{href:"https://api.whatsapp.com/send?phone=5511974659658&text=Ol%C3%83%C2%A1,%20gostei%20deste%20produto:%20Nome:%20Cimento%20Estrutura%2040KG%20CP-V%20-%20Cau%C3%83%C2%AA%20|%20Ref:%2013998",target:"_blank",children:[`
 `,s.jsx("i",{className:"icon icon-whatsapp v-align-middle"}),`
 Comprar pelo Whats
 `]}),`
 `]}),`
 
`]})," "]}),`
 `,s.jsxs("div",{className:"item swiper-slide",role:"group","aria-label":"3 / 4",ref:S("width:320px"),children:[`
 
 
 
`,s.jsxs("div",{className:"product upon_request has-fast-shopping",id:"product-595912856","product-ref":"10009",children:[`
 
 `,s.jsxs("div",{className:"image",children:[`
 
 `,s.jsxs("a",{href:"https://www.atlantanet.com.br/material-de-construcao/cimento-todas-obras-50kg-cpii-votoran",className:"space-image",children:[`
 `,s.jsx("img",{loading:"lazy",className:"lazyload loaded",src:"/assets/img-3a2f50f59724.svg",alt:"Cimento Todas As Obras 50KG CPII - Votoran","data-ll-status":"loaded",ref:S("background-blend-mode:normal!important;background-clip:content-box!important;background-position:50% 50%!important;background-color:rgba(0,0,0,0)!important;background-image:var(--sf-img-44)!important;background-size:contain!important;background-origin:content-box!important;background-repeat:no-repeat!important")}),`
 
 `]}),`
 
 
 
 
 
 `,s.jsx("div",{className:"product-tags tags-custom","data-tags-count":"0",children:`
 
 
 
 
 `}),`
 
 `]}),`
 `,s.jsxs("a",{className:"product-info",href:"https://www.atlantanet.com.br/material-de-construcao/cimento-todas-obras-50kg-cpii-votoran",children:[`
 `,s.jsxs("div",{className:"wrapper-product-name",children:[`
 `,s.jsx("h3",{className:"product-name",children:`
 Cimento Todas As Obras 50KG CPII - Votoran
 `}),`
 `]}),`
 `,s.jsx("div",{className:"product-price",children:`
 
 
 `}),`
 
 `]}),`
 
 
 
 
 `,s.jsx("div",{className:"actions",children:`
 `}),`
 
 
 `,s.jsxs("div",{className:"buy-whatsapp buy-whatsapp--list-product",children:[`
 `,s.jsxs("a",{href:"https://api.whatsapp.com/send?phone=5511974659658&text=Ol%C3%83%C2%A1,%20gostei%20deste%20produto:%20Nome:%20Cimento%20Todas%20As%20Obras%2050KG%20CPII%20-%20Votoran%20|%20Ref:%2010009",target:"_blank",children:[`
 `,s.jsx("i",{className:"icon icon-whatsapp v-align-middle"}),`
 Comprar pelo Whats
 `]}),`
 `]}),`
 
`]})," "]}),`
 `,s.jsxs("div",{className:"item swiper-slide",role:"group","aria-label":"4 / 4",ref:S("width:320px"),children:[`
 
 
 
`,s.jsxs("div",{className:"product upon_request has-fast-shopping",id:"product-2002283887","product-ref":"22114",children:[`
 
 `,s.jsxs("div",{className:"image",children:[`
 
 `,s.jsxs("a",{href:"https://www.atlantanet.com.br/material-de-construcao/cimento-uso-geral-50kg-cpii-caue",className:"space-image",children:[`
 `,s.jsx("img",{loading:"lazy",className:"lazyload loaded",src:"/assets/img-3a2f50f59724.svg",alt:"Cimento Uso Geral 50 Kg CPII - Cauê","data-ll-status":"loaded",ref:S("background-blend-mode:normal!important;background-clip:content-box!important;background-position:50% 50%!important;background-color:rgba(0,0,0,0)!important;background-image:var(--sf-img-47)!important;background-size:contain!important;background-origin:content-box!important;background-repeat:no-repeat!important")}),`
 
 `]}),`
 
 
 
 
 
 `,s.jsx("div",{className:"product-tags tags-custom","data-tags-count":"0",children:`
 
 
 
 
 `}),`
 
 `]}),`
 `,s.jsxs("a",{className:"product-info",href:"https://www.atlantanet.com.br/material-de-construcao/cimento-uso-geral-50kg-cpii-caue",children:[`
 `,s.jsxs("div",{className:"wrapper-product-name",children:[`
 `,s.jsx("h3",{className:"product-name",children:`
 Cimento Uso Geral 50 Kg CPII - Cauê
 `}),`
 `]}),`
 `,s.jsx("div",{className:"product-price",children:`
 
 
 `}),`
 
 `]}),`
 
 
 
 
 `,s.jsx("div",{className:"actions",children:`
 `}),`
 
 
 `,s.jsxs("div",{className:"buy-whatsapp buy-whatsapp--list-product",children:[`
 `,s.jsxs("a",{href:"https://api.whatsapp.com/send?phone=5511974659658&text=Ol%C3%83%C2%A1,%20gostei%20deste%20produto:%20Nome:%20Cimento%20Uso%20Geral%2050%20Kg%20CPII%20-%20Cau%C3%83%C2%AA%20|%20Ref:%2022114",target:"_blank",children:[`
 `,s.jsx("i",{className:"icon icon-whatsapp v-align-middle"}),`
 Comprar pelo Whats
 `]}),`
 `]}),`
 
`]})," "]}),`
 `]}),`
 
 `,s.jsx("div",{className:"prev swiper-button-disabled sf-hidden",tabIndex:"-1",role:"button","aria-label":"Previous slide","aria-controls":"swiper-wrapper-c270dc42ad2c363f","aria-disabled":"true",children:`
 
 `}),`
 `,s.jsx("div",{className:"next swiper-button-disabled sf-hidden",tabIndex:"-1",role:"button","aria-label":"Next slide","aria-controls":"swiper-wrapper-c270dc42ad2c363f","aria-disabled":"true",children:`
 
 `}),` 
 `,s.jsx("div",{className:"dots swiper-pagination-clickable swiper-pagination-bullets sf-hidden"}),`
 `,s.jsx("span",{className:"swiper-notification sf-hidden","aria-live":"assertive","aria-atomic":"true"})]}),`
 `]}),`
 `]})}function Hp(){return s.jsxs("div",{className:"section-showcase not-slide-drag show","data-category":"",type:"featured",order:"hot",children:[`
 `,s.jsxs("div",{className:"container",children:[`
 `,s.jsxs("div",{className:"section-header",children:[`
 `,s.jsx("h2",{className:"title-section",children:"Destaques"}),`
 `]}),`
 `,s.jsxs("div",{className:"list-product flex f-wrap swiper-container swiper-container-initialized swiper-container-horizontal swiper-container-pointer-events",children:[`
 `,s.jsxs("div",{className:"list-product__items swiper-wrapper",id:"swiper-wrapper-5b101065e6776ee10c","aria-live":"off",children:[`
 
 `,s.jsxs("div",{className:"item swiper-slide swiper-slide-active",role:"group","aria-label":"1 / 4",ref:S("width:320px"),children:[`
 
 
 
`,s.jsxs("div",{className:"product upon_request has-fast-shopping",id:"product-1773442570","product-ref":"ref-empty",children:[`
 
 `,s.jsxs("div",{className:"image",children:[`
 
 `,s.jsxs("a",{href:"https://www.atlantanet.com.br/piso-e-revestimos/piso-duragres-copan-cinza-acetinado-71x71-cx2-52m",className:"space-image",children:[`
 `,s.jsx("img",{loading:"lazy",className:"lazyload loaded",src:"/assets/img-2503958638b0.webp",alt:"Piso Duragres Copan Cinza Acetinado 71X71 Cx2,52M²","data-ll-status":"loaded"}),`
 
 `]}),`
 
 
 
 
 
 `,s.jsxs("div",{className:"product-tags tags-custom","data-tags-count":"1",children:[`
 
 `,s.jsxs("div",{className:"tag featured",children:[`
 `,s.jsx("span",{className:"tag-text",children:"Destaque"}),`
 `]}),`
 
 
 
 `]}),`
 
 `]}),`
 `,s.jsxs("a",{className:"product-info",href:"https://www.atlantanet.com.br/piso-e-revestimos/piso-duragres-copan-cinza-acetinado-71x71-cx2-52m",children:[`
 `,s.jsxs("div",{className:"wrapper-product-name",children:[`
 `,s.jsx("h3",{className:"product-name",children:`
 Piso Duragres Copan Cinza Acetinado 71X71 Cx2,52M²
 `}),`
 `]}),`
 `,s.jsx("div",{className:"product-price",children:`
 
 
 `}),`
 
 `]}),`
 
 
 
 
 `,s.jsx("div",{className:"actions",children:`
 `}),`
 
 
 `,s.jsxs("div",{className:"buy-whatsapp buy-whatsapp--list-product",children:[`
 `,s.jsxs("a",{href:"https://api.whatsapp.com/send?phone=5511974659658&text=Ol%C3%83%C2%A1,%20gostei%20deste%20produto:%20Nome:%20Piso%20Duragres%20Copan%20Cinza%20Acetinado%2071X71%20Cx2,52M%C3%82%C2%B2%20|%20Ref:",target:"_blank",children:[`
 `,s.jsx("i",{className:"icon icon-whatsapp v-align-middle"}),`
 Comprar pelo Whats
 `]}),`
 `]}),`
 
`]})," "]}),`
 `,s.jsxs("div",{className:"item swiper-slide swiper-slide-next",role:"group","aria-label":"2 / 4",ref:S("width:320px"),children:[`
 
 
 
`,s.jsxs("div",{className:"product upon_request has-fast-shopping",id:"product-774241422","product-ref":"ref-empty",children:[`
 
 `,s.jsxs("div",{className:"image",children:[`
 
 `,s.jsxs("a",{href:"https://www.atlantanet.com.br/piso-e-revestimos/piso-durag-copan-nude-in-71x71",className:"space-image",children:[`
 `,s.jsx("img",{loading:"lazy",className:"lazyload loaded",src:"/assets/img-40ad59cb890a.webp",alt:"Piso Durag Copan Nude In 71X71","data-ll-status":"loaded"}),`
 
 `]}),`
 
 
 
 
 
 `,s.jsxs("div",{className:"product-tags tags-custom","data-tags-count":"1",children:[`
 
 `,s.jsxs("div",{className:"tag featured",children:[`
 `,s.jsx("span",{className:"tag-text",children:"Destaque"}),`
 `]}),`
 
 
 
 `]}),`
 
 `]}),`
 `,s.jsxs("a",{className:"product-info",href:"https://www.atlantanet.com.br/piso-e-revestimos/piso-durag-copan-nude-in-71x71",children:[`
 `,s.jsxs("div",{className:"wrapper-product-name",children:[`
 `,s.jsx("h3",{className:"product-name",children:`
 Piso Durag Copan Nude In 71X71
 `}),`
 `]}),`
 `,s.jsx("div",{className:"product-price",children:`
 
 
 `}),`
 
 `]}),`
 
 
 
 
 `,s.jsx("div",{className:"actions",children:`
 `}),`
 
 
 `,s.jsxs("div",{className:"buy-whatsapp buy-whatsapp--list-product",children:[`
 `,s.jsxs("a",{href:"https://api.whatsapp.com/send?phone=5511974659658&text=Ol%C3%83%C2%A1,%20gostei%20deste%20produto:%20Nome:%20Piso%20Durag%20Copan%20Nude%20In%2071X71%20|%20Ref:",target:"_blank",children:[`
 `,s.jsx("i",{className:"icon icon-whatsapp v-align-middle"}),`
 Comprar pelo Whats
 `]}),`
 `]}),`
 
`]})," "]}),`
 `,s.jsxs("div",{className:"item swiper-slide",role:"group","aria-label":"3 / 4",ref:S("width:320px"),children:[`
 
 
 
`,s.jsxs("div",{className:"product upon_request has-fast-shopping",id:"product-483712947","product-ref":"ref-empty",children:[`
 
 `,s.jsxs("div",{className:"image",children:[`
 
 `,s.jsxs("a",{href:"https://www.atlantanet.com.br/piso-e-revestimos/piso-durag-alvorada-grafite-in-71x71",className:"space-image",children:[`
 `,s.jsx("img",{loading:"lazy",className:"lazyload loaded",src:"/assets/img-bf740917652b.webp",alt:"Piso Durag Alvorada Grafite In 71x71","data-ll-status":"loaded"}),`
 
 `]}),`
 
 
 
 
 
 `,s.jsxs("div",{className:"product-tags tags-custom","data-tags-count":"1",children:[`
 
 `,s.jsxs("div",{className:"tag featured",children:[`
 `,s.jsx("span",{className:"tag-text",children:"Destaque"}),`
 `]}),`
 
 
 
 `]}),`
 
 `]}),`
 `,s.jsxs("a",{className:"product-info",href:"https://www.atlantanet.com.br/piso-e-revestimos/piso-durag-alvorada-grafite-in-71x71",children:[`
 `,s.jsxs("div",{className:"wrapper-product-name",children:[`
 `,s.jsx("h3",{className:"product-name",children:`
 Piso Durag Alvorada Grafite In 71x71
 `}),`
 `]}),`
 `,s.jsx("div",{className:"product-price",children:`
 
 
 `}),`
 
 `]}),`
 
 
 
 
 `,s.jsx("div",{className:"actions",children:`
 `}),`
 
 
 `,s.jsxs("div",{className:"buy-whatsapp buy-whatsapp--list-product",children:[`
 `,s.jsxs("a",{href:"https://api.whatsapp.com/send?phone=5511974659658&text=Ol%C3%83%C2%A1,%20gostei%20deste%20produto:%20Nome:%20Piso%20Durag%20Alvorada%20Grafite%20In%2071x71%20|%20Ref:",target:"_blank",children:[`
 `,s.jsx("i",{className:"icon icon-whatsapp v-align-middle"}),`
 Comprar pelo Whats
 `]}),`
 `]}),`
 
`]})," "]}),`
 `,s.jsxs("div",{className:"item swiper-slide",role:"group","aria-label":"4 / 4",ref:S("width:320px"),children:[`
 
 
 
`,s.jsxs("div",{className:"product upon_request has-fast-shopping",id:"product-571151898","product-ref":"ref-empty",children:[`
 
 `,s.jsxs("div",{className:"image",children:[`
 
 `,s.jsxs("a",{href:"https://www.atlantanet.com.br/piso-e-revestimos/copan-rustico-acetinado-71x71",className:"space-image",children:[`
 `,s.jsx("img",{loading:"lazy",className:"lazyload loaded",src:"/assets/img-be907d86f80c.webp",alt:"copan rustico acetinado 71x71","data-ll-status":"loaded"}),`
 
 `]}),`
 
 
 
 
 
 `,s.jsxs("div",{className:"product-tags tags-custom","data-tags-count":"1",children:[`
 
 `,s.jsxs("div",{className:"tag featured",children:[`
 `,s.jsx("span",{className:"tag-text",children:"Destaque"}),`
 `]}),`
 
 
 
 `]}),`
 
 `]}),`
 `,s.jsxs("a",{className:"product-info",href:"https://www.atlantanet.com.br/piso-e-revestimos/copan-rustico-acetinado-71x71",children:[`
 `,s.jsxs("div",{className:"wrapper-product-name",children:[`
 `,s.jsx("h3",{className:"product-name",children:`
 copan rustico acetinado 71x71
 `}),`
 `]}),`
 `,s.jsx("div",{className:"product-price",children:`
 
 
 `}),`
 
 `]}),`
 
 
 
 
 `,s.jsx("div",{className:"actions",children:`
 `}),`
 
 
 `,s.jsxs("div",{className:"buy-whatsapp buy-whatsapp--list-product",children:[`
 `,s.jsxs("a",{href:"https://api.whatsapp.com/send?phone=5511974659658&text=Ol%C3%83%C2%A1,%20gostei%20deste%20produto:%20Nome:%20copan%20rustico%20acetinado%2071x71%20|%20Ref:",target:"_blank",children:[`
 `,s.jsx("i",{className:"icon icon-whatsapp v-align-middle"}),`
 Comprar pelo Whats
 `]}),`
 `]}),`
 
`]})," "]}),`
 `]}),`
 
 `,s.jsx("div",{className:"prev swiper-button-disabled sf-hidden",tabIndex:"-1",role:"button","aria-label":"Previous slide","aria-controls":"swiper-wrapper-5b101065e6776ee10c","aria-disabled":"true",children:`
 
 `}),`
 `,s.jsx("div",{className:"next swiper-button-disabled sf-hidden",tabIndex:"-1",role:"button","aria-label":"Next slide","aria-controls":"swiper-wrapper-5b101065e6776ee10c","aria-disabled":"true",children:`
 
 `}),` 
 `,s.jsx("div",{className:"dots swiper-pagination-clickable swiper-pagination-bullets sf-hidden"}),`
 `,s.jsx("span",{className:"swiper-notification sf-hidden","aria-live":"assertive","aria-atomic":"true"})]}),`
 `]}),`
 `]})}function Qp(){return s.jsxs("div",{className:"section-showcase not-slide-drag show",children:[`
 `,s.jsxs("div",{className:"container",children:[`
 
 `,s.jsxs("div",{className:"section-header",children:[`
 `,s.jsx("h2",{className:"title-section",children:`
 Novidades
 `}),`
 `]}),`
 
 `,s.jsxs("div",{className:"list-product flex f-wrap swiper-container swiper-container-initialized swiper-container-horizontal swiper-container-pointer-events",children:[`
 `,s.jsxs("div",{className:"list-product__items swiper-wrapper",id:"swiper-wrapper-1e019d2aa416c8a3","aria-live":"off",children:[`
 `,s.jsxs("div",{className:"item swiper-slide swiper-slide-active",role:"group","aria-label":"1 / 4",ref:S("width:320px"),children:[`
 
 
 
`,s.jsxs("div",{className:"product upon_request has-fast-shopping",id:"product-1772841134","product-ref":"29920",children:[`
 
 `,s.jsxs("div",{className:"image",children:[`
 
 `,s.jsxs("a",{href:"https://www.atlantanet.com.br/eletrica/fios-e-cabos/cabo-flexivel-2-5mm-100m-vermelho-sil-fios",className:"space-image",children:[`
 `,s.jsx("img",{loading:"lazy",className:"lazyload loaded",src:"/assets/img-e88379d3964a.webp",alt:"Cabo Flexível  2,5MM 100M Vermelho - Sil Fios","data-ll-status":"loaded"}),`
 
 `]}),`
 
 
 
 
 
 `,s.jsxs("div",{className:"product-tags tags-custom","data-tags-count":"1",children:[`
 `,s.jsxs("div",{className:"tag new",children:[`
 `,s.jsx("span",{className:"tag-text",children:"Lançamento"}),`
 `]}),`
 
 
 
 
 `]}),`
 
 `]}),`
 `,s.jsxs("a",{className:"product-info",href:"https://www.atlantanet.com.br/eletrica/fios-e-cabos/cabo-flexivel-2-5mm-100m-vermelho-sil-fios",children:[`
 `,s.jsxs("div",{className:"wrapper-product-name",children:[`
 `,s.jsx("h3",{className:"product-name",children:`
 Cabo Flexível 2,5MM 100M Vermelho - Sil Fios
 `}),`
 `]}),`
 `,s.jsx("div",{className:"product-price",children:`
 
 
 `}),`
 
 `]}),`
 
 
 
 
 `,s.jsx("div",{className:"actions",children:`
 `}),`
 
 
 `,s.jsxs("div",{className:"buy-whatsapp buy-whatsapp--list-product",children:[`
 `,s.jsxs("a",{href:"https://api.whatsapp.com/send?phone=5511974659658&text=Ol%C3%83%C2%A1,%20gostei%20deste%20produto:%20Nome:%20Cabo%20Flex%C3%83%C2%ADvel%20%202,5MM%20100M%20Vermelho%20-%20Sil%20Fios%20|%20Ref:%2029920",target:"_blank",children:[`
 `,s.jsx("i",{className:"icon icon-whatsapp v-align-middle"}),`
 Comprar pelo Whats
 `]}),`
 `]}),`
 
`]})," "]}),`
 `,s.jsxs("div",{className:"item swiper-slide swiper-slide-next",role:"group","aria-label":"2 / 4",ref:S("width:320px"),children:[`
 
 
 
`,s.jsxs("div",{className:"product upon_request has-fast-shopping",id:"product-229620143","product-ref":"29926",children:[`
 
 `,s.jsxs("div",{className:"image",children:[`
 
 `,s.jsxs("a",{href:"https://www.atlantanet.com.br/eletrica/fios-e-cabos/cabo-flexivel-1-5mm-100m-preto-sil-fios",className:"space-image",children:[`
 `,s.jsx("img",{loading:"lazy",className:"lazyload loaded",src:"/assets/img-f0cb37b54a37.webp",alt:"Cabo Flexível  1,5MM 100M Preto - Sil Fios","data-ll-status":"loaded"}),`
 
 `]}),`
 
 
 
 
 
 `,s.jsxs("div",{className:"product-tags tags-custom","data-tags-count":"1",children:[`
 `,s.jsxs("div",{className:"tag new",children:[`
 `,s.jsx("span",{className:"tag-text",children:"Lançamento"}),`
 `]}),`
 
 
 
 
 `]}),`
 
 `]}),`
 `,s.jsxs("a",{className:"product-info",href:"https://www.atlantanet.com.br/eletrica/fios-e-cabos/cabo-flexivel-1-5mm-100m-preto-sil-fios",children:[`
 `,s.jsxs("div",{className:"wrapper-product-name",children:[`
 `,s.jsx("h3",{className:"product-name",children:`
 Cabo Flexível 1,5MM 100M Preto - Sil Fios
 `}),`
 `]}),`
 `,s.jsx("div",{className:"product-price",children:`
 
 
 `}),`
 
 `]}),`
 
 
 
 
 `,s.jsx("div",{className:"actions",children:`
 `}),`
 
 
 `,s.jsxs("div",{className:"buy-whatsapp buy-whatsapp--list-product",children:[`
 `,s.jsxs("a",{href:"https://api.whatsapp.com/send?phone=5511974659658&text=Ol%C3%83%C2%A1,%20gostei%20deste%20produto:%20Nome:%20Cabo%20Flex%C3%83%C2%ADvel%20%201,5MM%20100M%20Preto%20-%20Sil%20Fios%20|%20Ref:%2029926",target:"_blank",children:[`
 `,s.jsx("i",{className:"icon icon-whatsapp v-align-middle"}),`
 Comprar pelo Whats
 `]}),`
 `]}),`
 
`]})," "]}),`
 `,s.jsxs("div",{className:"item swiper-slide",role:"group","aria-label":"3 / 4",ref:S("width:320px"),children:[`
 
 
 
`,s.jsxs("div",{className:"product upon_request has-fast-shopping",id:"product-1269001756","product-ref":"29925",children:[`
 
 `,s.jsxs("div",{className:"image",children:[`
 
 `,s.jsxs("a",{href:"https://www.atlantanet.com.br/eletrica/fios-e-cabos/cabo-flexivel-1-5mm-100m-azul-sil-fios",className:"space-image",children:[`
 `,s.jsx("img",{loading:"lazy",className:"lazyload loaded",src:"/assets/img-a0c11dfb3c91.webp",alt:"Cabo Flexível  1,5MM 100M Azul - Sil Fios","data-ll-status":"loaded"}),`
 
 `]}),`
 
 
 
 
 
 `,s.jsxs("div",{className:"product-tags tags-custom","data-tags-count":"1",children:[`
 `,s.jsxs("div",{className:"tag new",children:[`
 `,s.jsx("span",{className:"tag-text",children:"Lançamento"}),`
 `]}),`
 
 
 
 
 `]}),`
 
 `]}),`
 `,s.jsxs("a",{className:"product-info",href:"https://www.atlantanet.com.br/eletrica/fios-e-cabos/cabo-flexivel-1-5mm-100m-azul-sil-fios",children:[`
 `,s.jsxs("div",{className:"wrapper-product-name",children:[`
 `,s.jsx("h3",{className:"product-name",children:`
 Cabo Flexível 1,5MM 100M Azul - Sil Fios
 `}),`
 `]}),`
 `,s.jsx("div",{className:"product-price",children:`
 
 
 `}),`
 
 `]}),`
 
 
 
 
 `,s.jsx("div",{className:"actions",children:`
 `}),`
 
 
 `,s.jsxs("div",{className:"buy-whatsapp buy-whatsapp--list-product",children:[`
 `,s.jsxs("a",{href:"https://api.whatsapp.com/send?phone=5511974659658&text=Ol%C3%83%C2%A1,%20gostei%20deste%20produto:%20Nome:%20Cabo%20Flex%C3%83%C2%ADvel%20%201,5MM%20100M%20Azul%20-%20Sil%20Fios%20|%20Ref:%2029925",target:"_blank",children:[`
 `,s.jsx("i",{className:"icon icon-whatsapp v-align-middle"}),`
 Comprar pelo Whats
 `]}),`
 `]}),`
 
`]})," "]}),`
 `,s.jsxs("div",{className:"item swiper-slide",role:"group","aria-label":"4 / 4",ref:S("width:320px"),children:[`
 
 
 
`,s.jsxs("div",{className:"product upon_request has-fast-shopping",id:"product-398117493","product-ref":"29930",children:[`
 
 `,s.jsxs("div",{className:"image",children:[`
 
 `,s.jsxs("a",{href:"https://www.atlantanet.com.br/eletrica/fios-e-cabos/cabo-flexivel-1-5mm-100m-branco-sil-fios",className:"space-image",children:[`
 `,s.jsx("img",{loading:"lazy",className:"lazyload loaded",src:"/assets/img-6ee1b3a0c4e1.webp",alt:"Cabo Flexível  1,5MM 100M Branco - Sil Fios","data-ll-status":"loaded"}),`
 
 `]}),`
 
 
 
 
 
 `,s.jsxs("div",{className:"product-tags tags-custom","data-tags-count":"1",children:[`
 `,s.jsxs("div",{className:"tag new",children:[`
 `,s.jsx("span",{className:"tag-text",children:"Lançamento"}),`
 `]}),`
 
 
 
 
 `]}),`
 
 `]}),`
 `,s.jsxs("a",{className:"product-info",href:"https://www.atlantanet.com.br/eletrica/fios-e-cabos/cabo-flexivel-1-5mm-100m-branco-sil-fios",children:[`
 `,s.jsxs("div",{className:"wrapper-product-name",children:[`
 `,s.jsx("h3",{className:"product-name",children:`
 Cabo Flexível 1,5MM 100M Branco - Sil Fios
 `}),`
 `]}),`
 `,s.jsx("div",{className:"product-price",children:`
 
 
 `}),`
 
 `]}),`
 
 
 
 
 `,s.jsx("div",{className:"actions",children:`
 `}),`
 
 
 `,s.jsxs("div",{className:"buy-whatsapp buy-whatsapp--list-product",children:[`
 `,s.jsxs("a",{href:"https://api.whatsapp.com/send?phone=5511974659658&text=Ol%C3%83%C2%A1,%20gostei%20deste%20produto:%20Nome:%20Cabo%20Flex%C3%83%C2%ADvel%20%201,5MM%20100M%20Branco%20-%20Sil%20Fios%20|%20Ref:%2029930",target:"_blank",children:[`
 `,s.jsx("i",{className:"icon icon-whatsapp v-align-middle"}),`
 Comprar pelo Whats
 `]}),`
 `]}),`
 
`]})," "]}),`
 `]}),`
 
 `,s.jsx("div",{className:"prev swiper-button-disabled sf-hidden",tabIndex:"-1",role:"button","aria-label":"Previous slide","aria-controls":"swiper-wrapper-1e019d2aa416c8a3","aria-disabled":"true",children:`
 
 `}),`
 `,s.jsx("div",{className:"next swiper-button-disabled sf-hidden",tabIndex:"-1",role:"button","aria-label":"Next slide","aria-controls":"swiper-wrapper-1e019d2aa416c8a3","aria-disabled":"true",children:`
 
 `}),` 
 `,s.jsx("div",{className:"dots swiper-pagination-clickable swiper-pagination-bullets sf-hidden"}),`
 `,s.jsx("span",{className:"swiper-notification sf-hidden","aria-live":"assertive","aria-atomic":"true"})]}),`
 
 `]}),`
 `]})}function Kp(){return s.jsxs("div",{className:"section-showcase not-slide-drag show","data-category":"344",type:"all_products",order:"priceLow",children:[`
 `,s.jsxs("div",{className:"container",children:[`
 `,s.jsxs("div",{className:"section-header",children:[`
 `,s.jsx("h2",{className:"title-section",children:"Promoção Da Semana"}),`
 `]}),`
 `,s.jsxs("div",{className:"list-product flex f-wrap swiper-container swiper-container-initialized swiper-container-horizontal swiper-container-pointer-events",children:[`
 `,s.jsxs("div",{className:"list-product__items swiper-wrapper",id:"swiper-wrapper-fe370622819b6102b","aria-live":"off",children:[`
 
 `,s.jsxs("div",{className:"item swiper-slide swiper-slide-active",role:"group","aria-label":"1 / 4",ref:S("width:320px"),children:[`
 
 
 
`,s.jsxs("div",{className:"product upon_request has-fast-shopping",id:"product-2066649671","product-ref":"28116",children:[`
 
 `,s.jsxs("div",{className:"image",children:[`
 
 `,s.jsxs("a",{href:"https://www.atlantanet.com.br/tintas-e-acessorios/tinta-para-parede/acrilica/tinta-rende-e-cobre-muito-3-6l-branco-suvinil",className:"space-image",children:[`
 `,s.jsx("img",{loading:"lazy",className:"lazyload loaded",src:"/assets/img-fa23c8cf4fb3.webp",alt:"Tinta Rende e Cobre Muito 3.6L Branco - Suvinil","data-ll-status":"loaded"}),`
 
 `]}),`
 
 
 
 
 
 `,s.jsx("div",{className:"product-tags tags-custom","data-tags-count":"0",children:`
 
 
 
 
 `}),`
 
 `]}),`
 `,s.jsxs("a",{className:"product-info",href:"https://www.atlantanet.com.br/tintas-e-acessorios/tinta-para-parede/acrilica/tinta-rende-e-cobre-muito-3-6l-branco-suvinil",children:[`
 `,s.jsxs("div",{className:"wrapper-product-name",children:[`
 `,s.jsx("h3",{className:"product-name",children:`
 Tinta Rende e Cobre Muito 3.6L Branco - Suvinil
 `}),`
 `]}),`
 `,s.jsx("div",{className:"product-price",children:`
 
 
 `}),`
 
 `]}),`
 
 
 
 
 `,s.jsx("div",{className:"actions",children:`
 `}),`
 
 
 `,s.jsxs("div",{className:"buy-whatsapp buy-whatsapp--list-product",children:[`
 `,s.jsxs("a",{href:"https://api.whatsapp.com/send?phone=5511974659658&text=Ol%C3%83%C2%A1,%20gostei%20deste%20produto:%20Nome:%20Tinta%20Rende%20e%20Cobre%20Muito%203.6L%20Branco%20-%20Suvinil%20|%20Ref:%2028116",target:"_blank",children:[`
 `,s.jsx("i",{className:"icon icon-whatsapp v-align-middle"}),`
 Comprar pelo Whats
 `]}),`
 `]}),`
 
`]})," "]}),`
 `,s.jsxs("div",{className:"item swiper-slide swiper-slide-next",role:"group","aria-label":"2 / 4",ref:S("width:320px"),children:[`
 
 
 
`,s.jsxs("div",{className:"product upon_request has-fast-shopping",id:"product-1932028822","product-ref":"11923",children:[`
 
 `,s.jsxs("div",{className:"image",children:[`
 
 `,s.jsxs("a",{href:"https://www.atlantanet.com.br/tintas-e-acessorios/tinta-para-parede/acrilica/tinta-toque-de-seda-acet-18l-branco-suvinil",className:"space-image",children:[`
 `,s.jsx("img",{loading:"lazy",className:"lazyload loaded",src:"/assets/img-7ca3a542a05c.webp",alt:"Tinta Toque De Seda Acetinado 18L Branco - Suvinil","data-ll-status":"loaded"}),`
 
 `]}),`
 
 
 
 
 
 `,s.jsx("div",{className:"product-tags tags-custom","data-tags-count":"0",children:`
 
 
 
 
 `}),`
 
 `]}),`
 `,s.jsxs("a",{className:"product-info",href:"https://www.atlantanet.com.br/tintas-e-acessorios/tinta-para-parede/acrilica/tinta-toque-de-seda-acet-18l-branco-suvinil",children:[`
 `,s.jsxs("div",{className:"wrapper-product-name",children:[`
 `,s.jsx("h3",{className:"product-name",children:`
 Tinta Toque De Seda Acetinado 18L Branco - Suvinil
 `}),`
 `]}),`
 `,s.jsx("div",{className:"product-price",children:`
 
 
 `}),`
 
 `]}),`
 
 
 
 
 `,s.jsx("div",{className:"actions",children:`
 `}),`
 
 
 `,s.jsxs("div",{className:"buy-whatsapp buy-whatsapp--list-product",children:[`
 `,s.jsxs("a",{href:"https://api.whatsapp.com/send?phone=5511974659658&text=Ol%C3%83%C2%A1,%20gostei%20deste%20produto:%20Nome:%20Tinta%20Toque%20De%20Seda%20Acetinado%2018L%20Branco%20-%20Suvinil%20|%20Ref:%2011923",target:"_blank",children:[`
 `,s.jsx("i",{className:"icon icon-whatsapp v-align-middle"}),`
 Comprar pelo Whats
 `]}),`
 `]}),`
 
`]})," "]}),`
 `,s.jsxs("div",{className:"item swiper-slide",role:"group","aria-label":"3 / 4",ref:S("width:320px"),children:[`
 
 
 
`,s.jsxs("div",{className:"product upon_request has-fast-shopping",id:"product-905017650","product-ref":"24228",children:[`
 
 `,s.jsxs("div",{className:"image",children:[`
 
 `,s.jsxs("a",{href:"https://www.atlantanet.com.br/tintas-e-acessorios/tinta-ferromadeira/tinta-seca-rapido-esmalte-brilhante-0-9l-branco-suvinil",className:"space-image",children:[`
 `,s.jsx("img",{loading:"lazy",className:"lazyload loaded",src:"/assets/img-d2798b10097d.webp",alt:"Tinta Seca Rápido Esmalte Brilhante 0,9L Branco - Suvinil","data-ll-status":"loaded"}),`
 
 `]}),`
 
 
 
 
 
 `,s.jsx("div",{className:"product-tags tags-custom","data-tags-count":"0",children:`
 
 
 
 
 `}),`
 
 `]}),`
 `,s.jsxs("a",{className:"product-info",href:"https://www.atlantanet.com.br/tintas-e-acessorios/tinta-ferromadeira/tinta-seca-rapido-esmalte-brilhante-0-9l-branco-suvinil",children:[`
 `,s.jsxs("div",{className:"wrapper-product-name",children:[`
 `,s.jsx("h3",{className:"product-name",children:`
 Tinta Seca Rápido Esmalte Brilhante 0,9L Branco - Suvinil
 `}),`
 `]}),`
 `,s.jsx("div",{className:"product-price",children:`
 
 
 `}),`
 
 `]}),`
 
 
 
 
 `,s.jsx("div",{className:"actions",children:`
 `}),`
 
 
 `,s.jsxs("div",{className:"buy-whatsapp buy-whatsapp--list-product",children:[`
 `,s.jsxs("a",{href:"https://api.whatsapp.com/send?phone=5511974659658&text=Ol%C3%83%C2%A1,%20gostei%20deste%20produto:%20Nome:%20Tinta%20Seca%20R%C3%83%C2%A1pido%20Esmalte%20Brilhante%200,9L%20Branco%20-%20Suvinil%20|%20Ref:%2024228",target:"_blank",children:[`
 `,s.jsx("i",{className:"icon icon-whatsapp v-align-middle"}),`
 Comprar pelo Whats
 `]}),`
 `]}),`
 
`]})," "]}),`
 `,s.jsxs("div",{className:"item swiper-slide",role:"group","aria-label":"4 / 4",ref:S("width:320px"),children:[`
 
 
 
`,s.jsxs("div",{className:"product upon_request has-fast-shopping",id:"product-1552235988","product-ref":"22126",children:[`
 
 `,s.jsxs("div",{className:"image",children:[`
 
 `,s.jsxs("a",{href:"https://www.atlantanet.com.br/tintas-e-acessorios/self-base-toque-de-seda-ac-a2-3-2l-suvinil",className:"space-image",children:[`
 `,s.jsx("img",{loading:"lazy",className:"lazyload loaded",src:"/assets/img-9078e9367287.webp",alt:"Self Base Toque de Seda AC A2 3,2L Suvinil","data-ll-status":"loaded"}),`
 
 `]}),`
 
 
 
 
 
 `,s.jsx("div",{className:"product-tags tags-custom","data-tags-count":"0",children:`
 
 
 
 
 `}),`
 
 `]}),`
 `,s.jsxs("a",{className:"product-info",href:"https://www.atlantanet.com.br/tintas-e-acessorios/self-base-toque-de-seda-ac-a2-3-2l-suvinil",children:[`
 `,s.jsxs("div",{className:"wrapper-product-name",children:[`
 `,s.jsx("h3",{className:"product-name",children:`
 Self Base Toque de Seda AC A2 3,2L Suvinil
 `}),`
 `]}),`
 `,s.jsx("div",{className:"product-price",children:`
 
 
 `}),`
 
 `]}),`
 
 
 
 
 `,s.jsx("div",{className:"actions",children:`
 `}),`
 
 
 `,s.jsxs("div",{className:"buy-whatsapp buy-whatsapp--list-product",children:[`
 `,s.jsxs("a",{href:"https://api.whatsapp.com/send?phone=5511974659658&text=Ol%C3%83%C2%A1,%20gostei%20deste%20produto:%20Nome:%20Self%20Base%20Toque%20de%20Seda%20AC%20A2%203,2L%20Suvinil%20|%20Ref:%2022126",target:"_blank",children:[`
 `,s.jsx("i",{className:"icon icon-whatsapp v-align-middle"}),`
 Comprar pelo Whats
 `]}),`
 `]}),`
 
`]})," "]}),`
 `]}),`
 
 `,s.jsx("div",{className:"prev swiper-button-disabled sf-hidden",tabIndex:"-1",role:"button","aria-label":"Previous slide","aria-controls":"swiper-wrapper-fe370622819b6102b","aria-disabled":"true",children:`
 
 `}),`
 `,s.jsx("div",{className:"next swiper-button-disabled sf-hidden",tabIndex:"-1",role:"button","aria-label":"Next slide","aria-controls":"swiper-wrapper-fe370622819b6102b","aria-disabled":"true",children:`
 
 `}),` 
 `,s.jsx("div",{className:"dots swiper-pagination-clickable swiper-pagination-bullets sf-hidden"}),`
 `,s.jsx("span",{className:"swiper-notification sf-hidden","aria-live":"assertive","aria-atomic":"true"})]}),`
 `]}),`
 `]})}function Gp(){return s.jsxs("div",{className:"section-showcase not-slide-drag show",children:[`
 `,s.jsxs("div",{className:"container",children:[`
 
 `,s.jsxs("div",{className:"section-header",children:[`
 `,s.jsx("h2",{className:"title-section",children:`
 Recomendados para você
 `}),`
 `]}),`
 
 `,s.jsxs("div",{className:"list-product flex f-wrap swiper-container swiper-container-initialized swiper-container-horizontal swiper-container-pointer-events",children:[`
 `,s.jsxs("div",{className:"list-product__items swiper-wrapper",id:"swiper-wrapper-5bcc46949db671105","aria-live":"off",children:[`
 `,s.jsxs("div",{className:"item swiper-slide swiper-slide-active",role:"group","aria-label":"1 / 4",ref:S("width:320px"),children:[`
 
 
 
`,s.jsxs("div",{className:"product upon_request has-fast-shopping",id:"product-1448764788","product-ref":"31294",children:[`
 
 `,s.jsxs("div",{className:"image",children:[`
 
 `,s.jsxs("a",{href:"https://www.atlantanet.com.br/material-de-construcao/blocos-e-tijolos/bloco-ceramico-11-5-x-14-x-24-vedacao-tec-brasil",className:"space-image",children:[`
 `,s.jsx("img",{loading:"lazy",className:"lazyload loaded",src:"/assets/img-f468628d8cdf.webp",alt:"Bloco Cerâmico 11,5 X 14 X 24 Vedação - Tec Brasil","data-ll-status":"loaded"}),`
 
 `]}),`
 
 
 
 
 
 `,s.jsx("div",{className:"product-tags tags-custom","data-tags-count":"0",children:`
 
 
 
 
 `}),`
 
 `]}),`
 `,s.jsxs("a",{className:"product-info",href:"https://www.atlantanet.com.br/material-de-construcao/blocos-e-tijolos/bloco-ceramico-11-5-x-14-x-24-vedacao-tec-brasil",children:[`
 `,s.jsxs("div",{className:"wrapper-product-name",children:[`
 `,s.jsx("h3",{className:"product-name",children:`
 Bloco Cerâmico 11,5 X 14 X 24 Vedação - Tec Brasil
 `}),`
 `]}),`
 `,s.jsx("div",{className:"product-price",children:`
 
 
 `}),`
 
 `]}),`
 
 
 
 
 `,s.jsx("div",{className:"actions",children:`
 `}),`
 
 
 `,s.jsxs("div",{className:"buy-whatsapp buy-whatsapp--list-product",children:[`
 `,s.jsxs("a",{href:"https://api.whatsapp.com/send?phone=5511974659658&text=Ol%C3%83%C2%A1,%20gostei%20deste%20produto:%20Nome:%20Bloco%20Cer%C3%83%C2%A2mico%2011,5%20X%2014%20X%2024%20Veda%C3%83%C2%A7%C3%83%C2%A3o%20-%20Tec%20Brasil%20|%20Ref:%2031294",target:"_blank",children:[`
 `,s.jsx("i",{className:"icon icon-whatsapp v-align-middle"}),`
 Comprar pelo Whats
 `]}),`
 `]}),`
 
`]})," "]}),`
 `,s.jsxs("div",{className:"item swiper-slide swiper-slide-next",role:"group","aria-label":"2 / 4",ref:S("width:320px"),children:[`
 
 
 
`,s.jsxs("div",{className:"product upon_request has-fast-shopping",id:"product-1334851089","product-ref":"30137",children:[`
 
 `,s.jsxs("div",{className:"image",children:[`
 
 `,s.jsxs("a",{href:"https://www.atlantanet.com.br/material-de-construcao/cimento-csn-cp3-32rs-50-kg-csn",className:"space-image",children:[`
 `,s.jsx("img",{loading:"lazy",className:"lazyload loaded",src:"/assets/img-3a2f50f59724.svg",alt:"Cimento CPIII 32RS 50KG - CSN","data-ll-status":"loaded",ref:S("background-blend-mode:normal!important;background-clip:content-box!important;background-position:50% 50%!important;background-color:rgba(0,0,0,0)!important;background-image:var(--sf-img-33)!important;background-size:contain!important;background-origin:content-box!important;background-repeat:no-repeat!important")}),`
 
 `]}),`
 
 
 
 
 
 `,s.jsx("div",{className:"product-tags tags-custom","data-tags-count":"0",children:`
 
 
 
 
 `}),`
 
 `]}),`
 `,s.jsxs("a",{className:"product-info",href:"https://www.atlantanet.com.br/material-de-construcao/cimento-csn-cp3-32rs-50-kg-csn",children:[`
 `,s.jsxs("div",{className:"wrapper-product-name",children:[`
 `,s.jsx("h3",{className:"product-name",children:`
 Cimento CPIII 32RS 50KG - CSN
 `}),`
 `]}),`
 `,s.jsx("div",{className:"product-price",children:`
 
 
 `}),`
 
 `]}),`
 
 
 
 
 `,s.jsx("div",{className:"actions",children:`
 `}),`
 
 
 `,s.jsxs("div",{className:"buy-whatsapp buy-whatsapp--list-product",children:[`
 `,s.jsxs("a",{href:"https://api.whatsapp.com/send?phone=5511974659658&text=Ol%C3%83%C2%A1,%20gostei%20deste%20produto:%20Nome:%20Cimento%20CPIII%2032RS%2050KG%20-%20CSN%20|%20Ref:%2030137",target:"_blank",children:[`
 `,s.jsx("i",{className:"icon icon-whatsapp v-align-middle"}),`
 Comprar pelo Whats
 `]}),`
 `]}),`
 
`]})," "]}),`
 `,s.jsxs("div",{className:"item swiper-slide",role:"group","aria-label":"3 / 4",ref:S("width:320px"),children:[`
 
 
 
`,s.jsxs("div",{className:"product upon_request has-fast-shopping",id:"product-1088674939","product-ref":"21380",children:[`
 
 `,s.jsxs("div",{className:"image",children:[`
 
 `,s.jsxs("a",{href:"https://www.atlantanet.com.br/material-de-construcao/areia-e-pedra/areia-media-lavada-saco-20-kg-ensacada-pedrasil",className:"space-image",children:[`
 `,s.jsx("img",{loading:"lazy",className:"lazyload loaded",src:"/assets/img-f614e6824454.webp",alt:"Areia Média Lavada Saco 20 KG Ensacada - Pedrasil","data-ll-status":"loaded"}),`
 
 `]}),`
 
 
 
 
 
 `,s.jsx("div",{className:"product-tags tags-custom","data-tags-count":"0",children:`
 
 
 
 
 `}),`
 
 `]}),`
 `,s.jsxs("a",{className:"product-info",href:"https://www.atlantanet.com.br/material-de-construcao/areia-e-pedra/areia-media-lavada-saco-20-kg-ensacada-pedrasil",children:[`
 `,s.jsxs("div",{className:"wrapper-product-name",children:[`
 `,s.jsx("h3",{className:"product-name",children:`
 Areia Média Lavada Saco 20 KG Ensacada - Pedrasil
 `}),`
 `]}),`
 `,s.jsx("div",{className:"product-price",children:`
 
 
 `}),`
 
 `]}),`
 
 
 
 
 `,s.jsx("div",{className:"actions",children:`
 `}),`
 
 
 `,s.jsxs("div",{className:"buy-whatsapp buy-whatsapp--list-product",children:[`
 `,s.jsxs("a",{href:"https://api.whatsapp.com/send?phone=5511974659658&text=Ol%C3%83%C2%A1,%20gostei%20deste%20produto:%20Nome:%20Areia%20M%C3%83%C2%A9dia%20Lavada%20Saco%2020%20KG%20Ensacada%20-%20Pedrasil%20|%20Ref:%2021380",target:"_blank",children:[`
 `,s.jsx("i",{className:"icon icon-whatsapp v-align-middle"}),`
 Comprar pelo Whats
 `]}),`
 `]}),`
 
`]})," "]}),`
 `,`
 `]}),`
 
 `,s.jsx("div",{className:"prev swiper-button-disabled sf-hidden",tabIndex:"-1",role:"button","aria-label":"Previous slide","aria-controls":"swiper-wrapper-5bcc46949db671105","aria-disabled":"true",children:`
 
 `}),`
 `,s.jsx("div",{className:"next swiper-button-disabled sf-hidden",tabIndex:"-1",role:"button","aria-label":"Next slide","aria-controls":"swiper-wrapper-5bcc46949db671105","aria-disabled":"true",children:`
 
 `}),` 
 `,s.jsx("div",{className:"dots swiper-pagination-clickable swiper-pagination-bullets sf-hidden"}),`
 `,s.jsx("span",{className:"swiper-notification sf-hidden","aria-live":"assertive","aria-atomic":"true"})]}),`
 
 `]}),`
 `]})}function Xp(){return s.jsxs("div",{className:"section-showcase not-slide-drag show","data-category":"340",type:"all_products",order:"priceLow",children:[`
 `,s.jsxs("div",{className:"container",children:[`
 `,s.jsxs("div",{className:"section-header",children:[`
 `,s.jsx("h2",{className:"title-section",children:"Telhas"}),`
 `]}),`
 `,s.jsxs("div",{className:"list-product flex f-wrap swiper-container swiper-container-initialized swiper-container-horizontal swiper-container-pointer-events",children:[`
 `,s.jsxs("div",{className:"list-product__items swiper-wrapper",id:"swiper-wrapper-8930379f6e1152e2","aria-live":"off",children:[`
 
 `,s.jsxs("div",{className:"item swiper-slide swiper-slide-active",role:"group","aria-label":"1 / 4",ref:S("width:320px"),children:[`
 
 
 
`,s.jsxs("div",{className:"product upon_request has-secondary-image has-fast-shopping",id:"product-226963905","product-ref":"23155",children:[`
 
 `,s.jsxs("div",{className:"image",children:[`
 
 `,s.jsxs("a",{href:"https://www.atlantanet.com.br/telha/telhas/telha-ondulada-1-53x1-10-6mm-brasilit",className:"space-image",children:[`
 `,s.jsx("img",{loading:"lazy",className:"lazyload loaded",src:"/assets/img-474648c35ca8.webp",alt:"Telha Ondulada 1.53X1.10 6MM - Brasilit","data-ll-status":"loaded"}),`
 `,s.jsx("img",{loading:"lazy",className:"lazyload loaded",src:"/assets/img-5361042f0011.webp",alt:"Telha Ondulada 1.53X1.10 6MM - Brasilit","data-ll-status":"loaded"}),`
 
 `]}),`
 
 
 
 
 
 `,s.jsx("div",{className:"product-tags tags-custom","data-tags-count":"0",children:`
 
 
 
 
 `}),`
 
 `]}),`
 `,s.jsxs("a",{className:"product-info",href:"https://www.atlantanet.com.br/telha/telhas/telha-ondulada-1-53x1-10-6mm-brasilit",children:[`
 `,s.jsxs("div",{className:"wrapper-product-name",children:[`
 `,s.jsx("h3",{className:"product-name",children:`
 Telha Ondulada 1.53X1.10 6MM - Brasilit
 `}),`
 `]}),`
 `,s.jsx("div",{className:"product-price",children:`
 
 
 `}),`
 
 `]}),`
 
 
 
 
 `,s.jsx("div",{className:"actions",children:`
 `}),`
 
 
 `,s.jsxs("div",{className:"buy-whatsapp buy-whatsapp--list-product",children:[`
 `,s.jsxs("a",{href:"https://api.whatsapp.com/send?phone=5511974659658&text=Ol%C3%83%C2%A1,%20gostei%20deste%20produto:%20Nome:%20Telha%20Ondulada%201.53X1.10%206MM%20-%20Brasilit%20|%20Ref:%2023155",target:"_blank",children:[`
 `,s.jsx("i",{className:"icon icon-whatsapp v-align-middle"}),`
 Comprar pelo Whats
 `]}),`
 `]}),`
 
`]})," "]}),`
 `,s.jsxs("div",{className:"item swiper-slide swiper-slide-next",role:"group","aria-label":"2 / 4",ref:S("width:320px"),children:[`
 
 
 
`,s.jsxs("div",{className:"product upon_request has-fast-shopping",id:"product-1954776339","product-ref":"24392",children:[`
 
 `,s.jsxs("div",{className:"image",children:[`
 
 `,s.jsxs("a",{href:"https://www.atlantanet.com.br/telha/telhas/telha-ondulada-pp-perfil-177-2-13x1-10-atco",className:"space-image",children:[`
 `,s.jsx("img",{loading:"lazy",className:"lazyload loaded",src:"/assets/img-1358d618f948.webp",alt:"Telha Ondulada PP Perfil 177 2.13X1.10  - Atco","data-ll-status":"loaded"}),`
 
 `]}),`
 
 
 
 
 
 `,s.jsx("div",{className:"product-tags tags-custom","data-tags-count":"0",children:`
 
 
 
 
 `}),`
 
 `]}),`
 `,s.jsxs("a",{className:"product-info",href:"https://www.atlantanet.com.br/telha/telhas/telha-ondulada-pp-perfil-177-2-13x1-10-atco",children:[`
 `,s.jsxs("div",{className:"wrapper-product-name",children:[`
 `,s.jsx("h3",{className:"product-name",children:`
 Telha Ondulada PP Perfil 177 2.13X1.10 - Atco
 `}),`
 `]}),`
 `,s.jsx("div",{className:"product-price",children:`
 
 
 `}),`
 
 `]}),`
 
 
 
 
 `,s.jsx("div",{className:"actions",children:`
 `}),`
 
 
 `,s.jsxs("div",{className:"buy-whatsapp buy-whatsapp--list-product",children:[`
 `,s.jsxs("a",{href:"https://api.whatsapp.com/send?phone=5511974659658&text=Ol%C3%83%C2%A1,%20gostei%20deste%20produto:%20Nome:%20Telha%20Ondulada%20PP%20Perfil%20177%202.13X1.10%20%20-%20Atco%20|%20Ref:%2024392",target:"_blank",children:[`
 `,s.jsx("i",{className:"icon icon-whatsapp v-align-middle"}),`
 Comprar pelo Whats
 `]}),`
 `]}),`
 
`]})," "]}),`
 `,s.jsxs("div",{className:"item swiper-slide",role:"group","aria-label":"3 / 4",ref:S("width:320px"),children:[`
 
 
 
`,s.jsxs("div",{className:"product upon_request has-fast-shopping",id:"product-567302461","product-ref":"32323",children:[`
 
 `,s.jsxs("div",{className:"image",children:[`
 
 `,s.jsxs("a",{href:"https://www.atlantanet.com.br/telha/telhas/telha-eco-classica-vermelha-2-00x0-95m-onduline",className:"space-image",children:[`
 `,s.jsx("img",{loading:"lazy",className:"lazyload loaded",src:"/assets/img-f2c6fc054d7b.webp",alt:"Telha Eco Clássica Vermelha 2,00X0,95M - Onduline","data-ll-status":"loaded"}),`
 
 `]}),`
 
 
 
 
 
 `,s.jsx("div",{className:"product-tags tags-custom","data-tags-count":"0",children:`
 
 
 
 
 `}),`
 
 `]}),`
 `,s.jsxs("a",{className:"product-info",href:"https://www.atlantanet.com.br/telha/telhas/telha-eco-classica-vermelha-2-00x0-95m-onduline",children:[`
 `,s.jsxs("div",{className:"wrapper-product-name",children:[`
 `,s.jsx("h3",{className:"product-name",children:`
 Telha Eco Clássica Vermelha 2,00X0,95M - Onduline
 `}),`
 `]}),`
 `,s.jsx("div",{className:"product-price",children:`
 
 
 `}),`
 
 `]}),`
 
 
 
 
 `,s.jsx("div",{className:"actions",children:`
 `}),`
 
 
 `,s.jsxs("div",{className:"buy-whatsapp buy-whatsapp--list-product",children:[`
 `,s.jsxs("a",{href:"https://api.whatsapp.com/send?phone=5511974659658&text=Ol%C3%83%C2%A1,%20gostei%20deste%20produto:%20Nome:%20Telha%20Eco%20Cl%C3%83%C2%A1ssica%20Vermelha%202,00X0,95M%20-%20Onduline%20|%20Ref:%2032323",target:"_blank",children:[`
 `,s.jsx("i",{className:"icon icon-whatsapp v-align-middle"}),`
 Comprar pelo Whats
 `]}),`
 `]}),`
 
`]})," "]}),`
 `,s.jsxs("div",{className:"item swiper-slide",role:"group","aria-label":"4 / 4",ref:S("width:320px"),children:[`
 
 
 
`,s.jsxs("div",{className:"product upon_request has-fast-shopping",id:"product-933549767","product-ref":"31624",children:[`
 
 `,s.jsxs("div",{className:"image",children:[`
 
 `,s.jsxs("a",{href:"https://www.atlantanet.com.br/telha/telhas/telha-ecologica-stilo-2-00x0-96m-verde-onduline",className:"space-image",children:[`
 `,s.jsx("img",{loading:"lazy",className:"lazyload loaded",src:"/assets/img-561880e52bde.webp",alt:"Telha Ecológica Stilo 2,00X0,96M Verde - Onduline","data-ll-status":"loaded"}),`
 
 `]}),`
 
 
 
 
 
 `,s.jsx("div",{className:"product-tags tags-custom","data-tags-count":"0",children:`
 
 
 
 
 `}),`
 
 `]}),`
 `,s.jsxs("a",{className:"product-info",href:"https://www.atlantanet.com.br/telha/telhas/telha-ecologica-stilo-2-00x0-96m-verde-onduline",children:[`
 `,s.jsxs("div",{className:"wrapper-product-name",children:[`
 `,s.jsx("h3",{className:"product-name",children:`
 Telha Ecológica Stilo 2,00X0,96M Verde - Onduline
 `}),`
 `]}),`
 `,s.jsx("div",{className:"product-price",children:`
 
 
 `}),`
 
 `]}),`
 
 
 
 
 `,s.jsx("div",{className:"actions",children:`
 `}),`
 
 
 `,s.jsxs("div",{className:"buy-whatsapp buy-whatsapp--list-product",children:[`
 `,s.jsxs("a",{href:"https://api.whatsapp.com/send?phone=5511974659658&text=Ol%C3%83%C2%A1,%20gostei%20deste%20produto:%20Nome:%20Telha%20Ecol%C3%83%C2%B3gica%20Stilo%202,00X0,96M%20Verde%20-%20Onduline%20|%20Ref:%2031624",target:"_blank",children:[`
 `,s.jsx("i",{className:"icon icon-whatsapp v-align-middle"}),`
 Comprar pelo Whats
 `]}),`
 `]}),`
 
`]})," "]}),`
 `]}),`
 
 `,s.jsx("div",{className:"prev swiper-button-disabled sf-hidden",tabIndex:"-1",role:"button","aria-label":"Previous slide","aria-controls":"swiper-wrapper-8930379f6e1152e2","aria-disabled":"true",children:`
 
 `}),`
 `,s.jsx("div",{className:"next swiper-button-disabled sf-hidden",tabIndex:"-1",role:"button","aria-label":"Next slide","aria-controls":"swiper-wrapper-8930379f6e1152e2","aria-disabled":"true",children:`
 
 `}),` 
 `,s.jsx("div",{className:"dots swiper-pagination-clickable swiper-pagination-bullets sf-hidden"}),`
 `,s.jsx("span",{className:"swiper-notification sf-hidden","aria-live":"assertive","aria-atomic":"true"})]}),`
 `]}),`
 `]})}function qp(){return s.jsxs("main",{className:"site-main",children:[`
 
 
 `,s.jsx("div",{className:"slider_parameters d-none hidden hide","data-quantity-desktop":"4","data-quantity-mobile":"2"}),`
 
 `,s.jsx(Lp,{}),`
 
`,s.jsx(Ap,{}),`
 `,s.jsx(Vp,{}),`
 
 
 
 
 
 
 
 
 
 `,s.jsx(Hp,{}),`
 
 
 
 
 
 
 
 
 
 
 
 `,s.jsx(Kp,{}),`
 
 
 
 
 
 
 
 
 
 
 
 `,s.jsx(Xp,{}),`
 
 
 `,s.jsx(Fp,{}),`
 
 
 
 
 
 
 
 
 
 
 `,s.jsx(Wp,{}),`
 
 
 
 
 
 
 
 
 
 
 `,s.jsx(Qp,{}),`
 
 `,s.jsx(Mp,{}),`
 `,s.jsx(Ip,{}),`

`,s.jsx(Dp,{}),`
 
 
 
 
 
 
 
 
 `,s.jsx(Gp,{}),`
 
 
 `,s.jsx($p,{}),`
 
`,s.jsx(Bp,{}),`

 
 `,s.jsx(Up,{}),` 
 `,s.jsx(Rp,{}),`
 `,s.jsx(Op,{}),`
 
 
 `]})}function Yp(){return s.jsxs("div",{id:"menu-mobile",className:"menu-mobile",children:[`
 `,s.jsxs("div",{className:"close-box close-overlay",children:[`
 `,s.jsx("i",{className:"icon icon-times"}),`
 `]}),`
 `,s.jsxs("div",{className:"block-title flex align-center",children:[`
 `,s.jsx("div",{className:"header-menu sf-hidden",children:`
 
 
 
 `}),`
 Menu
 `]}),`
 `,s.jsxs("form",{className:"bf-menu-search",action:"#",children:[s.jsx("input",{type:"search",placeholder:"O que deseja procurar?","aria-label":"Buscar produtos"}),s.jsx("button",{type:"submit","aria-label":"Buscar",children:s.jsx("i",{className:"icon icon-search"})})]}),s.jsxs("div",{className:"nav-mobile-wrapper",children:[`
 `,s.jsxs("nav",{className:"nav-mobile",children:[` 
 `,s.jsxs("ul",{className:"list first-level",children:[`
 
 `,s.jsxs("li",{children:[`
 `,s.jsxs("a",{href:"#/categoria/cimento",children:[`
 `,s.jsx("div",{className:"category-image",children:s.jsx("img",{src:"/assets/bf-icon-cimento.svg",alt:"Cimento",width:"20",height:"20"})}),`
 Cimento
 `]}),`
 `]}),`
 
 `,s.jsxs("li",{children:[`
 `,s.jsxs("a",{href:"#/categoria/areia",children:[`
 `,s.jsx("div",{className:"category-image",children:s.jsx("img",{src:"/assets/bf-icon-areia.svg",alt:"Areia",width:"20",height:"20"})}),`
 Areia
 `]}),`
 `]}),`
 
 `,s.jsxs("li",{children:[`
 `,s.jsxs("a",{href:"#/categoria/ferro",children:[`
 `,s.jsx("div",{className:"category-image",children:s.jsx("img",{src:"/assets/bf-icon-ferro.svg",alt:"Ferro",width:"20",height:"20"})}),`
 Ferro
 `]}),`
 `]}),`
 
 `,s.jsxs("li",{children:[`
 `,s.jsxs("a",{href:"#/categoria/eletrica",children:[`
 `,s.jsx("div",{className:"category-image",children:s.jsx("img",{src:"/assets/bf-icon-eletrica.svg",alt:"Elétrica",width:"20",height:"20"})}),`
 Elétrica
 `]}),`
 `]}),`
 
 `,s.jsxs("li",{children:[`
 `,s.jsxs("a",{href:"#/categoria/hidraulica",children:[`
 `,s.jsx("div",{className:"category-image",children:s.jsx("img",{src:"/assets/bf-icon-hidraulica.svg",alt:"Hidráulica",width:"20",height:"20"})}),`
 Hidráulica
 `]}),`
 `]}),`
 
 `,`
 
 `,s.jsxs("li",{children:[`
 `,s.jsxs("a",{href:"#/categoria/telhas",children:[`
 `,s.jsx("div",{className:"category-image",children:s.jsx("img",{src:"/assets/bf-icon-telhas.svg",alt:"Telhas",width:"20",height:"20"})}),`
 Telhas
 `]}),`
 `]}),`
 
 `,s.jsxs("li",{children:[`
 `,s.jsxs("a",{href:"#/categoria/tintas",children:[`
 `,s.jsx("div",{className:"category-image",children:s.jsx("img",{src:"/assets/bf-icon-tintas.svg",alt:"Tintas",width:"20",height:"20"})}),`
 Tintas
 `]}),`
 `]}),`
 
 `]}),` 
 `]}),`
 `]}),`
 `,s.jsxs("div",{className:"menu-mobile-actions",children:[`
 `,s.jsxs("a",{className:"bf-menu-wpp",href:"https://wa.me/5511974659658",target:"_blank",rel:"noopener noreferrer",children:[s.jsx("i",{className:"icon icon-whatsapp"})," Comprar pelo WhatsApp"]}),`
 `,s.jsxs("ul",{className:"menu-actions-mobile__contact",children:[`
 `,s.jsx("li",{className:"wpp-mobile hidden sf-hidden",children:`
 
 
 
 
 
 
 `}),`
 
 `,s.jsx("li",{className:"hidden sf-hidden",children:`
 
 `}),`
 
 `,`
 `,`
 `]}),`
 `]}),`
`]})}function Zp(){const e=["Parcelamos suas compras em até 6x sem juros","Compre pelo whatsapp","Loja especializada, mais de 20 anos no mercado."];return s.jsxs("div",{className:"message-top active-slide",children:[`
 `,s.jsxs("div",{className:"swiper-container swiper-container-horizontal",children:[`
 `,s.jsx("div",{className:"swiper-wrapper message-top__content","aria-live":"off",children:e.map(n=>s.jsxs("div",{className:"item swiper-slide",role:"group",children:[`
 `,s.jsxs("a",{href:"javascript:void(0)","aria-label":n,children:[`
 `,n,`
 `]}),`
 `]},n))}),`
 `,s.jsx("div",{className:"prev sf-hidden",tabIndex:"0",role:"button","aria-label":"Previous slide"}),`
 `,s.jsx("div",{className:"next sf-hidden",tabIndex:"0",role:"button","aria-label":"Next slide"}),`
 `,s.jsx("div",{className:"dots"}),`
 `,s.jsx("span",{className:"swiper-notification sf-hidden","aria-live":"assertive","aria-atomic":"true"})]}),`
`]})}function Jp(){return s.jsxs("div",{className:"application",children:[`
 
 
`,s.jsx(Yp,{}),` 
`,s.jsx(Zp,{}),`
`,s.jsx("div",{className:"header-info sf-hidden",children:`
 
`}),`
`,s.jsx(bp,{}),`
 `,s.jsx(qp,{}),`
 
`,s.jsx(Tp,{}),`
 
 `]})}function ef(){return s.jsxs("div",{className:"cart",children:[`
 `,s.jsx("div",{className:"cart-backdrop"}),`
 `,s.jsxs("section",{id:"cart",className:"dropdown cart__dropdown","aria-label":"Carrinho",children:[`
 `,s.jsxs("div",{className:"cart__vue js-vue-cart",children:[s.jsxs("div",{className:"cart__vue__header",children:[s.jsxs("div",{className:"cart__vue__icon",children:[s.jsx("i",{className:"icon icon-arrow-left"}),`
 Fechar 
 `]})," ",s.jsx("div",{className:"cart__vue__text",children:s.jsx("span",{children:"Carrinho de Compras"})})]})," ",s.jsx("div",{className:"dropdown__content",children:s.jsx("div",{className:"cart__empty",children:s.jsx("p",{children:`
 Seu carrinho está vazio.
 `})})})," ",s.jsx("div",{className:"dropdown__footer align-center",children:s.jsx("p",{children:"Adicione produtos ao carrinho e eles aparecerão aqui."})})]}),`
 `]}),`
`]})}function nf(){return s.jsxs("div",{role:"dialog","aria-live":"polite","aria-label":"cookieconsent","aria-describedby":"cookieconsent:desc",className:"cc-window cc-banner cc-type-info cc-theme-block cc-bottom cc-color-override-1834562721",children:[s.jsxs("span",{id:"cookieconsent:desc",className:"cc-message",children:["            Utilizamos Cookies para garantir que você obtenha a melhor experiência em nosso site. ",s.jsx("a",{"aria-label":"learn more about cookies",role:"button",tabIndex:"0",className:"cc-link",href:"https://https//www.atlantanet.com.br/privacidade",target:"_blank",children:"Política de privacidade!"})]}),s.jsx("div",{className:"cc-compliance",children:s.jsx("a",{"aria-label":"dismiss cookie message",role:"button",tabIndex:"0",className:"cc-btn cc-dismiss",children:"OK"})})]})}const tf="modulepreload",rf=function(e){return"/"+e},Ui={},sf=function(n,t,r){let a=Promise.resolve();if(t&&t.length>0){document.getElementsByTagName("link");const i=document.querySelector("meta[property=csp-nonce]"),o=(i==null?void 0:i.nonce)||(i==null?void 0:i.getAttribute("nonce"));a=Promise.allSettled(t.map(c=>{if(c=rf(c),c in Ui)return;Ui[c]=!0;const d=c.endsWith(".css"),g=d?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${c}"]${g}`))return;const h=document.createElement("link");if(h.rel=d?"stylesheet":tf,d||(h.as="script"),h.crossOrigin="",h.href=c,o&&h.setAttribute("nonce",o),document.head.appendChild(h),d)return new Promise((m,w)=>{h.addEventListener("load",m),h.addEventListener("error",()=>w(new Error(`Unable to preload CSS for ${c}`)))})}))}function l(i){const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=i,window.dispatchEvent(o),!o.defaultPrevented)throw i}return a.then(i=>{for(const o of i||[])o.status==="rejected"&&l(o.reason);return n().catch(l)})};function af(){return Va.useEffect(()=>{sf(()=>import("./interactive-Cq4_xXsm.js"),[]).then(e=>e.initInteractive())},[]),null}function lf(){return s.jsxs(s.Fragment,{children:[s.jsxs("div",{children:[`
 `,s.jsx("input",{type:"checkbox",id:"alert-show",defaultValue:"on",className:"sf-hidden"}),`
`,s.jsx("div",{className:"box-alerts sf-hidden",children:`
 
`})," "]}),s.jsx("div",{className:"site-lgpd sf-hidden",children:`
 
 
 `}),s.jsx("div",{className:"modal fade sf-hidden",id:"modal",tabIndex:"-1",role:"dialog","aria-labelledby":"myModalLabel1","aria-hidden":"true",children:`
 
`}),s.jsx("div",{"data-module":"render","data-render":"snippets/cart_preview",className:"sf-hidden",children:s.jsx("div",{className:"modal cart-preview sf-hidden","data-module":"cartPreview","data-cart-preview":"modal",tabIndex:"-1",role:"dialog","aria-labelledby":"myModalLabel","aria-hidden":"true",children:`
 
`})}),s.jsx("div",{className:"modal fade sf-hidden",id:"modal-form",tabIndex:"-1",role:"dialog","aria-labelledby":"myModalLabel2","aria-hidden":"true",children:`
 
`}),s.jsx("iframe",{id:"modal-form-iframe",height:"0",width:"0",frameBorder:"0",marginWidth:"0",marginHeight:"0",ref:S("display:none")})]})}function of(){return s.jsxs(s.Fragment,{children:[s.jsx(nf,{}),s.jsx(ef,{}),s.jsx("div",{className:"overlay-shadow"}),s.jsx(Jp,{}),s.jsx(lf,{}),s.jsx(af,{})]})}const df="https://docs.google.com/spreadsheets/d/e/2PACX-1vTcM837zqsyDwbQ1j9ILkaTGZCtsyt796NcxKJ_0Ed9FcqTo2HaG0gr_jj2U4xcslxm-jt7KRlxSplw/pub?gid=665645625&single=true&output=csv",pf="https://docs.google.com/spreadsheets/d/e/2PACX-1vTcM837zqsyDwbQ1j9ILkaTGZCtsyt796NcxKJ_0Ed9FcqTo2HaG0gr_jj2U4xcslxm-jt7KRlxSplw/pub?gid=595172747&single=true&output=csv",ff={lat:-23.7169,lng:-46.8492},mf=100,hf="https://script.google.com/macros/s/AKfycbwwuNgFh7gKDJR4a5qlI0tJk-9GzfBQwkDOPFworoR6vCscLRxr5hWYAGIGm0bGA7cE/exec",cf="GTM-WDCQBGWX";function uf(){window.dataLayer=window.dataLayer||[],window.dataLayer.push({"gtm.start":new Date().getTime(),event:"gtm.js"});const e=()=>{const n=document.createElement("script");n.async=!0,n.src=`https://www.googletagmanager.com/gtm.js?id=${encodeURIComponent(cf)}`,document.head.appendChild(n)};document.readyState==="complete"?e():window.addEventListener("load",e,{once:!0})}uf();document.documentElement.classList.add("bf-loading");setTimeout(()=>document.documentElement.classList.remove("bf-loading"),6e3);"scrollRestoration"in history&&(history.scrollRestoration="manual");tu(document.getElementById("root")).render(s.jsx(of,{}));export{df as C,mf as F,ff as L,hf as P,pf as a};
