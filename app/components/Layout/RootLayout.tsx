import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { SidebarProvider, useSidebar } from "@/components/ui/sidebar";

import { useNavigate } from "@tanstack/react-router";
import Cookies from "js-cookie";
import {
  Bell,
  CircleChevronDown,
  MessageCircleMore,
  Search,
  X,
} from "lucide-react";
import { useContext, useState } from "react";
import { AppContext } from "~/context/appContext";
import { iContext } from "~/lib/interfaces/iContext";
import AppSidebar from "./AppSidebar";

const RootLayout = () => {
  return (
    <SidebarProvider>
      <NavbarLayout />
    </SidebarProvider>
  );
};

export default RootLayout;

function NavbarLayout() {
  const navigate = useNavigate({ from: "/" });
  const { counter } = useContext(AppContext) as iContext;
  const [searchString, setSearchString] = useState<string>("");
  const { open: isSidebarOpen, setOpen: setIsSidebarOpen } = useSidebar();
  const handleLogout = () => {
    Cookies.remove("token");
    Cookies.remove("user_type");
    navigate({
      to: `/signin`,
    });
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
            className={`h-5 w-5 cursor-pointer hover:scale-[1.1] ease-in-out duration-300 ${isSidebarOpen ? "rotate-180" : ""}`}
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
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
          <DropdownMenu>
            <DropdownMenuTrigger className="flex gap-2 items-center hover:cursor-pointer">
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
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-white">
              <DropdownMenuItem
                className="cursor-pointer"
                onClick={handleLogout}
              >
                Logout
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </nav>
      <AppSidebar isSidebarOpen={isSidebarOpen} />
    </div>
  );
}
