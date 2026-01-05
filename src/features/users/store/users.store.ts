import { create } from 'zustand';

interface UsersState {
  // Users state here
}

export const useUsersStore = create<UsersState>(() => ({}));

