import { Title, Box } from "@mantine/core";
import React from "react";
import { Bordered } from "./Bordered";

export const HowWork = () => {
  return (
    <Bordered size="small">
      <Title order={3} mb={14} lh={1}>
        How is it work?
      </Title>
      <Box lh={1.2} fz="lg">
        You need to confirm your identity for authorization. You can do this in
        several ways: using the ID.GOV.UA system, the Diya application or a
        personal key. Choose the authorization method convenient for you and
        follow the instructions.
      </Box>
    </Bordered>
  );
};
