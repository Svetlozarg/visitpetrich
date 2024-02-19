"use client";
import { useEffect, useState } from "react";
import { AppBar, Toolbar, IconButton, Stack, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Logo from "./Logo";
import Link from "next/link";
import { usePathname } from "next/navigation";

type Page = {
  name: string;
  url: string;
};

export const pages: Page[] = [
  { name: "Начало", url: "/" },
  { name: "За Петрич", url: "/about" },
  { name: "Туризъм", url: "/tourism" },
  { name: "Култура", url: "/culture" },
  { name: "Спорт", url: "/sport" },
  { name: "Настаняване", url: "/accommodation" },
  { name: "Контакти", url: "/contact" },
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
            <IconButton>
              <MenuIcon />
            </IconButton>
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
