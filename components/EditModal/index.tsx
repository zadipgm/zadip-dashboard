import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import {
  EditFormTitle,
  Form,
  Input,
  SpinnerWrapper,
  SvgWrapper,
  Wrapper,
} from "components/LoginScreen/styled.components";
import EmailSvg from "public/icons/emailSvg";
import NameSvg from "public/icons/nameSvg";
import CircularProgress from "@mui/material/CircularProgress";
import { FormContent } from "components/CreateAccountScreen/styled.components";
import { useTheme } from "styled-components";
import SimpleSnackbar from "components/Snackbar copy";
import axios from "axios";
const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "50%",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
interface User {
  id: string;
  First_Name: string;
  Last_Name: string;
  Email: string;
}
interface IProps {
  open: boolean;
  close: () => void;
  user: User;
  id: number;
}
const EditModal = ({ open, close, user, id }: IProps) => {
  const { colors, translations, isLTR } = useTheme();
  const [email, setEmail] = React.useState(user?.Email as string);
  const [firstName, setFirstName] = React.useState(user?.First_Name as string);
  const [lastName, setLastName] = React.useState(user?.Last_Name as string);
  const [isComplete, setIsComplete] = React.useState(false);
  const [message, setMessage] = React.useState("");
  const [color, setColor] = React.useState("");
  const [opensnck, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await axios.put(`https://api.zadip.sa/update${id}`, {
        First_Name: firstName === "" ? user?.First_Name : firstName,
        Last_Name: lastName === "" ? user?.Last_Name : lastName,
        Email: email === "" ? user?.Email : email,
      });
      setFirstName("");
      setLastName("");
      setEmail("");
      setMessage(
        isLTR ? "User updated successfully!" : "تم تسجيل المستخدم بنجاح!"
      );
      handleClick();
      setIsComplete(true);
      setTimeout(function () {
        setIsComplete(false);
        close();
      }, 5000);
      setColor("#2e7d32");
    } catch (error) {
      if (error) {
        setIsComplete(true);
        setTimeout(function () {
          setIsComplete(false);
        }, 5000);
        setColor("#d32f2f");
        handleClick();
        console.log(error);
        setMessage(
          isLTR
            ? error.response?.data?.message_en
            : error.response?.data?.message_ar
        );
      }
    }
  };
  return (
    <>
      <SimpleSnackbar
        open={opensnck}
        handleClose={handleClose}
        message={message}
        color={color}
      />
      <Modal
        open={open}
        onClose={close}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <EditFormTitle>Edit User Information</EditFormTitle>
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
                  defaultValue={user?.First_Name}
                  onChange={(e) => setFirstName(e.target.value)}
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
                  defaultValue={user?.Last_Name}
                  minLength={2}
                  onChange={(e) => setLastName(e.target.value)}
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
                  defaultValue={user?.Email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Wrapper>
              <SpinnerWrapper>
                <Input
                  type="submit"
                  className={`login login-${isComplete} update`}
                  value={translations?.update}
                />
                {isComplete && (
                  <Box>
                    <CircularProgress />
                  </Box>
                )}
              </SpinnerWrapper>
            </FormContent>
          </Form>
        </Box>
      </Modal>
    </>
  );
};
export default EditModal;
