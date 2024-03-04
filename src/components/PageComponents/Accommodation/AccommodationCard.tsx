import { Place } from "@/services/Places/apiPlacesSnippets";
import { Stack, Typography } from "@mui/material";
import Link from "next/link";

interface AccommodationCardProps {
  data: Place;
}

const AccommodationCard: React.FC<AccommodationCardProps> = ({ data }) => {
  return (
    <Link href={data.url} target="_blank">
      <Stack
        width="350px"
        height="350px"
        bgcolor="red"
        borderRadius="10px"
        justifyContent="center"
        alignItems="center"
        gap={2}
        sx={{
          background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('${data.image}')`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center center",
          borderRadius: "10px",
          cursor: "pointer",
          transition: "all 0.3s ease-in-out",

          "&:hover": {
            transform: "scale(1.05)",
          },
        }}
      >
        <Typography
          component="h4"
          variant="h3"
          color="common.white"
          textAlign="center"
        >
          {data.name}
        </Typography>
        <Typography
          component="p"
          variant="body1"
          color="common.white"
          textAlign="center"
        >
          {data.location}
        </Typography>
      </Stack>
    </Link>
  );
};

export default AccommodationCard;
