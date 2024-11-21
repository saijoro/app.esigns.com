import { jsx } from 'react/jsx-runtime';
import * as i from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

function a(...e) {
  return twMerge(clsx(e));
}
const d = i.forwardRef(({ className: e, type: r, ...t }, o) => jsx("input", { type: r, className: a("flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", e), ref: o, ...t }));
d.displayName = "Input";

export { a, d };
//# sourceMappingURL=input-BNpTjTIy.mjs.map
