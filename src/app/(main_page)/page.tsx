import { Box } from "@mantine/core";
import { MainBlock } from "./MainBlock";
import { CardsFilters } from "@/widgets/CardsFilters";
import { Because } from "./Because";
import { Numbers } from "./Numbers";
import { WorkingSteps } from "./WorkingSteps";
import { SignOffer } from "./SignOffer";
import { BecauseSmall } from "./BecauseSmall";

const HomePage = async () => {
  return (
    <Box>
      <MainBlock />
      <Box h={{ base: 40, md: 100 }} />
      <CardsFilters />
      {/* <Footer/> */}
      <Box h={{ base: 40, md: 100 }} />
      <Box visibleFrom="md">
        <Because />
      </Box>
      <Box hiddenFrom="md">
        <BecauseSmall />
      </Box>
      <Box h={{ base: 40, md: 100 }} />
      <Numbers />
      <Box h={{ base: 40, md: 100 }} />
      <WorkingSteps />
      <Box h={{ base: 40, md: 100 }} />
      <SignOffer />
    </Box>
  );
};

export default HomePage;
