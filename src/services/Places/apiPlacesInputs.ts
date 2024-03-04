export type PostQueryCreatePlaceInput = {
  name: string;
  location: string;
  url: string;
  image: string;
  category: "hotel" | "house" | "hut";
};

export type PostQueryUpdatePlaceInput = {
  name: string;
  location: string;
  url: string;
  image: string;
  category: "hotel" | "house" | "hut";
};
