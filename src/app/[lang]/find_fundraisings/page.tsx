import { Box, Container } from "@mantine/core";
import { Search } from "./Search";
import { Categories } from "./Categories";
import { CardsFilters } from "@/widgets/CardsFilters";
import { Locale } from "@/shared/config/i18n.config";
import { getDictionary } from "@/shared/lib/utils/getDictionary";

interface IFindFundraisingsPage {
  params: {
    lang: Locale;
  };
}

const FindFundraisingsPage = async ({ params }: IFindFundraisingsPage) => {
  const dict = await getDictionary(params.lang);

  return (
    <Container mt={40} size="xl">
      <Search dict={dict} />
      <Box h={40} />
      <Categories dict={dict} />
      <Box h={{ base: 40, md: 100 }} />
      <CardsFilters dict={dict} />
    </Container>
  );
};

export default FindFundraisingsPage;
