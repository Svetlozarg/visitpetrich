import { Query } from "../apiTypes";

export const getQueryAllPlaces: Query = {
  endpoint: `/place/all`,
  method: "GET",
  requireAuth: false,
};

export const getQuerySinglePlace = (placeId: string): Query => ({
  endpoint: `/place/${placeId}`,
  method: "GET",
  requireAuth: false,
});
