"use client";
import ImageCarousel from "@/components/SmallComponents/ImageCarousel";
import PageHeader from "@/components/SmallComponents/PageHeader";
import { Stack, Typography } from "@mui/material";

const IMAGES_DATA = [
  "https://ik.imagekit.io/obelussoft/VisitPetrich/%D0%A1%D0%B0%D0%BC%D1%83%D0%B8%D0%BB%D0%BE%D0%B2%D0%B0%20%D0%9A%D1%80%D0%B5%D0%BF%D0%BE%D1%81%D1%82/HOR09097-min_mY7FalG3w.jpg?updatedAt=1708343708532",
  "https://ik.imagekit.io/obelussoft/VisitPetrich/%D0%A1%D0%B0%D0%BC%D1%83%D0%B8%D0%BB%D0%BE%D0%B2%D0%B0%20%D0%9A%D1%80%D0%B5%D0%BF%D0%BE%D1%81%D1%82/HOR09127-min_avpcKOAm6b.jpg?updatedAt=1708343707229",
  "https://ik.imagekit.io/obelussoft/VisitPetrich/%D0%A1%D0%B0%D0%BC%D1%83%D0%B8%D0%BB%D0%BE%D0%B2%D0%B0%20%D0%9A%D1%80%D0%B5%D0%BF%D0%BE%D1%81%D1%82/HOR09102-min_L5x2-VRd0.jpg?updatedAt=1708343706930",
  "https://ik.imagekit.io/obelussoft/VisitPetrich/%D0%A1%D0%B0%D0%BC%D1%83%D0%B8%D0%BB%D0%BE%D0%B2%D0%B0%20%D0%9A%D1%80%D0%B5%D0%BF%D0%BE%D1%81%D1%82/HOR09137-min_5Kiqr4doB.jpg?updatedAt=1708343704975",
];

const PetrichMuseumPage = () => {
  return (
    <Stack>
      <PageHeader
        title="Самуилова Крепост"
        image="https://ik.imagekit.io/obelussoft/VisitPetrich/%D0%A1%D0%B0%D0%BC%D1%83%D0%B8%D0%BB%D0%BE%D0%B2%D0%B0%20%D0%9A%D1%80%D0%B5%D0%BF%D0%BE%D1%81%D1%82/HOR09097-min_mY7FalG3w.jpg?updatedAt=1708343708532"
      />

      <Stack
        width="100%"
        gap={3}
        px={{ xs: 2, sm: 2, md: 10 }}
        py={{ xs: 10, sm: 10, md: 10 }}
        textAlign="justify"
      >
        <Typography component="h4" variant="h3">
          Крепост на непоклатимата воля, свидетел на славното минало.
        </Typography>

        <Typography component="p" variant="body1">
          На територията на Национален парк-музей „Самуилова крепост” Вие ще
          можете да видите:
          <ul>
            <li>
              Мемориалната скулптурна композиция с 5-метрова бронзова фигура на
              българския цар Самуил, дело на Борис Гондов.{" "}
            </li>
            <li>Интерактивна експозиционна зала; </li>
            <li>
              Възстановка на две средновековни землянки с вътрешен проход
              помежду им, която дава визуална представа за тогавашните
              строителни традиции;
            </li>
            <li>
              Очертания на землянки от средновековно селище, голяма землянка на
              цар Самуил
            </li>
            <li>
              Зидове от отбранителната система и каменни основи на голяма
              наблюдателна кула, разположени в най-високата част на хълма.
            </li>
          </ul>
        </Typography>
        <Typography component="p" variant="body1">
          Разположен върху останките от средновековно укрепително съоръжение от
          времето на цар Самуил, в живописната долина на р.Струмешница,
          мемориалния комплекс представлява място за почит и преклонение към
          героизма и величието на Цар Самуил и неговите войни.
        </Typography>
        <Typography component="p" variant="body1">
          Самуиловата крепост - дема е средновековно укрепление, построено в
          периода 1009 - 1013г. по време на управлението на българския цар
          Самуил. Разположена е на хълм в тясната клисура между планините
          Беласица и Огражден, на южния бряг на река Струмешница и на 5 км
          северно от с. Ключ.
        </Typography>
        <Typography component="p" variant="body1">
          Именно по поречието на р. Струма византийците нахлували най-често,
          затова било необходимо да се изгради мащабна отбранителна система,
          която оптимално да използва възможностите за защита на природния
          релеф. Укреплението представлявало 8-километрова защитна стена,
          започваща от полите на Беласица планина и стигащa до подножието на
          Огражден. При изграждането на укреплението са демонстрирани в голяма
          степен старобългарските строителни традиции, като най-характерен
          елемент са валовете и рововете. Укреплението било защитено от три вала
          и два рова, разположени концентрично, следите от които се различават и
          до днес.
        </Typography>
        <Typography component="p" variant="body1">
          На 29 юли 1014 г. се състояло решителното сражение в Ключката клисура.
          Прегражденията били разрушени, а българските отряди в района на демата
          били пленени, След тези събития продължило настъплението на
          византийската войска към вътрешността на България.Неочакваният отпор
          на българите завършил със смъртта на най-добрия военачалник на Василий
          II. Това предизвикало гнева на императора и той наредил пленените 14
          000 български войници да бъдат ослепени, като на всеки 100 души
          оставил по един едноок, за да ги води.
        </Typography>
        <Typography component="p" variant="body1">
          Трагичната съдба на българските пленници довела до смъртта на цар
          Самуил на 6 октомври 1014 г. Така битката при Ключката клисура се
          оказала решаваща за завладяването на българската държава.
        </Typography>

        <iframe
          width="100%"
          height="600"
          scrolling="no"
          src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=%D0%A1%D0%B0%D0%BC%D1%83%D0%B8%D0%BB%D0%BE%D0%B2%D0%B0%20%D0%BA%D1%80%D0%B5%D0%BF%D0%BE%D1%81%D1%82,%20%D1%85%D1%8A%D0%BB%D0%BC%20%D0%9A%D1%83%D1%84%D0%B0%D0%BB%D0%BD%D0%B8%D1%86%D0%B0+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
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
