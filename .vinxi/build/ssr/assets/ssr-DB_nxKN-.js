import{H3Event as T,getRequestURL as te,getResponseHeaders as re,getRequestWebStream as ne,eventHandler as oe}from"h3";import{getContext as se}from"unctx";import{AsyncLocalStorage as ae}from"node:async_hooks";import{isPlainArray as ue,isPlainObject as k,defer as ie,useRouter as g,pick as ce,ScriptOnce as w,createControlledPromise as le,RouterProvider as de,createMemoryHistory as pe,useRouterState as R,createRootRouteWithContext as me,Outlet as he,ScrollRestoration as fe,createFileRoute as p,lazyRouteComponent as m,createRouter as _e}from"@tanstack/react-router";import{jsxs as h,Fragment as _,jsx as i}from"react/jsx-runtime";import*as S from"react";import{createElement as W,createContext as ye,useState as ge}from"react";import b from"jsesc";import Re from"tiny-invariant";import{Transform as Se,PassThrough as be}from"node:stream";import{isbot as I}from"isbot";import x from"react-dom/server";import{Context as D}from"@tanstack/react-cross-context";import{QueryClient as xe}from"@tanstack/react-query";import{routerWithQueryClient as Ce}from"@tanstack/react-router-with-query";import{Toaster as ve}from"sonner";function $e(e,r,t){if(!t.router.isServer)return r;t.match.extracted=t.match.extracted||[];const n=t.match.extracted;return P(r,(s,a)=>{const u=s instanceof ReadableStream?"stream":s instanceof Promise?"promise":void 0;if(u){const c={dataType:e,type:u,path:a,id:n.length,value:s,matchIndex:t.match.index};if(n.push(c),u==="stream"){const[l,d]=s.tee();return c.streamState=Le({stream:d}),l}else ie(s)}return s})}function Te(e){const r=g(),t=r.state.matches[e.matchIndex];if(!r.isServer)return null;const n=t.extracted,[o,s]=["__beforeLoadContext","loaderData"].map(a=>n?n.reduce((u,c)=>c.dataType!==a?H(u,["temp",...c.path],void 0):u,{temp:t[a]}).temp:t[a]);if(o!==void 0||s!==void 0||n?.length){const a=`__TSR__.initMatch(${b({index:e.matchIndex,__beforeLoadContext:r.options.transformer.stringify(o),loaderData:r.options.transformer.stringify(s),extracted:n?Object.fromEntries(n.map(u=>[u.id,ce(u,["type","path"])])):{}},{isScriptContext:!0,wrap:!0,json:!0})})`;return h(_,{children:[i(w,{children:a}),n?n.map(u=>u.type==="stream"?i(He,{entry:u},u.id):i(we,{entry:u},u.id)):null]})}return null}function P(e,r,t=[]){if(ue(e))return e.map((o,s)=>P(o,r,[...t,`${s}`]));if(k(e)){const o={};for(const s in e)o[s]=P(e[s],r,[...t,s]);return o}const n=r(e,t);return n!==e?n:e}function we({entry:e}){return i("div",{className:"tsr-once",children:i(S.Suspense,{fallback:null,children:i(Pe,{entry:e})})})}function Pe({entry:e}){const r=g();if(e.value.status==="pending")throw e.value;const t=`__TSR__.resolvePromise(${b(e,{isScriptContext:!0,wrap:!0,json:!0})})`;return r.injectScript(t),i(_,{})}function He({entry:e}){Re(e.streamState,"StreamState should be defined");const r=g();return i(B,{streamState:e.streamState,children:t=>{const n=t?`__TSR__.matches[${e.matchIndex}].extracted[${e.id}].value.controller.enqueue(new TextEncoder().encode(${b(t.toString(),{isScriptContext:!0,wrap:!0,json:!0})}))`:`__TSR__.matches[${e.matchIndex}].extracted[${e.id}].value.controller.close()`;return r.injectScript(n),i(_,{})}})}function Le({stream:e}){const r={promises:[]},t=e.getReader(),n=o=>(r.promises[o]=le(),t.read().then(({done:s,value:a})=>{if(s){r.promises[o].resolve(null),t.releaseLock();return}return r.promises[o].resolve(a),n(o+1)}));return n(0).catch(o=>{console.error("stream read error",o)}),r}function B({streamState:e,children:r,__index:t=0}){const n=e.promises[t];if(!n)return null;if(n.status==="pending")throw n;const o=n.value;return h(_,{children:[r(o),i("div",{className:"tsr-once",children:i(S.Suspense,{fallback:null,children:i(B,{streamState:e,__index:t+1,children:r})})})]})}function H(e,r,t){if(r.length===0)return t;const[n,...o]=r;return Array.isArray(e)?e.map((s,a)=>a===Number(n)?H(s,o,t):s):k(e)?{...e,[n]:H(e[n],o,t)}:e}function M(e){e.router.AfterEachMatch=Te,e.router.serializer=n=>b(n,{isScriptContext:!0,wrap:!0,json:!0});const r=D.get("TanStackRouterHydrationContext",{}),t=S.useMemo(()=>{var n,o;return{router:e.router.dehydrate(),payload:(o=(n=e.router.options).dehydrate)==null?void 0:o.call(n)}},[e.router]);return i(r.Provider,{value:t,children:i(de,{router:e.router})})}function Ee(e){let r;const t=N(e),n={duplex:"half",method:e.method,headers:e.headers};return e.node.req.body instanceof ArrayBuffer?new Request(t,{...n,body:e.node.req.body}):new Request(t,{...n,get body(){return r||(r=ke(e),r)}})}function Ae(e){return e.web??={request:Ee(e),url:N(e)},e.web.request}function Ie(){return De()}const F=Symbol("$HTTPEvent");function Me(e){return typeof e=="object"&&(e instanceof T||e?.[F]instanceof T||e?.__is_event__===!0)}function L(e){return function(...r){let t=r[0];if(Me(t))r[0]=t instanceof T||t.__is_event__?t:t[F];else{if(!globalThis.app.config.server.experimental?.asyncContext)throw new Error("AsyncLocalStorage was not enabled. Use the `server.experimental.asyncContext: true` option in your app configuration to enable it. Or, pass the instance of HTTPEvent that you have as the first argument to the function.");if(t=Ie(),!t)throw new Error("No HTTPEvent found in AsyncLocalStorage. Make sure you are using the function within the server runtime.");r.unshift(t)}return e(...r)}}const N=L(te),qe=L(re),ke=L(ne);function We(){return se("nitro-app",{asyncContext:!!globalThis.app.config.server.experimental?.asyncContext,AsyncLocalStorage:ae})}function De(){return We().use().event}function Be(e){return e instanceof Headers?new Headers(e):Array.isArray(e)?new Headers(e):typeof e=="object"?new Headers(e):new Headers}function q(...e){return e.reduce((r,t)=>{const n=Be(t);for(const[o,s]of n.entries())r.set(o,s);return r},new Headers)}function Fe({createRouter:e,getRouterManifest:r}){return t=>oe(async n=>{const o=Ae(n),s=new URL(o.url),a=s.href.replace(s.origin,""),u=pe({initialEntries:[a]}),c=e();c.serializeLoaderData=$e,r&&(c.manifest=r()),c.update({history:u}),await c.load();const l=Ne({event:n,router:c});return await t({request:o,router:c,responseHeaders:l})})}function Ne(e){e.event.__tsrHeadersSent=!0;let r=q(qe(e.event),{"Content-Type":"text/html; charset=UTF-8"},...e.router.state.matches.map(n=>n.headers));const{redirect:t}=e.router.state;return t&&(r=q(r,t.headers,{Location:t.href})),r}function Oe(e){const r=O(()=>e.injectedHtml.map(t=>t()).join(""));return new Se({transform(t,n,o){r.transform(t,this.push.bind(this)).then(()=>o()).catch(s=>o(s))},flush(t){r.flush(this.push.bind(this)).then(()=>t()).catch(n=>t(n))}})}function je(e){const r=O(()=>e.injectedHtml.map(n=>n()).join("")),t=new TextEncoder;return new TransformStream({transform(n,o){return r.transform(n,s=>(o.enqueue(t.encode(s)),!0))},flush(n){return r.flush(o=>(n.enqueue(o),!0))}})}const ze=/(<body)/,Ue=/(<\/body>)/,Qe=/(<\/html>)/,Ve=/(<\/[a-zA-Z][\w:.-]*?>)/g,Je=new TextDecoder;function O(e){let r=!1,t="",n="";return{async transform(o,s){const a=t+Je.decode(o),u=a.match(ze),c=a.match(Ue),l=a.match(Qe);try{if(u&&(r=!0),!r){s(a),t="";return}const d=e();if(c&&l&&c.index<l.index){const f=c.index+c[0].length,y=l.index+l[0].length,$=a.slice(0,f)+d+a.slice(f,y)+a.slice(y);s($),t=""}else{let f,y=0;for(;(f=Ve.exec(a))!==null;)y=f.index+f[0].length;if(y>0){const $=a.slice(0,y)+d+n;s($),t=a.slice(y)}else t=a,n+=d}}catch(d){throw console.error("Error transforming HTML:",d),d}},async flush(o){t&&o(t)}}}const Ge=async({request:e,router:r,responseHeaders:t})=>{if(typeof x.renderToReadableStream=="function"){const n=await x.renderToReadableStream(i(M,{router:r}),{signal:e.signal});I(e.headers.get("User-Agent"))&&await n.allReady;const s=[je(r)].reduce((a,u)=>a.pipeThrough(u),n);return new Response(s,{status:r.state.statusCode,headers:t})}if(typeof x.renderToPipeableStream=="function"){const n=new be,o=x.renderToPipeableStream(i(M,{router:r}),{...I(e.headers.get("User-Agent"))?{onAllReady(){o.pipe(n)}}:{onShellReady(){o.pipe(n)}},onError:(u,c)=>{console.log("Error in renderToPipeableStream:",u,c)}}),a=[Oe(r)].reduce((u,c)=>u.pipe(c),n);return new Response(a,{status:r.state.statusCode,headers:t})}throw new Error("No renderToReadableStream or renderToPipeableStream found in react-dom/server. Ensure you are using a version of react-dom that supports streaming.")},Ze=()=>({routes:{__root__:{filePath:"__root.tsx",children:["/_auth","/_layout"],preloads:["/_build/assets/client-zddcT9DV.js","/_build/assets/client-Bgb6eiQJ.js"]},"/_auth":{filePath:"_auth.tsx",children:["/_auth/signin","/_auth/signup","/_auth/verify"]},"/_layout":{filePath:"_layout.tsx",children:["/_layout/_sub-layout","/_layout/dashboard"]},"/_auth/signin":{filePath:"_auth/signin.tsx",parent:"/_auth"},"/_auth/signup":{filePath:"_auth/signup.tsx",parent:"/_auth"},"/_auth/verify":{filePath:"_auth/verify.tsx",parent:"/_auth"},"/_layout/_sub-layout":{filePath:"_layout/_sub-layout.tsx",parent:"/_layout",children:["/_layout/_sub-layout/create-document","/_layout/_sub-layout/templates","/_layout/_sub-layout/"]},"/_layout/dashboard":{filePath:"_layout/dashboard.tsx",parent:"/_layout"},"/_layout/_sub-layout/create-document":{filePath:"_layout/_sub-layout/create-document.tsx",parent:"/_layout/_sub-layout"},"/_layout/_sub-layout/templates":{filePath:"_layout/_sub-layout/templates.tsx",parent:"/_layout/_sub-layout"},"/_layout/_sub-layout/":{filePath:"_layout/_sub-layout/index.tsx",parent:"/_layout/_sub-layout"}}});function Ke(e){return globalThis.MANIFEST[e]}function Xe(){const e=Ze(),r=e.routes.__root__=e.routes.__root__||{};r.assets=r.assets||[];const t=Ke("client");return r.assets.push({tag:"script",attrs:{src:t.inputs[t.handler]?.output.path,type:"module",async:!0,suppressHydrationWarning:!0}}),e}function Ye(){const e=Xe();return{...e,routes:Object.fromEntries(Object.entries(e.routes).map(([r,t])=>{const{preloads:n,assets:o}=t;return[r,{preloads:n,assets:o}]}))}}function j({tag:e,attrs:r,children:t}){switch(e){case"title":return i("title",{...r,suppressHydrationWarning:!0,children:t});case"meta":return i("meta",{...r,suppressHydrationWarning:!0});case"link":return i("link",{...r,suppressHydrationWarning:!0});case"style":return i("style",{...r,dangerouslySetInnerHTML:{__html:t}});case"script":return r&&r.src?i("script",{...r,suppressHydrationWarning:!0}):typeof t=="string"?i("script",{...r,dangerouslySetInnerHTML:{__html:t},suppressHydrationWarning:!0}):null;default:return null}}const et=()=>{const e=g(),r=R({select:s=>s.matches.map(a=>a.meta).filter(Boolean)}),t=S.useMemo(()=>{const s=[],a={};let u;return[...r].reverse().forEach(c=>{[...c].reverse().forEach(l=>{if(l)if(l.title)u||(u={tag:"title",children:l.title});else{if(l.name){if(a[l.name])return;a[l.name]=!0}s.push({tag:"meta",attrs:{...l}})}})}),u&&s.push(u),s.reverse(),s},[r]),n=R({select:s=>s.matches.map(a=>a.links).filter(Boolean).flat(1).map(a=>({tag:"link",attrs:{...a}})),structuralSharing:!0}),o=R({select:s=>{const a=[];return s.matches.map(u=>e.looseRoutesById[u.routeId]).forEach(u=>{var c,l,d;return(d=(l=(c=e.manifest)==null?void 0:c.routes[u.id])==null?void 0:l.preloads)==null?void 0:d.filter(Boolean).forEach(f=>{a.push({tag:"link",attrs:{rel:"modulepreload",href:f}})})}),a},structuralSharing:!0});return nt([...t,...o,...n],s=>JSON.stringify(s))},tt=()=>{const e=g(),r=et(),t=S.useContext(D.get("TanStackRouterHydrationContext",{}));return h(_,{children:[r.map((n,o)=>W(j,{...n,key:`tsr-meta-${JSON.stringify(n)}`})),h(_,{children:[i(w,{log:!1,children:'__TSR__={matches:[],streamedValues:{},queue:[],runQueue:()=>{let e=!1;__TSR__.queue=__TSR__.queue.filter((_=>!_()||(e=!0,!1))),e&&__TSR__.runQueue()},initMatch:e=>{__TSR__.queue.push((()=>(__TSR__.matches[e.index]||(__TSR__.matches[e.index]=e,Object.entries(e.extracted).forEach((([e,_])=>{if("stream"===_.type){let e;_.value=new ReadableStream({start(_){e=_}}),_.value.controller=e}else if("promise"===_.type){let e,t;_.value=new Promise(((_,u)=>{e=_,t=u})),_.resolve=e,_.reject=t}}))),!0))),__TSR__.runQueue()},resolvePromise:e=>{__TSR__.queue.push((()=>{const _=__TSR__.matches[e.matchIndex];if(_){const t=_.extracted[e.id];if(t)return t.resolve(e.value.data),!0}return!1})),__TSR__.runQueue()},cleanScripts:()=>{document.querySelectorAll(".tsr-once").forEach((e=>{e.remove()}))}};'}),i(w,{children:`__TSR__.dehydrated = ${b(e.options.transformer.stringify(t),{isScriptContext:!0,wrap:!0,json:!0})}`})]})]})},rt=()=>i(_,{children:tt()});function nt(e,r){const t=new Set;return e.filter(n=>{const o=r(n);return t.has(o)?!1:(t.add(o),!0)})}const ot=()=>{const e=g(),r=R({select:o=>{const s=[];return o.matches.map(a=>e.looseRoutesById[a.routeId]).forEach(a=>{var u,c,l;return(l=(c=(u=e.manifest)==null?void 0:u.routes[a.id])==null?void 0:c.assets)==null?void 0:l.filter(d=>d.tag==="script").forEach(d=>{s.push({tag:"script",attrs:d.attrs,children:d.children})})}),s},structuralSharing:!0}),{scripts:t}=R({select:o=>({scripts:o.matches.map(s=>s.scripts).filter(Boolean).flat(1).map(({children:s,...a})=>({tag:"script",attrs:{...a,suppressHydrationWarning:!0},children:s}))})}),n=[...t,...r];return i(_,{children:n.map((o,s)=>W(j,{...o,key:`tsr-scripts-${o.tag}-${s}`}))})},st="/_build/assets/app-Cs24V_o8.css",at=ye({counter:0,setCounter:()=>{}}),z=({children:e})=>{const[r,t]=ge(0);return i(at.Provider,{value:{counter:r,setCounter:t},children:e})},E=me()({context:()=>z,head:()=>({meta:[{charSet:"utf-8"},{name:"viewport",content:"width=device-width, initial-scale=1"},{title:"Esigns"}]}),component:ut});function ut(){return i(z,{children:h(it,{children:[i(he,{}),i(ve,{richColors:!0,closeButton:!0,position:"top-right"})]})})}function it({children:e}){return h("html",{children:[h("head",{children:[i(rt,{}),i("link",{rel:"stylesheet",href:st})]}),h("body",{children:[e,i(fe,{}),i(ot,{})]})]})}const ct=()=>import("./_layout-BKiV2jqM.js"),U=p("/_layout")({component:m(ct,"component",()=>U.ssr)}),lt=()=>import("./_auth-f1uqbOnR.js"),Q=p("/_auth")({component:m(lt,"component",()=>Q.ssr)}),dt=()=>import("./dashboard-DL-7M7fP.js"),V=p("/_layout/dashboard")({component:m(dt,"component",()=>V.ssr)}),pt=()=>import("./_sub-layout-CIAzq0oM.js"),J=p("/_layout/_sub-layout")({component:m(pt,"component",()=>J.ssr)}),mt=()=>import("./verify-CM-DXcJu.js"),G=p("/_auth/verify")({component:m(mt,"component",()=>G.ssr)}),ht=()=>import("./signup-8XSP0uXB.js"),Z=p("/_auth/signup")({component:m(ht,"component",()=>Z.ssr)}),ft=()=>import("./signin-DRqPxVJ3.js"),K=p("/_auth/signin")({component:m(ft,"component",()=>K.ssr)}),_t=()=>import("./index-MG7KYeiH.js"),X=p("/_layout/_sub-layout/")({component:m(_t,"component",()=>X.ssr)}),yt=()=>import("./templates-GPKsuxlM.js"),Y=p("/_layout/_sub-layout/templates")({component:m(yt,"component",()=>Y.ssr)}),gt=()=>import("./create-document-CyEbOpXL.js"),ee=p("/_layout/_sub-layout/create-document")({component:m(gt,"component",()=>ee.ssr)}),A=U.update({id:"/_layout",getParentRoute:()=>E}),C=Q.update({id:"/_auth",getParentRoute:()=>E}),Rt=V.update({id:"/dashboard",path:"/dashboard",getParentRoute:()=>A}),v=J.update({id:"/_sub-layout",getParentRoute:()=>A}),St=G.update({id:"/verify",path:"/verify",getParentRoute:()=>C}),bt=Z.update({id:"/signup",path:"/signup",getParentRoute:()=>C}),xt=K.update({id:"/signin",path:"/signin",getParentRoute:()=>C}),Ct=X.update({id:"/",path:"/",getParentRoute:()=>v}),vt=Y.update({id:"/templates",path:"/templates",getParentRoute:()=>v}),$t=ee.update({id:"/create-document",path:"/create-document",getParentRoute:()=>v}),Tt={AuthSigninRoute:xt,AuthSignupRoute:bt,AuthVerifyRoute:St},wt=C._addFileChildren(Tt),Pt={LayoutSubLayoutCreateDocumentRoute:$t,LayoutSubLayoutTemplatesRoute:vt,LayoutSubLayoutIndexRoute:Ct},Ht=v._addFileChildren(Pt),Lt={LayoutSubLayoutRoute:Ht,LayoutDashboardRoute:Rt},Et=A._addFileChildren(Lt),At={AuthRoute:wt,LayoutRoute:Et},It=E._addFileChildren(At)._addFileTypes(),Mt=()=>h("div",{children:[i("h1",{children:"404"}),i("p",{children:"Not Found"})]});function qt(){const e=new xe;return Ce(_e({routeTree:It,context:{queryClient:e},defaultPreload:"intent",defaultNotFoundComponent:Mt}),e)}const Kt=Fe({createRouter:qt,getRouterManifest:Ye})(Ge);export{at as A,Kt as h};
