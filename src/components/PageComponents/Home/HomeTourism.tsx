import { Stack, Typography } from "@mui/material";
import Image from "next/image";

const HomeTourism = () => {
  return (
    <Stack
      direction="row"
      justifyContent="center"
      alignItems="flex-start"
      flexWrap="wrap"
      flexDirection={{
        xs: "column-reverse",
        sm: "column-reverse",
        md: "row",
        l: "row",
      }}
      gap={4}
      p={{ xs: 2, sm: 2, md: 10 }}
    >
      <Stack width="100%" maxWidth="600px" gap={3}>
        <Typography component="h4" variant="h2">
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
      <Image
        src="https://ik.imagekit.io/obelussoft/VisitPetrich/HOR09102%20(1)_5qRy2wlXs.jpg?updatedAt=1708207084091"
        alt="Park Petrich"
        width={100}
        height={100}
        style={{
          width: "100%",
          maxWidth: "800px",
          height: "500px",
          objectFit: "cover",
          borderRadius: "10px",
        }}
      />
    </Stack>
  );
};

export default HomeTourism;
