import React, { RefObject } from "react";
import { create } from "zustand";
import { devtools } from "zustand/middleware";

interface IScrollCardsState {
  scrollRef: RefObject<HTMLDivElement> | null;
  setScrollRef: (val: RefObject<HTMLDivElement> | null) => void;
  scroll: number;
  onScroll: (val: number) => void;
}

export const useScrollCardsState = create<IScrollCardsState>()(
  devtools((set) => ({
    scrollRef: null,
    setScrollRef: (val) =>
      set({
        scrollRef: val,
      }),
    onScroll: (val) =>
      set({
        scroll: val,
      }),
    scroll: 60,
  }))
);
