"use client";
import { Button } from "@mantine/core";
import React from "react";
import { useFormStatus } from "react-dom";

export const SubmitBtn = () => {
  const {pending} = useFormStatus()

  return (
    <Button variant="gradient" type="submit" disabled={pending}>
      Submit
    </Button>
  );
};
