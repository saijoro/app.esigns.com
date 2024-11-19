import{defaultTransformer as c,isRedirect as h,isNotFound as m}from"@tanstack/react-router";import g from"tiny-invariant";import{H3Event as f,getResponseStatus as _,getRequestURL as C,getRequestWebStream as E,eventHandler as q}from"h3";import{getContext as N}from"unctx";import{AsyncLocalStorage as A}from"node:async_hooks";function F(e){let n;const t=R(e),s={duplex:"half",method:e.method,headers:e.headers};return e.node.req.body instanceof ArrayBuffer?new Request(t,{...s,body:e.node.req.body}):new Request(t,{...s,get body(){return n||(n=W(e),n)}})}function L(e){return e.web??={request:F(e),url:R(e)},e.web.request}function H(){return S()}const w=Symbol("$HTTPEvent");function O(e){return typeof e=="object"&&(e instanceof f||e?.[w]instanceof f||e?.__is_event__===!0)}function l(e){return function(...n){let t=n[0];if(O(t))n[0]=t instanceof f||t.__is_event__?t:t[w];else{if(!globalThis.app.config.server.experimental?.asyncContext)throw new Error("AsyncLocalStorage was not enabled. Use the `server.experimental.asyncContext: true` option in your app configuration to enable it. Or, pass the instance of HTTPEvent that you have as the first argument to the function.");if(t=H(),!t)throw new Error("No HTTPEvent found in AsyncLocalStorage. Make sure you are using the function within the server runtime.");n.unshift(t)}return e(...n)}}const R=l(C),P=l(_),W=l(E);function I(){return N("nitro-app",{asyncContext:!!globalThis.app.config.server.experimental?.asyncContext,AsyncLocalStorage:A})}function S(){return I().use().event}function U(e){return globalThis.MANIFEST[e]}const G=q(j);async function j(e){return J(L(e))}async function J(e,n){var t,s;const p=e.method,T=new URL(e.url,"http://localhost:3000"),a=Object.fromEntries(T.searchParams.entries()),i=a._serverFnId,d=a._serverFnName;if(!i||!d)throw new Error("Invalid request");g(typeof i=="string","Invalid server action");const b=(s=await((t=U("server").chunks[i])==null?void 0:t.import()))==null?void 0:s[d],u=await(async()=>{try{const r=await(async()=>{var y;if((y=e.headers.get("Content-Type"))!=null&&y.includes("multipart/form-data"))return g(p.toLowerCase()!=="get","GET requests with FormData payloads are not supported"),await e.formData();if(p.toLowerCase()==="get")return a.payload?c.parse(a.payload):void 0;const x=await e.text();return c.parse(x)})(),o=await b(r);return o instanceof Response?o:h(o)||m(o)?v(o):new Response(o!==void 0?c.stringify(o):void 0,{status:P(S()),headers:{"Content-Type":"application/json"}})}catch(r){return r instanceof Response?r:h(r)||m(r)?v(r):(console.error("Server Fn Error!"),console.error(r),console.info(),new Response(JSON.stringify(r),{status:500,headers:{"Content-Type":"application/json"}}))}})();if(u.headers.get("Content-Type")==="application/json"){const o=await u.clone().text();o&&JSON.stringify(JSON.parse(o))}return u}function v(e){const{headers:n,...t}=e;return new Response(JSON.stringify(t),{status:200,headers:{"Content-Type":"application/json",...e.headers||{}}})}export{G as default};