import LogoutSvg from "@/public/icons/logoutSvg";
import Link from "next/link";
import * as React from "react";
import { useTheme } from "styled-components";
import {
  Container,
  List,
  ListItems,
  LogoutContainer,
  ProfileImageContainer,
} from "./styled.components";
const Header = () => {
  const { locale } = useTheme();
  return (
    <Container>
      <ProfileImageContainer>
        <img
          src="/images/zeshan.jpeg"
          alt="profile iamge"
          width={100}
          height={"auto"}
        />{" "}
        <span>zeshan</span>
        {/* <List>
          <ListItems>Profile</ListItems>
          <ListItems>Setting</ListItems>
        </List> */}
      </ProfileImageContainer>
      <LogoutContainer>
        <Link href={`/${locale}/login`}>
          Logout <LogoutSvg width="25px" height="25px" fill="#fff" />
        </Link>
      </LogoutContainer>
    </Container>
  );
};
export default Header;
