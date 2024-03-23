import { Box, Stack, Typography } from "@mui/material";
import image from "../../../../public/assets/home/беласица-планина.jpg";

const HomeTourism = () => {
  return (
    <Stack
      direction="row"
      justifyContent="center"
      alignItems="flex-start"
      flexWrap={{ xs: "wrap", sm: "wrap", md: "nowrap" }}
      flexDirection={{
        xs: "column-reverse",
        sm: "column-reverse",
        md: "row",
        l: "row",
      }}
      gap={4}
      p={{ xs: 2, sm: 2, md: 10 }}
      my={{ xs: 8, sm: 8, md: 0 }}
    >
      <Stack width="100%" maxWidth={{ md: "600px" }} gap={3}>
        <Typography component="h4" variant="h3">
          Туризъм
        </Typography>

        <Typography component="p" variant="body1">
          Живописният град привлича своите туристи с изключително богата история
          и интересни забележителности. В покрайнините на града се намира
          Хераклея Синтика, древноримски град, известен с огромното си
          археологично наследство, включващо впечатляващи разкопки и антични
          паметници.
        </Typography>

        <Typography component="p" variant="body1">
          Друга значима забележителност в района е Самуиловата крепост, която е
          символ на силата и стратегическото значение на града през различни
          исторически периоди. Средновековната крепост се издига върху
          най-високият хълм и предлага великолепна гледка към околната местност.
        </Typography>

        <Typography component="p" variant="body1">
          Също така, не бива да се пропуска къщата на Ванга, която е прочута
          като домът на известната българска предвестница и целителка.
          Посетителите могат да разгледат музея в къщата и да научат повече за
          живота и делото на Ванга.
        </Typography>

        <Typography component="p" variant="body1">
          Историческият музей в Петрич предлага богата колекция от артефакти,
          снимки и документи, разкриващи многобройните аспекти на историята и
          културата на града и неговия регион. Музеят предоставя незабравимо
          пътуване в миналото и автентичността на региона.
        </Typography>
      </Stack>

      <Box
        sx={{
          width: "100%",
          maxWidth: "800px",
          height: "500px",
          backgroundImage: `url('${image.src}')`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
          borderRadius: "10px",
        }}
      ></Box>
    </Stack>
  );
};

export default HomeTourism;
