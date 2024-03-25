"use client";
import { colors } from "@/shared/enums";
import { Box, Flex, useMantineColorScheme } from "@mantine/core";
import React from "react";

export const ThemeSwitcher = () => {
  const { colorScheme, setColorScheme } = useMantineColorScheme();
  const [isDark, setIsDark] = React.useState(false);
  const [isTimer, setIsTimer] = React.useState(false);
  const firstLoad = React.useRef(true);

  React.useEffect(() => {
    setIsDark(colorScheme === "dark");
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function click() {
    firstLoad.current = false;
    if (isTimer) return;
    setIsTimer(true);
    setIsDark((prev) => !prev);
  }

  React.useEffect(() => {
    if (firstLoad.current) return;
    setTimeout(() => {
      setColorScheme(isDark ? "dark" : "light");
      setTimeout(() => {
        setIsTimer(false);
      }, 200);
    }, 400);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isDark]);

  return (
    <Flex
      style={{
        borderRadius: 70,
        backgroundColor: isDark ? colors.darkViolet : colors.violet,
        width: 60,
        cursor: "pointer",
        transition: "0.3s",
        height: 32,
      }}
      pos={"relative"}
      onClick={click}
      align={"center"}
    >
      <Box
        bg={isDark ? colors.white : colors.yellow}
        w={24}
        h={24}
        style={{
          borderRadius: "50%",
          transition: "0.3s",
          position: "absolute",
          overflow: "hidden",
        }}
        left={isDark ? 5 : "50%"}
      >
        <Box
          w={20}
          h={20}
          pos={"absolute"}
          right={isDark ? -5 : -20}
          top={isDark ? -2 : -8}
          style={{
            zIndex: 10,
            transition: "0.3s",
            borderRadius: "50%",
            backgroundColor: isDark ? colors.darkViolet : colors.violet,
          }}
        ></Box>
      </Box>
    </Flex>
  );
};
