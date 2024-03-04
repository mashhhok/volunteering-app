import { Button, Flex } from "@mantine/core";
import React from "react";

export const InterBtns = () => {
  return (
    <Flex justify={"center"} gap={30}>
      <Button size="xl" variant="gradient" radius="md">
        Donate
      </Button>
      <Button size="xl" variant="gradient" radius="md">
        Chat
      </Button>
    </Flex>
  );
};
