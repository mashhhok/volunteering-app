"use client";
import React from "react";
import { Box, Container, Flex, ScrollArea } from "@mantine/core";
import { doDonationAction } from "@/app/api/donation/doDonationAction";
import { SelectAmountBlock } from "./SelectAmountBlock";
import { Header } from "./Header";
import { RecieveRecieptBlock } from "./RecieveRecieptBlock";
import { PaymentMethodBlock } from "./PaymentMethodBlock";
import { useDonationSlideStore } from "../store";
import { colors } from "@/shared/enums";
import { getRequestById } from "@/app/api/requests/getRequestById";
import { useDebounce } from "@/shared/lib/hooks";
import { CrossSVG } from "@/shared/svg";
import { HiddenInput, Loader } from "@/shared/ui";
import { SubmitDataBlock } from "./SubmitDataBlock";
import { useFormState } from "react-dom";
import { SuccessDonateBlock } from "./SuccessDonateBlock";
import { ErrorDonateBlock } from "./ErrorDonate";

export const DonationSlide = () => {
  const {
    block,
    requestId,
    isOpen,
    setIsOpen,
    setBlock,
    setAmount,
    setCurrency,
    email,
  } = useDonationSlideStore();
  const [isLoading, setIsLoading] = React.useState(true);
  const [req, setReq] = React.useState<{
    userData: any;
    requestData: any;
  } | null>(null);
  const debounce = useDebounce();
  const [actionState, action] = useFormState(doDonationAction, null);

  React.useEffect(() => {
    if (actionState?.ok) {
      setBlock(4);
    } else {
      setBlock(5);
    }
  }, [actionState]);

  React.useEffect(() => {
    setIsLoading(true);

    debounce(async () => {
      try {
        if (requestId === null) return;
        const request = await getRequestById(requestId);
        setBlock(0);
        setAmount(0);
        setCurrency(null);
        setReq(request);
      } finally {
        setIsLoading(false);
      }
    }, 500);
  }, [requestId]);

  React.useEffect(() => {
    if (isOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "auto";
  }, [isOpen]);

  function onCloseClick() {
    setIsOpen(false);
  }

  const notOpenStyles: Object = {
    pointerEvents: "none",
    opacity: 0,
    zIndex: 300,
    transition: ".3s",
    overflow: "auto",
    background: "var(--mantine-color-body)",
  };
  const openStyles: Object = {
    pointerEvents: "all",
    opacity: 1,
    zIndex: 300,
    transition: ".3s",
    overflow: "auto",
    background: "var(--mantine-color-body)",
  };

  return (
    <Box
      pos={"fixed"}
      w={"100vw"}
      top={0}
      left={0}
      h={"100vh"}
      p={{ base: 20, sm: 40, md: 60, lg: 80 }}
      style={isOpen ? openStyles : notOpenStyles}
      // bg={colors.neutral}
    >
      {/* <ScrollArea scrollbars="y" w={"100%"}> */}
      {isLoading && (
        <Flex w={"100%"} h={"100%"} justify={"center"} align={"center"}>
          <Loader width={80} height={80} />
        </Flex>
      )}
      <Container size={"xl"}>
        <Box onClick={onCloseClick} pos="absolute" top={25} right={25}>
          <CrossSVG width={28} height={28} />
        </Box>

        {!isLoading && req && (
          <Box>
            <Header
              title={req?.requestData?.title}
              organization={req?.userData?.firstName}
              tags={req?.requestData?.tags}
            />
            <form action={action}>
              <HiddenInput name="requestId" value={req?.requestData?.id} />
              <HiddenInput name="email" value={email} />
              <Box display={block === 0 ? "block" : "none"}>
                <SelectAmountBlock />
              </Box>
              {block === 1 && (
                <Box>
                  <RecieveRecieptBlock />
                </Box>
              )}
              <Box display={block === 2 ? "block" : "none"}>
                <PaymentMethodBlock />
              </Box>
              <Box display={block === 3 ? "block" : "none"}>
                <SubmitDataBlock />
              </Box>
              <Box display={block === 4 ? "block" : "none"}>
                <SuccessDonateBlock />
              </Box>
              <Box display={block === 5 ? "block" : "none"}>
                <ErrorDonateBlock />
              </Box>
            </form>
          </Box>
        )}
      </Container>
      {/* </ScrollArea> */}
    </Box>
  );
};
