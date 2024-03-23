"use client";
import Button from "@/components/MUIComponents/Button";
import PageHeader from "@/components/SmallComponents/PageHeader";
import { Stack, Typography } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/navigation";
import imageHero from "../../../public/assets/tourism/tourismHero.jpg";
import image1 from "../../../public/assets/tourism/historyMuseum.jpg";
import image2 from "../../../public/assets/tourism/sintica.jpg";
import image3 from "../../../public/assets/tourism/samuil.jpg";
import image4 from "../../../public/assets/tourism/houseVanga.jpg";
import image5 from "../../../public/assets/tourism/typesTourism.webp";

const TOURISM_DATA = [
  {
    title: "Забележителности",
    image: image2.src,
    link: "/tourism/sight-seeing",
  },
  {
    title: "Видове Туризъм",
    image: image5.src,
    link: "/tourism/vidove-turisam",
  },
];

const TourismPage = () => {
  const router = useRouter();

  return (
    <Stack>
      <PageHeader
        title="Туризъм в Петрич"
        subtitle="Изживяване отвъд очакването"
        image={imageHero}
      />

      <Stack p={{ xs: 2, sm: 2, md: 8 }}>
        <Stack
          justifyContent="center"
          alignItems="center"
          direction="row"
          gap={4}
          flexWrap="wrap"
        >
          {TOURISM_DATA.map((sightseeing, index) => (
            <Stack
              key={index}
              width="100%"
              maxWidth="350px"
              height="350px"
              justifyContent="center"
              alignItems="center"
              sx={{
                background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('${sightseeing.image}')`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center center",
                borderRadius: "10px",
                cursor: "pointer",
                transition: "all 0.3s ease-in-out",
                "&:hover": {
                  transform: "scale(1.05)",
                },
              }}
              onClick={() => router.push(sightseeing.link, { scroll: true })}
            >
              <Typography
                component="h4"
                variant="h3"
                color="common.white"
                textAlign="center"
              >
                {sightseeing.title}
              </Typography>
            </Stack>
          ))}
        </Stack>
      </Stack>

      <Stack>
        <Stack
          direction={{ md: "column", lg: "row" }}
          justifyContent="center"
          alignItems="flex-start"
          gap={4}
          p={{ xs: 2, sm: 2, md: 10 }}
        >
          <Image
            src={image1}
            alt="Petrich Museum"
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
          <Stack width="100%" maxWidth="700px" gap={2}>
            <Typography component="h4" variant="h3">
              Исторически Музей Петрич
            </Typography>

            <Typography component="p" variant="body1">
              Исторически Музей Петрич събира, съхранява, опазва и популяризира
              културното наследство на община Петрич.
            </Typography>
            <Typography component="p" variant="body1">
              Музеят е основан през 1966 г. като музейна сбирка. През 2006 г. с
              решение на Общински съвет е преобразуван в Исторически музей.
              Доскоро помещаван в читалище „Братя Миладинови”, от май 2022 год.
              е в новия си дом, намиращ се в Градски парк Петрич.
            </Typography>
            <Typography component="p" variant="body1">
              Музеят е с модерен индустриален дизайн, сред паркова среда, която
              прелива върху зелените фасади.
            </Typography>
            <Typography component="p" variant="body1">
              С похватите на съвременната музеология, с много интерактивни и
              технологични решения са представени най-ценните артефакти, а
              експозициите са подредени в три основни направления: Археология,
              История и Етнография.
            </Typography>
            <Button
              message="Прочетете повече"
              onClick={() =>
                router.push("/tourism/petrich-museum", { scroll: true })
              }
            />
          </Stack>
        </Stack>

        <Stack
          direction={{ md: "column", lg: "row" }}
          justifyContent="center"
          alignItems="flex-start"
          gap={4}
          p={{ xs: 2, sm: 2, md: 10 }}
        >
          <Image
            src={image2}
            alt="Heraclea Sintica"
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
          <Stack width="100%" maxWidth="700px" gap={2}>
            <Typography component="h4" variant="h3">
              Античен град хераклея синтик
            </Typography>

            <Typography component="p" variant="body1">
              Повече от век учените спорят къде точно е тайнствения град, за
              който още Омир пише – града на хераклейците…Случайно заловен
              надпис през 2002г. разкрива неподозирана тайна – античния град
              Хераклея Синтика стои застинал край Рупите. Траки, македони, елини
              и римляни са оставили своя отпечатък върху значимата и драматична
              история на античен полис.
            </Typography>
            <Typography component="p" variant="body1">
              Основан в средата на IVв.пр.Хр., градът е просъществувал близо
              десет века.Разрушен от две последователни мощни земетресения в
              края на IVв. и началото на Vв.През своето съществуване Хераклея
              Синтика е имал съществена роля в римската провинция Македония.
            </Typography>
            <Typography component="p" variant="body1">
              Археологическите проучвания продължават и в момента и нови и
              неподозирани открития излизат пред очите на посетителите. Системни
              археологически проучвания се провеждат от 2007г., а очакванията на
              учените са, че най-интересното тепърва предстои…
            </Typography>
            <Button
              message="Прочетете повече"
              onClick={() =>
                router.push("/tourism/heraclea-sintica", { scroll: true })
              }
            />
          </Stack>
        </Stack>

        <Stack
          direction={{ md: "column", lg: "row" }}
          justifyContent="center"
          alignItems="flex-start"
          gap={4}
          p={{ xs: 2, sm: 2, md: 10 }}
        >
          <Image
            src={image3}
            alt="Samuil Fortress"
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
          <Stack width="100%" maxWidth="700px" gap={2}>
            <Typography component="h4" variant="h3">
              Самуилова Крепост
            </Typography>

            <Typography component="p" variant="body1">
              Самуилова крепост е исторически обект, издигнал се в X век в
              близост до Петрич, във важен период от българската история.
              Построена по време на управлението на българския цар Самуил,
              крепостта е била не само стратегическо укрепено място, но и символ
              на силата и величието на българското владичество. Крепостта е
              осигурявала изключителни възможности за наблюдение и защита, което
              я прави ключова точка в средновековната българска история.
            </Typography>
            <Typography component="p" variant="body1">
              Стените и кулите на Самуилова крепост, запазени до днес, са
              впечатляващ пример за средновековна военна архитектура.
              Посетителите могат да се насладят на прекрасни гледки към
              околностите и да разгледат археологически открития, свързани с
              живота и историята на крепостта. Тя е не само атракция за туристи,
              но и важен източник на знание за българското наследство и култура.
            </Typography>
            <Button
              message="Прочетете повече"
              onClick={() =>
                router.push("/tourism/samuil-fortress", { scroll: true })
              }
            />
          </Stack>
        </Stack>

        <Stack
          direction={{ md: "column", lg: "row" }}
          justifyContent="center"
          alignItems="flex-start"
          gap={4}
          p={{ xs: 2, sm: 2, md: 10 }}
        >
          <Image
            src={image4}
            alt="Hose of Vanga"
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
          <Stack width="100%" maxWidth="700px" gap={2}>
            <Typography component="h4" variant="h3">
              Къща Ванга
            </Typography>

            <Typography component="p" variant="body1">
              Къщата на Ванга представлява историческа забележителност в град
              Петрич, която е домът на известната българска ясновидка и
              целителка Ванга. Тя е привлекла вниманието на хиляди хора от цял
              свят, които се интересуват от мистериите на човешкия ум и
              възможностите за предвиждане на бъдещи събития.
            </Typography>

            <Typography component="p" variant="body1">
              Къщата представлява типичен български дом от 19-ти век и е
              превърната в музей, където посетителите могат да видят предмети и
              артефакти от живота и дейността на Ванга. В музея се съхраняват
              различни предмети, свързани с нейната работа като книги, снимки и
              лични вещи.
            </Typography>

            <Typography component="p" variant="body1">
              Посещението на Къщата на Ванга е възможност да се запознаете
              по-добре с историята и легендите, свързани с тази изключителна
              личност, както и да разгадаете тайните на нейните предсказания и
              уникални способности.
            </Typography>
            <Button
              message="Прочетете повече"
              onClick={() =>
                router.push("/tourism/house-of-vanga", { scroll: true })
              }
            />
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default TourismPage;
