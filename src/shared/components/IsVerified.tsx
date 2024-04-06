import { Box, Flex, Text, Title } from "@mantine/core";
import React from "react";
import { colors } from "../enums";
import trusted_green_icon from "@/public/trusted_green.svg";
import trusted_blue_icon from "@/public/trusted_blue.svg";
import verified_green_icon from "@/public/verified_green.svg";
import verified_blue_icon from "@/public/verified_blue.svg";
import Image from "next/image";
import { FaceSVG } from "../svg";
const TrustedIcon = ({ color }: { color: "green" | "blue" }) => (
  <Image
    src={color === "green" ? trusted_green_icon : trusted_blue_icon}
    width={13}
    height={13}
    alt={""}
    color={color}
  />
);

const VerifiedIcon = ({ color }: { color: "green" | "blue" }) => (
  <Image
    src={color === "green" ? verified_green_icon : verified_blue_icon}
    width={13}
    height={13}
    alt={""}
  />
);

export const IsVerified = ({
  isVerified,
  small,
  short,
}: {
  isVerified: boolean;
  small?: boolean;
  short?: boolean;
}) => {
  if (isVerified)
    return (
      <Flex gap={8} wrap={"wrap"}>
        {!short && (
          <Flex align="center" gap={4}>
            <TrustedIcon color={"green"} />
            <Title
              style={{ color: colors.green }}
              fz={12}
              order={6}
              {...(small && { fz: 10 })}
            >
              Trusted
            </Title>
          </Flex>
        )}

        <Flex align="center" gap={4} color={colors.green}>
          <VerifiedIcon color={"green"} />
          <Title
            style={{ color: colors.green }}
            order={6}
            fz={12}
            {...(small && { fz: 10 })}
          >
            Verified
          </Title>
        </Flex>
      </Flex>
    );

  if (!isVerified)
    return (
      <Flex align="center" gap={5}>
        <FaceSVG width={small ? 10 : 16} height={small ? 10 : 16} />
        <Text size="xs" color={colors.orange} {...(small && { fz: 10 })}>
          Not yet verified
        </Text>
      </Flex>
    );
};
