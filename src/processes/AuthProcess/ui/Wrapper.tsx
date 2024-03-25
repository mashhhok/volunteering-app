import {
  Box,
  Card,
  Container,
  Flex,
  ScrollArea,
  Text,
  Title,
} from "@mantine/core";
import React from "react";
import { BgImg } from "./BgImg";
import { LogoSVG } from "@/shared/svg";
import { colors } from "@/shared/enums";

export const Wrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <Flex
      miw={"100vw"}
      mih={"100vh"}
      justify={"center"}
      align={"center"}
      bg={"rgba(5, 1, 49, 1)"}
      pos={'relative'}
    >
      <BgImg />
      <ScrollArea w={"100%"} py={20}>
        <Container size={"md"}>
          <Flex justify={'center'}>
            <Card maw={800} w={"100%"} radius={"md"} py={88}>
              <Flex direction={"column"} align={"center"}>
                <Flex gap={16} mb={24}>
                  <LogoSVG fill={colors.violet} />
                  <Title order={2}>UnitaryAid</Title>
                </Flex>
                <Text mb={40} maw={400} style={{ textAlign: "center" }}>
                  We`ll sign you in or create an account if you don`t have one
                  yet
                </Text>
                {/*  */}
                {children}
                {/*    */}
                <Text
                  mt={70}
                  size="xs"
                  maw={400}
                  style={{ textAlign: "center" }}
                >
                  We`ll process your data as set forth in our{" "}
                  <u>Terms of Use</u>,<u>TPrivacy Policy</u> and{" "}
                  <u>TData Processing Agreement</u>
                </Text>
              </Flex>
            </Card>
          </Flex>
        </Container>
      </ScrollArea>
    </Flex>
  );
};
