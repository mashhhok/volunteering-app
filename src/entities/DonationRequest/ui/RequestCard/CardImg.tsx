import { Card } from "@mantine/core";
import Image from "next/image";
import React from "react";

interface ICardImg {
  imageUrl: string;
}

export const CardImg = ({ imageUrl }: ICardImg) => {
  return (
    <Card radius={"lg"} p={0}>
      <Image
        width={392}
        height={244}
        style={{ backgroundSize: "cover" }}
        src={imageUrl}
        loader={() => imageUrl}
        alt=""
      />
    </Card>
  );
};
