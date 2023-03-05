import axios from "axios";

export const Otp_Generated = async () => {
  try {
    await axios.get("https://api.zadip.sa/OtpGenerated");
  } catch (err) {
    throw err;
  }
};
