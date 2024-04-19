import { colors } from "@/shared/enums";
import { TopRightArrowSVG } from "@/shared/svg";
import { BlurButton, SuperTitle } from "@/shared/ui";
import { Box, Container, Flex } from "@mantine/core";
import React from "react";

export const SignOffer = () => {
  return (
    <Container size="xl">
      <Flex justify={"space-between"} align={'flex-end'}>
        <Box maw={860}>
          <SuperTitle mb={40} color={colors.violet}>
            Ready to start fundraising?
          </SuperTitle>
          <SuperTitle order={2}>
            Sign in to our platform and raise money for charity
          </SuperTitle>
        </Box>
        <BlurButton
          size="xl"
          rightSection={<TopRightArrowSVG fill={colors.white} />}
          color={colors.violet}
        >
          Sign in
        </BlurButton>
      </Flex>
    </Container>
  );
};
