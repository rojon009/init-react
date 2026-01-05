import { useAuthStore } from "../store/auth.store";

export const useAuth = () => {
  const { user, token, setAuth, logout } = useAuthStore();

  return {
    user,
    token,
    setAuth,
    logout,
    isAuthenticated: !!(user && token),
  };
};
