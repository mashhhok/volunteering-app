import { Box, Title } from "@mantine/core";
import React from "react";

interface IRequestTitle {
  title: string;
}

export const RequestTitle = ({ title }: IRequestTitle) => {
  return (
    <Box flex="1 1 auto">
      <Title order={4}>{title}</Title>
    </Box>
  );
};
