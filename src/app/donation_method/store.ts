import { create } from "zustand";
import { devtools } from "zustand/middleware";

interface Store {
  
}

interface Actions {}

export const useDonationMethodStore = create<Store & Actions>()(
  devtools((set) => ({}))
);
