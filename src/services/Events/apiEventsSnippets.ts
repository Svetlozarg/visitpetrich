export type Event = {
  _id: string;
  title: string;
  description: string;
  startDate: Date;
  endDate: Date;
  location: string;
  phone: string;
  email: string;
  link: string;
  createdAt: Date;
  updatedAt: Date;
};

export type GetQueryAllEventsSnippet = {
  success: boolean;
  data: Event[];
};

export type GetQuerySingleEventSnippet = {
  success: boolean;
  data: Event;
};

export type PostQueryCreateEventSnippet = {
  success: boolean;
  data: Event;
};

export type PostQueryUpdateEventSnippet = {
  success: boolean;
  data: Event;
};

export type PostQueryDeleteEventSnippet = {
  success: boolean;
  message: string;
};
