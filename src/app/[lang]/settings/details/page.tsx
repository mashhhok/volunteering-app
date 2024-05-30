import { EditDetails } from "@/features/Settings/EditDetais";
import { IDictionary, Locale } from "@/shared/config/i18n.config";
import { getDictionary } from "@/shared/lib/utils/getDictionary";
import React from "react";

const DetailsPage = async ({params}: {params: {lang: Locale}}) => {
  const dict = await getDictionary(params.lang)
  return <EditDetails dict={dict} />;
};

export default DetailsPage;
