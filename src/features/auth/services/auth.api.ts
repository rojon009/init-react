import { apiClient } from "../../../config/axios";
import type { LoginCredentials, AuthResponse } from "../types/auth.types";

export const login = async (
  credentials: LoginCredentials
): Promise<AuthResponse> => {
  const response = await apiClient.post<AuthResponse>(
    "/auth/login",
    credentials
  );
  return response.data;
};

export const register = async (
  credentials: LoginCredentials
): Promise<AuthResponse> => {
  const response = await apiClient.post<AuthResponse>(
    "/auth/register",
    credentials
  );
  return response.data;
};
