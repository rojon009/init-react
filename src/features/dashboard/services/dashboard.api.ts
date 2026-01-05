import { apiClient } from '../../../config/axios';

export interface DashboardData {
  totalUsers: number;
  totalRevenue: number;
}

export const getDashboardData = async (): Promise<DashboardData> => {
  const response = await apiClient.get<DashboardData>('/dashboard');
  return response.data;
};

