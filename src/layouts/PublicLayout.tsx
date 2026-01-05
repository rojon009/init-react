import { Outlet } from "react-router-dom";

export const PublicLayout = () => {
  return (
    <div>
      <nav>Navigation public area layout</nav>
      <Outlet />
    </div>
  );
};
