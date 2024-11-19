import { Dispatch, SetStateAction } from "react";

export interface AppContextType {
  counter: number;
  setCounter: Dispatch<SetStateAction<number>>;
}
