import { PencilSVG } from "@/shared/svg/PencilSVG";
import { Box, Flex, Title } from "@mantine/core";
import React from "react";

export const Header = ({title}: {title: string}) => {
  return (
    <Box>
      <Flex gap={16} justify={'space-between'}>
        <Title order={2} style={{textTransform: 'uppercase'}} >
          {title}
        </Title>
        <PencilSVG style={{flex: '0 0 auto'}} width={20} height={20} />
      </Flex>
    </Box>
  );
};
