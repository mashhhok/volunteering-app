import { Title, Box } from "@mantine/core";
import React from "react";
import { Bordered } from "./Bordered";
import { IDictionary } from "@/shared/config/i18n.config";

export const HowWork = ({dict}: {dict: IDictionary}) => {
  return (
    <Bordered size="small">
      <Title order={3} mb={14} lh={1}>
        {dict.verification_process.choose_mehtod_page.how_work.title}
      </Title>
      <Box lh={1.2} fz="lg">
      {dict.verification_process.choose_mehtod_page.how_work.subtitle}
      </Box>
    </Bordered>
  );
};
