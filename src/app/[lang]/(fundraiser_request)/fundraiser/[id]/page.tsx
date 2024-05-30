/* eslint-disable react/no-unescaped-entities */
import { Box, Container, Flex, Title } from "@mantine/core";
import React from "react";
import { BackBtn } from "../../components/BackBtn";
import { DonationCard } from "../DonationCard";
import { Slider } from "../Slider";
import { RequestInfo } from "../RequestInfo/RequestInfo";
import { CollectedGraphic } from "../../components/CollectedGraphic/CollectedGraphic";
import { Table, Warning } from "@/shared/ui";
import { getRequestById } from "@/app/api/requests/getRequestById";
import { redirect } from "next/navigation";
import { Description } from "./Description";
import { getDonationRequestHistory } from "@/app/api/donation/getDonationRequestHistory";
import { Locale } from "@/shared/config/i18n.config";
import { getDictionary } from "@/shared/lib/utils/getDictionary";

interface IFundraiserPage {
  params: {
    id: string;
    lang: Locale
  };
}

const FundraiserPage = async ({ params }: IFundraiserPage) => {
  const id = parseInt(params.id);
  if (!id) redirect("/not-found");
  const { requestData: request, userData: user } = await getRequestById(id);
  const dict = await getDictionary(params.lang)
  let resolvedImages;
  if (request.imageUrl) {
    resolvedImages = request.imageUrl.map((item: string) => {
      return require(`@/public/requests_img_db/${item}`);
    });
  }

  const history = await getDonationRequestHistory(request?.userId, id);
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

  const names = user?.firstName + " " + user?.lastName;
  const remains = String(request?.needMoney - request?.collectedMoney);
  return (
    <Container size="xl">
      <Box h={22} />
      <BackBtn />
      <Box h={22} />
      <Flex
        gap={{ base: 20, md: 30, lg: 34 }}
        direction={{ base: "column-reverse", lg: "row" }}
      >
        <DonationCard requestId={request?.id} />
        <Box>
          <Flex
            gap={{ base: 20, md: 30, lg: 34 }}
            direction={{ base: "column-reverse", md: "row" }}
            mb={{ base: 40, md: 100 }}
          >
            <Slider images={resolvedImages} />
            <RequestInfo
              profileId={user?.userId}
              tags={request?.tags}
              names={names}
              isVerified={user?.verifiedBy}
              avatar={user?.avatar}
              title={request?.title}
              status={request?.status}
              date={request?.createdAt}
              location={request?.location} dict={dict}              
            />
          </Flex>
          <CollectedGraphic
            need={request?.needMoney}
            collected={request?.collectedMoney}
            currency={request?.currency}
            remains={remains}
          />
          <Box h={{ base: 40, md: 100 }} />
          <Flex
            gap={46}
            mb={{ base: 40, lg: 100 }}
            direction={{ base: "column", md: "row" }}
          >
            <Title order={2} maw={222}>
              Why is it important?
            </Title>
            <Box flex="1 1 auto">
              <Description>{request?.description}</Description>
              <Box h={{ base: 40, md: 100 }} />
            </Box>
          </Flex>
        </Box>
      </Flex>
      <Box h={{ base: 40, md: 100 }} />
      <Title order={1} mb={24}>
        All receipts
      </Title>
      <Warning
        title={"THE SPREADSHEET DATA SERVES AN INFORMATIVE PURPOSE"}
        subtitle={
          "We'd like to draw your attention to the fact that access to public information, as well as information regarding the intended use of charitable funds, is governed by the current Ukrainian legislation."
        }
      />
      <Box h={24} />
      {!historyMapped.length ? (
        <Table
          elements={[
            [
              "Date, time",
              "Source",
              "Name of fundraising",
              "Amount, uAH",
              "Currency",
              "Comment",
            ],
            ["-", "-", "-", "-", "-", "-"],
          ]}
        />
      ) : (
        <Table
          elements={[
            [
              "Date, time",
              "Source",
              "Name of fundraising",
              "Amount, uAH",
              "Currency",
              "Comment",
            ],
            ...historyMapped,
          ]}
        />
      )}

      <Box h={{ base: 40, md: 100 }} />
    </Container>
  );
};

export default FundraiserPage;
