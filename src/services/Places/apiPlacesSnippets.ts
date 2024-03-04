export type Place = {
  _id: string;
  name: string;
  location: string;
  url: string;
  image: string;
  category: "hotel" | "house" | "hut";
  createdAt: Date;
  updatedAt: Date;
};

export type GetQueryAllPlacesSnippet = {
  success: boolean;
  data: Place[];
};

export type GetQuerySinglePlaceSnippet = {
  success: boolean;
  data: Place;
};

export type PostQueryCreatePlaceSnippet = {
  success: boolean;
  data: Place;
};

export type PostQueryUpdatePlaceSnippet = {
  success: boolean;
  data: Place;
};

export type PostQueryDeletePlaceSnippet = {
  success: boolean;
  message: string;
};
