import { Chip, Table, Warning } from "@/shared/ui";
import { CardsFilters } from "@/widgets/CardsFilters";
import { RequestCards } from "@/widgets/RequestCards";
import { Box, Container } from "@mantine/core";
import { Suspense } from "react";

const HomePage = async () => {
  return (
    <div>
      <Box h={10} />
      <RequestCards />
      <Box h={100} />
      <Suspense>
        <CardsFilters />
      </Suspense>
      <Box h={100} />
      <Warning
        title="THE SPREADSHEET DATA SERVES AN INFORMATIVE PURPOSE"
        subtitle="We'd like to draw your attention to the fact that access to public information, as well as information regarding the intended use of charitable funds, is governed by the current Ukrainian legislation."
      />
      <Box h={100} />
      <Table
        elements={[
          [
            "Date, time",
            "Source",
            "Name of fundraising",
            "Amount, uAH",
            "Currency",
            "Comment",
          ],
          [
            "17.01.2024, 22:22",
            "Universal",
            "Upgrade of the Air Defenсe fire teams’ capabilities",
            "650",
            "UAH",
            "Кред.заб. за прийн.плат. 4256914 Повернись живим, БФ 39696398 (Монобанк) -- Благодійний платіж на Фонд Повернись живим за 2024-01-01 згiдно реєстру",
          ],
          [
            "17.01.2024, 22:22",
            "Solidgate Card",
            "Cooperation Without Borders",
            "3 831,49",
            "UAH",
            "null *** (100 USD)",
          ],
        ]}
      />
      <Container>
        <Chip>10%</Chip>
        <Chip selected>10%</Chip>
      </Container>
    </div>
  );
};

export default HomePage;
