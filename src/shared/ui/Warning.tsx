import { Box, Card, Container, Flex, Text, Title } from "@mantine/core";
import React from "react";
import { WarningSVG } from "../svg";

export const Warning = (props: { title: string; subtitle: string }) => {
  return (
    <Container size={"xl"}>
      <Card
        radius={"lg"}
        p={{
          xl: "24px 40px 24px 40px",
          lg: "20px 36px 20px 36px",
          md: "18px 35px 18px 35px",
        }}
        w={"100%"}
        style={{ border: "2px solid" }}
      >
        <Flex gap={{base: 20, md: 28}} direction={{ base: "column", sm: "row" }}>
          <Box flex="0 0 auto" w={{base: 38, md: 77}} h={{base: 37, md: 74}}  > 
            <WarningSVG width={'100%'} height={'100%'} />
          </Box>
          <Box>
            <Title order={3} style={{ textTransform: "uppercase" }} mb={8}>
              {props.title}
            </Title>
            <Text>{props.subtitle}</Text>
          </Box>
        </Flex>
      </Card>
    </Container>
  );
};
