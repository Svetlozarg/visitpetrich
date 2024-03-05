import { Stack, Typography } from "@mui/material";
import Image from "next/image";

const HomeAbout = () => {
  return (
    <Stack
      direction="row"
      justifyContent="center"
      alignItems="flex-start"
      flexWrap="wrap"
      gap={4}
      p={{ xs: 2, sm: 2, md: 10 }}
    >
      <Image
        src="https://ik.imagekit.io/obelussoft/VisitPetrich/park-petrich4_Rp7ihwjRW.jpg?updatedAt=1708162220874"
        alt="Park Petrich"
        width={100}
        height={100}
        style={{
          width: "100%",
          maxWidth: "800px",
          height: "450px",
          objectFit: "cover",
          borderRadius: "10px",
        }}
      />

      <Stack width="100%" maxWidth="600px" gap={3}>
        <Typography component="h4" variant="h2">
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
