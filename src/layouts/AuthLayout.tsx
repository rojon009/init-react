import { Outlet } from "react-router-dom";

export const AuthLayout = () => {
  return (
    <div>
      <nav>Navigation auth area layout</nav>
      <Outlet />
    </div>
  );
};
