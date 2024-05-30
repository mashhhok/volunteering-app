"use client";
import { IDictionary } from "@/shared/config/i18n.config";
import { Select } from "@mantine/core";
import { useRouter } from "next/navigation";
import React from "react";

export const LanguageSelect = ({ dict }: { dict: IDictionary }) => {
  const [language, setLanguage] = React.useState<string | null>("lang");
  const firstRender = React.useRef<boolean>(true);
  const router = useRouter()
  return (
    <Select
      wrapperProps={{ width: "auto" }}
      w={"90px"}
      data={[
        { label: "lang", value: "lang" },
        { label: dict.widgets.header.language_select.uk, value: "uk" },
        { label: dict.widgets.header.language_select.en, value: "en-US" },
      ]}
      value={language}
      onChange={(value, option) => {
        router.push(`/${option.value}`);
      }}
    />
  );
};
