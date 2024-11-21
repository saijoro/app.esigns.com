import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Outlet, useLocation } from "@tanstack/react-router";
import {
  Bell,
  CircleChevronDown,
  ContactRound,
  File,
  House,
  MessageCircleMore,
  Search,
  X,
} from "lucide-react";
import { useContext, useState } from "react";
import { AppContext } from "~/context/appContext";
import { iContext } from "~/lib/interfaces/iContext";

const RootLayout = () => {
  const { counter } = useContext(AppContext) as iContext;
  const location = useLocation();
  const [searchString, setSearchString] = useState<string>("");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const isActive = (activeLink: string) => {
    if (activeLink === "/") {
      return location.pathname === activeLink;
    }
    return location.pathname.includes(activeLink);
  };

  const onSideMenuBtnClick = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  return (
    <div className="h-screen w-full bg-[linear-gradient(45deg,_#562405,_#ee7206,_#562405)]">
      <nav className="flex justify-between items-center p-4">
        <div className="flex justify-start items-center gap-5">
          <img
            src={
              isSidebarOpen
                ? "/images/layout/close.svg"
                : "/images/layout/nav-icon.svg"
            }
            alt="logo"
            className="h-5 w-5 cursor-pointer hover:scale-[1.2] ease-in-out duration-300"
            onClick={onSideMenuBtnClick}
          />
          <img
            src="/images/layout/main-logo.svg"
            alt="logo"
            className="hover:animate-pulse cursor-pointer"
          />
        </div>
        <div className="flex gap-2 justify-end items-center">
          <div className="relative">
            <Input
              value={searchString}
              type="text"
              onChange={(e) => setSearchString(e.target.value)}
              className="h-10 px-4 py-3.5 bg-[#ffffff60] rounded-lg border border-black/30 focus:outline-none text-white focus-visible:outline-none"
            />
            {searchString ? (
              <button
                onClick={() => setSearchString("")}
                className="absolute right-2 top-1/2 -translate-y-1/2 cursor-pointer"
              >
                <X className="text-white" />
              </button>
            ) : (
              <Search className="absolute right-2 top-1/2  -translate-y-1/2 bg-transparent text-white rounded-full w-[30px] h-[30px] p-1" />
            )}
          </div>
          <div className="relative">
            <Select>
              <SelectTrigger className="h-10 px-4 py-3.5 bg-[#ffffff60] rounded-lg border border-black/30 text-white focus:outline-none focus-visible:outline-none">
                <SelectValue placeholder="Theme" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem
                  className="bg-white text-black focus:outline-none focus-visible:outline-none"
                  value="light"
                >
                  Light
                </SelectItem>
                <SelectItem
                  className="bg-white text-black focus:outline-none focus-visible:outline-none"
                  value="dark"
                >
                  Dark
                </SelectItem>
                <SelectItem
                  className="bg-white text-black focus:outline-none focus-visible:outline-none"
                  value="system"
                >
                  System
                </SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="text-white rounded-full bg-[#ffffff60] px-2 py-2">
            <MessageCircleMore />
          </div>
          <div className="text-white rounded-full bg-[#ffffff60] px-2 py-2">
            <Bell />
          </div>
          <div className="relative">
            <div className="w-[200px] text-white flex justify-between items-center rounded-full bg-[#ffffff60] pr-2">
              <div className="flex items-center gap-2">
                <Avatar>
                  <AvatarImage
                    src="https://github.com/shadcn.png"
                    alt="@shadcn"
                    className="rounded-full"
                  />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-white text-[14px]">John Doe</p>
                  <p className="text-sm text-white text-[12px]">Admin</p>
                </div>
              </div>
              <CircleChevronDown />
            </div>
          </div>
        </div>
      </nav>

      <div className="flex">
        <aside className="px-4 h-[calc(100vh-100px)]">
          <ul className="pt-20">
            <li className="px-2 py-4">
              <div
                className={
                  (isActive("/")
                    ? `text-black bg-white p-2 flex items-center justify-start rounded-md gap-2`
                    : `text-white bg-transparent p-2 flex items-center justify-start rounded-md gap-2`) +
                  " group cursor-pointer"
                }
              >
                <House className="w-[20px] h-[20px] cursor-pointer group-hover:scale-[1.2] ease-in-out duration-300" />
                {isSidebarOpen ? "Dashboard" : ""}
              </div>
            </li>
            <li className="px-2 py-4">
              <div
                className={
                  (isActive("/test")
                    ? `text-black bg-white p-2 flex items-center justify-start rounded-md gap-2`
                    : `text-white bg-transparent p-2 flex items-center justify-start rounded-md gap-2`) +
                  " group cursor-pointer"
                }
              >
                <File className="w-[20px] h-[20px] cursor-pointer group-hover:scale-[1.2] ease-in-out duration-300" />
                {isSidebarOpen ? "Documents" : ""}
              </div>
            </li>
            <li className="px-2 py-4">
              <div
                className={
                  (isActive("/test")
                    ? `text-black bg-white p-2 flex items-center justify-start rounded-md gap-2`
                    : `text-white bg-transparent p-2 flex items-center justify-start rounded-md gap-2`) +
                  " group cursor-pointer"
                }
              >
                <ContactRound className="w-[20px] h-[20px] cursor-pointer group-hover:scale-[1.2] ease-in-out duration-300" />
                {isSidebarOpen ? "Contacts" : ""}
              </div>
            </li>
            <li className="px-2 py-4">
              <div
                className={
                  (isActive("/test")
                    ? `text-black bg-white p-2 flex items-center justify-start rounded-md gap-2`
                    : `text-white bg-transparent p-2 flex items-center justify-start rounded-md gap-2`) +
                  " group cursor-pointer"
                }
              >
                {/* <img
                  src="/images/layout/workflow.svg"
                  className="w-[20px] h-[20px] cursor-pointer group-hover:scale-[1.2] ease-in-out duration-300"
                /> */}
                <svg
                  className="cursor-pointer group-hover:scale-[1.2] ease-in-out duration-300"
                  width="21"
                  height="18"
                  viewBox="0 0 21 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15 7.5H19.5C19.8978 7.5 20.2794 7.34196 20.5607 7.06066C20.842 6.77936 21 6.39782 21 6V1.5C21 1.10218 20.842 0.720644 20.5607 0.43934C20.2794 0.158035 19.8978 0 19.5 0H15C14.6022 0 14.2206 0.158035 13.9393 0.43934C13.658 0.720644 13.5 1.10218 13.5 1.5V3H12C11.4033 3 10.831 3.23705 10.409 3.65901C9.98705 4.08097 9.75 4.65326 9.75 5.25V8.25H6.75V7.5C6.75 7.10218 6.59196 6.72064 6.31066 6.43934C6.02936 6.15804 5.64782 6 5.25 6H2.25C1.85218 6 1.47064 6.15804 1.18934 6.43934C0.908035 6.72064 0.75 7.10218 0.75 7.5V10.5C0.75 10.8978 0.908035 11.2794 1.18934 11.5607C1.47064 11.842 1.85218 12 2.25 12H5.25C5.64782 12 6.02936 11.842 6.31066 11.5607C6.59196 11.2794 6.75 10.8978 6.75 10.5V9.75H9.75V12.75C9.75 13.3467 9.98705 13.919 10.409 14.341C10.831 14.7629 11.4033 15 12 15H13.5V16.5C13.5 16.8978 13.658 17.2794 13.9393 17.5607C14.2206 17.842 14.6022 18 15 18H19.5C19.8978 18 20.2794 17.842 20.5607 17.5607C20.842 17.2794 21 16.8978 21 16.5V12C21 11.6022 20.842 11.2206 20.5607 10.9393C20.2794 10.658 19.8978 10.5 19.5 10.5H15C14.6022 10.5 14.2206 10.658 13.9393 10.9393C13.658 11.2206 13.5 11.6022 13.5 12V13.5H12C11.8011 13.5 11.6103 13.421 11.4697 13.2803C11.329 13.1397 11.25 12.9489 11.25 12.75V5.25C11.25 5.05109 11.329 4.86032 11.4697 4.71967C11.6103 4.57902 11.8011 4.5 12 4.5H13.5V6C13.5 6.39782 13.658 6.77936 13.9393 7.06066C14.2206 7.34196 14.6022 7.5 15 7.5ZM5.25 10.5H2.25V7.5H5.25V10.5ZM15 12H19.5V16.5H15V12ZM15 1.5H19.5V6H15V1.5Z"
                    fill={isActive("/test") ? "#000" : "#fff"}
                  />
                </svg>
                {isSidebarOpen ? "Work flows" : ""}
              </div>
            </li>
            <li className="px-2 py-4">
              <div
                className={
                  (isActive("/test")
                    ? `text-black bg-white p-2 flex items-center justify-start rounded-md gap-2`
                    : `text-white bg-transparent p-2 flex items-center justify-start rounded-md gap-2`) +
                  " group cursor-pointer"
                }
              >
                {/* <img
                  src="/images/layout/groups.svg"
                  className="w-[20px] h-[20px] cursor-pointer group-hover:scale-[1.2] ease-in-out duration-300"
                /> */}
                <svg
                  className="cursor-pointer group-hover:scale-[1.2] ease-in-out duration-300"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.2806 7.21937C14.3504 7.28903 14.4057 7.37175 14.4434 7.46279C14.4812 7.55384 14.5006 7.65144 14.5006 7.75C14.5006 7.84856 14.4812 7.94616 14.4434 8.03721C14.4057 8.12825 14.3504 8.21097 14.2806 8.28063L9.03063 13.5306C8.96097 13.6004 8.87826 13.6557 8.78721 13.6934C8.69616 13.7312 8.59857 13.7506 8.5 13.7506C8.40144 13.7506 8.30385 13.7312 8.2128 13.6934C8.12175 13.6557 8.03903 13.6004 7.96938 13.5306L5.71938 11.2806C5.57865 11.1399 5.49959 10.949 5.49959 10.75C5.49959 10.551 5.57865 10.3601 5.71938 10.2194C5.86011 10.0786 6.05098 9.99958 6.25 9.99958C6.44903 9.99958 6.6399 10.0786 6.78063 10.2194L8.5 11.9397L13.2194 7.21937C13.289 7.14964 13.3718 7.09432 13.4628 7.05658C13.5538 7.01884 13.6514 6.99941 13.75 6.99941C13.8486 6.99941 13.9462 7.01884 14.0372 7.05658C14.1283 7.09432 14.211 7.14964 14.2806 7.21937ZM19.75 10C19.75 11.9284 19.1782 13.8134 18.1068 15.4168C17.0355 17.0202 15.5127 18.2699 13.7312 19.0078C11.9496 19.7458 9.98919 19.9389 8.09787 19.5627C6.20656 19.1865 4.46928 18.2579 3.10571 16.8943C1.74215 15.5307 0.813554 13.7934 0.437348 11.9021C0.061142 10.0108 0.254225 8.05042 0.992179 6.26884C1.73013 4.48726 2.97982 2.96451 4.58319 1.89317C6.18657 0.821828 8.07164 0.25 10 0.25C12.585 0.25273 15.0634 1.28084 16.8913 3.10872C18.7192 4.93661 19.7473 7.41498 19.75 10ZM18.25 10C18.25 8.3683 17.7661 6.77325 16.8596 5.41655C15.9531 4.05984 14.6646 3.00242 13.1571 2.37799C11.6497 1.75357 9.99085 1.59019 8.39051 1.90852C6.79017 2.22685 5.32016 3.01259 4.16637 4.16637C3.01259 5.32015 2.22685 6.79016 1.90853 8.3905C1.5902 9.99085 1.75358 11.6496 2.378 13.1571C3.00242 14.6646 4.05984 15.9531 5.41655 16.8596C6.77326 17.7661 8.36831 18.25 10 18.25C12.1873 18.2475 14.2843 17.3775 15.8309 15.8309C17.3775 14.2843 18.2475 12.1873 18.25 10Z"
                    fill={isActive("/test") ? "#000" : "#fff"}
                  />
                </svg>
                {isSidebarOpen ? "Groups" : ""}
              </div>
            </li>
          </ul>
        </aside>
        <div
          className={`bg-white ${isSidebarOpen ? "w-[calc(100%-190px)]" : "w-[calc(100%-100px)]"} rounded-lg overflow-hidden`}
        >
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default RootLayout;
