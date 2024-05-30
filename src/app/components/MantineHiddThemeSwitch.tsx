"use client";
import React from "react";
import { useThemeStore } from "../store";
import { useMantineColorScheme } from "@mantine/core";

export const MantineHiddThemeSwitch = () => {
  
  const {theme, setTheme} = useThemeStore(state => state)
  const {setColorScheme} = useMantineColorScheme()

  React.useEffect(() => {
    setColorScheme(theme)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [theme])

  return null
};
