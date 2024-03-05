"use client";
import {
  Box,
  Button,
  Card,
  Text,
  Title,
  useMantineColorScheme,
} from "@mantine/core";

interface ISpendHistoryItem {
  text: string;
}

export const SpendHistoryItem: React.FC<ISpendHistoryItem> = ({ text }) => {
  const { colorScheme } = useMantineColorScheme();

  return (
    <Card
      bg={colorScheme === "dark" ? "orange.9" : "orange.5"}
      shadow="xl"
      radius={"md"}
    >
      <Title
        order={2}
        style={{ color: colorScheme === "dark" ? "white" : "inherit" }}
      >
        {text}
      </Title>
    </Card>
  );
};
