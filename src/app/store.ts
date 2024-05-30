import { create } from "zustand";
import { persist, devtools } from "zustand/middleware";

type ThemeType = "dark" | "light";

interface IThemeStore {
  theme: ThemeType;
}

interface IThemeActions {
  setTheme: (val: ThemeType) => void;
}

export const useThemeStore = create<IThemeStore & IThemeActions>()(
  devtools(
    persist(
      (set) => ({
        theme: "light",
        setTheme: (val) =>
          set((state) => ({
            theme: val,
          })),
      }),
      { name: "theme" }
    )
  )
);
