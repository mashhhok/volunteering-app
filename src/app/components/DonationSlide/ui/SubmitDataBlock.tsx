'use client'
import React from "react";
import { Flex } from "@mantine/core";
import { Loader } from "@/shared/ui";
import { useDonationSlideStore } from "../store";

export const SubmitDataBlock = () => {


  return (
    <Flex align={"center"} justify="center" w={"100%"} h={500}>
      <Loader width={80} height={80} />
    </Flex>
  );
};
