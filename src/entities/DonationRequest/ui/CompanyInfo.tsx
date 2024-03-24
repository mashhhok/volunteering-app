import { Flex, Title } from "@mantine/core";
import React from "react";
import { IsVerified } from "@/shared/components/IsVerified";
import { UserSVG } from "@/shared/svg/UserSVG";




interface ICompanyInfo {
  companyName: string;
  verifiedAndTrusted: boolean;
}

export const CompanyInfo = ({
  companyName,
  verifiedAndTrusted,
}: ICompanyInfo) => {
  return (
    <Flex gap={16} justify={"space-between"} wrap={'wrap'}> 
      <Flex gap={2} align={'center'}>
        <UserSVG />
        <Title order={6}>{companyName}</Title>
      </Flex>
      <IsVerified isVerified={verifiedAndTrusted} />
    </Flex>
  );
};
