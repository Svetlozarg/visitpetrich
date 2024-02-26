"use client";
import { useEffect, useState } from "react";
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
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  return (
    <AppBar
      position="fixed"
      sx={{
        transition: "250ms ease-in-out",
        backgroundColor: scrollPosition > 150 ? "common.white" : "transparent",
        boxShadow:
          scrollPosition > 150 ? "0px 1px 5px 0px rgba(0,0,0,0.75)" : "none",
        px: "40px",
      }}
    >
      <Toolbar disableGutters>
        <Stack
          width="100%"
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Logo />

          <Stack sx={{ display: { xs: "flex", md: "none" } }}>
            <Drawer scrollPosition={scrollPosition} />
          </Stack>

          <Stack
            direction="row"
            gap={2}
            sx={{ display: { xs: "none", md: "flex" } }}
          >
            {pages.map((page) => (
              <Link href={page.url} key={page.name}>
                <Typography
                  component="p"
                  variant="h4"
                  color={scrollPosition > 150 ? "common.black" : "common.white"}
                  fontWeight="normal"
                  sx={{
                    cursor: "pointer",
                    borderBottom:
                      pathname === page.url ? "2px solid transparent" : "none",
                    borderColor:
                      scrollPosition > 150 ? "common.black" : "common.white",
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
