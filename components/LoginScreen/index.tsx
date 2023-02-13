import EmailSvg from "@/public/icons/emailSvg";
import PassWordSvg from "@/public/icons/passwordSvg";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import * as React from "react";
import { useTheme } from "styled-components";
import ButtonComponent from "../ReuseableComponents/Button";
import {
  Container,
  Wrapper,
  Input,
  Form,
  Logo,
  LogoWrapper,
  ContentWrapper,
  Hr,
  SvgWrapper,
} from "./styled.components";
const Login = () => {
  const router = useRouter();
  const { locale, colors, translations } = useTheme();
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value;
    setEmail(value);
  };
  const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value;
    setPassword(value);
  };
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("here is data", email, password);
    try {
      await axios.post("http://localhost:5000/login", {
        Email: email,
        Password: password,
      });
    } catch (error) {
      console.log(error);
    }
    setPassword("");
    setEmail("");
    router.push(`/${locale}/`);
  };
  return (
    <Container>
      <ContentWrapper>
        <LogoWrapper>
          <Logo
            src="/images/zadiplogo.png"
            alt="logo"
            width={200}
            height={"100%"}
          />
        </LogoWrapper>
        <Form onSubmit={(e) => handleSubmit(e)}>
          <Wrapper>
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
          <Wrapper>
            <SvgWrapper>
              <PassWordSvg width="25px" height="25px" fill={colors.lightBlue} />
            </SvgWrapper>
            <Input
              type="text"
              placeholder={translations?.password}
              required
              onChange={(e) => handlePassword(e)}
            />
          </Wrapper>
          <Wrapper className="checkbox">
            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
            <label> {translations?.rememberMe}</label>
          </Wrapper>
          <Input type="submit" className="login" value={translations?.login} />
          <Hr></Hr>
          <Link href={`/${locale}/forgot_password`}>
            {translations?.forgotpassword}
          </Link>
          <br></br>
          <Link href={`/${locale}/create_account`}>
            {translations?.createanAccount}
          </Link>
        </Form>
      </ContentWrapper>
    </Container>
  );
};
export default Login;
