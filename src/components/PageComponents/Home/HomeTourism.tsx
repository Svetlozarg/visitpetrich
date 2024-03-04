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
          Туризмът в град Петрич
        </Typography>

        <Typography component="p" variant="body1">
          Петрич е живописен град, примамващ туристи със своята богата история и
          уникални забележителности. На покрайнините на града се намира{" "}
          <Typography component="span" variant="body1" color="primary.main">
            Хераклея Синтика
          </Typography>
          , древноримски град, известен с богатата си археологично наследство,
          включващо впечатляващи руини и антични паметници.
        </Typography>

        <Typography component="p" variant="body1">
          Друга значима забележителност в района е{" "}
          <Typography component="span" variant="body1" color="primary.main">
            Самуиловата крепост
          </Typography>
          , която се издига върху висок хълм и предлага великолепна гледка към
          околната местност. Тази средновековна крепост е символ на силата и
          стратегическото значение на града през различни исторически периоди.
        </Typography>

        <Typography component="p" variant="body1">
          Също така, не бива да се пропуска{" "}
          <Typography component="span" variant="body1" color="primary.main">
            къщата на Ванга
          </Typography>
          , която е прочута като домът на известната българска предвестница и
          целителка. Посетителите могат да разгледат музея в къщата и да научат
          повече за живота и делото на Ванга.
        </Typography>

        <Typography component="p" variant="body1">
          <Typography component="span" variant="body1" color="primary.main">
            Историческият музей
          </Typography>{" "}
          в Петрич предлага богата колекция от артефакти, снимки и документи,
          разкриващи многобройните аспекти на историята и културата на града и
          неговия регион. Този музей е незабравимо пътуване в миналото на Петрич
          и неговите обитатели.
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
