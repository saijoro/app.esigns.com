import{H3Event as T,getRequestURL as ee,getResponseHeaders as te,getRequestWebStream as re,eventHandler as ne}from"h3";import{getContext as oe}from"unctx";import{AsyncLocalStorage as se}from"node:async_hooks";import{isPlainArray as ae,isPlainObject as k,defer as ue,useRouter as g,pick as ie,ScriptOnce as $,createControlledPromise as ce,RouterProvider as le,createMemoryHistory as de,useRouterState as R,createRootRouteWithContext as pe,Outlet as me,ScrollRestoration as he,createFileRoute as p,lazyRouteComponent as m,createRouter as fe}from"@tanstack/react-router";import{jsxs as f,Fragment as _,jsx as i}from"react/jsx-runtime";import*as S from"react";import{createElement as W,createContext as _e,useState as ye}from"react";import x from"jsesc";import ge from"tiny-invariant";import{Transform as Re,PassThrough as Se}from"node:stream";import{isbot as A}from"isbot";import b from"react-dom/server";import{Context as D}from"@tanstack/react-cross-context";import{QueryClient as xe}from"@tanstack/react-query";import{routerWithQueryClient as be}from"@tanstack/react-router-with-query";function ve(e,r,t){if(!t.router.isServer)return r;t.match.extracted=t.match.extracted||[];const n=t.match.extracted;return w(r,(s,a)=>{const u=s instanceof ReadableStream?"stream":s instanceof Promise?"promise":void 0;if(u){const c={dataType:e,type:u,path:a,id:n.length,value:s,matchIndex:t.match.index};if(n.push(c),u==="stream"){const[l,d]=s.tee();return c.streamState=Pe({stream:d}),l}else ue(s)}return s})}function Ce(e){const r=g(),t=r.state.matches[e.matchIndex];if(!r.isServer)return null;const n=t.extracted,[o,s]=["__beforeLoadContext","loaderData"].map(a=>n?n.reduce((u,c)=>c.dataType!==a?P(u,["temp",...c.path],void 0):u,{temp:t[a]}).temp:t[a]);if(o!==void 0||s!==void 0||n?.length){const a=`__TSR__.initMatch(${x({index:e.matchIndex,__beforeLoadContext:r.options.transformer.stringify(o),loaderData:r.options.transformer.stringify(s),extracted:n?Object.fromEntries(n.map(u=>[u.id,ie(u,["type","path"])])):{}},{isScriptContext:!0,wrap:!0,json:!0})})`;return f(_,{children:[i($,{children:a}),n?n.map(u=>u.type==="stream"?i(we,{entry:u},u.id):i(Te,{entry:u},u.id)):null]})}return null}function w(e,r,t=[]){if(ae(e))return e.map((o,s)=>w(o,r,[...t,`${s}`]));if(k(e)){const o={};for(const s in e)o[s]=w(e[s],r,[...t,s]);return o}const n=r(e,t);return n!==e?n:e}function Te({entry:e}){return i("div",{className:"tsr-once",children:i(S.Suspense,{fallback:null,children:i($e,{entry:e})})})}function $e({entry:e}){const r=g();if(e.value.status==="pending")throw e.value;const t=`__TSR__.resolvePromise(${x(e,{isScriptContext:!0,wrap:!0,json:!0})})`;return r.injectScript(t),i(_,{})}function we({entry:e}){ge(e.streamState,"StreamState should be defined");const r=g();return i(B,{streamState:e.streamState,children:t=>{const n=t?`__TSR__.matches[${e.matchIndex}].extracted[${e.id}].value.controller.enqueue(new TextEncoder().encode(${x(t.toString(),{isScriptContext:!0,wrap:!0,json:!0})}))`:`__TSR__.matches[${e.matchIndex}].extracted[${e.id}].value.controller.close()`;return r.injectScript(n),i(_,{})}})}function Pe({stream:e}){const r={promises:[]},t=e.getReader(),n=o=>(r.promises[o]=ce(),t.read().then(({done:s,value:a})=>{if(s){r.promises[o].resolve(null),t.releaseLock();return}return r.promises[o].resolve(a),n(o+1)}));return n(0).catch(o=>{console.error("stream read error",o)}),r}function B({streamState:e,children:r,__index:t=0}){const n=e.promises[t];if(!n)return null;if(n.status==="pending")throw n;const o=n.value;return f(_,{children:[r(o),i("div",{className:"tsr-once",children:i(S.Suspense,{fallback:null,children:i(B,{streamState:e,__index:t+1,children:r})})})]})}function P(e,r,t){if(r.length===0)return t;const[n,...o]=r;return Array.isArray(e)?e.map((s,a)=>a===Number(n)?P(s,o,t):s):k(e)?{...e,[n]:P(e[n],o,t)}:e}function I(e){e.router.AfterEachMatch=Ce,e.router.serializer=n=>x(n,{isScriptContext:!0,wrap:!0,json:!0});const r=D.get("TanStackRouterHydrationContext",{}),t=S.useMemo(()=>{var n,o;return{router:e.router.dehydrate(),payload:(o=(n=e.router.options).dehydrate)==null?void 0:o.call(n)}},[e.router]);return i(r.Provider,{value:t,children:i(le,{router:e.router})})}function He(e){let r;const t=F(e),n={duplex:"half",method:e.method,headers:e.headers};return e.node.req.body instanceof ArrayBuffer?new Request(t,{...n,body:e.node.req.body}):new Request(t,{...n,get body(){return r||(r=Ie(e),r)}})}function Ee(e){return e.web??={request:He(e),url:F(e)},e.web.request}function Le(){return ke()}const N=Symbol("$HTTPEvent");function Me(e){return typeof e=="object"&&(e instanceof T||e?.[N]instanceof T||e?.__is_event__===!0)}function H(e){return function(...r){let t=r[0];if(Me(t))r[0]=t instanceof T||t.__is_event__?t:t[N];else{if(!globalThis.app.config.server.experimental?.asyncContext)throw new Error("AsyncLocalStorage was not enabled. Use the `server.experimental.asyncContext: true` option in your app configuration to enable it. Or, pass the instance of HTTPEvent that you have as the first argument to the function.");if(t=Le(),!t)throw new Error("No HTTPEvent found in AsyncLocalStorage. Make sure you are using the function within the server runtime.");r.unshift(t)}return e(...r)}}const F=H(ee),Ae=H(te),Ie=H(re);function qe(){return oe("nitro-app",{asyncContext:!!globalThis.app.config.server.experimental?.asyncContext,AsyncLocalStorage:se})}function ke(){return qe().use().event}function We(e){return e instanceof Headers?new Headers(e):Array.isArray(e)?new Headers(e):typeof e=="object"?new Headers(e):new Headers}function q(...e){return e.reduce((r,t)=>{const n=We(t);for(const[o,s]of n.entries())r.set(o,s);return r},new Headers)}function De({createRouter:e,getRouterManifest:r}){return t=>ne(async n=>{const o=Ee(n),s=new URL(o.url),a=s.href.replace(s.origin,""),u=de({initialEntries:[a]}),c=e();c.serializeLoaderData=ve,r&&(c.manifest=r()),c.update({history:u}),await c.load();const l=Be({event:n,router:c});return await t({request:o,router:c,responseHeaders:l})})}function Be(e){e.event.__tsrHeadersSent=!0;let r=q(Ae(e.event),{"Content-Type":"text/html; charset=UTF-8"},...e.router.state.matches.map(n=>n.headers));const{redirect:t}=e.router.state;return t&&(r=q(r,t.headers,{Location:t.href})),r}function Ne(e){const r=O(()=>e.injectedHtml.map(t=>t()).join(""));return new Re({transform(t,n,o){r.transform(t,this.push.bind(this)).then(()=>o()).catch(s=>o(s))},flush(t){r.flush(this.push.bind(this)).then(()=>t()).catch(n=>t(n))}})}function Fe(e){const r=O(()=>e.injectedHtml.map(n=>n()).join("")),t=new TextEncoder;return new TransformStream({transform(n,o){return r.transform(n,s=>(o.enqueue(t.encode(s)),!0))},flush(n){return r.flush(o=>(n.enqueue(o),!0))}})}const Oe=/(<body)/,je=/(<\/body>)/,Ue=/(<\/html>)/,ze=/(<\/[a-zA-Z][\w:.-]*?>)/g,Qe=new TextDecoder;function O(e){let r=!1,t="",n="";return{async transform(o,s){const a=t+Qe.decode(o),u=a.match(Oe),c=a.match(je),l=a.match(Ue);try{if(u&&(r=!0),!r){s(a),t="";return}const d=e();if(c&&l&&c.index<l.index){const h=c.index+c[0].length,y=l.index+l[0].length,C=a.slice(0,h)+d+a.slice(h,y)+a.slice(y);s(C),t=""}else{let h,y=0;for(;(h=ze.exec(a))!==null;)y=h.index+h[0].length;if(y>0){const C=a.slice(0,y)+d+n;s(C),t=a.slice(y)}else t=a,n+=d}}catch(d){throw console.error("Error transforming HTML:",d),d}},async flush(o){t&&o(t)}}}const Ve=async({request:e,router:r,responseHeaders:t})=>{if(typeof b.renderToReadableStream=="function"){const n=await b.renderToReadableStream(i(I,{router:r}),{signal:e.signal});A(e.headers.get("User-Agent"))&&await n.allReady;const s=[Fe(r)].reduce((a,u)=>a.pipeThrough(u),n);return new Response(s,{status:r.state.statusCode,headers:t})}if(typeof b.renderToPipeableStream=="function"){const n=new Se,o=b.renderToPipeableStream(i(I,{router:r}),{...A(e.headers.get("User-Agent"))?{onAllReady(){o.pipe(n)}}:{onShellReady(){o.pipe(n)}},onError:(u,c)=>{console.log("Error in renderToPipeableStream:",u,c)}}),a=[Ne(r)].reduce((u,c)=>u.pipe(c),n);return new Response(a,{status:r.state.statusCode,headers:t})}throw new Error("No renderToReadableStream or renderToPipeableStream found in react-dom/server. Ensure you are using a version of react-dom that supports streaming.")},Je=()=>({routes:{__root__:{filePath:"__root.tsx",children:["/_auth","/_layout"],preloads:["/_build/assets/client-BQP1dN-M.js","/_build/assets/client-Bf6frvx6.js"]},"/_auth":{filePath:"_auth.tsx",children:["/_auth/signin","/_auth/signup","/_auth/verify"]},"/_layout":{filePath:"_layout.tsx",children:["/_layout/_sub-layout","/_layout/dashboard"]},"/_auth/signin":{filePath:"_auth/signin.tsx",parent:"/_auth"},"/_auth/signup":{filePath:"_auth/signup.tsx",parent:"/_auth"},"/_auth/verify":{filePath:"_auth/verify.tsx",parent:"/_auth"},"/_layout/_sub-layout":{filePath:"_layout/_sub-layout.tsx",parent:"/_layout",children:["/_layout/_sub-layout/create-document","/_layout/_sub-layout/"]},"/_layout/dashboard":{filePath:"_layout/dashboard.tsx",parent:"/_layout"},"/_layout/_sub-layout/create-document":{filePath:"_layout/_sub-layout/create-document.tsx",parent:"/_layout/_sub-layout"},"/_layout/_sub-layout/":{filePath:"_layout/_sub-layout/index.tsx",parent:"/_layout/_sub-layout"}}});function Ge(e){return globalThis.MANIFEST[e]}function Ye(){const e=Je(),r=e.routes.__root__=e.routes.__root__||{};r.assets=r.assets||[];const t=Ge("client");return r.assets.push({tag:"script",attrs:{src:t.inputs[t.handler]?.output.path,type:"module",async:!0,suppressHydrationWarning:!0}}),e}function Ze(){const e=Ye();return{...e,routes:Object.fromEntries(Object.entries(e.routes).map(([r,t])=>{const{preloads:n,assets:o}=t;return[r,{preloads:n,assets:o}]}))}}function j({tag:e,attrs:r,children:t}){switch(e){case"title":return i("title",{...r,suppressHydrationWarning:!0,children:t});case"meta":return i("meta",{...r,suppressHydrationWarning:!0});case"link":return i("link",{...r,suppressHydrationWarning:!0});case"style":return i("style",{...r,dangerouslySetInnerHTML:{__html:t}});case"script":return r&&r.src?i("script",{...r,suppressHydrationWarning:!0}):typeof t=="string"?i("script",{...r,dangerouslySetInnerHTML:{__html:t},suppressHydrationWarning:!0}):null;default:return null}}const Ke=()=>{const e=g(),r=R({select:s=>s.matches.map(a=>a.meta).filter(Boolean)}),t=S.useMemo(()=>{const s=[],a={};let u;return[...r].reverse().forEach(c=>{[...c].reverse().forEach(l=>{if(l)if(l.title)u||(u={tag:"title",children:l.title});else{if(l.name){if(a[l.name])return;a[l.name]=!0}s.push({tag:"meta",attrs:{...l}})}})}),u&&s.push(u),s.reverse(),s},[r]),n=R({select:s=>s.matches.map(a=>a.links).filter(Boolean).flat(1).map(a=>({tag:"link",attrs:{...a}})),structuralSharing:!0}),o=R({select:s=>{const a=[];return s.matches.map(u=>e.looseRoutesById[u.routeId]).forEach(u=>{var c,l,d;return(d=(l=(c=e.manifest)==null?void 0:c.routes[u.id])==null?void 0:l.preloads)==null?void 0:d.filter(Boolean).forEach(h=>{a.push({tag:"link",attrs:{rel:"modulepreload",href:h}})})}),a},structuralSharing:!0});return tt([...t,...o,...n],s=>JSON.stringify(s))},Xe=()=>{const e=g(),r=Ke(),t=S.useContext(D.get("TanStackRouterHydrationContext",{}));return f(_,{children:[r.map((n,o)=>W(j,{...n,key:`tsr-meta-${JSON.stringify(n)}`})),f(_,{children:[i($,{log:!1,children:'__TSR__={matches:[],streamedValues:{},queue:[],runQueue:()=>{let e=!1;__TSR__.queue=__TSR__.queue.filter((_=>!_()||(e=!0,!1))),e&&__TSR__.runQueue()},initMatch:e=>{__TSR__.queue.push((()=>(__TSR__.matches[e.index]||(__TSR__.matches[e.index]=e,Object.entries(e.extracted).forEach((([e,_])=>{if("stream"===_.type){let e;_.value=new ReadableStream({start(_){e=_}}),_.value.controller=e}else if("promise"===_.type){let e,t;_.value=new Promise(((_,u)=>{e=_,t=u})),_.resolve=e,_.reject=t}}))),!0))),__TSR__.runQueue()},resolvePromise:e=>{__TSR__.queue.push((()=>{const _=__TSR__.matches[e.matchIndex];if(_){const t=_.extracted[e.id];if(t)return t.resolve(e.value.data),!0}return!1})),__TSR__.runQueue()},cleanScripts:()=>{document.querySelectorAll(".tsr-once").forEach((e=>{e.remove()}))}};'}),i($,{children:`__TSR__.dehydrated = ${x(e.options.transformer.stringify(t),{isScriptContext:!0,wrap:!0,json:!0})}`})]})]})},et=()=>i(_,{children:Xe()});function tt(e,r){const t=new Set;return e.filter(n=>{const o=r(n);return t.has(o)?!1:(t.add(o),!0)})}const rt=()=>{const e=g(),r=R({select:o=>{const s=[];return o.matches.map(a=>e.looseRoutesById[a.routeId]).forEach(a=>{var u,c,l;return(l=(c=(u=e.manifest)==null?void 0:u.routes[a.id])==null?void 0:c.assets)==null?void 0:l.filter(d=>d.tag==="script").forEach(d=>{s.push({tag:"script",attrs:d.attrs,children:d.children})})}),s},structuralSharing:!0}),{scripts:t}=R({select:o=>({scripts:o.matches.map(s=>s.scripts).filter(Boolean).flat(1).map(({children:s,...a})=>({tag:"script",attrs:{...a,suppressHydrationWarning:!0},children:s}))})}),n=[...t,...r];return i(_,{children:n.map((o,s)=>W(j,{...o,key:`tsr-scripts-${o.tag}-${s}`}))})},nt="/_build/assets/app-Cxs3M0NY.css",ot=_e({counter:0,setCounter:()=>{}}),U=({children:e})=>{const[r,t]=ye(0);return i(ot.Provider,{value:{counter:r,setCounter:t},children:e})},E=pe()({context:()=>U,head:()=>({meta:[{charSet:"utf-8"},{name:"viewport",content:"width=device-width, initial-scale=1"},{title:"Esigns"}]}),component:st});function st(){return i(U,{children:i(at,{children:i(me,{})})})}function at({children:e}){return f("html",{children:[f("head",{children:[i(et,{}),i("link",{rel:"stylesheet",href:nt})]}),f("body",{children:[e,i(he,{}),i(rt,{})]})]})}const ut=()=>import("./_layout-CkL-983h.js"),z=p("/_layout")({component:m(ut,"component",()=>z.ssr)}),it=()=>import("./_auth-f1uqbOnR.js"),Q=p("/_auth")({component:m(it,"component",()=>Q.ssr)}),ct=()=>import("./dashboard-Dj2tCNaX.js"),V=p("/_layout/dashboard")({component:m(ct,"component",()=>V.ssr)}),lt=()=>import("./_sub-layout-Di4dCexN.js"),J=p("/_layout/_sub-layout")({component:m(lt,"component",()=>J.ssr)}),dt=()=>import("./verify-BBx-LOdE.js"),G=p("/_auth/verify")({component:m(dt,"component",()=>G.ssr)}),pt=()=>import("./signup-D_X8D8hj.js"),Y=p("/_auth/signup")({component:m(pt,"component",()=>Y.ssr)}),mt=()=>import("./signin-DDyG763-.js"),Z=p("/_auth/signin")({component:m(mt,"component",()=>Z.ssr)}),ht=()=>import("./index-Ut5lP-GJ.js"),K=p("/_layout/_sub-layout/")({component:m(ht,"component",()=>K.ssr)}),ft=()=>import("./create-document-Bplyobiu.js"),X=p("/_layout/_sub-layout/create-document")({component:m(ft,"component",()=>X.ssr)}),L=z.update({id:"/_layout",getParentRoute:()=>E}),v=Q.update({id:"/_auth",getParentRoute:()=>E}),_t=V.update({id:"/dashboard",path:"/dashboard",getParentRoute:()=>L}),M=J.update({id:"/_sub-layout",getParentRoute:()=>L}),yt=G.update({id:"/verify",path:"/verify",getParentRoute:()=>v}),gt=Y.update({id:"/signup",path:"/signup",getParentRoute:()=>v}),Rt=Z.update({id:"/signin",path:"/signin",getParentRoute:()=>v}),St=K.update({id:"/",path:"/",getParentRoute:()=>M}),xt=X.update({id:"/create-document",path:"/create-document",getParentRoute:()=>M}),bt={AuthSigninRoute:Rt,AuthSignupRoute:gt,AuthVerifyRoute:yt},vt=v._addFileChildren(bt),Ct={LayoutSubLayoutCreateDocumentRoute:xt,LayoutSubLayoutIndexRoute:St},Tt=M._addFileChildren(Ct),$t={LayoutSubLayoutRoute:Tt,LayoutDashboardRoute:_t},wt=L._addFileChildren($t),Pt={AuthRoute:vt,LayoutRoute:wt},Ht=E._addFileChildren(Pt)._addFileTypes(),Et=()=>f("div",{children:[i("h1",{children:"404"}),i("p",{children:"Not Found"})]});function Lt(){const e=new xe;return be(fe({routeTree:Ht,context:{queryClient:e},defaultPreload:"intent",defaultNotFoundComponent:Et}),e)}const Qt=De({createRouter:Lt,getRouterManifest:Ze})(Ve);export{ot as A,Qt as h};
