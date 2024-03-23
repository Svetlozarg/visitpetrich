"use client";
import ImageCarousel from "@/components/SmallComponents/ImageCarousel";
import PageHeader from "@/components/SmallComponents/PageHeader";
import { Stack, Typography } from "@mui/material";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import img1 from "../../../../public/assets/tourism/sintica/img1.jpg";
import img2 from "../../../../public/assets/tourism/sintica/img2.jpg";
import img3 from "../../../../public/assets/tourism/sintica/img3.jpg";
import img4 from "../../../../public/assets/tourism/sintica/img4.jpg";
import img5 from "../../../../public/assets/tourism/sintica/img5.jpg";
import img6 from "../../../../public/assets/tourism/sintica/img6.jpg";
import img7 from "../../../../public/assets/tourism/sintica/img7.jpg";
import img8 from "../../../../public/assets/tourism/sintica/img8.jpg";
import img9 from "../../../../public/assets/tourism/sintica/img9.jpg";
import img10 from "../../../../public/assets/tourism/sintica/img10.jpg";
import img11 from "../../../../public/assets/tourism/sintica/img11.jpg";

const IMAGES_DATA = [
  img2.src,
  img3.src,
  img4.src,
  img5.src,
  img6.src,
  img7.src,
  img8.src,
  img9.src,
  img10.src,
  img11.src,
];

const PetrichMuseumPage = () => {
  return (
    <Stack>
      <PageHeader title="Хераклея Синтика" image={img1} />

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
            <Typography>Всеки ден от 09:00 до 20:00 ч.</Typography>
          </Stack>
        </Stack>

        <Typography component="h4" variant="h3">
          Античен град Хераклея Синтика – тайнствения град, който оживява пред
          нас
        </Typography>

        <Typography component="p" variant="body1" textAlign="justify">
          Античен град Хераклея Синтика е сред най-значимите археологически
          обекти в България.
        </Typography>
        <Typography component="p" variant="body1" textAlign="justify">
          Повече от век учените спорят къде точно е тайнствения град, за който
          още Омир пише – града на хераклейците…
        </Typography>
        <Typography component="p" variant="body1" textAlign="justify">
          Според античните текстове, Хераклея Синтика се намира по средното
          течение на р.Стримон (р.Струма) в Рупелското дефиле (между днешните
          планини Славянка и Беласица). Очакванията са останките от него да се
          открият на територията на Гърция, в южните склонове на Беласица.
        </Typography>
        <Typography component="p" variant="body1" textAlign="justify">
          Латински надпис на император Галерий от 308г., заловен при полицейска
          акция срещу иманяри през 2002 г., и проучен и публикуван от доц.Георги
          Митрев., показва категорично, че Хераклея лежи край Петрич, в
          местността „Рупите“.
        </Typography>
        <Typography component="p" variant="body1" textAlign="justify">
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
        <Typography component="p" variant="body1" textAlign="justify">
          През 148 г .пр.Хр. Хераклея Синтика е присъединен към провинция
          Македония в рамките на Римската империя. Градът е покровителстван от
          самия Октавиан Август – основателят на Римската империя. Именно по
          време на римския си период, II – III в.сл.Хр., Хераклея Синтика
          изживява своя най-голям разцвет. Изключителната, като мащаб, качества
          и художествена стойност, архитектура на централната градска част
          свидетелства за просперитета на града.
        </Typography>
        <Typography component="p" variant="body1" textAlign="justify">
          Огромен римски форум, построен върху старата агора, раннохристиянска
          базилика, гражданска базилика, жилищен и занаятчийски квартал, 15
          верижни сакрални помещения, едно от които се смята за светилище на
          Немезида и най-вече сложната система от отводнителни канали, будят
          възхищение със своя разкош и прецизност на изпълнението, запазили се и
          до днес.
        </Typography>
        <Typography component="p" variant="body1" textAlign="justify">
          Театралните маски, търговски принадлежности и наличието на множество
          монети от цял свят, са поредното доказателство за богатия културен и
          социално – икономически живот, кипял в Хераклея Синтика.
        </Typography>
        <Typography component="p" variant="body1" textAlign="justify">
          Две силни земетресения през ІV-V век разрушават столицата на Средна
          Струма, а жителите му продължават да живеят до края на VІ в. сл. Хр.
          на неговия Акропол, разположен върху южния връх на хълма Кожух.
        </Typography>
        <Typography component="p" variant="body1" textAlign="justify">
          Дебелите пластове руини и тонове свлечена от хълма „Кожух“ пръст пазят
          Хераклея през следващите 1500 години.
        </Typography>
        <Typography component="p" variant="body1" textAlign="justify">
          И макар все още да има редица неясноти около историята и фактите от
          живота на древните хераклейци, има нещо, което е ясно и категорично –
          Античен град Хераклея Синтика има потенциала да се превърне в
          най-значимия археологически обект в България със стратегическо
          значение за развитието на туризма не само в региона на Петрич, но и за
          страната ни.
        </Typography>
        <Typography component="p" variant="body1" textAlign="justify">
          А най-интересното тук тепърва предстои…
        </Typography>

        <iframe
          width="100%"
          height="600"
          scrolling="no"
          src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=%D0%90%D0%BD%D1%82%D0%B8%D1%87%D0%B5%D0%BD%20%D0%B3%D1%80%D0%B0%D0%B4%20%D0%A5%D0%B5%D1%80%D0%B0%D0%BA%D0%BB%D0%B5%D1%8F%20%D0%A1%D0%B8%D0%BD%D1%82%D0%B8%D0%BA%D0%B0,%202863%20%D0%9F%D0%B5%D1%82%D1%80%D0%B8%D1%87+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
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
