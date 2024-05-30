"use client";
import { IDictionary } from "@/shared/config/i18n.config";
import { colors } from "@/shared/enums";
import { SuperTitle } from "@/shared/ui";
import {
  Box,
  Center,
  Container,
  ScrollArea,
  Text,
  Title,
} from "@mantine/core";
import React from "react";

export const Because = ({dict}: {dict: IDictionary}) => {
  return (
    <Container size="xl">
      <SuperTitle maw={670} style={{ color: colors.violet }} mb={35}>
        {dict.main_page.because_block.title}
      </SuperTitle>
      <SuperTitle order={2} mb={{ base: 60, md: 111 }}>
        {dict.main_page.because_block.subtitle}
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
            {dict.main_page.because_block.grid.web_platform.title}
            </SuperTitle>
            <Text fz={24} color={colors.white}>
            {dict.main_page.because_block.grid.web_platform.subtitle}
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
            {dict.main_page.because_block.grid.social_reach.title}
            </Title>
            <Text size="xl" color={colors.black}>
            {dict.main_page.because_block.grid.social_reach.subtitle}
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
            {dict.main_page.because_block.grid.emoji}
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
              {dict.main_page.because_block.grid.simple_setup.title}
              </Title>
              <Text color={colors.black}>
              {dict.main_page.because_block.grid.simple_setup.subtitle}
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
              {dict.main_page.because_block.grid.secure.title}
              </Title>
              <Text color={colors.black}>
              {dict.main_page.because_block.grid.secure.subtitle}
              </Text>
            </Box>
          </Center>
        </Box>
      </ScrollArea>
    </Container>
  );
};
