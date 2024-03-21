import { Stack, Typography } from "@mui/material";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import PlaceIcon from "@mui/icons-material/Place";
import Button from "@/components/MUIComponents/Button";
import { Event as EventDataType } from "@/services/Events/apiEventsSnippets";
import { useRouter } from "next/navigation";

export type EventType = EventDataType;

const Event: React.FC<EventType> = ({
  _id,
  title,
  location,
  startDate,
  endDate,
}) => {
  const router = useRouter();

  return (
    <Stack
      width="100%"
      maxWidth="400px"
      height="200px"
      justifyContent="space-between"
      sx={{
        cursor: "pointer",
        boxShadow: "0 0 10px 0 rgba(0, 0, 0, 0.1)",
      }}
    >
      <Stack p={2} gap={1}>
        <Typography component="h4" variant="h4" textAlign="center">
          {title.length > 57 ? `${title.slice(0, 57)}...` : title}
        </Typography>

        <Stack
          direction="row"
          justifyContent="center"
          alignItems="center"
          gap={1}
        >
          <PlaceIcon sx={{ color: "primary.main" }} />
          <Typography component="p" variant="body1" textAlign="center">
            {location}
          </Typography>
        </Stack>

        <Stack
          direction="row"
          justifyContent="center"
          alignItems="center"
          gap={1}
        >
          <CalendarMonthIcon sx={{ color: "primary.main" }} />
          <Typography component="p" variant="body1" textAlign="center">
            {`${new Date(startDate).toLocaleString("bg-BG", {
              day: "2-digit",
              month: "2-digit",
              year: "numeric",
            })} - ${new Date(endDate).toLocaleString("bg-BG", {
              day: "2-digit",
              month: "2-digit",
              year: "numeric",
            })}`}
          </Typography>
        </Stack>
      </Stack>

      <Button
        message="Виж повече"
        onClick={() => router.push(`/events/event?id=${_id}`, { scroll: true })}
      />
    </Stack>
  );
};

export default Event;
