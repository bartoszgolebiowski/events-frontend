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

export const BasicInput = ({ register, label, name, type, min }: any) => {
  const classes = useStyles();

  return (
    <div className={classes.inputContainer}>
      <label>{label}</label>
      <Input inputRef={register} type={type} required inputProps={{ name }} />
    </div>
  );
};

export default BasicInput;
