import { useMutation } from "@tanstack/react-query";
import { login as loginApi } from "../services/auth.api";
import { useAuth } from "./useAuth";

export const useLogin = () => {
  const { setAuth } = useAuth();

  return useMutation({
    mutationFn: loginApi,
    onSuccess: (data) => {
      setAuth(data.user, data.token);
    },
  });
};
