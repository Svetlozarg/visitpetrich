"use client";
import { Stack, Typography } from "@mui/material";
import Link from "next/link";
import { pages } from "./Topbar";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EmailIcon from "@mui/icons-material/Email";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";

const Footer = () => {
  return (
    <Stack>
      <Stack
        direction={{ sm: "column", md: "row" }}
        justifyContent={{ xs: "flex-start", sm: "space-around" }}
        alignItems="flex-start"
        bgcolor="background.paper"
        gap={{ xs: 4, sm: 2 }}
        pt={5}
        pb={10}
        px={4}
        flexWrap={{ md: "wrap", l: "nowrap" }}
      >
        <Stack>
          <Typography component="h6" variant="h3" mb={4}>
            Петрич
          </Typography>

          <Typography component="p" variant="body1" maxWidth="400px" mb={2}>
            Открийте красотата и богатството на Петрич - градът на историята,
            културата и природата.
          </Typography>

          <Typography component="p" variant="body1" maxWidth="400px" mb={2}>
            Изживейте миналото, преоткрийте бъдещето - гарантирани впечатления,
            незабравими моменти!
          </Typography>
        </Stack>

        <Stack>
          <Typography component="h6" variant="h3" mb={4}>
            Меню
          </Typography>

          <Stack height={{ sm: "100%", md: "150px" }} flexWrap="wrap" gap={2}>
            {pages.map((page, index) => (
              <Link key={index} href={page.url} passHref>
                <Typography
                  component="p"
                  variant="body1"
                  sx={{
                    transition: "150ms ease-in-out",
                    "&:hover": { color: "secondary.main" },
                  }}
                >
                  {page.name}
                </Typography>
              </Link>
            ))}
          </Stack>
        </Stack>

        <Stack>
          <Typography component="h6" variant="h3" mb={4}>
            Връзки
          </Typography>
          <Stack justifyContent="flex-start" alignItems="flex-start" gap={2}>
            <Link href="https://www.facebook.com/tic.petrich" target="_blank">
              <FacebookIcon sx={{ fontSize: "2.5rem" }} />
            </Link>
            <Link
              href="https://www.instagram.com/visitpetrich/"
              target="_blank"
            >
              <InstagramIcon sx={{ fontSize: "2.5rem" }} />
            </Link>
          </Stack>
        </Stack>

        <Stack>
          <Typography component="h6" variant="h3" mb={4}>
            Контакти
          </Typography>
          <Stack justifyContent="flex-start" alignItems="flex-start" gap={2}>
            <Stack
              direction="row"
              justifyContent="center"
              alignItems="center"
              gap={1}
            >
              <LocationOnIcon />
              <Typography component="p" variant="body1">
                ул. „Цар Борис III” № 24
              </Typography>
            </Stack>
            <Stack
              direction="row"
              justifyContent="center"
              alignItems="center"
              gap={1}
            >
              <LocalPhoneIcon />
              <Typography component="p" variant="body1">
                087 911 9840
              </Typography>
            </Stack>
            <Stack
              direction="row"
              justifyContent="center"
              alignItems="center"
              gap={1}
            >
              <EmailIcon />
              <Typography component="p" variant="body1">
                tic@oapetrich.bg
              </Typography>
            </Stack>
          </Stack>
        </Stack>
      </Stack>

      <Stack
        height="3rem"
        justifyContent="center"
        alignItems="center"
        bgcolor="common.black"
      >
        <Typography component="p" variant="body1" color="common.white">
          © 2024 VisitPetrich. All Rights Reserved | Created by{" "}
          <Typography component="span" variant="h5" color="primary.main">
            Сиско Груп
          </Typography>
        </Typography>
      </Stack>
    </Stack>
  );
};

export default Footer;
