import { create } from "zustand";
import { devtools } from "zustand/middleware";

interface IState {
  totalPages: number;
}
interface IActions {
  setTotalPages: (page: number) => void;
}

export const useCardsFiltersStore = create<IState & IActions>()(
  devtools((set) => ({
    totalPages: 1,
    setTotalPages: (val: number) =>
      set({
        totalPages: val,
      }),
  }))
);
