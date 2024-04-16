import { PencilSVG } from "@/shared/svg/PencilSVG";
import { Box, Flex, Title } from "@mantine/core";
import React from "react";

export const Header = () => {
  return (
    <Box>
      <Flex gap={16} justify={'space-between'}>
        <Title order={2}>
          INFANTRY COMPANY COMMANDER ON HIS APOLITICAL ATTITUDE, PTSD AND
          GROUNDHOG DAY
        </Title>
        <PencilSVG style={{flex: '0 0 auto'}} width={20} height={20} />
      </Flex>
    </Box>
  );
};
