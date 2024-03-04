"use client";
import { useEffect, useState } from "react";
import { CircularProgress, Stack, Typography } from "@mui/material";
import PlaceIcon from "@mui/icons-material/Place";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import LinkIcon from "@mui/icons-material/Link";
import { callApi } from "@/services/callApi";
import {
  Event,
  GetQuerySingleEventSnippet,
} from "@/services/Events/apiEventsSnippets";
import { getQuerySingleEvent } from "@/services/Events/apiEventsGetQueries";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import EventBusyIcon from "@mui/icons-material/EventBusy";

const EventPage = () => {
  const [eventData, setEventData] = useState<Event>();

  useEffect(() => {
    const eventId = new URLSearchParams(window.location.search).get("id");
    if (!eventId) return;
    (async () => {
      const event = await callApi<GetQuerySingleEventSnippet>({
        query: getQuerySingleEvent(eventId),
      });

      if (event.success) {
        setEventData(event.data);
      }
    })();
  }, []);

  return (
    <Stack>
      <Stack
        width="100vw"
        height="50vh"
        justifyContent="center"
        alignItems="center"
        sx={{
          background: `linear-gradient(rgba(0, 0, 0, 0.20), rgba(0, 0, 0, 0.20)), url(https://www.visitpetrich.com/img/2024/01//25/b53ce5c823a264702d788a9609f75908_jpg0_418111658_855148296619333_7445485058657356922_n.jpg)`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></Stack>

      <Stack
        width="100%"
        maxWidth="1200px"
        margin="0 auto"
        gap={2}
        px={2}
        py={8}
      >
        {!eventData ? (
          <Stack justifyContent="center" alignItems="center">
            <CircularProgress size="10rem" />
          </Stack>
        ) : null}

        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          gap={2}
          flexWrap="wrap"
          mb={3}
        >
          <Stack direction="row" gap={4} flexWrap="wrap">
            {eventData && eventData.startDate ? (
              <Stack
                justifyContent="center"
                alignItems="center"
                direction="row"
                gap={2}
              >
                <EventAvailableIcon />
                <Typography variant="body1">
                  {new Date(eventData.startDate).toLocaleString("bg-BG", {
                    day: "2-digit",
                    month: "2-digit",
                    year: "numeric",
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </Typography>
              </Stack>
            ) : null}

            {eventData && eventData.endDate ? (
              <Stack
                justifyContent="center"
                alignItems="center"
                direction="row"
                gap={2}
              >
                <EventBusyIcon />
                <Typography variant="body1">
                  {new Date(eventData.endDate).toLocaleString("bg-BG", {
                    day: "2-digit",
                    month: "2-digit",
                    year: "numeric",
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </Typography>
              </Stack>
            ) : null}

            {eventData && eventData.location ? (
              <Stack
                justifyContent="center"
                alignItems="center"
                direction="row"
                gap={2}
              >
                <PlaceIcon />
                <Typography variant="body1">{eventData.location}</Typography>
              </Stack>
            ) : null}
          </Stack>
          <Stack direction="row" gap={4} flexWrap="wrap">
            {eventData && eventData.phone ? (
              <Stack
                justifyContent="center"
                alignItems="center"
                direction="row"
                gap={2}
              >
                <LocalPhoneIcon />
                <Typography variant="body1">{eventData.phone}</Typography>
              </Stack>
            ) : null}
            {eventData && eventData.link ? (
              <Stack
                justifyContent="center"
                alignItems="center"
                direction="row"
                gap={2}
              >
                <LinkIcon />
                <Typography variant="body1">{eventData.link}</Typography>
              </Stack>
            ) : null}
          </Stack>
        </Stack>

        <Typography component="h2" variant="h2" mt={2} mb={4}>
          {eventData?.title}
        </Typography>

        <Typography component="p" variant="body1">
          {eventData?.description}
        </Typography>
      </Stack>
    </Stack>
  );
};

export default EventPage;
