import { Box, Card, Container, Flex, Text, Title } from "@mantine/core";
import React from "react";
import { WarningSVG } from "../svg";

export const Warning = (props: { title: string; subtitle: string }) => {
  return (
    <Container size={"xl"}>
      <Card
        radius={"xl"}
        p={{
          xl: "24px 40px 24px 40px",
          lg: "20px 36px 20px 36px",
          md: "18px 35px 18px 35px",
          sm: "15px 32px 15px 32px",
        }}
        w={"100%"}
        style={{ border: "2px solid" }}
      >
        <Flex gap={28} align="center" direction={{ base: "column", sm: "row" }}>
          <Box flex="0 0 auto">
            <WarningSVG />
          </Box>
          <Box>
            <Title order={3} style={{ textTransform: "uppercase" }} mb={8}>
              {props.title}
            </Title>
            <Text fz="16px">{props.subtitle}</Text>
          </Box>
        </Flex>
      </Card>
    </Container>
  );
};
