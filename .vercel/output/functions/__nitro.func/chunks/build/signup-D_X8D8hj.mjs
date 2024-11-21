import { jsx, jsxs, Fragment } from 'react/jsx-runtime';
import * as i from 'react';
import { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import * as E from '@radix-ui/react-label';
import { cva } from 'class-variance-authority';
import { a, d } from './input-BNpTjTIy.mjs';
import * as P from '@radix-ui/react-radio-group';
import { DotFilledIcon, CheckIcon } from '@radix-ui/react-icons';
import * as q from '@radix-ui/react-checkbox';
import { useMutation } from '@tanstack/react-query';
import { Loader2 } from 'lucide-react';
import { o, c } from './auth-B0wetoCf.mjs';
import { useRouter } from '@tanstack/react-router';
import 'clsx';
import 'tailwind-merge';
import './fetch-DqQ3Y-nf.mjs';
import 'js-cookie';

const Z = cva("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"), I = i.forwardRef(({ className: t, ...s }, d) => jsx(E.Root, { ref: d, className: a(Z(), t), ...s }));
I.displayName = E.Root.displayName;
const F = i.forwardRef(({ className: t, ...s }, d) => jsx(P.Root, { className: a("grid gap-2", t), ...s, ref: d }));
F.displayName = P.Root.displayName;
const S = i.forwardRef(({ className: t, ...s }, d) => jsx(P.Item, { ref: d, className: a("aspect-square h-4 w-4 rounded-full border border-primary text-primary shadow focus:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50", t), ...s, children: jsx(P.Indicator, { className: "flex items-center justify-center", children: jsx(DotFilledIcon, { className: "h-3.5 w-3.5 fill-primary" }) }) }));
S.displayName = P.Item.displayName;
const z = i.forwardRef(({ className: t, ...s }, d) => jsx(q.Root, { ref: d, className: a("peer h-4 w-4 shrink-0 rounded-sm border border-primary shadow focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground", t), ...s, children: jsx(q.Indicator, { className: a("flex items-center justify-center text-current"), children: jsx(CheckIcon, { className: "h-4 w-4" }) }) }));
z.displayName = q.Root.displayName;
const Y = ({ control: t, errors: s, getValues: d$1 }) => {
  const [b, o] = useState("individual"), [f, N] = useState(""), [h, m] = useState(""), [n, _] = useState({ uppercase: false, lowercase: false, number: false, symbol: false, passwordMatch: false }), i = { uppercase: /[A-Z]/, lowercase: /[a-z]/, number: /[0-9]/, symbol: /[!@#$%^&*(),.?":{}|<>]/ }, u = (r) => {
    const l = r.target.value;
    N(l);
    const j = { uppercase: i.uppercase.test(l), lowercase: i.lowercase.test(l), number: i.number.test(l), symbol: i.symbol.test(l), passwordMatch: l === h };
    _(j);
  }, g = (r) => {
    const l = r.target.value;
    m(l), _((j) => ({ ...j, passwordMatch: f === l }));
  };
  return jsxs("div", { className: "w-[500px] p-8 flex flex-col justify-start items-center gap-6", children: [jsxs("div", { className: "w-full flex flex-col gap-4", children: [jsx("div", { className: "text-black text-sm font-normal", children: "Choose Account Type" }), jsx(Controller, { name: "plan_type", defaultValue: "individual", control: t, render: ({ field: r }) => jsxs(F, { ...r, className: "w-full flex flex-row", onValueChange: (l) => {
    r.onChange(l), o(l);
  }, children: [jsxs("div", { className: "flex items-center space-x-2", children: [jsx(S, { value: "individual", id: "individual" }), jsx(I, { htmlFor: "individual", className: "cursor-pointer", children: "Individual" })] }), jsxs("div", { className: "flex items-center space-x-2", children: [jsx(S, { value: "business", id: "business" }), jsx(I, { htmlFor: "business", className: "cursor-pointer", children: "Business" })] })] }) })] }), b === "business" && jsxs("div", { className: "w-full flex flex-col gap-4", children: [jsxs("div", { className: "text-black text-sm font-normal", children: ["Company Name", jsx("span", { className: "text-red-500", children: "*" })] }), jsx(Controller, { name: "company", rules: { required: "Company name is required" }, control: t, render: ({ field: r }) => {
    var _a;
    return jsxs("div", { className: "w-full", children: [jsx(d, { ...r, type: "text", placeholder: "Enter your company name", className: "h-12 px-4 py-3.5 bg-white border border-black/30" }), s.company && jsx("div", { className: "text-red-500 text-sm mt-1 capitalize", children: (_a = s == null ? void 0 : s.company) == null ? void 0 : _a.message })] });
  } })] }), !d$1("user_exist") && jsxs(Fragment, { children: [jsxs("div", { className: "w-full flex flex-col gap-4", children: [jsxs("div", { className: "text-black text-sm font-normal", children: ["Password", jsx("span", { className: "text-red-500", children: "*" })] }), jsx(Controller, { name: "password", control: t, rules: { required: "Password is required" }, render: ({ field: r }) => {
    var _a;
    return jsxs("div", { className: "w-full", children: [jsx(d, { ...r, type: "password", placeholder: "Enter your password", className: "h-12 px-4 py-3.5 bg-white border border-black/30", onChange: (l) => {
      r.onChange(l), u(l);
    } }), s.password && jsx("div", { className: "text-red-500 text-sm mt-1 capitalize", children: (_a = s == null ? void 0 : s.password) == null ? void 0 : _a.message })] });
  } })] }), jsxs("div", { className: "w-full flex flex-col gap-4", children: [jsx("div", { className: "text-black text-sm font-normal", children: "Confirm password" }), jsx(Controller, { name: "cPassword", control: t, rules: { required: "Confirm password is required" }, render: ({ field: r }) => {
    var _a;
    return jsxs("div", { className: "w-full", children: [jsx(d, { ...r, type: "password", placeholder: "Confirm your password", className: "h-12 px-4 py-3.5 bg-white border border-black/30", onChange: (l) => {
      r.onChange(l), g(l);
    } }), s.cPassword && jsx("div", { className: "text-red-500 text-sm mt-1 capitalize", children: (_a = s == null ? void 0 : s.cPassword) == null ? void 0 : _a.message })] });
  } })] }), f ? jsxs("div", { className: "w-full flex flex-col gap-4 mt-4", children: [jsx("div", { className: "text-black text-sm font-normal", children: "Password Requirements:" }), jsxs("ul", { className: "list-disc pl-5", children: [jsxs("li", { className: `flex items-center ${n.uppercase ? "text-green-500" : "text-red-500"}`, children: [n.uppercase ? "\u2714\uFE0F" : "\u274C", " At least one uppercase letter (A-Z)"] }), jsxs("li", { className: `flex items-center ${n.lowercase ? "text-green-500" : "text-red-500"}`, children: [n.lowercase ? "\u2714\uFE0F" : "\u274C", " At least one lowercase letter (a-z)"] }), jsxs("li", { className: `flex items-center ${n.number ? "text-green-500" : "text-red-500"}`, children: [n.number ? "\u2714\uFE0F" : "\u274C", " At least one number (0-9)"] }), jsxs("li", { className: `flex items-center ${n.symbol ? "text-green-500" : "text-red-500"}`, children: [n.symbol ? "\u2714\uFE0F" : "\u274C", " At least one symbol (!@#$%^&*)"] }), jsxs("li", { className: `flex items-center ${n.passwordMatch ? "text-green-500" : "text-red-500"}`, children: [n.passwordMatch ? "\u2714\uFE0F" : "\u274C", " Passwords match"] })] })] }) : ""] }), jsx("div", { className: "flex items-center space-x-2 mt-4", children: jsx(Controller, { name: "terms_and_conditions", control: t, render: ({ field: r }) => jsxs(Fragment, { children: [jsx(z, { ...r, id: "terms", checked: r.value, onCheckedChange: (l) => r.onChange(l), className: "w-4 h-4 border border-black/30" }), jsx(I, { htmlFor: "terms", className: "text-sm cursor-pointer font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70", children: "I agree to eSigns Terms of Service and Privacy Policy" })] }) }) }), jsx("div", { className: "w-full py-4 bg-[#0d0d0d] rounded-xl flex justify-center items-center mt-6", children: jsx("button", { type: "submit", className: "text-white text-lg font-medium w-full", children: "Submit" }) })] });
}, H = ({ loading: t, label: s }) => t ? jsx("div", { className: "absolute inset-0 z-50 flex items-center justify-center bg-white/80", children: jsxs("div", { className: "flex flex-col items-center gap-8 lg justify-center", children: [jsx(Loader2, { className: "mr-5 h-7 w-7 animate-spin" }), jsx("span", { children: s })] }) }) : null, J = ({ control: t, errors: s, step: d$1, handleNext: b, setValue: o, getValues: f }) => {
  const [N, h] = useState(false), { mutate: m, isError: n, error: _ } = useMutation({ mutationFn: async (i) => {
    try {
      h(true);
      const u = await c(i);
      if ((u == null ? void 0 : u.status) === 200 || (u == null ? void 0 : u.status) === 201) {
        const { message: g } = u == null ? void 0 : u.data;
        o("first_name", (g == null ? void 0 : g.first_name) || ""), o("last_name", (g == null ? void 0 : g.last_name) || ""), o("phone", (g == null ? void 0 : g.phone) || ""), o("user_exist", true);
      } else o("user_exist", false), o("first_name", ""), o("last_name", ""), o("phone", "");
    } catch (u) {
      console.error(u);
    } finally {
      h(false);
    }
  } });
  return jsxs("div", { className: "w-[500px] flex flex-col justify-start items-start gap-8", children: [jsxs("div", { className: "w-full flex flex-col justify-start items-start gap-8", children: [jsxs("div", { className: "flex flex-col w-full gap-2.5", children: [jsxs("label", { className: "text-black text-sm font-normal", children: ["Email", jsx("span", { className: "text-red-500", children: "*" })] }), jsx(Controller, { name: "email", control: t, rules: { required: "Email is required", pattern: /^\S+@\S+\.\S+$/ }, render: ({ field: i }) => {
    var _a;
    return jsxs("div", { className: "w-full", children: [jsx(d, { ...i, onBlur: (u) => m(u.target.value), type: "email", placeholder: "Enter your email", className: "h-12 px-4 py-3.5 bg-white rounded-lg border border-black/30" }), s.email && jsx("div", { className: "text-red-500 text-sm mt-1 capitalize", children: (_a = s == null ? void 0 : s.email) == null ? void 0 : _a.message })] });
  } })] }), jsxs("div", { className: "flex w-full justify-between gap-8", children: [jsxs("div", { className: "flex flex-col w-full gap-2.5", children: [jsxs("label", { className: "text-black text-sm font-normal", children: ["First Name", jsx("span", { className: "text-red-500", children: "*" })] }), jsx(Controller, { name: "first_name", control: t, disabled: f("user_exist"), rules: { required: "First Name is required" }, render: ({ field: i }) => {
    var _a;
    return jsxs("div", { className: "w-full", children: [jsx(d, { ...i, type: "text", placeholder: "Enter your first name", className: "h-12 px-4 py-3.5 bg-white rounded-lg border border-black/30" }), s.first_name && jsx("div", { className: "text-red-500 text-sm mt-1 capitalize", children: (_a = s == null ? void 0 : s.first_name) == null ? void 0 : _a.message })] });
  } })] }), jsxs("div", { className: "flex flex-col w-full gap-2.5", children: [jsxs("label", { className: "text-black text-sm font-normal", children: ["Last Name", jsx("span", { className: "text-red-500", children: "*" })] }), jsx(Controller, { name: "last_name", control: t, disabled: f("user_exist"), rules: { required: "Last Name is required" }, render: ({ field: i }) => {
    var _a;
    return jsxs("div", { className: "w-full", children: [jsx(d, { ...i, type: "text", placeholder: "Enter your last name", className: "h-12 px-4 py-3.5 bg-white rounded-lg border border-black/30" }), s.last_name && jsx("div", { className: "text-red-500 text-sm mt-1 capitalize", children: (_a = s == null ? void 0 : s.last_name) == null ? void 0 : _a.message })] });
  } })] })] }), jsxs("div", { className: "flex flex-col w-full gap-2.5", children: [jsxs("label", { className: "text-black text-sm font-normal", children: ["Phone Number", jsx("span", { className: "text-red-500", children: "*" })] }), jsx(Controller, { name: "phone", control: t, rules: { required: "Phone Number is required" }, disabled: f("user_exist"), render: ({ field: i }) => {
    var _a;
    return jsxs("div", { className: "w-full", children: [jsx(d, { ...i, type: "text", placeholder: "Enter your phone number", className: "h-12 px-4 py-3.5 bg-white rounded-lg border border-black/30" }), s.phone && jsx("div", { className: "text-red-500 text-sm mt-1 capitalize", children: (_a = s == null ? void 0 : s.phone) == null ? void 0 : _a.message })] });
  } })] })] }), d$1 === 1 && jsx("div", { className: "w-full py-4 bg-[#0d0d0d] rounded-xl flex justify-center items-center", children: jsx("button", { onClick: b, className: "text-white text-lg font-medium w-full", children: "Next" }) }), jsx(H, { loading: N, label: "Please wait, while we are validating your email address." })] });
}, K = () => {
  const t = useRouter(), { control: s, handleSubmit: d, setError: b, setValue: o$1, formState: { errors: f }, getValues: N, trigger: h } = useForm({}), [m, n] = useState(1), [_, i] = useState(false), u = async (v) => {
    await h() && n(v);
  }, g = async () => {
    await h() && m < 2 && n(m + 1);
  }, { mutate: r, isError: l, error: j } = useMutation({ mutationFn: async (v) => {
    var _a, _b, _c, _d, _e;
    try {
      i(true);
      const c = await o(v);
      if ((c == null ? void 0 : c.status) === 200 || (c == null ? void 0 : c.status) === 201) t.navigate({ to: "/verify", search: { email: N("email"), company_id: (_a = c == null ? void 0 : c.data) == null ? void 0 : _a._id } });
      else if ((c == null ? void 0 : c.status) === 422) {
        const x = (_c = (_b = c == null ? void 0 : c.data) == null ? void 0 : _b.errors) == null ? void 0 : _c.details;
        x && x.forEach((k) => {
          (k.type === "any.empty" || k.type === "any.required") && b(k.key, { type: k.type, message: k.message });
        });
      } else if ((c == null ? void 0 : c.status) == 404) {
        const x = (_d = c == null ? void 0 : c.data) == null ? void 0 : _d.message;
        x && b("email", { type: "manual", message: x });
      } else if ((c == null ? void 0 : c.status) == 403) {
        const x = (_e = c == null ? void 0 : c.data) == null ? void 0 : _e.message;
        x && b("password", { type: "manual", message: x });
      } else throw c;
    } catch (c) {
      console.error(c);
    } finally {
      i(false);
    }
  } });
  return jsx("div", { className: "w-full flex justify-center items-center h-full border", children: jsxs("div", { className: "px-6 py-3 top-10 absolute bg-white rounded-2xl shadow flex-col justify-start items-center gap-2 inline-flex border ", children: [jsxs("div", { className: "top-2 justify-center items-center gap-2 inline-flex", children: [jsx("div", { onClick: () => u(1), className: `px-4 py-1 rounded-full flex justify-center items-center cursor-pointer ${m === 1 ? "bg-black" : "bg-[#f6f6f6]"}`, children: jsx("div", { className: `text-center ${m === 1 ? "text-[#ffc900]" : "text-[#0d0d0d]"} text-lg font-normal`, children: "1" }) }), jsx("div", { className: "w-52 h-[0px] border border-[#333333]" }), jsx("div", { onClick: () => u(2), className: `px-4 py-2 rounded-full flex justify-center items-center cursor-pointer ${m === 2 ? "bg-black" : "bg-[#f6f6f6]"}`, children: jsx("div", { className: `text-center ${m === 2 ? "text-[#ffc900]" : "text-[#0d0d0d]"} text-lg font-normal`, children: "2" }) })] }), jsxs("div", { className: "w-full flex flex-col justify-start items-center gap-4", children: [jsx("div", { className: "text-center text-black text-2xl font-normal leading-loose", children: "Personal Information" }), jsx("div", { className: "text-center text-[#333333] text-lg font-light leading-normal", children: "Tell Us About Yourself" })] }), jsx("div", { children: jsx("form", { onSubmit: d(async (v) => {
    await h() && r(v);
  }), className: "self-stretch flex-col justify-start items-center gap-6 flex", children: m === 1 ? jsx(J, { control: s, errors: f, step: m, handleNext: g, setValue: o$1, getValues: N }) : jsx(Y, { control: s, errors: f, getValues: N }) }) }), jsxs("div", { className: "flex justify-center items-center gap-2", children: [jsx("div", { className: "text-center text-[#0d0d0d] text-base font-light", children: "Already have an Account?" }), jsx("div", { className: "text-center text-[#2f80ed] text-base font-normal cursor-pointer", onClick: () => t.navigate({ to: "/signin" }), children: "Log In" })] })] }) });
}, me = function() {
  return jsx(K, {});
};

export { me as component };
//# sourceMappingURL=signup-D_X8D8hj.mjs.map
