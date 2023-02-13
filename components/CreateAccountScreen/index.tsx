import EmailSvg from "@/public/icons/emailSvg";
import NameSvg from "@/public/icons/nameSvg";
import PassWordSvg from "@/public/icons/passwordSvg";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import * as React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useTheme } from "styled-components";
import {
  Container,
  ContentWrapper,
  Form,
  Hr,
  Input,
  Logo,
  LogoWrapper,
  SvgWrapper,
  Wrapper,
} from "../LoginScreen/styled.components";
import SnackbarAlert from "../Snackbar";
import { FormContent } from "./styled.components";
const CreateAccountScreen = () => {
  const router = useRouter();
  const { locale, colors, translations } = useTheme();
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");
  const [isSuccessfulNoteAdded, setIsSuccessfulNoteAdded] =
    React.useState(false);
  const [severity, setSeverity] = React.useState("success");

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
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/register", {
        First_Name: firstName,
        Last_Name: lastName,
        Email: email,
        Password: password,
        Confirm_Password: confirmPassword,
      });
      setFirstName("");
      setLastName("");
      setPassword("");
      setConfirmPassword("");
      setEmail("");
      setIsSuccessfulNoteAdded(true);
      setSeverity("success");
      router.push(`/${locale}/login`);
    } catch (error: any) {
      if (error) {
        setSeverity("error");
        console.log(error);
      }
    }
  };
  return (
    <>
      <SnackbarAlert
        severity={"success"}
        autoHideDuration={3000}
        text={"register"}
        onCloseSnackbarCb={() => setIsSuccessfulNoteAdded(false)}
        open={isSuccessfulNoteAdded}
      />
      <Container>
        <ContentWrapper className={"create-account"}>
          <LogoWrapper className={"create-account"}>
            <Logo
              src="/images/zadiplogo.png"
              alt="logo"
              width={200}
              height={"100%"}
            />
          </LogoWrapper>
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
                  <EmailSvg
                    width="25px"
                    height="25px"
                    fill={colors.lightBlue}
                  />
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
            <Input
              type="submit"
              className="login"
              value={translations?.register}
            />
            <Hr></Hr>
            <Link href={`/${locale}/forgot_password`}>
              {translations?.forgotpassword}
            </Link>
            <br></br>
            <Link href={`/${locale}/login`}>
              {translations?.alreadyhaveaccount}
            </Link>
          </Form>
        </ContentWrapper>
      </Container>
    </>
  );
};
export default CreateAccountScreen;
