"use client";
import React from "react";
import { useCreateFundraiserStore } from "../../../../../(fundraiser_request)/create_fundraiser/store";
import { Select, Text } from "@mantine/core";
import { locations } from "@/shared/const";

export const LocationSelect = () => {
  const setLocation = useCreateFundraiserStore((store) => store.setLocation);

  return (
    <Select
      onChange={(value, option) => setLocation(value)}
      label={<Text size="xs">Select location for your fundraising</Text>}
      data={locations}
      placeholder="Location"
      name="location"
      searchable
    ></Select>
  );
};
