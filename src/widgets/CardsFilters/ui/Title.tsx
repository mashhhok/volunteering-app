import { Button, Flex, Title as TitleMant } from "@mantine/core";
import React from "react";

interface IRequestInfo {
  pending: number | '';
  waitReport: number | '';
  closed: number | '';
}

export const Title = ({ pending, waitReport, closed }: IRequestInfo) => {

  return (
    <Flex justify={"space-between"} wrap={"wrap"} gap={10}>
      <TitleMant order={2}>All Fundraisings</TitleMant>
      <Flex gap={5} wrap={"wrap"}>
        <Button size="xs" fz="md" color="violet">
          ⚠️ {pending} current fundraisings
        </Button>
        <Button size="xs" fz="md" color="yellow">
          ✅ {waitReport} waiting for the report
        </Button>
        <Button size="xs" fz="md" color="green">
          ⏳ {closed} closed
        </Button>
      </Flex>
    </Flex>
  );
};
