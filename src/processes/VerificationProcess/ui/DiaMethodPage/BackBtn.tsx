"use client";
import { ShadowBtn } from "@/shared/ui";
import { useRouter } from "next/navigation";
import React from "react";

export const BackBtn = () => {
  const router = useRouter();

  function click() {
    router.push("/verification/home");
  }

  return (
    <ShadowBtn size="xl" onClick={click}>
      Back to authorize
    </ShadowBtn>
  );
};
