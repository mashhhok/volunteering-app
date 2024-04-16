import { Box, Container, Drawer, Flex, Select } from "@mantine/core";
import React from "react";
import { Search } from "./Search";
import { getSession } from "@/shared/auth";
import { UserInfoRow } from "@/entities/User";
import { AuthBtns } from "./AuthBtns";
import { Info } from "./Info";
import { Logo } from "@/shared/ui";
import { ThemeSwitcher } from "./ThemeSwitcher";
import { DropBox } from "./DropBox";
import { LanguageSelect } from "./LanguageSelect";

export const Header = async () => {
  const session = await getSession();

  return (
    <Box h={70} pos={"relative"}>
      <Box
        pos={"fixed"}
        style={{
          zIndex: 10,
          backdropFilter: "blur(20px)",
        }}
        py={10}
        w="100%"
        h={70}
      >
        <Container size={"xl"} h="100%">
          <Flex justify={"space-between"} h="100%" align={"center"} gap={15}>
            <Flex visibleFrom="lg" align="center  " gap={20} w={"47%"}>
              <Flex gap={20} align={"center"}>
                <Info />
              </Flex>
              <Search />
            </Flex>

            <Flex hiddenFrom="lg" align="center" gap={20} w={"47%"}>
              <DropBox />
              {/* <Search /> */}
            </Flex>

            <Logo/>
            <Flex
              gap={40}
              align={"center"}
              w={"47%"}
              style={{ flexShrink: 1 }}
              justify={"flex-end"}
            >
              <Box visibleFrom="lg">
                <ThemeSwitcher />
              </Box>
              <Box visibleFrom="lg">
                <LanguageSelect />
              </Box>

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
