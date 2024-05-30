"use client";
import { colors } from "@/shared/enums";
import { LinkBtn } from "@/shared/ui";
import { Box, Card, Title } from "@mantine/core";
import React from "react";

const navItems = [
  { text: "Edit details", href: "/settings/details" },
  { text: "Profile settings", href: "/settings/profile" },
  { text: "Change password", href: "/settings/change_password" },
  { text: "Verify account", href: "/settings/verify_account" },
  { text: "Verify fundraisers", href: "/settings/verify_funds" },
];

export const Nav = () => {
  return (
    <Box maw={365} w={'100%'}>
      <Title order={1} mb={80}>
        Settings
      </Title>
      <Card radius={"lg"} style={{ border: "1px solid" }} p={20}>
        {navItems.map((item, index) => (
          <Box p={"16px 20px"} key={index}>
            <LinkBtn
              activeProps={{ style: { color: colors.violet } }}
              href={item.href}
            >
              {item.text}
            </LinkBtn>
          </Box>
        ))}
      </Card>
    </Box>
  );
};
