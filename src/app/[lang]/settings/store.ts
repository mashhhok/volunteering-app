import { create } from "zustand";
import { devtools } from "zustand/middleware";

interface ISettingsStore {
  
}

export const useSettingsStore = create<ISettingsStore>()(devtools(set => ({

})))