import { colors } from "@/shared/enums";
import { TopRightArrowSVG } from "@/shared/svg";
import { BlurButton, HiddenInput } from "@/shared/ui";
import { Flex, Title, Box, Text } from "@mantine/core";
import React from "react";
import { Bordered } from "../Bordered";
import bank_id_img from "@/public/bank_id.png";
import Image from "next/image";
import { verifiyAction } from "@/app/api/verification/verifiyAction";
import { IDictionary } from "@/shared/config/i18n.config";

const BankIdImg = () => <Image src={bank_id_img} alt={""} />;

export const LeftSection = ({dict}: {dict: IDictionary}) => {
  return (
    <Flex>
      <Bordered>
        <Flex gap={18} mb={30} align={"center"} wrap={"wrap"}>
          <Title order={2}>{dict.verification_process.choose_mehtod_page.left_section.title}</Title>
          <BankIdImg />
        </Flex>
        <Text size="lg" mb={24}>
        {dict.verification_process.choose_mehtod_page.left_section.subtitle}
        </Text>
        <Box>
          <form action={verifiyAction}>
            <BlurButton
              size="xl"
              color={colors.violet}
              rightSection={<TopRightArrowSVG />}
            >
              {dict.verification_process.choose_mehtod_page.left_section.auth_btn}
            </BlurButton>
            <HiddenInput name='verificationBy' value='bankId' />
          </form>
        </Box>
      </Bordered>
    </Flex>
  );
};
