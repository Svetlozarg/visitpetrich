"use client";
import PageHeader from "@/components/SmallComponents/PageHeader";
import { Stack, Typography } from "@mui/material";
import Image from "next/image";
import wine from "../../../../public/assets/tourism/wine/vilaMelnik.jpg";
import Link from "next/link";

const page = () => {
  return (
    <Stack>
      <PageHeader title="Винен туризъм" image={wine} />

      <Stack width="100%" maxWidth="1600px" m="0 auto" gap={8} py={10} px={4}>
        <Stack
          direction={{ md: "column", lg: "row" }}
          justifyContent="center"
          alignItems="flex-start"
          gap={4}
        >
          <Image
            src="https://ik.imagekit.io/obelussoft/VisitPetrich/%D0%BE%D1%80%D0%B1%D0%B5%D0%BB%D1%83%D1%81_paqcVszNq.jpg?updatedAt=1709646866688"
            alt="Park Petrich"
            width={100}
            height={100}
            style={{
              width: "100%",
              maxWidth: "800px",
              height: "700px",
              objectFit: "cover",
              borderRadius: "10px",
            }}
          />
          <Stack gap={2}>
            <Typography component="h4" variant="h3">
              Винарска изба “Орбелус”
            </Typography>

            <Typography component="p" variant="body1" textAlign="justify">
              Винарска изба „Орбелус“ е забележително място от Виненият път по
              долината на Струма.
            </Typography>
            <Typography component="p" variant="body1" textAlign="justify">
              Избата се намира в село Кромидово, на 16 км. от гр. Петрич.
              Винарна „Орбелус“ е първата българска изба със сертификат за
              производство и разпространение на биовино.
            </Typography>
            <Typography component="p" variant="body1" textAlign="justify">
              Основната цел на Орбелус е да произвежда качествено, предимно
              купажно вино, с подчертана индивидуалност и с усещане за произход.
              Философията на избата е, че за постигане на този резултат работата
              започва от избиране на най-подходящото място и сортове и
              култивиране на лозята. Ето защо вината с наименование Орбелус –
              Орбелус Мелник, Орбелус Гетика и Орбулс Прима, се правят само от
              собствени лозя, отглеждани по биологичен начин.
            </Typography>
            <Typography component="p" variant="body1" textAlign="justify">
              Всички лозя на Орбелус са сертифицирани съгласно българското и
              европейското законодателство за производство на биологично грозде.
              Отделено е специално внимание на култивирането на традиционния за
              региона сорт Ранна Мелнишка лоза, който присъства и във всички
              червени вина Орбелус. Отглежданите сортове – Ранна Мелнишка лоза,
              Каберне Совиньон, Мерло, Сира, Гренаш Ноар, Примитиво, Пти Вердо,
              Марселан, Мурведър, Вионие, Шардоне и Пино Гри – са подбрани в
              съответствие с климатичните условия и съдържанието на почвата
            </Typography>
            <Typography component="p" variant="body1" textAlign="justify">
              Винарната е отворена за посещения всеки ден от 10:00 до 17:00 в
              работни дни и от 10:00 до 15:00 в празнични дни. Телефон за
              контакти – 0887 45 22 14
            </Typography>
            <Typography component="p" variant="body1" textAlign="justify">
              От предлагания винен тур може да научете повече за биовиното,
              тероара на четирите селища, до които се намират масивите на избата
              и вината Orbelus. Ще имате възможност да опитате превъзходно розе
              Orbelus Paril и Orbelus Melnik.
            </Typography>

            <Typography sx={{ textDecoration: "underline" }}>
              <Link href="https://www.orbeliawinery.bg/">Уебсайт</Link>
            </Typography>
          </Stack>
        </Stack>

        <Stack
          direction={{ md: "column", lg: "row" }}
          justifyContent="center"
          alignItems="flex-start"
          gap={4}
        >
          <Image
            src="https://ik.imagekit.io/obelussoft/VisitPetrich/%D0%BE%D1%80%D0%B1%D0%B5%D0%BB%D0%B8%D1%8F_c8N68cHJ6.jpg?updatedAt=1709646866751"
            alt="Park Petrich"
            width={100}
            height={100}
            style={{
              width: "100%",
              maxWidth: "800px",
              height: "600px",
              objectFit: "cover",
              borderRadius: "10px",
            }}
          />
          <Stack gap={2}>
            <Typography component="h4" variant="h3">
              Винарна “Орбелия”
            </Typography>

            <Typography component="p" variant="body1" textAlign="justify">
              Винарна Орбелия е семейна винарна, която отваря врати през 2013
              година. Разположена е в един от най-благоприятните райони за
              винопроизводство в България - Долината на Струма, в подножието на
              планина Беласица, в с. Коларово, на 12 км. западно от гр. Петрич.
              Орбелия е древното тракийско име на планинския масив и в превод
              означава бяла, красива планина.
            </Typography>
            <Typography component="p" variant="body1" textAlign="justify">
              Разполагат с над 200 декара собствени лозови масиви в района на
              селата Митиново и Старчево край Петрич.
            </Typography>
            <Typography component="p" variant="body1" textAlign="justify">
              Съдовият им капацитет е 100 000 литра вино, като имат съдове с
              капацитет от 500 литра до 5 000 литра, което им позволява да
              селектират малки партиди висококачествени вина. Следят качеството
              на вината в специално оборудвана лаборатория.
            </Typography>
            <Typography component="p" variant="body1" textAlign="justify">
              Отлежаването на вината протича в дъбови барици от български,
              френски и американски дъб, в специално помещение с постоянен
              контрол на температурата и влажността.
            </Typography>
            <Typography component="p" variant="body1" textAlign="justify">
              Стараят се да съхранят местните традиции във винопроизводството.
              Затова архитектурата и интериорът на Винарната са в унисон с
              българския бит и култура. А акцентът в техните вина е върху
              българските местни сортове.
            </Typography>
            <Typography component="p" variant="body1" textAlign="justify">
              На пазара можете да намерите вината ни под марките Lyre, Orbelia и
              Via Aristotelis.
            </Typography>
            <Typography component="p" variant="body1" textAlign="justify">
              Винарна Орбелия предлага отлични условия за винен туризъм.
              Отворена е за посещения всеки делничен ден. Желателно е да
              направите преди това резервация, особено, ако сте по-голяма група.
              Можете да го направите на телефон 0884 667793.
            </Typography>

            <Typography sx={{ textDecoration: "underline" }}>
              <Link href="https://www.orbeliawinery.bg">Уебсайт</Link>
            </Typography>
          </Stack>
        </Stack>

        <Stack
          direction={{ md: "column", lg: "row" }}
          justifyContent="center"
          alignItems="flex-start"
          gap={4}
        >
          <Image
            src="https://ik.imagekit.io/obelussoft/VisitPetrich/%D1%80%D1%83%D0%BF%D0%B5%D0%BB_kNurlcjBB.jpg?updatedAt=1709646868007"
            alt="Park Petrich"
            width={100}
            height={100}
            style={{
              width: "100%",
              maxWidth: "800px",
              height: "600px",
              objectFit: "cover",
              borderRadius: "10px",
            }}
          />
          <Stack gap={2}>
            <Typography component="h4" variant="h3">
              Винарна Рупел
            </Typography>
            <Typography component="p" variant="body1" textAlign="justify">
              Мястото е село Долно Спанчево, разположено на изток от град
              Петрич. С древното име „Спанча”, това селище все още носи духа на
              обитавалите го народи – траки, македонци, римляни, славяни,
              испански кръстоносци. Векове наред тук е имало грозде и вино, а
              по-късно районът се е оформил като естествен винен център в
              България, от който се е разпространявало виното към Горна Джумая,
              София, Гърция, Македония. Захранвани са пазарите в Драма, Берово,
              Пехчево, Солун, Серес, Демирхисар, и много други.
            </Typography>
            <Typography component="p" variant="body1" textAlign="justify">
              Вдъхновени от мястото, събрало в себе си традиции, факти,
              историческо минало, народи, империи, вдъхновени от тази бунтовна
              земя, на Спартак и Самуиловите войни, винарна &quot;Рупел &quot;
              следват една тенденция с духа и заложеното в гените отношение към
              виното още от древни времена – да създават добри вина, с модерен
              стил и сетивно въздействие.
            </Typography>
            <Typography component="p" variant="body1" textAlign="justify">
              А шатото сред лозята е красиво място, откриващо панорама към
              котловина, обгърната от високи планини. Запомнящи се изгреви и
              залези, беломорски бриз и изненадващи с палитрата си сезони.
              Разполага с дегустацинна зала с капацитет 40 места. Тя е подходяща
              за организиране на срещи, тиймбилдинги, празненства и др. С
              предварителна резервация се предлагат винени дегустации и
              възможност за запознаване с местните кулинарни традиции. Хората от
              село Долно Спанчево се славят със своето трудолюбие и райски
              градини.
            </Typography>
            <Typography component="p" variant="body1" textAlign="justify">
              Винарска изба Рупел е отворена за посетители с работно време от
              понеделник до неделя от 10:00 до 17:00 часа.
            </Typography>

            <Typography sx={{ textDecoration: "underline" }}>
              <Link href="https://rupel-wine.com/начало/">Уебсайт</Link>
            </Typography>
          </Stack>
        </Stack>

        <Stack
          direction={{ md: "column", lg: "row" }}
          justifyContent="center"
          alignItems="flex-start"
          gap={4}
        >
          <Image
            src="https://ik.imagekit.io/obelussoft/VisitPetrich/%D0%B7%D0%BB%D0%B0%D1%82%D0%B5%D0%BD_3KT63RDms.jpg?updatedAt=1709646866690"
            alt="Park Petrich"
            width={100}
            height={100}
            style={{
              width: "100%",
              maxWidth: "800px",
              height: "600px",
              objectFit: "cover",
              borderRadius: "10px",
            }}
          />
          <Stack gap={2}>
            <Typography component="h4" variant="h3">
              Винарска изба “Златен Рожен”
            </Typography>

            <Typography component="p" variant="body1" textAlign="justify">
              Семейството Маруся и Теодор Осиковски започват своята винена
              история, правейки &quot;златна&quot; инвестиция със закупуването
              на сграда, паметник на културата, в центъра на село Рожен (на 5 км
              от гр. Мелник). Превръщат я в уютен семеен хотел, запазвайки
              традиционния мелнишки облик. Бързо се влюбват във вкуса на
              местното вино и още от 2010 г. започват да инвестират и в
              собствени лозови масиви. След няколко успешни реколти и убедени в
              потенциала на мелнишкия тероар, през 2014 г. изграждат модерната
              винарна в с. Капатово, а през 2018 г. е открита и дегустационна
              зала, която посреща целогодишно любители на виното.
            </Typography>
            <Typography component="p" variant="body1" textAlign="justify">
              Винарска изба „Златен Рожен“ е бутикова винена изба, разположена в
              близост до село Капатово. Избата представлява модерен комплекс със
              завършен цикъл на производство, със съоръжения за контрол на
              всички процеси на винификация, съзряване, стабилизация и
              бутилиране на вината. В сортовата структура на лозовия масив
              доминиращи са сортовете Мерло, Каберне, Сира, типичните за региона
              Мелник 55, Мелнишки рубин и емблематичният за района от дълбока
              древност Широка мелнишка лоза.
            </Typography>
            <Typography component="p" variant="body1" textAlign="justify">
              Винарната &quot;Златен Рожен &quot; е отлична спирка за
              пътешествениците, тръгнали по пътя на виното. Тук любителите на
              Дионисиевата напитка могат да проследят пътя на виното и да се
              запознаят отблизо с етапите на производство, а след това да се
              настанят удобно на винения бар и да дегустират и преоткриват
              мелнишкото вино.
            </Typography>
            <Typography component="p" variant="body1" textAlign="justify">
              Можете да ги посетите от вторник до неделя в интервала от 10 до
              18ч. За резервации: +359 899 409 464
            </Typography>

            <Typography sx={{ textDecoration: "underline" }}>
              <Link href="https://www.zlatenrozhen.bg/">Уебсайт</Link>
            </Typography>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default page;
