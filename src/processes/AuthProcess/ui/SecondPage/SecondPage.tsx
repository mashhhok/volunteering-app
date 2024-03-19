"use client";

import { colors } from "@/shared/enums";
import { LoaderOvalSVG } from "@/shared/svg";
import { BlurButton, ShadowBtn } from "@/shared/ui";
import { Flex, Text, Title } from "@mantine/core";
import { useRouter } from "next/navigation";
import React from "react";

export const SecondPage = () => {
  const router = useRouter();
  const [isComplete, setIsComplete] = React.useState(false);
  function onComplete() {
    setIsComplete(true);

    setTimeout(() => {
      router.push("/auth/3");
    }, 3000);
  }

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
  }

  return (
    <>
      {/* <Title order={4} mb={24} style={{ textAlign: "center" }}>
        Please, paste (or type) your 6-digit code:
      </Title>
      <PinInput
        size="lg"
        length={6}
        type="number"
        autoFocus
        radius={"md"}
        onComplete={onComplete}
        mb={34}
      />

      <Flex
        align={"center"}
        gap={12}
        style={{ opacity: isComplete ? "1" : "0" }}
      >
        <LoaderOvalSVG />
        <Text size="xs">Checking code...</Text>
      </Flex> */}
      <form action="/auth/3" onSubmit={onSubmit}>
        <Flex align={'center'} direction={'column'}>
          <Title order={2} mb={24} style={{ textAlign: "center" }} maw={600}>
            Check your email and confirm creating an account
          </Title>
          <BlurButton
            type='submit'
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
