import { VerificationProcess } from "@/processes/VerificationProcess";
import { Locale } from "@/shared/config/i18n.config";
import { getDictionary } from "@/shared/lib/utils/getDictionary";
import React from "react";

interface IProps {
  params: {
    id: string;
    lang: Locale
  };
}

const VerificationPage = async ({ params }: IProps) => {
  const dict = await getDictionary(params.lang)

  return <VerificationProcess dict={dict} pageId={params.id} />;
};

export default VerificationPage;
