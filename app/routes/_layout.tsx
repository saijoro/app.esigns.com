import { createFileRoute, Outlet } from "@tanstack/react-router";
import { useContext } from "react";
import { AppContext } from "../context/appContext";
import { AppContextType } from "../lib/interfaces/contextInterface";

export const Route = createFileRoute("/_layout")({
  component: RouteComponent,
});

function RouteComponent() {
  const { counter } = useContext(AppContext) as AppContextType;

  return (
    <div>
      <h1>Layout {counter}</h1>
      <Outlet />
    </div>
  );
}
