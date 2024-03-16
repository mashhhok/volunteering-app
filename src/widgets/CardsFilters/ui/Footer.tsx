"use client";
import { ShadowBtn } from "@/shared/ui";
import { Box, Flex, Pagination } from "@mantine/core";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React from "react";
import qs from "qs";

export const Footer = () => {
  const [page, setPage] = React.useState(0);
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  React.useEffect(() => {
    function pattern(val: string | null) {
      if (!val) return 0;
      return parseInt(val);
    }

    setPage(pattern(searchParams.get("page")));
  }, []);


  React.useEffect(() => {
    const qStr = qs.stringify({
      ...qs.parse(window.location.search.substring(1)),
      page,
    });

    router.push(`${pathname}?${qStr}`, { scroll: false });
  }, [page]);

  return (
    <Flex justify={"space-between"}>
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
