import { IDictionary } from "@/shared/config/i18n.config";
import { colors } from "@/shared/enums";
import { Box, ScrollArea, Title } from "@mantine/core";
import React from "react";

export const Description = ({children, dict}: {children: React.ReactNode, dict: IDictionary}) => {
  return (
    <Box >
      <Title fz={20} mb={24}>
        {dict.widgets.organization_info.description.about}
      </Title>
      <ScrollArea h={190} scrollbars="y" color={colors.gray} fz={16}>
        {children}
      </ScrollArea>
    </Box>
  );
};
