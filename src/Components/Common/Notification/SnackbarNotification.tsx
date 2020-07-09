import React from "react";
import Snackbar from "@material-ui/core/Snackbar/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import { NotificationObj } from "./utils";

type SnackbarNotificationType = {
  notification: NotificationObj;
  onClose: (event: React.SyntheticEvent<any>) => void;
};

export const SnackbarNotification = ({
  notification,
  onClose,
}: SnackbarNotificationType) => {
  return (
    <Snackbar
      open={notification.open}
      autoHideDuration={999999}
      onClose={onClose}
    >
      <MuiAlert
        elevation={6}
        variant="filled"
        onClose={onClose}
        severity={notification.severity}
      >
        {notification.text}
      </MuiAlert>
    </Snackbar>
  );
};

export default SnackbarNotification;
