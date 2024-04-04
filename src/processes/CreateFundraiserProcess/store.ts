import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

interface ICreateFundraiserStore {
  name: string;
  categories: string[];
  amount: string;
  currency: string;
  location: string | null;
  imagesUrls: string[];
}

interface ICreateFundraiserActions {
  setName: (val: string) => void;
  setCategories: (val: string[]) => void;
  setAmount: (val: string) => void;
  setCurrency: (val: string) => void;
  setLocation: (val: string | null) => void;
  setImagesUrls: (val: string[]) => void;
}

export const useCreateFundraiserStore = create<
  ICreateFundraiserStore & ICreateFundraiserActions
>()(
  devtools(
    (set) => ({
      name: "",
      setName: (val) =>
        set((store) => ({
          name: val,
        })),

      categories: [],
      setCategories: (val: string[]) =>
        set((store) => ({
          categories: val,
        })),

      amount: "",
      setAmount: (val: string) =>
        set((store) => ({
          amount: val,
        })),

      currency: "",
      setCurrency: (val: string) =>
        set((store) => ({
          currency: val,
        })),

      location: null,
      setLocation: (val: string | null) =>
        set((store) => ({
          location: val,
        })),

      imagesUrls: [],
      setImagesUrls: (val: string[]) =>
        set((store) => ({
          imagesUrls: val,
        })),
    }),

    { name: "createFundraiser" }
  )
);
