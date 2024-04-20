"use client";
import React from "react";
import { Container, Title, Text, Flex, Box } from "@mantine/core";
import { colors } from "@/shared/enums";
import { BlurButton } from "@/shared/ui";
import { TopRightArrowSVG } from "@/shared/svg";
import Spline from "@splinetool/react-spline";
import Link from "next/link";
const NotFound = () => {
  return (
    <Container size="xl" mb={-250}>
      <Flex direction={"column"} align={"center"} mb={64}>
        <Title mb={20} style={{textAlign: 'center'}}>Oops... Page not found</Title>
        <Text size="sm" style={{textAlign: 'center'}} mb={40} color={colors.gray}>
          The page you are looking for was moved, removed, renamed or might
          never have existed. If you`re still lost try return to the homepage.
        </Text>
        <Link href="/">
          <BlurButton
            size="xl"
            color={colors.violet}
            rightSection={<TopRightArrowSVG fill={colors.white} />}
          >
            Back to homepage
          </BlurButton>
        </Link>
        <Box h={90} />
        <Box h={500} w={"100%"}>
          <Spline
            
            scene={
              "https://prod.spline.design/ej8SX8WJJt114Wkn/scene.splinecode"
            }
          />
        </Box>
      </Flex>
    </Container>
  );
};

export default NotFound;
