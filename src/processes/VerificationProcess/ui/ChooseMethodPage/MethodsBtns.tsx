import { verifiyAction } from "@/app/api/verification/verifiyAction";
import { colors } from "@/shared/enums";
import { TopRightArrowSVG } from "@/shared/svg";
import { BlurButton, HiddenInput } from "@/shared/ui";
import { Box } from "@mantine/core";
import Link from "next/link";
import React from "react";

export const MethodsBtns = () => {
  return (
    <>
      <form action={verifiyAction}>
        <BlurButton
          size={"xl"}
          visibleFrom="sm"
          style={{ wordBreak: "break-all" }}
          color={colors.violet}
          rightSection={<TopRightArrowSVG />}
        >
          Authorizе with Дія.Підпис
        </BlurButton>
        <HiddenInput name="verificationBy" value="dia" />

        <BlurButton
          size={"lg"}
          hiddenFrom="sm"
          style={{ wordBreak: "break-all" }}
          color={colors.violet}
          rightSection={<TopRightArrowSVG />}
        >
          Authorizе with Дія.Підпис
        </BlurButton>
      </form>
      {/*  */}
      <Box h={16} />
      {/*  */}
      <form action={verifiyAction}>
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
        <HiddenInput name="verificationBy" value="fileKey" />
      </form>
    </>
  );
};
