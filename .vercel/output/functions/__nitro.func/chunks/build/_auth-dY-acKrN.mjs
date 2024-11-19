import { jsxs, jsx } from 'react/jsx-runtime';
import { Outlet } from '@tanstack/react-router';

const e = () => jsx("div", { className: "bg-[#fbf7ec]", children: jsx(Outlet, {}) }), m = function() {
  return jsxs("div", { children: [jsx(e, {}), jsx(Outlet, {})] });
};

export { m as component };
//# sourceMappingURL=_auth-dY-acKrN.mjs.map
