"use client";
import { ShadowBtn } from "@/shared/ui";
import { Box, Flex, Pagination } from "@mantine/core";
import { useSearchParams } from "next/navigation";
import React from "react";
import { useReplaceSearchParams } from "@/shared/lib/hooks";

export const Footer = () => {
  const [page, setPage] = React.useState(1);

  const searchParams = useSearchParams();
  const replaceSearchParams = useReplaceSearchParams();

  React.useEffect(() => {
    function pattern(val: string | null) {
      if (!val) return 1;
      return parseInt(val);
    }

    setPage(pattern(searchParams.get("page")));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  React.useEffect(() => {
    replaceSearchParams({ page });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  return (
    <Flex justify={"space-between"} wrap={'wrap'} gap={15} >
      <ShadowBtn>Show more</ShadowBtn>
      <Pagination
        total={10}
        color="black"
        value={page}
        onChange={(v) => setPage(v)}
      />
    </Flex>
  );
};
