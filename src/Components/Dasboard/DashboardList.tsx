import React, { useEffect } from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Card from "@material-ui/core/Card/Card";
import CircularProgress from "@material-ui/core/CircularProgress/CircularProgress";
import List from "@material-ui/core/List/List";
import ListItemText from "@material-ui/core/ListItemText/ListItemText";
import { useSelector, useDispatch } from "react-redux";

import { RootState } from "../../Redux/reducers/rootReducer";
import { getEvents } from "../../Services/events";
import { fetchEventsAction } from "../../Redux/actions/event/fetchActions";

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

export const DashboardList = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { loading, error, data } = useSelector(
    (state: RootState) => state.eventReducer
  );

  useEffect(() => {
    dispatch(fetchEventsAction(() => getEvents()));
  }, []);

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
        {data.map((item, index) => (
          <ListItemText
            data-cy={`event-${index}`}
            key={item.id}
            primary={`${item.firstName} ${item.lastName}`}
            secondary={`${item.email} ${new Date(
              item.date
            ).toLocaleDateString()}`}
          />
        ))}
      </List>
    </Card>
  );
};

export default DashboardList;
