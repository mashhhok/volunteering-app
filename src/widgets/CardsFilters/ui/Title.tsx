"use client";
import { FiltersSVG } from "@/shared/svg";
import { Box, Button, Drawer, Flex, Title as TitleMant } from "@mantine/core";
import React from "react";
import { FilterOptions } from "./FilterOptions";

interface IRequestInfo {
  pending: number | "";
  waitReport: number | "";
  closed: number | "";
}

export const Title = ({ pending, waitReport, closed }: IRequestInfo) => {
  const [filtersOptions, setFiltersOptions] = React.useState(false);

  function toggleFilterOptionsDropdown() {
    setFiltersOptions((prev) => !prev);
  }

  return (
    <>
      <Flex gap={30} justify={"space-between"} wrap={"wrap"} gap={10} align={"center"}>
        <TitleMant order={2}>All Fundraisings</TitleMant>
        <Box hiddenFrom="lg" onClick={toggleFilterOptionsDropdown}>
          <FiltersSVG />
        </Box>
        <Flex gap={5} wrap={"wrap"}>
          <Button size="xs" fz="md" color="violet">
            ⚠️ {pending} current fundraisings
          </Button>
          <Button size="xs" fz="md" color="yellow">
            ✅ {waitReport} waiting for the report
          </Button>
          <Button size="xs" fz="md" color="green">
            ⏳ {closed} closed
          </Button>
        </Flex>
      </Flex>
      <Drawer opened={filtersOptions} onClose={() => setFiltersOptions(false)}>
        <FilterOptions />
      </Drawer>
    </>
  );
};
