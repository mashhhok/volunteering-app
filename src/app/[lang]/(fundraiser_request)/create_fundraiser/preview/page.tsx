import React from "react";

import { isVerified } from "@/app/api/verification/isVerified";
import { getProfile } from "@/app/api/profile/getProfile";
import PreviewPageInner from "./PreviewPageInner";
import { Locale } from "@/shared/config/i18n.config";
import { getDictionary } from "@/shared/lib/utils/getDictionary";

const PreviewPage = async ({params}: {params: {lang: Locale}}) => {
  const dict = await getDictionary(params.lang)
  const isUserVerified = await isVerified();
  const profile = await getProfile();
  const names = profile?.firstName + " " + profile?.lastName;
  return (
    <PreviewPageInner dict={dict} isUserVerified={isUserVerified} names={names} profile={profile}/>
  );
};

export default PreviewPage;
