export type PostQueryCreateEventInput = {
  category:
    | "exhibitions"
    | "conferences"
    | "seminars"
    | "festivals"
    | "celebration event"
    | "fundraisers"
    | "sports"
    | "art event"
    | "virtual events"
    | "workshops";
  title: string;
  description: string;
  startDate: Date;
  endDate: Date;
  location: string;
  phone: string;
  email: string;
  link: string;
};

export type PostQueryUpdateEventInput = {
  category:
    | "exhibitions"
    | "conferences"
    | "seminars"
    | "festivals"
    | "celebration event"
    | "fundraisers"
    | "sports"
    | "art event"
    | "virtual events"
    | "workshops";
  title: string;
  description: string;
  startDate: Date;
  endDate: Date;
  location: string;
  phone: string;
  email: string;
  link: string;
};
