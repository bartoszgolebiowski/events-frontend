export const FETCH: string = "FETCH";
export const FETCH_ERROR: string = "FETCH_ERROR";
export const FETCH_LOADING: string = "FETCH_LOADING";

export type FetchPayload = {
  data: any[];
};

export type ActionsEvent =
  | { type: "FETCH"; payload: FetchPayload }
  | { type: "FETCH_ERROR" }
  | { type: "FETCH_LOADING" };

export type EventState = {
  data: any[];
  loading: boolean;
  error: boolean;
};
