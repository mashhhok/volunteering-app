import {
  Card,
  Container,
  Flex,
  ScrollArea,
  Text,
  Title,
} from "@mantine/core";
import React from "react";
import { colors } from "@/shared/enums";
import Image from "next/image";
import auth_bg from "@/public/auth_bg/default.png";
import { Logo } from "./Logo";

export const RgbaBgLayout = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <Flex
      maw={"100vw"}
      mih={"100vh"}
      justify={"center"}
      align={"center"}
      bg={"rgba(5, 1, 49, 1)"}
      pos={"relative"}
      style={{overflow: 'hidden'}}
    >
      <Flex
        pos={"absolute"}
        top={0}
        left={0}
        w={"100%"}
        h={"100%"}
        justify={"center"}
        align={"center"}
        style={{ overflow: "hidden" }}
      >
        <Image
          src={auth_bg}
          alt={""}
          style={{
            animationName: "rotating",
            animationDuration: "25s",
            animationIterationCount: "infinite",
            
          }}
          width={1500}
          height={1500}
        />
      </Flex>
      <Flex
        pos={"absolute"}
        top={0}
        left={0}
        w={"100%"}
        h={"100%"}
        justify={"center"}
        align={"center"}
        style={{ overflow: "hidden" }}
      >
        <Image
          src={auth_bg}
          alt={""}
          style={{
            animationName: "rotating",
            animationDuration: "25s",
            animationIterationCount: "infinite",
            width: "1440px",
            height: "1024px",
          }}
        />
      </Flex>

      <ScrollArea w={"100%"} py={20}>
        <Container size={"md"}>
          <Flex justify={"center"}>
            <Card maw={800} w={"100%"} radius={"md"} py={88}>
              <Flex direction={"column"} align={"center"}>
                <Flex gap={16} mb={40}>
                  <Logo  fill={colors.violet} />
                  <Title order={2}>UnitaryAid</Title>
                </Flex>
                {/*  */}
                {children}
                {/*    */}
                <Text
                  mt={28}
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
