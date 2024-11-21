import { jsx, jsxs } from 'react/jsx-runtime';
import { f } from './button-cyuXPM3g.mjs';
import { d } from './input-BNpTjTIy.mjs';
import { useMutation } from '@tanstack/react-query';
import { useNavigate, useRouter } from '@tanstack/react-router';
import o from 'js-cookie';
import { Eye, EyeOff, Loader2 } from 'lucide-react';
import { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { toast } from 'sonner';
import { n } from './auth-B0wetoCf.mjs';
import '@radix-ui/react-slot';
import 'class-variance-authority';
import 'clsx';
import 'tailwind-merge';
import './fetch-DqQ3Y-nf.mjs';

const _ = () => {
  const c = useNavigate({ from: "/" }), u = useRouter(), { control: m, handleSubmit: g, setError: o$1, formState: { errors: i } } = useForm({}), [n$1, y] = useState(false), [b, d$1] = useState(false), { mutate: N, isError: V, error: z } = useMutation({ mutationFn: async (r) => {
    var _a, _b, _c, _d, _e, _f;
    try {
      d$1(true);
      const t = await n(r);
      if ((t == null ? void 0 : t.status) === 200 || (t == null ? void 0 : t.status) === 201) {
        toast.success((_a = t == null ? void 0 : t.data) == null ? void 0 : _a.message);
        const { data: s } = t == null ? void 0 : t.data, l = new Date(s == null ? void 0 : s.access_token_expires_at);
        o.set("token", s.access_token, { priority: "High", expires: l }), c({ to: "/" });
      } else if ((t == null ? void 0 : t.status) === 422) {
        const s = (_c = (_b = t == null ? void 0 : t.data) == null ? void 0 : _b.errors) == null ? void 0 : _c.details;
        s && s.forEach((l) => {
          (l.type === "any.empty" || l.type === "any.required") && o$1(l.key, { type: l.type, message: l.message });
        });
      } else if ((t == null ? void 0 : t.status) == 404) {
        const s = (_d = t == null ? void 0 : t.data) == null ? void 0 : _d.message;
        s && o$1("email", { type: "manual", message: s });
      } else if ((t == null ? void 0 : t.status) == 403) {
        const s = (_e = t == null ? void 0 : t.data) == null ? void 0 : _e.message;
        s && o$1("password", { type: "manual", message: s });
      } else throw toast.success((_f = t == null ? void 0 : t.data) == null ? void 0 : _f.message), t;
    } catch (t) {
      console.error(t);
    } finally {
      d$1(false);
    }
  } }), v = (r) => {
    N(r);
  }, w = () => {
    y(!n$1);
  };
  return jsx("div", { className: "flex justify-center items-center h-full", children: jsxs("div", { className: "p-8 top-[100px] w-[400px]  absolute bg-white rounded-2xl shadow flex-col justify-center items-center gap-12 inline-flex border", children: [jsxs("div", { className: "self-stretch h-[71px] flex-col justify-start items-center gap-4 flex", children: [jsx("div", { className: "self-stretch text-center text-black text-[32px] font-normal leading-loose", children: "Login" }), jsx("div", { className: "self-stretch text-center text-[#333333] text-lg font-light leading-normal", children: "Greetings! Kindly enter your credentials." })] }), jsx("div", { className: "self-stretch flex-col justify-start items-center gap-6 flex", children: jsx("form", { onSubmit: g(v), className: "self-stretch flex-col justify-start items-center gap-6 flex", children: jsxs("div", { className: "self-stretch h-[297px] flex-col justify-start items-start gap-12 flex", children: [jsxs("div", { className: "self-stretch h-[201px] flex-col justify-start items-start gap-6 flex", children: [jsxs("div", { className: "self-stretch h-[72px] flex-col justify-start items-start gap-1.5 flex", children: [jsx("div", { className: "self-stretch text-black text-sm font-normal leading-[18.20px]", children: "Email" }), jsx(Controller, { name: "email", control: m, render: ({ field: r }) => {
    var _a;
    return jsxs("div", { className: "w-full", children: [jsx(d, { ...r, type: "email", placeholder: "Enter email", className: "h-12 px-4 py-3.5 bg-white rounded-lg border border-black/30" }), i.email && jsx("div", { className: "text-red-500 text-sm mt-1 capitalize", children: (_a = i == null ? void 0 : i.email) == null ? void 0 : _a.message })] });
  } })] }), jsxs("div", { className: "self-stretch h-[105px] flex-col justify-start items-start gap-1.5 flex", children: [jsx("div", { className: "self-stretch text-black text-sm font-normal leading-[18.20px]", children: "Password" }), jsxs("div", { className: "self-stretch h-[81px] flex-col justify-start items-start gap-3 flex", children: [jsx(Controller, { name: "password", control: m, render: ({ field: r }) => {
    var _a;
    return jsxs("div", { className: "w-full relative", children: [jsx(d, { ...r, type: n$1 ? "text" : "password", placeholder: "Enter password", className: "h-12 px-4 py-3.5 bg-white rounded-lg border border-black/30 w-full" }), jsx("button", { type: "button", onClick: w, className: "absolute right-3 top-1/2 transform -translate-y-1/2 text-slate-800", children: n$1 ? jsx(Eye, {}) : jsx(EyeOff, {}) }), i.password && jsx("div", { className: "text-red-500 text-sm mt-1 capitalize", children: (_a = i == null ? void 0 : i.password) == null ? void 0 : _a.message })] });
  } }), jsx("div", { className: "self-stretch text-right text-black text-base font-medium leading-tight", children: "Forgot Password ?" })] })] })] }), jsx(f, { type: "submit", className: "text-black h-12 px-2.5 py-3.5 bg-[#ffc900] rounded-lg text-base font-medium leading-tight w-full", children: b ? jsx(Loader2, { className: "mr-2 h-5 w-5 animate-spin" }) : "Login" })] }) }) }), jsxs("div", { className: "flex justify-center items-center gap-2", children: [jsxs("div", { className: "text-center text-[#0d0d0d] text-base font-light", children: ["New to eSigns?", " "] }), jsx("div", { className: "text-center text-[#2f80ed] text-base font-normal cursor-pointer", onClick: () => u.navigate({ to: "/signup" }), children: "Sign up here." })] })] }) });
}, Z = function() {
  return jsx(_, {});
};

export { Z as component };
//# sourceMappingURL=signin-BCeoXaA7.mjs.map
