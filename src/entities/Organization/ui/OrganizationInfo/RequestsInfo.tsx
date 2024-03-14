import { Button, Flex } from "@mantine/core";
import React from "react";
import warning_icon from "@/public/warning.png";
import Image from "next/image";

interface IRequestInfo {
  pending: number;
  waitReport: number;
  closed: number;
}

export const RequestsInfo = ({
  pending,
  waitReport,
  closed,
}: IRequestInfo) => {
  const WarnImage = (
    <Image
      src={warning_icon}
      width={undefined}
      height={undefined}
      alt="logo"
    />
  );

  return (
    <Flex justify={"space-between"} gap={5} wrap={'wrap'}>
      <Button size="xs" fz='md' leftSection={WarnImage} color="violet">
        {pending} current fundraisings
      </Button>
      <Button size="xs" fz='md' color="yellow">{waitReport} waiting for the report</Button>
      <Button size="xs" fz='md' color="green">{closed} closed</Button>
    </Flex>
  );
};
