"use client";
import { Box, Container, Flex } from "@mantine/core";
import React from "react";
import { BackBtn } from "../../components/BackBtn";
import { NoVerifiedWarning } from "./NoVerifiedWarning";
import { CardPreview } from "./CardPreview";
import { Slider } from "./Slider";
import { RequestInfo } from "./RequestInfo/RequestInfo";
import { AddDescription } from "./AddDescription/AddDescription";
import { Graphic } from "./Graphic";
import { getProfile } from "@/app/api/profile/getProfile";
import { createFundAction } from "@/app/api/requests/createFundAction";
import { useCreateFundraiserStore } from "../store";
import Image from "next/image";
const PreviewPageInner = ({
  isUserVerified,
  names,
  profile,
}: {
  isUserVerified: boolean;
  names: string;
  profile: any;
}) => {
  const { localFiles } = useCreateFundraiserStore();
  // const [error, setError] = React.useState<string | undefined>()
  async function action(formData: FormData) {
    if (localFiles) {
      for (let i = 0; i < localFiles?.length; i++) {
        formData.append("image_" + i, localFiles[i]);
      }
    }

    const res = await createFundAction(formData);
    // setError(res?.error)
    if (res?.error) {
      alert(res?.error);
    }
  }

  return (
    <Box>
      <NoVerifiedWarning visible={!isUserVerified} />

      <Container size="xl">
        <Box mt={24} mb={30}>
          <BackBtn />
        </Box>
        <form action={action} encType="multipart/form-data">
          <Flex
            gap={{ base: 20, md: 30, lg: 34 }}
            direction={{ base: "column-reverse", lg: "row" }}
          >
            <Box maw={280} w={"100%"} flex="0 0 auto" visibleFrom="xl">
              <CardPreview
                companyName={names}
                verifiedAndTrusted={isUserVerified}
              />
            </Box>
            <Box>
              <Flex
                gap={{ base: 20, md: 30, lg: 34 }}
                direction={{ base: "column-reverse", md: "row" }}
              >
                <Box flex="0 0 auto" w={"100%"} maw={480}>
                  <Slider />
                </Box>
                <RequestInfo
                  avatarUrl={profile?.avatar}
                  names={names}
                  isVerified={isUserVerified}
                />
              </Flex>
              <Box h={{ base: 40, md: 100 }} />
              <Graphic />
              <Box h={{ base: 40, md: 100 }} />
              <AddDescription />
            </Box>
          </Flex>
        </form>
      </Container>
    </Box>
  );
};

export default PreviewPageInner;
