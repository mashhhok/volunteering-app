import { getDonationUserHistory } from "@/app/api/donation/getDonationUserHistory";
import { getProfile } from "@/app/api/profile/getProfile";
import { OrganizationInfo } from "@/entities/Organization";
import { Locale } from "@/shared/config/i18n.config";
import { colors } from "@/shared/enums";
import { getDictionary } from "@/shared/lib/utils/getDictionary";
import { BackBtn, Table, Warning } from "@/shared/ui";
import { LinearDivider } from "@/shared/ui/LinearDivider";
import { CardsFilters } from "@/widgets/CardsFilters";
import { ScrollCards } from "@/widgets/ScrollCards";
import { Box, Container, Flex } from "@mantine/core";
import { redirect } from "next/navigation";
import React from "react";

interface IProps {
  params: {
    id: string;
    lang: Locale
  };
}

const ProfilePage = async ({ params }: IProps) => {
  const id = parseInt(params.id);
  let isError = false;
  if (Number.isNaN(id)) isError = true;
  if (isError) redirect("/not-found");
  const user = await getProfile(id);
  if (!user) redirect("/not-found");

  const history = await getDonationUserHistory(id);
  const historyMapped = history.map((item: any) => {
    const date = new Date(item?.createdAt);
    const dateStr = `${date.getDay()}.${date.getMonth()}.${date.getFullYear()}, ${date.getHours()}.${date.getMinutes()}`;

    return [
      dateStr,
      item?.source,
      item?.fundName,
      item?.amount,
      item?.currency,
      item?.comment,
    ];
  });

  const dict = await getDictionary(params.lang)

  return (
    <Container size={"xl"}>
      <BackBtn>{dict.profile_page.back_btn}</BackBtn>
      <Box h={24} />
      <Flex
        align={"flex-start"}
        direction={{ base: "column", lg: "row" }}
        justify={"center"}
        gap={{ base: 20, lg: 0 }}
      >
        <Flex gap={60} flex="0 1 50%">
          <OrganizationInfo userId={id} dict={dict} />
          <LinearDivider h={"auto"} w={2} color={colors.violet} deg={180} />
        </Flex>
        <Box flex="1 0 auto" w="100%" maw={{ base: "100%", lg: 640 }}>
          <ScrollCards userId={id} dict={dict} />
        </Box>
      </Flex>
      <Box h={100} />
      <CardsFilters companyId={id} dict={dict} />
      <Box h={100} />
      <Warning
        title={dict.profile_page.warning.title}
        subtitle={dict.profile_page.warning.subtitle}
      />
      <Box h={24} />
      {!historyMapped.length ? (
        <Table
          elements={[
            [
              dict.profile_page.table.date,
              dict.profile_page.table.source,
              dict.profile_page.table.fund_name,
              dict.profile_page.table.amount,
              dict.profile_page.table.currency,
              dict.profile_page.table.comment,
            ],
            ["-", "-", "-", "-", "-", "-"],
          ]}
        />
      ) : (
        <Table
          elements={[
            [
              dict.profile_page.table.date,
              dict.profile_page.table.source,
              dict.profile_page.table.fund_name,
              dict.profile_page.table.amount,
              dict.profile_page.table.currency,
              dict.profile_page.table.comment,
            ],
            ...historyMapped,
          ]}
        />
      )}
    </Container>
  );
};

export default ProfilePage;
