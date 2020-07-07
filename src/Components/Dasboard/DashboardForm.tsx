import React, { useRef } from "react";
import Card from "@material-ui/core/Card/Card";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Button from "@material-ui/core/Button/Button";
import { useForm } from "react-hook-form";

import BasicInput from "../Common/Form/BasicInput";
import DateInput from "../Common/Form/DateInput";

const useStyles = makeStyles((theme) => ({
  formCard: { margin: "4rem auto", width: "40vw" },
  submitButton: {
    display: "flex",
    justifyContent: "space-between",
    padding: "1rem",
    "& button": { width: "5rem" },
  },
}));

export const DashboardForm = () => {
  const form = useRef<HTMLFormElement | undefined>();
  const classes = useStyles();
  const { register, handleSubmit } = useForm();
  const onSubmit = (data: any, e: React.FormEvent<HTMLFormElement>) =>
    form.current.reset();

  return (
    <Card className={classes.formCard}>
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
          <Button variant="contained" color="secondary" type="reset">
            Reset
          </Button>
          <Button variant="contained" color="primary" type="submit">
            Submit
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default DashboardForm;
