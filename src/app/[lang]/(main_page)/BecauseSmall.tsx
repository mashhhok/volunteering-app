import { IDictionary } from "@/shared/config/i18n.config";
import { colors } from "@/shared/enums";
import { Box, Container, Flex, Text, Title } from "@mantine/core";

export const BecauseSmall = ({ dict }: { dict: IDictionary }) => {
  return (
    <Container size="xl">
      <Flex
        direction={"column"}
        gap={20}
        bg={colors.black}
        style={{ borderRadius: 16 }}
        p={24}
      >
        <Box
          style={{
            borderRadius: 16,
          }}
          p={32}
          bg={colors.violet}
          color={colors.white}
          w={"100%"}
        >
          <Title mb={16} order={3} style={{ color: colors.white }}>
            {dict.main_page.because_block.grid.web_platform.title}
          </Title>
          <Text size="lg" color={colors.white}>
            {dict.main_page.because_block.grid.web_platform.subtitle}
          </Text>
        </Box>
        <Box
          style={{
            borderRadius: 16,
          }}
          p={32}
          w={"100%"}
          bg={colors.white}
        >
          <Title mb={16} order={3} style={{ color: colors.black }}>
            {dict.main_page.because_block.grid.social_reach.title}
          </Title>
          <Text color={colors.black} size="lg">
            {dict.main_page.because_block.grid.social_reach.subtitle}
          </Text>
        </Box>
        <Box
          style={{
            borderRadius: 16,
          }}
          p={32}
          w={"100%"}
          bg={colors.white}
        >
          <Title mb={16} order={3} style={{ color: colors.black }}>
            {dict.main_page.because_block.grid.simple_setup.title}
          </Title>
          <Text color={colors.black} size="lg">
            {dict.main_page.because_block.grid.simple_setup.subtitle}
          </Text>
        </Box>
        <Box
          style={{
            borderRadius: 16,
          }}
          p={32}
          w={"100%"}
          bg={colors.white}
        >
          <Title mb={16} order={3} style={{ color: colors.black }}>
            {dict.main_page.because_block.grid.secure.title}
          </Title>
          <Text color={colors.black} size="lg">
            {dict.main_page.because_block.grid.secure.subtitle}
          </Text>
        </Box>
        <Box
          style={{
            borderRadius: 16,
            textAlign: "center",
          }}
          p={32}
          w={"100%"}
          bg={colors.yellow}
        >
          <Text fz={100}>{dict.main_page.because_block.grid.emoji}</Text>
        </Box>
      </Flex>
    </Container>
  );
};
