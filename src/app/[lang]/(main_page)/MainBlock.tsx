"use client";
import { IDictionary } from "@/shared/config/i18n.config";
import { colors } from "@/shared/enums";
import { TopRightArrowSVG } from "@/shared/svg";
import { BlurButton, ShadowBtn, SuperTitle } from "@/shared/ui";
import { Box, Container, Flex, Text, Title } from "@mantine/core";
import Spline from "@splinetool/react-spline";

export const MainBlock = ({
  isVerified,
  dict,
}: {
  isVerified: boolean;
  dict: IDictionary;
}) => {
  const scrollText = dict.main_page.home_block.scrolling.toString();
  return (
    <Container size="xl" mt={85}>
      <Flex
        gap={{ base: 20, md: 44 }}
        direction={{ base: "column", lg: "row" }}
      >
        <Flex direction={"column"}>
          <SuperTitle mb={30}>{dict.logo_text}</SuperTitle>
          <Text maw={300} size="md">
            {dict.main_page.home_block.subtitle}
          </Text>
          <Box flex="1 1 auto" mih={30} />
          <Flex gap={20} mb={28} wrap={"wrap"}>
            <BlurButton
              color={colors.violet}
              size="xl"
              rightSection={<TopRightArrowSVG fill={colors.white} />}
            >
              {dict.main_page.home_block.find_fund_btn}
            </BlurButton>
            {!isVerified && <ShadowBtn size="xl">Sign in</ShadowBtn>}
          </Flex>
          <Box
            style={{
              border: "1px solid",
              borderRight: "none",
              borderLeft: "none",
              whiteSpace: "nowrap",
              overflow: "hidden",
            }}
            py={11}
            px={8}
            maw={640}
          >
            <Box
              style={{
                transform: "translate3d(0, 0, 0)",
                animation: "RepeatText 45s linear infinite",
              }}
            >
              {scrollText.repeat(18)}
            </Box>
          </Box>
        </Flex>
        <Flex
          bg={colors.fullBlack}
          maw={600}
          w={"100%"}
          h={440}
          style={{ borderRadius: "16px" }}
          p={{ base: 20, md: 40, lg: 70 }}
        >
          <Box
            w={"100%"}
            maw={500}
            h={"100%"}
            flex={{ base: "0 1 80%", sm: "0 1 70%" }}
          >
            <Spline scene="https://prod.spline.design/d8W8sXdNUgjlSO1h/scene.splinecode" />
          </Box>

          <Flex
            direction={"column"}
            // pos="absolute"
            flex="1 1 30%"
            ml={{ base: -100, lg: -20 }}
          >
            <Text size="xs" flex={"1 1 auto"} color={colors.white}>
              Only together we collect funds, helping people
            </Text>
            <Text size="xs" color={colors.white}>
              and saving lives.
            </Text>
          </Flex>
        </Flex>
      </Flex>
    </Container>
  );
};
