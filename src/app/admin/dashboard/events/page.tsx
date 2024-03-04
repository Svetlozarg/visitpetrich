"use client";
import { useEffect, useState } from "react";
import {
  Avatar,
  CircularProgress,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";
import Button from "@/components/MUIComponents/Button";
import VisibilityIcon from "@mui/icons-material/Visibility";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import {
  Event,
  GetQueryAllEventsSnippet,
  PostQueryDeleteEventSnippet,
} from "@/services/Events/apiEventsSnippets";
import { callApi } from "@/services/callApi";
import { getQueryAllEvents } from "@/services/Events/apiEventsGetQueries";
import Modal from "@/components/MUIComponents/Modal";
import EventForm from "@/components/PageComponents/Events/EventForm";
import Dialog from "@/components/MUIComponents/Dialog";
import { postQueryDeleteEvent } from "@/services/Events/apiEventsPostQueries";
import { useRouter } from "next/navigation";

export type ModalType = "create" | "edit";

const EventsPage = () => {
  const router = useRouter();
  const [eventsData, setEventsData] = useState<Event[]>();
  const [modalData, setModalData] = useState<Event>();
  const [modalType, setModalType] = useState<ModalType>("create");
  const [openModal, setModalOpen] = useState<boolean>(false);

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

  const handleDeleteEvent = async (eventId: string) => {
    try {
      const deletedClient = await callApi<PostQueryDeleteEventSnippet>({
        query: postQueryDeleteEvent(eventId),
      });

      if (deletedClient.success) {
        setEventsData((prev) => {
          if (prev) {
            return prev.filter((event) => event._id !== eventId);
          }
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Stack bgcolor="common.white" borderRadius="10px" mt={8} p={5}>
      <Stack justifyContent="space-between" alignItems="center" direction="row">
        <Typography component="h2" variant="h3">
          Добавени Събития
        </Typography>

        <Button
          message="+ Добави"
          onClick={() => {
            setModalData(undefined);
            setModalType("create");
            setModalOpen(true);
          }}
          disabled={!eventsData}
        />
      </Stack>

      <List sx={{ height: "100%", maxHeight: "70vh", overflow: "auto", my: 2 }}>
        {eventsData ? (
          eventsData.length > 0 ? (
            eventsData.map((event) => (
              <ListItem
                key={event._id}
                secondaryAction={
                  <Stack direction="row" gap={2}>
                    <IconButton
                      edge="end"
                      onClick={() =>
                        router.push(`/events/event?id=${event._id}`, {
                          scroll: true,
                        })
                      }
                    >
                      <VisibilityIcon color="info" />
                    </IconButton>

                    <IconButton
                      edge="end"
                      onClick={() => {
                        setModalData(event);
                        setModalType("edit");
                        setModalOpen(true);
                      }}
                    >
                      <EditIcon color="warning" />
                    </IconButton>

                    <Dialog
                      icon={<DeleteIcon sx={{ color: "#FF1943" }} />}
                      buttonText="Изтрий"
                      dialogTitle={`Изтриване на ${event.title}`}
                      dialogDescription="Сигурни ли сте, че искате да изтриете това събитие?"
                      onConfirm={() => handleDeleteEvent(event._id)}
                    />
                  </Stack>
                }
              >
                <ListItemAvatar>
                  <Avatar />
                </ListItemAvatar>
                <ListItemText
                  primary={event.title}
                  secondary={
                    event.description.length > 50
                      ? `${event.description.slice(0, 100)}...`
                      : event.description
                  }
                />
              </ListItem>
            ))
          ) : (
            <Stack width="100%" justifyContent="center" alignItems="center">
              <Typography variant="body1">Няма добавени събития</Typography>
            </Stack>
          )
        ) : (
          <Stack width="100%" justifyContent="center" alignItems="center">
            <CircularProgress />
          </Stack>
        )}
      </List>

      <Modal
        modalTitle={
          modalType === "create" ? "Добави Събитие" : "Промени Събитие"
        }
        open={openModal}
        setOpen={setModalOpen}
      >
        <EventForm
          modalType={modalType}
          modalData={modalData}
          setEventsData={setEventsData}
          setModalOpen={setModalOpen}
        />
      </Modal>
    </Stack>
  );
};

export default EventsPage;
