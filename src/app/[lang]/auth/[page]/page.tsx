import { AuthProcess } from "@/processes/AuthProcess";
import { Locale } from "@/shared/config/i18n.config";
import { getDictionary } from "@/shared/lib/utils/getDictionary";
import React from "react";

interface IProps {
  params: {
    page: string;
    lang: Locale
  };
}

const AuthPage = async ({ params }: IProps) => {
  const dict = await getDictionary(params.lang)

  return <AuthProcess dict={dict} pageId={parseInt(params.page)} />;
};

export default AuthPage;
