"use client";
import { IDictionary } from "@/shared/config/i18n.config";
import { Select } from "@mantine/core";
import React from "react";

export const LanguageSelect = ({ dict }: { dict: IDictionary }) => {
  const [language, setLanguage] = React.useState<string | null>("en");
  const firstRender = React.useRef<boolean>(true);

  React.useEffect(() => {
    const lang = localStorage.getItem("language");
    setLanguage(lang ? lang : "en");
  }, []);

  React.useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }
    localStorage.setItem("language", language ? language : "en");
  }, [language]);

  return (
    <Select
      wrapperProps={{ width: "auto" }}
      w={"90px"}
      data={[
        { label: dict.widgets.header.language_select.uk, value: "ua" },
        { label: dict.widgets.header.language_select.en, value: "en" },
      ]}
      value={language}
      onChange={(value, option) => setLanguage(option.value)}
    />
  );
};
