"use client";
import { useEffect, useState } from "react";
import Event from "@/components/PageComponents/Events/Event";
import PageHeader from "@/components/SmallComponents/PageHeader";
import {
  Event as EventDataType,
  GetQueryAllEventsSnippet,
} from "@/services/Events/apiEventsSnippets";
import { CircularProgress, Stack, Typography } from "@mui/material";
import { getQueryAllEvents } from "@/services/Events/apiEventsGetQueries";
import { callApi } from "@/services/callApi";

const EventsPage = () => {
  const [eventsData, setEventsData] = useState<EventDataType[]>();

  useEffect(() => {
    (async () => {
      const eventsData = await callApi<GetQueryAllEventsSnippet>({
        query: getQueryAllEvents,
      });

      if (eventsData.success) {
        setEventsData(eventsData.data);
      }
    })();
  }, []);

  return (
    <Stack>
      <PageHeader
        title="Събития"
        image="https://ik.imagekit.io/obelussoft/VisitPetrich/image_qD1ai8B2N.jpg?updatedAt=1708540788414"
      />

      {eventsData ? (
        <Stack>
          <Stack
            width="100%"
            maxWidth="1600px"
            m="0 auto"
            gap={8}
            py={10}
            px={4}
          >
            <Typography component="h4" variant="h3">
              Предстоящи събития
            </Typography>

            <Stack direction="row" flexWrap="wrap" gap={2}>
              {eventsData.filter(
                (event) => new Date(event.endDate) > new Date()
              ).length > 0 ? (
                eventsData
                  .filter((event) => new Date(event.endDate) > new Date())
                  .map((upcomingEvent) => (
                    <Event key={upcomingEvent._id} {...upcomingEvent} />
                  ))
              ) : (
                <Typography component="p" variant="body1">
                  Няма предстоящи събития
                </Typography>
              )}
            </Stack>
          </Stack>

          <Stack
            width="100%"
            maxWidth="1600px"
            m="0 auto"
            gap={8}
            py={10}
            px={4}
          >
            <Typography component="h4" variant="h3">
              Минали събития
            </Typography>
            <Stack direction="row" gap={2}>
              {eventsData.filter(
                (event) => new Date(event.endDate) < new Date()
              ).length > 0 ? (
                eventsData
                  .filter((event) => new Date(event.endDate) < new Date())
                  .map((pastEvent) => (
                    <Event key={pastEvent._id} {...pastEvent} />
                  ))
              ) : (
                <Typography component="p" variant="body1">
                  Няма изминали събития
                </Typography>
              )}
            </Stack>
          </Stack>
        </Stack>
      ) : (
        <Stack justifyContent="center" alignItems="center" py={20} px={4}>
          <CircularProgress size="8rem" />
        </Stack>
      )}
    </Stack>
  );
};

export default EventsPage;
