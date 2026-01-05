import { apiClient } from '../../../config/axios';

export interface User {
  id: string;
  name: string;
  email: string;
  role: string;
}

export const getUsers = async (): Promise<User[]> => {
  const response = await apiClient.get<User[]>('/users');
  return response.data;
};

