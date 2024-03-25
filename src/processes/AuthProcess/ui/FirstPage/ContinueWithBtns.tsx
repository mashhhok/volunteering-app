import { colors } from "@/shared/enums";
import { GoogleSVG } from "@/shared/svg";
import { Box, Button } from "@mantine/core";
import Link from "next/link";
import React from "react";

export const ContinueWithBtns = ({
  isContinueDisabled,
  googleHref,
}: {
  isContinueDisabled: boolean;
  googleHref: string;
}) => {
  return (
    <Box>
      {!isContinueDisabled ? (
        <Button
          fz="18px"
          color={colors.violet}
          mb={12}
          py={19.5}
          fullWidth
          h="auto"
          variant="filled"
          type="submit"
        >
          Continue with email
        </Button>
      ) : (
        <Button
          fz="18px"
          color={colors.lightViolet}
          mb={12}
          py={19.5}
          h="auto"
          variant="filled"
          fullWidth
        >
          Continue with email
        </Button>
      )}
      <Link href={googleHref}>
        <Button
          leftSection={<GoogleSVG />}
          py={14}
          h="auto"
          variant="outline"
          color="dark"
          fullWidth
        >
          Continue with Google
        </Button>
      </Link>
    </Box>
  );
};
