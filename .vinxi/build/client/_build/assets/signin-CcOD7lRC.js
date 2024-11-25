import{B as v,k as w,r as m,j as e,E as x}from"./client-Bgb6eiQJ.js";import{B as k}from"./button-B3vbxScC.js";import{I as f}from"./index-Bi7O9J92.js";import{u as E,a as S,C as p,L as C,l as I}from"./auth-C5Uet0Gd.js";import{a as L}from"./fetch-CAcI-nM1.js";import{E as P,a as D}from"./eye-BqirDweq.js";import"./createLucideIcon-DdV2WPnr.js";const F=()=>{const o=v(),h=w(),{control:c,handleSubmit:u,setError:i,formState:{errors:r}}=E({}),[n,g]=m.useState(!1),[j,d]=m.useState(!1),{mutate:y,isError:_,error:B}=S({mutationFn:async a=>{try{d(!0);const s=await I(a);if(console.log(s,"response"),s?.status===200||s?.status===201){x.success(s?.data?.message);const{data:t}=s,l=new Date(t?.access_token_expires_at);L.set("token",t.access_token,{priority:"High",expires:l}),o({to:"/"})}else if(s?.status===422){const t=s?.data?.errors?.details;t&&t.forEach(l=>{(l.type==="any.empty"||l.type==="any.required")&&i(l.key,{type:l.type,message:l.message})})}else if(s?.status==404){const t=s?.data?.message;t&&i("email",{type:"manual",message:t})}else if(s?.status==403){const t=s?.data?.message;t&&i("password",{type:"manual",message:t})}else throw x.success(s?.data?.message),s}catch(s){console.error(s)}finally{d(!1)}}}),b=a=>{y(a)},N=()=>{g(!n)};return e.jsx("div",{className:"flex justify-center items-center h-full",children:e.jsxs("div",{className:"p-8 top-[100px] w-[400px]  absolute bg-white rounded-2xl shadow flex-col justify-center items-center gap-12 inline-flex border",children:[e.jsxs("div",{className:"self-stretch h-[71px] flex-col justify-start items-center gap-4 flex",children:[e.jsx("div",{className:"self-stretch text-center text-black text-[32px] font-normal leading-loose",children:"Login"}),e.jsx("div",{className:"self-stretch text-center text-[#333333] text-lg font-light leading-normal",children:"Greetings! Kindly enter your credentials."})]}),e.jsx("div",{className:"self-stretch flex-col justify-start items-center gap-6 flex",children:e.jsx("form",{onSubmit:u(b),className:"self-stretch flex-col justify-start items-center gap-6 flex",children:e.jsxs("div",{className:"self-stretch h-[297px] flex-col justify-start items-start gap-12 flex",children:[e.jsxs("div",{className:"self-stretch h-[201px] flex-col justify-start items-start gap-6 flex",children:[e.jsxs("div",{className:"self-stretch h-[72px] flex-col justify-start items-start gap-1.5 flex",children:[e.jsx("div",{className:"self-stretch text-black text-sm font-normal leading-[18.20px]",children:"Email"}),e.jsx(p,{name:"email",control:c,render:({field:a})=>e.jsxs("div",{className:"w-full",children:[e.jsx(f,{...a,type:"email",placeholder:"Enter email",className:"h-12 px-4 py-3.5 bg-white rounded-lg border border-black/30"}),r.email&&e.jsx("div",{className:"text-red-500 text-sm mt-1 capitalize",children:r?.email?.message})]})})]}),e.jsxs("div",{className:"self-stretch h-[105px] flex-col justify-start items-start gap-1.5 flex",children:[e.jsx("div",{className:"self-stretch text-black text-sm font-normal leading-[18.20px]",children:"Password"}),e.jsxs("div",{className:"self-stretch h-[81px] flex-col justify-start items-start gap-3 flex",children:[e.jsxs("div",{className:"w-full",children:[e.jsx(p,{name:"password",control:c,render:({field:a})=>e.jsxs("div",{className:"w-full relative",children:[e.jsx(f,{...a,type:n?"text":"password",placeholder:"Enter password",className:"h-12 px-4 py-3.5 bg-white rounded-lg border border-black/30 w-full"}),e.jsx("button",{type:"button",onClick:N,className:"absolute right-3 top-1/2 transform -translate-y-1/2 text-slate-800",children:n?e.jsx(P,{}):e.jsx(D,{})})]})}),r.password&&e.jsx("div",{className:"text-red-500 text-sm mt-1 capitalize",children:r?.password?.message})]}),e.jsx("div",{className:"self-stretch text-right text-black text-base font-medium leading-tight",children:"Forgot Password ?"})]})]})]}),e.jsx(k,{type:"submit",className:"text-black h-12 px-2.5 py-3.5 bg-[#ffc900] rounded-lg text-base font-medium leading-tight w-full",children:j?e.jsx(C,{className:"mr-2 h-5 w-5 animate-spin"}):"Login"})]})})}),e.jsxs("div",{className:"flex justify-center items-center gap-2",children:[e.jsxs("div",{className:"text-center text-[#0d0d0d] text-base font-light",children:["New to eSigns?"," "]}),e.jsx("div",{className:"text-center text-[#2f80ed] text-base font-normal cursor-pointer",onClick:()=>h.navigate({to:"/signup"}),children:"Sign up here."})]})]})})},K=function(){return e.jsx(F,{})};export{K as component};