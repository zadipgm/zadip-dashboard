import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import { FC, ReactNode, SyntheticEvent, useEffect, useState } from "react";
import { useTheme } from "styled-components";

interface IProps {
  text: string;
  onCloseSnackbarCb?: (evt?: Event | SyntheticEvent<any, Event>) => void;
  open: boolean;
  autoHideDuration: number;
  icon?: ReactNode;
  severity: string;
}

const SnackbarAlert: FC<IProps> = ({
  onCloseSnackbarCb,
  open,
  text,
  autoHideDuration,
  icon,
  severity,
}) => {
  let bgColor: string;
  const [heightOffset, setHeightOffset] = useState(0);
  const { device } = useTheme();

  useEffect(() => {
    if (device == "desktop" && document) {
      const header = document.querySelector("header")?.clientHeight;
      const nav = document.querySelector("nav")?.clientHeight;
      setHeightOffset(400);
    }
  }, []);

  switch (severity) {
    case "error":
      bgColor = "#ff2626";
      break;
    case "info":
      bgColor = "#216fb8";
      break;
    case "warning":
      bgColor = "#fff8ac";
      break;
    case "success":
      bgColor = "#87b821";
      break;
  }

  return (
    <Snackbar
      sx={{
        width: `${device == "mobile" ? "100%" : "1200px"} `,
        top: `${device == "mobile" ? "0" : `${heightOffset}px !important`}`,
        right: 0,
        left: 0,
      }}
      autoHideDuration={autoHideDuration}
      onClick={(evt: { preventDefault: () => void }) => {
        evt.preventDefault();
      }}
      onClose={onCloseSnackbarCb}
      anchorOrigin={{ vertical: "top", horizontal: "center" }}
      open={open}
    >
      <Alert
        sx={{ background: `#87b821 `, color: "white", width: "100%" }}
        icon={icon || ""}
        variant="filled"
      >
        <span style={{ margin: "0 10px" }}>{text}</span>
      </Alert>
    </Snackbar>
  );
};

export default SnackbarAlert;
