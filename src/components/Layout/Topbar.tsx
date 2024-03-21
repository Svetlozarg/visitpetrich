"use client";
import { AppBar, Toolbar, Stack, Typography } from "@mui/material";
import Logo from "./Logo";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Drawer from "./Drawer";
import HomeIcon from "@mui/icons-material/Home";
import LocationCityIcon from "@mui/icons-material/LocationCity";
import VrpanoIcon from "@mui/icons-material/Vrpano";
import StadiumIcon from "@mui/icons-material/Stadium";
import DirectionsBikeIcon from "@mui/icons-material/DirectionsBike";
import LuggageIcon from "@mui/icons-material/Luggage";
import ArticleIcon from "@mui/icons-material/Article";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";

type Page = {
  name: string;
  url: string;
  icon: React.ReactElement<any, any>;
};

export const pages: Page[] = [
  {
    name: "Начало",
    url: "/",
    icon: <HomeIcon sx={{ color: "primary.main" }} />,
  },
  {
    name: "История",
    url: "/about",
    icon: <LocationCityIcon sx={{ color: "primary.main" }} />,
  },
  {
    name: "Туризъм",
    url: "/tourism",
    icon: <VrpanoIcon sx={{ color: "primary.main" }} />,
  },
  {
    name: "Култура",
    url: "/culture",
    icon: <StadiumIcon sx={{ color: "primary.main" }} />,
  },
  {
    name: "Спорт",
    url: "/sport",
    icon: <DirectionsBikeIcon sx={{ color: "primary.main" }} />,
  },
  {
    name: "Забавления",
    url: "/activities",
    icon: <SportsEsportsIcon sx={{ color: "primary.main" }} />,
  },
  {
    name: "Настаняване",
    url: "/accommodation",
    icon: <LuggageIcon sx={{ color: "primary.main" }} />,
  },
  {
    name: "Събития",
    url: "/events",
    icon: <ArticleIcon sx={{ color: "primary.main" }} />,
  },
];

function Topbar() {
  const pathname = usePathname();

  return (
    <AppBar
      position="relative"
      sx={{
        height: { xs: "70px", sm: "90px", md: "90px" },
        transition: "250ms ease-in-out",
        bgcolor: "#fff",
        boxShadow: "0px 1px 5px 0px rgba(0,0,0,0.75)",
        px: { xs: "0", sm: "20px", md: "20px" },
      }}
    >
      <Toolbar sx={{ height: "100%" }} disableGutters>
        <Stack
          width="100%"
          height="100%"
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Logo />

          <Stack sx={{ display: { xs: "flex", md: "none" } }} ml={2}>
            <Drawer />
          </Stack>

          <Stack
            direction="row"
            gap={2}
            sx={{ display: { xs: "none", md: "flex" } }}
            ml={2}
          >
            {pages.map((page) => (
              <Link href={page.url} key={page.name}>
                <Typography
                  component="p"
                  variant="h4"
                  color="common.black"
                  fontWeight="normal"
                  fontSize={{ md: "1rem", lg: "1.25rem" }}
                  sx={{
                    cursor: "pointer",
                    borderBottom:
                      pathname === page.url ? "2px solid transparent" : "none",
                    borderColor: "common.black",
                  }}
                >
                  {page.name}
                </Typography>
              </Link>
            ))}
          </Stack>
        </Stack>
      </Toolbar>
    </AppBar>
  );
}
export default Topbar;
