import { ChangePassword } from "@/features/Settings/ChangePassword";
import { Locale } from "@/shared/config/i18n.config";
import { getDictionary } from "@/shared/lib/utils/getDictionary";
import React from "react";

const ChangePasswordPage = async ({ params }: { params: { lang: Locale } }) => {
  const dict = await getDictionary(params.lang);

  return <ChangePassword dict={dict} />;
};

export default ChangePasswordPage;
