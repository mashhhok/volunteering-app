import React from "react";
import { Avatar } from "@mantine/core";

interface IAvatar {
  imageUrl?: string | null;
  companyName?: string;
}

export const AvatarImage: React.FC<IAvatar> = ({ imageUrl, companyName }) => {
  return (
    <Avatar
      src={imageUrl}
      h={{ base: 150, xs: 200 }}
      w={{ base: 150, xs: 200 }}
      bg={"teal"}
    ></Avatar>
  );
};
