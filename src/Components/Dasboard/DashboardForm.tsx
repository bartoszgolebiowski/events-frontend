import React, { useRef, useCallback, useState } from "react";
import Card from "@material-ui/core/Card/Card";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Button from "@material-ui/core/Button/Button";

import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";

import BasicInput from "../Common/Form/BasicInput";
import DateInput from "../Common/Form/DateInput";
import {
  EventObj,
  EventResponseError,
  EventResponse,
} from "../../Models/events/types";
import { postEvent, parseEvent } from "../../Services/events";
import { appendEventAction } from "../../Redux/actions/event/fetchActions";
import SnackbarNotification from "../Common/Notification/SnackbarNotification";
import {
  toNotificationObj,
  NotificationObj,
  defaultValueNotificationObj,
} from "../Common/Notification/utils";

const useStyles = makeStyles((theme) => ({
  formCard: { margin: "4rem auto", width: "40vw" },
  submitButton: {
    display: "flex",
    justifyContent: "space-between",
    padding: "1rem",
    "& button": { width: "5rem" },
  },
}));

export const SUCCESS_MESSAGE = "You have added new event!";

export const DashboardForm = () => {
  const dispatch = useDispatch();
  const [notification, setNotification] = useState<NotificationObj>(
    defaultValueNotificationObj
  );
  const form = useRef<HTMLFormElement | undefined>();
  const classes = useStyles();
  const { register, handleSubmit } = useForm();

  const onSubmit = useCallback(
    (data: EventObj, e: React.FormEvent<HTMLFormElement>) => {
      postEvent(parseEvent(data))
        .then((res) => {
          if (Object.keys(res).some((key) => key === "errors")) {
            const message = (res as EventResponseError).errors.join(", ");
            setNotification(toNotificationObj(message, "error"));
            return;
          }

          dispatch(appendEventAction(res as EventResponse));
          setNotification(toNotificationObj(SUCCESS_MESSAGE, "success"));
          form.current.reset();
        })
        .catch((err) => setNotification(toNotificationObj(err, "error")));
    },
    []
  );

  return (
    <>
      <Card className={classes.formCard}>
        <SnackbarNotification
          notification={notification}
          onClose={() => setNotification(defaultValueNotificationObj)}
        />
        <form ref={form} onSubmit={handleSubmit(onSubmit)}>
          <BasicInput
            name="firstName"
            label="First Name"
            register={register}
            type="text"
          />
          <BasicInput
            name="lastName"
            label="Last Name"
            register={register}
            type="text"
          />
          <BasicInput
            name="email"
            label="Email"
            register={register}
            type="email"
          />
          <DateInput name="date" label="Event date" register={register} />
          <div className={classes.submitButton}>
            <Button
              variant="contained"
              color="secondary"
              type="reset"
              data-cy="event-reset"
            >
              Reset
            </Button>
            <Button
              variant="contained"
              color="primary"
              type="submit"
              data-cy="event-submit"
            >
              Submit
            </Button>
          </div>
        </form>
      </Card>
    </>
  );
};

export default DashboardForm;
