import { Box, Button, Container, Divider, Flex, Title } from "@mantine/core";
import React from "react";
import { SpendHistories } from "./SpendHistories";
import { UserInfoColumn } from "@/entities/User";
import { FullRequest } from "@/entities/DonationRequest";

export const RequestFullCard: React.FC<any> = ({ imageUrl, companyName }) => {
  return (
    <Container size={"xl"}>
      <Flex align={"center"} justify={"center"} direction={"column"} gap={20}>
        <UserInfoColumn avatarUrl={imageUrl} name={companyName} />
        <FullRequest
          createdAt={"20.20.20"}
          requestTitle={
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi tempore eos inventore asperiores debitis recusandae ea"
          }
          collectedMoney={10}
          needMoney={100}
        />

        <SpendHistories />

        <Box h={30} />
      </Flex>
    </Container>
  );
};
