import { jsxs, jsx } from 'react/jsx-runtime';
import * as i from 'react';
import * as e from '@radix-ui/react-select';
import { a } from './input-BNpTjTIy.mjs';
import { ChevronDownIcon, ChevronUpIcon, CheckIcon } from '@radix-ui/react-icons';

const v = e.Root, I = e.Value, h = i.forwardRef(({ className: o, children: r, ...a$1 }, d) => jsxs(e.Trigger, { ref: d, className: a("flex h-9 w-full items-center justify-between whitespace-nowrap rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1", o), ...a$1, children: [r, jsx(e.Icon, { asChild: true, children: jsx(ChevronDownIcon, { className: "h-4 w-4 opacity-50" }) })] }));
h.displayName = e.Trigger.displayName;
const c = i.forwardRef(({ className: o, ...r }, a$1) => jsx(e.ScrollUpButton, { ref: a$1, className: a("flex cursor-default items-center justify-center py-1", o), ...r, children: jsx(ChevronUpIcon, { className: "h-4 w-4" }) }));
c.displayName = e.ScrollUpButton.displayName;
const m = i.forwardRef(({ className: o, ...r }, a$1) => jsx(e.ScrollDownButton, { ref: a$1, className: a("flex cursor-default items-center justify-center py-1", o), ...r, children: jsx(ChevronDownIcon, { className: "h-4 w-4" }) }));
m.displayName = e.ScrollDownButton.displayName;
const w = i.forwardRef(({ className: o, children: r, position: a$1 = "popper", ...d }, p) => jsx(e.Portal, { children: jsxs(e.Content, { ref: p, className: a("relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", a$1 === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1", o), position: a$1, ...d, children: [jsx(c, {}), jsx(e.Viewport, { className: a("p-1", a$1 === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"), children: r }), jsx(m, {})] }) }));
w.displayName = e.Content.displayName;
const y = i.forwardRef(({ className: o, ...r }, a$1) => jsx(e.Label, { ref: a$1, className: a("px-2 py-1.5 text-sm font-semibold", o), ...r }));
y.displayName = e.Label.displayName;
const g = i.forwardRef(({ className: o, children: r, ...a$1 }, d) => jsxs(e.Item, { ref: d, className: a("relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-2 pr-8 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", o), ...a$1, children: [jsx("span", { className: "absolute right-2 flex h-3.5 w-3.5 items-center justify-center", children: jsx(e.ItemIndicator, { children: jsx(CheckIcon, { className: "h-4 w-4" }) }) }), jsx(e.ItemText, { children: r })] }));
g.displayName = e.Item.displayName;
const N = i.forwardRef(({ className: o, ...r }, a$1) => jsx(e.Separator, { ref: a$1, className: a("-mx-1 my-1 h-px bg-muted", o), ...r }));
N.displayName = e.Separator.displayName;

export { I, g, h, v, w };
//# sourceMappingURL=select-2qGakAU5.mjs.map
