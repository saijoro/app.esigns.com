import { Outlet } from "@tanstack/react-router";

const AuthLayout = () => {
  return (
    <div className="bg-[#fbf7ec]">
      <Outlet />
    </div>
  );
};

export default AuthLayout;
