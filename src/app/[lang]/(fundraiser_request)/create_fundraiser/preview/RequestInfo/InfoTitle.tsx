import { PencilSVG } from "@/shared/svg/PencilSVG";
import { Flex, Title as Title } from "@mantine/core";
import React from "react";
import { Link } from "@/shared/ui/Link";
import { HiddenInput } from "@/shared/ui";
import { useCreateFundraiserStore } from "../../store";

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
