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
import Link from "next/link";

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
    <Stack minHeight="100vh">
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

        <Typography
          component="h2"
          variant="h2"
          mt={2}
          mb={4}
          textAlign="center"
        >
          {eventData?.title}
        </Typography>

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
                <Typography variant="body1">
                  <Link
                    href={eventData.link}
                    target="_blank"
                    style={{ textDecoration: "underline" }}
                  >
                    Отвори
                  </Link>
                </Typography>
              </Stack>
            ) : null}
          </Stack>
        </Stack>

        <Typography component="p" variant="body1">
          {eventData?.description}
        </Typography>
      </Stack>
    </Stack>
  );
};

export default EventPage;
