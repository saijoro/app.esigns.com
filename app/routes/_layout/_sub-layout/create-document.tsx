import { createFileRoute } from "@tanstack/react-router";
import CreateDocument from "~/components/documents/CreateDocuments";

export const Route = createFileRoute("/_layout/_sub-layout/create-document")({
  component: RouteComponent,
});

function RouteComponent() {
  return <CreateDocument />;
}
