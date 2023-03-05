import axios from "axios";
import Cookies from "js-cookie";
import router from "next/router";

export const Email_sent = async () => {
  try {
    let user_email = Cookies.get("user");
    await axios.post("https://api.zadip.sa/email_sent", {
      email: user_email,
    });
  } catch (err) {
    throw err;
  }
};
