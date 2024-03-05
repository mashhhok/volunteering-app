import { Box, Container, Flex } from "@mantine/core";
import React from "react";
import { Logo } from "./Logo";
import { Search } from "./Search";
import { getSession } from "@/shared/auth";
import { UserInfoRow } from "@/entities/User";
import { AuthBtns } from "./AuthBtns";

export const Header = async () => {
  const session = await getSession();

  return (
    <Box h={60}>
      <Box pos={"fixed"} bg="teal.5" py={10} w="100%" style={{ zIndex: 10 }}>
        <Container size={"xl"}>
          <Flex justify={"space-between"} align={"center"} gap={15}>
            <Logo />
            <Flex gap={10} align={"center"}>
              <Search />
              <Box
                w={{
                  sm: 20,
                  md: 40,
                  lg: 60,
                  xl: 80,
                }}
              />
              {session ? (
                <UserInfoRow
                  firstName={session?.firstName}
                  lastName={session?.lastName}
                  avatar={null}
                />
              ) : (
                <AuthBtns />
              )}
            </Flex>
          </Flex>
        </Container>
      </Box>
    </Box>
  );
};
