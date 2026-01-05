import { StatsCard } from '../components/StatsCard';
import { useDashboardQuery } from '../hooks/useDashboardQuery';

export const Dashboard = () => {
  const { data, isLoading } = useDashboardQuery();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Dashboard</h1>
      <div>
        <StatsCard title="Total Users" value={data?.totalUsers || 0} />
        <StatsCard title="Total Revenue" value={data?.totalRevenue || 0} />
      </div>
    </div>
  );
};

