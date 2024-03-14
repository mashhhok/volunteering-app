import { Flex, Title } from "@mantine/core";
import React from "react";
import user_icon from "@/public/user.svg";
import Image from "next/image";
import trusted_green_icon from "@/public/trusted_green.svg";
import trusted_blue_icon from "@/public/trusted_blue.svg";
import verified_green_icon from "@/public/verified_green.svg";
import verified_blue_icon from "@/public/verified_blue.svg";
import { colors } from "@/shared/enums";

const UserIcon = () => (
  <Image src={user_icon} width={13} height={13} alt={""} />
);

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

interface ICompanyInfo {
  companyName: string;
  verifiedAndTrusted: boolean;
}

export const CompanyInfo = ({
  companyName,
  verifiedAndTrusted,
}: ICompanyInfo) => {
  return (
    <Flex gap={16} justify={"space-between"}>
      <Flex gap={2} align={'center'}>
        <UserIcon />
        <Title order={6}>{companyName}</Title>
      </Flex>
      <Flex gap={8} wrap={"wrap"}>
        <Flex align="center" gap={2}>
          <TrustedIcon color={verifiedAndTrusted ? "green" : "blue"} />
          <Title
            style={{ color: verifiedAndTrusted ? colors.green : colors.blue }}
            order={6}
          >
            Trusted
          </Title>
        </Flex>
        <Flex
          align="center"
          gap={2}
          color={verifiedAndTrusted ? colors.green : colors.blue}
        >
          <VerifiedIcon color={verifiedAndTrusted ? "green" : "blue"} />
          <Title
            style={{ color: verifiedAndTrusted ? colors.green : colors.blue }}
            order={6}
          >
            Verified
          </Title>
        </Flex>
      </Flex>
    </Flex>
  );
};
