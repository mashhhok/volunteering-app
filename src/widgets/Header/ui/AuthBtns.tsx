import { colors } from "@/shared/enums";
import { BlurButton } from "@/shared/ui";
import { Button, Flex } from "@mantine/core";
import Link from "next/link";
import React from "react";

export const AuthBtns = () => {
  return (
    <Flex gap={15}>
      <Link href="/auth">
        <BlurButton visibleFrom="md" color={colors.violet}>
          Log In
        </BlurButton>
        <BlurButton hiddenFrom="md" size="xs" color={colors.violet}>
          Log In
        </BlurButton>
      </Link>
    </Flex>
  );
};
