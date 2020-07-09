import React from "react";
import { Provider } from "react-redux";
import CssBaseline from "@material-ui/core/CssBaseline/CssBaseline";

import store from "./Redux/store/store";
import Dashboard from "./Containers/Dashboard/Dashboard";

export const Root = () => {
  return (
    <Provider store={store}>
      <CssBaseline />
      <Dashboard />
    </Provider>
  );
};

export default Root;
