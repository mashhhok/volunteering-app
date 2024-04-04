import { colors } from "@/shared/enums";
import { Box, Card, Flex } from "@mantine/core";
import Image from "next/image";
import React from "react";
import { NoImgSVG } from "@/shared/svg";

interface ICardImg {
  imageUrl?: string;
}

export const CardImg = ({ imageUrl }: ICardImg) => {
  return (
    <Card radius={"lg"} p={0}>
      {imageUrl ? (
        <Image
          width={440}
          height={212}
          style={{ maxWidth: "100%", padding: "0", backgroundSize: 'cover' }}
          src={imageUrl}
          loader={() => imageUrl}
          alt=""
        />
      ) : (
        <Flex align={'center'} justify={'center'} bg={colors.lightGray} w={"100%"} h={136}>
          <NoImgSVG/>
        </Flex>
      )}
    </Card>
  );
};
