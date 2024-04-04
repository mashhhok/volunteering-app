"use client";
import { Button, Flex } from "@mantine/core";
import React from "react";
import { useCreateFundraiserStore } from "../../store";
import { colors } from "@/shared/enums";
import { useThemeStore } from "@/app/store";

const TagButton = ({ children }: { children: React.ReactNode }) => {
  const theme = useThemeStore(store => store.theme)

  return (
    <Button py={12} px={16} h={'auto'} fz={14} variant="outline" color={theme === 'light' ? colors.black : colors.white}>
      {children}
    </Button>
  );
};

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
