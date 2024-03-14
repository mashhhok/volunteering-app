import { Box, Flex, Text } from "@mantine/core";
import Image from "next/image";
import React from "react";
import verified_blue_icon from "@/public/verified_blue.svg";
import verified_green_icon from "@/public/verified_green.svg";
import trusted_blue_icon from "@/public/trusted_blue.svg";
import trusted_green_icon from "@/public/trusted_green.svg";
import { colors } from "@/shared/enums";

const VerifiedGreenImg = () => (
  <Image src={verified_green_icon} width={20} height={20} alt="" />
);

const VerifiedBlueImg = () => (
  <Image src={verified_blue_icon} width={20} height={20} alt="" />
);

const TrustedGreenImg = () => (
  <Image src={trusted_green_icon} width={20} height={20} alt="" />
);

const TrustedBlueImg = () => (
  <Image src={trusted_blue_icon} width={20} height={20} alt="" />
);


export const VerifiedInfo = ({ isVerified }: { isVerified: boolean }) => {
  return (
    <Box>
      <Flex align="center" gap={8} mb={8}>
        {isVerified ? <TrustedGreenImg /> : <TrustedBlueImg />}

        <Text fw={600} color={isVerified ? colors.green : colors.blue}>Trusted</Text>
      </Flex>
      <Flex align="center" gap={8}>
        {isVerified ? <VerifiedGreenImg /> : <VerifiedBlueImg />}
        <Text fw={600} color={isVerified ? colors.green : colors.blue}>
          Verefied by biometric verification and identity document
        </Text>
      </Flex>
    </Box>
  );
};
