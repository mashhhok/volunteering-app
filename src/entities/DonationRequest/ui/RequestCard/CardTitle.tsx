import { Title } from '@mantine/core'
import React from "react";

export const CardTitle = ({children}: {children: React.ReactNode}) => {
  return (
    <Title
      order={4}
      style={{
        display: "-webkit-box",
        "font-size": "20px",
        "-webkit-line-clamp": "2" /* количество строк */,
        "-webkit-box-orient": "vertical",
        overflow: "hidden",
        "text-overflow": "ellipsis",
      }}
    >
      {children}
    </Title>
  );
};
