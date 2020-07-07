import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Card from "@material-ui/core/Card/Card";
import CircularProgress from "@material-ui/core/CircularProgress/CircularProgress";
import List from "@material-ui/core/List/List";
import ListItemText from "@material-ui/core/ListItemText/ListItemText";
import { useSelector } from "react-redux";

import { RootState } from "../../Redux/reducers/rootReducer";

const useStyles = makeStyles((theme) => ({
  card: {
    margin: "4rem auto",
    width: "40vw",
    maxHeight: "40vh",
    overflowY: "auto",
  },
  loading: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "40vh",
  },
  error: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    height: "40vh",
    color: theme.palette.error.main,
  },
  empty: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    height: "40vh",
    color: theme.palette.primary.dark,
  },
  list: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    "& div": { margin: "1rem" },
  },
}));

const items: any[] = [
  {
    id: "1",
    firstName: "Jan",
    lastName: "Kowalski",
    email: "jan.kowalski@gmail.com",
    date: new Date(),
  },
  {
    id: "1",
    firstName: "Jan",
    lastName: "Kowalski",
    email: "jan.kowalski@gmail.com",
    date: new Date(),
  },
  {
    id: "1",
    firstName: "Jan",
    lastName: "Kowalski",
    email: "jan.kowalski@gmail.com",
    date: new Date(),
  },
  {
    id: "1",
    firstName: "Jan",
    lastName: "Kowalski",
    email: "jan.kowalski@gmail.com",
    date: new Date(),
  },
  {
    id: "1",
    firstName: "Jan",
    lastName: "Kowalski",
    email: "jan.kowalski@gmail.com",
    date: new Date(),
  },
  {
    id: "1",
    firstName: "Adam",
    lastName: "Nowak",
    email: "adam.nowak@gmail.com",
    date: new Date(),
  },
  {
    id: "1",
    firstName: "John",
    lastName: "Snow",
    email: "john.snow@gmail.com",
    date: new Date(),
  },
];

export const DashboardList = () => {
  const classes = useStyles();
  const { loading, error, data } = useSelector(
    (state: RootState) => state.eventReducer
  );

  if (loading)
    return (
      <Card className={classes.card}>
        <div className={classes.loading}>
          <CircularProgress size="10rem" />
        </div>
      </Card>
    );

  if (error)
    return (
      <Card className={classes.card}>
        <div className={classes.error}>
          <p>Error while fetching event list, please refresh</p>
          <a href=".">Refresh</a>
        </div>
      </Card>
    );

  if (data.length === 0)
    return (
      <Card className={classes.card}>
        <div className={classes.empty}>
          <p>Currently there is no events available</p>
        </div>
      </Card>
    );

  return (
    <Card className={classes.card}>
      <List className={classes.list}>
        {data.map((item) => (
          <ListItemText
            key={item.id}
            primary={`${item.firstName} ${item.lastName}`}
            secondary={`${item.email} ${item.date.toLocaleDateString()}`}
          />
        ))}
      </List>
    </Card>
  );
};

export default DashboardList;
