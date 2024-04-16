"use client";
import { Box, BoxProps, Text, Title } from "@mantine/core";
import React from "react";
import { colors } from "../../enums";
import Image from "next/image";
import wave_img from "./wave.png";
import s from "./WaveBlock.module.scss";

export const WaveBlock = (
  props: BoxProps & {
    title: string;
    subtitle: string;
    emoji?: { text: string; fz: number | string };
    wave: {
      width: {
        base?: number;
        xs?: number;
        sm?: number;
        md?: number;
        lg?: number;
        xl?: number;
      } | number;
      height: {
        base?: number;
        xs?: number;
        sm?: number;
        md?: number;
        lg?: number;
        xl?: number;
      } | number;
    };
  }
) => {
  const { title, subtitle, wave, emoji, ...boxProps } = props;

  return (
    <Box
      py={44}
      px={40}
      {...boxProps}
      bg={colors.black}
      style={{ borderRadius: 16 }}
      pos="relative"
      className={s.WaveBlock}
    >
      <Box pos="relative" style={{ zIndex: 10 }}>
        <Title fz={28} style={{ color: colors.white }} mb={16}>
          {title}
        </Title>
        <Text color={colors.white} size="sm">
          {subtitle}
        </Text>
      </Box>
      <Box w={wave?.width} className={s.img} h={wave?.height}>
        <Image
          src={wave_img}
          alt={""}
          style={{
            width: "100%",
            height: "100%",
          }}
        />
      </Box>

      <Box className={s.emoji} fz={emoji?.fz}>
        {emoji?.text}
      </Box>
    </Box>
  );
};
