"use client";
import React from "react";
import { Box, Flex, Title as TitleEl } from "@mantine/core";
import { LeftArrowSVG } from "@/shared/svg";
import { RightArrowSVG } from "@/shared/svg/RightArrowSVG";
import { useScrollCardsState } from "../store";
import { IDictionary } from "@/shared/config/i18n.config";

export const Title = ({dict}: {dict: IDictionary}) => {
  const scrollRef = useScrollCardsState((state) => state.scrollRef);

  const cardWidth = 440;

  function onRightScrollClick2() {
    if (scrollRef === null || !scrollRef?.current) return;
    const activeScroll = scrollRef?.current?.scrollLeft;
    scrollRef.current.scrollTo({
      left: activeScroll + cardWidth + 60,
      top: 0,
      behavior: "smooth",
    });

  }
  function onLeftScrollClick2() {
    if (scrollRef === null || !scrollRef?.current) return;
    const activeScroll = scrollRef?.current?.scrollLeft;
    scrollRef.current.scrollTo({
      left: activeScroll - cardWidth - 60,
      top: 0,
      behavior: "smooth",
    });

  }

  return (
    <Flex justify={"space-between"} align={"center"} ml={{ base: 0, xs: 60 }}>
      <TitleEl fz={32}>{dict.widgets.scroll_cards.title.title}</TitleEl>
      <Flex gap={11}>
        <Box onClick={onLeftScrollClick2}>
          <LeftArrowSVG />
        </Box>
        <Box onClick={onRightScrollClick2}>
          <RightArrowSVG />
        </Box>
      </Flex>
    </Flex>
  );
};
