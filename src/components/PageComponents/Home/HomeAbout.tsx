import { Box, Stack, Typography } from "@mui/material";

const HomeAbout = () => {
  return (
    <Stack
      direction="row"
      justifyContent="center"
      gap={4}
      p={{ xs: 2, sm: 2, md: 10 }}
      flexWrap={{ xs: "wrap", sm: "wrap", md: "nowrap" }}
    >
      <Box
        sx={{
          width: "100%",
          maxWidth: "800px",
          height: "500px",
          backgroundImage:
            "url('https://ik.imagekit.io/obelussoft/VisitPetrich/park-petrich4_Rp7ihwjRW.jpg?updatedAt=1708162220874')",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
          borderRadius: "10px",
        }}
      ></Box>

      <Stack width="100%" maxWidth={{ md: "600px" }} gap={3}>
        <Typography component="h4" variant="h3">
          За Града
        </Typography>
        <Typography component="p" variant="body1">
          Петрич е град в Югозападна България и административен център на целият
          окръг. Населението на града е преблизително 30 000 души. Градът е
          разположен на 20 км северно от границата с Република Македония и на 5
          км от границата с Гърция.
        </Typography>

        <Typography component="p" variant="body1">
          Местността е позната, като един от най-старите градове в България,
          като на територията на града са открити следи от живот още от епохата
          на неолита. В античността мястото е било известно като Патраис, който
          е бил част от римската провинция Мизия.
        </Typography>

        <Typography component="p" variant="body1">
          Само на 8 км. от Община Петрич се намира и небезизвестната местност
          Рупите. В миналото на това място е изригвал вулкан, който образува
          минерални извори с лечебни свойства и температура на водата, която
          натурално достига до цели 75ºC.
        </Typography>
      </Stack>
    </Stack>
  );
};

export default HomeAbout;
