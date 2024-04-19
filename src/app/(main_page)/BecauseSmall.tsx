import { colors } from "@/shared/enums";

import { Box, Container, Flex, Text, Title } from "@mantine/core";
import { SuperTitle } from "@/shared/ui";
import React from "react";

export const BecauseSmall = () => {
  return (
    <Container size='xl' >
      <Flex
        direction={"column"}
        gap={20}
        bg={colors.black}
        style={{ borderRadius: 16 }}
        p={24}
      >
        <Box
          style={{
            borderRadius: 16,
          }}
          p={32}
          bg={colors.violet}
          color={colors.white}
          w={"100%"}
        >
          <Title mb={16} order={3} style={{ color: colors.white }}>
            Web - platform
          </Title>
          <Text size="lg" color={colors.white}>
            The UnitaryAid makes it simple to launch and manage your fundraiser
            on the go.
          </Text>
        </Box>
        <Box
          style={{
            borderRadius: 16,
          }}
          p={32}
          w={"100%"}
          bg={colors.white}
        >
          <Title mb={16} order={3}>
            Social reach
          </Title>
          <Text size="lg">
            Harness the power of social media to spread your story and get more
            support.
          </Text>
        </Box>
        <Box
          style={{
            borderRadius: 16,
          }}
          p={32}
          w={"100%"}
          bg={colors.white}
        >
          <Title mb={16} order={3}>
            Simple setup
          </Title>
          <Text size="lg">
            You can personalize and share your UnitaryAid fundraiser in just
            a few minutes.
          </Text>
        </Box>
        <Box
          style={{
            borderRadius: 16,
          }}
          p={32}
          w={"100%"}
          bg={colors.white}
        >
          <Title mb={16} order={3}>
            Secure
          </Title>
          <Text size="lg">
            Our UnitaryAid`s Trust & Safety team works around the clock to
            protect against fraud.
          </Text>
        </Box>
        <Box
          style={{
            borderRadius: 16,
            textAlign: "center",
          }}
          p={32}
          w={"100%"}
          bg={colors.yellow}
        >
          <Text fz={100}>🦾</Text>
        </Box>
      </Flex>
    </Container>
  );
};
