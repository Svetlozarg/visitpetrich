import { Stack, Typography } from "@mui/material";
import Image from "next/image";

const HomeSport = () => {
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
      p={10}
    >
      <Stack width="100%" maxWidth="600px" gap={3}>
        <Typography component="h4" variant="h2">
          Спортът в град Петрич
        </Typography>

        <Typography component="p" variant="body1">
          Градът Петрич не само е културен и исторически център, но също така
          притежава богата{" "}
          <Typography component="span" variant="body1" color="primary.main">
            спортна традиция и активен спортен живот
          </Typography>
          . В рамките на града и неговите околности се предлагат разнообразни
          възможности за спорт и рекреация, които привличат както местни спортни
          ентусиасти, така и посетители.
        </Typography>

        <Typography component="p" variant="body1">
          Петрич е известен със своите спортни състезания и събития, включващи
          различни дисциплини като{" "}
          <Typography component="span" variant="body1" color="primary.main">
            футбол, баскетбол, волейбол, борба и други.
          </Typography>
          Местният футболен отбор, например, участва активно в регионални и
          национални футболни лиги, представяйки града с гордост на спортната
          сцена.
        </Typography>

        <Typography component="p" variant="body1">
          Освен традиционните спортове, природата около Петрич предлага идеални
          условия за активности като{" "}
          <Typography component="span" variant="body1" color="primary.main">
            планинско колоездене, планинско катерене и ходене
          </Typography>
          . Близостта до планина Беласица и други природни забележителности
          прави града привлекателен за спортни ентусиасти, които се стремят към
          активен и здравословен живот, да се насладят на вълнуващи приключения
          на открито.
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

export default HomeSport;
