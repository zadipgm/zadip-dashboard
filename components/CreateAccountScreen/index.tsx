import EmailSvg from "@/public/icons/emailSvg";
import NameSvg from "@/public/icons/nameSvg";
import PassWordSvg from "@/public/icons/passwordSvg";
import Link from "next/link";
import { useRouter } from "next/router";
import * as React from "react";
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
import { FormContent } from "./styled.components";
const CreateAccountScreen = () => {
  const router = useRouter();
  const { locale, colors, translations } = useTheme();
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value;
    setEmail(value);
  };
  const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value;
    setPassword(value);
  };
  const handleFirstName = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value;
    setPassword(value);
  };
  const handleLastName = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value;
    setPassword(value);
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (email && password) {
      router.push(`${locale}/`);
    }
    setEmail("");
    setPassword("");
  };
  return (
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
                onChange={(e) => handlePassword(e)}
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
  );
};
export default CreateAccountScreen;
