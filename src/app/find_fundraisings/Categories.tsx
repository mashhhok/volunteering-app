import { WaveBlock } from "@/shared/ui";
import { Box, Flex } from "@mantine/core";
import React from "react";

export const Categories = () => {
  return (
    <Box>
      {/* FIRST BLOCK */}
      <Flex gap={12} mb={12} direction={{ base: "column", md: "row" }}>
        <WaveBlock
          maw={600}
          flex="1 1 auto"
          title="Drones"
          subtitle="Raising money for our military «warbirds» "
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
            title="Military cars"
            subtitle="Raising money for cars for our defenders"
            wave={{
              width: { base: 240, md: 150 },
              height: { base: 240, md: 150 },
            }}
          />
          <WaveBlock
            maw={600}
            h={{ md: 170 }}
            title="Medical"
            subtitle="We are fundraisers for medicines and treatment"
            wave={{
              width: { base: 240, md: 150 },
              height: { base: 240, md: 150 },
            }}
          />
        </Box>
        <WaveBlock
          maw={600}
          flex="1 1 auto"
          title="Equipment"
          subtitle="Immediate help for those in need"
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
            title="Elderly"
            subtitle="Immediate help for those in need"
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
            title="Volunteering"
            subtitle="Immediate help for those in need"
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
            title="Children"
            mb={12}
            subtitle="Helping children affected by disease, war, displaced, etc."
            wave={{
              width: 240,
              height: 240,
            }}
          />
          <WaveBlock
            h={{ md: 278 }}
            maw={600}
            flex="1 1 auto"
            title="Animals"
            subtitle="HeWe fundraise to help those we care for"
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
            title="Military"
            mb={12}
            subtitle="Our military needs"
            wave={{
              width: { base: 240, md: 150 },
              height: { base: 240, md: 150 },
            }}
          />
          <WaveBlock
            h={{ md: 170 }}
            maw={600}
            flex="1 1 auto"
            title="Education"
            subtitle="We raise money for the education of those who’re in need"
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
