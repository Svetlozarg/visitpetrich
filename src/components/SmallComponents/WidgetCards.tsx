"use client";
import { Stack, Typography } from "@mui/material";
import LandscapeIcon from "@mui/icons-material/Landscape";
import TheaterComedyIcon from "@mui/icons-material/TheaterComedy";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import HotelIcon from "@mui/icons-material/Hotel";
import { useRouter } from "next/navigation";

type WidgetCardType = {
  image: string;
  icon: React.ReactElement<any, any>;
  title: string;
  description: string;
  link: string;
};

const WIDGET_CARDS_DATA: WidgetCardType[] = [
  {
    image:
      "https://ik.imagekit.io/obelussoft/VisitPetrich/petrich-museum_7VZpceUwp.jpg?updatedAt=1708164126233",
    icon: <LandscapeIcon sx={{ color: "common.white", fontSize: "6rem" }} />,
    title: "Туризъм",
    description: "Туристически обекти",
    link: "/tourism",
  },
  {
    image:
      "https://ik.imagekit.io/obelussoft/VisitPetrich/culture-petrich_04wZtXioU.jpg?updatedAt=1708164126114",
    icon: (
      <TheaterComedyIcon sx={{ color: "common.white", fontSize: "6rem" }} />
    ),
    title: "Култура",
    description: "Културни събития",
    link: "/culture",
  },
  {
    image:
      "https://ik.imagekit.io/obelussoft/VisitPetrich/sport-petrich_gZOCT2I6T.jpg?updatedAt=1708164126256",
    icon: <EmojiEventsIcon sx={{ color: "common.white", fontSize: "6rem" }} />,
    title: "Спорт",
    description: "Спортът в града",
    link: "/sport",
  },
  {
    image:
      "https://ik.imagekit.io/obelussoft/VisitPetrich/hotel-petrich_1wEZi2Rx_.jpg?updatedAt=1708164126007",
    icon: <HotelIcon sx={{ color: "common.white", fontSize: "6rem" }} />,
    title: "Настаняване",
    description: "Хотели и къщи за гости",
    link: "/accommodation",
  },
];

const WidgetCards = () => {
  const router = useRouter();

  return (
    <Stack
      direction="row"
      justifyContent="center"
      alignItems="center"
      flexWrap="wrap"
      gap={6}
      pt={15}
      pl={2}
      pr={2}
      pb={10}
    >
      {WIDGET_CARDS_DATA.map((card, index) => (
        <Stack
          key={index}
          width="100%"
          maxWidth="300px"
          height="300px"
          justifyContent="center"
          alignItems="center"
          gap={2}
          sx={{
            background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('${card.image}')`,
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
          onClick={() => router.push(card.link, { scroll: true })}
        >
          {card.icon}
          <Stack gap={1}>
            <Typography
              component="h4"
              variant="h3"
              color="common.white"
              textAlign="center"
            >
              {card.title}
            </Typography>
            <Typography
              component="p"
              variant="body1"
              color="common.white"
              textAlign="center"
            >
              {card.description}
            </Typography>
          </Stack>
        </Stack>
      ))}
    </Stack>
  );
};

export default WidgetCards;
