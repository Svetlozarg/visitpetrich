import { Query } from "../apiTypes";

export const getQueryAllEvents: Query = {
  endpoint: `/event/all`,
  method: "GET",
  requireAuth: false,
};

export const getQuerySingleEvent = (eventId: string): Query => ({
  endpoint: `/event/${eventId}`,
  method: "GET",
  requireAuth: false,
});
