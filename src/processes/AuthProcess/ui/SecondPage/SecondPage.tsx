"use client";
import { colors } from "@/shared/enums";
import { LoaderOvalSVG } from "@/shared/svg";
import { BlurButton } from "@/shared/ui";
import { Flex, Text, Title } from "@mantine/core";
import { redirect, useRouter } from "next/navigation";
import React from "react";
import { useConditionalRedirect } from "../../hooks/useConditionalRedirect";
import { useAuthStore } from "../../store";
export const SecondPage = () => {
  const [isComplete, setIsComplete] = React.useState(false);

  useConditionalRedirect();
  function onComplete() {
    setIsComplete(true);
  }


  return (
    <>
      <form action={'/'}>
        <Flex align={"center"} direction={"column"}>
          <Title order={2} mb={24} style={{ textAlign: "center" }} maw={600}>
            Check your email and confirm creating an account
          </Title>
          <BlurButton
            mb={20}
            size="lg"
            color={colors.violet}
            onClick={onComplete}
          >
            Check confirm
          </BlurButton>
          <Flex
            align={"center"}
            gap={12}
            style={{ opacity: isComplete ? "1" : "0" }}
          >
            <LoaderOvalSVG />
            <Text size="xs">Checking code...</Text>
          </Flex>
        </Flex>
      </form>
    </>
  );
};
