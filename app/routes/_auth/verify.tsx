import * as React from "react";
import { createFileRoute } from "@tanstack/react-router";
import EmailVerfication from "~/components/auth/SignUp/EmailVerify";

export const Route = createFileRoute("/_auth/verify")({
  component: RouteComponent,
});

function RouteComponent() {
  return <EmailVerfication />;
}
