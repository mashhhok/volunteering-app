import { Title } from '@mantine/core'
import React from "react";

export const CardTitle = ({children, small}: {children: React.ReactNode, small?: boolean}) => {
  return (
    <Title
      order={small ? 5 : 3}
      
      style={{
        display: "-webkit-box",
        textTransform: 'uppercase',
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
