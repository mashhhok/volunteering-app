import { Box, Container, Flex } from "@mantine/core";
import React from "react";
import { BackBtn } from "../../components/BackBtn";
import { NoVerifiedWarning } from "./NoVerifiedWarning";
import { CardPreview } from "./CardPreview";
import { Slider } from "./Slider";
import { RequestInfo } from "./RequestInfo/RequestInfo";
import { AddDescription } from "./AddDescription/AddDescription";
import { isVerified } from "@/app/api/verification/isVerified";
import { Graphic } from "./Graphic";
import { getProfile } from "@/app/api/profile/getProfile";
import { createFundAction } from "@/app/api/requests/createFundAction";
import PreviewPageInner from "./PreviewPageInner";

const PreviewPage = async () => {
  const isUserVerified = await isVerified();
  const profile = await getProfile();
  const names = profile?.firstName + " " + profile?.lastName;
  return (
    <PreviewPageInner isUserVerified={isUserVerified} names={names} profile={profile}/>
  );
};

export default PreviewPage;
