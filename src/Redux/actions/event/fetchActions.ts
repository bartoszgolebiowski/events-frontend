import { AnyAction, Dispatch } from "redux";
import { FETCH_ERROR, FETCH, FETCH_LOADING } from "./actionTypes";

const saveEventsAction = (data: any) => ({
  type: FETCH,
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
