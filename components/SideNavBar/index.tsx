import DashboardSvg from "public/icons/dashboard";
import FormsSvg from "public/icons/formsSvg";
import Link from "next/link";
import * as React from "react";
import { useTheme } from "styled-components";
import {
  Container,
  LangButton,
  Langwrapper,
  List,
  ListItems,
  LogoContainer,
} from "./styled.components";
import HomeSvg from "public/icons/homeSvg";
import UsersSvg from "public/icons/usersSvg";
import { useRouter } from "next/router";
import LangSvg from "public/icons/langsvg";
const SideNavBar = () => {
  const { locale, translations } = useTheme();
  const router = useRouter();
  const changeLocale = React.useCallback(() => {
    if (locale === "en-US" || locale === "en") {
      router.push(`${router.asPath}`, `${router.asPath}`, {
        locale: "en",
      });
    } else {
      router.push(`${router.asPath}`, `${router.asPath}`, { locale: "ar" });
    }
  }, [locale]);
  return (
    <Container>
      <LogoContainer>
        <Link href={"/"}>
          <img
            src="/images/zadiplogo.png"
            alt="logo"
            width={150}
            height={"100%"}
          />
        </Link>
      </LogoContainer>
      <List>
        <ListItems>
          <Link href={"/"}>
            <HomeSvg width="25px" height="25px" fill="#fff" />{" "}
            {translations?.dashboard}
          </Link>
        </ListItems>
        <ListItems>
          {locale === "ar" ? (
            <Langwrapper>
              <LangSvg width="25px" height="25px" fill="#fff" />
              <LangButton
                href={`/en${router.asPath}`}
                onClick={() => changeLocale()}
              >
                English
              </LangButton>
            </Langwrapper>
          ) : (
            <Langwrapper>
              <LangSvg width="25px" height="25px" fill="#fff" />
              <LangButton
                href={`/ar${router.asPath}`}
                onClick={() => changeLocale()}
              >
                العربية
              </LangButton>
            </Langwrapper>
          )}
        </ListItems>
        <ListItems>
          <Link href={`/${locale}/head_tag`}>
            {" "}
            <FormsSvg width="25px" height="25px" fill="#fff" />
            {"Head Tag"}
          </Link>
        </ListItems>
        <ListItems>
          <Link href={`/${locale}/users`}>
            {" "}
            <UsersSvg width="25px" height="25px" fill="#fff" />
            {"Create User"}
          </Link>
        </ListItems>
        <ListItems>
          <Link href={`/${locale}/all_users`}>
            {" "}
            <UsersSvg width="25px" height="25px" fill="#fff" />
            {"All Users"}
          </Link>
        </ListItems>
      </List>
    </Container>
  );
};
export default SideNavBar;
