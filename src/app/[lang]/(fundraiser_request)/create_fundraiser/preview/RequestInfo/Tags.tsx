"use client";
import { Button, Flex } from "@mantine/core";
import React from "react";
import { useCreateFundraiserStore } from "../../../../../(fundraiser_request)/create_fundraiser/store";
import { colors } from "@/shared/enums";
import { useThemeStore } from "@/app/store";
import { TagButton } from "@/app/[lang]/(fundraiser_request)/components/TagButton";


export const Tags = () => {
  const tags = useCreateFundraiserStore((store) => store.categories);

  return (
    <Flex gap={12} wrap={'wrap'}>
      {tags.map((item) => (
        <TagButton key={item}>{item}</TagButton>
      ))}
    </Flex>
  );
};
