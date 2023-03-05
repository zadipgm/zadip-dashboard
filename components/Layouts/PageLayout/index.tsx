import { ReactElement } from "react";
import Footer from "../../footer/index";
import Header from "../../header/index";
import * as React from "react";
import { ThemeProvider } from "styled-components";
import theme from "global/theme";
import SideNavBar from "components/SideNavBar";
import { Children, LayoutContainer, Wrapper } from "./styled.components";
interface IProps {
  children: ReactElement;
}

const Layout: React.FC<IProps> = ({ children }) => {
  const [initialRenderComplete, setInitialRenderComplete] =
    React.useState(false);

  React.useEffect(() => {
    setInitialRenderComplete(true);
  }, []);

  if (!initialRenderComplete) return <></>;
  return (
    <>
      <ThemeProvider theme={theme}>
        <LayoutContainer>
          <SideNavBar />
          <Wrapper>
            <Header />
            <Children>{children}</Children>
            <Footer />
          </Wrapper>
        </LayoutContainer>
      </ThemeProvider>
    </>
  );
};
export default Layout;
