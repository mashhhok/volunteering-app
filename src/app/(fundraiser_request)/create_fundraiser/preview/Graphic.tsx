"use client";
import React from "react";
import { CollectedGraphic } from "../../components/CollectedGraphic/CollectedGraphic";
import { useCreateFundraiserStore } from "../store";

export const Graphic = () => {
  const { amount, currency } = useCreateFundraiserStore();
  return (
    <CollectedGraphic
      remains={amount}
      need={amount}
      collected={"0"}
      currency={currency}
    />
  );
};
