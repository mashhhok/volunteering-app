"use client";
import { IDictionary } from "@/shared/config/i18n.config";
import { SearchInput } from "@/shared/ui";
import { Box, Flex, Text, Title } from "@mantine/core";
import React from "react";

export const Search = ({ dict }: { dict: IDictionary }) => {
  const [value, setValue] = React.useState("");

  return (
    <Flex
      wrap={{ base: "wrap", md: "nowrap" }}
      gap={{ base: 20, md: 100 }}
      align={"flex-end"}
    >
      <Box w={"100%"} flex="1 1 auto">
        <Title mb={20}>{dict.find_fundraising_page.search.title}</Title>
        <Text>{dict.find_fundraising_page.search.subtitle}</Text>
      </Box>

      <Box w={"100%"} maw={560}>
        <SearchInput dict={dict} value={value} setValue={setValue} />
      </Box>
    </Flex>
  );
};
