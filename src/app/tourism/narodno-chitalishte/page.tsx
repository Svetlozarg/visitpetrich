"use client";
import PageHeader from "@/components/SmallComponents/PageHeader";
import { Stack, Typography } from "@mui/material";
import image from "../../../../public/assets/home/chitalishte.jpeg";

const page = () => {
  return (
    <Stack>
      <PageHeader
        title="Народно читалище “Братя Миладинови”"
        image={image}
        imagePosition="bottom center"
      />

      <Stack
        width="100%"
        gap={3}
        px={{ xs: 2, sm: 2, md: 10 }}
        py={{ xs: 10, sm: 10, md: 10 }}
        textAlign="justify"
      >
        <Typography component="h4" variant="h3">
          Народно читалище “Братя Миладинови”
        </Typography>

        <Typography component="p" variant="body1" textAlign="justify">
          Народно читалище „Братя Миладинови – 1914“ гр. Петрич е истински
          духовен център за хората в града и района. Основано на 26.02.1914г. от
          група родолюбиви петричани. Негов кръстник и пръв председател е
          учителя Тодор Стоянов Кръстев.В протокола при учредяването е записано,
          че името остава несменяемо. След войната през 1919г. за нуждите на
          читалището е предоставена сградата на джамията, която е преустроена
          като се обособяват салон със сцена, библиотека с читалня, бюфет –
          кафене. С превръщането на Петрич в окръжен административен център
          читалищното дело в града и околията значително се разширява. С
          доброволен труд на населението през 1947г. започва строителството на
          новата читалищна сграда, която е завършена през 1953г. Създават се
          условия за бърз културен подем в читалището.
        </Typography>
        <Typography component="p" variant="body1" textAlign="justify">
          Днес Читалището развива богата и разнообразна културна дейност чрез
          детски състави и школи по изкуствата, в които се обучават над 200
          деца. Организират се разнообразни прояви като концерти, срещи, изложби
          и други. Към Читалището действа и Библиотека, която разполага с 108
          500 библиотечни документа – художествена и документална литература,
          периодични издания, нотни издания, грамофонни плочи, CD и DVD, сбирка
          от редки и ценни книги.
        </Typography>

        <iframe
          width="100%"
          height="600"
          scrolling="no"
          src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=%D0%A7%D0%B8%D1%82%D0%B0%D0%BB%D0%B8%D1%89%D0%B5%20%22%D0%91%D1%80%D0%B0%D1%82%D1%8F%20%D0%9C%D0%B8%D0%BB%D0%B0%D0%B4%D0%B8%D0%BD%D0%BE%D0%B2%D0%B8%22,%20Tsentar,%20ul.%20%22Aleksandar%20Stambolijski%22%208,%202850%20Petrich+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          style={{ border: 0 }}
        />
      </Stack>
    </Stack>
  );
};

export default page;
