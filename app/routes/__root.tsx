// app/routes/__root.tsx
import {
  Outlet,
  ScrollRestoration,
  createRootRouteWithContext,
} from "@tanstack/react-router";
import { Meta, Scripts } from "@tanstack/start";
import type { ReactNode } from "react";
import { CreateAppContext } from "../context/appContext";
import { AppContextType } from "../lib/interfaces/contextInterface";

export const Route = createRootRouteWithContext<AppContextType>()({
  context: () => ({}), //default context values
  component: RootComponent,
});

function RootComponent() {
  return (
    <CreateAppContext>
      <RootDocument>
        <Outlet />
      </RootDocument>
    </CreateAppContext>
  );
}

function RootDocument({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html>
      <head>
        <Meta />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}
