"use client";
import { SearchInput } from "@/shared/ui";
import { Box, Flex, Text, Title } from "@mantine/core";
import React from "react";

export const Search = () => {
  const [value, setValue] = React.useState("");

  React.useEffect(() => {
    console.log(value);
  }, [value]);

  return (
    <Flex
      wrap={{ base: "wrap", md: "nowrap" }}
      gap={{ base: 20, md: 100 }}
      align={"flex-end"}
    >
      <Box w={"100%"} flex="1 1 auto">
        <Title mb={20}>Search fundraisers on UnitaryAid</Title>
        <Text>
          Find fundraisers by category, by location, by title, by keyword,
          or by the name of an individual
        </Text>
      </Box>

      <Box w={"100%"} maw={560}>
        <SearchInput value={value} setValue={setValue} />
      </Box>
    </Flex>
  );
};
