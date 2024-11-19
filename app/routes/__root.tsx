import {
  Outlet,
  ScrollRestoration,
  createRootRouteWithContext,
} from "@tanstack/react-router";
import { Meta, Scripts } from "@tanstack/start";
import type { ReactNode } from "react";
import appCss from "./styles/app.css?url";
import { CreateAppContext } from "~/context/appContext";

export const Route = createRootRouteWithContext()({
  context: () => CreateAppContext,
  head: () => ({
    meta: [
      {
        charSet: "utf-8",
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1",
      },
      {
        title: "Esigns",
      },
    ],
  }),
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
        <link rel="stylesheet" href={appCss as string} />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}
