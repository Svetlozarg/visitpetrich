import { Query } from "../apiTypes";
import {
  PostQueryCreatePlaceInput,
  PostQueryUpdatePlaceInput,
} from "./apiPlacesInputs";

export const postQueryCreatePlace = (
  body: PostQueryCreatePlaceInput
): Query => ({
  endpoint: `/place/create`,
  method: "POST",
  variables: body,
});

export const postQueryUpdatePlace = (
  body: PostQueryUpdatePlaceInput,
  placeId: string
): Query => ({
  endpoint: `/place/${placeId}`,
  method: "PUT",
  variables: body,
});

export const postQueryDeletePlace = (placeId: string): Query => ({
  endpoint: `/place/${placeId}`,
  method: "DELETE",
});
