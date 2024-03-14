import { Box, Card, Flex, Text, Title } from "@mantine/core";
import React from "react";

const Item = ({ title, subtitle }: { title: string; subtitle: string }) => (
  <Card
    radius={"lg"}
    p={0}
    style={{ boxShadow: "0px 4px 4px rgba(18, 18, 18, 0.04)" }}
  >
    <Card
      radius={"lg"}
      style={{ boxShadow: "inset 0px 4px 4px rgba(18, 18, 18, 0.04)" }}
      p={16}
    >
      <Title order={3}>{title}</Title>
      <Text>{subtitle}</Text>
    </Card>
  </Card>
);

export const DonateInfo = ({
  donors,
  funds,
  workYear,
}: {
  donors: number;
  funds: number;
  workYear: number;
}) => {
  function correctNum(num: number) {
    if (num > 1000) {
      const res = Math.round(num / 1000);
      return res + "K+";
    } else if (num > 1000000) {
      const res = Math.round(num / 1000000);
      return res + "M+";
    } else {
      return `${num}`;
    }
  }

  return (
    <Flex gap={19}>
      <Item title={correctNum(donors)} subtitle={"Donors and volunteers"} />
      <Item title={correctNum(funds)} subtitle={"Funds"} />
      <Item title={`${workYear}`} subtitle={"Years of work"} />
    </Flex>
  );
};
