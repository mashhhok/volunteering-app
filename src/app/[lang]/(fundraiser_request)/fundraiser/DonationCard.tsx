"use client";
import { doDonationAction } from "@/app/api/donation/doDonationAction";
import { colors } from "@/shared/enums";
import { TopRightArrowSVG } from "@/shared/svg";
import { Chip, HiddenInput, ShadowBtn } from "@/shared/ui";
import {
  Box,
  Button,
  ButtonProps,
  Flex,
  Text,
  Title,
  NumberInput,
  ScrollArea,
  Select,
} from "@mantine/core";
import React from "react";
import { useFormState } from "react-dom";

const PriceChip = (props: ButtonProps) => (
  <Button
    {...props}
    px={14}
    fz={16}
    radius={13}
    bg={colors.gray}
    fw={400}
    style={{ border: "none" }}
  />
);

export const DonationCard = ({ requestId }: { requestId: string | number }) => {
  const [formState, action] = useFormState(doDonationAction, null);
  const chipValues = [10, 50, 100, 200];
  const [activeCurrency, setActiveCurrency] = React.useState(-1);
  const [amount, setAmount] = React.useState(0);
  const [currency, setCurrency] = React.useState<string | null>("");
  const curr =
    (currency === "$" && "usd") ||
    (currency === "₴" && "uah") ||
    (currency === "€" && "eur");
  const isDisabled = amount <= 0 || amount > 1000000 || !curr;

  React.useEffect(() => {
    if (formState?.error) {
      alert(formState?.error);
    }
    if (formState?.ok) {
      alert("The donate is success");
    }
  }, [formState]);

  return (
    <form action={action}>
      <HiddenInput name="requestId" value={requestId} />
      <Flex
        direction={"column"}
        py={40}
        px={20}
        style={{ border: "2px solid", borderRadius: 20 }}
        w={282}
        h={432}
      >
        <Title order={5} mb={20}>
          One-time donation
        </Title>
        <Box bg={colors.lightGray} h={1} w={"100%"} />
        <Box flex="1 1 auto" />
        <Flex justify={"space-between"} gap={5} align={"center"}>
          <NumberInput
            styles={{
              input: {
                width: "100%",
              },
            }}
            style={{ backgroundColor: "transparent" }}
            allowNegative={false}
            maxLength={8}
            thousandSeparator={" "}
            minLength={10}
            value={amount}
            radius={5}
            onChange={(val) => {
              if (typeof val === "number") {
                setAmount(val);
                setActiveCurrency(-1);
              }
            }}
            suffix={currency ? currency : ""}
            hideControls
            name="amount"
          />
          <HiddenInput name="currency" value={curr || ""} />
          <Select
            data={["$", "₴", "€"]}
            w={100}
            size="sm"
            value={currency}
            onChange={(val) => setCurrency(val)}
          />
        </Flex>
        <Box flex="1 1 auto" />
        <Box
          w={"100%"}
          mb={28}
          style={{ border: `1px dashed ${colors.lightGray}` }}
        />
        <ScrollArea maw={700} pb={15}>
          <Flex gap={8}>
            {chipValues.map((item, index) => (
              <Box
                onClick={() => {
                  setAmount(item);
                  setActiveCurrency(index);
                }}
                key={item}
              >
                <Chip size="xs" selected={activeCurrency === index}>
                  {item} {currency}
                </Chip>
              </Box>
            ))}
          </Flex>
        </ScrollArea>
        <Button
          fullWidth
          color={isDisabled ? colors.lightViolet : colors.violet}
          mb={12}
          disabled={isDisabled}
          rightSection={<TopRightArrowSVG fill={colors.white} />}
          type="submit"
        >
          Donate
        </Button>
        <ShadowBtn
          fullWidth
          rightSection={
            <TopRightArrowSVG style={{ transform: "rotate(90deg)" }} />
          }
        >
          Requisites for payment
        </ShadowBtn>
      </Flex>
    </form>
  );
};
