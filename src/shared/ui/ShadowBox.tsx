'use client'
import { useMantineColorScheme, Card, rgba, Title, Text } from "@mantine/core";
import { colors } from "../enums";
import { useThemeStore } from "@/app/store";

export const ShadowBox = ({ title, subtitle }: { title: string; subtitle: string }) => {
  const colorScheme = useThemeStore(state => state.theme)
  const isDark = colorScheme === "dark";

  return (
    <Card
      radius={"lg"}
      p={0}
      style={{
        boxShadow: `0px 4px 4px ${
          isDark ? rgba(colors.lightGray, 0.04) : rgba(colors.black, 0.04)
        }`,
      }}
    >
      <Card
        radius={"lg"}
        style={{
          boxShadow: `inset 0px 4px 4px ${
            isDark ? rgba(colors.lightGray, 0.04) : rgba(colors.black, 0.04)
          }`,
        }}
        p={16}
      >
        <Title order={3}>{title}</Title>
        <Text size='xs' >{subtitle}</Text>
      </Card>
    </Card>
  );
};