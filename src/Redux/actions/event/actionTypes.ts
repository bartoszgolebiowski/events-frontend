import { EventResponse } from "./../../../Models/events/types";
import { EventObj } from "../../../Models/events/types";

export const FETCH: string = "FETCH";
export const FETCH_ERROR: string = "FETCH_ERROR";
export const FETCH_LOADING: string = "FETCH_LOADING";
export const APPEND: string = "APPEND";

export type FetchPayload = {
  data: EventResponse[];
};

export type AppendPayload = {
  data: EventResponse;
};

export type ActionsEvent =
  | { type: "FETCH"; payload: FetchPayload }
  | { type: "FETCH_ERROR" }
  | { type: "FETCH_LOADING" }
  | { type: "APPEND"; payload: AppendPayload };

export type EventState = {
  data: EventObj[];
  loading: boolean;
  error: boolean;
};
