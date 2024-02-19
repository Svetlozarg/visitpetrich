"use client";
import ImageCarousel from "@/components/SmallComponents/ImageCarousel";
import PageHeader from "@/components/SmallComponents/PageHeader";
import { Stack, Typography } from "@mui/material";

const IMAGES_DATA = [
  "https://ik.imagekit.io/obelussoft/VisitPetrich/%D0%9A%D1%8A%D1%89%D0%B0%20%D0%92%D0%B0%D0%BD%D0%B3%D0%B0/HOR09006_XreCdkqJ6.jpg?updatedAt=1708343476763",
  "https://ik.imagekit.io/obelussoft/VisitPetrich/%D0%9A%D1%8A%D1%89%D0%B0%20%D0%92%D0%B0%D0%BD%D0%B3%D0%B0/HOR08980_lIbe3Kd8d.jpg?updatedAt=1708343476474",
  "https://ik.imagekit.io/obelussoft/VisitPetrich/%D0%9A%D1%8A%D1%89%D0%B0%20%D0%92%D0%B0%D0%BD%D0%B3%D0%B0/HOR09017_w04mWlinX.jpg?updatedAt=1708343476219",
  "https://ik.imagekit.io/obelussoft/VisitPetrich/%D0%9A%D1%8A%D1%89%D0%B0%20%D0%92%D0%B0%D0%BD%D0%B3%D0%B0/DSC04432_lJBwLQtVK.jpg?updatedAt=1708343476147",
  "https://ik.imagekit.io/obelussoft/VisitPetrich/%D0%9A%D1%8A%D1%89%D0%B0%20%D0%92%D0%B0%D0%BD%D0%B3%D0%B0/HOR08985_2gEOpFT93.jpg?updatedAt=1708343475943",
  "https://ik.imagekit.io/obelussoft/VisitPetrich/%D0%9A%D1%8A%D1%89%D0%B0%20%D0%92%D0%B0%D0%BD%D0%B3%D0%B0/HOR08987_Tu0-pyL3H.jpg?updatedAt=1708343475890",
  "https://ik.imagekit.io/obelussoft/VisitPetrich/%D0%9A%D1%8A%D1%89%D0%B0%20%D0%92%D0%B0%D0%BD%D0%B3%D0%B0/DSC04453_U9caFpSqo.jpg?updatedAt=1708343476103",
];

const PetrichMuseumPage = () => {
  return (
    <Stack justifyContent="center" alignItems="center">
      <PageHeader
        title="Къща Ванга"
        image="https://ik.imagekit.io/obelussoft/VisitPetrich/%D0%9A%D1%8A%D1%89%D0%B0%20%D0%92%D0%B0%D0%BD%D0%B3%D0%B0/HOR09006_XreCdkqJ6.jpg?updatedAt=1708343476763"
      />

      <Stack
        width="100%"
        maxWidth="1200px"
        gap={3}
        px={{ xs: 2, sm: 2, md: 10 }}
        py={{ xs: 10, sm: 10, md: 10 }}
        textAlign="justify"
      >
        <Typography component="h4" variant="h3">
          Вратата към мистериите на миналото, прозорец към необятния свят на
          бъдещето.
        </Typography>

        <Typography component="p" variant="body1">
          Музейната експозиция включва лични вещи, предмети, подаръци, които
          Ванга е получавала от благодарни хора. Всички помещения, съхранили
          духа на пророчицата, са запазили своята автентичност.
        </Typography>
        <Typography component="p" variant="body1">
          На първия етаж са молитвената стая и кухнята, а вдясно, след зимната
          градина, е стаята, в която Ванга е приемала своите посетители.
        </Typography>
        <Typography component="p" variant="body1">
          На втория етаж се намират гостната, Белият салон, спалнята и
          остъклената тераса, която е служила за отдих на пророчицата.
        </Typography>
        <Typography component="p" variant="body1">
          Заповядайте в Къща Ванга, за да усетите завладяващата атмосфера в
          скромния дом на една велика българка!
        </Typography>
        <Typography component="p" variant="body1">
          Вангелия Гущерова е родена през 1911 г. Вследствие на внезапната буря,
          на 12-годишна възраст тя остава сляпа завинаги.
        </Typography>
        <Typography component="p" variant="body1">
          Постепенно започват да се проявяват нейните пророчески способности.
          Става известна през годините на Втората световна война. Отчаяни хора,
          загубили връзка с близките си, отивали при Ванга с надеждата да ги
          успокои или да посочи лобните им места. Хиляди хора идвали при Ванга
          със своята болка и си тръгвали с надежда. Често са я посещавали
          различни държавници, културни и спортни дейци.
        </Typography>
        <Typography component="p" variant="body1">
          Днес Къща Ванга е една от основните забележителности в центъра на
          града – обект към Исторически музей Петрич. Къщата на българската
          пророчица се радва на посетители от цял свят.
        </Typography>
        <Typography component="p" variant="body1">
          Семейната къща на Ванга отваря врати за посетители на 5 май 2008 г.
        </Typography>
      </Stack>

      <Stack width="100%" px={1} textAlign="center" mb={4}>
        <Typography component="h4" variant="h3" mb={4}>
          Галерия
        </Typography>

        <ImageCarousel images={IMAGES_DATA} />
      </Stack>
    </Stack>
  );
};

export default PetrichMuseumPage;
