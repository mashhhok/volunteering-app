import { Box, Button, Text } from "@mantine/core";
import React from "react";
import top_right_arrow from "@/public/arrow_top_right.svg";
import Image from "next/image";
import { ShadowBtn } from "@/shared/ui";
import { TopRightArrowSVG } from "@/shared/svg";
import { IDictionary } from "@/shared/config/i18n.config";
export const RightSection = ({ dict }: { dict: IDictionary }) => {
  return (
    <Box>
      <Text size="xl" mb={16}>
        {dict.widgets.footer.right_section.title}
      </Text>
      <ShadowBtn rightSection={<TopRightArrowSVG />} size="xl">
        {dict.widgets.footer.right_section.find_fund_btn}
      </ShadowBtn>
    </Box>
  );
};
