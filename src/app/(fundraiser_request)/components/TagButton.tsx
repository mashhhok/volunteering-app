"use client";
import { useThemeStore } from "@/app/store";
import { colors } from "@/shared/enums";
import { Button } from "@mantine/core";

export const TagButton = ({ children }: { children: React.ReactNode }) => {
  const theme = useThemeStore((store) => store.theme);

  return (
    <Button
      py={12}
      px={16}
      h={"auto"}
      fz={14}
      variant="outline"
      color={theme === "light" ? colors.black : colors.white}
    >
      {children}
    </Button>
  );
};
