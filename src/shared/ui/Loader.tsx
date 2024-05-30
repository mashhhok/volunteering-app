import React from "react";
import { LuLoader2 } from "react-icons/lu";

export const Loader = ({
  width,
  height,
}: {
  width?: number;
  height?: number;
}) => {
  return (
    <LuLoader2
      style={{
        animationName: "rotating",
        animationDuration: "4s",
        animationIterationCount: "infinite",
        width: width ? width : 50,
        height: height ? height : 50,
      }}
    />
  );
};
