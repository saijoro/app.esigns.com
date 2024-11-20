import { Dispatch, SetStateAction } from "react";

export interface iContext {
  counter: number;
  setCounter: Dispatch<SetStateAction<number>>;
}
