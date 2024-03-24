import { Box, Card, Flex, Text, Title } from "@mantine/core";
import React from "react";
import { colors } from "../enums";
import { InfoSVG } from "../svg";

export const Info = ({
  title,
  subtitle,
}: {
  title: React.ReactNode;
  subtitle: React.ReactNode;
}) => {
  return (
    <Card p={0} radius={"lg"} style={{ border: `2px solid ${colors.blue}` }}>
      <Flex>
        <Flex align={'center'} p={20} bg={colors.blue}>
          <InfoSVG />
        </Flex>
        <Box p={20}>
          <Title lh={1} fz={"18px"} mb={14} style={{ color: colors.blue }}>
            {title}
          </Title>
          <Text lh={1}  size="sm" color={colors.blue}>
            {subtitle}
          </Text>
        </Box>
      </Flex>
    </Card>
  );
};
