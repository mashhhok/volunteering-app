import Image from "next/image";
import React from "react";
import logo from "@/public/logo.svg";
import logo_dark from "@/public/logo_dark.svg";
import { useMantineColorScheme } from "@mantine/core";
import { LogoSVG } from "../svg";

export const Logo = () => {
  // const { colorScheme } = useMantineColorScheme();
  // const [scheme, setScheme] = React.useState("");

  // React.useEffect(() => {
  //   setScheme(colorScheme);
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [colorScheme]);

  return (
    <>
      <LogoSVG />
    </>
  );
};
