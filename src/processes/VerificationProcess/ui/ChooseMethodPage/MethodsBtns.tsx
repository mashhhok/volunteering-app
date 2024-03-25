import { colors } from "@/shared/enums";
import { TopRightArrowSVG } from "@/shared/svg";
import { BlurButton } from "@/shared/ui";
import { Box } from "@mantine/core";
import Link from "next/link";
import React from "react";

export const MethodsBtns = () => {
  return (
    <>
      <Link href="/verification/dia">
        <BlurButton
          size={"xl"}
          visibleFrom="sm"
          style={{ wordBreak: "break-all" }}
          color={colors.violet}
          rightSection={<TopRightArrowSVG />}
        >
          Authorizе with Дія.Підпис
        </BlurButton>
        <BlurButton
          size={"lg"}
          hiddenFrom="sm"
          style={{ wordBreak: "break-all" }}
          color={colors.violet}
          rightSection={<TopRightArrowSVG />}
        >
          Authorizе with Дія.Підпис
        </BlurButton>
      </Link>
      {/*  */}
      <Box h={16} />
      {/*  */}
      <Link href="/verification/file_key">
        <BlurButton
          size="xl"
          visibleFrom="sm"
          color={colors.violet}
          rightSection={<TopRightArrowSVG />}
          mb={40}
        >
          File key
        </BlurButton>
        <BlurButton
          size="lg"
          hiddenFrom="sm"
          color={colors.violet}
          rightSection={<TopRightArrowSVG />}
          mb={40}
        >
          File key
        </BlurButton>
      </Link>
    </>
  );
};
