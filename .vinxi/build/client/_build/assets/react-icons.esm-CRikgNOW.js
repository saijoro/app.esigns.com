import{r as n,j as S,h as y,C as R,D as j}from"./client-BP9FbR5_.js";import{S as b,u as $}from"./index-DB71jFob.js";function Y(e,t){const o=n.createContext(t),c=s=>{const{children:l,...i}=s,u=n.useMemo(()=>i,Object.values(i));return S.jsx(o.Provider,{value:u,children:l})};c.displayName=e+"Provider";function r(s){const l=n.useContext(o);if(l)return l;if(t!==void 0)return t;throw new Error(`\`${s}\` must be used within \`${e}\``)}return[c,r]}function G(e,t=[]){let o=[];function c(s,l){const i=n.createContext(l),u=o.length;o=[...o,l];const d=f=>{const{scope:x,children:v,...a}=f,p=x?.[e]?.[u]||i,C=n.useMemo(()=>a,Object.values(a));return S.jsx(p.Provider,{value:C,children:v})};d.displayName=s+"Provider";function h(f,x){const v=x?.[e]?.[u]||i,a=n.useContext(v);if(a)return a;if(l!==void 0)return l;throw new Error(`\`${f}\` must be used within \`${s}\``)}return[d,h]}const r=()=>{const s=o.map(l=>n.createContext(l));return function(i){const u=i?.[e]||s;return n.useMemo(()=>({[`__scope${e}`]:{...i,[e]:u}}),[i,u])}};return r.scopeName=e,[c,I(r,...t)]}function I(...e){const t=e[0];if(e.length===1)return t;const o=()=>{const c=e.map(r=>({useScope:r(),scopeName:r.scopeName}));return function(s){const l=c.reduce((i,{useScope:u,scopeName:d})=>{const f=u(s)[`__scope${d}`];return{...i,...f}},{});return n.useMemo(()=>({[`__scope${t.scopeName}`]:l}),[l])}};return o.scopeName=t.scopeName,o}function M(e){const t=n.useRef(e);return n.useEffect(()=>{t.current=e}),n.useMemo(()=>(...o)=>t.current?.(...o),[])}var _=globalThis?.document?n.useLayoutEffect:()=>{},O=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","span","svg","ul"],Q=O.reduce((e,t)=>{const o=n.forwardRef((c,r)=>{const{asChild:s,...l}=c,i=s?b:t;return typeof window<"u"&&(window[Symbol.for("radix-ui")]=!0),S.jsx(i,{...l,ref:r})});return o.displayName=`Primitive.${t}`,{...e,[t]:o}},{});function ee(e,t){e&&y.flushSync(()=>e.dispatchEvent(t))}function oe(e,t,{checkForDefaultPrevented:o=!0}={}){return function(r){if(e?.(r),o===!1||!r.defaultPrevented)return t?.(r)}}function B(e,t=[]){let o=[];function c(s,l){const i=n.createContext(l),u=o.length;o=[...o,l];function d(f){const{scope:x,children:v,...a}=f,p=x?.[e][u]||i,C=n.useMemo(()=>a,Object.values(a));return S.jsx(p.Provider,{value:C,children:v})}function h(f,x){const v=x?.[e][u]||i,a=n.useContext(v);if(a)return a;if(l!==void 0)return l;throw new Error(`\`${f}\` must be used within \`${s}\``)}return d.displayName=s+"Provider",[d,h]}const r=()=>{const s=o.map(l=>n.createContext(l));return function(i){const u=i?.[e]||s;return n.useMemo(()=>({[`__scope${e}`]:{...i,[e]:u}}),[i,u])}};return r.scopeName=e,[c,D(r,...t)]}function D(...e){const t=e[0];if(e.length===1)return t;const o=()=>{const c=e.map(r=>({useScope:r(),scopeName:r.scopeName}));return function(s){const l=c.reduce((i,{useScope:u,scopeName:d})=>{const f=u(s)[`__scope${d}`];return{...i,...f}},{});return n.useMemo(()=>({[`__scope${t.scopeName}`]:l}),[l])}};return o.scopeName=t.scopeName,o}function te(e){const t=e+"CollectionProvider",[o,c]=B(t),[r,s]=o(t,{collectionRef:{current:null},itemMap:new Map}),l=v=>{const{scope:a,children:p}=v,C=R.useRef(null),m=R.useRef(new Map).current;return S.jsx(r,{scope:a,itemMap:m,collectionRef:C,children:p})};l.displayName=t;const i=e+"CollectionSlot",u=R.forwardRef((v,a)=>{const{scope:p,children:C}=v,m=s(i,p),g=$(a,m.collectionRef);return S.jsx(b,{ref:g,children:C})});u.displayName=i;const d=e+"CollectionItemSlot",h="data-radix-collection-item",f=R.forwardRef((v,a)=>{const{scope:p,children:C,...m}=v,g=R.useRef(null),L=$(a,g),E=s(d,p);return R.useEffect(()=>(E.itemMap.set(g,{ref:g,...m}),()=>void E.itemMap.delete(g))),S.jsx(b,{[h]:"",ref:L,children:C})});f.displayName=d;function x(v){const a=s(e+"CollectionConsumer",v);return R.useCallback(()=>{const C=a.collectionRef.current;if(!C)return[];const m=Array.from(C.querySelectorAll(`[${h}]`));return Array.from(a.itemMap.values()).sort((E,P)=>m.indexOf(E.ref.current)-m.indexOf(P.ref.current))},[a.collectionRef,a.itemMap])}return[{Provider:l,Slot:u,ItemSlot:f},x,c]}var N=n.createContext(void 0);function re(e){const t=n.useContext(N);return e||t||"ltr"}var Z=j.useId||(()=>{}),A=0;function ne(e){const[t,o]=n.useState(Z());return _(()=>{e||o(c=>c??String(A++))},[e]),e||(t?`radix-${t}`:"")}function ce(e){const[t,o]=n.useState(void 0);return _(()=>{if(e){o({width:e.offsetWidth,height:e.offsetHeight});const c=new ResizeObserver(r=>{if(!Array.isArray(r)||!r.length)return;const s=r[0];let l,i;if("borderBoxSize"in s){const u=s.borderBoxSize,d=Array.isArray(u)?u[0]:u;l=d.inlineSize,i=d.blockSize}else l=e.offsetWidth,i=e.offsetHeight;o({width:l,height:i})});return c.observe(e,{box:"border-box"}),()=>c.unobserve(e)}else o(void 0)},[e]),t}function se({prop:e,defaultProp:t,onChange:o=()=>{}}){const[c,r]=z({defaultProp:t,onChange:o}),s=e!==void 0,l=s?e:c,i=M(o),u=n.useCallback(d=>{if(s){const f=typeof d=="function"?d(e):d;f!==e&&i(f)}else r(d)},[s,e,r,i]);return[l,u]}function z({defaultProp:e,onChange:t}){const o=n.useState(e),[c]=o,r=n.useRef(c),s=M(t);return n.useEffect(()=>{r.current!==c&&(s(c),r.current=c)},[c,r,s]),o}function le(e){const t=n.useRef({value:e,previous:e});return n.useMemo(()=>(t.current.value!==e&&(t.current.previous=t.current.value,t.current.value=e),t.current.previous),[e])}function w(e,t){if(e==null)return{};var o={},c=Object.keys(e),r,s;for(s=0;s<c.length;s++)r=c[s],!(t.indexOf(r)>=0)&&(o[r]=e[r]);return o}var H=["color"],ie=n.forwardRef(function(e,t){var o=e.color,c=o===void 0?"currentColor":o,r=w(e,H);return n.createElement("svg",Object.assign({width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},r,{ref:t}),n.createElement("path",{d:"M11.4669 3.72684C11.7558 3.91574 11.8369 4.30308 11.648 4.59198L7.39799 11.092C7.29783 11.2452 7.13556 11.3467 6.95402 11.3699C6.77247 11.3931 6.58989 11.3355 6.45446 11.2124L3.70446 8.71241C3.44905 8.48022 3.43023 8.08494 3.66242 7.82953C3.89461 7.57412 4.28989 7.55529 4.5453 7.78749L6.75292 9.79441L10.6018 3.90792C10.7907 3.61902 11.178 3.53795 11.4669 3.72684Z",fill:c,fillRule:"evenodd",clipRule:"evenodd"}))}),k=["color"],ue=n.forwardRef(function(e,t){var o=e.color,c=o===void 0?"currentColor":o,r=w(e,k);return n.createElement("svg",Object.assign({width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},r,{ref:t}),n.createElement("path",{d:"M3.13523 6.15803C3.3241 5.95657 3.64052 5.94637 3.84197 6.13523L7.5 9.56464L11.158 6.13523C11.3595 5.94637 11.6759 5.95657 11.8648 6.15803C12.0536 6.35949 12.0434 6.67591 11.842 6.86477L7.84197 10.6148C7.64964 10.7951 7.35036 10.7951 7.15803 10.6148L3.15803 6.86477C2.95657 6.67591 2.94637 6.35949 3.13523 6.15803Z",fill:c,fillRule:"evenodd",clipRule:"evenodd"}))}),T=["color"],ae=n.forwardRef(function(e,t){var o=e.color,c=o===void 0?"currentColor":o,r=w(e,T);return n.createElement("svg",Object.assign({width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},r,{ref:t}),n.createElement("path",{d:"M8.84182 3.13514C9.04327 3.32401 9.05348 3.64042 8.86462 3.84188L5.43521 7.49991L8.86462 11.1579C9.05348 11.3594 9.04327 11.6758 8.84182 11.8647C8.64036 12.0535 8.32394 12.0433 8.13508 11.8419L4.38508 7.84188C4.20477 7.64955 4.20477 7.35027 4.38508 7.15794L8.13508 3.15794C8.32394 2.95648 8.64036 2.94628 8.84182 3.13514Z",fill:c,fillRule:"evenodd",clipRule:"evenodd"}))}),V=["color"],de=n.forwardRef(function(e,t){var o=e.color,c=o===void 0?"currentColor":o,r=w(e,V);return n.createElement("svg",Object.assign({width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},r,{ref:t}),n.createElement("path",{d:"M6.1584 3.13508C6.35985 2.94621 6.67627 2.95642 6.86514 3.15788L10.6151 7.15788C10.7954 7.3502 10.7954 7.64949 10.6151 7.84182L6.86514 11.8418C6.67627 12.0433 6.35985 12.0535 6.1584 11.8646C5.95694 11.6757 5.94673 11.3593 6.1356 11.1579L9.565 7.49985L6.1356 3.84182C5.94673 3.64036 5.95694 3.32394 6.1584 3.13508Z",fill:c,fillRule:"evenodd",clipRule:"evenodd"}))}),W=["color"],fe=n.forwardRef(function(e,t){var o=e.color,c=o===void 0?"currentColor":o,r=w(e,W);return n.createElement("svg",Object.assign({width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},r,{ref:t}),n.createElement("path",{d:"M3.13523 8.84197C3.3241 9.04343 3.64052 9.05363 3.84197 8.86477L7.5 5.43536L11.158 8.86477C11.3595 9.05363 11.6759 9.04343 11.8648 8.84197C12.0536 8.64051 12.0434 8.32409 11.842 8.13523L7.84197 4.38523C7.64964 4.20492 7.35036 4.20492 7.15803 4.38523L3.15803 8.13523C2.95657 8.32409 2.94637 8.64051 3.13523 8.84197Z",fill:c,fillRule:"evenodd",clipRule:"evenodd"}))}),U=["color"],ve=n.forwardRef(function(e,t){var o=e.color,c=o===void 0?"currentColor":o,r=w(e,U);return n.createElement("svg",Object.assign({width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},r,{ref:t}),n.createElement("path",{d:"M11.7816 4.03157C12.0062 3.80702 12.0062 3.44295 11.7816 3.2184C11.5571 2.99385 11.193 2.99385 10.9685 3.2184L7.50005 6.68682L4.03164 3.2184C3.80708 2.99385 3.44301 2.99385 3.21846 3.2184C2.99391 3.44295 2.99391 3.80702 3.21846 4.03157L6.68688 7.49999L3.21846 10.9684C2.99391 11.193 2.99391 11.557 3.21846 11.7816C3.44301 12.0061 3.80708 12.0061 4.03164 11.7816L7.50005 8.31316L10.9685 11.7816C11.193 12.0061 11.5571 12.0061 11.7816 11.7816C12.0062 11.557 12.0062 11.193 11.7816 10.9684L8.31322 7.49999L11.7816 4.03157Z",fill:c,fillRule:"evenodd",clipRule:"evenodd"}))}),q=["color"],Ce=n.forwardRef(function(e,t){var o=e.color,c=o===void 0?"currentColor":o,r=w(e,q);return n.createElement("svg",Object.assign({width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},r,{ref:t}),n.createElement("path",{d:"M9.875 7.5C9.875 8.81168 8.81168 9.875 7.5 9.875C6.18832 9.875 5.125 8.81168 5.125 7.5C5.125 6.18832 6.18832 5.125 7.5 5.125C8.81168 5.125 9.875 6.18832 9.875 7.5Z",fill:c}))}),F=["color"],pe=n.forwardRef(function(e,t){var o=e.color,c=o===void 0?"currentColor":o,r=w(e,F);return n.createElement("svg",Object.assign({width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},r,{ref:t}),n.createElement("path",{d:"M3.625 7.5C3.625 8.12132 3.12132 8.625 2.5 8.625C1.87868 8.625 1.375 8.12132 1.375 7.5C1.375 6.87868 1.87868 6.375 2.5 6.375C3.12132 6.375 3.625 6.87868 3.625 7.5ZM8.625 7.5C8.625 8.12132 8.12132 8.625 7.5 8.625C6.87868 8.625 6.375 8.12132 6.375 7.5C6.375 6.87868 6.87868 6.375 7.5 6.375C8.12132 6.375 8.625 6.87868 8.625 7.5ZM12.5 8.625C13.1213 8.625 13.625 8.12132 13.625 7.5C13.625 6.87868 13.1213 6.375 12.5 6.375C11.8787 6.375 11.375 6.87868 11.375 7.5C11.375 8.12132 11.8787 8.625 12.5 8.625Z",fill:c,fillRule:"evenodd",clipRule:"evenodd"}))}),J=["color"],he=n.forwardRef(function(e,t){var o=e.color,c=o===void 0?"currentColor":o,r=w(e,J);return n.createElement("svg",Object.assign({width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},r,{ref:t}),n.createElement("path",{d:"M8 2H13.5C13.7761 2 14 2.22386 14 2.5V12.5C14 12.7761 13.7761 13 13.5 13H8V2ZM7 2H1.5C1.22386 2 1 2.22386 1 2.5V12.5C1 12.7761 1.22386 13 1.5 13H7V2ZM0 2.5C0 1.67157 0.671573 1 1.5 1H13.5C14.3284 1 15 1.67157 15 2.5V12.5C15 13.3284 14.3284 14 13.5 14H1.5C0.671573 14 0 13.3284 0 12.5V2.5Z",fill:c,fillRule:"evenodd",clipRule:"evenodd"}))});export{ve as C,pe as D,Q as P,he as V,M as a,se as b,G as c,ne as d,Y as e,oe as f,ae as g,de as h,ee as i,ce as j,re as k,te as l,le as m,ue as n,fe as o,ie as p,Ce as q,_ as u};