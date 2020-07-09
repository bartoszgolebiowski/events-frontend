import React from "react";
import Input from "@material-ui/core/Input/Input";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  inputContainer: {
    display: "flex",
    flexDirection: "column",
    margin: "1rem",
  },
}));

export const DateInput = ({ register, label, name }: any) => {
  const classes = useStyles();
  return (
    <div className={classes.inputContainer}>
      <label>{label}</label>
      <Input
        inputRef={register}
        type="date"
        required
        inputProps={{ name, min: new Date().toISOString().split("T")[0] }}
      />
    </div>
  );
};

export default DateInput;
