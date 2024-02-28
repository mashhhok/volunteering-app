'use client'
import { Textarea } from "@mantine/core";
import React from "react";

export const DescriptionInput = () => {
  return (
    <Textarea
      w={{ xs: "90%", base: "100%" }}
      label="Description for request"
      placeholder="Field..."
      size="md"
      resize="vertical"
      rows={5}
      maxRows={20}
    />
  );
};
