import { createContext, ReactNode, useState } from "react";
import { iContext } from "../lib/interfaces/iContext";

export const AppContext = createContext<iContext>({
  counter: 0,
  setCounter: () => {}, // Default value, won't be used in real scenarios
});

export const CreateAppContext = ({ children }: { children: ReactNode }) => {
  const [counter, setCounter] = useState<number>(0);

  return (
    <AppContext.Provider value={{ counter, setCounter }}>
      {children}
    </AppContext.Provider>
  );
};
