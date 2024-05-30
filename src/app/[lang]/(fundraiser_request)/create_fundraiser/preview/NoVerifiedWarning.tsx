import { colors } from "@/shared/enums";
import { Box, Text } from "@mantine/core";
import { Link } from "@/shared/ui/Link";
import React from "react";

export const NoVerifiedWarning = ({ visible }: { visible?: boolean }) => {
  return (
    <Box
      bg={colors.lightRed}
      p={18.5}
      w={"100%"}
      style={{ display: visible ? "block" : "none" }}
    >
      <Text color={colors.red} size="xs" style={{ textAlign: "center" }}>
        To create a fundraiser and accept donations, you need to be verified.
        You can do this{" "}
        <Link
          href={"/verification"}
          style={{ textDecoration: "underline", fontWeight: 500 }}
        >
          here
        </Link>
      </Text>
    </Box>
  );
};
