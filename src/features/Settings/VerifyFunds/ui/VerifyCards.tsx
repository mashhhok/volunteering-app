"use client";
import React from "react";
import { Box, Flex, Text, Button } from "@mantine/core";
import { RequestCard } from "@/entities/DonationRequest";
import { verifyRequest } from "@/app/api/requests/verifyRequest";
import { IDictionary } from "@/shared/config/i18n.config";

export const VerifyCards = (props: { requests: any, dict: IDictionary }) => {
  const [requests, setRequests] = React.useState(props.requests);
  async function onVerifyClick(index: number, reqId: number) {
    setRequests((prev: any) => {
      return {
        userData: prev.userData,
        requestsData: [
          ...prev.requestsData.slice(0, index),
          ...prev.requestsData.slice(index + 1),
        ],
      };
    });
    const res = await verifyRequest(reqId);
    if (res?.error) alert(res?.error);
    if (res?.ok) alert("SUCCESSFUL REQUEST CONFIRMATION");
  }

  return (
    <Flex gap={15} wrap={"wrap"}>
      {requests.requestsData.map((request: any, index: number) => (
        <Box
          style={{ borderRadius: 32, overflow: "hidden" }}
          w={300}
          key={request.id}
          pos="relative"
        >
          <Button
            style={{ zIndex: 2 }}
            size="md"
            radius={"lg"}
            pos="absolute"
            top={0}
            right={0}
            onClick={() => onVerifyClick(index, request?.id)}
          >
            VERIFY FUND
          </Button>
          <RequestCard
            small
            companyName={requests?.userData?.firstName}
            requestTitle={request?.title}
            requestDescription={request?.description}
            requestStatus={request?.status}
            verifiedAndTrusted={requests.userData?.verifiedBy}
            id={request?.id}
            needMoney={request?.needMoney}
            collectedMoney={request?.collectedMoney}
            location={request?.location}
            categories={request?.tags}
            imageUrl={request?.imageUrl[0]} dict={props.dict}          />
        </Box>
      ))}
    </Flex>
  );
};
