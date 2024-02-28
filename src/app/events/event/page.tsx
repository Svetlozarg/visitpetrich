import { Stack, Typography } from "@mui/material";
import PlaceIcon from "@mui/icons-material/Place";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import LinkIcon from "@mui/icons-material/Link";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

const EventPage = () => {
  return (
    <Stack>
      <Stack
        width="100vw"
        height="50vh"
        justifyContent="center"
        alignItems="center"
        sx={{
          background: `linear-gradient(rgba(0, 0, 0, 0.20), rgba(0, 0, 0, 0.20)), url(https://www.visitpetrich.com/img/2024/01//25/b53ce5c823a264702d788a9609f75908_jpg0_418111658_855148296619333_7445485058657356922_n.jpg)`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></Stack>

      <Stack
        width="100%"
        maxWidth="1200px"
        margin="0 auto"
        gap={2}
        px={2}
        py={8}
      >
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          gap={2}
          flexWrap="wrap"
          mb={3}
        >
          <Stack direction="row" gap={4} flexWrap="wrap">
            <Stack
              justifyContent="center"
              alignItems="center"
              direction="row"
              gap={2}
            >
              <CalendarMonthIcon />
              <Typography variant="body1">17-18.02.2024</Typography>
            </Stack>
            <Stack
              justifyContent="center"
              alignItems="center"
              direction="row"
              gap={2}
            >
              <PlaceIcon />
              <Typography variant="body1">Мелник</Typography>
            </Stack>
          </Stack>
          <Stack direction="row" gap={4} flexWrap="wrap">
            <Stack
              justifyContent="center"
              alignItems="center"
              direction="row"
              gap={2}
            >
              <LocalPhoneIcon />
              <Typography variant="body1">0888 888 888</Typography>
            </Stack>
            <Stack
              justifyContent="center"
              alignItems="center"
              direction="row"
              gap={2}
            >
              <LinkIcon />
              <Typography variant="body1">www.melnik.bg</Typography>
            </Stack>
          </Stack>
        </Stack>

        <Typography component="h2" variant="h2" mt={2} mb={4}>
          Дни на отворените врати в Долината на Струма 2024
        </Typography>

        <Typography component="p" variant="body1">
          Традиционните „Дни на отворените врати за винарните от Мелнишко“ се
          разширяват и тази година обхващат винарни от цялата Долина на Струма!
        </Typography>
        <Typography component="p" variant="body1">
          Дните на отворените врати ще се проведат през уикенда на 17-18.02.2024
          г., по случай празника на лозарите и винарите Св. Трифон Зарезан.
        </Typography>
        <Typography component="p" variant="body1">
          Винарните от региона отварят вратите си за посетители!
        </Typography>
        <Typography component="p" variant="body1">
          Очаквайте ритуален богослов и зарязване на лозята, турове на
          винарните, дегустации на новите реколти, музикални и танцови програми
          на открито с фокус върху върху местното вино и храна.
        </Typography>
      </Stack>
    </Stack>
  );
};

export default EventPage;
