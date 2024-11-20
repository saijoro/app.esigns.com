import * as React from "react";
import { createFileRoute } from "@tanstack/react-router";
import SignUp from "~/components/auth/SignUp";

export const Route = createFileRoute("/_auth/signup")({
  component: RouteComponent,
});

function RouteComponent() {
  return <SignUp />;
}
