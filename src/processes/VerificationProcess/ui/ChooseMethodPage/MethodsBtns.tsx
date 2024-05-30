import { verifiyAction } from "@/app/api/verification/verifiyAction";
import { IDictionary } from "@/shared/config/i18n.config";
import { colors } from "@/shared/enums";
import { TopRightArrowSVG } from "@/shared/svg";
import { BlurButton, HiddenInput } from "@/shared/ui";
import { Box } from "@mantine/core";
import { Link } from "@/shared/ui/Link";
import React from "react";

export const MethodsBtns = ({dict}: {dict: IDictionary}) => {
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
          {dict.verification_process.choose_mehtod_page.mothod_btns.dia}
        </BlurButton>
        <HiddenInput name="verificationBy" value="dia" />

        <BlurButton
          size={"lg"}
          hiddenFrom="sm"
          style={{ wordBreak: "break-all" }}
          color={colors.violet}
          rightSection={<TopRightArrowSVG />}
        >
          {dict.verification_process.choose_mehtod_page.mothod_btns.dia}
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
          {dict.verification_process.choose_mehtod_page.mothod_btns.file_key}
        </BlurButton>
        <BlurButton
          size="lg"
          hiddenFrom="sm"
          color={colors.violet}
          rightSection={<TopRightArrowSVG />}
          mb={40}
        >
          {dict.verification_process.choose_mehtod_page.mothod_btns.file_key}
        </BlurButton>
        <HiddenInput name="verificationBy" value="fileKey" />
      </form>
    </>
  );
};
