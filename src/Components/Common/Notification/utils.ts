export type Color = "success" | "info" | "warning" | "error";

export type NotificationObj = {
  open: boolean;
  severity: Color;
  text: string;
};

export const defaultValueNotificationObj: NotificationObj = {
  open: false,
  severity: "error",
  text: "",
};

export const toNotificationObj = (text: string, severity: Color) => ({
  open: true,
  text,
  severity,
});
