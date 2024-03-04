"use client";
import ImageCarousel from "@/components/SmallComponents/ImageCarousel";
import PageHeader from "@/components/SmallComponents/PageHeader";
import { Stack, Typography } from "@mui/material";

const IMAGES_DATA = [
  "https://ik.imagekit.io/obelussoft/VisitPetrich/%D0%98%D1%81%D1%82%D0%BE%D1%80%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%B8%20%D0%9C%D1%83%D0%B7%D0%B5%D0%B9/museum%2011_2EQi1MxM7.jpg?updatedAt=1708334010893",
  "https://ik.imagekit.io/obelussoft/VisitPetrich/%D0%98%D1%81%D1%82%D0%BE%D1%80%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%B8%20%D0%9C%D1%83%D0%B7%D0%B5%D0%B9/museum%208_LI2faNiPV.jpg?updatedAt=1708334010955",
  "https://ik.imagekit.io/obelussoft/VisitPetrich/%D0%98%D1%81%D1%82%D0%BE%D1%80%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%B8%20%D0%9C%D1%83%D0%B7%D0%B5%D0%B9/museum%202_JEqjQ9RbU.jpg?updatedAt=1708334010420",
  "https://ik.imagekit.io/obelussoft/VisitPetrich/%D0%98%D1%81%D1%82%D0%BE%D1%80%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%B8%20%D0%9C%D1%83%D0%B7%D0%B5%D0%B9/museum%206_4rii2vDqs.jpg?updatedAt=1708334010350",
  "https://ik.imagekit.io/obelussoft/VisitPetrich/%D0%98%D1%81%D1%82%D0%BE%D1%80%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%B8%20%D0%9C%D1%83%D0%B7%D0%B5%D0%B9/museum%209_Q0buW5OHt9.jpg?updatedAt=1708334009851",
  "https://ik.imagekit.io/obelussoft/VisitPetrich/%D0%98%D1%81%D1%82%D0%BE%D1%80%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%B8%20%D0%9C%D1%83%D0%B7%D0%B5%D0%B9/museum%204_3pgP27NhM.jpg?updatedAt=1708334009665",
  "https://ik.imagekit.io/obelussoft/VisitPetrich/%D0%98%D1%81%D1%82%D0%BE%D1%80%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%B8%20%D0%9C%D1%83%D0%B7%D0%B5%D0%B9/museum%2010_ZKXI7tKLm.jpg?updatedAt=1708334009628",
  "https://ik.imagekit.io/obelussoft/VisitPetrich/%D0%98%D1%81%D1%82%D0%BE%D1%80%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%B8%20%D0%9C%D1%83%D0%B7%D0%B5%D0%B9/museum%205_6HdvqRJUn.jpg?updatedAt=1708334009566",
  "https://ik.imagekit.io/obelussoft/VisitPetrich/%D0%98%D1%81%D1%82%D0%BE%D1%80%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%B8%20%D0%9C%D1%83%D0%B7%D0%B5%D0%B9/museum%2012_p7e2QCnuY.jpg?updatedAt=1708334011576",
  "https://ik.imagekit.io/obelussoft/VisitPetrich/%D0%98%D1%81%D1%82%D0%BE%D1%80%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%B8%20%D0%9C%D1%83%D0%B7%D0%B5%D0%B9/museum%203_kA8rw2Otd.jpg?updatedAt=1708334011296",
  "https://ik.imagekit.io/obelussoft/VisitPetrich/%D0%98%D1%81%D1%82%D0%BE%D1%80%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%B8%20%D0%9C%D1%83%D0%B7%D0%B5%D0%B9/museum%207_2nS8qjkGl.jpg?updatedAt=1708334011270",
];

const PetrichMuseumPage = () => {
  return (
    <Stack justifyContent="center" alignItems="center">
      <PageHeader
        title="Исторически Музей"
        image="https://ik.imagekit.io/obelussoft/VisitPetrich/petrich-museum_7VZpceUwp.jpg?updatedAt=1708164126233"
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
          Преживей миналото, обогати състоянието на настоящето
        </Typography>

        <Typography component="p" variant="body1">
          Новият дом на Исторически музей Петрич е сред най-значимите сгради,
          проектирани и предвидени за нуждите на музейното дело, строени в
          последното десетилетие в България. От м.Май 2022г. е отворен за
          посетители.
        </Typography>
        <Typography component="p" variant="body1">
          На площ от над 1 800 кв.м. се съхранява и експонира културно –
          историческото наследство на Петрич и района.
        </Typography>
        <Typography component="p" variant="body1">
          Трансформираното градско пространство на стари казарми в центъра на
          Петрич се превърнаха в нов градски парк, а сред него - стара
          девоенизирана сграда се преобрази в новия дом на Исторически музей
          Петрич. С модерна архитектура в индустриален стил, преобразяващи се
          зелени фасади и атрактивно околно пространство, сградата отговаря на
          всички принципи на новия Европейски Баухаус.
        </Typography>
        <Typography component="p" variant="body1">
          Чрез похватите на съвременната музеология са представени най-ценните
          експонати от фондовете на музея. Експозициите и изложбите са подредени
          в три основни направления Археология, История и Етнография. Отвореното
          експозиционно пространство позволява плавно преминаване между
          различните теми, свързани с различните периоди от развитието на Петрич
          и региона.
        </Typography>
        <Typography component="p" variant="body1">
          Предвидена е зала за временни изложби, която дава възможност за
          представяне на гостуващи изложби
        </Typography>
        <Typography component="p" variant="body1">
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
