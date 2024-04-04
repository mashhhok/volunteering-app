import React from "react";
import location_icon from "@/public/location.svg";
import Image from "next/image";
import { Flex, Text, Title } from "@mantine/core";
import { colors } from "@/shared/enums";

const LocationIcon = () => (
  <Image
    src={location_icon}
    width={9}
    height={11}
    alt={""}
    color={colors.gray}
  />
);

export const Location = ({
  children,
  small,
}: {
  children: React.ReactNode;
  small?: boolean;
}) => {
  return (
    <Flex gap={4} align={"center"}>
      <LocationIcon />
      <Text fz={small ? 10 : 14} fw={400} color={colors.gray}>
        {children}
      </Text>
    </Flex>
  );
};
