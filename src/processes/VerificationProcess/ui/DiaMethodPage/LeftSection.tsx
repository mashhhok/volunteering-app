import { colors } from "@/shared/enums";
import { Card, Text } from "@mantine/core";
import React from "react";
import { Bordered } from "../Bordered";

export const LeftSection = () => {
  return (
    <Bordered>
      <Card radius={"lg"} mb={24} w={240} h={240} bg={colors.lightGray}></Card>
      <Text size="lg">
        Please, scan the QR-code in the app Дія and follow the instructions.
      </Text>
    </Bordered>
  );
};
