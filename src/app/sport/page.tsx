import { Box, Stack, Typography } from "@mui/material";
import PageHeader from "@/components/SmallComponents/PageHeader";

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
                "url('https://ik.imagekit.io/obelussoft/VisitPetrich/960-600-pfk-belasica-petrich-emblema_p8-wJr5Lh.jpg?updatedAt=1708979363747')",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundSize: "cover",
              borderRadius: "10px",
            }}
          ></Box>

          <Stack width="100%" maxWidth={{ md: "800px" }} gap={2}>
            <Typography component="h4" variant="h2">
              Популярни спортни дейности
            </Typography>

            <Typography component="p" variant="body1" textAlign="justify">
              Разнообразието от популярни спортове и дейности предоставя на
              жителите широк спектър от възможности за активност и забавление.
              Футболът е един от най-обичаните спортове, който се практикува
              както на любителско, така и на професионално ниво. Местният
              футболен отбор Беласица събират фенове и играчи от различни
              възрастови групи, създавайки атмосфера на ентусиазъм и
              съревнование.
            </Typography>
            <Typography component="p" variant="body1" textAlign="justify">
              Освен футбола, в Петрич се практикуват и други спортове като
              баскетбол, волейбол, тенис, плуване и атлетика. Тези спортове
              предоставят възможност за развитие на различни физически и
              ментални умения, както и за укрепване на здравето и общото
              благополучие на спортуващите.
            </Typography>
            <Typography component="p" variant="body1" textAlign="justify">
              Освен традиционните спортове, в Петрич се провеждат и различни
              дейности на открито, като планинско колоездене, планински преходи
              и туризъм. Тези активности не само предоставят възможност за
              физическа активност и приключение, но и позволяват на участниците
              да се насладят на красотата на природата и околната среда.
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
                "url('https://ik.imagekit.io/obelussoft/VisitPetrich/350761705_7068233026537440_1868652382409506776_n_EzEBCwuHg.jpg?updatedAt=1708978630631')",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundSize: "cover",
              borderRadius: "10px",
            }}
          ></Box>

          <Stack width="100%" maxWidth={{ md: "800px" }} gap={2}>
            <Typography component="h4" variant="h2">
              Велосипедни маршрути
            </Typography>

            <ul>
              <li>
                Петрич – бивша застава „Папреница“ – подбилен път – х. Конгур –
                Петрич (38,5 км)
              </li>
              <li>
                Петрич – заслон „Гюлова поляна“ – х.Конгур – м. Мравките –
                Петрич (30 км)
              </li>
              <li>
                Велообиколка на Природен Парк Беласица: с.Самуилово – Петрич –
                х.Конгур – подбилен път – м.Щаба – с.Скрът – с.Самуилово (77,7
                км)
              </li>
              <li>
                с. Габрене – Пишана скала/ водохващане Мини-ВЕЦ Габрене –
                с.Габрене (3,4 км)
              </li>
              <li>
                с.Ключ – Самуилова крепост – с.Яворница – с.Ключ (13,3 км)
              </li>
              <li>с.Ключ – ловна хижа на с.Ключ – с.Ключ (12,3 км)</li>
              <li>с.Ключ – м. Марката – с.Ключ (4,5 км)</li>
              <li>
                с.Коларово – с.Беласица – римски път – с.Коларово (10,4 км)
              </li>
              <li>
                с.Самуилово – Петрич – х.Конгур – подбилен път – м.Лопово –
                с.Самуилово (57,4 км)
              </li>
              <li>
                с.Самуилово – м.Лопово – подбилен път – м.Щаба – с.Скрът –
                с.Самуилово (52,4 км)
              </li>
              <li>
                с.Самуилово – м.Лопово – подбилен път – с.Ключ – с.Самуилово (52
                км)
              </li>
              <li>
                с.Скрът – м.Щаба – подбилен път – с.Ключ – с.Скрът (34 км)
              </li>
              <li>
                Европейски велосипеден маршрут „Пътят на Желязната завеса”
                (EuroVelo 13) – участък ГКПП Златарево-с.Марино поле (41 км)
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
                "url('https://ik.imagekit.io/obelussoft/VisitPetrich/9c4a08f245d934c7d315104170991e10_jpg3_205124_%D0%9F%D0%BE-%D0%B1%D0%B8%D0%BB%D0%BE%D1%82%D0%BE-%D0%91%D0%B5%D0%BB%D0%B0%D1%81%D0%B8%D1%86%D0%B0-%D0%BF%D0%BB%D0%B0%D0%BD%D0%B8%D0%BD%D0%B0_U4Ak3meRJ.jpg?updatedAt=1709641133385')",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundSize: "cover",
              borderRadius: "10px",
            }}
          ></Box>

          <Stack width="100%" maxWidth={{ md: "800px" }} gap={2}>
            <Typography component="h4" variant="h2">
              Планински Маршрути
            </Typography>

            <ul>
              <li>
                град Петрич (стадиона) – хижа Беласица – хижа Конгур – връх
                Конгур (5 часа)
              </li>
              <li>град Петрич – хижа Беласица (1 час 30 мин)</li>
              <li>
                град Петрич – хижа Беласица – Лешнишки водопад – с. Беласица (5
                часа)
              </li>
              <li>хижа Беласица – хижа Конгур (1 час 30 мин)</li>
              <li>
                град Петрич (Младежки дом) – местност Папреница – местност
                Божкиното – местност Лопатара – връх Конгур (5 часа)
              </li>
              <li>хижа Конгур – връх Конгур – връх Радомир (5 часа)</li>
              <li>
                хижа Конгур – връх Конгур – връх Радомир – проход Железни врата
                – връх Тумба (10 часа)
              </li>
              <li>село Коларово – местност Лопово – връх Радомир (7 часа)</li>
              <li>
                село Самуилово – местност Лопово (по пътя) – връх Радомир (8
                часа)
              </li>
              <li>
                село Самуилово – местност Лопово (пътека) – връх Радомир (7
                часа)
              </li>
              <li>село Ключ – връх Тумба (8 часа)</li>
              <li>село Скрът – връх Тумба (7 часа)</li>
              <li>село Габрене – връх Тумба (6 часа)</li>
              <li>село Камена – Камешнишките водопади- село Камена (8 часа)</li>
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
                "url('https://ik.imagekit.io/obelussoft/VisitPetrich/523ec2803a5546be2cad5a544840fc55_jpg0_205180_DSC_0379-1368x800_693xTQsfAE.jpg?updatedAt=1709640994373')",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundSize: "cover",
              borderRadius: "10px",
            }}
          ></Box>

          <Stack width="100%" maxWidth={{ md: "800px" }} gap={2}>
            <Typography component="h4" variant="h2">
              Кратки туристически маршрути
            </Typography>

            <ul>
              <li>село Беласица – Лешнишки водопад – село Беласица</li>
              <li>
                село Коларово – езерото Гьолчето (единственото естествено езеро
                в планината) – село Коларово
              </li>
              <li>село Коларово – Коларовски водопади – село Коларово</li>
              <li>село Самуилово – местността Бялата чешма – село Самуилово</li>
              <li>
                село Камена – Камешнишки водопад (Срамежливеца) – село Камена
              </li>
              <li>село Яворница – Яворнишки водопад – село Яворница</li>
              <li>село Яворница – местност Милянова – село Яворница</li>
              <li>село Ключ – водопад Мангъра – село Ключ</li>
              <li>село Ключ – местността Гергевче – село Ключ</li>
              <li>село Ключ – водопадите – село Ключ</li>
              <li>село Ключ – НПМ „Самуилова крепост” – село Ключ</li>
              <li>село Ключ – местността Вадиоч в с. Скрът – село Ключ</li>
              <li>село Скрът – водопад Мангъра – село Скрът</li>
              <li>село Скрът – водопад Дъбицата – село Скрът</li>
              <li>село Габрене – местност Пишена скала – село Габрене</li>
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
                "url('https://ik.imagekit.io/obelussoft/VisitPetrich/b9637934b8909e315ba81685a9d2dee8_jpg2_205016_43372283_2000142363410329_2888507511063707648_n_riNjB8k14.jpg?updatedAt=1709641188006')",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundSize: "cover",
              borderRadius: "10px",
            }}
          ></Box>

          <Stack width="100%" maxWidth={{ md: "800px" }} gap={2}>
            <Typography component="h4" variant="h2">
              Тематични туристически маршрути
            </Typography>

            <Typography component="p" variant="body1">
              Тематични туристически маршрути изградени на територията на ПП
              „Беласица“ стигат до интересни местности и водопади, намиращи се в
              близост до селата, разположени в подножието на планината. Всеки
              тематичен маршрут предлага информация по определена тема, което
              прави разходката из планината още по-вълнуваща и приятна.
            </Typography>

            <ul>
              <li>„Пеперудите и цветята на Беласица“</li>
              <li>„Живота на кестена“</li>
              <li>„Пътеката на мравката“</li>
              <li>„Приятели“</li>
              <li>„Тайните на водата“</li>
              <li>„Пътуване в историята“</li>
              <li>„Цветна приказка“</li>
              <li>„Кълвачите – пазители на горите“</li>
              <li>„Път на Самуиловите воини”</li>
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
                "url('https://ik.imagekit.io/obelussoft/VisitPetrich/enlarge_snimka_teren-8-min_W3bIk36J_.jpg?updatedAt=1708977790745')",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundSize: "cover",
              borderRadius: "10px",
            }}
          ></Box>

          <Stack width="100%" maxWidth={{ md: "800px" }} gap={2}>
            <Typography component="h4" variant="h2">
              Спортни съоръжения и обекти
            </Typography>

            <Typography component="p" variant="body1" textAlign="justify">
              Петрич разполага с разнообразие от съвременни спортни съоръжения и
              обекти, които предоставят идеални условия за практикуване на
              различни спортове и физически активности. Като част от
              инфраструктурата на града е и новопостроената спортна зала, както
              и добре развита училищна инфраструктура, която стимулира спортната
              дейност сред учениците.
            </Typography>
            <ul>
              <li>“Арена Петрич”</li>
              <li>тенис комплекс “Нушеви”</li>
              <li>спортна зала “Серафим Бързаков”</li>
              <li>фитнес клуб “TopAll”</li>
              <li>фитнес клуб “Explode”</li>
              <li>“G Fit Aerobics”</li>
              <li>Спортен клуб “ENergy”</li>
              <li>тенис комплекс “Федя”</li>
            </ul>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default SportPage;
