import { jsx, jsxs } from 'react/jsx-runtime';
import { f } from './button-cyuXPM3g.mjs';
import { d } from './input-BNpTjTIy.mjs';
import { useMutation } from '@tanstack/react-query';
import { useNavigate, useRouter, useLocation } from '@tanstack/react-router';
import { Loader2 } from 'lucide-react';
import { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { a } from './auth-WogFKLky.mjs';
import '@radix-ui/react-slot';
import 'class-variance-authority';
import 'clsx';
import 'tailwind-merge';
import './fetch--oHJs5c1.mjs';
import 'js-cookie';

const P = () => {
  useNavigate({ from: "/" });
  const c = useRouter(), h = useLocation(), n = new URLSearchParams(h.search), m = n.get("email") || "";
  n.get("company");
  const [x, f$1] = useState(false), { control: d$1, handleSubmit: g, setError: o, formState: { errors: l }, trigger: y } = useForm({}), { mutate: v, isError: I, error: L } = useMutation({ mutationFn: async (i) => {
    var _a, _b, _c, _d;
    try {
      f$1(true);
      const t = await a(i);
      if ((t == null ? void 0 : t.status) === 200 || (t == null ? void 0 : t.status) === 201) c.navigate({ to: "/" });
      else if ((t == null ? void 0 : t.status) === 422) {
        const s = (_b = (_a = t == null ? void 0 : t.data) == null ? void 0 : _a.errors) == null ? void 0 : _b.details;
        s && s.forEach((r) => {
          (r.type === "any.empty" || r.type === "any.required") && o(r.key, { type: r.type, message: r.message });
        });
      } else if ((t == null ? void 0 : t.status) == 404) {
        const s = (_c = t == null ? void 0 : t.data) == null ? void 0 : _c.message;
        s && o("email", { type: "manual", message: s });
      } else if ((t == null ? void 0 : t.status) == 403) {
        const s = (_d = t == null ? void 0 : t.data) == null ? void 0 : _d.message;
        s && o("password", { type: "manual", message: s });
      } else throw t;
    } catch (t) {
      console.error(t);
    } finally {
      f$1(false);
    }
  } });
  return jsx("div", { className: "flex justify-center items-center h-full", children: jsxs("div", { className: "p-8 top-[100px] w-[400px]  absolute bg-white rounded-2xl shadow flex-col justify-center items-center gap-12 inline-flex border", children: [jsxs("div", { className: "self-stretch h-[71px] flex-col justify-start items-center gap-4 flex", children: [jsx("div", { className: "self-stretch text-center text-black text-[32px] font-normal leading-loose", children: "Emial Verification" }), jsx("div", { className: "self-stretch text-center text-[#333333] text-lg font-light leading-normal", children: "A Verfication mail has been sent to yout email account. please check your inbox to verify." })] }), jsx("hr", {}), jsx("div", { className: "self-stretch flex-col justify-start items-center gap-6 flex", children: jsx("form", { onSubmit: g(async (i) => {
    if (await y()) {
      let s = { ...i, email: m };
      v(s);
    }
  }), className: "self-stretch flex-col justify-start items-center gap-6 flex", children: jsxs("div", { className: "self-stretch h-[297px] flex-col justify-start items-start gap-12 flex", children: [jsxs("div", { className: "self-stretch h-[201px] flex-col justify-start items-start gap-6 flex", children: [jsxs("div", { className: "self-stretch h-[72px] flex-col justify-start items-start gap-1.5 flex", children: [jsx("div", { className: "self-stretch text-black text-sm font-normal leading-[18.20px]", children: "Email" }), jsx(Controller, { name: "email", rules: { required: "Email is required" }, control: d$1, disabled: true, defaultValue: m, render: ({ field: i }) => {
    var _a;
    return jsxs("div", { className: "w-full", children: [jsx(d, { ...i, type: "email", placeholder: "Enter email", className: "h-12 px-4 py-3.5 bg-white rounded-lg border border-black/30" }), l.email && jsx("div", { className: "text-red-500 text-sm mt-1 capitalize", children: (_a = l == null ? void 0 : l.email) == null ? void 0 : _a.message })] });
  } })] }), jsxs("div", { className: "self-stretch h-[105px] flex-col justify-start items-start gap-1.5 flex", children: [jsx("div", { className: "self-stretch text-black text-sm font-normal leading-[18.20px]", children: "Verfication Code (OTP)" }), jsx("div", { className: "self-stretch h-[81px] flex-col justify-start items-start gap-3 flex", children: jsx(Controller, { name: "verification_code", control: d$1, rules: { required: "Verification code is required" }, render: ({ field: i }) => {
    var _a;
    return jsxs("div", { className: "w-full relative", children: [jsx(d, { ...i, type: "text", placeholder: "Enter verification code", className: "h-12 px-4 py-3.5 bg-white rounded-lg border border-black/30 w-full" }), l.verification_code && jsx("div", { className: "text-red-500 text-sm mt-1 capitalize", children: (_a = l == null ? void 0 : l.verification_code) == null ? void 0 : _a.message })] });
  } }) })] })] }), jsx(f, { type: "submit", className: "text-black h-12 px-2.5 py-3.5 bg-[#2f80ed] rounded-lg text-base font-medium leading-tight w-full", children: x ? jsx(Loader2, { className: "mr-2 h-5 w-5 animate-spin" }) : "Verify" })] }) }) })] }) });
}, K = function() {
  return jsx(P, {});
};

export { K as component };
//# sourceMappingURL=verify-CM-DXcJu.mjs.map
