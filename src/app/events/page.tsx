import Event, { EventType } from "@/components/PageComponents/Events/Event";
import PageHeader from "@/components/SmallComponents/PageHeader";
import { Stack, Typography } from "@mui/material";

const EVENTS_DATA: EventType[] = [
  {
    id: "1",
    title: "Дни на отворените врати в Долината на Струма 2024",
    place: "Център на град Петрич",
    startDate: new Date("2024-02-17"),
    endDate: new Date("2024-02-18"),
    image:
      "https://ik.imagekit.io/obelussoft/VisitPetrich/960-600-pfk-belasica-petrich-emblema_p8-wJr5Lh.jpg?updatedAt=1708979363747",
  },
  {
    id: "2",
    title: "Дни на отворените врати в Долината на Струма 2024",
    place: "Център на град Петрич",
    startDate: new Date("2024-03-01"),
    endDate: new Date("2024-03-06"),
    image:
      "https://ik.imagekit.io/obelussoft/VisitPetrich/960-600-pfk-belasica-petrich-emblema_p8-wJr5Lh.jpg?updatedAt=1708979363747",
  },
  {
    id: "4",
    title: "Дни на отворените врати в Долината на Струма 2024",
    place: "Център на град Петрич",
    startDate: new Date("2024-03-01"),
    endDate: new Date("2024-03-06"),
    image:
      "https://ik.imagekit.io/obelussoft/VisitPetrich/960-600-pfk-belasica-petrich-emblema_p8-wJr5Lh.jpg?updatedAt=1708979363747",
  },
  {
    id: "5",
    title: "Дни на отворените врати в Долината на Струма 2024",
    place: "Център на град Петрич",
    startDate: new Date("2024-03-01"),
    endDate: new Date("2024-03-06"),
    image:
      "https://ik.imagekit.io/obelussoft/VisitPetrich/960-600-pfk-belasica-petrich-emblema_p8-wJr5Lh.jpg?updatedAt=1708979363747",
  },
];

const EventsPage = () => {
  return (
    <Stack>
      <PageHeader
        title="Събития"
        image="https://ik.imagekit.io/obelussoft/VisitPetrich/image_qD1ai8B2N.jpg?updatedAt=1708540788414"
      />

      <Stack width="100%" maxWidth="1600px" m="0 auto" gap={8} py={10} px={4}>
        <Typography component="h4" variant="h2">
          Предстоящи събития
        </Typography>
        <Stack direction="row" flexWrap="wrap" gap={2}>
          {EVENTS_DATA.filter((event) => event.endDate > new Date()).map(
            (upcommingEvent) => (
              <Event key={upcommingEvent.id} {...upcommingEvent} />
            )
          )}
        </Stack>
      </Stack>

      <Stack width="100%" maxWidth="1600px" m="0 auto" gap={8} py={10} px={4}>
        <Typography component="h4" variant="h2">
          Минали събития
        </Typography>
        <Stack direction="row" gap={2}>
          {EVENTS_DATA.filter((event) => event.endDate < new Date()).map(
            (pastEvent) => (
              <Event key={pastEvent.id} {...pastEvent} />
            )
          )}
        </Stack>
      </Stack>
    </Stack>
  );
};

export default EventsPage;
