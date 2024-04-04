import { getFullUserByEmail } from "@/entities/User/repository";
import { getSession } from "@/shared/auth";
import { colors } from "@/shared/enums";
import { Box, Container, Flex, Text } from "@mantine/core";
import React from "react";
import { BackBtn } from "../BackBtn";
import { NoVerifiedWarning } from "./NoVerifiedWarning";
import { InfoSVG } from "@/shared/svg";
import { RequestCard } from "@/entities/DonationRequest";
import { CardPreview } from "./CardPreview";
import { Slider } from "./Slider";
import { RequestInfo } from "./RequestInfo/RequestInfo";
import { Graphic } from "./Graphic/Graphic";
import { AddDescription } from "./AddDescription/AddDescription";

export const PreviewPage = async () => {
  const isVerified = false;

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
            <Graphic />
            <Box h={{ base: 40, md: 100 }} />
            <AddDescription/>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};
