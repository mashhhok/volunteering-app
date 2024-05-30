"use client";
import React from "react";
import { Box, Flex, Title } from "@mantine/core";
import { BlockNavigateBtns } from "./BlockNavigateBtns";

export const PaymentMethodBlock = () => {
  const isDisabled = false;
  const elems = [["apple", "google"], ["paypal"], ["приват24", "монобанк"]];
  return (
    <Box>
      <Box mih={400} mb={50}>
        <Flex align="center" direction={"column"}>
          <Box maw={500} w={"100%"}>
            <Title order={3} mb={40}>
              Сhoose a convenient payment method for you
            </Title>
            <Flex direction={"column"} gap={8} mb={20}>
              {elems.map((item, index) => (
                <Flex key={index} gap={7}>
                  {item.map((item2, index) => (
                    <Flex
                      h={58}
                      align={"center"}
                      justify={"center"}
                      flex="1 1 auto"
                      style={{ borderRadius: 16, border: "2px solid" }}
                      key={index}
                    >
                      {item2}
                    </Flex>
                  ))}
                </Flex>
              ))}
            </Flex>
          </Box>
        </Flex>
      </Box>
      <BlockNavigateBtns isSubmit={true} nextDisable={isDisabled} />
    </Box>
  );
};
