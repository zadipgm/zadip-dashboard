import * as React from "react";
import { ThemeProvider } from "styled-components";
import theme from "global/theme";
import LoginPage from "pages/login";
const LayoutLogout = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <LoginPage />
      </ThemeProvider>
    </>
  );
};
export default LayoutLogout;
