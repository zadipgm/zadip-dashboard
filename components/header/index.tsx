import LogoutSvg from "public/icons/logoutSvg";
import Link from "next/link";
import * as React from "react";
import { useTheme } from "styled-components";
import Cookies from "js-cookie";
import {
  ArrowWrapper,
  Container,
  LogoutContainer,
  ProfileImageContainer,
  ProfileList,
  ProfileListItems,
  WelcomeNote,
} from "./styled.components";
import axios from "axios";
import { useRouter } from "next/router";
import ArrowDown from "public/icons/arrowDownSvg";
import UsersSvg from "public/icons/usersSvg";
const Header = () => {
  const router = useRouter();
  const wrapperRef = React.useRef(null);
  const { locale, translations, isLTR, colors } = useTheme();
  const [users, setUsers] = React.useState([]);
  const [open, setOpen] = React.useState(false);
  let APP_URL =
    process.env.NODE_ENV === "development"
      ? "http://localhost:5000"
      : "https://api.zadip.sa";
  const handleLogout = async () => {
    try {
      await axios.delete(`${APP_URL}/logout`);
      router.push(`/${locale}/login`);
      Cookies.remove("isLogedIn");
      // window.location.reload();
    } catch (error: any) {
      if (error) {
        console.log(error);
      }
    }
  };
  const getUsers = React.useCallback(async () => {
    try {
      await axios
        .get(`${APP_URL}/users`)
        .then((response) => setUsers(response.data));
    } catch (err) {
      console.log(err);
    }
  }, [users]);
  React.useEffect(() => {
    getUsers();
  }, []);

  let userFilter =
    users && users.filter((user) => user.Email === Cookies.get("email"));
  console.log(userFilter);
  const ToggleClasses = (event) => {
    setOpen(!open);
  };
  const handleClickOutside = (event) => {
    if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
      setTimeout(function () {
        setOpen(false);
      }, 400);
    }
  };
  React.useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);
  return (
    <>
      <Container>
        <ProfileImageContainer>
          <img
            src="/images/avatar.png"
            alt="profile iamge"
            width={100}
            height={"auto"}
          />{" "}
          <ArrowWrapper onClick={ToggleClasses} ref={wrapperRef}>
            <ArrowDown fill="#fff" />
            <span>{userFilter && userFilter[0]?.First_Name}</span>
          </ArrowWrapper>
          {open && (
            <ProfileList>
              <Link href={`/${locale}/profile`}>
                <UsersSvg />
                <ProfileListItems>
                  {isLTR ? "My Profile" : "الملف الالكتروني"}
                </ProfileListItems>
              </Link>
              <Link href={``} onClick={handleLogout}>
                <LogoutSvg fill={colors.darkBlue} />
                <ProfileListItems>{translations.logout}</ProfileListItems>
              </Link>
            </ProfileList>
          )}
        </ProfileImageContainer>
        <LogoutContainer onClick={handleLogout}>
          <Link href={``}>
            {translations?.logout}{" "}
            <LogoutSvg width="25px" height="25px" fill="#fff" />
          </Link>
        </LogoutContainer>
      </Container>
      <WelcomeNote>
        <h2>
          {translations.welcomeNote} {userFilter && userFilter[0]?.First_Name}
        </h2>
      </WelcomeNote>
    </>
  );
};
export default Header;
