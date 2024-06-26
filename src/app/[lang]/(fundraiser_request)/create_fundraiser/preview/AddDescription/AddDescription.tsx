import { Box, Button, Flex, Title } from "@mantine/core";
import React from "react";
import { Info } from "./Info";
import { TextEditor } from "./TextEditor";
import { colors } from "@/shared/enums";


export const AddDescription = () => {

  

  return (
    <Box>
      <Flex gap={46} direction={{ base: "column", md: "row" }}>
        <Title order={2}>Add your description</Title>
        <Box>
          <TextEditor />
          <Box h={20} />
          <Info />
          <Box h={24} />
          <Button color={colors.violet} type="submit">
            Save
          </Button>
          <Box h={{ base: 40, md: 100 }} />
        </Box>
      </Flex>
    </Box>
  );
};
