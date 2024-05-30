import React, { Suspense } from "react";
import { CardsFiltersInner } from "./CardsFiltersInner";
import { CardsFiltersProps } from "../types";
import { IDictionary } from "@/shared/config/i18n.config";

export const CardsFilters = (props: CardsFiltersProps) => {

  return (
    <Suspense fallback='' >
      <CardsFiltersInner {...props} />
    </Suspense>
  );
};
