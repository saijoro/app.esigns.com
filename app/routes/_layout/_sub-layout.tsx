import { Stepper } from "@/components/ui/stepper";
import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/_layout/_sub-layout")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      <div className="bg-[#fff9ed]">
        <div className="w-full max-w-3xl mx-auto h-12">
          <Stepper
            totalSteps={3}
            currentStep={2}
            steps={["Create a Document", "Add Recipients", "Review Content"]}
          />
        </div>
      </div>
      <div className="w-full flex">
        <aside className="flex flex-col pl-3 border-r border-gray-200 h-[calc(100vh-100px-64px)] mt-5 w-2/12">
          <div className="p-2 w-full">
            <h3 className="font-normal text-[14px]">Create Document</h3>

            <div className="flex flex-col justify-start text-start py-5 w-full">
              <p className="pl-3 flex gap-2 items-center font-light text-gray-600 rounded-lg h-[40px] hover:bg-gray-100 w-full">
                <span>
                  <img src="/images/dashboard/menu-icon.svg" />
                </span>{" "}
                Quick Access
              </p>
              <p className="pl-3 flex gap-2 items-center font-light text-gray-600 rounded-lg h-[40px] hover:bg-gray-100 w-full">
                <span>
                  <img src="/images/dashboard/menu-icon.svg" />
                </span>{" "}
                My Templates
              </p>
              <p className="pl-3 flex gap-2 items-center font-light text-gray-600 rounded-lg h-[40px] hover:bg-gray-100 w-full">
                <span>
                  <img src="/images/dashboard/menu-icon.svg" />
                </span>{" "}
                Shared With Me
              </p>
            </div>
          </div>

          <div className="p-2 w-full">
            <h3 className="font-normal text-[14px]">Import Form</h3>

            <div className="flex flex-col justify-start text-start py-5 w-full">
              <p className="pl-3 flex gap-2 items-center font-light text-gray-600 rounded-lg h-[40px] hover:bg-gray-100 w-full">
                <span>
                  <img src="/images/dashboard/menu-icon.svg" />
                </span>{" "}
                Local File
              </p>
              <p className="pl-3 flex gap-2 items-center font-light text-gray-600 rounded-lg h-[40px] hover:bg-gray-100 w-full">
                <span>
                  <img src="/images/dashboard/menu-icon.svg" />
                </span>{" "}
                Google Drive
              </p>
              <p className="pl-3 flex gap-2 items-center font-light text-gray-600 rounded-lg h-[40px] hover:bg-gray-100 w-full">
                <span>
                  <img src="/images/dashboard/menu-icon.svg" />
                </span>{" "}
                Drop Box
              </p>
              <p className="pl-3 flex gap-2 items-center font-light text-gray-600 rounded-lg h-[40px] hover:bg-gray-100 w-full">
                <span>
                  <img src="/images/dashboard/menu-icon.svg" />
                </span>{" "}
                One Drive
              </p>
              <p className="pl-3 flex gap-2 items-center font-light text-gray-600 rounded-lg h-[40px] hover:bg-gray-100 w-full">
                <span>
                  <img src="/images/dashboard/menu-icon.svg" />
                </span>{" "}
                Box
              </p>
            </div>
          </div>
          <div className="p-2 w-full">
            <h3 className="font-normal text-[14px]">AI</h3>

            <div className="flex flex-col justify-start text-start py-5 w-full">
              <p className="pl-3 flex gap-2 items-center font-light text-gray-600 rounded-lg h-[40px] hover:bg-gray-100 w-full">
                <span>
                  <img src="/images/dashboard/menu-icon.svg" />
                </span>{" "}
                Create With AI
              </p>
            </div>
          </div>
        </aside>
        <Outlet />
      </div>
    </div>
  );
}