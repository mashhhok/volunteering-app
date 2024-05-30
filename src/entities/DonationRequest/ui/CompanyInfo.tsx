import { Flex, Title } from "@mantine/core";
import React from "react";
import { UserSVG } from "@/shared/svg/UserSVG";
import { IsVerified } from "@/shared/ui/IsVerified";
import { IDictionary } from "@/shared/config/i18n.config";

interface ICompanyInfo {
  companyName: string;
  verifiedAndTrusted: boolean;
  small?: boolean;
  dict: IDictionary
}

export const CompanyInfo = ({
  companyName,
  verifiedAndTrusted,
  small,
  dict
}: ICompanyInfo) => {
  return (
    <Flex gap={16} justify={"space-between"} wrap={"wrap"}>
      <Flex gap={2} align={"center"}>
        <UserSVG />
        <Title order={6} {...(small && { fz: 10 })}>
          {companyName}
        </Title>
      </Flex>
      <IsVerified dict={dict} small={small} isVerified={verifiedAndTrusted} />
    </Flex>
  );
};
