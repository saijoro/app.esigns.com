import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/_layout/_sub-layout/")({
  component: RouteComponent,
});

function RouteComponent() {
  return "Dashboard";
}
