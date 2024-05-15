import React from "react";
import { Flex, Box, Card, Title, Text, TextInput } from "@mantine/core";
import {
  CrossSVG,
  FacebookSVG,
  GoogleSVG,
  InstagramSVG,
  LogoSVG,
  TelegramSVG,
  WhatsappSVG,
} from "@/shared/svg";
import { colors } from "@/shared/enums";
import { editSitesAction } from "@/app/api/settings/editDetails/editSitesAction";
import { BlurButton } from "@/shared/ui";

function SocialLink({
  logo,
  name,
  defaultValue,
}: {
  logo: React.ReactNode;
  name: string;
  defaultValue: string;
}) {
  return (
    <Flex gap={12} align="flex-start" w={"100%"}>
      {logo}
      <Box flex="1 1 auto">
        <Text size="xs" mb={4} fw={500}>
          Enter your <span style={{ textTransform: "capitalize" }}>{name}</span>{" "}
          link
        </Text>
        <Text size="xs" color={colors.gray} mb={7}>
          Please check the correctness of this link
        </Text>
        <TextInput
          defaultValue={defaultValue}
          name={name}
          w={"100%"}
          size="md"
        />
      </Box>
    </Flex>
  );
}

export const SitesModalForOwner = ({
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
  return (
    <form action={editSitesAction} onSubmit={onClose} >
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
            Please, provide your contact information on your social
            networks/applications. You can also edit these links.
          </Text>
        </Flex>
        <Flex mb={44} gap={12} direction={"column"} w={"100%"}>
          <SocialLink
            logo={<GoogleSVG width={20} height={20} />}
            name={"google"}
            defaultValue={sites.google}
          />
          <SocialLink
            logo={<FacebookSVG width={20} height={20} />}
            name={"facebook"}
            defaultValue={sites.facebook}
          />
          <SocialLink
            logo={<InstagramSVG width={20} height={20} />}
            name={"instagram"}
            defaultValue={sites.instagram}
          />
          <SocialLink
            logo={<TelegramSVG width={20} height={20} />}
            name={"telegram"}
            defaultValue={sites.telegram}
          />
          <SocialLink
            logo={<WhatsappSVG width={20} height={20} />}
            name={"whatsapp"}
            defaultValue={sites.whatsapp}
          />
        </Flex>
        <Flex justify="center" mb={40}>
          <BlurButton color={colors.violet}>Save changes</BlurButton>
        </Flex>
        <Text size="xs" style={{ textAlign: "center" }}>
          We`ll process your data as set forth in our Terms of Use, Privacy
          Policy and Data Processing Agreement
        </Text>
      </Card>
    </form>
  );
};
