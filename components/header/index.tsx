import LogoutSvg from "public/icons/logoutSvg";
import Link from "next/link";
import * as React from "react";
import { useTheme } from "styled-components";
import Cookies from "js-cookie";
import {
  Container,
  LogoutContainer,
  ProfileImageContainer,
} from "./styled.components";
import axios from "axios";
import { useRouter } from "next/router";
const Header = () => {
  const router = useRouter();
  const { locale, translations } = useTheme();
  const handleLogout = async () => {
    let APP_URL =
      process.env.NODE_ENV === "development"
        ? "http://localhost:5000"
        : "https://api.zadip.sa";
    try {
      await axios.delete(`${APP_URL}/logout`);
      router.push(`/${locale}/login`);
      Cookies.remove("isLogedIn");
      window.location.reload();
    } catch (error: any) {
      if (error) {
        console.log(error);
      }
    }
  };
  return (
    <Container>
      <ProfileImageContainer>
        <img
          src="/images/avatar.png"
          alt="profile iamge"
          width={100}
          height={"auto"}
        />{" "}
        <span>zeshan</span>
      </ProfileImageContainer>
      <LogoutContainer onClick={handleLogout}>
        <Link href={``}>
          {translations?.logout}{" "}
          <LogoutSvg width="25px" height="25px" fill="#fff" />
        </Link>
      </LogoutContainer>
    </Container>
  );
};
export default Header;
