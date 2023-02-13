import axios from "axios";
import * as React from "react";
import { useTheme } from "styled-components";
import {
  Container,
  Title,
  Form,
  FormWrapper,
  Input,
  Label,
  Submit,
  TextArea,
  Wrapper,
} from "./styled.components";
const HeadTagComponent = () => {
  const { isLTR } = useTheme();
  const [pageTitle, setPageTitle] = React.useState("");
  const [metaName, setMetaName] = React.useState("");
  const [metaDescription, setMetaDescription] = React.useState("");
  const [pageName, setPageName] = React.useState("");
  const handelSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/sethead", {
        Page_Title: pageTitle,
        Meta_Name: metaName,
        Meta_Description: metaDescription,
        Page_Name: pageName,
      });
      setPageTitle("");
      setMetaName("");
      setMetaDescription("");
      setPageName("");
    } catch (error: any) {
      if (error) {
        console.log(error);
      }
    }
  };
  return (
    <Container>
      <Title>{isLTR ? "Zadip Head Tag" : "صفحة بيانات زاد"}</Title>
      <Form onSubmit={(e) => handelSubmit(e)}>
        <FormWrapper>
          <Wrapper>
            <Label htmlFor="title">
              {isLTR ? "Page Title" : "عنوان الصفحة"}
            </Label>
            <Input
              type="text"
              required
              value={pageTitle}
              placeholder={
                isLTR ? "Enter page title..." : "أدخل عنوان الصفحة ..."
              }
              onChange={(e) => setPageTitle(e.target.value)}
            />
          </Wrapper>
          <Wrapper>
            <Label htmlFor="Meta Name">
              {isLTR ? "Meta Name" : "اسم ميتا"}
            </Label>
            <Input
              type="text"
              required
              value={metaName}
              placeholder={
                isLTR ? "Enter meta name..." : "أدخل اسم التعريف ..."
              }
              onChange={(e) => setMetaName(e.target.value)}
            />
          </Wrapper>
          <Wrapper>
            <Label htmlFor="Meta Description">
              {isLTR ? "Meta Description" : "ميتا الوصف"}
            </Label>
            <TextArea
              required
              value={metaDescription}
              placeholder={
                isLTR ? "Enter meta description..." : "أدخل وصف التعريف ..."
              }
              onChange={(e) => setMetaDescription(e.target.value)}
            />
          </Wrapper>
          <Wrapper>
            <Label htmlFor="page">{isLTR ? "Page Name" : "اسم الصفحة"}</Label>
            <Input
              type="text"
              required
              value={pageName}
              placeholder={isLTR ? "Enter page name..." : "أدخل اسم الصفحة ..."}
              onChange={(e) => setPageName(e.target.value)}
            />
          </Wrapper>
        </FormWrapper>
        <Submit type={"submit"} value={isLTR ? "submit" : "قدم"} />
      </Form>
    </Container>
  );
};
export default HeadTagComponent;
