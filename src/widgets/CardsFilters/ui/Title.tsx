"use client";
import { FiltersSVG } from "@/shared/svg";
import { Box, Button, Drawer, Flex, Title as TitleMant } from "@mantine/core";
import React from "react";
import { FilterOptions } from "./FilterOptions";
import { IDictionary } from "@/shared/config/i18n.config";

interface IRequestInfo {
  dict: IDictionary;
}

export const Title = ({ dict }: IRequestInfo) => {
  const [filtersOptions, setFiltersOptions] = React.useState(false);

  function toggleFilterOptionsDropdown() {
    setFiltersOptions((prev) => !prev);
  }

  return (
    <>
      <Flex justify={"space-between"} wrap={"wrap"} gap={10} align={"center"}>
        <TitleMant order={2}>
          {dict.widgets.cards_filters.title.title}
        </TitleMant>
        <Box hiddenFrom="lg" onClick={toggleFilterOptionsDropdown}>
          <FiltersSVG />
        </Box>
        <Flex w={{ base: "100%", lg: "auto" }} gap={5} wrap={"wrap"}>
          <Button size="xs" fz="md" color="violet">
            ⚠️ {dict.widgets.cards_filters.title.flex.pending}
          </Button>
          <Button size="xs" fz="md" color="yellow">
            ✅ {dict.widgets.cards_filters.title.flex.closed}
          </Button>
          <Button size="xs" fz="md" color="green">
            ⏳ {dict.widgets.cards_filters.title.flex.open}
          </Button>
        </Flex>
      </Flex>
      <Drawer opened={filtersOptions} onClose={() => setFiltersOptions(false)}>
        <Box h={50} />
        <FilterOptions dict={dict} />
      </Drawer>
    </>
  );
};
