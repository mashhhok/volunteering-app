import { colors } from "@/shared/enums";
import { TopRightArrowSVG } from "@/shared/svg";
import { BlurButton } from "@/shared/ui";
import { Flex, Title, Box, Text } from "@mantine/core";
import React from "react";
import { Bordered } from "../Bordered";
import bank_id_img from "@/public/bank_id.png";
import Image from "next/image";

const BankIdImg = () => <Image src={bank_id_img} alt={""} />;

export const LeftSection = () => {
  return (
    <Flex>
      <Bordered>
        <Flex gap={18} mb={30} align={"center"} wrap={"wrap"}>
          <Title order={2}>Authorization with</Title>
          <BankIdImg />
        </Flex>
        <Text size="lg" mb={24}>
          This is a way to verify your identity with your bank. Select your bank
          from the list, enter your internet banking login and password. The NBU
          Bank ID system is used by: Monobank, PrivatBank, Oschadbank, Rife,
          Sense Bank and more than 35 other banks.
        </Text>
        <Box>
          <BlurButton
            size="xl"
            color={colors.violet}
            rightSection={<TopRightArrowSVG />}
          >
            Authorizе
          </BlurButton>
        </Box>
      </Bordered>
    </Flex>
  );
};
