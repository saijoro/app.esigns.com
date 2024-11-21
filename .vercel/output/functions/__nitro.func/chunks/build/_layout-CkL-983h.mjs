import { jsx, jsxs } from 'react/jsx-runtime';
import * as i from 'react';
import { useContext, useState } from 'react';
import * as w from '@radix-ui/react-avatar';
import { a, d } from './input-BNpTjTIy.mjs';
import { v as v$1, h as h$1, I as I$1, w as w$1, g } from './select-2qGakAU5.mjs';
import { Slot } from '@radix-ui/react-slot';
import { cva } from 'class-variance-authority';
import { f } from './button-cyuXPM3g.mjs';
import * as T from '@radix-ui/react-separator';
import * as c from '@radix-ui/react-dialog';
import { Cross2Icon, ViewVerticalIcon } from '@radix-ui/react-icons';
import * as x from '@radix-ui/react-tooltip';
import { useLocation, Outlet } from '@tanstack/react-router';
import { X, Search, MessageCircleMore, Bell, CircleChevronDown, House, File, ContactRound } from 'lucide-react';
import { o as ot } from '../nitro/nitro.mjs';
import 'clsx';
import 'tailwind-merge';
import '@radix-ui/react-select';
import 'node:http';
import 'node:https';
import 'node:zlib';
import 'node:stream';
import 'node:buffer';
import 'node:util';
import 'node:url';
import 'node:net';
import 'node:fs';
import 'node:path';
import 'vinxi/lib/invariant';
import 'vinxi/lib/path';
import 'tiny-invariant';
import 'node:async_hooks';
import 'jsesc';
import 'isbot';
import 'react-dom/server';
import '@tanstack/react-cross-context';
import '@tanstack/react-query';
import '@tanstack/react-router-with-query';

