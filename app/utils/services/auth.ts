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
