import { create } from "zustand";
import { devtools } from "zustand/middleware";

type CurrencyType = string | null;

interface IState {
  block: number;
  requestId: number | string | null;
  isOpen: boolean;
  amount: number;
  currency: CurrencyType;
  email: string;
}
interface IAction {
  setBlock: (val: number) => void;
  setRequestId: (val: number | string) => void;
  setIsOpen: (val: boolean) => void;
  close: () => void;
  toggleOpen: () => void;
  setAmount: (val: number) => void;
  setCurrency: (val: CurrencyType) => void;
  setEmail: (val: string) => void;

  clear: () => void;
}

export const useDonationSlideStore = create<IState & IAction>()(
  devtools((set) => ({
    block: 0,
    setBlock: (val: number) =>
      set({
        block: val,
      }),

    requestId: null,
    setRequestId: (val: number | string) =>
      set({
        requestId: val,
      }),
    isOpen: false,
    setIsOpen: (val) =>
      set({
        isOpen: val,
      }),
    toggleOpen: () =>
      set((store) => ({
        isOpen: store.isOpen,
      })),
    close: () => set(() => ({ isOpen: false })),
    clear: () =>
      set(() => ({
        isOpen: false,
        block: 0,
        amount: 0,
        currency: null,
        email: "",
      })),

    amount: 0,
    setAmount: (val: number) =>
      set({
        amount: val,
      }),
    currency: null,
    setCurrency: (val: CurrencyType) =>
      set({
        currency: val,
      }),

    email: "",
    setEmail: (val: string) =>
      set({
        email: val,
      }),
  }))
);
