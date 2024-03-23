"use client";
import { Stack, Typography } from "@mui/material";
import LandscapeIcon from "@mui/icons-material/Landscape";
import TheaterComedyIcon from "@mui/icons-material/TheaterComedy";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import HotelIcon from "@mui/icons-material/Hotel";
import { useRouter } from "next/navigation";
import image1 from "../../../public/assets/widgets/museum.jpg";
import image2 from "../../../public/assets/widgets/culture.jpg";
import image3 from "../../../public/assets/widgets/stadium.jpg";
import image4 from "../../../public/assets/widgets/hotel.jpg";

type WidgetCardType = {
  image: string;
  icon: React.ReactElement<any, any>;
  title: string;
  description: string;
  link: string;
};

const WIDGET_CARDS_DATA: WidgetCardType[] = [
  {
    image: image1.src,
    icon: <LandscapeIcon sx={{ color: "common.white", fontSize: "6rem" }} />,
    title: "Туризъм",
    description: "Туристически обекти",
    link: "/tourism",
  },
  {
    image: image2.src,
    icon: (
      <TheaterComedyIcon sx={{ color: "common.white", fontSize: "6rem" }} />
    ),
    title: "Култура",
    description: "Културни събития",
    link: "/culture",
  },
  {
    image: image3.src,
    icon: <EmojiEventsIcon sx={{ color: "common.white", fontSize: "6rem" }} />,
    title: "Спорт",
    description: "Спортът в града",
    link: "/sport",
  },
  {
    image: image4.src,
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
