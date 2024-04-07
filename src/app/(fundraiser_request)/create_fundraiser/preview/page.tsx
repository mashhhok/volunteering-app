'use client'
import { Box, Container, Flex } from "@mantine/core";
import React from "react";
import { BackBtn } from "../../BackBtn";
import { NoVerifiedWarning } from "./NoVerifiedWarning";
import { CardPreview } from "./CardPreview";
import { Slider } from "./Slider";
import { RequestInfo } from "./RequestInfo/RequestInfo";
import { AddDescription } from "./AddDescription/AddDescription";
import { CollectedGraphic } from "../../CollectedGraphic/CollectedGraphic";
import { useCreateFundraiserStore } from "../store";

const PreviewPage = () => {
  const isVerified = false;
  const {amount, currency} = useCreateFundraiserStore()

  return (
    <Box>
      <NoVerifiedWarning visible={!isVerified} />

      <Container size="xl">
        <Box mt={24} mb={30}>
          <BackBtn />
        </Box>
        <Flex
          gap={{ base: 20, md: 30, lg: 34 }}
          direction={{ base: "column-reverse", lg: "row" }}
        >
          <Box maw={280} w={"100%"} flex="0 0 auto" visibleFrom="xl">
            <CardPreview />
          </Box>
          <Box>
            <Flex
              gap={{ base: 20, md: 30, lg: 34 }}
              direction={{ base: "column-reverse", md: "row" }}
            >
              <Box flex="0 0 auto" w={"100%"} maw={480}>
                <Slider />
              </Box>
              <RequestInfo />
            </Flex>
            <Box h={{ base: 40, md: 100 }} />
            <CollectedGraphic remains={amount} need={amount} collected={0} currency={currency} />
            <Box h={{ base: 40, md: 100 }} />
            <AddDescription />
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};

export default PreviewPage;
