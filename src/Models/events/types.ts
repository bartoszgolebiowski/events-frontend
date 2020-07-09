export type EventResponse = {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  date: string;
  __v: number;
};

export type EventResponseError = {
  errors: string[];
};

export type EventObj = {
  firstName: string;
  lastName: string;
  email: string;
  date: string;
};

export const parseEventResponse = (event: EventResponse): EventObj => ({
  firstName: event.firstName,
  lastName: event.lastName,
  email: event.email,
  date: event.date,
});
