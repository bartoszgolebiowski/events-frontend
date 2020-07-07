import { EventState, ActionsEvent } from "../../actions/events/actionTypes";

const initialState: EventState = {
  data: [],
  loading: true,
  error: false,
};

const reducer = (state = initialState, action: ActionsEvent) => {
  switch (action.type) {
    case "FETCH": {
      return {
        ...state,
        data: action.payload.data,
        loading: false,
        error: false,
      };
    }

    case "FETCH_LOADING": {
      return {
        ...state,
        loading: true,
      };
    }
    case "FETCH_ERROR": {
      return {
        ...state,
        loading: false,
        error: true,
      };
    }
    default:
      return state;
  }
};

export type HistoryReducer = ReturnType<typeof reducer>;
export default reducer;
