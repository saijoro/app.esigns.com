import{jsx as e,jsxs as a}from"react/jsx-runtime";import{B as k}from"./button-cyuXPM3g.js";import{I as f}from"./input-BNpTjTIy.js";import{useMutation as j}from"@tanstack/react-query";import{useNavigate as E,useRouter as S}from"@tanstack/react-router";import C from"js-cookie";import{Eye as I,EyeOff as P,Loader2 as D}from"lucide-react";import{useState as p}from"react";import{useForm as F,Controller as x}from"react-hook-form";import{toast as h}from"sonner";import{l as L}from"./auth-B0wetoCf.js";import"@radix-ui/react-slot";import"class-variance-authority";import"clsx";import"tailwind-merge";import"./fetch-DqQ3Y-nf.js";const _=()=>{const c=E({from:"/"}),u=S(),{control:m,handleSubmit:g,setError:o,formState:{errors:i}}=F({}),[n,y]=p(!1),[b,d]=p(!1),{mutate:N,isError:V,error:z}=j({mutationFn:async r=>{try{d(!0);const t=await L(r);if(t?.status===200||t?.status===201){h.success(t?.data?.message);const{data:s}=t?.data,l=new Date(s?.access_token_expires_at);C.set("token",s.access_token,{priority:"High",expires:l}),c({to:"/"})}else if(t?.status===422){const s=t?.data?.errors?.details;s&&s.forEach(l=>{(l.type==="any.empty"||l.type==="any.required")&&o(l.key,{type:l.type,message:l.message})})}else if(t?.status==404){const s=t?.data?.message;s&&o("email",{type:"manual",message:s})}else if(t?.status==403){const s=t?.data?.message;s&&o("password",{type:"manual",message:s})}else throw h.success(t?.data?.message),t}catch(t){console.error(t)}finally{d(!1)}}}),v=r=>{N(r)},w=()=>{y(!n)};return e("div",{className:"flex justify-center items-center h-full",children:a("div",{className:"p-8 top-[100px] w-[400px]  absolute bg-white rounded-2xl shadow flex-col justify-center items-center gap-12 inline-flex border",children:[a("div",{className:"self-stretch h-[71px] flex-col justify-start items-center gap-4 flex",children:[e("div",{className:"self-stretch text-center text-black text-[32px] font-normal leading-loose",children:"Login"}),e("div",{className:"self-stretch text-center text-[#333333] text-lg font-light leading-normal",children:"Greetings! Kindly enter your credentials."})]}),e("div",{className:"self-stretch flex-col justify-start items-center gap-6 flex",children:e("form",{onSubmit:g(v),className:"self-stretch flex-col justify-start items-center gap-6 flex",children:a("div",{className:"self-stretch h-[297px] flex-col justify-start items-start gap-12 flex",children:[a("div",{className:"self-stretch h-[201px] flex-col justify-start items-start gap-6 flex",children:[a("div",{className:"self-stretch h-[72px] flex-col justify-start items-start gap-1.5 flex",children:[e("div",{className:"self-stretch text-black text-sm font-normal leading-[18.20px]",children:"Email"}),e(x,{name:"email",control:m,render:({field:r})=>a("div",{className:"w-full",children:[e(f,{...r,type:"email",placeholder:"Enter email",className:"h-12 px-4 py-3.5 bg-white rounded-lg border border-black/30"}),i.email&&e("div",{className:"text-red-500 text-sm mt-1 capitalize",children:i?.email?.message})]})})]}),a("div",{className:"self-stretch h-[105px] flex-col justify-start items-start gap-1.5 flex",children:[e("div",{className:"self-stretch text-black text-sm font-normal leading-[18.20px]",children:"Password"}),a("div",{className:"self-stretch h-[81px] flex-col justify-start items-start gap-3 flex",children:[e(x,{name:"password",control:m,render:({field:r})=>a("div",{className:"w-full relative",children:[e(f,{...r,type:n?"text":"password",placeholder:"Enter password",className:"h-12 px-4 py-3.5 bg-white rounded-lg border border-black/30 w-full"}),e("button",{type:"button",onClick:w,className:"absolute right-3 top-1/2 transform -translate-y-1/2 text-slate-800",children:n?e(I,{}):e(P,{})}),i.password&&e("div",{className:"text-red-500 text-sm mt-1 capitalize",children:i?.password?.message})]})}),e("div",{className:"self-stretch text-right text-black text-base font-medium leading-tight",children:"Forgot Password ?"})]})]})]}),e(k,{type:"submit",className:"text-black h-12 px-2.5 py-3.5 bg-[#ffc900] rounded-lg text-base font-medium leading-tight w-full",children:b?e(D,{className:"mr-2 h-5 w-5 animate-spin"}):"Login"})]})})}),a("div",{className:"flex justify-center items-center gap-2",children:[a("div",{className:"text-center text-[#0d0d0d] text-base font-light",children:["New to eSigns?"," "]}),e("div",{className:"text-center text-[#2f80ed] text-base font-normal cursor-pointer",onClick:()=>u.navigate({to:"/signup"}),children:"Sign up here."})]})]})})},Z=function(){return e(_,{})};export{Z as component};
