import { routes } from "@/app/routes";
import {
  Avatar,
  Box,
  Button,
  Card,
  Divider,
  Flex,
  Text,
  Title,
} from "@mantine/core";
import Link from "next/link";
import React from "react";

export const RequestCard: React.FC<IRequest> = ({
  companyName,
  date,
  requestTitle,
  imageUrl,
  id,
}) => {
  return (
    <Card shadow="sm" withBorder radius="md" style={{ borderWidth: "2px" }}>
      <Flex gap={10} align={"center"} direction={{ md: "row", base: "column" }}>
        <Avatar src={imageUrl} size={"lg"} />
        <Flex
          direction={"column"}
          gap={2}
          style={{ whiteSpace: "nowrap" }}
          align={"center"}
        >
          <Title order={4}>{companyName}</Title>
          <Text fw={500} fz="md">
            {date}
          </Text>
        </Flex>
        <Divider orientation="vertical" visibleFrom="md" size={3} />

        <Box flex="1 1 auto">
          <Title order={4}>{requestTitle}</Title>
        </Box>

        <Button
          variant="gradient"
          component={Link}
          href={routes.request + "/" + id}
          radius={"md"}
          size="lg"
          style={{ flexShrink: "0", color: 'white' }}
          visibleFrom="md"
        >
          Look
        </Button>
        <Button
          variant="gradient"
          radius={"md"}
          component={Link}
          href={routes.request + "/" + id}
          size="lg"
          style={{ flexShrink: "0", color: 'white' }}
          hiddenFrom="md"
          fullWidth
        >
          Look
        </Button>
      </Flex>
    </Card>
  );
};
