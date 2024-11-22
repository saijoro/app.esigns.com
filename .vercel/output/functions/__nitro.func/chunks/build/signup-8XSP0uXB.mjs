import { jsx, jsxs, Fragment } from 'react/jsx-runtime';
import * as i from 'react';
import { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import * as z from '@radix-ui/react-label';
import { cva } from 'class-variance-authority';
import { a, d } from './input-BNpTjTIy.mjs';
import * as C from '@radix-ui/react-radio-group';
import { DotFilledIcon, CheckIcon } from '@radix-ui/react-icons';
import * as q from '@radix-ui/react-checkbox';
import { Eye, EyeOff, Loader2 } from 'lucide-react';
import { useMutation } from '@tanstack/react-query';
import { o, c } from './auth-WogFKLky.mjs';
import { useRouter } from '@tanstack/react-router';
import 'clsx';
import 'tailwind-merge';
import './fetch--oHJs5c1.mjs';
import 'js-cookie';

const H = cva("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"), P = i.forwardRef(({ className: l, ...t }, c) => jsx(z.Root, { ref: c, className: a(H(), l), ...t }));
P.displayName = z.Root.displayName;
const V = i.forwardRef(({ className: l, ...t }, c) => jsx(C.Root, { className: a("grid gap-2", l), ...t, ref: c }));
V.displayName = C.Root.displayName;
const E = i.forwardRef(({ className: l, ...t }, c) => jsx(C.Item, { ref: c, className: a("aspect-square h-4 w-4 rounded-full border border-primary text-primary shadow focus:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50", l), ...t, children: jsx(C.Indicator, { className: "flex items-center justify-center", children: jsx(DotFilledIcon, { className: "h-3.5 w-3.5 fill-primary" }) }) }));
E.displayName = C.Item.displayName;
const M = i.forwardRef(({ className: l, ...t }, c) => jsx(q.Root, { ref: c, className: a("peer h-4 w-4 shrink-0 rounded-sm border border-primary shadow focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground", l), ...t, children: jsx(q.Indicator, { className: a("flex items-center justify-center text-current"), children: jsx(CheckIcon, { className: "h-4 w-4" }) }) }));
M.displayName = q.Root.displayName;
const J = ({ control: l, errors: t, getValues: c }) => {
  const [g, d$1] = useState("individual"), [u, N] = useState(""), [h, m] = useState(""), [x, j] = useState({ password: false, confirmPassword: false }), [r, o] = useState({ uppercase: false, lowercase: false, number: false, symbol: false, passwordMatch: false }), f = { uppercase: /[A-Z]/, lowercase: /[a-z]/, number: /[0-9]/, symbol: /[!@#$%^&*(),.?":{}|<>]/ }, I = (i) => {
    const a = i.target.value;
    N(a);
    const n = { uppercase: f.uppercase.test(a), lowercase: f.lowercase.test(a), number: f.number.test(a), symbol: f.symbol.test(a), passwordMatch: a === h };
    o(n);
  }, A = (i) => {
    const a = i.target.value;
    m(a), o((n) => ({ ...n, passwordMatch: u === a }));
  }, R = (i) => {
    console.log(i), j((a) => ({ ...a, [i]: !a[i] }));
  };
  return jsxs("div", { className: "w-[500px] p-8 flex flex-col justify-start items-center gap-6", children: [jsxs("div", { className: "w-full flex flex-col gap-4", children: [jsx("div", { className: "text-black text-sm font-normal", children: "Choose Account Type" }), jsx(Controller, { name: "plan_type", defaultValue: "individual", control: l, render: ({ field: i }) => jsxs(V, { ...i, className: "w-full flex flex-row", onValueChange: (a) => {
    i.onChange(a), d$1(a);
  }, children: [jsxs("div", { className: "flex items-center space-x-2", children: [jsx(E, { value: "individual", id: "individual" }), jsx(P, { htmlFor: "individual", className: "cursor-pointer", children: "Individual" })] }), jsxs("div", { className: "flex items-center space-x-2", children: [jsx(E, { value: "business", id: "business" }), jsx(P, { htmlFor: "business", className: "cursor-pointer", children: "Business" })] })] }) })] }), g === "business" && jsxs("div", { className: "w-full flex flex-col gap-4", children: [jsxs("div", { className: "text-black text-sm font-normal", children: ["Company Name", jsx("span", { className: "text-red-500", children: "*" })] }), jsx(Controller, { name: "company", rules: { required: "Company name is required" }, control: l, render: ({ field: i }) => {
    var _a;
    return jsxs("div", { className: "w-full", children: [jsx(d, { ...i, type: "text", placeholder: "Enter your company name", className: "h-12 px-4 py-3.5 bg-white border border-black/30" }), t.company && jsx("div", { className: "text-red-500 text-sm mt-1 capitalize", children: (_a = t == null ? void 0 : t.company) == null ? void 0 : _a.message })] });
  } })] }), !c("user_exist") && jsxs(Fragment, { children: [jsxs("div", { className: "w-full flex flex-col gap-4", children: [jsxs("div", { className: "text-black text-sm font-normal", children: ["Password", jsx("span", { className: "text-red-500", children: "*" })] }), jsx(Controller, { name: "password", control: l, rules: { required: "Password is required" }, render: ({ field: i }) => {
    var _a;
    return jsxs("div", { className: "w-full relative", children: [jsx(d, { ...i, type: x.password ? "text" : "password", placeholder: "Enter your password", className: "h-12 px-4 py-3.5 bg-white border border-black/30", onChange: (a) => {
      i.onChange(a), I(a);
    } }), jsx("button", { type: "button", onClick: () => R("password"), className: "absolute right-3 top-1/2 transform -translate-y-1/2 text-slate-800", children: x.password ? jsx(Eye, {}) : jsx(EyeOff, {}) }), t.password && jsx("div", { className: "text-red-500 text-sm mt-1 capitalize", children: (_a = t == null ? void 0 : t.password) == null ? void 0 : _a.message })] });
  } })] }), jsxs("div", { className: "w-full flex flex-col gap-4", children: [jsx("div", { className: "text-black text-sm font-normal", children: "Confirm password" }), jsx(Controller, { name: "cPassword", control: l, rules: { required: "Confirm password is required" }, render: ({ field: i }) => {
    var _a;
    return jsxs("div", { className: "w-full relative", children: [jsx(d, { ...i, type: (x == null ? void 0 : x.confirmPassword) ? "text" : "password", placeholder: "Confirm your password", className: "h-12 px-4 py-3.5 bg-white border border-black/30", onChange: (a) => {
      i.onChange(a), A(a);
    } }), jsx("button", { type: "button", onClick: () => R("confirmPassword"), className: "absolute right-3 top-1/2 transform -translate-y-1/2 text-slate-800", children: (x == null ? void 0 : x.confirmPassword) ? jsx(Eye, {}) : jsx(EyeOff, {}) }), t.cPassword && jsx("div", { className: "text-red-500 text-sm mt-1 capitalize", children: (_a = t == null ? void 0 : t.cPassword) == null ? void 0 : _a.message })] });
  } })] }), u ? jsxs("div", { className: "w-full flex flex-col gap-4 mt-4", children: [jsx("div", { className: "text-black text-sm font-normal", children: "Password Requirements:" }), jsxs("ul", { className: "list-disc pl-5", children: [jsxs("li", { className: `flex items-center ${r.uppercase ? "text-green-500" : "text-red-500"}`, children: [r.uppercase ? "\u2714\uFE0F" : "\u274C", " At least one uppercase letter (A-Z)"] }), jsxs("li", { className: `flex items-center ${r.lowercase ? "text-green-500" : "text-red-500"}`, children: [r.lowercase ? "\u2714\uFE0F" : "\u274C", " At least one lowercase letter (a-z)"] }), jsxs("li", { className: `flex items-center ${r.number ? "text-green-500" : "text-red-500"}`, children: [r.number ? "\u2714\uFE0F" : "\u274C", " At least one number (0-9)"] }), jsxs("li", { className: `flex items-center ${r.symbol ? "text-green-500" : "text-red-500"}`, children: [r.symbol ? "\u2714\uFE0F" : "\u274C", " At least one symbol (!@#$%^&*)"] }), jsxs("li", { className: `flex items-center ${r.passwordMatch ? "text-green-500" : "text-red-500"}`, children: [r.passwordMatch ? "\u2714\uFE0F" : "\u274C", " Passwords match"] })] })] }) : ""] }), jsx("div", { className: "flex items-center space-x-2 mt-4", children: jsx(Controller, { name: "terms_and_conditions", control: l, render: ({ field: i }) => jsxs(Fragment, { children: [jsx(M, { ...i, id: "terms", checked: i.value, onCheckedChange: (a) => i.onChange(a), className: "w-4 h-4 border border-black/30" }), jsx(P, { htmlFor: "terms", className: "text-sm cursor-pointer font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70", children: "I agree to eSigns Terms of Service and Privacy Policy" })] }) }) }), jsx("div", { className: "w-full py-4 bg-[#0d0d0d] rounded-xl flex justify-center items-center mt-6", children: jsx("button", { type: "submit", className: "text-white text-lg font-medium w-full", children: "Submit" }) })] });
}, K = ({ loading: l, label: t }) => l ? jsx("div", { className: "absolute inset-0 z-50 flex items-center justify-center bg-white/80", children: jsxs("div", { className: "flex flex-col items-center gap-8 lg justify-center", children: [jsx(Loader2, { className: "mr-5 h-7 w-7 animate-spin" }), jsx("span", { children: t })] }) }) : null, Q = ({ control: l, errors: t, step: c$1, handleNext: g, setValue: d$1, getValues: u }) => {
  const [N, h] = useState(false), { mutate: m, isError: x, error: j } = useMutation({ mutationFn: async (r) => {
    try {
      h(true);
      const o = await c(r);
      if ((o == null ? void 0 : o.status) === 200 || (o == null ? void 0 : o.status) === 201) {
        const { message: f } = o == null ? void 0 : o.data;
        d$1("first_name", (f == null ? void 0 : f.first_name) || ""), d$1("last_name", (f == null ? void 0 : f.last_name) || ""), d$1("phone", (f == null ? void 0 : f.phone) || ""), d$1("user_exist", true);
      } else d$1("user_exist", false), d$1("first_name", ""), d$1("last_name", ""), d$1("phone", "");
    } catch (o) {
      console.error(o);
    } finally {
      h(false);
    }
  } });
  return jsxs("div", { className: "w-[500px] flex flex-col justify-start items-start gap-8", children: [jsxs("div", { className: "w-full flex flex-col justify-start items-start gap-8", children: [jsxs("div", { className: "flex flex-col w-full gap-2.5", children: [jsxs("label", { className: "text-black text-sm font-normal", children: ["Email", jsx("span", { className: "text-red-500", children: "*" })] }), jsx(Controller, { name: "email", control: l, rules: { required: "Email is required", pattern: /^\S+@\S+\.\S+$/ }, render: ({ field: r }) => {
    var _a;
    return jsxs("div", { className: "w-full", children: [jsx(d, { ...r, onBlur: (o) => m(o.target.value), type: "email", placeholder: "Enter your email", className: "h-12 px-4 py-3.5 bg-white rounded-lg border border-black/30" }), t.email && jsx("div", { className: "text-red-500 text-sm mt-1 capitalize", children: (_a = t == null ? void 0 : t.email) == null ? void 0 : _a.message })] });
  } })] }), jsxs("div", { className: "flex w-full justify-between gap-8", children: [jsxs("div", { className: "flex flex-col w-full gap-2.5", children: [jsxs("label", { className: "text-black text-sm font-normal", children: ["First Name", jsx("span", { className: "text-red-500", children: "*" })] }), jsx(Controller, { name: "first_name", control: l, disabled: u("user_exist"), rules: { required: "First Name is required" }, render: ({ field: r }) => {
    var _a;
    return jsxs("div", { className: "w-full", children: [jsx(d, { ...r, type: "text", placeholder: "Enter your first name", className: "h-12 px-4 py-3.5 bg-white rounded-lg border border-black/30" }), t.first_name && jsx("div", { className: "text-red-500 text-sm mt-1 capitalize", children: (_a = t == null ? void 0 : t.first_name) == null ? void 0 : _a.message })] });
  } })] }), jsxs("div", { className: "flex flex-col w-full gap-2.5", children: [jsxs("label", { className: "text-black text-sm font-normal", children: ["Last Name", jsx("span", { className: "text-red-500", children: "*" })] }), jsx(Controller, { name: "last_name", control: l, disabled: u("user_exist"), rules: { required: "Last Name is required" }, render: ({ field: r }) => {
    var _a;
    return jsxs("div", { className: "w-full", children: [jsx(d, { ...r, type: "text", placeholder: "Enter your last name", className: "h-12 px-4 py-3.5 bg-white rounded-lg border border-black/30" }), t.last_name && jsx("div", { className: "text-red-500 text-sm mt-1 capitalize", children: (_a = t == null ? void 0 : t.last_name) == null ? void 0 : _a.message })] });
  } })] })] }), jsxs("div", { className: "flex flex-col w-full gap-2.5", children: [jsxs("label", { className: "text-black text-sm font-normal", children: ["Phone Number", jsx("span", { className: "text-red-500", children: "*" })] }), jsx(Controller, { name: "phone", control: l, rules: { required: "Phone Number is required" }, disabled: u("user_exist"), render: ({ field: r }) => {
    var _a;
    return jsxs("div", { className: "w-full", children: [jsx(d, { ...r, type: "text", placeholder: "Enter your phone number", className: "h-12 px-4 py-3.5 bg-white rounded-lg border border-black/30" }), t.phone && jsx("div", { className: "text-red-500 text-sm mt-1 capitalize", children: (_a = t == null ? void 0 : t.phone) == null ? void 0 : _a.message })] });
  } })] })] }), c$1 === 1 && jsx("div", { className: "w-full py-4 bg-[#0d0d0d] rounded-xl flex justify-center items-center", children: jsx("button", { onClick: g, className: "text-white text-lg font-medium w-full", children: "Next" }) }), jsx(K, { loading: N, label: "Please wait, while we are validating your email address." })] });
}, W = () => {
  const l = useRouter(), { control: t, handleSubmit: c, setError: g, setValue: d, formState: { errors: u }, getValues: N, trigger: h } = useForm({}), [m, x] = useState(1), [j, r] = useState(false), o$1 = async (a) => {
    await h() && x(a);
  }, f = async () => {
    await h() && m < 2 && x(m + 1);
  }, { mutate: I, isError: A, error: R } = useMutation({ mutationFn: async (a) => {
    var _a, _b, _c, _d, _e;
    try {
      r(true);
      const n = await o(a);
      if ((n == null ? void 0 : n.status) === 200 || (n == null ? void 0 : n.status) === 201) l.navigate({ to: "/verify", search: { email: N("email"), company_id: (_a = n == null ? void 0 : n.data) == null ? void 0 : _a._id } });
      else if ((n == null ? void 0 : n.status) === 422) {
        const b = (_c = (_b = n == null ? void 0 : n.data) == null ? void 0 : _b.errors) == null ? void 0 : _c.details;
        b && b.forEach((v) => {
          (v.type === "any.empty" || v.type === "any.required") && g(v.key, { type: v.type, message: v.message });
        });
      } else if ((n == null ? void 0 : n.status) == 404) {
        const b = (_d = n == null ? void 0 : n.data) == null ? void 0 : _d.message;
        b && g("email", { type: "manual", message: b });
      } else if ((n == null ? void 0 : n.status) == 403) {
        const b = (_e = n == null ? void 0 : n.data) == null ? void 0 : _e.message;
        b && g("password", { type: "manual", message: b });
      } else throw n;
    } catch (n) {
      console.error(n);
    } finally {
      r(false);
    }
  } });
  return jsx("div", { className: "w-full flex justify-center items-center h-full border", children: jsxs("div", { className: "px-6 py-3 top-10 absolute bg-white rounded-2xl shadow flex-col justify-start items-center gap-2 inline-flex border ", children: [jsxs("div", { className: "top-2 justify-center items-center gap-2 inline-flex", children: [jsx("div", { onClick: () => o$1(1), className: `px-4 py-1 rounded-full flex justify-center items-center cursor-pointer ${m === 1 ? "bg-black" : "bg-[#f6f6f6]"}`, children: jsx("div", { className: `text-center ${m === 1 ? "text-[#ffc900]" : "text-[#0d0d0d]"} text-lg font-normal`, children: "1" }) }), jsx("div", { className: "w-52 h-[0px] border border-[#333333]" }), jsx("div", { onClick: () => o$1(2), className: `px-4 py-2 rounded-full flex justify-center items-center cursor-pointer ${m === 2 ? "bg-black" : "bg-[#f6f6f6]"}`, children: jsx("div", { className: `text-center ${m === 2 ? "text-[#ffc900]" : "text-[#0d0d0d]"} text-lg font-normal`, children: "2" }) })] }), jsxs("div", { className: "w-full flex flex-col justify-start items-center gap-4", children: [jsx("div", { className: "text-center text-black text-2xl font-normal leading-loose", children: "Personal Information" }), jsx("div", { className: "text-center text-[#333333] text-lg font-light leading-normal", children: "Tell Us About Yourself" })] }), jsx("div", { children: jsx("form", { onSubmit: c(async (a) => {
    await h() && I(a);
  }), className: "self-stretch flex-col justify-start items-center gap-6 flex", children: m === 1 ? jsx(Q, { control: t, errors: u, step: m, handleNext: f, setValue: d, getValues: N }) : jsx(J, { control: t, errors: u, getValues: N }) }) }), jsxs("div", { className: "flex justify-center items-center gap-2", children: [jsx("div", { className: "text-center text-[#0d0d0d] text-base font-light", children: "Already have an Account?" }), jsx("div", { className: "text-center text-[#2f80ed] text-base font-normal cursor-pointer", onClick: () => l.navigate({ to: "/signin" }), children: "Log In" })] })] }) });
}, ue = function() {
  return jsx(W, {});
};

export { ue as component };
//# sourceMappingURL=signup-8XSP0uXB.mjs.map
