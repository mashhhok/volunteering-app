import { colors } from "@/shared/enums";
import { Box, Center, Title } from "@mantine/core";
import React from "react";

export const Collected = () => {
  return (
    <Box
      p={16}
      style={{
        border: `2px solid rgba(255, 255, 255, 0.2)`,
        borderRadius: "50%",
      }}
    >
      <Center
        style={{
          borderRadius: "50%",
          background: `linear-gradient( rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0) )`,
          border: `1px solid rgba(255, 255, 255, 0.2)`,
        }}
        w={{base: 220, md: 280}}
        h={{base: 220, md: 280}}
      >
        <Box>
          <Title
            mb={16}
            order={6}
            style={{
              textTransform: "uppercase",
              color: colors.neutral,
              textAlign: "center",
            }}
          >
            already collected
          </Title>
          <Title
            order={3}
            style={{
              textTransform: "uppercase",
              color: colors.neutral,
              textAlign: "center",
            }}
          >
            0 UAH
          </Title>
        </Box>
      </Center>
    </Box>
  );
};
