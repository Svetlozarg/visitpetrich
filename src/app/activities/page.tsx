import PageHeader from "@/components/SmallComponents/PageHeader";
import { Box, Stack, Typography } from "@mui/material";
import Link from "next/link";

const ActivitiesPage = () => {
  return (
    <Stack>
      <PageHeader
        title="Забавления в Петрич"
        subtitle="Изживяване отвъд очакването"
        image="https://ik.imagekit.io/obelussoft/VisitPetrich/%D1%84%D0%BE%D0%BD%D1%82%D0%B0%D0%BD-min_49lZ66nNj.jpeg"
      />

      <Stack width="100%" maxWidth="1600px" m="0 auto" gap={8} py={10} px={4}>
        <Stack
          direction="row"
          justifyContent="center"
          alignItems="flex-start"
          flexWrap={{ xs: "wrap", sm: "wrap", md: "nowrap" }}
          gap={4}
        >
          <Box
            sx={{
              width: "100%",
              maxWidth: "800px",
              height: "500px",
              backgroundImage:
                "url('https://ik.imagekit.io/obelussoft/VisitPetrich/cinema-min_PPyKHTTXt.jpg')",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundSize: "cover",
              borderRadius: "10px",
            }}
          ></Box>

          <Stack width="100%" maxWidth={{ md: "800px" }} gap={2}>
            <Typography component="h4" variant="h3">
              Хобита и свободно време
            </Typography>

            <Typography component="p" variant="body1" textAlign="justify">
              В свободното време в Петрич можете да се насладите на разнообразни
              забавления и изживявания. Местните кафенета и ресторанти предлагат
              уютна обстановка и вкусни ястия, подходящи за приятни срещи с
              приятели или семейство. За ценителите на изкуството и културата,
              градът предлага галерии и изложби, където можете да се запознаете
              с творчеството на местни и известни художници. Също така, има
              много паркове и зелени площи, които са подходящи за спокойни
              разходки или пикник сред природата.
            </Typography>
            <ul>
              <li>Кино Петрич</li>
              <li>Бар-басейн &quot;Амиго&quot;</li>
              <li>Paint & Sip - Fanimal Canvas Painting</li>
              <li>Playstation club &quot;Do it&quot;</li>
              <li>Музей за ретро автомобили &quot;Златен Рожен&quot;</li>
              <li>Арт Кафе &quot;Dedikate&quot;</li>
              <li>
                Център за подкрепа и личностно развитие - Общински детски
                комплекс Петрич
              </li>
            </ul>
          </Stack>
        </Stack>

        <Stack
          direction="row"
          justifyContent="center"
          alignItems="flex-start"
          flexWrap={{ xs: "wrap", sm: "wrap", md: "nowrap" }}
          gap={4}
        >
          <Box
            sx={{
              width: "100%",
              maxWidth: "800px",
              height: "500px",
              backgroundImage:
                "url('https://ik.imagekit.io/obelussoft/VisitPetrich/biliard-min_Odpn5Mqia.jpg')",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundSize: "cover",
              borderRadius: "10px",
            }}
          ></Box>

          <Stack width="100%" maxWidth={{ md: "800px" }} gap={2}>
            <Typography component="h4" variant="h3">
              Билярд
            </Typography>

            <Typography component="p" variant="body1" textAlign="justify">
              Основите на Спортен Клуб по Билярд „Бо&Бо” бяха положени през 2012
              година, когато бе създадена сравнително малка база, състояща се от
              две билярдни маси. Основатели на клуба са Георги Божков и София
              Божкова, а името идва от фамилиите им и по-конкретно “Бо&Бо”.
            </Typography>
            <Typography component="p" variant="body1" textAlign="justify">
              През 2017 година клуба е избран за домакин на Балканския център по
              Билярд от Европейската Федерация „EEBC” и същата година се
              премества в ново, голямо помещение с 10 билярдни маси от
              най-високо ниво, като всички те са оборудвани и за онлайн
              излъчване.
            </Typography>
            <Typography component="p" variant="body1" textAlign="justify">
              След многобройните успехи, през 2018 година „EEBC” избира
              председателят на клуба Георги Божков за неин Представител в
              България и е поканен за Член на Управителния съвет на Федерацията.
              Лятото на 2019 година бива избран за Председател на Българската
              Билярдна Федерация, а по-късно същата година и за Генерален
              Секретар на „Internation Billiard Academy“.
            </Typography>
            <Typography component="p" variant="body1" textAlign="justify">
              Днес при тях освен да се забавлявате като поиграте билярд било то
              чисто любителски или професионално, може да се насладите на
              разнообразно обедно меню, както и на различни специалитети и
              вариация от напитки, които предлагат.
            </Typography>

            <Typography component="p" variant="body1" textAlign="justify">
              Тел. номер: 088 540 4035
            </Typography>
            <Link
              href="https://boandbo.club/?fbclid=IwAR3YJ8xliUqzEgxPo5PsqZ2gFp4QRRhxsDHe-RXbmZQJJT4Czp9mCN6yhis"
              target="_blank"
              style={{ textDecoration: "underline" }}
            >
              <Typography component="p" variant="body1" textAlign="justify">
                Посетете сайта
              </Typography>
            </Link>
          </Stack>
        </Stack>

        <Stack
          direction="row"
          justifyContent="center"
          alignItems="flex-start"
          flexWrap={{ xs: "wrap", sm: "wrap", md: "nowrap" }}
          gap={4}
        >
          <Box
            sx={{
              width: "100%",
              maxWidth: "800px",
              height: "500px",
              backgroundImage:
                "url('https://ik.imagekit.io/obelussoft/VisitPetrich/fish-min_7m9PkQUW_.jpg')",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundSize: "cover",
              borderRadius: "10px",
            }}
          ></Box>

          <Stack width="100%" maxWidth={{ md: "800px" }} gap={2}>
            <Typography component="h4" variant="h3">
              Риболов
            </Typography>

            <Typography component="p" variant="body1" textAlign="justify">
              Къмпинг комплекс Язовир &quot;Валтата&quot; е страхотно кътче в
              село Самуилово и разполага с леглова база от 25 места. Намира се
              на 11 километра от град Петрич или на 15 минути с автомобил.
              Предлага се настаняване във вила за 8 души и няколко бунгала.
              Всяко бунгало разполага със самостоятелен санитарен възел,
              климатик и телевизор. На територията на комплекса има безплатен Wi
              Fi, открит басейн, кафе-бар и ресторант. А най-атрактивната част
              за любителите на риболова и самия язовир, който крие в дълбините
              си чудни рибни богатства. Посетете ги!
            </Typography>

            <Typography component="p" variant="body1" textAlign="justify">
              Тел. номер: 089 960 6227
            </Typography>
            <Link
              href="https://www.google.com/maps/place/Комплекс+язовир+“Валтата”/@41.388524,23.088629,14z/data=!4m9!3m8!1s0x14a98a2271c2ac99:0x5ed2193b3253fde5!5m2!4m1!1i2!8m2!3d41.3885242!4d23.0886292!16s%2Fg%2F11d_d1xkg8?hl=en&entry=ttu"
              target="_blank"
              style={{ textDecoration: "underline" }}
            >
              <Typography component="p" variant="body1" textAlign="justify">
                Вижте на картата
              </Typography>
            </Link>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default ActivitiesPage;
