"use client";
import ImageCarousel from "@/components/SmallComponents/ImageCarousel";
import PageHeader from "@/components/SmallComponents/PageHeader";
import { Stack, Typography } from "@mui/material";

const IMAGES_DATA = [
  "https://ik.imagekit.io/obelussoft/VisitPetrich/%D0%A5%D0%B5%D1%80%D0%B0%D0%BA%D0%BB%D0%B5%D1%8F/%D0%A5%D0%B5%D1%80%D0%B0%D0%BA%D0%BB%D0%B5%D1%8F%20%D0%A1%D0%B8%D0%BD%D1%82%D0%B8%D0%BA%D0%B0%20(1)-min_eDDWNTLPh.jpg",
  "https://ik.imagekit.io/obelussoft/VisitPetrich/%D0%A5%D0%B5%D1%80%D0%B0%D0%BA%D0%BB%D0%B5%D1%8F/HOR03820-min_azWmI813e.JPG?updatedAt=1708357634737",
  "https://ik.imagekit.io/obelussoft/VisitPetrich/%D0%A5%D0%B5%D1%80%D0%B0%D0%BA%D0%BB%D0%B5%D1%8F/%D0%A5%D0%B5%D1%80%D0%B0%D0%BA%D0%BB%D0%B5%D1%8F%20%D0%A1%D0%B8%D0%BD%D1%82%D0%B8%D0%BA%D0%B0%20(4)-min_5gZlI_why.jpg?updatedAt=1708357634746",
  "https://ik.imagekit.io/obelussoft/VisitPetrich/%D0%A5%D0%B5%D1%80%D0%B0%D0%BA%D0%BB%D0%B5%D1%8F/HOR03815-min_QObFdr7EpJ.JPG?updatedAt=1708357634553",
  "https://ik.imagekit.io/obelussoft/VisitPetrich/%D0%A5%D0%B5%D1%80%D0%B0%D0%BA%D0%BB%D0%B5%D1%8F/%D0%A5%D0%B5%D1%80%D0%B0%D0%BA%D0%BB%D0%B5%D1%8F%20%D0%A1%D0%B8%D0%BD%D1%82%D0%B8%D0%BA%D0%B0%20(2)-min_NYAwselh7.jpg?updatedAt=1708357634440",
  "https://ik.imagekit.io/obelussoft/VisitPetrich/%D0%A5%D0%B5%D1%80%D0%B0%D0%BA%D0%BB%D0%B5%D1%8F/%D0%A5%D0%B5%D1%80%D0%B0%D0%BA%D0%BB%D0%B5%D1%8F%20%D0%A1%D0%B8%D0%BD%D1%82%D0%B8%D0%BA%D0%B0%20(7)-min_UhTzOHIs6.jpg?updatedAt=1708357634395",
  "https://ik.imagekit.io/obelussoft/VisitPetrich/%D0%A5%D0%B5%D1%80%D0%B0%D0%BA%D0%BB%D0%B5%D1%8F/DJI_0122-min_nQ-ca0lI-.JPG?updatedAt=1708357634275",
  "https://ik.imagekit.io/obelussoft/VisitPetrich/%D0%A5%D0%B5%D1%80%D0%B0%D0%BA%D0%BB%D0%B5%D1%8F/DJI_0895-min_npt55-bIR.JPG?updatedAt=1708357633980",
  "https://ik.imagekit.io/obelussoft/VisitPetrich/%D0%A5%D0%B5%D1%80%D0%B0%D0%BA%D0%BB%D0%B5%D1%8F/20190404_161501-min_g4WdwzI3E.jpg?updatedAt=1708357633968",
  "https://ik.imagekit.io/obelussoft/VisitPetrich/%D0%A5%D0%B5%D1%80%D0%B0%D0%BA%D0%BB%D0%B5%D1%8F/20190404_163711-min_fJ2mUHa6R.jpg?updatedAt=1708357633435",
];

