import { IDictionary } from "@/shared/config/i18n.config";
import { colors } from "@/shared/enums";
import { BlurButton } from "@/shared/ui";
import { Button, Flex } from "@mantine/core";
import { Link } from "@/shared/ui/Link";
import React from "react";

export const AuthBtns = ({dict}: {dict: IDictionary}) => {
  return (
    <Flex gap={15}>
      <Link href="/auth/1">
        <BlurButton visibleFrom="md" color={colors.violet}>
          {dict.widgets.header.auth_btn}
        </BlurButton>
        <BlurButton hiddenFrom="md" size="xs" color={colors.violet}>
          {dict.widgets.header.auth_btn}
        </BlurButton>
      </Link>
    </Flex>
  );
};
