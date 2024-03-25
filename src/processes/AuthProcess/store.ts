import { create } from "zustand";
import { devtools } from "zustand/middleware";

export interface AuthStoreState {
  email: string;
  password: {
    text: string;
    isError: boolean;
  };
  confirmPassword: string;
  setEmail: (val: string) => void;
  setPassword: (text: string, isErr: boolean) => void;
  setConfirmPassword: (val: string) => void;
}
export const useAuthStore = create<AuthStoreState>()(
  devtools((set) => ({
    email: "",
    password: {
      text: "",
      isError: true,
    },
    confirmPassword: "",

    setEmail: (val: string) =>
      set((state) => ({
        email: val,
      })),
    setPassword: (text: string, isErr: boolean) =>
      set((state) => ({
        password: {
          text: text,
          isError: isErr,
        },
      })),
    setConfirmPassword: (val: string) =>
      set((state) => ({
        confirmPassword: val,
      })),
  }))
);
