import { IP, checkStatus } from "../general";
import {
  EventResponse,
  EventObj,
  EventResponseError,
} from "../../Models/events/types";
import fetch from "cross-fetch";

const EVENTS_URL = `${IP}events`;

export const getEvents = (): Promise<EventResponse[]> => {
  return fetch(EVENTS_URL)
    .then(checkStatus("Could not get events list"))
    .then((res) => res.json());
};

const fetchOption = (body: EventObj) => ({
  method: "POST",
  headers: new Headers({
    "Content-Type": "application/json",
  }),
  body: JSON.stringify(body),
});

export const postEvent = (
  event: EventObj
): Promise<EventResponse | EventResponseError> => {
  return fetch(EVENTS_URL, fetchOption(event))
    .then(checkStatus("Could not create single event"))
    .then((res) => res.json());
};

export const parseEvent = (event: EventObj) => ({
  ...event,
  date: `${new Date(event.date).toDateString()} 00:00:00`,
});
