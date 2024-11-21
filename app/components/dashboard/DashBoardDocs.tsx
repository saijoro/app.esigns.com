import { useQuery } from "@tanstack/react-query";
import TanStackTable from "../core/TanstackTable";
import DocsColumns from "./DocsColumns";
import { getDocumentsAPI } from "~/utils/services/documents";
import { useState } from "react";

const DashBoardDocs = () => {
  let data = [
    {
      serial: "01",
      NAME: "Agreement 1099",
      FROM: "Kodefast Account",
      COMPANY: "Sam LLC",
      status: "Waiting For Ramnanadan",
      PROGRESS: "2/3",
      lastmodified: "11-09-2024 16:54:30",
      created_at: "11-09-2024 16:54:30",
      EXPIRES: "11-09-2024 16:54:30",
    },
    {
      serial: "02",
      NAME: "Agreement 1099",
      FROM: "Kodefast Account",
      COMPANY: "Sam LLC",
      status: "Completed",
      PROGRESS: "3/3",
      lastmodified: "11-09-2024 16:54:30",
      created_at: "11-09-2024 16:54:30",
      EXPIRES: "11-09-2024 16:54:30",
    },
    {
      serial: "03",
      NAME: "Agreement 1099",
      FROM: "Kodefast Account",
      COMPANY: "Sam LLC",
      status: "Waiting For Ramnanadan",
      PROGRESS: "2/3",
      lastmodified: "11-09-2024 16:54:30",
      created_at: "11-09-2024 16:54:30",
      EXPIRES: "11-09-2024 16:54:30",
    },
    {
      serial: "04",
      NAME: "Agreement 1099",
      FROM: "Kodefast Account",
      COMPANY: "Sam LLC",
      status: "Waiting For Ramnanadan",
      PROGRESS: "2/3",
      lastmodified: "11-09-2024 16:54:30",
      created_at: "11-09-2024 16:54:30",
      EXPIRES: "11-09-2024 16:54:30",
    },
    {
      serial: "05",
      NAME: "Agreement 1099",
      FROM: "Kodefast Account",
      COMPANY: "Sam LLC",
      status: "Waiting For Ramnanadan",
      PROGRESS: "2/3",
      lastmodified: "11-09-2024 16:54:30",
      created_at: "11-09-2024 16:54:30",
      EXPIRES: "11-09-2024 16:54:30",
    },
    {
      serial: "06",
      NAME: "Agreement 1099",
      FROM: "Kodefast Account",
      COMPANY: "Sam LLC",
      status: "Waiting For Ramnanadan",
      PROGRESS: "2/3",
      lastmodified: "11-09-2024 16:54:30",
      created_at: "11-09-2024 16:54:30",
      EXPIRES: "11-09-2024 16:54:30",
    },
    {
      serial: "07",
      NAME: "Agreement 1099",
      FROM: "Kodefast Account",
      COMPANY: "Sam LLC",
      status: "Waiting For Ramnanadan",
      PROGRESS: "2/3",
      lastmodified: "11-09-2024 16:54:30",
      created_at: "11-09-2024 16:54:30",
      EXPIRES: "11-09-2024 16:54:30",
    },
    {
      serial: "08",
      NAME: "Agreement 1099",
      FROM: "Kodefast Account",
      COMPANY: "Sam LLC",
      status: "Waiting For Ramnanadan",
      PROGRESS: "2/3",
      lastmodified: "11-09-2024 16:54:30",
      created_at: "11-09-2024 16:54:30",
      EXPIRES: "11-09-2024 16:54:30",
    },
    {
      serial: "09",
      NAME: "Agreement 1099",
      FROM: "Kodefast Account",
      COMPANY: "Sam LLC",
      status: "Waiting For Ramnanadan",
      PROGRESS: "2/3",
      lastmodified: "11-09-2024 16:54:30",
      created_at: "11-09-2024 16:54:30",
      EXPIRES: "11-09-2024 16:54:30",
    },
  ];

  const [activeTab, setActiveTab] = useState("My Documents");

  const tabs = [
    { name: "My Documents", count: 24 },
    { name: "Drafts", count: 14 },
    { name: "Shared With Me", count: 10 },
  ];

  const activeStyles = {
    container:
      "bg-white border-b-2 border-[#f07306] rounded-tl rounded-tr-[34px]",
    text: "text-[#f07306]",
    badge: "bg-[#f07306] text-white",
  };

  const inactiveStyles = {
    container: "bg-white",
    text: "text-[#828282]",
    badge: "bg-[#e0e0e0] text-[#828282]",
  };

  const {
    isLoading,
    isError,
    data: response,
    error,
    isFetching,
  } = useQuery({
    queryKey: ["docs"],

    queryFn: async () => {
      const response = await getDocumentsAPI({
        page: 1,
        limit: 10,
      });
      if (response?.status === 200 || response?.status === 201) {
        let { data, pagination } = response?.data;
        console.log(data, "data");
        console.log(pagination, "pagination");
        // return { data, pagination };
      }
    },
  });
  return (
    <div className="w-full px-4">
      <div className="w-full pt-[9px]  bg-white rounded-xl shadow flex-col justify-start items-start inline-flex">
        <div className="self-stretch pr-4 justify-between items-center inline-flex">
          <div className="pl-4 justify-start items-center flex">
            {tabs.map((tab) => {
              const isActive = activeTab === tab.name;
              const styles = isActive ? activeStyles : inactiveStyles;

              return (
                <div
                  key={tab.name}
                  className={`px-4 py-3 ${styles.container} justify-center items-center gap-2.5 flex cursor-pointer`}
                  onClick={() => setActiveTab(tab.name)}
                >
                  <div
                    className={`text-sm font-normal font-['Readex Pro'] leading-[16.80px] ${styles.text}`}
                  >
                    {tab.name}
                  </div>
                  <div
                    className={`w-[37px] px-2.5 py-[3px] rounded-[60px] flex-col justify-center items-center gap-2.5 inline-flex ${styles.badge}`}
                  >
                    <div className="self-stretch text-xs font-normal font-['Readex Pro'] leading-[14.40px]">
                      {tab.count}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="justify-start items-center gap-4 flex">
            <div className="px-[18px] py-[9px] bg-[#f07306] rounded-lg justify-center items-center gap-2.5 flex">
              <div className="text-center text-white text-base font-light font-['Readex Pro'] leading-none">
                Create a Document
              </div>
            </div>
          </div>
        </div>
        <div>
          <TanStackTable
            data={data}
            columns={DocsColumns()}
            paginationDetails={data?.[1] || {}}
            // loading={isLoading || isFetching}
            removeSortingForColumnIds={["serial", "actions", "status"]}
          />
        </div>
      </div>
    </div>
  );
};
export default DashBoardDocs;
