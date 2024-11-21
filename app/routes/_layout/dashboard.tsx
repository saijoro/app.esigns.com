import * as React from "react";
import { createFileRoute } from "@tanstack/react-router";
import DashBoard from "~/components/dashboard";

export const Route = createFileRoute("/_layout/dashboard")({
  component: RouteComponent,
});

function RouteComponent() {
  return <DashBoard />;
}
