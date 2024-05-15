import React from "react";
import { Card, Box, Flex, Title, Text } from "@mantine/core";
import { colors } from "@/shared/enums";
import {
  CrossSVG,
  FaceSVG,
  FacebookSVG,
  GoogleSVG,
  InstagramSVG,
  LogoSVG,
  TelegramSVG,
  WhatsappSVG,
} from "@/shared/svg";
import { BlurButton } from "@/shared/ui";

export const SitesModelForAll = ({
  open,
  onClose,
  sites,
}: {
  open: boolean;
  onClose: () => void;
  sites: {
    facebook: string;
    google: string;
    instagram: string;
    telegram: string;
    whatsapp: string;
  };
}) => {
  function onShareClick(url: string) {
    if (url) {
      navigator.share({
        title: "Unitary Aid",
        url: url,
      });
    } else {
      alert("Could not find a link to this social network");
    }
  }

  return (
    <Card
      p={40}
      radius={"md"}
      pos="fixed"
      top={"50%"}
      left={"50%"}
      style={{
        transform: "translate(-50%, -50%)",
        backgroundColor: "var(--mantine-color-body)",
        border: "2px solid",
        zIndex: 5,
        overflow: "auto",
        transition: ".3s",
        opacity: open ? 1 : 0,
        pointerEvents: open ? "all" : "none",
      }}
      mah={"100vh"}
      maw={500}
      mt={80}
      w={"100%"}
    >
      <Box pos="absolute" top={21} right={21} onClick={onClose}>
        <CrossSVG width={24} height={24} />
      </Box>
      <Flex mb={40} gap={20} direction={"column"} align={"center"}>
        <LogoSVG fill={colors.violet} />
        <Title style={{ textAlign: "center" }} order={2}>
          UnitaryAid
        </Title>
        <Text size="sm" color={colors.gray} style={{ textAlign: "center" }}>
          The user has provided their contact information on these social
          networks/applications. Please choose the option you prefer.
        </Text>
      </Flex>

      <Flex direction={"column"} gap={40} align={"center"} mb={40}>
        <Flex gap={40}>
          <Box onClick={() => onShareClick(sites.facebook)}>
            <FacebookSVG width={52} height={52} />
          </Box>

          <Box onClick={() => onShareClick(sites.instagram)}>
            <InstagramSVG width={52} height={52} />
          </Box>
          <Box onClick={() => onShareClick(sites.google)}>
            <GoogleSVG width={52} height={52} />
          </Box>
        </Flex>
        <Flex gap={40}>
          <Box onClick={() => onShareClick(sites.telegram)}>
            <TelegramSVG width={52} height={52} />
          </Box>
          <Box onClick={() => onShareClick(sites.whatsapp)}>
            <WhatsappSVG width={52} height={52} />
          </Box>
        </Flex>
      </Flex>
      <Text size="xs" style={{ textAlign: "center" }}>
        We`ll process your data as set forth in our Terms of Use, Privacy Policy
        and Data Processing Agreement
      </Text>
    </Card>
  );
};
