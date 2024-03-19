import { Box, Stack, Typography } from "@mui/material";

const HomeSport = () => {
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
      mt={{ xs: 8, sm: 8, md: 0 }}
    >
      <Stack width="100%" maxWidth={{ md: "600px" }} gap={3}>
        <Typography component="h4" variant="h3">
          Спорт
        </Typography>

        <Typography component="p" variant="body1">
          Петрич притежава богата спортна традиция и активен спортен живот. В
          рамките на града и неговите околности се предлагат разнообразни
          възможности за спортни активности, които привличат както местни
          спортни ентусиасти, така и посетители.
        </Typography>

        <Typography component="p" variant="body1">
          Петрич е известен със своите спортни състезания и събития, включващи
          различни дисциплини като футбол, баскетбол, волейбол, борба и други.
          Местният футболен отбор, например, участва активно в регионални и
          национални футболни първенства, представяйки града с гордост на
          спортната сцена.
        </Typography>

        <Typography component="p" variant="body1">
          Освен традиционните спортове, природата около Петрич предлага идеални
          условия за активности като планинско колоездене, катерене и походи.
          Близостта до планина Беласица и други природни забележителности прави
          града привлекателен за спортни ентусиасти, които се стремят към
          активен и здравословен живот, да се насладят на вълнуващи приключения
          на открито.
        </Typography>
      </Stack>

      <Box
        sx={{
          width: "100%",
          maxWidth: "800px",
          height: "500px",
          backgroundImage:
            "url('https://ik.imagekit.io/obelussoft/VisitPetrich/DJI_0077-min_mwKV4YC56.jpg')",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
          borderRadius: "10px",
        }}
      ></Box>
    </Stack>
  );
};

export default HomeSport;
