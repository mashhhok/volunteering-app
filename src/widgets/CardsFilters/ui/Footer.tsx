"use client";
import { ShadowBtn } from "@/shared/ui";
import { Box, Flex, Pagination } from "@mantine/core";
import { useSearchParams } from "next/navigation";
import React, { RefObject } from "react";
import { useDebounce, useReplaceSearchParams } from "@/shared/lib/hooks";
import { useCardsFiltersStore } from "../store";

export const Footer = ({
  parentRef,
}: {
  parentRef: RefObject<HTMLDivElement>;
}) => {
  const [page, setPage] = React.useState(1);
  const { totalPages } = useCardsFiltersStore();

  const searchParams = useSearchParams();
  const replaceSearchParams = useReplaceSearchParams();
  const debounce = useDebounce();

  React.useEffect(() => {
    function pattern(val: string | null) {
      if (!val) return 1;
      return parseInt(val);
    }

    setPage(pattern(searchParams.get("page")));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParams]);

  function scrollTop() {
    parentRef.current?.scrollIntoView({ behavior: "smooth" });
  }

  React.useEffect(() => {
    replaceSearchParams({ page });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  function onPaginationClick() {
    debounce(scrollTop, 1500);
  }

  return (
    <Flex justify={"space-between"} wrap={"wrap"} gap={15}>
      <ShadowBtn>Show more</ShadowBtn>
      <Pagination
        total={totalPages}
        color="black"
        value={page}
        onChange={(v) => setPage(v)}
        onClick={onPaginationClick}
      />
    </Flex>
  );
};
