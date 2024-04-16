"use client";
import { colors } from "@/shared/enums";
import { SuperTitle } from "@/shared/ui";
import {
  Box,
  Center,
  Container,
  Flex,
  Grid,
  ScrollArea,
  Text,
  Title,
} from "@mantine/core";
import React from "react";

export const Because = () => {
  return (
    <Container size="xl">
      <SuperTitle maw={670} style={{ color: colors.violet }} mb={35}>
        Because Unitary Aid
      </SuperTitle>
      <SuperTitle order={2} mb={{ base: 60, md: 111 }}>
        has everything you need
      </SuperTitle>
      <ScrollArea>
        <Box
        miw={1200}
          bg={colors.black}
          p={64}
          style={{
            gridTemplateColumns: "repeat(9, 1fr)",
            gap: 32,
            gridTemplateRows: "repeat(2, 1fr)",
            borderRadius: 16,
          }}
          
          display={"grid"}
        >
          <Box
            style={{
              borderRadius: 16,
              gridRowStart: 1,
              gridRowEnd: 6,
              gridColumnStart: 1,
              gridColumnEnd: 4,
            }}
            py={108}
            px={60}
            bg={colors.violet}
            maw={420}
            color={colors.white}
            w={"100%"}
          >
            <SuperTitle mb={44} order={3} color={colors.white}>
              Web - platform
            </SuperTitle>
            <Text fz={24} color={colors.white}>
              The UnitaryAid makes it simple to launch and manage your
              fundraiser on the go.
            </Text>
          </Box>
          <Box
            style={{
              gridColumnStart: 4,
              gridColumnEnd: 8,
              gridRowStart: 1,
              gridRowEnd: 2,
              borderRadius: 16,
            }}
            py={36}
            px={56}
            bg={colors.white}
          >
            <Title order={2} mb={20} style={{ color: colors.black }}>
              Social reach
            </Title>
            <Text size="xl" color={colors.black}>
              Harness the power of social media to spread your story and get
              more support.
            </Text>
          </Box>
          <Center
            style={{
              gridColumnStart: 8,
              gridColumnEnd: 10,
              gridRowStart: 1,
              gridRowEnd: 2,
              borderRadius: 16,
            }}
            bg={colors.yellow}
            fz={100}
          >
            🦾
          </Center>
          <Center
            style={{
              gridColumnStart: 4,
              gridColumnEnd: 7,
              gridRowStart: 2,
              gridRowEnd: 6,
              borderRadius: 16,
            }}
            bg={colors.white}
            py={36}
            px={56}
          >
            <Box>
              <Title order={2} mb={20} style={{ color: colors.black }}>
                Simple setup
              </Title>
              <Text color={colors.black}>
                You can personalize and share your UnitaryAid fundraiser in just
                a few minutes.
              </Text>
            </Box>
          </Center>
          <Center
            style={{
              gridColumnStart: 7,
              gridColumnEnd: 10,
              gridRowStart: 2,
              gridRowEnd: 6,
              borderRadius: 16,
            }}
            py={36}
            px={56}
            bg={colors.white}
          >
            <Box>
              <Title order={2} mb={20} style={{ color: colors.black }}>
                Secure
              </Title>
              <Text color={colors.black}>
                Our UnitaryAid`s Trust & Safety team works around the clock to
                protect against fraud.
              </Text>
            </Box>
          </Center>
        </Box>
      </ScrollArea>
    </Container>
  );
};
