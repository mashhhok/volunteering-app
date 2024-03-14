"use client";
import Image from "next/image";
import React from "react";
import logo from "@/public/logo.svg";
import logo_dark from "@/public/logo_dark.svg";
import { useMantineColorScheme } from "@mantine/core";

export const Logo = () => {
  const { colorScheme } = useMantineColorScheme();
  const [scheme, setScheme] = React.useState("");

  React.useEffect(() => {
    setScheme(colorScheme);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [colorScheme]);

  return (
    <>
      {scheme === "dark" ? (
        <Image src={logo_dark} width={35} height={45} alt="logo" />
      ) : (
        <Image src={logo} width={35} height={45} alt="logo" />
      )}
    </>
  );
};
