import { ISignUpPayload } from "~/lib/interfaces/auth/iSignIn";
import { $fetch } from "../fetch";

export const loginAPI = async (payload: {
  email: string;
  password: string;
}) => {
  try {
    const response = await $fetch.post("/signin", payload);
    return response;
  } catch (err) {
    throw err;
  }
};

export const signUpAPI = async (payload: ISignUpPayload) => {
  try {
    const response = await $fetch.post("/companySignup", payload);
    return response;
  } catch (err) {
    throw err;
  }
};

export const checkEmailAPI = async (email: string) => {
  try {
    const response = await $fetch.get(`/checkUser/${email}`);
    return response;
  } catch (err) {
    throw err;
  }
};
