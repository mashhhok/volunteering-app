import { routes } from "@/shared/config/routes";
import { Anchor, Box, Button, Title } from "@mantine/core";
import Link from "next/link";
import React from "react";

export const Logo = () => {
  return (
    <Anchor href={routes.main} component={Link}>
      <Title order={3} style={{ cursor: "pointer" }}>
        Logo
      </Title>
    </Anchor>
  );
};
