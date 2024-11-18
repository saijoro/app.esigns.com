import { createContext, ReactNode } from "react";

export const AppContext = createContext({
  appData: { dashboard: { pathname: "" } },
});

export const createAppContext = ({ children }: { children: ReactNode }) => {
  const pathname = window.location.pathname;
  return (
    <AppContext.Provider value={{ appData: { dashboard: { pathname } } }}>
      {children}
    </AppContext.Provider>
  );
};
