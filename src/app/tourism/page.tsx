"use client";
import Button from "@/components/MUIComponents/Button";
import PageHeader from "@/components/SmallComponents/PageHeader";
import { Stack, Typography } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/navigation";

const SightSeeingsData = [
  {
    title: "Исторически Музей",
    image:
      "https://ik.imagekit.io/obelussoft/VisitPetrich/petrich-museum_7VZpceUwp.jpg?updatedAt=1708164126233",
    link: "/tourism/petrich-museum",
  },
  {
    title: "Хераклея Синтика",
    image:
      "https://ik.imagekit.io/obelussoft/VisitPetrich/%D0%A5%D0%B5%D1%80%D0%B0%D0%BA%D0%BB%D0%B5%D1%8F%20%D0%A1%D0%B8%D0%BD%D1%82%D0%B8%D0%BA%D0%B0%20(1)_9cul_VCV9.jpg?updatedAt=1708330237287",
    link: "/tourism/heraclea-sintica",
  },
  {
    title: "Самуилова Крепост",
    image:
      "https://ik.imagekit.io/obelussoft/VisitPetrich/HOR09102%20(1)_5qRy2wlXs.jpg?updatedAt=1708207084091",
    link: "/tourism/samuil-fortress",
  },
  {
    title: "Къща Ванга",
    image:
      "https://ik.imagekit.io/obelussoft/VisitPetrich/HOR09006_vicgp-nL9.jpg?updatedAt=1708330148550",
    link: "/tourism/house-of-vanga",
  },
];

const TourismPage = () => {
  const router = useRouter();

  return (
    <Stack>
      <PageHeader
        title="Туризъм в град Петрич"
        subtitle="Туристически Приключения в Западната България"
        image="https://ik.imagekit.io/obelussoft/VisitPetrich/HOR09391_D2xMvGHh8.jpg?updatedAt=1708363605047"
      />

      <Stack p={8}>
        <Typography
          component="h2"
          variant="h2"
          sx={{
            width: "100%",
            maxWidth: "700px",
            borderBottom: "2px solid",
            borderColor: "common.black",
            textAlign: "center",
            m: "0 auto 3rem auto",
            pb: 2,
          }}
        >
          Забележителности
        </Typography>

        <Stack
          justifyContent="center"
          alignItems="center"
          direction="row"
          gap={4}
          flexWrap="wrap"
        >
          {SightSeeingsData.map((sightseeing, index) => (
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
              <Typography component="h4" variant="h3" color="common.white">
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
          p={10}
        >
          <Image
            src="https://ik.imagekit.io/obelussoft/VisitPetrich/petrich-museum_7VZpceUwp.jpg?updatedAt=1708164126233"
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
            <Typography component="h4" variant="h2">
              Исторически Музей
            </Typography>

            <Typography component="p" variant="body1">
              Историческият музей в град Петрич представлява източник на
              богатство и разнообразие от исторически артефакти, археологически
              находки и ценни артефакти, които разказват за миналото на региона.
              Създаден с цел да запази и представи богатото културно наследство
              на града и неговите околности, музеят предлага уникален поглед
              върху историческото развитие на областта през вековете.
            </Typography>
            <Typography component="p" variant="body1">
              Посетителите могат да се потопят в миналото чрез изложби,
              демонстриращи експонати от различни периоди на историята,
              начилията и културата на местните общности. От артефакти на
              древните тракийски цивилизации до римски архитектурни елементи и
              средновековни реликви, музеят предоставя ценна перспектива за
              почитателите на историята и любителите на културното наследство.
            </Typography>
            <Typography component="p" variant="body1">
              Също така, музеят често организира временни изложби и
              образователни събития, които допълват посещението и обогатяват
              опита на посетителите.
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
          p={10}
        >
          <Image
            src="https://ik.imagekit.io/obelussoft/VisitPetrich/%D0%A5%D0%B5%D1%80%D0%B0%D0%BA%D0%BB%D0%B5%D1%8F%20%D0%A1%D0%B8%D0%BD%D1%82%D0%B8%D0%BA%D0%B0%20(1)_9cul_VCV9.jpg?updatedAt=1708330237287"
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
            <Typography component="h4" variant="h2">
              Хераклея Синтика
            </Typography>

            <Typography component="p" variant="body1">
              Хераклея Синтика е архелогичен комплекс в близост до град Петрич,
              който представя величественото свидетелство за богатата история на
              региона. Основан през IV век пр.н.е. от римляните, градът
              преживява свой златен век през периода на римското управление,
              когато става важен център на културата и търговията.
            </Typography>
            <Typography component="p" variant="body1">
              С високи стени и крепостни порти, Хераклея Синтика е била заселена
              от различни цивилизации през вековете, включително тракийци,
              римляни и византийци. Сред най-значимите археологически открития
              са римски терми (бани), форум, театър, пагански храмове и римски
              вили с богати мозаики.
            </Typography>
            <Typography component="p" variant="body1">
              Посещението на Хераклея Синтика предоставя уникална възможност да
              се разгадае тайната на живота в древността и да се се насладите на
              архитектурната изобретателност и културното наследство на
              римляните. Поддържан и представен от местните органи, комплексът
              привлича туристи и историци от целия свят, като предлага интересни
              екскурзии и образователни събития.
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
          p={10}
        >
          <Image
            src="https://ik.imagekit.io/obelussoft/VisitPetrich/HOR09102%20(1)_5qRy2wlXs.jpg?updatedAt=1708207084091"
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
            <Typography component="h4" variant="h2">
              Самуилова Крепост
            </Typography>

            <Typography component="p" variant="body1">
              Самуилова крепост е исторически обект, издигнал се в X век в
              близост до град Петрич, във важен период от българската история.
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
          p={10}
        >
          <Image
            src="https://ik.imagekit.io/obelussoft/VisitPetrich/HOR09006_vicgp-nL9.jpg?updatedAt=1708330148550"
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
            <Typography component="h4" variant="h2">
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
