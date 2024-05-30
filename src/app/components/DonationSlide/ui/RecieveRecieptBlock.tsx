"use client";
import React from "react";
import { Box, Title, Flex, Text, Checkbox, TextInput } from "@mantine/core";
import { BlockNavigateBtns } from "./BlockNavigateBtns";
import { BlurButton } from "@/shared/ui";
import { TopRightArrowSVG } from "@/shared/svg";
import { colors } from "@/shared/enums";
import { useInput } from "@/shared/lib/hooks";
import { useDonationSlideStore } from "../store";

type StepType = number | false;

export const RecieveRecieptBlock = () => {
  const [step, setStep] = React.useState<StepType>(0);
  const [agree, setAgree] = React.useState(false);
  const email = useInput('', {isEmail: true})
  const isDisabled = step === false ? false : !(agree && email.isValid);
  const store = useDonationSlideStore()

  React.useEffect(() => {
    store.setEmail(email.value)
  }, [email.value])

  React.useEffect(() => {
    if (agree) {
      setTimeout(() => {
        setStep(2);
      }, 300);
    }
  }, [agree]);

  return (
    <Box>
      <Box mih={400} mb={50}>
        <Flex align="center" direction={"column"}>
          <Box maw={500} w={"100%"}>
            {step === 0 && (
              <Box>
                <Title order={3} mb={20}>
                  Would you like to receive a payment receipt in your mail?
                </Title>
                <Flex gap={20} justify={"flex-end"}>
                  <Box onClick={() => setStep(false)}>
                    <BlurButton size="md" color={colors.violet}>
                      NO
                    </BlurButton>
                  </Box>
                  <Box onClick={() => setStep(1)}>
                    <BlurButton
                      size="md"
                      rightSection={<TopRightArrowSVG fill={colors.white} />}
                      color={colors.violet}
                    >
                      YES
                    </BlurButton>
                  </Box>
                </Flex>
              </Box>
            )}
            {step === false && (
              <Title order={3} mb={20}>
                Your answer has been accepted!
              </Title>
            )}
            {step === 1 && (
              <Box>
                <Title order={3} mb={12}>
                  We take your privacy seriously
                </Title>
                <Text color={colors.gray} size="sm" mb={12}>
                  We only collect the data we need to provide you with the best
                  experience possible.
                </Text>
                <Text color={colors.gray} size="sm" mb={32}>
                  Learn more in our <u>Terms of Use</u>, <u>Privacy Policy</u>{" "}
                  and <u>Data Processing Agreement</u>.
                </Text>
                <Box
                  style={{
                    border: `1px solid ${colors.lightGray}`,
                    borderRadius: 16,
                  }}
                  py={12}
                  px={20}
                >
                  <Flex gap={10}>
                    <Checkbox
                      styles={{
                        input: {
                          borderColor: colors.gray,
                        },
                      }}
                      radius={"md"}
                      size="lg"
                      checked={agree}
                      onChange={(e) => setAgree(e.currentTarget.checked)}
                    />
                    <Text color={colors.gray} size="sm" mb={12}>
                      I agree to the Terms of Use, Privacy Policy and Data
                      Processing Agreement
                    </Text>
                  </Flex>
                </Box>
              </Box>
            )}
            {step === 2 && (
              <TextInput
                placeholder="Placeholder text"
                description="Please check the correctness of your e-mail"
                label="Enter your e-mail"
                size="lg"
                radius={'md'}
                value={email.value}
                {...email.handlers}
                name='email'
              />
            )}
          </Box>
        </Flex>
      </Box>
      <BlockNavigateBtns nextDisable={isDisabled} />
    </Box>
  );
};
