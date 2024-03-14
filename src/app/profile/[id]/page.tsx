import { OrganizationInfo } from "@/entities/Organization";
import { UserInfoColumn } from "@/entities/User";
import { getUserById } from "@/entities/User/repository";
import { LinearDivider } from "@/shared/ui/LinearDivider";
import { Box, Container, Flex } from "@mantine/core";
import React from "react";

interface IProps {
  params: {
    id: string;
  };
}

const ProfilePage = async ({ params }: IProps) => {
  const user = await getUserById(parseInt(params.id));
  const name = user?.organization
    ? user.organization.companyName
    : user?.firstName + " " + user?.lastName;

  const a = new Date(user?.createdAt ? user?.createdAt : "");
  var accCreatedAt = [
    addLeadZero(a.getDate()),
    addLeadZero(a.getMonth() + 1),
    a.getFullYear(),
  ].join(".");

  function addLeadZero(val: any) {
    if (+val < 10) return "0" + val;
    return val;
  }

  return (
    <Container size={"xl"}>
      <Box h={10} />
      {/* <Flex direction={"column"} align={"center"}> */}
      <OrganizationInfo userId={parseInt(params.id)} />
      {/* </Flex> */}
    </Container>
  );
};

export default ProfilePage;
