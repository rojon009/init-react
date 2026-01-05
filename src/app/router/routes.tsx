import { Routes as ReactRouterRoutes, Route, Navigate } from "react-router-dom";
import { AuthGuard } from "./AuthGuard";
import { RoleGuard } from "./RoleGuard";
import { PublicLayout } from "../../layouts/PublicLayout";
import { PrivateLayout } from "../../layouts/PrivateLayout";
import { AuthLayout } from "../../layouts/AuthLayout";
import { Login } from "../../features/auth/pages/Login";
import { Register } from "../../features/auth/pages/Register";
import { Dashboard } from "../../features/dashboard/pages/Dashboard";
import { Users } from "../../features/users/pages/Users";
import { ROUTES } from "../../shared/constants/routes";
import { useAuth } from "../../features/auth/hooks/useAuth";

const RootRedirect = () => {
  const { isAuthenticated } = useAuth();
  return (
    <Navigate to={isAuthenticated ? ROUTES.DASHBOARD : ROUTES.LOGIN} replace />
  );
};

export const Routes = () => {
  return (
    <ReactRouterRoutes>
      <Route path="/" element={<RootRedirect />} />

      <Route element={<PublicLayout />}>
        <Route element={<AuthLayout />}>
          <Route path={ROUTES.LOGIN} element={<Login />} />
          <Route path={ROUTES.REGISTER} element={<Register />} />
        </Route>
      </Route>

      <Route element={<AuthGuard />}>
        <Route element={<PrivateLayout />}>
          <Route path={ROUTES.DASHBOARD} element={<Dashboard />} />
          <Route element={<RoleGuard allowedRoles={["admin"]} />}>
            <Route path={ROUTES.USERS} element={<Users />} />
          </Route>
        </Route>
      </Route>
    </ReactRouterRoutes>
  );
};
