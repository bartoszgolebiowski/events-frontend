import { AnyAction, Dispatch } from "redux";
import { FETCH_ERROR, FETCH, FETCH_LOADING, APPEND } from "./actionTypes";
import { EventObj, EventResponse } from "../../../Models/events/types";

const saveEventsAction = (data: EventObj[]) => ({
  type: FETCH,
  payload: {
    data,
  },
});

export const appendEventAction = (data: EventResponse) => ({
  type: APPEND,
  payload: {
    data,
  },
});

const fetchEventsErrorAction = () => ({
  type: FETCH_ERROR,
});

const fetchEventsLoadingAction = () => ({
  type: FETCH_LOADING,
});

export const fetchEventsAction = (fetchData: Function) => (
  dispatch: Dispatch<AnyAction>
) => {
  dispatch(fetchEventsLoadingAction());
  return fetchData()
    .then((res: any) => dispatch(saveEventsAction(res)))
    .catch((err: any) => dispatch(fetchEventsErrorAction()));
};
