import { jsxs } from 'react/jsx-runtime';
import { M, E as Ee, w as wt, O as Oe, b as bt, N as N$1, e as eventHandler, v as ve } from '../_/nitro.mjs';
import m from 'tiny-invariant';
import { defaultTransformer, isPlainObject, encode, isRedirect, isNotFound, useRouter } from '@tanstack/react-router';
import * as v from 'node:fs';
import 'node:http';
import 'node:https';
import 'vinxi/lib/invariant';
import 'vinxi/lib/path';
import 'node:url';
import 'node:async_hooks';
import 'react';
import 'jsesc';
import 'node:stream';
import 'isbot';
import 'react-dom/server';
import '@tanstack/react-cross-context';
import '@tanstack/react-query';
import '@tanstack/react-router-with-query';
import 'node:path';

function g(e, n) {
  const t = n || e || {};
  return typeof t.method > "u" && (t.method = "GET"), { options: t, middleware: (r) => g(void 0, Object.assign(t, { middleware: r })), validator: (r) => g(void 0, Object.assign(t, { validator: r })), handler: (...r) => {
    const [o, c] = r;
    Object.assign(t, { ...o, extractedFn: o, serverFn: c }), m(o.url, "createServerFn must be called with a function that is marked with the 'use server' pragma. Are you using the @tanstack/start-vite-plugin ?");
    const a = [...t.middleware || [], V(t)];
    return Object.assign(async (s) => F(a, "client", { ...o, method: t.method, data: s == null ? void 0 : s.data, headers: s == null ? void 0 : s.headers, context: Object.assign({}, o) }).then((d) => d.result), { ...o, __executeServer: (s) => {
      const d = s instanceof FormData ? X(s) : s;
      return F(a, "server", { ...o, ...d }).then((i) => ({ result: i.result, context: i.sendContext }));
    } });
  } };
}
function X(e) {
  const n = e.get("__TSR_CONTEXT");
  if (e.delete("__TSR_CONTEXT"), typeof n != "string") return { context: {}, data: e };
  try {
    return { context: defaultTransformer.parse(n), data: e };
  } catch {
    return { data: e };
  }
}
function B(e) {
  const n = [], t = (r) => {
    r.forEach((o) => {
      o.options.middleware && t(o.options.middleware), n.push(o);
    });
  };
  return t(e), n;
}
const O = (e, n, t) => e({ data: n.data, context: n.context, sendContext: n.sendContext, method: n.method, next: (r) => {
  var _a, _b;
  const o = { ...n.context, ...r == null ? void 0 : r.context }, c = { ...n.sendContext, ...(_a = r == null ? void 0 : r.sendContext) != null ? _a : {} }, a = M(n.headers, r == null ? void 0 : r.headers);
  return t({ method: n.method, data: n.data, context: o, sendContext: c, headers: a, result: (_b = r == null ? void 0 : r.result) != null ? _b : n.result });
} });
function z(e, n) {
  if (e == null) return {};
  if ("~standard" in e) {
    const t = e["~standard"].validate(n);
    if ("value" in t) return t.value;
    throw t instanceof Promise ? new Error("Async validation not supported") : new Error(JSON.stringify(t.issues, void 0, 2));
  }
  if ("parse" in e) return e.parse(n);
  if (typeof e == "function") return e(n);
  throw new Error("Invalid validator type!");
}
async function F(e, n, t) {
  const r = B(e), o = async (c) => {
    const a = r.shift();
    if (!a) return c;
    a.options.validator && (n !== "client" || a.options.validateClient) && (c.data = await z(a.options.validator, c.data));
    const s = n === "client" ? a.options.client : a.options.server;
    return s ? O(s, c, async (d) => {
      if (n === "client" && a.options.clientAfter) {
        const i = await o(d);
        return O(a.options.clientAfter, i, (f) => f);
      }
      return o(d);
    }) : o(c);
  };
  return o({ ...t, headers: t.headers || {}, sendContext: t.sendContext || {}, context: t.context || {} });
}
function V(e) {
  return { _types: void 0, options: { validator: e.validator, validateClient: e.validateClient, client: async ({ next: n, sendContext: t, ...r }) => {
    var o;
    const c = await ((o = e.extractedFn) == null ? void 0 : o.call(e, { ...r, context: t }));
    return n(c);
  }, server: async ({ next: n, ...t }) => {
    var r;
    const o = await ((r = e.serverFn) == null ? void 0 : r.call(e, t));
    return n({ result: o });
  } } };
}
async function W(e, n, t) {
  var r;
  const o = n[0];
  if (isPlainObject(o) && o.method) {
    const i = o, f = i.data instanceof FormData ? "formData" : "payload", u = new Headers({ ...f === "payload" ? { "content-type": "application/json", accept: "application/json" } : {}, ...i.headers instanceof Headers ? Object.fromEntries(i.headers.entries()) : i.headers || {} });
    if (i.method === "GET") {
      const v = encode({ payload: defaultTransformer.stringify({ data: i.data, context: i.context }) });
      v && (e += `&${v}`);
    }
    const l = new Request(e, { method: i.method, headers: u, ...K(i) }), y = await t(l), h = await j(y);
    if ((r = h.headers.get("content-type")) != null && r.includes("application/json")) {
      const v = await h.text(), w = v ? defaultTransformer.parse(v) : void 0;
      if (isRedirect(w) || isNotFound(w)) throw w;
      return w;
    }
    return h;
  }
  const c = new Request(e, { method: "POST", headers: { Accept: "application/json", "Content-Type": "application/json" }, body: JSON.stringify(n) }), a = await j(await t(c)), s = a.headers.get("content-type"), d = await a.text();
  return s && s.includes("application/json") ? d ? JSON.parse(d) : void 0 : d;
}
function K(e) {
  var _a;
  return e.method === "POST" ? e.data instanceof FormData ? (e.data.set("__TSR_CONTEXT", defaultTransformer.stringify(e.context)), { body: e.data }) : { body: defaultTransformer.stringify({ data: (_a = e.data) != null ? _a : null, context: e.context }) } : {};
}
async function j(e) {
  if (!e.ok) {
    const n = e.headers.get("content-type"), t = n && n.includes("application/json"), r = await (async () => t ? await e.json() : await e.text())(), o = `Request failed with status ${e.status}`;
    throw t ? new Error(JSON.stringify({ message: o, body: r })) : new Error([o, `${JSON.stringify(r, null, 2)}`].join(`

`));
  }
  return e;
}
function Q(e, n, t) {
  return `${e}/_server/?_serverFnId=${encodeURI(n)}&_serverFnName=${encodeURI(t)}`;
}
eventHandler(Y);
async function Y(e) {
  return b(ve(e));
}
async function b(e, n) {
  var t, r;
  const o = e.method, c = new URL(e.url, "http://localhost:3000"), a = Object.fromEntries(c.searchParams.entries()), s = a._serverFnId, d = a._serverFnName;
  if (!s || !d) throw new Error("Invalid request");
  m(typeof s == "string", "Invalid server action");
  const i = (r = await ((t = Oe("server").chunks[s]) == null ? void 0 : t.import())) == null ? void 0 : r[d], f = await (async () => {
    try {
      const u = await (async () => {
        var y;
        if ((y = e.headers.get("Content-Type")) != null && y.includes("multipart/form-data")) return m(o.toLowerCase() !== "get", "GET requests with FormData payloads are not supported"), await e.formData();
        if (o.toLowerCase() === "get") return a.payload ? defaultTransformer.parse(a.payload) : void 0;
        const h = await e.text();
        return defaultTransformer.parse(h);
      })(), l = await i(u);
      return l instanceof Response ? l : isRedirect(l) || isNotFound(l) ? S(l) : new Response(l !== void 0 ? defaultTransformer.stringify(l) : void 0, { status: bt(Ee()), headers: { "Content-Type": "application/json" } });
    } catch (u) {
      return u instanceof Response ? u : isRedirect(u) || isNotFound(u) ? S(u) : (console.error("Server Fn Error!"), console.error(u), console.info(), new Response(JSON.stringify(u), { status: 500, headers: { "Content-Type": "application/json" } }));
    }
  })();
  if (f.headers.get("Content-Type") === "application/json") {
    const l = await f.clone().text();
    l && JSON.stringify(JSON.parse(l));
  }
  return f;
}
function S(e) {
  const { headers: n, ...t } = e;
  return new Response(JSON.stringify(t), { status: 200, headers: { "Content-Type": "application/json", ...e.headers || {} } });
}
function E(e, n, t) {
  const r = Q("http://localhost:3000", n, t);
  return Object.assign((...c) => (m(c.length === 1, "Server functions can only accept a single argument"), W(r, c, async (a) => {
    const s = Ee(), d = wt(s);
    return Object.entries(d).forEach(([i, f]) => {
      a.headers.has(i) || a.headers.append(i, f);
    }), b(a);
  })), { url: r, filename: n, functionId: t });
}
const C = "count.txt";
async function N() {
  return parseInt(await v.promises.readFile(C, "utf-8").catch(() => "0"));
}
const $ = g({ method: "GET" }).handler(E(Z, "c_1pabs3o", "$$function0"), () => N()), I = g().validator((e) => e).handler(E(ee, "c_1pabs3o", "$$function1"), async ({ data: e }) => {
  const n = await N();
  await v.promises.writeFile(C, `${n + e}`);
}), ye = function() {
  const n = useRouter(), t = N$1.useLoaderData();
  return jsxs("button", { type: "button", onClick: () => {
    I({ data: 1 }).then(() => {
      n.invalidate();
    });
  }, children: ["Add 1 to ", t, "?"] });
}, we = async () => await $();
function Z(e) {
  return $.__executeServer(e);
}
function ee(e) {
  return I.__executeServer(e);
}

export { Z as $$function0, ee as $$function1, ye as component, we as loader };
//# sourceMappingURL=index-xf7AXn-T.mjs.map
