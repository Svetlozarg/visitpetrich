import Button from "@/components/MUIComponents/Button";
import { Stack, Typography } from "@mui/material";
import Link from "next/link";
import homeHero from "../../../../public/assets/home/homehero.jpg";

const HomeHero = () => {
  return (
    <Stack
      width="100vw"
      height="calc(100vh - 90px)"
      sx={{
        background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('${homeHero.src}')`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center center",
      }}
    >
      <Stack
        width="100%"
        height="100%"
        justifyContent="center"
        alignItems="center"
        sx={{ color: "white" }}
        gap={4}
      >
        <Typography
          component="h1"
          variant="h1"
          letterSpacing="6px"
          textAlign="center"
        >
          Туризъм в Петрич
        </Typography>
        <Typography
          component="h2"
          variant="h3"
          letterSpacing="2px"
          textAlign="center"
        >
          Изживяване отвъд очакването
        </Typography>

        <Link href="/about">
          <Button message="История на града" />
        </Link>
      </Stack>
    </Stack>
  );
};

export default HomeHero;
