"use client";
import { colors } from "@/shared/enums";
import {
  Box,
  Button,
  Card,
  Divider,
  Flex,
  Progress,
  Text,
  Title,
} from "@mantine/core";
import React from "react";
import { CardImg } from "./CardImg";
import { CardTitle } from "./CardTitle";
import { ProgressBar } from "./ProgressBar";
import { Location } from "./Location";
import { CardStatus } from "./CardStatus";
import { CompanyInfo } from "./CompanyInfo";
import { BlurButton } from "@/shared/ui";
import arrow_top_right_violet from "@/public/arrow_top_right_violet.svg";
import Image from "next/image";
import { CardDescription } from "./CardDescription";

interface IRequestCard {
  companyName: string;
  avatarUrl: string;
  requestTitle: string;
  requestDescription: string;
  requestStatus: "pending" | "open" | "closed";
  imageUrl: string;
  verifiedAndTrusted: boolean;

  needMoney: number;
  collectedMoney: number;
}

export const RequestCard: React.FC<IRequestCard> = ({
  companyName,
  avatarUrl,
  requestTitle,
  requestDescription,
  requestStatus,
  needMoney,
  collectedMoney,
  imageUrl,
  verifiedAndTrusted,
}) => {
  const [clicked, setClicked] = React.useState(false);
  const moneyPercent = Math.round((collectedMoney / needMoney) * 100);

  const blurOption = {
    filter: moneyPercent === 100 ? "blur(3.5px)" : "blur(0px)",
  };

  return (
    <Card
      p={24}
      radius={"xl"}
      maw={440}
      w={"100%"}
      h={555}
      bg={'transparent'}
      onClick={() => setClicked((prev) => !prev)}
      style={{ border: `2px solid ${colors.black}` }}
    >
      {!clicked ? (
        <Flex gap={12} direction={"column"}>
          {/* FRONT CARD */}
          <Flex direction={"column"} gap={4}>
            <Box style={blurOption}>
              <CardImg imageUrl={imageUrl} />
            </Box>
            <Box style={blurOption}>
              <Location>Kyiv, Ukraine</Location>
            </Box>

            <CardTitle>{requestTitle}</CardTitle>
          </Flex>

          <Box style={blurOption}>
            <CompanyInfo
              companyName={companyName}
              verifiedAndTrusted={verifiedAndTrusted}
            />
          </Box>
          <Box style={blurOption}>
            <ProgressBar collected={collectedMoney} need={needMoney} />
          </Box>

          <CardStatus
            status={requestStatus}
            tags={["🎖 Military", "🥾 Equipment"]}
          />
        </Flex>
      ) : (
        <Flex gap={15} direction={"column"} h={"100%"}>
          {/* BACK CARD */}
          <Flex gap={4} direction={"column"}>
            <Location>Kyiv, Ukraine</Location>
            <CardTitle>{requestTitle}</CardTitle>
          </Flex>
          <CompanyInfo
            companyName={companyName}
            verifiedAndTrusted={verifiedAndTrusted}
          />
          <CardDescription>{requestDescription}</CardDescription>
          <ProgressBar collected={collectedMoney} need={needMoney} />
          <CardStatus
            status={requestStatus}
            isTextHidden={true}
            tags={["🎖 Military", "🥾 Equipment"]}
          />
          <Box style={{ flexGrow: "1" }} />
          <Flex justify="flex-end" align={"center"} gap={16}>
            <BlurButton size="xl" color={colors.violet}>
              Donate
            </BlurButton>
            <Image
              src={arrow_top_right_violet}
              width={30}
              height={30}
              alt={""}
            />
          </Flex>
        </Flex>
      )}
    </Card>
  );
};
