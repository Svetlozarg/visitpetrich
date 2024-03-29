"use client";
import PageHeader from "@/components/SmallComponents/PageHeader";
import { Stack, Typography } from "@mui/material";
import image from "../../../../public/assets/tourism/giaur.jpg";

const page = () => {
  return (
    <Stack>
      <PageHeader title="Местност “Гяур Калеси”" image={image} />

      <Stack
        width="100%"
        gap={3}
        px={{ xs: 2, sm: 2, md: 10 }}
        py={{ xs: 10, sm: 10, md: 10 }}
        textAlign="justify"
      >
        <Typography component="h4" variant="h3">
          Местност “Гяур Калеси”
        </Typography>

        <Typography component="p" variant="body1" textAlign="justify">
          Местността „Гяур Калеси“ се намира над старият Петрич, там където
          планината огражда града от югозапад. В тази местност има останки от
          средновековна българска крепост, която според археолозите съществувала
          до края на 14 век и е била звено от укрепителната система на
          Югозападна България.
        </Typography>
        <Typography component="p" variant="body1" textAlign="justify">
          До нас днес са достигнали само руини след опожаряване и името ѝ „Гяур
          калеси”. Името и опожаряването на крепостта ни дават основание да
          считаме, че тук се е развила жестока битка. За тези героични дни има и
          легенда, която е художествено разработена от Евгения Нестерова, и в
          нея се разказва за турската войска обсадила крепостта в планината
          Беласица, където се отбранявали защитниците на града. Сред тях имало и
          една чудно хубава девойка, която през цялото време развявала зеленото
          знаме на свободата. Синът на бея, който командвал обсадата, харесал
          девойката, и поискал тя да бъде в неговия харем. Той изпратил скъпи
          дарове – антерии с елмази, като поръчал да кажат на девойката :
          “Войводко, предай крепостта, меча и себе си!”
        </Typography>
        <Typography component="p" variant="body1" textAlign="justify">
          Тя върнала даровете. Тогава турците решили да подпалят крепостта. Те
          се надявали красавицата да излезе от калето заедно с другите спасяващи
          се защитници. Но нито един от старите петричани не напуснал крепостта,
          защитавайки род и родина. Всички загинали в горящото кале, сражавайки
          се до последния си дъх.
        </Typography>
        <Typography component="p" variant="body1" textAlign="justify">
          Възхитен от родолюбието и храбростта на девойката, беят застанал до
          обгорялото й тяло. и наредил тя да бъде погребана, а на гроба й да
          бъде засято червено цвете, алено като кръвта ѝ, и красиво като нея.
        </Typography>
        <Typography component="p" variant="body1" textAlign="justify">
          Оттогава крепостта, чийто защитници загинали с чест, се нарича “Гяур
          калеси” – “Крепост на българите”. Всяка пролет около стените на
          крепостта цъфти червен божур, наричан само в Петрич “Ханъм чичек” –
          “Цвете на девойката”.
        </Typography>
        <Typography component="p" variant="body1" textAlign="justify">
          Този героичен момент от историята на Петрич стои в основата на герба
          на общината.Тя символизира патриотизма на петричани през вековете,
          готовността им винаги да отстояват род и вяра.
        </Typography>
        <Typography component="p" variant="body1" textAlign="justify">
          Днес до местността се стига по добре маркирана пътека с начало най-
          старият квартал в града – Виздол.
        </Typography>
      </Stack>
    </Stack>
  );
};

export default page;
