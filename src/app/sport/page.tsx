import { Stack, Typography } from "@mui/material";
import PageHeader from "@/components/SmallComponents/PageHeader";
import Image from "next/image";

const SportPage = () => {
  return (
    <Stack>
      <PageHeader
        title="Спортният Дух на град Петрич"
        subtitle="Вдъхновение, Движение, Победа"
        image="https://ik.imagekit.io/obelussoft/VisitPetrich/enlarge_snimka_teren-8-min_W3bIk36J_.jpg?updatedAt=1708977790745"
      />

      <Stack width="100%" maxWidth="1600px" m="0 auto" gap={8} py={10} px={4}>
        <Stack
          direction={{ md: "column", lg: "row" }}
          justifyContent="center"
          alignItems="flex-start"
          gap={4}
        >
          <Image
            src="https://ik.imagekit.io/obelussoft/VisitPetrich/960-600-pfk-belasica-petrich-emblema_p8-wJr5Lh.jpg?updatedAt=1708979363747"
            alt="Park Petrich"
            width={100}
            height={100}
            style={{
              width: "100%",
              maxWidth: "800px",
              height: "450px",
              objectFit: "cover",
              borderRadius: "10px",
            }}
          />
          <Stack gap={2}>
            <Typography component="h4" variant="h2">
              Спортът в Петрич
            </Typography>

            <Typography component="p" variant="body1" textAlign="justify">
              Градът Петрич отдавна е известен със своята страст към спорта и
              активния начин на живот на своите жители. Спортът играе ключова
              роля в общността, като представлява средство за здравословно
              развитие, социална интеграция и развлечение. В Петрич спортът е не
              просто дейност, а начин на живот, който обединява хората от
              различни възрасти и социални среди в обща страст и ангажимент.
            </Typography>
            <Typography component="p" variant="body1" textAlign="justify">
              Местните спортни обекти и съоръжения предоставят възможности за
              практикуване на различни спортове, като футбол, баскетбол, тенис,
              плуване и други. Всекидневната активност на града се отразява и в
              наличието на множество спортни клубове и организации, които се
              грижат за развитието на спорта и подготовката на младите таланти.
              Те играят важна роля в култивирането на спортния дух и
              насърчаването на здравословната конкуренция в общността.
            </Typography>
          </Stack>
        </Stack>

        <Stack gap={2}>
          <Typography component="h4" variant="h2">
            Популярни спортове и дейности
          </Typography>
          <Typography component="p" variant="body1" textAlign="justify">
            В град Петрич, разнообразието от популярни спортове и дейности
            предоставя на жителите широк спектър от възможности за активност и
            забавление. Футболът е един от най-обичаните спортове, който се
            практикува както на любителско, така и на професионално ниво.
            Местните футболни отбори събират фенове и играчи от различни
            възрастови групи, създавайки атмосфера на ентусиазъм и съревнование.
          </Typography>
          <Typography component="p" variant="body1" textAlign="justify">
            Освен футбола, в Петрич се практикуват и други спортове като
            баскетбол, волейбол, тенис, плуване и атлетика. Тези спортове
            предоставят възможност за развитие на различни физически и ментални
            умения, както и за укрепване на здравето и общото благополучие на
            участниците.
          </Typography>
          <Typography component="p" variant="body1" textAlign="justify">
            Освен традиционните спортове, в Петрич се провеждат и различни
            дейности на открито, като планинско колоездене, планински преходи и
            туризъм. Тези активности не само предоставят възможност за физическа
            активност и приключение, но и позволяват на участниците да се
            насладят на красотата на природата и околната среда.
          </Typography>
        </Stack>

        <Stack
          direction={{ md: "column", lg: "row" }}
          justifyContent="center"
          alignItems="flex-start"
          gap={4}
        >
          <Stack gap={2}>
            <Typography component="h4" variant="h2">
              Спортни съоръжения и обекти
            </Typography>

            <Typography component="p" variant="body1" textAlign="justify">
              Петрич разполага с разнообразие от съвременни спортни съоръжения и
              обекти, които предоставят идеални условия за практикуване на
              различни спортове и физически активности. Спортните комплекси в
              града са основна част от инфраструктурата и се грижат за нуждите
              на спортните клубове, отбори и индивидуални спортисти.
            </Typography>
            <Typography component="p" variant="body1" textAlign="justify">
              Един от ключовите спортни обекти в Петрич е местният стадион,
              който е център за провеждане на футболни мачове и други спортни
              събития. Стадионът разполага с модерни съоръжения, включително
              футболни игрища, трибуни и съоръжения за тренировки, които
              създават комфортни условия за спортисти и зрители.
            </Typography>
            <Typography component="p" variant="body1" textAlign="justify">
              Освен стадиона, в Петрич съществуват и други спортни обекти като
              спортни зали за баскетбол и волейбол, тенис кортове, плувни
              басейни и атлетически писти. Тези съоръжения предлагат възможности
              за тренировки и състезания по различни спортове, като същевременно
              насърчават активния начин на живот и здравословната активност в
              общността.
            </Typography>
          </Stack>
          <Image
            src="https://ik.imagekit.io/obelussoft/VisitPetrich/enlarge_snimka_teren-8-min_W3bIk36J_.jpg?updatedAt=1708977790745"
            alt="Park Petrich"
            width={100}
            height={100}
            style={{
              width: "100%",
              maxWidth: "800px",
              height: "500px",
              objectFit: "cover",
              borderRadius: "10px",
            }}
          />
        </Stack>

        <Image
          src="https://ik.imagekit.io/obelussoft/VisitPetrich/350761705_7068233026537440_1868652382409506776_n_EzEBCwuHg.jpg?updatedAt=1708978630631"
          alt="Park Petrich"
          width={100}
          height={100}
          style={{
            width: "100%",
            height: "500px",
            objectFit: "cover",
            borderRadius: "10px",
            objectPosition: "center",
          }}
        />
      </Stack>
    </Stack>
  );
};

export default SportPage;
