"use client";
import { Select } from "@mantine/core";
import React from "react";
import { PiTrademarkRegisteredDuotone } from "react-icons/pi";

export const LanguageSelect = () => {
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
        { label: "укр", value: "ua" },
        { label: "анг", value: "en" },
      ]}
      value={language}
      onChange={(value, option) => setLanguage(option.value)}
    />
  );
};
