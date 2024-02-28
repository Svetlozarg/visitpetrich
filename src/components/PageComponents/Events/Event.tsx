import { Stack, Typography } from "@mui/material";
import Image from "next/image";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import PlaceIcon from "@mui/icons-material/Place";
import Button from "@/components/MUIComponents/Button";

export type EventType = {
  id: string;
  title: string;
  place: string;
  startDate: Date;
  endDate: Date;
  image: string;
};

const Event: React.FC<EventType> = ({
  title,
  place,
  startDate,
  endDate,
  image,
}) => {
  const formatDateTime = (date: Date) => {
    const day = date.getDate().toString().padStart(2, "0");
    const month = date.toLocaleDateString("bg-BG", { month: "short" });
    const year = date.getFullYear();
    return `${day}.${month}.${year}`;
  };

  return (
    <Stack
      width="100%"
      maxWidth="400px"
      height="440px"
      sx={{
        cursor: "pointer",
        boxShadow: "0 0 10px 0 rgba(0, 0, 0, 0.1)",
      }}
    >
      <Image
        src={image}
        alt="Park Petrich"
        width={100}
        height={100}
        style={{
          width: "100%",
          height: "250px",
          objectFit: "cover",
          borderBottomRightRadius: "50%",
          borderBottomLeftRadius: "50%",
          borderBottom: "1px solid #edebeb",
        }}
      />

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
            {place}
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
            {`${formatDateTime(startDate)} - ${formatDateTime(endDate)}`}
          </Typography>
        </Stack>
      </Stack>

      <Button message="Виж повече" />
    </Stack>
  );
};

export default Event;
