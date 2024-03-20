"use client";
import React from "react";
import cursor_bg from "@/public/cursor_bg.svg";
import Image from "next/image";
import { Box } from "@mantine/core";

export const Cursor = () => {
  let [posX, setPosX] = React.useState(0);
  let [posY, setPosY] = React.useState(0);
  const [isShowCursor, setIsShowCursor] = React.useState(false);
  React.useEffect(() => {
    setTimeout(() => {
      setIsShowCursor(true);
    }, 1000);
  }, []);

  React.useEffect(() => {
    const func = (e: MouseEvent) => {
      setPosY(e.clientY);
      setPosX(e.clientX);
      console.log('CURSOR')
    };

    document.addEventListener("mousemove", func);

    return () => {
      document.removeEventListener("mousemove", func);
    };
  }, []);
  return (
    <Box
      pos="fixed"
      top={0}
      left={0}
      w={"100%"}
      h={'100vh'}
      style={{ overflow: "hidden", userSelect: "none", zIndex: -1 }}
    >
      <Box
        pos="relative"
        w="100%"
        h={"100%"}
        style={{ display: isShowCursor ? "block" : "none" }}
      >
        <Image
          src={cursor_bg}
          // width={20}
          // height={20}
          alt=""
          style={{
            position: "absolute",
            zIndex: -1,
            top: posY,
            left: posX,
            width: 150,
            height: 150,
            transform: "translate(-50%, -50%)",
            pointerEvents: "none",
          }}
        />
      </Box>
    </Box>
  );
};
