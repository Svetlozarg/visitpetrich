import { ProcessedEvent } from "@aldabil/react-scheduler/types";
import { Stack, Typography, useTheme } from "@mui/material";
import EventIcon from "@mui/icons-material/Event";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import EventBusyIcon from "@mui/icons-material/EventBusy";
import { formatDate } from "@/helpers/helpers";
import ClassIcon from "@mui/icons-material/Class";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";
import LinkIcon from "@mui/icons-material/Link";
import Link from "next/link";

interface SchedulerVewerTitleProps {
  event: ProcessedEvent;
}

const SchedulerVewerTitle: React.FC<SchedulerVewerTitleProps> = ({ event }) => {
  const theme = useTheme();

  return (
    <Stack style={{ fontSize: "1.2rem" }} py={1} gap={1}>
      <Stack
        direction="row"
        justifyContent="flex-start"
        alignItems="center"
        gap={1}
      >
        <ClassIcon sx={{ color: theme.palette.common.white }} />
        <Typography component="p" variant="body1">
          Категория: {event.category === "exhibitions" && "Изложби"}
          {event.category === "conferences" && "Конференции"}
          {event.category === "seminars" && "Семинари"}
          {event.category === "festivals" && "Фестивали"}
          {event.category === "celebration event" && "Тържествени събития"}
          {event.category === "fundraisers" && "Благотворителни събития"}
          {event.category === "sports" && "Спортни събития"}
          {event.category === "art event" && "Арт събития"}
          {event.category === "virtual events" && "Виртуални събития"}
          {event.category === "workshops" && "Работилници"}
        </Typography>
      </Stack>
      <Stack
        direction="row"
        justifyContent="flex-start"
        alignItems="center"
        gap={1}
      >
        <EventIcon sx={{ color: theme.palette.common.white }} />
        <Typography component="p" variant="body1">
          Заглавие: {event.title}
        </Typography>
      </Stack>
      <Stack
        direction="row"
        justifyContent="flex-start"
        alignItems="center"
        gap={1}
      >
        <EventAvailableIcon sx={{ color: theme.palette.common.white }} />
        <Typography component="p" variant="body1">
          Начало: {formatDate(event.start)}
        </Typography>
      </Stack>
      <Stack
        direction="row"
        justifyContent="flex-start"
        alignItems="center"
        gap={1}
      >
        <EventBusyIcon sx={{ color: theme.palette.common.white }} />
        <Typography component="p" variant="body1">
          Край: {formatDate(event.end)}
        </Typography>
      </Stack>

      {event.location ? (
        <Stack
          direction="row"
          justifyContent="flex-start"
          alignItems="center"
          gap={1}
        >
          <LocationOnIcon sx={{ color: theme.palette.common.white }} />
          <Typography component="p" variant="body1">
            Локация: {event.location}
          </Typography>
        </Stack>
      ) : null}
      {event.phone ? (
        <Stack
          direction="row"
          justifyContent="flex-start"
          alignItems="center"
          gap={1}
        >
          <LocalPhoneIcon sx={{ color: theme.palette.common.white }} />
          <Typography component="p" variant="body1">
            Телефон: {event.phone}
          </Typography>
        </Stack>
      ) : null}
      {event.email ? (
        <Stack
          direction="row"
          justifyContent="flex-start"
          alignItems="center"
          gap={1}
        >
          <EmailIcon sx={{ color: theme.palette.common.white }} />
          <Typography component="p" variant="body1">
            Имейл: {event.email}
          </Typography>
        </Stack>
      ) : null}
      {event.link ? (
        <Stack
          direction="row"
          justifyContent="flex-start"
          alignItems="center"
          gap={1}
        >
          <LinkIcon sx={{ color: theme.palette.common.white }} />
          <Typography component="p" variant="body1">
            Връзка:{" "}
            <Link
              href={event.link}
              target="_blank"
              style={{ textDecoration: "underline" }}
            >
              Отвори в нов прозорец
            </Link>
          </Typography>
        </Stack>
      ) : null}
    </Stack>
  );
};

export default SchedulerVewerTitle;
