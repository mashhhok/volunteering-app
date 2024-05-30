import React from "react";
import location_icon from "@/public/location.svg";
import Image from "next/image";
import { Flex, Text, Title } from "@mantine/core";
import { colors } from "@/shared/enums";
import { LocationSVG } from "@/shared/svg";
export const Location = ({
  children,
  small,
}: {
  children: React.ReactNode;
  small?: boolean;
}) => {
  return (
    <Flex gap={4} align={"center"}>
      <LocationSVG width={small ? 9 : 12} height={small ? 11 : 15} />
      <Text fz={small ? 10 : 14} fw={400} color={colors.gray}>
        {children}
      </Text>
    </Flex>
  );
};
