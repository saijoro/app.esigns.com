import { createFileRoute, Outlet } from "@tanstack/react-router";
import AuthLayout from "~/components/auth/AuthLayout";

export const Route = createFileRoute("/_auth")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      <AuthLayout />
    </div>
  );
}
