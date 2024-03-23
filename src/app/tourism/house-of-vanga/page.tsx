"use client";
import ImageCarousel from "@/components/SmallComponents/ImageCarousel";
import PageHeader from "@/components/SmallComponents/PageHeader";
import { Stack, Typography } from "@mui/material";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import img1 from "../../../../public/assets/tourism/houseVanga/img1.jpg";
import img2 from "../../../../public/assets/tourism/houseVanga/img2.jpg";
import img3 from "../../../../public/assets/tourism/houseVanga/img3.jpg";
import img4 from "../../../../public/assets/tourism/houseVanga/img4.jpg";

const IMAGES_DATA = [img1.src, img3.src, img4.src];

const PetrichMuseumPage = () => {
  return (
    <Stack>
      <PageHeader title="Къща Ванга" image={img2} />

      <Stack
        width="100%"
        gap={3}
        px={{ xs: 2, sm: 2, md: 10 }}
        py={{ xs: 10, sm: 10, md: 10 }}
        textAlign="justify"
      >
        <Stack mb={2}>
          <Stack
            direction="row"
            justifyContent="flex-start"
            alignItems="center"
            gap={1}
          >
            <CalendarMonthIcon />
            <Typography>Всеки ден от 10:00 до 17:00 ч.</Typography>
          </Stack>
        </Stack>

        <Typography component="h4" variant="h3">
          Вратата към мистериите на миналото, прозорец към необятния свят на
          бъдещето.
        </Typography>

        <Typography component="p" variant="body1" textAlign="justify">
          Музейната експозиция включва лични вещи, предмети, подаръци, които
          Ванга е получавала от благодарни хора. Всички помещения, съхранили
          духа на пророчицата, са запазили своята автентичност.
        </Typography>
        <Typography component="p" variant="body1" textAlign="justify">
          На първия етаж са молитвената стая и кухнята, а вдясно, след зимната
          градина, е стаята, в която Ванга е приемала своите посетители.
        </Typography>
        <Typography component="p" variant="body1" textAlign="justify">
          На втория етаж се намират гостната, Белият салон, спалнята и
          остъклената тераса, която е служила за отдих на пророчицата.
        </Typography>
        <Typography component="p" variant="body1" textAlign="justify">
          Заповядайте в Къща Ванга, за да усетите завладяващата атмосфера в
          скромния дом на една велика българка!
        </Typography>
        <Typography component="p" variant="body1" textAlign="justify">
          Вангелия Гущерова е родена през 1911 г. Вследствие на внезапната буря,
          на 12-годишна възраст тя остава сляпа завинаги.
        </Typography>
        <Typography component="p" variant="body1" textAlign="justify">
          Постепенно започват да се проявяват нейните пророчески способности.
          Става известна през годините на Втората световна война. Отчаяни хора,
          загубили връзка с близките си, отивали при Ванга с надеждата да ги
          успокои или да посочи лобните им места. Хиляди хора идвали при Ванга
          със своята болка и си тръгвали с надежда. Често са я посещавали
          различни държавници, културни и спортни дейци.
        </Typography>
        <Typography component="p" variant="body1" textAlign="justify">
          Днес Къща Ванга е една от основните забележителности в центъра на
          града – обект към Исторически музей Петрич. Къщата на българската
          пророчица се радва на посетители от цял свят.
        </Typography>
        <Typography component="p" variant="body1" textAlign="justify">
          Семейната къща на Ванга отваря врати за посетители на 5 май 2008 г.
        </Typography>

        <iframe
          width="100%"
          height="600"
          scrolling="no"
          src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=%D0%9A%D1%8A%D1%89%D0%B0-%D0%BC%D1%83%D0%B7%D0%B5%D0%B9%20%E2%80%9E%D0%92%D0%B0%D0%BD%D0%B3%D0%B0%E2%80%9C,%20%D0%A6%D0%B5%D0%BD%D1%82%D1%8A%D1%80,%20%D1%83%D0%BB.%20%D0%92%D0%B0%D0%BD%D0%B3%D0%B0%2010,%202850%20%D0%9F%D0%B5%D1%82%D1%80%D0%B8%D1%87+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          style={{ border: 0 }}
        />
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
