"use client";
import ImageCarousel from "@/components/SmallComponents/ImageCarousel";
import PageHeader from "@/components/SmallComponents/PageHeader";
import { Stack, Typography } from "@mui/material";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import LinkIcon from "@mui/icons-material/Link";
import Link from "next/link";
import image1 from "../../../../public/assets/tourism/museum/museum1.jpg";
import image2 from "../../../../public/assets/tourism/museum/museum2.jpg";
import image3 from "../../../../public/assets/tourism/museum/museum4.jpg";
import image4 from "../../../../public/assets/tourism/museum/museum5.jpg";
import image5 from "../../../../public/assets/tourism/museum/museum6.jpg";
import image6 from "../../../../public/assets/tourism/museum/museum7.jpg";
import image7 from "../../../../public/assets/tourism/museum/museum9.jpg";
import image8 from "../../../../public/assets/tourism/museum/museum10.jpg";
import image9 from "../../../../public/assets/tourism/museum/museum11.jpg";
import image10 from "../../../../public/assets/tourism/museum/museum12.jpg";

const IMAGES_DATA = [
  image1.src,
  image2.src,
  image3.src,
  image4.src,
  image5.src,
  image6.src,
  image7.src,
  image8.src,
  image9.src,
  image10.src,
];

const PetrichMuseumPage = () => {
  return (
    <Stack>
      <PageHeader title="Исторически Музей" image={image1} />

      <Stack
        width="100%"
        gap={3}
        px={{ xs: 2, sm: 2, md: 10 }}
        py={{ xs: 10, sm: 10, md: 10 }}
        textAlign="justify"
      >
        <Stack mb={2} direction="row" gap={4}>
          <Stack
            direction="row"
            justifyContent="flex-start"
            alignItems="center"
            gap={1}
          >
            <CalendarMonthIcon />
            <Typography>Понеделник – Неделя, от 09:00 до 18:00 ч.</Typography>
          </Stack>

          <Stack
            direction="row"
            justifyContent="flex-start"
            alignItems="center"
            gap={1}
          >
            <LinkIcon />
            <Link href="https://petrichhistorymuseum.bg" target="_blank">
              <Typography sx={{ textDecoration: "underline" }}>
                Уебсайт
              </Typography>
            </Link>
          </Stack>
        </Stack>

        <Typography component="h4" variant="h3">
          Исторически музей петрич - спомени от миналото и поглед към бъдещето
        </Typography>

        <Typography component="p" variant="body1" textAlign="justify">
          Новият дом на Исторически музей Петрич е сред най-значимите сгради,
          проектирани и предвидени за нуждите на музей, строени в последното
          десетилетие в България. Изграден по съвместен Българо - Гръцки проект,
          от м.Май 2022 г. е отворен за посетители. Годишно музеят е посещаван
          от над 20 000 души.
        </Typography>
        <Typography component="p" variant="body1" textAlign="justify">
          На площ от над 1 800 кв.м. се съхранява и експонира културно –
          историческото наследство на Петрич и района.
        </Typography>
        <Typography component="p" variant="body1" textAlign="justify">
          Трансформираното градско пространство на стари казарми в центъра на
          Петрич се превърнаха в нов градски парк, а сред него - девоенизирана
          сграда се преобрази в новия дом на Исторически музей Петрич. С модерна
          архитектура в индустриален стил, преобразяващи се зелени фасади и
          атрактивно околно пространство, сградата отговаря на всички принципи
          на новия Европейски Баухаус.
        </Typography>
        <Typography component="p" variant="body1" textAlign="justify">
          Чрез похватите на съвременната музеология са представени най-ценните
          експонати от фондовете на музея. Експозициите и изложбите са подредени
          в три основни направления Археология, История и Етнография. Отвореното
          експозиционно пространство позволява плавно преминаване между
          различните теми, свързани с различните периоди от развитието на Петрич
          и региона.
        </Typography>
        <Typography component="p" variant="body1" textAlign="justify">
          В залата за временни изложби, която дава възможност за представяне на
          гостуващи изложби се провеждат различни културни събития, изложби на
          съвременни местни и гостуващи творци, временни изложби от други музеи
          в страната и чужбина.
        </Typography>
        <Typography component="p" variant="body1" textAlign="justify">
          В музея функционира и Музейна работилница със свободен достъп за деца
          и ученици, организирани и свободни посещения с предварително
          записване.
        </Typography>

        <iframe
          width="100%"
          height="600"
          scrolling="no"
          src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=%D0%98%D1%81%D1%82%D0%BE%D1%80%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%B8%20%D0%BC%D1%83%D0%B7%D0%B5%D0%B9%20%D0%9F%D0%B5%D1%82%D1%80%D0%B8%D1%87,%20%D0%A6%D0%B5%D0%BD%D1%82%D1%8A%D1%80,%20%D1%83%D0%BB.%20%E2%80%9E%D0%A0%D0%BE%D0%BA%D1%84%D0%B5%D0%BB%D0%B5%D1%80%E2%80%9C%2080,%202850%20%D0%9F%D0%B5%D1%82%D1%80%D0%B8%D1%87+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
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
