import "../styles/globals.css";
import * as React from "react";
import type { ReactElement, ReactNode } from "react";
import type { NextPage } from "next";
import type { AppContext, AppProps } from "next/app";
import Head from "next/head";
import theme from "../global/theme";
import { ThemeProvider } from "styled-components";
import Cookies from "js-cookie";
import { useRouter } from "next/router";

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};
interface Props extends AppProps {
  translations?:
    | typeof import("../locales/ar").default
    | typeof import("../locales/en").default;
  locale: string;
}
type AppPropsWithLayout = Props & {
  Component: NextPageWithLayout;
};
const MyApp = ({
  Component,
  pageProps,
  translations,
  locale,
}: AppPropsWithLayout) => {
  const router = useRouter();
  const getLayout = Component.getLayout ?? ((page) => page);
  // @ts-ignore
  theme.translations = translations;
  theme.isLTR = locale === "en-US" || locale === "en";
  theme.isRTL = locale === "ar";
  theme.locale = locale === "en-US" || locale === "en" ? "en" : "ar";
  React.useEffect(() => {
    if (window?.innerWidth <= 600) {
      theme.device = "mobile";
    }
    if (window?.innerWidth >= 600 && window?.innerWidth <= 1024) {
      theme.device = "tablet";
    }
    if (window?.innerWidth >= 1024) {
      theme.device = "desktop";
    }
  }, []);

  React.useEffect(() => {
    let cookies = Cookies.get("isLogedIn");
    if (router.pathname === "/login") {
      if (cookies === "true") {
        router.push("/");
      }
    } else if (router.pathname.startsWith("/")) {
      if (cookies !== "true") {
        router.push("/login");
      }
    }
  }, []);
  return getLayout(
    <>
      <Head>
        <meta
          name="viewport"
          key="viewport"
          content="width=device-width, height=device-height ,initial-scale=1.0, shrink-to-fit=no"
        />

        <title>مجموعة زاد المعلومات | ZADIP GROUP LTD</title>
      </Head>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
};
MyApp.getInitialProps = async ({ router }: AppContext) => {
  const { locale } = router;
  const { default: arLocalStrings } = await import("../locales/ar");
  const { default: enLocalStrings } = await import("../locales/en");
  const translations = locale === "ar" ? arLocalStrings : enLocalStrings;
  return { translations, locale };
};
export default MyApp;
