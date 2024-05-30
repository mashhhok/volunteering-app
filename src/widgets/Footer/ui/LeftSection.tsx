import { IDictionary } from "@/shared/config/i18n.config";
import { Box, Flex, Text, Title } from "@mantine/core";
import React from "react";

export const LeftSection = ({dict}: {dict: IDictionary}) => {
  return (
    <Box>
      <Title order={4} mb={16}>
        {dict.widgets.footer.left_section.title}
      </Title>
      <Text mb={{ base: 20, sm: 40 }}>{dict.widgets.footer.left_section.copyright}</Text>
      <Flex gap={16}>
        <Text>{dict.widgets.footer.left_section.terms}</Text>
        <Text>{dict.widgets.footer.left_section.privacy}</Text>
      </Flex>
    </Box>
  );
};
