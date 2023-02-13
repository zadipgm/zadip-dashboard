import DashboardSvg from "@/public/icons/dashboard";
import FormsSvg from "@/public/icons/formsSvg";
import Link from "next/link";
import * as React from "react";
import { useTheme } from "styled-components";
import { Container, List, ListItems, LogoContainer } from "./styled.components";
const SideNavBar = () => {
  const { locale, translations } = useTheme();
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
            <DashboardSvg width="25px" height="25px" fill="#fff" />{" "}
            {translations?.dashboard}
          </Link>
        </ListItems>
        <ListItems>
          <Link href={`/${locale}/forms_details`}>
            {" "}
            <FormsSvg width="25px" height="25px" fill="#fff" />
            {translations?.formsData}
          </Link>
        </ListItems>
        <ListItems>
          <Link href={`/${locale}/head_tag`}>
            {" "}
            <FormsSvg width="25px" height="25px" fill="#fff" />
            {"Head Tag"}
          </Link>
        </ListItems>
      </List>
    </Container>
  );
};
export default SideNavBar;
