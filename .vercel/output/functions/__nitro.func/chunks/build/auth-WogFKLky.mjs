import { d } from './fetch--oHJs5c1.mjs';

const n = async (r) => {
  try {
    return await d.post("/signin", r);
  } catch (s) {
    throw s;
  }
}, o = async (r) => {
  try {
    return await d.post("/companySignup", r);
  } catch (s) {
    throw s;
  }
}, c = async (r) => {
  try {
    return await d.get(`/checkUser/${r}`);
  } catch (s) {
    throw s;
  }
}, a = async (r) => {
  try {
    return await d.post("/email/verify", r);
  } catch (s) {
    throw s;
  }
};

export { a, c, n, o };
//# sourceMappingURL=auth-WogFKLky.mjs.map