import React from "react";
import location_icon from "@/public/location.svg";
import Image from "next/image";
import { Flex, Title } from "@mantine/core";
import { colors } from "@/shared/enums";

const LocationIcon = () => (
  <Image
    src={location_icon}
    width={13}
    height={13}
    alt={""}
    color={colors.gray}
  />
);

export const Location = ({ children }: { children: React.ReactNode }) => {
  return (
    <Flex gap={4} align={"center"}>
      <LocationIcon />
      <Title order={6} style={{ color: colors.gray }}>
        {children}
      </Title>
    </Flex>
  );
};
