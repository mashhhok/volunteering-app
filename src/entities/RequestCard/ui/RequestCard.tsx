import { routes } from "@/shared/config/routes";
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
import { RequestInfo } from "./RequestInfo";
import { RequestTitle } from "./RequestTitle";
import { LookBtn } from "./LookBtn";

export const RequestCard: React.FC<any> = ({
  companyName,
  date,
  requestTitle,
  avatarUrl,
  id,
}) => {
  return (
    <Card shadow="sm" withBorder radius="md" style={{ borderWidth: "2px" }}>
      <Flex gap={10} align={"center"} direction={{ md: "row", base: "column" }}>
        <RequestInfo
          companyName={companyName}
          date={date}
          avatarUrl={avatarUrl}
        />
        <Divider orientation="vertical" visibleFrom="md" size={3} />

        <RequestTitle title={requestTitle} />

        <LookBtn requestId={id} />
      </Flex>
    </Card>
  );
};
