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
import { getProfile } from "@/app/api/profile/getProfile";
import { IDictionary } from "@/shared/config/i18n.config";

export const Header = async ({dict}: {dict: IDictionary}) => {
  const profile = await getProfile();
  return (
    <Box h={70} pos={"relative"}>
      <Box
        pos={"fixed"}
        style={{
          zIndex: 200,
          backdropFilter: "blur(10px)",
        }}
        py={10}
        w="100%"
        h={70}
      >
        <Container size={"xl"} h="100%">
          <Flex justify={"space-between"} h="100%" align={"center"} gap={15}>
            <Flex visibleFrom="lg" align="center  " gap={20} w={"47%"}>
              <Flex gap={20} align={"center"}>
                <Info dict={dict} />
              </Flex>
            </Flex>

            <Flex hiddenFrom="lg" align="center" gap={20} w={"47%"}>
              <DropBox dict={dict} />
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
                <LanguageSelect dict={dict} />
              </Box>

              {profile ? (
                <UserInfoRow
                  firstName={profile?.firstName}
                  lastName={profile?.lastName}
                  id={profile?.userId}
                />
              ) : (
                <AuthBtns dict={dict} />
              )}
            </Flex>
          </Flex>
        </Container>
      </Box>
    </Box>
  );
};
