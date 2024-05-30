import { IDictionary } from "@/shared/config/i18n.config";
import { colors } from "@/shared/enums";
import { TopRightArrowSVG } from "@/shared/svg";
import { BlurButton, SuperTitle } from "@/shared/ui";
import { Box, Container, Flex } from "@mantine/core";
import { Link } from "@/shared/ui/Link";

export const SignOffer = ({ dict }: { dict: IDictionary }) => {
  return (
    <Container size="xl">
      <Flex justify={"space-between"} align={"flex-end"} gap={20} wrap={"wrap"}>
        <Box maw={860}>
          <SuperTitle mb={40} color={colors.violet}>
            {dict.main_page.sign_offer.title}
          </SuperTitle>
          <SuperTitle order={2}>
            {dict.main_page.sign_offer.subtitle}
          </SuperTitle>
        </Box>
        <Link href="/auth">
          <BlurButton
            size="xl"
            rightSection={<TopRightArrowSVG fill={colors.white} />}
            color={colors.violet}
          >
            {dict.main_page.sign_offer.sign_btn}
          </BlurButton>
        </Link>
      </Flex>
    </Container>
  );
};
