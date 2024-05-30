import { IDictionary } from "@/shared/config/i18n.config";
import { WaveBlock } from "@/shared/ui";
import { Box, Flex } from "@mantine/core";
import React from "react";

export const Categories = ({dict}: {dict: IDictionary}) => {
  return (
    <Box>
      {/* FIRST BLOCK */}
      <Flex gap={12} mb={12} direction={{ base: "column", md: "row" }}>
        <WaveBlock
          maw={600}
          flex="1 1 auto"
          title={dict.find_fundraising_page.categories.drones.title}
          subtitle={dict.find_fundraising_page.categories.drones.subtitle}
          emoji={{
            text: "🦅",
            fz: 100,
          }}
          wave={{
            width: 240,
            height: 240,
          }}
        />
        <Box w={{ md: 305 }}>
          <WaveBlock
            maw={600}
            h={{ md: 270 }}
            mb={12}
            title={dict.find_fundraising_page.categories.military_cards.title}
            subtitle={dict.find_fundraising_page.categories.military_cards.subtitle}
            wave={{
              width: { base: 240, md: 150 },
              height: { base: 240, md: 150 },
            }}
          />
          <WaveBlock
            maw={600}
            h={{ md: 170 }}
            title={dict.find_fundraising_page.categories.medical.title}
            subtitle={dict.find_fundraising_page.categories.medical.subtitle}
            wave={{
              width: { base: 240, md: 150 },
              height: { base: 240, md: 150 },
            }}
          />
        </Box>
        <WaveBlock
          maw={600}
          flex="1 1 auto"
          title={dict.find_fundraising_page.categories.equipment.title}
          subtitle={dict.find_fundraising_page.categories.equipment.subtitle}
          wave={{
            width: 240,
            height: 240,
          }}
          emoji={{
            text: "🪖",
            fz: 100,
          }}
        />
      </Flex>
      {/* SECOND BLOCK */}
      <Flex
        justify={{ md: "space-between" }}
        gap={12}
        direction={{ base: "column", md: "row" }}
      >
        <Box w={{ md: 400 }}>
          <WaveBlock
            h={{ md: 220 }}
            maw={600}
            flex="1 1 auto"
            title={dict.find_fundraising_page.categories.eldery.title}
            subtitle={dict.find_fundraising_page.categories.eldery.subtitle}
            wave={{
              width: { base: 240, md: 150 },
              height: { base: 240, md: 150 },
            }}
            mb={12}
          />
          <WaveBlock
            h={{ md: 220 }}
            maw={600}
            flex="1 1 auto"
            title={dict.find_fundraising_page.categories.volunteering.title}
            subtitle={dict.find_fundraising_page.categories.volunteering.subtitle}
            wave={{
              width: { base: 240, md: 150 },
              height: { base: 240, md: 150 },
            }}
          />
        </Box>
        <Box w={{ md: 552 }}>
          <WaveBlock
            h={{ md: 160 }}
            maw={600}
            flex="1 1 auto"
            title={dict.find_fundraising_page.categories.children.title}
            mb={12}
            subtitle={dict.find_fundraising_page.categories.children.subtitle}
            wave={{
              width: 240,
              height: 240,
            }}
          />
          <WaveBlock
            h={{ md: 278 }}
            maw={600}
            flex="1 1 auto"
            title={dict.find_fundraising_page.categories.animals.title}
            subtitle={dict.find_fundraising_page.categories.animals.subtitle}
            emoji={{
              text: "🦮",
              fz: 100,
            }}
            wave={{
              width: 240,
              height: 240,
            }}
          />
        </Box>
        <Box w={{ md: 304 }}>
          <WaveBlock
            h={{ md: 268 }}
            maw={600}
            flex="1 1 auto"
            title={dict.find_fundraising_page.categories.military.title}
            mb={12}
            subtitle={dict.find_fundraising_page.categories.military.subtitle}
            wave={{
              width: { base: 240, md: 150 },
              height: { base: 240, md: 150 },
            }}
          />
          <WaveBlock
            h={{ md: 170 }}
            maw={600}
            flex="1 1 auto"
            title={dict.find_fundraising_page.categories.education.title}
            subtitle={dict.find_fundraising_page.categories.education.subtitle}
            wave={{
              width: { base: 240, md: 150 },
              height: { base: 240, md: 150 },
            }}
          />
        </Box>
      </Flex>
    </Box>
  );
};
