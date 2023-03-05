import EmailSvg from "public/icons/emailSvg";
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
import { Text, Title } from "./styled.components";
const ForgotPassWord = () => {
  const router = useRouter();
  const { translations, colors, locale } = useTheme();
  const [email, setEmail] = React.useState("");
  const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value;
    setEmail(value);
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (email) {
      router.push(`${locale}/login`);
    }
    setEmail("");
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
          <Title>{translations?.forgotyourpassword}</Title>
          <Text>{translations?.forgotDescription}</Text>
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
          <Input type="submit" className="login" value={translations?.login} />
          <Hr></Hr>
          <br></br>
          <Link href={`/${locale}/login`}>
            {translations?.alreadyhaveaccount}
          </Link>
        </Form>
      </ContentWrapper>
    </Container>
  );
};
export default ForgotPassWord;
