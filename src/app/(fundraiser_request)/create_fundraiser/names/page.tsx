"use client";
import { TextField } from "@/shared/ui";
import { MultiselectField } from "@/shared/ui/MultiselectField";
import { Box, Button, Title } from "@mantine/core";
import React from "react";
import { NextBtn } from "./NextBtn";
import { useCreateFundraiserStore } from "../store";
import { NameInput } from "./NameInput";
import { SelectInput } from "./SelectInput";
import { RgbaBgLayout } from "@/shared/ui/RgbaBgLayout";
import { BackBtn } from "../../components/BackBtn";

const NamesPage = () => {
  const { name, categories } = useCreateFundraiserStore((store) => store);
  const isValid =
    name.length < 80 &&
    name.length > 10 &&
    categories.length > 0 &&
    categories.length < 4;

  return (
    <RgbaBgLayout>
      <BackBtn absolute />

      <Box w={"100%"} maw={500}>
        <Title order={4} style={{ textAlign: "center" }} mb={40}>
          What are we fundraising for today?
        </Title>
        <NameInput />
        <Box h={12} />
        <SelectInput />
        <Box h={65} />
        <NextBtn disabled={!isValid} />
      </Box>
    </RgbaBgLayout>
  );
};

export default NamesPage;
