import { combineReducers } from "redux";

import eventReducer from "./event/eventReducer";

const rootReducer = combineReducers({
  eventReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
