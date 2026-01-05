import { UserTable } from '../components/UserTable';
import { useUsersQuery } from '../hooks/useUsersQuery';

export const Users = () => {
  const { data, isLoading } = useUsersQuery();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Users</h1>
      <UserTable users={data || []} />
    </div>
  );
};

