import { useQuery } from "@tanstack/react-query";
import { getUsers } from "../services/users.api";
import type { User } from "../services/users.api";

export const useUsersQuery = () => {
  return useQuery<User[]>({
    queryKey: ['users'],
    queryFn: getUsers,
  });
};

