import { createFileRoute } from "@tanstack/react-router";
import CreateDocLayout from "~/components/layout/CreateDocLayout";

export const Route = createFileRoute("/_layout/_sub-layout")({
  component: RouteComponent,
});

function RouteComponent() {
  return <CreateDocLayout />;
}
