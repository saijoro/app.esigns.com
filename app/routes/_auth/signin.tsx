import * as React from "react";
import { createFileRoute } from "@tanstack/react-router";
import SignIn from "~/components/auth/Sigin";

export const Route = createFileRoute("/_auth/signin")({
  component: RouteComponent,
});

function RouteComponent() {
  return <SignIn />;
}
