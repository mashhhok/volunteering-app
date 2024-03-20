"use client";
import { colors } from "@/shared/enums";
import { LoaderOvalSVG } from "@/shared/svg";
import { BlurButton } from "@/shared/ui";
import { Flex, Text, Title } from "@mantine/core";
import { redirect, useRouter } from "next/navigation";
import React from "react";
import { useConditionalRedirect } from "../../hooks/useConditionalRedirect";
import { getUserByEmail } from "@/entities/User/repository";
import { useAuthStore } from "../../store";
export const SecondPage = () => {
  const router = useRouter();
  const [isComplete, setIsComplete] = React.useState(false);
  const email = useAuthStore((state) => state.email);

  useConditionalRedirect();
  function onComplete() {
    setIsComplete(true);
  }

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    
  }

  return (
    <>
      <form action="/auth/3" onSubmit={onSubmit}>
        <Flex align={"center"} direction={"column"}>
          <Title order={2} mb={24} style={{ textAlign: "center" }} maw={600}>
            Check your email and confirm creating an account
          </Title>
          <BlurButton
            type="submit"
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
