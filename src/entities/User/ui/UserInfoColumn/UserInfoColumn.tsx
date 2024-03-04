import { Box, Divider, Flex, Title } from "@mantine/core";
import React from "react";
import { AvatarImage } from "./AvatarImage";

interface IUserInfoColumn {
  imageUrl: string;
  name: string;
}

export const UserInfoColumn: React.FC<IUserInfoColumn> = ({
  imageUrl,
  name,
}) => {
  return (
    <Flex display={'inline-flex'} direction={'column'} align={'center'}>
      <AvatarImage imageUrl={imageUrl} companyName={name} />
      <Title order={1} style={{ textAlign: "center" }} display={"inline-block"}>
        {name}
      </Title>
      <Divider
        orientation="horizontal"
        size={5}
        w={"100%"}
        maw={200}
        color="teal"
      />
    </Flex>
  );
};
