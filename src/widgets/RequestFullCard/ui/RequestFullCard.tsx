import {
  Box,
  Button,
  Container,
  Divider,
  Flex,
  Title,
} from "@mantine/core";
import React from "react";
import { InterBtns } from "./InterBtns";
import { PercentProgress } from "./PercentProgress";
import { CompanyInfo } from "@/entities/CompanyInfo";

export const RequestFullCard: React.FC<IFullRequest> = ({
  imageUrl,
  id,
  companyName,
  date,
  requestTitle,
  collectedMoney,
  needMoney,
}) => {
  return (
    <Container size={"xl"}>
      <Flex align={"center"} justify={"center"} direction={"column"} gap={20}>
        <CompanyInfo imageUrl={imageUrl} companyName={companyName} />
        <Button radius={"xl"} px={15} fz="lg" lh={0.7} color="teal.8">
          {date}
        </Button>
        <Title order={3} style={{ textAlign: "center" }}>
          {requestTitle}
        </Title>
        <InterBtns />
        <PercentProgress
          collectedMoney={collectedMoney}
          needMoney={needMoney}
        />
        <Title>Spend History</Title>
        <Divider
          orientation="horizontal"
          size={5}
          w={"100%"}
          maw={200}
          color="teal"
        />
        <Box h={30} />
      </Flex>
    </Container>
  );
};
