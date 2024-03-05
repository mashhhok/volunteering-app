import { Button, Flex } from "@mantine/core";
import Link from "next/link";
import React from "react";

export const AuthBtns = () => {
  return (
    <Flex gap={15}>
      <Link href="/auth">
        <Button variant="subtle" color="white" fw={700}>
          Log In
        </Button>
      </Link>
      <Link href="/register">
        <Button variant="gradient">Sign Up</Button>
      </Link>
    </Flex>
  );
};