const B = i.forwardRef(({ className: t, ...a$1 }, r) => jsx(w.Root, { ref: r, className: a("relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full", t), ...a$1 }));
B.displayName = w.Root.displayName;
const D = i.forwardRef(({ className: t, ...a$1 }, r) => jsx(w.Image, { ref: r, className: a("aspect-square h-full w-full", t), ...a$1 }));
D.displayName = w.Image.displayName;
const E = i.forwardRef(({ className: t, ...a$1 }, r) => jsx(w.Fallback, { ref: r, className: a("flex h-full w-full items-center justify-center rounded-full bg-muted", t), ...a$1 }));
E.displayName = w.Fallback.displayName;
const L = i.forwardRef(({ className: t, orientation: a$1 = "horizontal", decorative: r = true, ...s }, n) => jsx(T.Root, { ref: n, decorative: r, orientation: a$1, className: a("shrink-0 bg-border", a$1 === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]", t), ...s }));
L.displayName = T.Root.displayName;
const ge = c.Root, he = c.Portal, O = i.forwardRef(({ className: t, ...a$1 }, r) => jsx(c.Overlay, { className: a("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", t), ...a$1, ref: r }));
O.displayName = c.Overlay.displayName;
const ve = cva("fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-500 data-[state=open]:animate-in data-[state=closed]:animate-out", { variants: { side: { top: "inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top", bottom: "inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom", left: "inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm", right: "inset-y-0 right-0 h-full w-3/4 border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm" } }, defaultVariants: { side: "right" } }), P = i.forwardRef(({ side: t = "right", className: a$1, children: r, ...s }, n) => jsxs(he, { children: [jsx(O, {}), jsxs(c.Content, { ref: n, className: a(ve({ side: t }), a$1), ...s, children: [jsxs(c.Close, { className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary", children: [jsx(Cross2Icon, { className: "h-4 w-4" }), jsx("span", { className: "sr-only", children: "Close" })] }), r] })] }));
P.displayName = c.Content.displayName;
const xe = i.forwardRef(({ className: t, ...a$1 }, r) => jsx(c.Title, { ref: r, className: a("text-lg font-semibold text-foreground", t), ...a$1 }));
xe.displayName = c.Title.displayName;
const we = i.forwardRef(({ className: t, ...a$1 }, r) => jsx(c.Description, { ref: r, className: a("text-sm text-muted-foreground", t), ...a$1 }));
we.displayName = c.Description.displayName;
function j({ className: t, ...a$1 }) {
  return jsx("div", { className: a("animate-pulse rounded-md bg-primary/10", t), ...a$1 });
}
const Ne = x.Provider, ye = x.Root, Ce = x.Trigger, G = i.forwardRef(({ className: t, sideOffset: a$1 = 4, ...r }, s) => jsx(x.Portal, { children: jsx(x.Content, { ref: s, sideOffset: a$1, className: a("z-50 overflow-hidden rounded-md bg-primary px-3 py-1.5 text-xs text-primary-foreground animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", t), ...r }) }));
G.displayName = x.Content.displayName;
const I = 768;
function Se() {
  const [t, a] = i.useState(void 0);
  return i.useEffect(() => {
    const r = window.matchMedia(`(max-width: ${I - 1}px)`), s = () => {
      a(window.innerWidth < I);
    };
    return r.addEventListener("change", s), a(window.innerWidth < I), () => r.removeEventListener("change", s);
  }, []), !!t;
}
const Re = "sidebar:state", ke = 60 * 60 * 24 * 7, Me = "16rem", _e = "18rem", Ie = "3rem", ze = "b", $ = i.createContext(null);
function S() {
  const t = i.useContext($);
  if (!t) throw new Error("useSidebar must be used within a SidebarProvider.");
  return t;
}
const F = i.forwardRef(({ defaultOpen: t = true, open: a$1, onOpenChange: r, className: s, style: n, children: l, ...b }, N) => {
  const f = Se(), [g, p] = i.useState(false), [R, q] = i.useState(t), y = a$1 != null ? a$1 : R, k = i.useCallback((u) => {
    const m = typeof u == "function" ? u(y) : u;
    r ? r(m) : q(m), document.cookie = `${Re}=${m}; path=/; max-age=${ke}`;
  }, [r, y]), M = i.useCallback(() => f ? p((u) => !u) : k((u) => !u), [f, k, p]);
  i.useEffect(() => {
    const u = (m) => {
      m.key === ze && (m.metaKey || m.ctrlKey) && (m.preventDefault(), M());
    };
    return window.addEventListener("keydown", u), () => window.removeEventListener("keydown", u);
  }, [M]);
  const V = y ? "expanded" : "collapsed", X = i.useMemo(() => ({ state: V, open: y, setOpen: k, isMobile: f, openMobile: g, setOpenMobile: p, toggleSidebar: M }), [V, y, k, f, g, p, M]);
  return jsx($.Provider, { value: X, children: jsx(Ne, { delayDuration: 0, children: jsx("div", { style: { "--sidebar-width": Me, "--sidebar-width-icon": Ie, ...n }, className: a("group/sidebar-wrapper flex min-h-svh w-full has-[[data-variant=inset]]:bg-sidebar", s), ref: N, ...b, children: l }) }) });
});
F.displayName = "SidebarProvider";
const K = i.forwardRef(({ side: t = "left", variant: a$1 = "sidebar", collapsible: r = "offcanvas", className: s, children: n, ...l }, b) => {
  const { isMobile: N, state: f, openMobile: g, setOpenMobile: p } = S();
  return r === "none" ? jsx("div", { className: a("flex h-full w-[--sidebar-width] flex-col bg-sidebar text-sidebar-foreground", s), ref: b, ...l, children: n }) : N ? jsx(ge, { open: g, onOpenChange: p, ...l, children: jsx(P, { "data-sidebar": "sidebar", "data-mobile": "true", className: "w-[--sidebar-width] bg-sidebar p-0 text-sidebar-foreground [&>button]:hidden", style: { "--sidebar-width": _e }, side: t, children: jsx("div", { className: "flex h-full w-full flex-col", children: n }) }) }) : jsxs("div", { ref: b, className: "group peer hidden md:block text-sidebar-foreground", "data-state": f, "data-collapsible": f === "collapsed" ? r : "", "data-variant": a$1, "data-side": t, children: [jsx("div", { className: a("duration-200 relative h-svh w-[--sidebar-width] bg-transparent transition-[width] ease-linear", "group-data-[collapsible=offcanvas]:w-0", "group-data-[side=right]:rotate-180", a$1 === "floating" || a$1 === "inset" ? "group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)_+_theme(spacing.4))]" : "group-data-[collapsible=icon]:w-[--sidebar-width-icon]") }), jsx("div", { className: a("duration-200 fixed inset-y-0 z-10 hidden h-svh w-[--sidebar-width] transition-[left,right,width] ease-linear md:flex", t === "left" ? "left-0 group-data-[collapsible=offcanvas]:left-[calc(var(--sidebar-width)*-1)]" : "right-0 group-data-[collapsible=offcanvas]:right-[calc(var(--sidebar-width)*-1)]", a$1 === "floating" || a$1 === "inset" ? "p-2 group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)_+_theme(spacing.4)_+2px)]" : "group-data-[collapsible=icon]:w-[--sidebar-width-icon] group-data-[side=left]:border-r group-data-[side=right]:border-l", s), ...l, children: jsx("div", { "data-sidebar": "sidebar", className: "flex h-full w-full flex-col bg-sidebar group-data-[variant=floating]:rounded-lg group-data-[variant=floating]:border group-data-[variant=floating]:border-sidebar-border group-data-[variant=floating]:shadow", children: n }) })] });
});
K.displayName = "Sidebar";
const Ve = i.forwardRef(({ className: t, onClick: a$1, ...r }, s) => {
  const { toggleSidebar: n } = S();
  return jsxs(f, { ref: s, "data-sidebar": "trigger", variant: "ghost", size: "icon", className: a("h-7 w-7", t), onClick: (l) => {
    a$1 == null ? void 0 : a$1(l), n();
  }, ...r, children: [jsx(ViewVerticalIcon, {}), jsx("span", { className: "sr-only", children: "Toggle Sidebar" })] });
});
Ve.displayName = "SidebarTrigger";
const je = i.forwardRef(({ className: t, ...a$1 }, r) => {
  const { toggleSidebar: s } = S();
  return jsx("button", { ref: r, "data-sidebar": "rail", "aria-label": "Toggle Sidebar", tabIndex: -1, onClick: s, title: "Toggle Sidebar", className: a("absolute inset-y-0 z-20 hidden w-4 -translate-x-1/2 transition-all ease-linear after:absolute after:inset-y-0 after:left-1/2 after:w-[2px] hover:after:bg-sidebar-border group-data-[side=left]:-right-4 group-data-[side=right]:left-0 sm:flex", "[[data-side=left]_&]:cursor-w-resize [[data-side=right]_&]:cursor-e-resize", "[[data-side=left][data-state=collapsed]_&]:cursor-e-resize [[data-side=right][data-state=collapsed]_&]:cursor-w-resize", "group-data-[collapsible=offcanvas]:translate-x-0 group-data-[collapsible=offcanvas]:after:left-full group-data-[collapsible=offcanvas]:hover:bg-sidebar", "[[data-side=left][data-collapsible=offcanvas]_&]:-right-2", "[[data-side=right][data-collapsible=offcanvas]_&]:-left-2", t), ...a$1 });
});
je.displayName = "SidebarRail";
const He = i.forwardRef(({ className: t, ...a$1 }, r) => jsx("main", { ref: r, className: a("relative flex min-h-svh flex-1 flex-col bg-background", "peer-data-[variant=inset]:min-h-[calc(100svh-theme(spacing.4))] md:peer-data-[variant=inset]:m-2 md:peer-data-[state=collapsed]:peer-data-[variant=inset]:ml-2 md:peer-data-[variant=inset]:ml-0 md:peer-data-[variant=inset]:rounded-xl md:peer-data-[variant=inset]:shadow", t), ...a$1 }));
He.displayName = "SidebarInset";
const Ae = i.forwardRef(({ className: t, ...a$1 }, r) => jsx(d, { ref: r, "data-sidebar": "input", className: a("h-8 w-full bg-background shadow-none focus-visible:ring-2 focus-visible:ring-sidebar-ring", t), ...a$1 }));
Ae.displayName = "SidebarInput";
const Te = i.forwardRef(({ className: t, ...a$1 }, r) => jsx("div", { ref: r, "data-sidebar": "header", className: a("flex flex-col gap-2 p-2", t), ...a$1 }));
Te.displayName = "SidebarHeader";
const Z = i.forwardRef(({ className: t, ...a$1 }, r) => jsx("div", { ref: r, "data-sidebar": "footer", className: a("flex flex-col gap-2 p-2", t), ...a$1 }));
Z.displayName = "SidebarFooter";
const Be = i.forwardRef(({ className: t, ...a$1 }, r) => jsx(L, { ref: r, "data-sidebar": "separator", className: a("mx-2 w-auto bg-sidebar-border", t), ...a$1 }));
Be.displayName = "SidebarSeparator";
const W = i.forwardRef(({ className: t, ...a$1 }, r) => jsx("div", { ref: r, "data-sidebar": "content", className: a("flex min-h-0 flex-1 flex-col gap-2 overflow-auto group-data-[collapsible=icon]:overflow-hidden", t), ...a$1 }));
W.displayName = "SidebarContent";
const De = i.forwardRef(({ className: t, ...a$1 }, r) => jsx("div", { ref: r, "data-sidebar": "group", className: a("relative flex w-full min-w-0 flex-col p-2", t), ...a$1 }));
De.displayName = "SidebarGroup";
const Ee = i.forwardRef(({ className: t, asChild: a$1 = false, ...r }, s) => jsx(a$1 ? Slot : "div", { ref: s, "data-sidebar": "group-label", className: a("duration-200 flex h-8 shrink-0 items-center rounded-md px-2 text-xs font-medium text-sidebar-foreground/70 outline-none ring-sidebar-ring transition-[margin,opa] ease-linear focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0", "group-data-[collapsible=icon]:-mt-8 group-data-[collapsible=icon]:opacity-0", t), ...r }));
Ee.displayName = "SidebarGroupLabel";
const Le = i.forwardRef(({ className: t, asChild: a$1 = false, ...r }, s) => jsx(a$1 ? Slot : "button", { ref: s, "data-sidebar": "group-action", className: a("absolute right-3 top-3.5 flex aspect-square w-5 items-center justify-center rounded-md p-0 text-sidebar-foreground outline-none ring-sidebar-ring transition-transform hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0", "after:absolute after:-inset-2 after:md:hidden", "group-data-[collapsible=icon]:hidden", t), ...r }));
Le.displayName = "SidebarGroupAction";
const Oe = i.forwardRef(({ className: t, ...a$1 }, r) => jsx("div", { ref: r, "data-sidebar": "group-content", className: a("w-full text-sm", t), ...a$1 }));
Oe.displayName = "SidebarGroupContent";
const z = i.forwardRef(({ className: t, ...a$1 }, r) => jsx("ul", { ref: r, "data-sidebar": "menu", className: a("flex w-full min-w-0 flex-col gap-1", t), ...a$1 }));
z.displayName = "SidebarMenu";
const h = i.forwardRef(({ className: t, ...a$1 }, r) => jsx("li", { ref: r, "data-sidebar": "menu-item", className: a("group/menu-item relative", t), ...a$1 }));
h.displayName = "SidebarMenuItem";
const Pe = cva("peer/menu-button flex w-full items-center gap-2 overflow-hidden rounded-md p-2 text-left text-sm outline-none ring-sidebar-ring transition-[width,height,padding] hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 active:bg-sidebar-accent active:text-sidebar-accent-foreground disabled:pointer-events-none disabled:opacity-50 group-has-[[data-sidebar=menu-action]]/menu-item:pr-8 aria-disabled:pointer-events-none aria-disabled:opacity-50 data-[active=true]:bg-sidebar-accent data-[active=true]:font-medium data-[active=true]:text-sidebar-accent-foreground data-[state=open]:hover:bg-sidebar-accent data-[state=open]:hover:text-sidebar-accent-foreground group-data-[collapsible=icon]:!size-8 group-data-[collapsible=icon]:!p-2 [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0", { variants: { variant: { default: "hover:bg-sidebar-accent hover:text-sidebar-accent-foreground", outline: "bg-background shadow-[0_0_0_1px_hsl(var(--sidebar-border))] hover:bg-sidebar-accent hover:text-sidebar-accent-foreground hover:shadow-[0_0_0_1px_hsl(var(--sidebar-accent))]" }, size: { default: "h-8 text-sm", sm: "h-7 text-xs", lg: "h-12 text-sm group-data-[collapsible=icon]:!p-0" } }, defaultVariants: { variant: "default", size: "default" } }), v = i.forwardRef(({ asChild: t = false, isActive: a$1 = false, variant: r = "default", size: s = "default", tooltip: n, className: l, ...b }, N) => {
  const f = t ? Slot : "button", { isMobile: g, state: p } = S(), R = jsx(f, { ref: N, "data-sidebar": "menu-button", "data-size": s, "data-active": a$1, className: a(Pe({ variant: r, size: s }), l), ...b });
  return n ? (typeof n == "string" && (n = { children: n }), jsxs(ye, { children: [jsx(Ce, { asChild: true, children: R }), jsx(G, { side: "right", align: "center", hidden: p !== "collapsed" || g, ...n })] })) : R;
});
v.displayName = "SidebarMenuButton";
const Ge = i.forwardRef(({ className: t, asChild: a$1 = false, showOnHover: r = false, ...s }, n) => jsx(a$1 ? Slot : "button", { ref: n, "data-sidebar": "menu-action", className: a("absolute right-1 top-1.5 flex aspect-square w-5 items-center justify-center rounded-md p-0 text-sidebar-foreground outline-none ring-sidebar-ring transition-transform hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 peer-hover/menu-button:text-sidebar-accent-foreground [&>svg]:size-4 [&>svg]:shrink-0", "after:absolute after:-inset-2 after:md:hidden", "peer-data-[size=sm]/menu-button:top-1", "peer-data-[size=default]/menu-button:top-1.5", "peer-data-[size=lg]/menu-button:top-2.5", "group-data-[collapsible=icon]:hidden", r && "group-focus-within/menu-item:opacity-100 group-hover/menu-item:opacity-100 data-[state=open]:opacity-100 peer-data-[active=true]/menu-button:text-sidebar-accent-foreground md:opacity-0", t), ...s }));
Ge.displayName = "SidebarMenuAction";
const $e = i.forwardRef(({ className: t, ...a$1 }, r) => jsx("div", { ref: r, "data-sidebar": "menu-badge", className: a("absolute right-1 flex h-5 min-w-5 items-center justify-center rounded-md px-1 text-xs font-medium tabular-nums text-sidebar-foreground select-none pointer-events-none", "peer-hover/menu-button:text-sidebar-accent-foreground peer-data-[active=true]/menu-button:text-sidebar-accent-foreground", "peer-data-[size=sm]/menu-button:top-1", "peer-data-[size=default]/menu-button:top-1.5", "peer-data-[size=lg]/menu-button:top-2.5", "group-data-[collapsible=icon]:hidden", t), ...a$1 }));
$e.displayName = "SidebarMenuBadge";
const Fe = i.forwardRef(({ className: t, showIcon: a$1 = false, ...r }, s) => {
  const n = i.useMemo(() => `${Math.floor(Math.random() * 40) + 50}%`, []);
  return jsxs("div", { ref: s, "data-sidebar": "menu-skeleton", className: a("rounded-md h-8 flex gap-2 px-2 items-center", t), ...r, children: [a$1 && jsx(j, { className: "size-4 rounded-md", "data-sidebar": "menu-skeleton-icon" }), jsx(j, { className: "h-4 flex-1 max-w-[--skeleton-width]", "data-sidebar": "menu-skeleton-text", style: { "--skeleton-width": n } })] });
});
Fe.displayName = "SidebarMenuSkeleton";
const Ke = i.forwardRef(({ className: t, ...a$1 }, r) => jsx("ul", { ref: r, "data-sidebar": "menu-sub", className: a("mx-3.5 flex min-w-0 translate-x-px flex-col gap-1 border-l border-sidebar-border px-2.5 py-0.5", "group-data-[collapsible=icon]:hidden", t), ...a$1 }));
Ke.displayName = "SidebarMenuSub";
const Ze = i.forwardRef(({ ...t }, a) => jsx("li", { ref: a, ...t }));
Ze.displayName = "SidebarMenuSubItem";
const We = i.forwardRef(({ asChild: t = false, size: a$1 = "md", isActive: r, className: s, ...n }, l) => jsx(t ? Slot : "a", { ref: l, "data-sidebar": "menu-sub-button", "data-size": a$1, "data-active": r, className: a("flex h-7 min-w-0 -translate-x-px items-center gap-2 overflow-hidden rounded-md px-2 text-sidebar-foreground outline-none ring-sidebar-ring hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 active:bg-sidebar-accent active:text-sidebar-accent-foreground disabled:pointer-events-none disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:opacity-50 [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0 [&>svg]:text-sidebar-accent-foreground", "data-[active=true]:bg-sidebar-accent data-[active=true]:text-sidebar-accent-foreground", a$1 === "sm" && "text-xs", a$1 === "md" && "text-sm", "group-data-[collapsible=icon]:hidden", s), ...n }));
We.displayName = "SidebarMenuSubButton";
const qe = () => jsx(F, { children: jsx(Xe, {}) });
function Xe() {
  useContext(ot);
  const [t, a] = useState(""), { open: r, setOpen: s } = S();
  return jsxs("div", { className: "h-screen w-full bg-[linear-gradient(45deg,_#562405,_#ee7206,_#562405)]", children: [jsxs("nav", { className: "flex justify-between items-center p-4", children: [jsxs("div", { className: "flex justify-start items-center gap-5", children: [jsx("img", { src: r ? "/images/layout/close.svg" : "/images/layout/nav-icon.svg", alt: "logo", className: `h-5 w-5 cursor-pointer hover:scale-[1.1] ease-in-out duration-300 ${r ? "rotate-180" : ""}`, onClick: () => s(!r) }), jsx("img", { src: "/images/layout/main-logo.svg", alt: "logo", className: "hover:animate-pulse cursor-pointer" })] }), jsxs("div", { className: "flex gap-2 justify-end items-center", children: [jsxs("div", { className: "relative", children: [jsx(d, { value: t, type: "text", onChange: (n) => a(n.target.value), className: "h-10 px-4 py-3.5 bg-[#ffffff60] rounded-lg border border-black/30 focus:outline-none text-white focus-visible:outline-none" }), t ? jsx("button", { onClick: () => a(""), className: "absolute right-2 top-1/2 -translate-y-1/2 cursor-pointer", children: jsx(X, { className: "text-white" }) }) : jsx(Search, { className: "absolute right-2 top-1/2  -translate-y-1/2 bg-transparent text-white rounded-full w-[30px] h-[30px] p-1" })] }), jsx("div", { className: "relative", children: jsxs(v$1, { children: [jsx(h$1, { className: "h-10 px-4 py-3.5 bg-[#ffffff60] rounded-lg border border-black/30 text-white focus:outline-none focus-visible:outline-none", children: jsx(I$1, { placeholder: "Theme" }) }), jsxs(w$1, { children: [jsx(g, { className: "bg-white text-black focus:outline-none focus-visible:outline-none", value: "light", children: "Light" }), jsx(g, { className: "bg-white text-black focus:outline-none focus-visible:outline-none", value: "dark", children: "Dark" }), jsx(g, { className: "bg-white text-black focus:outline-none focus-visible:outline-none", value: "system", children: "System" })] })] }) }), jsx("div", { className: "text-white rounded-full bg-[#ffffff60] px-2 py-2", children: jsx(MessageCircleMore, {}) }), jsx("div", { className: "text-white rounded-full bg-[#ffffff60] px-2 py-2", children: jsx(Bell, {}) }), jsx("div", { className: "relative", children: jsxs("div", { className: "w-[200px] text-white flex justify-between items-center rounded-full bg-[#ffffff60] pr-2", children: [jsxs("div", { className: "flex items-center gap-2", children: [jsxs(B, { children: [jsx(D, { src: "https://github.com/shadcn.png", alt: "@shadcn", className: "rounded-full" }), jsx(E, { children: "CN" })] }), jsxs("div", { children: [jsx("p", { className: "text-white text-[14px]", children: "John Doe" }), jsx("p", { className: "text-sm text-white text-[12px]", children: "Admin" })] })] }), jsx(CircleChevronDown, {})] }) })] })] }), jsx(Je, { isSidebarOpen: r })] });
}
function Je({ isSidebarOpen: t }) {
  const a = useLocation(), r = (s) => a.pathname === s || a.pathname.includes(s);
  return jsxs("div", { className: "flex max-h-[calc(100vh-100px)] overflow-hidden", children: [jsx("div", { className: "flex h-screen", children: jsxs(K, { className: `border-r-0 bg-transparent transition-all duration-300 ease-in-out ${t ? "w-[200px]" : "w-[50px]"}`, children: [jsxs(W, { className: `py-2 ${t ? "px-3 " : "px-0"}`, children: [jsx(z, { children: jsx(h, { children: jsx(v, { className: "w-full justify-start", children: jsxs("div", { className: (r("/") ? "text-black bg-white p-2 flex items-center justify-start rounded-md gap-2" : "text-white bg-transparent p-2 flex items-center justify-start rounded-md gap-2") + " group cursor-pointer", children: [jsx(House, { className: "w-[20px] h-[20px] cursor-pointer group-hover:scale-[1.2] ease-in-out duration-300" }), t ? "Dashboard" : ""] }) }) }) }), jsxs(z, { children: [jsx(h, { children: jsx(v, { className: "w-full justify-start", children: jsxs("div", { className: (r("/test") ? "text-black bg-white p-2 flex items-center justify-start rounded-md gap-2" : "text-white bg-transparent p-2 flex items-center justify-start rounded-md gap-2") + " group cursor-pointer", children: [jsx(File, { className: "w-[20px] h-[20px] cursor-pointer group-hover:scale-[1.2] ease-in-out duration-300" }), t ? "Documents" : ""] }) }) }), jsx(h, { children: jsx(v, { className: "w-full justify-start", children: jsxs("div", { className: (r("/test") ? "text-black bg-white p-2 flex items-center justify-start rounded-md gap-2" : "text-white bg-transparent p-2 flex items-center justify-start rounded-md gap-2") + " group cursor-pointer", children: [jsx(ContactRound, { className: "w-[20px] h-[20px] cursor-pointer group-hover:scale-[1.2] ease-in-out duration-300" }), t ? "Contacts" : ""] }) }) }), jsx(h, { children: jsx(v, { className: "w-full justify-start", children: jsxs("div", { className: (r("/test") ? "text-black bg-white p-2 flex items-center justify-start rounded-md gap-2" : "text-white bg-transparent p-2 flex items-center justify-start rounded-md gap-2") + " group cursor-pointer", children: [jsx("svg", { className: "cursor-pointer group-hover:scale-[1.2] ease-in-out duration-300", width: "21", height: "18", viewBox: "0 0 21 18", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: jsx("path", { d: "M15 7.5H19.5C19.8978 7.5 20.2794 7.34196 20.5607 7.06066C20.842 6.77936 21 6.39782 21 6V1.5C21 1.10218 20.842 0.720644 20.5607 0.43934C20.2794 0.158035 19.8978 0 19.5 0H15C14.6022 0 14.2206 0.158035 13.9393 0.43934C13.658 0.720644 13.5 1.10218 13.5 1.5V3H12C11.4033 3 10.831 3.23705 10.409 3.65901C9.98705 4.08097 9.75 4.65326 9.75 5.25V8.25H6.75V7.5C6.75 7.10218 6.59196 6.72064 6.31066 6.43934C6.02936 6.15804 5.64782 6 5.25 6H2.25C1.85218 6 1.47064 6.15804 1.18934 6.43934C0.908035 6.72064 0.75 7.10218 0.75 7.5V10.5C0.75 10.8978 0.908035 11.2794 1.18934 11.5607C1.47064 11.842 1.85218 12 2.25 12H5.25C5.64782 12 6.02936 11.842 6.31066 11.5607C6.59196 11.2794 6.75 10.8978 6.75 10.5V9.75H9.75V12.75C9.75 13.3467 9.98705 13.919 10.409 14.341C10.831 14.7629 11.4033 15 12 15H13.5V16.5C13.5 16.8978 13.658 17.2794 13.9393 17.5607C14.2206 17.842 14.6022 18 15 18H19.5C19.8978 18 20.2794 17.842 20.5607 17.5607C20.842 17.2794 21 16.8978 21 16.5V12C21 11.6022 20.842 11.2206 20.5607 10.9393C20.2794 10.658 19.8978 10.5 19.5 10.5H15C14.6022 10.5 14.2206 10.658 13.9393 10.9393C13.658 11.2206 13.5 11.6022 13.5 12V13.5H12C11.8011 13.5 11.6103 13.421 11.4697 13.2803C11.329 13.1397 11.25 12.9489 11.25 12.75V5.25C11.25 5.05109 11.329 4.86032 11.4697 4.71967C11.6103 4.57902 11.8011 4.5 12 4.5H13.5V6C13.5 6.39782 13.658 6.77936 13.9393 7.06066C14.2206 7.34196 14.6022 7.5 15 7.5ZM5.25 10.5H2.25V7.5H5.25V10.5ZM15 12H19.5V16.5H15V12ZM15 1.5H19.5V6H15V1.5Z", fill: r("/test") ? "#000" : "#fff" }) }), t ? "Work flows" : ""] }) }) }), jsx(h, { children: jsx(v, { className: "w-full justify-start", children: jsxs("div", { className: (r("/test") ? "text-black bg-white p-2 flex items-center justify-start rounded-md gap-2" : "text-white bg-transparent p-2 flex items-center justify-start rounded-md gap-2") + " group cursor-pointer", children: [jsx("svg", { className: "cursor-pointer group-hover:scale-[1.2] ease-in-out duration-300", width: "20", height: "20", viewBox: "0 0 20 20", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: jsx("path", { d: "M14.2806 7.21937C14.3504 7.28903 14.4057 7.37175 14.4434 7.46279C14.4812 7.55384 14.5006 7.65144 14.5006 7.75C14.5006 7.84856 14.4812 7.94616 14.4434 8.03721C14.4057 8.12825 14.3504 8.21097 14.2806 8.28063L9.03063 13.5306C8.96097 13.6004 8.87826 13.6557 8.78721 13.6934C8.69616 13.7312 8.59857 13.7506 8.5 13.7506C8.40144 13.7506 8.30385 13.7312 8.2128 13.6934C8.12175 13.6557 8.03903 13.6004 7.96938 13.5306L5.71938 11.2806C5.57865 11.1399 5.49959 10.949 5.49959 10.75C5.49959 10.551 5.57865 10.3601 5.71938 10.2194C5.86011 10.0786 6.05098 9.99958 6.25 9.99958C6.44903 9.99958 6.6399 10.0786 6.78063 10.2194L8.5 11.9397L13.2194 7.21937C13.289 7.14964 13.3718 7.09432 13.4628 7.05658C13.5538 7.01884 13.6514 6.99941 13.75 6.99941C13.8486 6.99941 13.9462 7.01884 14.0372 7.05658C14.1283 7.09432 14.211 7.14964 14.2806 7.21937ZM19.75 10C19.75 11.9284 19.1782 13.8134 18.1068 15.4168C17.0355 17.0202 15.5127 18.2699 13.7312 19.0078C11.9496 19.7458 9.98919 19.9389 8.09787 19.5627C6.20656 19.1865 4.46928 18.2579 3.10571 16.8943C1.74215 15.5307 0.813554 13.7934 0.437348 11.9021C0.061142 10.0108 0.254225 8.05042 0.992179 6.26884C1.73013 4.48726 2.97982 2.96451 4.58319 1.89317C6.18657 0.821828 8.07164 0.25 10 0.25C12.585 0.25273 15.0634 1.28084 16.8913 3.10872C18.7192 4.93661 19.7473 7.41498 19.75 10ZM18.25 10C18.25 8.3683 17.7661 6.77325 16.8596 5.41655C15.9531 4.05984 14.6646 3.00242 13.1571 2.37799C11.6497 1.75357 9.99085 1.59019 8.39051 1.90852C6.79017 2.22685 5.32016 3.01259 4.16637 4.16637C3.01259 5.32015 2.22685 6.79016 1.90853 8.3905C1.5902 9.99085 1.75358 11.6496 2.378 13.1571C3.00242 14.6646 4.05984 15.9531 5.41655 16.8596C6.77326 17.7661 8.36831 18.25 10 18.25C12.1873 18.2475 14.2843 17.3775 15.8309 15.8309C17.3775 14.2843 18.2475 12.1873 18.25 10Z", fill: r("/test") ? "#000" : "#fff" }) }), t ? "Groups" : ""] }) }) })] })] }), jsx(Z, { className: "p-3", children: "Footer" })] }) }), jsx("div", { className: "bg-white rounded-lg overflow-hidden " + (t ? "w-[90%]" : "w-[calc(100%-90px)]"), children: jsx(Outlet, {}) })] });
}
const yt = qe;

export { yt as component };
//# sourceMappingURL=_layout-CkL-983h.mjs.map
