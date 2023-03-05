import EmailSvg from "public/icons/emailSvg";
import NameSvg from "public/icons/nameSvg";
import PassWordSvg from "public/icons/passwordSvg";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import * as React from "react";
import "react-toastify/dist/ReactToastify.css";
import { useTheme } from "styled-components";
import Cookies from "js-cookie";
import {
  ContainerUser,
  Form,
  Input,
  SpinnerWrapper,
  SvgWrapper,
  UserSelect,
  UserTitle,
  Wrapper,
} from "../LoginScreen/styled.components";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import { FormContent } from "./styled.components";
import SimpleSnackbar from "components/Snackbar copy";
import { Email_sent } from "hooks/email_sent";
import { Otp_Generated } from "hooks/otp_generated";
import UsersSvg from "public/icons/usersSvg";

const CreateAccountScreen = () => {
  const router = useRouter();
  const { locale, colors, translations, isLTR } = useTheme();
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [color, setColor] = React.useState("");
  const [isComplete, setIsComplete] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const [role, setRole] = React.useState("");

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value;
    setEmail(value);
  };

  const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value;
    setPassword(value);
  };

  const handleConfirmPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value;
    setConfirmPassword(value);
  };

  const handleFirstName = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value;
    setFirstName(value);
  };

  const handleLastName = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value;
    setLastName(value);
  };
  const handleRole = (e: React.ChangeEvent<HTMLSelectElement>) => {
    let value = e.target.value;
    setRole(value);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await axios.post("https://api.zadip.sa/register", {
        First_Name: firstName,
        Last_Name: lastName,
        Email: email,
        Password: password,
        Confirm_Password: confirmPassword,
        Role: role,
      });
      setFirstName("");
      setLastName("");
      setPassword("");
      setConfirmPassword("");
      setEmail("");
      handleClick();
      setMessage(
        isLTR ? "User Added successfully!" : "تم تسجيل المستخدم بنجاح!"
      );
      setIsComplete(true);
      setTimeout(function () {
        setIsComplete(false);
      }, 5000);
      setColor("#2e7d32");
    } catch (error) {
      if (error) {
        handleClick();
        setIsComplete(true);
        setTimeout(function () {
          setIsComplete(false);
        }, 5000);
        setColor("#d32f2f");
        console.log(error);
        setMessage(
          isLTR
            ? error.response?.data?.message_en
            : error.response?.data?.message_ar
        );
      }
    }
  };
  console.log("here is role", role);
  return (
    <>
      <SimpleSnackbar
        open={open}
        handleClose={handleClose}
        message={message}
        color={color}
      />
      <UserTitle>{isLTR ? "Create User!" : "إنشاء المستخدم"}</UserTitle>
      <ContainerUser>
        <Form onSubmit={(e) => handleSubmit(e)} className={"create-account"}>
          <FormContent>
            <Wrapper className={"create-account"}>
              <SvgWrapper>
                <NameSvg width="25px" height="25px" fill={colors.lightBlue} />
              </SvgWrapper>
              <Input
                type="text"
                placeholder={translations?.firstName}
                required
                value={firstName}
                onChange={(e) => handleFirstName(e)}
                minLength={2}
              />
            </Wrapper>
            <Wrapper className={"create-account"}>
              <SvgWrapper>
                <NameSvg width="25px" height="25px" fill={colors.lightBlue} />
              </SvgWrapper>
              <Input
                type="text"
                placeholder={translations?.lastName}
                required
                value={lastName}
                minLength={2}
                onChange={(e) => handleLastName(e)}
              />
            </Wrapper>
            <Wrapper className={"create-account"}>
              <SvgWrapper>
                <EmailSvg width="25px" height="25px" fill={colors.lightBlue} />
              </SvgWrapper>
              <Input
                type="email"
                placeholder={translations?.enterEmail}
                required
                value={email}
                onChange={(e) => handleEmail(e)}
              />
            </Wrapper>
            <Wrapper className={"create-account"}>
              <SvgWrapper>
                <UsersSvg width="25px" height="25px" fill={colors.lightBlue} />
              </SvgWrapper>
              <UserSelect value={role} onChange={(e) => handleRole(e)} required>
                <option value={""} selected disabled hidden>
                  {isLTR ? "Select Role" : "حدد الدور"}
                </option>
                <option value={"admin"}>{isLTR ? "Admin" : "مدير"}</option>
                <option value={"user"}>{isLTR ? "User" : "مستخدم"}</option>
              </UserSelect>
            </Wrapper>
            <Wrapper className={"create-account"}>
              <SvgWrapper>
                <PassWordSvg
                  width="25px"
                  height="25px"
                  fill={colors.lightBlue}
                />
              </SvgWrapper>
              <Input
                type="text"
                placeholder={translations?.password}
                required
                value={password}
                onChange={(e) => handlePassword(e)}
              />
            </Wrapper>

            <Wrapper className={"create-account"}>
              <SvgWrapper>
                <PassWordSvg
                  width="25px"
                  height="25px"
                  fill={colors.lightBlue}
                />
              </SvgWrapper>
              <Input
                type="text"
                placeholder={translations?.repeatPassword}
                required
                value={confirmPassword}
                onChange={(e) => handleConfirmPassword(e)}
              />
            </Wrapper>
          </FormContent>
          <SpinnerWrapper>
            <Input
              type="submit"
              className={`login login-${isComplete}`}
              value={translations?.register}
            />
            {isComplete && (
              <Box>
                <CircularProgress />
              </Box>
            )}
          </SpinnerWrapper>
        </Form>
      </ContainerUser>
    </>
  );
};
export default CreateAccountScreen;
