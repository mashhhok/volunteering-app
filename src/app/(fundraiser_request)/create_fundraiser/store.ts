import { create } from "zustand";
import { devtools } from "zustand/middleware";

interface ICreateFundraiserStore {
  name: string;
  nameError: boolean;
  categories: string[];
  amount: string;
  currency: string;
  location: string | null;
  imagesUrls: string[];
  description: string;
}

interface ICreateFundraiserActions {
  setName: (val: string) => void;
  setNameError: (val: boolean) => void;

  setCategories: (val: string[]) => void;
  setAmount: (val: string) => void;
  setCurrency: (val: string) => void;
  setLocation: (val: string | null) => void;
  setImagesUrls: (val: string[]) => void;
  setDescription: (val: string) => void;
}

export const useCreateFundraiserStore = create<
  ICreateFundraiserStore & ICreateFundraiserActions
>()(
  devtools(
    (set) => ({
      name: "",
      nameError: true,
      setName: (val: string) =>
        set((set) => ({
          name: val,
        })),
        setNameError: (val: boolean) =>
        set((set) => ({
          nameError: val,
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

      description: "",
      setDescription: (val: string) =>
        set({
          description: val,
        }),
    }),

    { name: "createFundraiser" }
  )
);
