import{jsx as e,jsxs as a,Fragment as G}from"react/jsx-runtime";import{useQuery as $}from"@tanstack/react-query";import{useReactTable as z,getSortedRowModel as K,getFilteredRowModel as X,getCoreRowModel as Y,flexRender as A}from"@tanstack/react-table";import*as g from"react";import{useState as k,useEffect as F}from"react";import{c as m,I as B}from"./input-BNpTjTIy.js";import{useLocation as W}from"@tanstack/react-router";import{b as H}from"./button-cyuXPM3g.js";import{ChevronLeftIcon as q,DotsHorizontalIcon as U,ChevronRightIcon as Q}from"@radix-ui/react-icons";import{S as J,a as Z,b as ee,c as te,d as ae}from"./select-2qGakAU5.js";import{$ as se}from"./fetch--oHJs5c1.js";import"clsx";import"tailwind-merge";import"@radix-ui/react-slot";import"class-variance-authority";import"@radix-ui/react-select";import"js-cookie";const _=g.forwardRef(({className:t,...l},r)=>e("table",{ref:r,className:m("w-full min-w-full table-fixed caption-bottom text-sm",t),...l}));_.displayName="Table";const O=g.forwardRef(({className:t,...l},r)=>e("thead",{ref:r,className:m("[&_tr]:border-b ",t),...l}));O.displayName="TableHeader";const L=g.forwardRef(({className:t,...l},r)=>e("tbody",{ref:r,className:m("[&_tr:last-child]:border-0",t),...l}));L.displayName="TableBody";const le=g.forwardRef(({className:t,...l},r)=>e("tfoot",{ref:r,className:m("border-t bg-muted/50 font-medium [&>tr]:last:border-b-0",t),...l}));le.displayName="TableFooter";const S=g.forwardRef(({className:t,...l},r)=>e("tr",{ref:r,className:m("border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted",t),...l}));S.displayName="TableRow";const M=g.forwardRef(({className:t,...l},r)=>e("th",{ref:r,className:m("border-r font-normal border-r-slate-300 px-2 py-3 text-[.85rem] [&:has([role=checkbox])]:pr-0 !bg-[#f3e5f5]",t),...l}));M.displayName="TableHead";const P=g.forwardRef(({className:t,...l},r)=>e("td",{ref:r,className:m("font-sans text-[.85rem] bg-white font-normal text-black align-middle !py-[0.35rem] !px-2",t),...l}));P.displayName="TableCell";const ie=g.forwardRef(({className:t,...l},r)=>e("caption",{ref:r,className:m("mt-4 text-sm text-muted-foreground",t),...l}));ie.displayName="TableCaption";const D=({className:t,...l})=>e("nav",{role:"navigation","aria-label":"pagination",className:m("mx-auto flex w-full justify-center",t),...l});D.displayName="Pagination";const j=g.forwardRef(({className:t,...l},r)=>e("ul",{ref:r,className:m("flex flex-row items-center gap-1",t),...l}));j.displayName="PaginationContent";const R=g.forwardRef(({className:t,...l},r)=>e("li",{ref:r,className:m("",t),...l}));R.displayName="PaginationItem";const E=({className:t,isActive:l,size:r="icon",...x})=>e("a",{"aria-current":l?"page":void 0,className:m(H({variant:l?"outline":"ghost",size:r}),t),...x});E.displayName="PaginationLink";const T=({className:t,...l})=>a(E,{"aria-label":"Go to previous page",size:"default",className:m("gap-1 pl-2.5",t),...l,children:[e(q,{className:"h-4 w-4"}),e("span",{children:"Previous"})]});T.displayName="PaginationPrevious";const I=({className:t,...l})=>a(E,{"aria-label":"Go to next page",size:"default",className:m("gap-1 pr-2.5",t),...l,children:[e("span",{children:"Next"}),e(Q,{className:"h-4 w-4"})]});I.displayName="PaginationNext";const V=({className:t,...l})=>a("span",{"aria-hidden":!0,className:m("flex h-9 w-9 items-center justify-center",t),...l,children:[e(U,{className:"h-4 w-4"}),e("span",{className:"sr-only",children:"More pages"})]});V.displayName="PaginationEllipsis";const re=({capturePageNum:t,captureRowPerItems:l,initialPage:r=1,limitOptionsFromProps:x,paginationDetails:f})=>{const[n,v]=k(r),[w,u]=k(r),[h,y]=k([]),c=f?f.total_pages:1,b=f?.page_size;F(()=>{y(x?.length?x:[{title:"12/page",value:12},{title:"25/page",value:25},{title:"50/page",value:50},{title:"100/page",value:100},{title:"250/page",value:250},{title:"500/page",value:500}])},[x]);const o=s=>{s>=1&&s<=c&&(v(s),u(s),t(s))},C=s=>{l(Number(s))},d=s=>{if(s.key==="Enter"){const N=Math.max(1,Math.min(Number(w)||1,c));o(N)}};F(()=>{f?.current_page&&(u(f.current_page),v(f.current_page))},[f]);const i=()=>{const s=[];if(c<=5)for(let p=1;p<=c;p++)s.push(p);else if(n<=3){for(let p=1;p<=4;p++)s.push(p);s.push(null),s.push(c)}else if(n>=c-2){s.push(1),s.push(null);for(let p=c-3;p<=c;p++)s.push(p)}else{s.push(1),s.push(null);for(let p=n-1;p<=n+1;p++)s.push(p);s.push(null),s.push(c)}return s};return a(D,{className:"flex justify-between px-2 py-0 ",children:[a(j,{className:"px-1 py-0 flex gap-2",children:[a("p",{children:["Total ",f?.total_records||"0"]}),a(J,{value:b?.toString(),onValueChange:C,children:[e(Z,{className:"w-[120px] py-0 h-[30px]",children:e(ee,{placeholder:"Items per page"})}),e(te,{className:"w-[120px] bg-white pointer",children:h.map((s,N)=>e(ae,{value:s.value?.toString(),className:"cursor-pointer ",children:s.title},N))})]})]}),a("div",{className:"flex justify-end items-center",children:[e(j,{className:"px-1 py-0",children:a("div",{className:"flex items-center",children:["GoTo",e(B,{type:"number",value:w,onChange:s=>u(Number(s.target.value)),onKeyDown:d,className:"h-[30px] w-[40px] m-auto flex items-center text-center py-0 ml-2 bg-[#f5f5f5] focus:outline-none focus:ring-0 text-sm pl-1 pr-0",placeholder:"Page"})]})}),a(j,{className:"px-1 py-0",children:[e(R,{children:e(T,{href:n===1?void 0:"#",onClick:s=>{if(n===1){s.preventDefault();return}s.preventDefault(),o(n-1)},"aria-disabled":n===1,className:`${n===1?"pointer-events-none cursor-not-allowed opacity-50":"cursor-pointer opacity-100"}`})}),i().map((s,N)=>s===null?e(R,{children:e(V,{})},`ellipsis-${N}`):e(R,{children:e(E,{href:"#",isActive:s===n,onClick:p=>{p.preventDefault(),o(s)},className:`w-[30px] h-[30px] hover:no-underline ${s===n?"bg-[#F0F1F6] text-black rounded-full w-[30px] h-[30px]":"bg-transperant text-black"}`,children:s})},s)),e(R,{children:e(I,{href:n===c?void 0:"#",onClick:s=>{if(n===c){s.preventDefault();return}s.preventDefault(),o(n+1)},"aria-disabled":n===c,className:`${n===c?"pointer-events-none cursor-not-allowed opacity-50":"cursor-pointer opacity-100"}`})})]})]})]})},ne=({columns:t,data:l,loading:r=!1,getData:x,paginationDetails:f,removeSortingForColumnIds:n})=>{const[v,w]=k([]),u=W(),h=new URLSearchParams(u?.search),y=z({columns:t,data:l?.length?l:[],state:{sorting:v},onSortingChange:w,getCoreRowModel:Y(),getFilteredRowModel:X(),getSortedRowModel:K()}),c=d=>{x({...h,pageSize:h.get("page_size")?h.get("page_size"):25,pageIndex:d,order_by:h.get("order_by")})},b=d=>{x({...h,pageSize:d,pageIndex:1,order_by:h.get("order_by")})},o=d=>{const i=t.find(s=>s.id===d);return i&&(i?.width||i?.size)||"100px"},C=d=>{if(n&&n.length&&n.includes(d.id))return;let i=d.id,s=`${i}:asc`;h.get("order_by")?.startsWith(d.id)&&(h.get("order_by")===`${d.id}:asc`?s=`${d.id}:desc`:(i="",s="")),x({...h,pageIndex:1,pageSize:h.get("page_size"),order_by:s})};return a("div",{className:"overflow-x-auto w-full",children:[e("div",{className:"overflow-y-auto w-full scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-200 relative bg-white ",children:a(_,{children:[e(O,{className:"sticky top-[0px] z-10",children:y?.getHeaderGroups().map(d=>e(S,{children:d.headers.map((i,s)=>u.pathname.includes("/dashboardw")?e(M,{colSpan:i.colSpan,style:{minWidth:o(i.id),width:o(i.id),color:"#000",background:"#F0EDFF",fontWeight:"500"},children:i.isPlaceholder?null:a("div",{className:i.column.getCanSort()?"cursor-pointer select-none":"",onClick:i.column.getToggleSortingHandler(),style:{display:"flex",gap:"10px",cursor:"pointer"},children:[A(i.column.columnDef.header,i.getContext()),{asc:e("img",{src:"/table/sort-asc.svg",height:15,width:15,alt:"Asc",style:{display:n?.includes(i.id)||i.colSpan==2?"none":""}}),desc:e("img",{src:"/table/sort-desc.svg",height:15,width:15,alt:"Desc",style:{display:n?.includes(i.id)||i.colSpan==2?"none":""}})}[i.column.getIsSorted()]??e("img",{src:"/table/sort-norm.svg",height:15,width:15,alt:"No Sort",style:{display:n?.includes(i.id)||i.colSpan==2?"none":""}})]})},s):e(M,{colSpan:i.colSpan,style:{minWidth:o(i.id),width:o(i.id),color:"#000",background:"#F0EDFF",fontWeight:"500"},children:i.isPlaceholder?null:a("div",{className:i.column.getCanSort()?"cursor-pointer select-none":"",onClick:()=>C(i),className:"flex items-center gap-1 cursor-pointer",style:{minWidth:o(i.id),width:o(i.id)},children:[A(i.column.columnDef.header,i.getContext()),e(ce,{header:i,removeSortingForColumnIds:n})]})},s))},d.id))}),e(L,{children:l?.length?y?.getRowModel().rows.map(d=>e(S,{children:d.getVisibleCells().map(i=>e(P,{className:"p-0",children:A(i.column.columnDef.cell,i.getContext())},i.id))},d.id)):r?e(S,{children:e(P,{colSpan:t.length,className:"p-5 text-center",children:"Loading..."})}):e(S,{children:e(P,{colSpan:6,className:"p-5 text-center",children:e("div",{className:"flex justify-center items-center",children:e("img",{src:"/No data.svg",alt:"No Data",height:500,width:500})})})})})]})}),e(re,{paginationDetails:f,capturePageNum:c,captureRowPerItems:b})]})},ce=({header:t,removeSortingForColumnIds:l})=>{const r=W(),x=new URLSearchParams(r?.search),f=x.get("order_by")?.split(":")[0],n=x.get("order_by")?.split(":")[1];return l?.includes(t.id)?null:e("div",{style:{display:"flex",alignItems:"center"},children:f===t.id?n==="asc"?e("img",{src:"/images/dashboard/table/sort-asc.svg",height:15,width:15,alt:"Asc"}):e("img",{src:"/images/dashboard/table/sort-desc.svg",height:15,width:15,alt:"Desc"}):e("img",{src:"/images/dashboard/table/sort-norm.svg",height:15,width:15,alt:"No Sort"})})},de=()=>[{accessorFn:t=>t.serial,id:"serial",header:()=>e("span",{children:"S.No"}),footer:t=>t.column.id,width:"50px",maxWidth:"50px",minWidth:"50px",cell:t=>e("span",{children:t.getValue()})},{accessorFn:t=>t.NAME,id:"NAME",cell:t=>e("span",{children:t.getValue()}),width:"200px",maxWidth:"200px",minWidth:"200px",header:()=>e("span",{children:"Doc Name"}),footer:t=>t.column.id},{accessorFn:t=>t.status,id:"status",cell:t=>e("span",{children:t.getValue()}),width:"200px",maxWidth:"200px",minWidth:"200px",header:()=>e("span",{children:"Status"}),footer:t=>t.column.id},{accessorFn:t=>t.lastmodified,id:"lastmodified",cell:t=>e("span",{children:t.getValue()}),width:"200px",maxWidth:"200px",minWidth:"200px",header:()=>e("span",{children:"Last Modified"}),footer:t=>t.column.id},{accessorFn:t=>t.created_at,id:"created_at",cell:t=>e("span",{children:t.getValue()}),width:"200px",maxWidth:"200px",minWidth:"200px",header:()=>e("span",{children:"Created at"}),footer:t=>t.column.id},{accessorFn:t=>t.EXPIRES,id:"EXPIRES",cell:t=>e("span",{children:t.getValue()}),width:"200px",maxWidth:"200px",minWidth:"200px",header:()=>e("span",{children:"Expires at"}),footer:t=>t.column.id},{accessorFn:t=>t.actions,id:"actions",cell:t=>e(G,{children:e("ul",{className:"table-action-buttons flex space-x-2 items-center",children:e("li",{children:e("button",{type:"button",className:"inline-flex items-center justify-center rounded-md bg-white/30 px-2 py-1 text-sm font-medium text-white hover:bg-white/50"})})})}),header:()=>e("span",{children:"Actions"}),footer:t=>t.column.id,width:"120px",minWidth:"120px",maxWidth:"120px"}],oe=async t=>{try{return await se.get("/documents",t)}catch(l){throw l}},pe=()=>{let t=[{serial:"01",NAME:"Agreement 1099",FROM:"Kodefast Account",COMPANY:"Sam LLC",status:"Waiting For Ramnanadan",PROGRESS:"2/3",lastmodified:"11-09-2024 16:54:30",created_at:"11-09-2024 16:54:30",EXPIRES:"11-09-2024 16:54:30"},{serial:"02",NAME:"Agreement 1099",FROM:"Kodefast Account",COMPANY:"Sam LLC",status:"Completed",PROGRESS:"3/3",lastmodified:"11-09-2024 16:54:30",created_at:"11-09-2024 16:54:30",EXPIRES:"11-09-2024 16:54:30"},{serial:"03",NAME:"Agreement 1099",FROM:"Kodefast Account",COMPANY:"Sam LLC",status:"Waiting For Ramnanadan",PROGRESS:"2/3",lastmodified:"11-09-2024 16:54:30",created_at:"11-09-2024 16:54:30",EXPIRES:"11-09-2024 16:54:30"},{serial:"04",NAME:"Agreement 1099",FROM:"Kodefast Account",COMPANY:"Sam LLC",status:"Waiting For Ramnanadan",PROGRESS:"2/3",lastmodified:"11-09-2024 16:54:30",created_at:"11-09-2024 16:54:30",EXPIRES:"11-09-2024 16:54:30"},{serial:"05",NAME:"Agreement 1099",FROM:"Kodefast Account",COMPANY:"Sam LLC",status:"Waiting For Ramnanadan",PROGRESS:"2/3",lastmodified:"11-09-2024 16:54:30",created_at:"11-09-2024 16:54:30",EXPIRES:"11-09-2024 16:54:30"},{serial:"06",NAME:"Agreement 1099",FROM:"Kodefast Account",COMPANY:"Sam LLC",status:"Waiting For Ramnanadan",PROGRESS:"2/3",lastmodified:"11-09-2024 16:54:30",created_at:"11-09-2024 16:54:30",EXPIRES:"11-09-2024 16:54:30"},{serial:"07",NAME:"Agreement 1099",FROM:"Kodefast Account",COMPANY:"Sam LLC",status:"Waiting For Ramnanadan",PROGRESS:"2/3",lastmodified:"11-09-2024 16:54:30",created_at:"11-09-2024 16:54:30",EXPIRES:"11-09-2024 16:54:30"},{serial:"08",NAME:"Agreement 1099",FROM:"Kodefast Account",COMPANY:"Sam LLC",status:"Waiting For Ramnanadan",PROGRESS:"2/3",lastmodified:"11-09-2024 16:54:30",created_at:"11-09-2024 16:54:30",EXPIRES:"11-09-2024 16:54:30"},{serial:"09",NAME:"Agreement 1099",FROM:"Kodefast Account",COMPANY:"Sam LLC",status:"Waiting For Ramnanadan",PROGRESS:"2/3",lastmodified:"11-09-2024 16:54:30",created_at:"11-09-2024 16:54:30",EXPIRES:"11-09-2024 16:54:30"}];const[l,r]=k("My Documents"),x=[{name:"My Documents",count:24},{name:"Drafts",count:14},{name:"Shared With Me",count:10}],f={container:"bg-white border-b-2 border-[#f07306] rounded-tl rounded-tr-[34px]",text:"text-[#f07306]",badge:"bg-[#f07306] text-white"},n={container:"bg-white",text:"text-[#828282]",badge:"bg-[#e0e0e0] text-[#828282]"},{isLoading:v,isError:w,data:u,error:h,isFetching:y}=$({queryKey:["docs"],queryFn:async()=>{const c=await oe({page:1,limit:10});if(c?.status===200||c?.status===201){let{data:b,pagination:o}=c?.data;console.log(b,"data"),console.log(o,"pagination")}}});return e("div",{className:"w-full px-4",children:a("div",{className:"w-full pt-[9px]  bg-white rounded-xl shadow flex-col justify-start items-start inline-flex",children:[a("div",{className:"self-stretch pr-4 justify-between items-center inline-flex",children:[e("div",{className:"pl-4 justify-start items-center flex",children:x.map(c=>{const o=l===c.name?f:n;return a("div",{className:`px-4 py-3 ${o.container} justify-center items-center gap-2.5 flex cursor-pointer`,onClick:()=>r(c.name),children:[e("div",{className:`text-sm font-normal font-['Readex Pro'] leading-[16.80px] ${o.text}`,children:c.name}),e("div",{className:`w-[37px] px-2.5 py-[3px] rounded-[60px] flex-col justify-center items-center gap-2.5 inline-flex ${o.badge}`,children:e("div",{className:"self-stretch text-xs font-normal font-['Readex Pro'] leading-[14.40px]",children:c.count})})]},c.name)})}),e("div",{className:"justify-start items-center gap-4 flex",children:e("div",{className:"px-[18px] py-[9px] bg-[#f07306] rounded-lg justify-center items-center gap-2.5 flex",children:e("div",{className:"text-center text-white text-base font-light font-['Readex Pro'] leading-none",children:"Create a Document"})})})]}),e("div",{children:e(ne,{data:t,columns:de(),paginationDetails:t?.[1]||{},removeSortingForColumnIds:["serial","actions","status"]})})]})})},me=()=>a("div",{className:"w-full px-4 py-3.5 rounded-2xl flex-col justify-center items-start gap-4 inline-flex",children:[a("div",{className:"self-stretch justify-between items-center inline-flex",children:[e("div",{className:"text-white text-xl font-normal leading-tight",children:"Stats"}),a("div",{className:"pl-2 pr-3.5 py-[7px] bg-white rounded-lg border border-black justify-start items-center gap-2 flex",children:[e("div",{className:"w-[18px] h-[18px] relative"}),e("div",{className:"text-[#333333] text-sm font-normal leading-[14px]",children:"Settings"})]})]}),a("div",{className:"self-stretch h-36 flex-col justify-start items-start gap-4 flex",children:[a("div",{className:"self-stretch justify-start items-center gap-4 inline-flex",children:[a("div",{className:"grow shrink basis-0 h-16 p-3 bg-white/70 rounded-2xl shadow border backdrop-blur-xl justify-start items-center gap-3 flex",children:[e("div",{className:"p-[6.67px] bg-black rounded-[50px] justify-start items-center gap-[12.50px] flex",children:e("div",{className:"w-[26.67px] h-[26.67px] relative"})}),a("div",{className:"grow shrink basis-0 flex-col justify-start items-start gap-[7px] inline-flex",children:[e("div",{className:"self-stretch text-[#0d0d0d] text-lg font-normal leading-[18px]",children:"200"}),e("div",{className:"self-stretch text-[#4f4f4f] text-xs font-normal leading-3",children:"All Documents"})]})]}),a("div",{className:"grow shrink basis-0 h-16 p-3 bg-white/70 rounded-2xl shadow border backdrop-blur-xl justify-start items-center gap-3 flex",children:[e("div",{className:"p-[6.67px] bg-black rounded-[50px] justify-start items-center gap-[12.50px] flex",children:e("div",{className:"w-[26.67px] h-[26.67px] relative"})}),a("div",{className:"grow shrink basis-0 flex-col justify-start items-start gap-[7px] inline-flex",children:[e("div",{className:"self-stretch text-[#0d0d0d] text-lg font-normal leading-[18px]",children:"200"}),e("div",{className:"self-stretch text-[#4f4f4f] text-xs font-normal leading-3",children:"Waiting for Me"})]})]}),a("div",{className:"grow shrink basis-0 h-16 p-3 bg-white/70 rounded-2xl shadow border backdrop-blur-xl justify-start items-center gap-3 flex",children:[e("div",{className:"p-[6.67px] bg-black rounded-[50px] justify-start items-center gap-[12.50px] flex",children:e("div",{className:"w-[26.67px] h-[26.67px] relative"})}),a("div",{className:"grow shrink basis-0 flex-col justify-start items-start gap-[7px] inline-flex",children:[e("div",{className:"self-stretch text-[#0d0d0d] text-lg font-normal leading-[18px]",children:"200"}),e("div",{className:"self-stretch text-[#4f4f4f] text-xs font-normal leading-3",children:"Waiting for Others"})]})]}),a("div",{className:"grow shrink basis-0 h-16 p-3 bg-white/70 rounded-2xl shadow border backdrop-blur-xl justify-start items-center gap-3 flex",children:[e("div",{className:"p-[6.67px] bg-black rounded-[50px] justify-start items-center gap-[12.50px] flex",children:e("div",{className:"w-[26.67px] h-[26.67px] relative"})}),a("div",{className:"grow shrink basis-0 flex-col justify-start items-start gap-[7px] inline-flex",children:[e("div",{className:"self-stretch text-[#0d0d0d] text-lg font-normal leading-[18px]",children:"200"}),e("div",{className:"self-stretch text-[#4f4f4f] text-xs font-normal leading-3",children:"Approved"})]})]}),a("div",{className:"grow shrink basis-0 h-16 p-3 bg-white/70 rounded-2xl shadow border backdrop-blur-xl justify-start items-center gap-3 flex",children:[e("div",{className:"p-[6.67px] bg-black rounded-[50px] justify-start items-center gap-[12.50px] flex",children:e("div",{className:"w-[26.67px] h-[26.67px] relative"})}),a("div",{className:"grow shrink basis-0 flex-col justify-start items-start gap-[7px] inline-flex",children:[e("div",{className:"self-stretch text-[#0d0d0d] text-lg font-normal leading-[18px]",children:"200"}),e("div",{className:"self-stretch text-[#4f4f4f] text-xs font-normal leading-3",children:"Sent"})]})]}),a("div",{className:"grow shrink basis-0 h-16 p-3 bg-white/70 rounded-2xl shadow border backdrop-blur-xl justify-start items-center gap-3 flex",children:[e("div",{className:"p-[6.67px] bg-black rounded-[50px] justify-start items-center gap-[12.50px] flex",children:e("div",{className:"w-[26.67px] h-[26.67px] relative"})}),a("div",{className:"grow shrink basis-0 flex-col justify-start items-start gap-[7px] inline-flex",children:[e("div",{className:"self-stretch text-[#0d0d0d] text-lg font-normal leading-[18px]",children:"200"}),e("div",{className:"self-stretch text-[#4f4f4f] text-xs font-normal leading-3",children:"Draft"})]})]}),a("div",{className:"grow shrink basis-0 h-16 p-3 bg-white/70 rounded-2xl shadow border backdrop-blur-xl justify-start items-center gap-3 flex",children:[e("div",{className:"p-[6.67px] bg-black rounded-[50px] justify-start items-center gap-[12.50px] flex",children:e("div",{className:"w-[26.67px] h-[26.67px] relative"})}),a("div",{className:"grow shrink basis-0 flex-col justify-start items-start gap-[7px] inline-flex",children:[e("div",{className:"self-stretch text-[#0d0d0d] text-lg font-normal leading-[18px]",children:"200"}),e("div",{className:"self-stretch text-[#4f4f4f] text-xs font-normal leading-3",children:"Expired"})]})]})]}),a("div",{className:"self-stretch justify-start items-center gap-4 inline-flex",children:[a("div",{className:"grow shrink basis-0 h-16 p-3 bg-white/70 rounded-2xl shadow border backdrop-blur-xl justify-start items-center gap-3 flex",children:[e("div",{className:"p-[6.67px] bg-black rounded-[50px] justify-start items-center gap-[12.50px] flex",children:e("div",{className:"w-[26.67px] h-[26.67px] relative"})}),a("div",{className:"grow shrink basis-0 flex-col justify-start items-start gap-[7px] inline-flex",children:[e("div",{className:"self-stretch text-[#0d0d0d] text-lg font-normal leading-[18px]",children:"200"}),e("div",{className:"self-stretch text-[#4f4f4f] text-xs font-normal leading-3",children:"Expiring Soon"})]})]}),a("div",{className:"grow shrink basis-0 h-16 p-3 bg-white/70 rounded-2xl shadow border backdrop-blur-xl justify-start items-center gap-3 flex",children:[e("div",{className:"p-[6.67px] bg-black rounded-[50px] justify-start items-center gap-[12.50px] flex",children:e("div",{className:"w-[26.67px] h-[26.67px] relative"})}),a("div",{className:"grow shrink basis-0 flex-col justify-start items-start gap-[7px] inline-flex",children:[e("div",{className:"self-stretch text-[#0d0d0d] text-lg font-normal leading-[18px]",children:"200"}),e("div",{className:"self-stretch text-[#4f4f4f] text-xs font-normal leading-3",children:"Voided"})]})]}),a("div",{className:"grow shrink basis-0 h-16 p-3 bg-white/70 rounded-2xl shadow border backdrop-blur-xl justify-start items-center gap-3 flex",children:[e("div",{className:"p-[6.67px] bg-black rounded-[50px] justify-start items-center gap-[12.50px] flex",children:e("div",{className:"w-[26.67px] h-[26.67px] relative"})}),a("div",{className:"grow shrink basis-0 flex-col justify-start items-start gap-[7px] inline-flex",children:[e("div",{className:"self-stretch text-[#0d0d0d] text-lg font-normal leading-[18px]",children:"200"}),e("div",{className:"self-stretch text-[#4f4f4f] text-xs font-normal leading-3",children:"Declined"})]})]}),a("div",{className:"grow shrink basis-0 h-16 p-3 bg-white/70 rounded-2xl shadow border backdrop-blur-xl justify-start items-center gap-3 flex",children:[e("div",{className:"p-[6.67px] bg-black rounded-[50px] justify-start items-center gap-[12.50px] flex",children:e("div",{className:"w-[26.67px] h-[26.67px] relative"})}),a("div",{className:"grow shrink basis-0 flex-col justify-start items-start gap-[7px] inline-flex",children:[e("div",{className:"self-stretch text-[#0d0d0d] text-lg font-normal leading-[18px]",children:"200"}),e("div",{className:"self-stretch text-[#4f4f4f] text-xs font-normal leading-3",children:"Deleted"})]})]}),a("div",{className:"grow shrink basis-0 h-16 p-3 bg-white/70 rounded-2xl shadow border backdrop-blur-xl justify-start items-center gap-3 flex",children:[e("div",{className:"p-[6.67px] bg-black rounded-[50px] justify-start items-center gap-[12.50px] flex",children:e("div",{className:"w-[26.67px] h-[26.67px] relative"})}),a("div",{className:"grow shrink basis-0 flex-col justify-start items-start gap-[7px] inline-flex",children:[e("div",{className:"self-stretch text-[#0d0d0d] text-lg font-normal leading-[18px]",children:"200"}),e("div",{className:"self-stretch text-[#4f4f4f] text-xs font-normal leading-3",children:"Completed"})]})]}),a("div",{className:"grow shrink basis-0 h-16 p-3 bg-white/70 rounded-2xl shadow border backdrop-blur-xl justify-start items-center gap-3 flex",children:[e("div",{className:"p-[6.67px] bg-black rounded-[50px] justify-start items-center gap-[12.50px] flex",children:e("div",{className:"w-[26.67px] h-[26.67px] relative"})}),a("div",{className:"grow shrink basis-0 flex-col justify-start items-start gap-[7px] inline-flex",children:[e("div",{className:"self-stretch text-[#0d0d0d] text-lg font-normal leading-[18px]",children:"200"}),e("div",{className:"self-stretch text-[#4f4f4f] text-xs font-normal leading-3",children:"Company"})]})]}),a("div",{className:"grow shrink basis-0 h-16 p-3 bg-white/70 rounded-2xl shadow border backdrop-blur-xl justify-start items-center gap-3 flex",children:[e("div",{className:"p-[6.67px] bg-black rounded-[50px] justify-start items-center gap-[12.50px] flex",children:e("div",{className:"w-[26.67px] h-[26.67px] relative"})}),a("div",{className:"grow shrink basis-0 flex-col justify-start items-start gap-[7px] inline-flex",children:[e("div",{className:"self-stretch text-[#0d0d0d] text-lg font-normal leading-[18px]",children:"200"}),e("div",{className:"self-stretch text-[#4f4f4f] text-xs font-normal leading-3",children:"All Documents"})]})]})]})]})]}),xe=()=>a("div",{className:"w-full",children:[e(me,{}),e(pe,{})]}),Ae=function(){return e(xe,{})};export{Ae as component};
