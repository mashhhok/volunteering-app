import { routes } from "@/shared/config/routes";
import { Button } from "@mantine/core";
import Link from "next/link";
import React from "react";

interface ILookBtn {
  requestId: string;
}

const Btn = (props: any) => (
  <Button
    variant="gradient"
    component={Link}
    radius={"md"}
    size="lg"
    style={{ flexShrink: "0", color: "white" }}
    {...props}
  >
    Look
  </Button>
);

export const LookBtn = ({ requestId }: ILookBtn) => {
  return (
    <>
      <Btn fullWidth href={routes.request + "/" + requestId} hiddenFrom="md" />
      <Btn href={routes.request + "/" + requestId} visibleFrom="md" />
    </>
  );
};
