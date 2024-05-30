import { Box } from "@mantine/core";
import { MainBlock } from "./MainBlock";
import { CardsFilters } from "@/widgets/CardsFilters";
import { Because } from "./Because";
import { Numbers } from "./Numbers";
import { WorkingSteps } from "./WorkingSteps";
import { SignOffer } from "./SignOffer";
import { BecauseSmall } from "./BecauseSmall";
import { getSession } from "@/shared/auth";
import { Locale } from "@/shared/config/i18n.config";
import { getDictionary } from "@/shared/lib/utils/getDictionary";

const HomePage = async ({ params: { lang } }: { params: { lang: Locale } }) => {
  const session = await getSession();
  const dict = await getDictionary(lang);

  return (
    <Box>
      <MainBlock dict={dict} isVerified={Boolean(session)} />
      <Box h={{ base: 40, md: 100 }} />
      <CardsFilters dict={dict} />
      <Box h={{ base: 40, md: 100 }} />
      <Box visibleFrom="md">
        <Because dict={dict} />
      </Box>
      <Box hiddenFrom="md">
        <BecauseSmall dict={dict} />
      </Box>
      <Box h={{ base: 40, md: 100 }} />
      <Numbers dict={dict} />
      <Box h={{ base: 40, md: 100 }} />
      <WorkingSteps dict={dict} />
      <Box h={{ base: 40, md: 100 }} />
      <SignOffer dict={dict} />
    </Box>
  );
};

export default HomePage;
