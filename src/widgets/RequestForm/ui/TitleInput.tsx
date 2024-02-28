"use client";
import { TextInput } from "@mantine/core";
import React from "react";

export const TitleInput = () => {
  return (
    <TextInput
      placeholder="Field..."
      label="Title for request"
      w={{ xs: "70%", base: "100%" }}
      withAsterisk
      size="md"
    />
  );
};
