"use client";
import { Box, Container, Flex, Text } from "@mantine/core";
import { Title } from "./Title";
import { FilterOptions } from "./FilterOptions";
import { CardsList } from "./CardsList";
import { Footer } from "./Footer";
import { colors } from "@/shared/enums";
import { CardsFiltersProps } from "../types";
import React from "react";
import { useSearchParams } from "next/navigation";
import { useCardsFiltersStore } from "../store";
import { useDebounce } from "@/shared/lib/hooks";

export const  CardsFiltersInner = (props: CardsFiltersProps) => {
  const searchParams = useSearchParams();
  const ref = React.useRef<HTMLDivElement>(null);
  const [cards, setCards] = React.useState([]);
  const { setTotalPages } = useCardsFiltersStore();
  const debounce = useDebounce();

  async function Filter() {
    const emergency = Boolean(searchParams.get("emergency"));
    const militarCars = Boolean(searchParams.get("militarCars"));
    const equipment = Boolean(searchParams.get("equipment"));
    const military = Boolean(searchParams.get("military"));
    const drones = Boolean(searchParams.get("drones"));
    const medical = Boolean(searchParams.get("medical"));
    const education = Boolean(searchParams.get("education"));
    const animals = Boolean(searchParams.get("animals"));
    const children = Boolean(searchParams.get("children"));
    const elderly = Boolean(searchParams.get("elderly"));
    const volunteering = Boolean(searchParams.get("volunteering"));
    const _location = searchParams.get("location");
    const status = searchParams.get("status");
    const page = searchParams.get("page");

    const companyId = props.companyId ? props.companyId : "";
    const res = await fetch(
      `/api/requests?userId=${companyId ? companyId : ""}&emergency=${emergency ? emergency : ""}&militarCars=${militarCars ? militarCars : ""}&equipment=${equipment ? equipment : ""}&military=${military ? military : ""}&drones=${drones ? drones : ""}&medical=${medical ? medical : ""}&education=${education ? education : ""}&animals=${animals ? animals : ""}&children=${children ? children : ""}&elderly=${elderly ? elderly : ""}&volunteering=${volunteering ? volunteering : ""}&location=${_location ? _location : ""}&status=${status ? status : ""}&page=${page ? page : ""}`,
      {
        cache: "no-store",
      }
    );

    const data = await res.json();
    setCards(data.res);
    setTotalPages(data.pageCount);
  }

  React.useEffect(() => {
    debounce(Filter, 2000);
  }, [searchParams]);
  return (
    <Container ref={ref} size={"xl"} style={{ scrollMarginTop: 100 }}>
      <Title pending={""} waitReport={""} closed={""} />
      <Box h={42} />
      {/* {!cards.length ? (
        <Text color={colors.gray}>No fundraifings yet.</Text>
      ) : ( */}
        <Flex gap={40} direction={{ base: "column", lg: "row" }}>
          <Flex maw={300} w={"100%"} flex="0 0 auto" visibleFrom="lg">
            <FilterOptions />
          </Flex>
          <Box flex="1 1 auto">
            <Flex mih="100%" direction={"column"}>
              <Box flex="1 1 auto" mb={24}>
                <CardsList list={cards} />
              </Box>
              <Footer parentRef={ref} />
            </Flex>
          </Box>
        </Flex>
        {/* )} */}
    </Container>
  );
};
