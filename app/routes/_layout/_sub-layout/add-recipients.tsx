import * as React from "react";
import { createFileRoute } from "@tanstack/react-router";
import AddRecipients from "~/components/documents/AddRecipients";

export const Route = createFileRoute("/_layout/_sub-layout/add-recipients")({
  component: RouteComponent,
});

function RouteComponent() {
  return <AddRecipients />;
}
