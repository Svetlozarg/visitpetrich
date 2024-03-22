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
            "url('https://ik.imagekit.io/obelussoft/VisitPetrich/DJI_0074-min_YexJSmkF_.jpg')",
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
          Петрич е най-южния град в България, намиращ се на границата с Гърция и
          Северна Македония. Лесно достъпен и с добра транспортна свързаност -
          на 180 км от столицата София, на 130 км от Солун, на 188 км от Скопие.
        </Typography>

        <Typography component="p" variant="body1">
          ГКПП “Кулата - Промахон” е на 13 км от Петрич, а ГКПП “Златарево -
          Ново село” - на 20 км.
        </Typography>

        <Typography component="p" variant="body1">
          Територията на общината е с обща площ 650.1 км2 и в нейната
          териториална структура влизат 54 населени места, 53 села и един град,
          който се явява и общински център – град Петрич.
        </Typography>

        <Typography component="p" variant="body1">
          Населението на града е 26 093 души, а общо за общината са 46 918 души.
          Петрич е втория по големина град в Благоевградска област.
        </Typography>

        <Typography component="p" variant="body1">
          Петрич е града с най-много слънчеви дни в България.
        </Typography>
      </Stack>
    </Stack>
  );
};

export default HomeAbout;
