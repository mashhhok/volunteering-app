"use client";
import {
  IDictionary,
  Locale,
  defaultDict,
  defaultLang,
} from "@/shared/config/i18n.config";
import React from "react";

export const LangContext = React.createContext({} as IDictionary);

export function LangProvider({
  children,
  dict,
}: {
  children: React.ReactNode;
  dict: IDictionary;
}) {
  return <LangContext.Provider value={dict}>{children}</LangContext.Provider>;
}
