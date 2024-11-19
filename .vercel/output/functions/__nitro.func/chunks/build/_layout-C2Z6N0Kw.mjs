import { jsx } from 'react/jsx-runtime';
import { Outlet } from '@tanstack/react-router';

const m = function() {
  return jsx("div", { children: jsx(Outlet, {}) });
};

export { m as component };
//# sourceMappingURL=_layout-C2Z6N0Kw.mjs.map
