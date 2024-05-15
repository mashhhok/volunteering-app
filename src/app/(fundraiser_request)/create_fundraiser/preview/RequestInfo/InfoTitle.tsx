import { PencilSVG } from "@/shared/svg/PencilSVG";
import { Flex, Title as Title } from "@mantine/core";
import React from "react";
import { useCreateFundraiserStore } from "../../store";
import Link from "next/link";
import { HiddenInput } from "@/shared/ui";

export const InfoTitle = () => {
  const name = useCreateFundraiserStore((store) => store.name);
  return (
    <Flex gap={16} align={"start"}>
      <Title order={2}>{name}</Title>
      <HiddenInput name="title" value={name} />
      <Link href="/create_fundraiser/names">
        <PencilSVG style={{ flex: "0 0 auto" }} width={20} height={20} />
      </Link>
    </Flex>
  );
};