const PetrichMuseumPage = () => {
  return (
    <Stack justifyContent="center" alignItems="center">
      <PageHeader
        title="Хераклея Синтика"
        image="https://ik.imagekit.io/obelussoft/VisitPetrich/%D0%A5%D0%B5%D1%80%D0%B0%D0%BA%D0%BB%D0%B5%D1%8F/DJI_0122-min_nQ-ca0lI-.JPG?updatedAt=1708357634275"
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
          Светлината на историческите битки, огледалото на тракийското величие.
        </Typography>

        <Typography component="p" variant="body1">
          Античен град Хераклея Синтика е сред най-значимите археологически
          обекти в България. Градът съществува близо 1000 години, от IVв.пр.Хр.
          до VIв.сл.Хр., като през това време населението и управниците му са
          проявявали завидна адаптивност в динамичната и често променяща се през
          вековете политическа и икономическа картина.
        </Typography>
        <Typography component="p" variant="body1">
          Близо 100 години учените спорят къде се намира той. Очакванията били
          да се локализира в Р.Гърция, в подножието на планината Рупел
          (дн.Беласица), както споменават древните автори. Латински надпис на
          император Галерий от 308г., заловен при полицейска акция срещу иманяри
          през 2002г., и проучен и публикуван от доц.Георги Митрев., показва
          категорично, че Хераклея лежи край Петрич, в местността „Рупите“.
        </Typography>
        <Typography component="p" variant="body1">
          Градът носи името на митичния герой Херакъл (Херкулес), който се смята
          за родоначалник на македонската династия на Аргеадите. Те го основават
          през ІV в. пр. Хр. в племенната територия на траките-синти. Хераклея
          Синтика се превръща в стратегически център в североизточните предели
          на древното македонско царство. По време на управлението на Филип II
          Македонски, Хераклея се превръща в една от македонските кралски
          резиденции. Оттук започват и първите военни кампании на Александър
          Велики. Именно от Хераклея той потегля на поход срещу съседни
          тракийски племена преди да завоюва огромната Персийска империя.
        </Typography>
        <Typography component="p" variant="body1">
          През 148г.пр.Хр. Хераклея Синтика е присъединен към провинция
          Македония в рамките на Римската империя. Градът е покровителстван от
          самия Октавиан Август – основателят на Римската империя. Именно по
          време на римския си период, II – IIIв.сл.Хр., Хераклея Синтика
          изживява своя най-голям разцвет. Изключителната, като мащаб, качества
          и художествена стойност, архитектура на централната градска част
          свидетелства за просперитета на града.
        </Typography>
        <Typography component="p" variant="body1">
          Огромен римски форум, построен върху старата агора, раннохристиянска
          базилика, гражданска базилика, жилищен и занаятчийски квартал, 15
          верижни сакрални помещения, едно от които се смята за светилище на
          Немезида и най-вече сложната система от отводнителни канали, будят
          възхищение със своя разкош и прецизност на изпълнението, запазили се и
          до днес.
        </Typography>
        <Typography component="p" variant="body1">
          Театралните маски, търговски принадлежности и наличието на множество
          монети от цял свят, са поредното доказателство за богатия културен и
          социално – икономически живот, кипял в Хераклея Синтика.
        </Typography>
        <Typography component="p" variant="body1">
          Две силни земетресения през ІV-V век разрушават столицата на Средна
          Струма, а жителите му продължават да живеят до края на VІ в. сл. Хр.
          на неговия Акропол, разположен върху южния връх на хълма Кожух.
        </Typography>
        <Typography component="p" variant="body1">
          Дебелите пластове руини и тонове свлечена от хълма „Кожух“ пръст пазят
          Хераклея през следващите 1500 години.
        </Typography>
        <Typography component="p" variant="body1">
          Днес, и археолози, и туристи са смаяни от отлично съхранените
          структури, които посетителят може да види в автентичен вид с прецизна
          консервация. Теренните проучвания продължават и пред очите на
          посетителя Хераклея Синтика продължава да разкрива тайните си.
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
