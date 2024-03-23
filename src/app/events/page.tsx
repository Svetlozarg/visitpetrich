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
import Scheduler from "@/components/SmallComponents/Scheduler/Scheduler";
import image from "../../../public/assets/culture/festival.jpg";

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
      <PageHeader title="Събития" image={image} />

      {eventsData ? (
        <Stack>
          <Stack width="100%" maxWidth="1200px" m="0 auto" pt={10}>
            <Typography component="h3" variant="h3" textAlign="center" mb={4}>
              Календар на събития
            </Typography>
            <Scheduler
              events={
                eventsData.map((event) => ({
                  event_id: event._id,
                  category: event.category,
                  title: event.title,
                  start: new Date(event.startDate),
                  end: new Date(event.endDate),
                  location: event.location,
                  phone: event.phone,
                  email: event.email,
                  link: event.link,
                  disabled: false,
                  color:
                    event.category === "sports"
                      ? "#3f51b5"
                      : event.category === "exhibitions"
                      ? "#f50057"
                      : event.category === "conferences"
                      ? "#ff6f00"
                      : event.category === "seminars"
                      ? "#00bfa5"
                      : event.category === "festivals"
                      ? "#f44336"
                      : event.category === "celebration event"
                      ? "#9c27b0"
                      : event.category === "fundraisers"
                      ? "#4caf50"
                      : event.category === "art event"
                      ? "#2196f3"
                      : event.category === "virtual events"
                      ? "#ffeb3b"
                      : event.category === "workshops"
                      ? "#795548"
                      : "#3f51b5",
                  textColor: "#fff",
                  editable: false,
                  deletable: false,
                  draggable: false,
                })) as any
              }
            />

            <Stack
              direction="row"
              justifyContent="flex-start"
              alignItems="center"
              flexWrap="wrap"
              gap={2}
              mt={2}
            >
              <Stack direction="row" gap={1} alignItems="center">
                <div
                  style={{
                    width: "20px",
                    height: "20px",
                    backgroundColor: "#3f51b5",
                  }}
                ></div>
                <Typography>Спортни събития</Typography>
              </Stack>
              <Stack direction="row" gap={1} alignItems="center">
                <div
                  style={{
                    width: "20px",
                    height: "20px",
                    backgroundColor: "#f50057",
                  }}
                ></div>
                <Typography>Изложби</Typography>
              </Stack>
              <Stack direction="row" gap={1} alignItems="center">
                <div
                  style={{
                    width: "20px",
                    height: "20px",
                    backgroundColor: "#ff6f00",
                  }}
                ></div>
                <Typography>Конференции</Typography>
              </Stack>
              <Stack direction="row" gap={1} alignItems="center">
                <div
                  style={{
                    width: "20px",
                    height: "20px",
                    backgroundColor: "#00bfa5",
                  }}
                ></div>
                <Typography>Семинари</Typography>
              </Stack>
              <Stack direction="row" gap={1} alignItems="center">
                <div
                  style={{
                    width: "20px",
                    height: "20px",
                    backgroundColor: "#f44336",
                  }}
                ></div>
                <Typography>Фестивали</Typography>
              </Stack>
              <Stack direction="row" gap={1} alignItems="center">
                <div
                  style={{
                    width: "20px",
                    height: "20px",
                    backgroundColor: "#9c27b0",
                  }}
                ></div>
                <Typography>Тържествени събития</Typography>
              </Stack>
              <Stack direction="row" gap={1} alignItems="center">
                <div
                  style={{
                    width: "20px",
                    height: "20px",
                    backgroundColor: "#4caf50",
                  }}
                ></div>
                <Typography>Благотворителни събития</Typography>
              </Stack>
              <Stack direction="row" gap={1} alignItems="center">
                <div
                  style={{
                    width: "20px",
                    height: "20px",
                    backgroundColor: "#2196f3",
                  }}
                ></div>
                <Typography>Арт събития</Typography>
              </Stack>
              <Stack direction="row" gap={1} alignItems="center">
                <div
                  style={{
                    width: "20px",
                    height: "20px",
                    backgroundColor: "#ffeb3b",
                  }}
                ></div>
                <Typography>Виртуални събития</Typography>
              </Stack>
              <Stack direction="row" gap={1} alignItems="center">
                <div
                  style={{
                    width: "20px",
                    height: "20px",
                    backgroundColor: "#795548",
                  }}
                ></div>
                <Typography>Работилници</Typography>
              </Stack>
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
