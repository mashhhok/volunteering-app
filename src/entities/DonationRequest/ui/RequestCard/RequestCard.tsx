"use client";
import { colors } from "@/shared/enums";
import { Box, Card, Flex } from "@mantine/core";
import React from "react";
import { CardImg } from "./CardImg";
import { CardTitle } from "./CardTitle";
import { ProgressBar } from "./ProgressBar";
import { Location } from "./Location";
import { CardStatus } from "./CardStatus";
import { CompanyInfo } from "../CompanyInfo";
import { BlurButton } from "@/shared/ui";
import arrow_top_right_violet from "@/public/arrow_top_right_violet.svg";
import Image from "next/image";
import { CardDescription } from "./CardDescription";
import { useMediaQuery } from "@mantine/hooks";
import Link from "next/link";

export interface IRequestCard {
  companyName: string;
  requestTitle: string;
  requestDescription: string;
  requestStatus: "pending" | "open" | "closed";
  imageUrl?: string;
  verifiedAndTrusted: boolean;
  id: string | number;

  needMoney: number;
  collectedMoney: number;
  small?: boolean;
  location: string;
  categories: string[];
}

export const RequestCard: React.FC<IRequestCard> = ({
  companyName,
  requestTitle,
  requestDescription,
  requestStatus,
  needMoney,
  collectedMoney,
  imageUrl,
  verifiedAndTrusted,
  small,
  location,
  categories,
  id
}) => {
  const [hovered, setHovered] = React.useState(false);
  const moneyPercent = Math.round((collectedMoney / needMoney) * 100);
  const isPhone = useMediaQuery("(hover: none)");

  const blurOption = {
    filter: moneyPercent === 100 ? "blur(3.5px)" : "blur(0px)",
  };

  return (
    <Card
      // p={24}
      radius={"xl"}
      maw={440}
      w={"100%"}
      h={small ? 400 : 555}
      bg={"transparent"}
      {...(isPhone
        ? {
            onClick: () => setHovered((prev) => !prev),
          }
        : {
            onMouseEnter: () => setHovered(true),
            onMouseLeave: () => setHovered(false),
          })}
      style={{ border: `2px solid ${colors.black}` }}
    >
      <Flex
        gap={small ? 12 : 24}
        direction={"column"}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          opacity: hovered ? "0" : "1",
          transition: "0.3s",
        }}
        w={"100%"}
        p={16}
        h={"100%"}
      >
        {/* FRONT CARD */}
        <Flex direction={"column"} gap={small ? 4 : 16}>
          <Box style={blurOption} mb={12}>
            <CardImg imageUrl={imageUrl} small={small} />
          </Box>
          <Box style={blurOption}>
            <Location small={small}>{location}</Location>
          </Box>

          <CardTitle small={small}>{requestTitle}</CardTitle>
        </Flex>

        <Box style={blurOption}>
          <CompanyInfo
            small={small}
            companyName={companyName}
            verifiedAndTrusted={verifiedAndTrusted}
          />
        </Box>
        <Box style={blurOption}>
          <ProgressBar
            small={small}
            collected={collectedMoney}
            need={needMoney}
          />
        </Box>
        <CardStatus small={small} status={requestStatus} tags={categories} />
      </Flex>
      <Flex
        gap={15}
        direction={"column"}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          opacity: hovered ? "1" : "0",
          transition: "0.3s",
        }}
        w={"100%"}
        // p={24}
        p={24}
        h={"100%"}
      >
        {/* BACK CARD */}
        <Flex gap={4} direction={"column"}>
          <Location small={small}>{location}</Location>
          <CardTitle small={small}>{requestTitle}</CardTitle>
        </Flex>
        <CompanyInfo
          small={small}
          companyName={companyName}
          verifiedAndTrusted={verifiedAndTrusted}
        />
        <CardDescription>{requestDescription}</CardDescription>
        <ProgressBar
          small={small}
          collected={collectedMoney}
          need={needMoney}
        />
        <CardStatus
          status={requestStatus}
          isTextHidden={true}
          tags={categories}
        />
        {/* <Box style={{ flexGrow: "1" }} /> */}
        <Flex justify="flex-end" align={"center"} gap={16}>
          <BlurButton size={small ? "md" : "xl"} color={colors.violet}>
            Donate
          </BlurButton>
          <Link href={`/fundraiser/${id}`}>
          <Image src={arrow_top_right_violet} width={30} height={30} alt={""} />
          </Link>
        </Flex>
      </Flex>
    </Card>
  );
};
