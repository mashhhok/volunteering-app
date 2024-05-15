"use client";
import { colors } from "@/shared/enums";
import { Box, Card, Flex } from "@mantine/core";
import Image from "next/image";
import React from "react";
import { NoImgSVG } from "@/shared/svg";

interface ICardImg {
  imageUrl?: string;
  small?: boolean;
}

export const CardImg = ({ imageUrl, small }: ICardImg) => {
  return (
    <Card radius={"lg"} p={0}>
      {imageUrl ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          width={440}
          height={small ? 136 : 212}
          style={{ maxWidth: "100%", padding: "0", backgroundSize: "cover" }}
          src={require("@/public/requests_img_db/" + imageUrl).default.src}
          alt=""
        />
      ) : (
        <Flex
          align={"center"}
          justify={"center"}
          bg={colors.lightGray}
          w={"100%"}
          h={small ? 136 : 212}
        >
          <NoImgSVG />
        </Flex>
      )}
    </Card>
  );
};
