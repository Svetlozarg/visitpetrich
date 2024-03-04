"use client";
import { useEffect, useState } from "react";
import { callApi } from "@/services/callApi";
import {
  GetQueryAllPlacesSnippet,
  Place,
  PostQueryDeletePlaceSnippet,
} from "@/services/Places/apiPlacesSnippets";
import { getQueryAllPlaces } from "@/services/Places/apiPlacesGetQueries";
import { postQueryDeletePlace } from "@/services/Places/apiPlacesPostQueries";
import {
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
import Dialog from "@/components/MUIComponents/Dialog";
import Modal from "@/components/MUIComponents/Modal";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import PlaceForm from "@/components/PageComponents/Accommodation/PlaceForm";
import HotelIcon from "@mui/icons-material/Hotel";
import HomeIcon from "@mui/icons-material/Home";
import VerticalShadesIcon from "@mui/icons-material/VerticalShades";

export type ModalType = "create" | "edit";

const AdminAccommodationsPage = () => {
  const [placesData, setPlacesData] = useState<Place[]>();
  const [modalData, setModalData] = useState<Place>();
  const [modalType, setModalType] = useState<ModalType>("create");
  const [openModal, setModalOpen] = useState<boolean>(false);

  useEffect(() => {
    (async () => {
      const eventsData = await callApi<GetQueryAllPlacesSnippet>({
        query: getQueryAllPlaces,
      });

      if (eventsData.success) {
        setPlacesData(eventsData.data);
      }
    })();
  }, []);

  const handleDeletePlace = async (placeId: string) => {
    try {
      const deletedPlace = await callApi<PostQueryDeletePlaceSnippet>({
        query: postQueryDeletePlace(placeId),
      });

      if (deletedPlace.success) {
        setPlacesData((prev) => {
          if (prev) {
            return prev.filter((event) => event._id !== placeId);
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
          Добавени места за настаняване
        </Typography>

        <Button
          message="+ Добави"
          onClick={() => {
            setModalData(undefined);
            setModalType("create");
            setModalOpen(true);
          }}
          disabled={!placesData}
        />
      </Stack>

      <List sx={{ height: "100%", maxHeight: "70vh", overflow: "auto", my: 2 }}>
        {placesData ? (
          placesData.length > 0 ? (
            placesData.map((place) => (
              <ListItem
                key={place._id}
                secondaryAction={
                  <Stack direction="row" gap={2}>
                    <IconButton
                      edge="end"
                      onClick={() => {
                        setModalData(place);
                        setModalType("edit");
                        setModalOpen(true);
                      }}
                    >
                      <EditIcon color="warning" />
                    </IconButton>

                    <Dialog
                      icon={<DeleteIcon sx={{ color: "#FF1943" }} />}
                      buttonText="Изтрий"
                      dialogTitle={`Изтриване на ${place.name}`}
                      dialogDescription="Сигурни ли сте, че искате да изтриете?"
                      onConfirm={() => handleDeletePlace(place._id)}
                    />
                  </Stack>
                }
              >
                <ListItemAvatar>
                  {place.category === "hotel" ? (
                    <HotelIcon />
                  ) : place.category === "house" ? (
                    <HomeIcon />
                  ) : (
                    <VerticalShadesIcon />
                  )}
                </ListItemAvatar>
                <ListItemText primary={place.name} />
              </ListItem>
            ))
          ) : (
            <Stack width="100%" justifyContent="center" alignItems="center">
              <Typography variant="body1">
                Няма добавени места за настаняване
              </Typography>
            </Stack>
          )
        ) : (
          <Stack width="100%" justifyContent="center" alignItems="center">
            <CircularProgress />
          </Stack>
        )}
      </List>

      <Modal
        modalTitle={modalType === "create" ? "Добави Място" : "Промени Място"}
        open={openModal}
        setOpen={setModalOpen}
      >
        <PlaceForm
          modalType={modalType}
          modalData={modalData}
          setPlacesData={setPlacesData}
          setModalOpen={setModalOpen}
        />
      </Modal>
    </Stack>
  );
};

export default AdminAccommodationsPage;
