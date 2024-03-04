import { ModalType } from "@/app/admin/dashboard/events/page";
import Alert, { AlertStatuses } from "@/components/MUIComponents/Alert";
import Button from "@/components/MUIComponents/Button";
import DateAndTimePicker from "@/components/MUIComponents/DateAndTimePicker";
import TextField from "@/components/MUIComponents/TextField";
import {
  postQueryCreateEvent,
  postQueryUpdateEvent,
} from "@/services/Events/apiEventsPostQueries";
import {
  Event,
  PostQueryCreateEventSnippet,
  PostQueryUpdateEventSnippet,
} from "@/services/Events/apiEventsSnippets";
import { callApi } from "@/services/callApi";
import { CircularProgress, Stack } from "@mui/material";
import { Form, Formik } from "formik";
import { useState } from "react";
import { date, object, string } from "yup";

const fieldValidation = object({
  title: string().required("Полето е задължително"),
  description: string().required("Полето е задължително"),
  startDate: date().required("Полето е задължително"),
  endDate: date().required("Полето е задължително"),
  location: string().required("Полето е задължително"),
  phone: string().matches(
    /^[0-9]{10}$/,
    "Моля, въведете валиден телефонен номер"
  ),
  email: string().email("Моля, въведете валиден имейл адрес"),
  link: string().url("Моля, въведете валиден линк (https://www.google.bg)"),
});

type EventFormValues = {
  title: string;
  description: string;
  startDate: Date;
  endDate: Date;
  location: string;
  phone: string;
  email: string;
  link: string;
};

interface EventFormProps {
  modalData?: Event;
  modalType: ModalType;
  setEventsData: React.Dispatch<React.SetStateAction<Event[] | undefined>>;
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const EventForm: React.FC<EventFormProps> = ({
  modalData,
  modalType,
  setEventsData,
  setModalOpen,
}) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [formStatus, setFormStatus] = useState<AlertStatuses>(null);
  const [alertMessage, setAlertMessage] = useState<string | null>(null);
  const initialValues: EventFormValues = {
    title: modalData?.title || "",
    description: modalData?.description || "",
    startDate: modalData?.startDate || new Date(),
    endDate: modalData?.endDate || new Date(),
    location: modalData?.location || "",
    phone: modalData?.phone || "",
    email: modalData?.email || "",
    link: modalData?.link || "",
  };

  const handleFormSubmit = async (values: EventFormValues) => {
    try {
      setLoading(true);
      setFormStatus(null);
      setAlertMessage(null);

      const body = {
        title: values.title,
        description: values.description,
        startDate: values.startDate,
        endDate: values.endDate,
        location: values.location,
        phone: values.phone,
        email: values.email,
        link: values.link,
      };

      if (modalType === "create") {
        const newClient = await callApi<PostQueryCreateEventSnippet>({
          query: postQueryCreateEvent(body),
        });

        if (newClient.success) {
          setEventsData((prev) => {
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

        const updatedClient = await callApi<PostQueryUpdateEventSnippet>({
          query: postQueryUpdateEvent(body, modalData?._id),
        });

        if (updatedClient.success) {
          setEventsData((prev) => {
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
                  name="title"
                  label="Заглавие*"
                  error={touched["title"] && !!errors["title"]}
                  helperText={touched["title"] && errors["title"]}
                  onChange={handleChange}
                  value={values.title}
                  type="text"
                />

                <TextField
                  name="description"
                  label="Описание*"
                  error={touched["description"] && !!errors["description"]}
                  helperText={touched["description"] && errors["description"]}
                  onChange={handleChange}
                  value={values.description}
                  type="text"
                  multiline
                />

                <DateAndTimePicker
                  name="startDate"
                  label="Начална дата"
                  onChange={(e) => (values.startDate = e as Date)}
                  error={touched["startDate"] && !!errors["startDate"]}
                  helperText={touched["startDate"] && errors["startDate"]}
                  value={values.startDate}
                  type="datetime"
                />

                <DateAndTimePicker
                  name="endDate"
                  label="Крайна дата"
                  onChange={(e) => (values.endDate = e as Date)}
                  error={touched["endDate"] && !!errors["endDate"]}
                  helperText={touched["endDate"] && errors["endDate"]}
                  value={values.endDate}
                  type="datetime"
                />

                <TextField
                  name="location"
                  label="Място*"
                  error={touched["location"] && !!errors["location"]}
                  helperText={touched["location"] && errors["location"]}
                  onChange={handleChange}
                  value={values.location}
                  type="text"
                />

                <TextField
                  name="phone"
                  label="Телефон"
                  error={touched["phone"] && !!errors["phone"]}
                  helperText={touched["phone"] && errors["phone"]}
                  onChange={handleChange}
                  value={values.phone}
                  type="text"
                />

                <TextField
                  name="email"
                  label="Имейл"
                  error={touched["email"] && !!errors["email"]}
                  helperText={touched["email"] && errors["email"]}
                  onChange={handleChange}
                  value={values.email}
                  type="text"
                />

                <TextField
                  name="link"
                  label="Линк"
                  error={touched["link"] && !!errors["link"]}
                  helperText={touched["link"] && errors["link"]}
                  onChange={handleChange}
                  value={values.link}
                  type="text"
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

export default EventForm;
