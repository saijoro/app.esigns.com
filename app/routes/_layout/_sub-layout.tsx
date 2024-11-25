import { createFileRoute } from "@tanstack/react-router";
import CreateDocLayout from "~/components/Layout/CreateDocLayout";

export const Route = createFileRoute("/_layout/_sub-layout")({
  component: RouteComponent,
});

function RouteComponent() {
  return <CreateDocLayout />;
}
