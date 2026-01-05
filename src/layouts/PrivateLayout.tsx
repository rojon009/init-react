import { Outlet } from "react-router-dom";

export const PrivateLayout = () => {
  return (
    <div>
      <nav>Navigation private area layout</nav>
      <main>
        <Outlet />
      </main>
    </div>
  );
};
