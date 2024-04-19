"use client";
import { colors } from "@/shared/enums";
import { Carousel } from "@mantine/carousel";
import { Box, Center } from "@mantine/core";
import Image from "next/image";
import React from "react";
import { MdDelete } from "react-icons/md";

export const Slider = ({ images }: { images: string[] }) => {
  if (!images.length) return <Box></Box>;

  return (
    <Box w={"100%"} maw={480}>
      <Carousel
        mb={12}
        w={"100%"}
        h={300}
        loop
        withIndicators
        style={{ borderRadius: 16, overflow: "hidden" }}
        withKeyboardEvents
        styles={{
          indicator: {
            background: colors.orange,
          },
          control: {
            background: colors.white,
          },
        }}
      >
        {images.map((item, index) => (
          <Carousel.Slide
            p={0}
            mx={7}
            bg={colors.lightGray}
            style={{ overflow: "hidden", borderRadius: 16 }}
            key={index}
            h={"100%"}
          >
            <Image
              src={item}
              width={480}
              height={300}
              style={{ backgroundSize: "cover", width: "100%", height: '100%' }}
              alt={""}
            />
          </Carousel.Slide>
        ))}
      </Carousel>
      {/* bottom section */}
      <Carousel
        height={120}
        slideSize={152}
        slidesToScroll={1}
        align={"start"}
        style={{ borderRadius: 16, overflow: "hidden" }}
        w={"100%"}
        withIndicators
        withKeyboardEvents
        styles={{
          indicator: {
            background: colors.orange,
          },
          control: {
            background: colors.white,
          },
        }}
      >
        {images.map((item, index) => (
          <Carousel.Slide
            mx={7}
            bg={colors.lightGray}
            style={{ overflow: "hidden", borderRadius: 16, cursor: "pointer" }}
            key={index}
            h={"100%"}
            pos={"relative"}
          >
            <Image
              src={item}
              width={152}
              height={120}
              style={{ backgroundSize: "cover" }}
              alt={""}
            />
          </Carousel.Slide>
        ))}
      </Carousel>
    </Box>
  );
};
