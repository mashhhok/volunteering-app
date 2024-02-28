import { Box, Divider, Flex, Title } from "@mantine/core";
import React from "react";
import { AvatarImage } from "./AvatarImage";

interface ICompanyInfo {
  imageUrl: string;
  companyName: string;
}

export const CompanyInfo: React.FC<ICompanyInfo> = ({
  imageUrl,
  companyName,
}) => {
  return (
    <Flex display={'inline-flex'} direction={'column'} align={'center'}>
      <AvatarImage imageUrl={imageUrl} companyName={companyName} />
      <Title order={1} style={{ textAlign: "center" }} display={"inline-block"}>
        {companyName}
      </Title>
      <Divider
        orientation="horizontal"
        size={5}
        w={"100%"}
        maw={200}
        color="teal"
      />
    </Flex>
  );
};
