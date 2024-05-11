import { colors } from "@/shared/enums";
import { Box, Card, Flex, Text, Title } from "@mantine/core";
import React from "react";
import { CompanyInfo } from "../CompanyInfo";

export const EmptyCard = () => {
  return (
    <Card
      bg={"transparent"}
      radius={"lg"}
      style={{ border: "2px solid" }}
      p={25}
      maw={440}
      w={"100%"}
      h={555}
    >
      <Card
        radius={"lg"}
        bg={"transparent"}
        h={212}
        w={"100%"}
        mb={16}
        style={{ border: `1px solid ${colors.lightGray}` }}
      />
      <Title order={3} mb={18}>
        no fundraisings yet
      </Title>
      <CompanyInfo
        companyName={"User"}
        verifiedAndTrusted={false}
      />
      <Box flex="1 1 auto" />
      <Text mb={20} size="sm" color={colors.gray}>
        The user has not yet created any fundraisers.
      </Text>
    </Card>
  );
};
