
import { DefaultTheme } from "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    translations?:
    | typeof import("../locales/ar").default
    | typeof import("../locales/en").default;
    direction: "rtl" | "ltr";
    isLTR: boolean;
    user_email: string,
    device: "mobile" | "desktop" | "tablet";
    isRTL: boolean;
    ShowSnackbar?: (state: boolean, message?: string, type?: string) => void;
    locale: "ar" | "en-US" | "en";
    colors: {
      themeColor: string;
      lightThemeColor: string
      darkBlue: string;
      lightbackground: string;
      lightBlue: string;
      headerLightColor: string
      white: string
      black: string
    };
  }
}

const defaultTheme: DefaultTheme = {

  locale: "en",
  direction: "rtl",
  device: "mobile",
  isLTR: false,
  isRTL: true,
  user_email: "",
  colors: {
    themeColor: "linear-gradient(-49deg,#09589d 22%, #56ceff);",
    lightThemeColor: "linear-gradient(-49deg,#09589d29 22%,#56ceff33);",
    headerLightColor: "linear-gradient(-49deg,#09589d29 22%,#56ceff33);",
    lightbackground: "linear-gradient(-49deg,#09589d61 22%,#56ceffa3);",
    darkBlue: "#044783",
    lightBlue: "#0969a5d6",
    white: "#fff",
    black: "#000"
  }
};

export default defaultTheme;
