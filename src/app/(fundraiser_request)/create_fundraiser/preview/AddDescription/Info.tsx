import { colors } from "@/shared/enums";
import { InfoSVG } from "@/shared/svg";
import { Flex, Text } from "@mantine/core";
import React from "react";

export const Info = () => {
  return (
    <Flex direction={"column"} gap={20}>
      <Flex gap={8} align={"center"}>
        <InfoSVG width={18} height={18} fill={colors.blue} style={{flexShrink: '0'}} />
        <Text color={colors.blue} size="xs">
          Add a description to your fundraiser in only one language. This way,
          machine translation of the description will work best for donors.
        </Text>
      </Flex>

      <Flex gap={8} align={"center"}>
        <InfoSVG width={18} height={18} fill={colors.red} style={{flexShrink: '0'}} />
        <Text color={colors.red} size="xs">
          Donations cannot be made to the fundraiser because it has a blank
          description. <br />
          To accept donations: Please fill in the description.
        </Text>
      </Flex>
    </Flex>
  );
};
