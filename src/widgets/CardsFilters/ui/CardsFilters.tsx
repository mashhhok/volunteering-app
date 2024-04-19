import React, { Suspense } from "react";
import { CardsFiltersInner } from "./CardsFiltersInner";
import { CardsFiltersProps } from "../types";

export const CardsFilters = (props: CardsFiltersProps) => {
  return (
    <Suspense fallback='' >
      <CardsFiltersInner {...props} />
    </Suspense>
  );
};
