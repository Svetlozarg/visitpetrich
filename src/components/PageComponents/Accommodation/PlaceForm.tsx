import { ModalType } from "@/app/admin/dashboard/accommodation/page";
import Alert, { AlertStatuses } from "@/components/MUIComponents/Alert";
import Button from "@/components/MUIComponents/Button";
import Select from "@/components/MUIComponents/Select";
import TextField from "@/components/MUIComponents/TextField";
import {
  postQueryCreatePlace,
  postQueryUpdatePlace,
} from "@/services/Places/apiPlacesPostQueries";
import {
  Place,
  PostQueryCreatePlaceSnippet,
  PostQueryUpdatePlaceSnippet,
} from "@/services/Places/apiPlacesSnippets";
import { callApi } from "@/services/callApi";
import { CircularProgress, Stack } from "@mui/material";
import { Form, Formik } from "formik";
import { useState } from "react";
import { object, string } from "yup";

const fieldValidation = object({
  name: string().required("Полето е задължително"),
  location: string().required("Полето е задължително"),
  url: string().required("Полето е задължително"),
  image: string().required("Полето е задължително"),
  category: string().required("Полето е задължително"),
});

type PlaceFormValues = {
  name: string;
  location: string;
  url: string;
  image: string;
  category: "hotel" | "house" | "hut";
};

interface PlaceFormProps {
  modalData?: Place;
  modalType: ModalType;
  setPlacesData: React.Dispatch<React.SetStateAction<Place[] | undefined>>;
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const PlaceForm: React.FC<PlaceFormProps> = ({
  modalData,
  modalType,
  setPlacesData,
  setModalOpen,
}) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [formStatus, setFormStatus] = useState<AlertStatuses>(null);
  const [alertMessage, setAlertMessage] = useState<string | null>(null);
  const initialValues: PlaceFormValues = {
    name: modalData?.name || "",
    location: modalData?.location || "",
    url: modalData?.url || "",
    image: modalData?.image || "",
    category: modalData?.category || "hotel",
  };

  const handleFormSubmit = async (values: PlaceFormValues) => {
    try {
      setLoading(true);
      setFormStatus(null);
      setAlertMessage(null);

      const body = {
        name: values.name,
        location: values.location,
        url: values.url,
        image: values.image,
        category: values.category,
      };

      if (modalType === "create") {
        const newClient = await callApi<PostQueryCreatePlaceSnippet>({
          query: postQueryCreatePlace(body),
        });

        if (newClient.success) {
          setPlacesData((prev) => {
            if (!prev) return prev;

            return [...prev, newClient.data];
          });
          setFormStatus("success");
          setAlertMessage("Успешно създадено събитие!");
          setLoading(false);
          setModalOpen(false);
        }
      } else {
        if (!modalData) return;

        const updatedClient = await callApi<PostQueryUpdatePlaceSnippet>({
          query: postQueryUpdatePlace(body, modalData?._id),
        });

        if (updatedClient.success) {
          setPlacesData((prev) => {
            if (!prev) return prev;

            return prev.map((event) => {
              if (event._id === modalData._id) {
                return {
                  ...event,
                  ...body,
                };
              }

              return event;
            });
          });
          setFormStatus("success");
          setAlertMessage("Успешно обновенo събитие!");
          setLoading(false);
          setModalOpen(false);
        }
      }
    } catch (err) {
      console.log((err as Error).message);
      setFormStatus("error");
      setAlertMessage("Възникна грешка при създаването на събитие");
      setLoading(false);
    }
  };

  return (
    <Stack width="100%" justifyContent="center" alignItems="center">
      {!loading ? (
        <Formik
          initialValues={initialValues}
          onSubmit={handleFormSubmit}
          validationSchema={fieldValidation}
        >
          {({ handleSubmit, handleChange, touched, errors, values }) => (
            <Form
              style={{ width: "100%" }}
              onSubmit={handleSubmit}
              autoComplete="false"
            >
              <Stack spacing={3} mt={3}>
                <TextField
                  name="name"
                  label="Заглавие"
                  error={touched["name"] && !!errors["name"]}
                  helperText={touched["name"] && errors["name"]}
                  onChange={handleChange}
                  value={values.name}
                  type="text"
                />

                <TextField
                  name="location"
                  label="Локация"
                  error={touched["location"] && !!errors["location"]}
                  helperText={touched["location"] && errors["location"]}
                  onChange={handleChange}
                  value={values.location}
                  type="text"
                />

                <TextField
                  name="url"
                  label="Линк към връзка"
                  error={touched["url"] && !!errors["url"]}
                  helperText={touched["url"] && errors["url"]}
                  onChange={handleChange}
                  value={values.url}
                  type="text"
                />

                <TextField
                  name="image"
                  label="Линк към снимка"
                  error={touched["image"] && !!errors["image"]}
                  helperText={touched["image"] && errors["image"]}
                  onChange={handleChange}
                  value={values.image}
                  type="text"
                />

                <Select
                  name="category"
                  label="Kатегория"
                  error={touched["category"] && !!errors["category"]}
                  helperText={touched["category"] && errors["category"]}
                  onChange={handleChange}
                  value={values.category}
                  selectValues={[
                    { label: "Хотел", value: "hotel" },
                    { label: "Къща за гости", value: "house" },
                    { label: "Хижа/бунгало", value: "hut" },
                  ]}
                />

                <Button
                  message={modalType === "create" ? "Добави" : "Запази"}
                  type="submit"
                />

                <Alert
                  message={alertMessage}
                  showAlert={!!alertMessage}
                  severity={formStatus}
                />
              </Stack>
            </Form>
          )}
        </Formik>
      ) : (
        <Stack justifyContent="center" alignItems="center" my={5}>
          <CircularProgress size="3rem" />
        </Stack>
      )}
    </Stack>
  );
};

export default PlaceForm;
