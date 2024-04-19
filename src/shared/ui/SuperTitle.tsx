import { Title, TitleProps } from "@mantine/core";
import React from "react";

interface ISuperTitle {
  order?: 1 | 2 | 3;
  color?: string
}

export const SuperTitle = (props: TitleProps & ISuperTitle) => {
  const fz_1 = { base: 40, xs: 60, md: 90 };
  const fz_2 = { base: 24, xs: 36, md: 54 };
  const fz_3 = { base: 20, xs: 32, md: 44 };
  const order = props.order ? props.order : 1;

  return (
    <Title
      {...props}
      style={{color: props.color}}
      fz={
        (order === 1 && fz_1) ||
        (order === 2 && fz_2) ||
        (order === 3 && fz_3) ||
        fz_1
      }
    />
  );
};
