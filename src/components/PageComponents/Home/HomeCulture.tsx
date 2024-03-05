import { Stack, Typography } from "@mui/material";
import Image from "next/image";

const HomeCulture = () => {
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
        src="https://ik.imagekit.io/obelussoft/VisitPetrich/%D0%A4%D0%B5%D1%81%D1%82%D0%B8%D0%B2%D0%B0%D0%BB%20%D0%BD%D0%B0%20%D0%BA%D0%B5%D1%81%D1%82%D0%B5%D0%BD%D0%B0%20(11)_3La4R8zN7.jpg?updatedAt=1708207456870"
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
      <Stack width="100%" maxWidth="600px" gap={2}>
        <Typography component="h4" variant="h2">
          Културно развитие
        </Typography>

        <Typography component="p" variant="body1">
          Град Петрич има разнообразна култура, която отразява богатата му
          история и нейното влияние през годините. Смесицата от традиции и
          обичаи на различни етнически групи, които са населявали региона през
          вековете, прави Петрич уникален културен център.
        </Typography>

        <Typography component="p" variant="body1">
          Историята на Петрич се простира дълбоко в миналото, като градът е бил
          населен от древни тракийци, римляни, византийци и останали след тях
          културни и национални групи. Важни археологически находки, като древни
          тракийски градове и римски вили, свидетелстват за богатството на
          културата и цивилизацията, които са съществували в региона.
        </Typography>

        <Typography component="p" variant="body1">
          Съвременният Петрич съчетава тази богата история със съвременни арт
          проекти, културни събития и фестивали, които поддържат и насърчават
          творчеството и културното разнообразие в града. Културните институции,
          музеи и галерии предоставят възможности за обогатяване на културния
          живот на местните жители и посетителите на града.
        </Typography>
      </Stack>
    </Stack>
  );
};

export default HomeCulture;
