import EmailSvg from "public/icons/emailSvg";
import PassWordSvg from "public/icons/passwordSvg";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import * as React from "react";
import { useTheme } from "styled-components";
import Cookies from "js-cookie";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

import SimpleSnackbar from "components/Snackbar copy";
import {
  Button,
  Container,
  ContentWrapper,
  Form,
  Hr,
  Input,
  Logo,
  LogoWrapper,
  SpinnerWrapper,
  Wrapper,
} from "components/LoginScreen/styled.components";
const VerifyEmail = () => {
  const { isLTR, translations, locale } = useTheme();
  const router = useRouter();
  const [verify_otp, setVerify_Otp] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [color, setColor] = React.useState("");
  const [isComplete, setIsComplete] = React.useState(false);
  const [opensnack, setOpenSnack] = React.useState(false);
  const [otp, setOtp] = React.useState("");
  const [minutes, setMinutes] = React.useState(0);
  const [seconds, setSeconds] = React.useState(30);

  React.useEffect(() => {
    const interval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }

      if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(interval);
        } else {
          setSeconds(30);
          setMinutes(minutes - 1);
        }
      }
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [seconds]);

  const handleOtp = (e: React.ChangeEvent<HTMLInputElement>) => {
    let val = e.target.value;
    setVerify_Otp(val);
  };
  const handleClose = () => {
    setOpenSnack(false);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await axios.post("https://api.zadip.sa/email_verify", {
        Otp: verify_otp,
      });
      setIsComplete(true);
      setOpenSnack(true);
      setTimeout(function () {
        setIsComplete(false);
        setOpenSnack(false);
        router.push(`/${locale}/login`);
      }, 5000);
      setMessage(isLTR ? "Email verified" : "تم التحقق من البريد الإلكتروني");
      setColor("#2e7d32");
    } catch (error: any) {
      setIsComplete(true);
      setOpenSnack(true);
      setTimeout(function () {
        setIsComplete(false);
        setOpenSnack(false);
      }, 5000);
      setColor("#d32f2f");
      console.log(error);
      setMessage(
        isLTR
          ? error.response?.data?.message_en
          : error.response?.data?.message_ar
      );
    }
  };

  const resendOTP = async () => {
    try {
      let user_email = Cookies.get("user");
      await axios.post("https://api.zadip.sa/email_sent", {
        email: user_email,
      });
      setSeconds(30);
      setOpenSnack(true);
      setMessage(isLTR ? "Email verified" : "تم التحقق من البريد الإلكتروني");
      setColor("#2e7d32");
    } catch (error) {
      setOpenSnack(true);
      setColor("#d32f2f");
      console.log(error);
      setMessage(
        isLTR
          ? error.response?.data?.message_en
          : error.response?.data?.message_ar
      );
    }
  };
  return (
    <>
      <SimpleSnackbar
        open={opensnack}
        handleClose={handleClose}
        message={message}
        color={color}
      />
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
          <div>
            <Form onSubmit={(e) => handleSubmit(e)} className={"otp-form"}>
              <Wrapper>
                <Input
                  type="text"
                  required
                  placeholder="Enter OTP for verification"
                  value={verify_otp}
                  onChange={(e) => handleOtp(e)}
                  minLength={4}
                  maxLength={4}
                />
              </Wrapper>
              <SpinnerWrapper>
                <Input
                  type="submit"
                  className={`login login-${isComplete}`}
                  value={translations?.verify}
                />
                {isComplete && (
                  <Box>
                    <CircularProgress />
                  </Box>
                )}
              </SpinnerWrapper>
              <Hr></Hr>
            </Form>
            {seconds > 0 || minutes > 0 ? (
              <p>
                Time Remaining: {minutes < 10 ? `0${minutes}` : minutes}:
                {seconds < 10 ? `0${seconds}` : seconds}
              </p>
            ) : (
              <p>Didnt recieve code?</p>
            )}
            <Button
              className={`login login-${isComplete}`}
              disabled={seconds > 0 || minutes > 0}
              disable={seconds > 0 || minutes > 0}
              onClick={resendOTP}
            >
              Resend OTP
            </Button>
          </div>
        </ContentWrapper>
      </Container>
    </>
  );
};
export default VerifyEmail;
