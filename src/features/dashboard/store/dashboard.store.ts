import { create } from 'zustand';

interface DashboardState {
  // Dashboard state here
}

export const useDashboardStore = create<DashboardState>(() => ({}));

