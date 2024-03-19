import { create } from "zustand";
import { devtools } from "zustand/middleware";

export interface AuthStoreState {
  email: string;
  isUserExist: null | boolean;
  password: {
    text: string;
    isError: boolean;
  };
  confirmPassword: string;
  setEmail: (val: string) => void;
  setPassword: (text: string, isErr: boolean) => void;
  setConfirmPassword: (val: string) => void;
  setIsUserExist: (val: boolean | null) => void;
}
export const useAuthStore = create<AuthStoreState>()(
  devtools((set) => ({
    email: "",
    password: {
      text: "",
      isError: true,
    },
    confirmPassword: "",
    isUserExist: null,

    setIsUserExist: (val: null | boolean) =>
      set((state) => ({
        isUserExist: val,
      })),

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
