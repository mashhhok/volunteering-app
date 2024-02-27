import { Box, Button, Container, Flex } from "@mantine/core";
import React from "react";
import { Logo } from "./Logo";
import { Search } from "./Search";
import { UserInfo } from "./UserInfo";
import { UserInfoMenu } from "./UserInfoMenu";

export const Header = () => {
  return (
    <Box pos={"sticky"} bg="cyan.5" py={10}>
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
            <UserInfoMenu userInfo={<UserInfo/>} />
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
};
