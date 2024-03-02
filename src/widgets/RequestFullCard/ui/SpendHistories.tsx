import { Title, Divider, Box, Flex } from "@mantine/core";
import React from "react";
import { SpendHistoryItem } from "./SpendHistoryItem";

export const SpendHistories = async () => {
  // const {data} = fetch('URL')

  return (
    <Box>
      <Flex justify={"center"} direction={"column"} align={"center"} gap={15}>
        <Title>Spend History</Title>
        <Divider
          orientation="horizontal"
          size={5}
          w={"100%"}
          maw={200}
          color="teal"
        />
        <Flex direction={"column"} gap={15}>
          <SpendHistoryItem
            text={
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, eveniet ratione. Est fugiat consequuntur, distinctio nisi ullam recusandae, pariatur suscipit mollitia facere architecto laboriosam ratione quasi et harum, quae quos!"
            }
          />
          <SpendHistoryItem
            text={
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, eveniet ratione. Est fugiat consequuntur, distinctio nisi ullam recusandae, pariatur suscipit mollitia facere architecto laboriosam ratione quasi et harum, quae quos!"
            }
          />
        </Flex>
      </Flex>
    </Box>
  );
};
