import { createFileRoute } from "@tanstack/react-router";
import Dashboard from "~/components/dashboard";

export const Route = createFileRoute("/_layout/")({
  component: RouteComponent,
});

function RouteComponent() {
  return <Dashboard />;
}
