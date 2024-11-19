import { jsx } from 'react/jsx-runtime';
import { Outlet } from '@tanstack/react-router';

const n = () => jsx("div", { className: "bg-[#fbf7ec]", children: jsx(Outlet, {}) }), i = function() {
  return jsx("div", { children: jsx(n, {}) });
};

export { i as component };
//# sourceMappingURL=_auth-f1uqbOnR.mjs.map
