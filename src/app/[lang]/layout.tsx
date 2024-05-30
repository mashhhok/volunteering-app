/* eslint-disable @next/next/no-page-custom-font */
import "@/shared/styles/globals.css";
import "@mantine/core/styles.css";
import "@mantine/carousel/styles.css";
import "@mantine/dates/styles.css";
import "@mantine/dates/styles.layer.css";
import "@mantine/tiptap/styles.css";
import type { Metadata } from "next";
import { Box, ColorSchemeScript, Flex, MantineProvider } from "@mantine/core";
import { theme } from "@/shared/config/mantine.config";
import { Header } from "@/widgets/Header";
import { Footer } from "@/widgets/Footer";
import { HideWhen } from "@/shared/ui";
import { getDictionary } from "@/shared/lib/utils/getDictionary";
import { Locale } from "@/shared/config/i18n.config";
import { MantineHiddThemeSwitch } from "../components/MantineHiddThemeSwitch";
import { DonationSlide } from "../components/DonationSlide";
import { LangProvider } from "./LangProvider";

export const metadata: Metadata = {
  title: "Unitary Aid",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: {
    lang: Locale;
  };
}>) {
  const headAndFootHiddened = [
    "/auth/1",
    "/create_fundraiser/names",
    "/create_fundraiser/amount",
  ];
  const dict = await getDictionary(params.lang);

  return (
    <html lang={params.lang}>
      <head>
        <ColorSchemeScript defaultColorScheme="light" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
      </head>
      <body>
        <MantineProvider theme={theme} defaultColorScheme="light">
          <LangProvider dict={dict}>
            <Box maw={"100%"} w={"100%"} style={{ overflow: "hidden" }}>
              <Flex mih={"100vmin"} direction={"column"}>
                <HideWhen routes={headAndFootHiddened}>
                  <Header dict={dict} />
                </HideWhen>
                {/* <Cursor /> */}
                <Box flex={"1 1 auto"}>{children}</Box>
                <HideWhen routes={headAndFootHiddened}>
                  <Footer dict={dict} />
                </HideWhen>
              </Flex>
            </Box>
            <MantineHiddThemeSwitch />
            <DonationSlide />
          </LangProvider>
        </MantineProvider>
      </body>
    </html>
  );
}
