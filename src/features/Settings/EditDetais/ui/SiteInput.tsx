import { TextField } from "@/shared/ui";
import { Box } from "@mantine/core";
import React from "react";

export const SiteInput = () => {
  return (
    <Box >
      <TextField w='100%' title="Site" placeholder="User`s site link" />
    </Box>
  );
};
