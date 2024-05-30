import { IDictionary } from "@/shared/config/i18n.config";
import { colors } from "@/shared/enums";
import { GoogleSVG } from "@/shared/svg";
import { Box, Button } from "@mantine/core";
import { Link } from "@/shared/ui/Link";
import React from "react";

export const ContinueWithBtns = ({
  isContinueDisabled,
  googleHref,
  dict
}: {
  isContinueDisabled: boolean;
  googleHref: string;
  dict: IDictionary
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
          {dict.auth_process.begin_page.continue_btns.continue_with_email}
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
          {dict.auth_process.begin_page.continue_btns.continue_with_email}
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
          {dict.auth_process.begin_page.continue_btns.continue_with_google}
        </Button>
      </Link>
    </Box>
  );
};
