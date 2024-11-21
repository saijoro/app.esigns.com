import { ISignUpPayload } from "~/lib/interfaces/auth/iAuth";
import { $fetch } from "../fetch";

export const getDocumentsAPI = async (params: any) => {
  try {
    const response = await $fetch.get("/documents", params);
    return response;
  } catch (err) {
    throw err;
  }
};
