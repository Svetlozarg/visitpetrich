"use client";
import PageHeader from "@/components/SmallComponents/PageHeader";
import { Stack, Typography } from "@mui/material";
import Image from "next/image";

const page = () => {
  return (
    <Stack>
      <PageHeader
        title="Фестивали"
        image="https://ik.imagekit.io/obelussoft/VisitPetrich/%D0%B8%D0%B3%D1%80%D0%B8_eeA0bn2Dc.jpg?updatedAt=1709648963111"
      />

      <Stack width="100%" maxWidth="1600px" m="0 auto" gap={8} py={10} px={4}>
        <Stack
          direction={{ md: "column", lg: "row" }}
          justifyContent="center"
          alignItems="flex-start"
          gap={4}
        >
          <Image
            src="https://ik.imagekit.io/obelussoft/VisitPetrich/%D1%8E%D0%B6%D0%B5%D0%BD%20%D0%B3%D0%B5%D1%80%D0%B4%D0%B0%D0%BD_lgQB6Chfa.jpg?updatedAt=1709648962897"
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
            <Typography component="h4" variant="h2">
              „Южен Гердан”
            </Typography>

            <Typography component="p" variant="body1" textAlign="justify">
              Фолклорният общински събор за самодейни състави „Южен Гердан” е
              истински преглед на народното певческо и танцувално изкуство в
              Петричката община. Участниците представят песни, които се предават
              от поколения в огражденските, подгорските и равнинните села около
              Струма. Снажни танцьори и кръшни танцьорки вият хора под звуците
              на зурните и тъпана. Провежда се всяка година от 1992 г. насам в
              село Първомай на 1 май (Празника на селото). Има за цел да
              популяризира и съхранява за поколенията фолклорното богатство на
              Петричкия край. Участват всички самодейни ансамбли, певчески
              музикални и танцови състави от селищата на общината.
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
            src="https://ik.imagekit.io/obelussoft/VisitPetrich/%D0%B7%D0%B2%D0%B5%D0%B7%D0%B4%D0%B8_q5i2o-16d.jpg?updatedAt=1709648962841"
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
            <Typography component="h4" variant="h2">
              „Изгряват Звезди”
            </Typography>

            <Typography component="p" variant="body1" textAlign="justify">
              Националният фестивал на детско-юношеската забавна песен „Изгряват
              Звезди” успя да се утвърди като престижно поле за изява на млади
              таланти. Той създаде добра традиция за откриване и утвърждаване на
              млади певци и музиканти и се вписа трайно в културния календар не
              само в община Петрич, но и в цяла България. Фестивала се
              организира и провежда под егидата на Община Петрич. В него участие
              взимат младежи и девойки до 18 годишна възраст, които се
              разпределят в четири възрастови групи. В програмата на фестивала
              имат възможност за изява млади изпълнители извън конкурсната
              програма и деца – лауреати от изминали издания на фестивала, както
              и участници от чужбина.
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
            src="https://ik.imagekit.io/obelussoft/VisitPetrich/%D1%8E%D0%B6%D0%BD%D0%B8%20%D1%81%D0%BB%D1%8A%D0%BD%D1%86%D0%B0_ZM-u89XN7.jpg?updatedAt=1709648963017"
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
            <Typography component="h4" variant="h2">
              „Южни слънца”
            </Typography>
            <Typography component="p" variant="body1" textAlign="justify">
              Националният конкурс „Южни слънца” има за цел да стимулира
              творческата енергия на българските деца за създаване на
              произведения в областта на изобразителното изкуство, изучаване и
              съхраняване на българския фолклор и традиции. Конкурса се
              организира от МОН, РУО – Благоевград, Национален дворец на децата
              – София, Община Петрич и ЦПЛР – ОДК Петрич от 1999г. Провежда се
              ежегодно в четири направления: пленер, литературно творчество,
              фолклорно надиграване и танцово изкуство. В конкурса участие
              взимат деца на възраст от 5 до 19 години.
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
            src="https://ik.imagekit.io/obelussoft/VisitPetrich/%D0%B7%D0%BB%D0%B0%D1%82%D0%B5%D0%BD%20%D0%BA%D0%B5%D1%81%D1%82%D0%B5%D0%BD_RFnTw0KeD.jpg?updatedAt=1709648962843"
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
            <Typography component="h4" variant="h2">
              Международен фестивал за нова песен „Златен кестен”
            </Typography>

            <Typography component="p" variant="body1" textAlign="justify">
              Фестивалът „Златен кестен” бе едно от най-емоционалните и значими
              събития в Община Петрич. Конкурсът бе за авторска песен, музика,
              текст, аранжимент и изпълнение. Стартирал през есента на 1992 г.
              фестивалът на българската градска песен „Златен кестен” бързо
              спечели последователи и Петрич заслужено се превърна в столица на
              „българския евъргрийн”. Над 4000 изпълнители са минали през
              петричката сцена която се превърна в успешен старт за редица
              непознати дотогава изпълнители и състави , а благодарение на
              доброто сътрудничество с БНТ и БНР хиляди телевизионни зрители и
              радиослушатели станаха съпричастни на това събитие. От 1997г.
              стартира и Конкурсът за авторска песен в стила на старите шлагери
              , който дава възможност значително да се освежи и обогати
              репертоарът на изпълнителите както и да се даде възможност за
              участие на повече млади хора. От 2005 г. фестивалът „Златен
              кестен” се утвърждава не само като национален , но и международен
              . Обикновено фестивалът се провеждаше през късна есен, когато този
              &quotчуден южен край&quot се пълнеше с гости от близо и далеч и
              радаше музикалните фенове!
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
            src="https://ik.imagekit.io/obelussoft/VisitPetrich/%D1%81%D0%B8%D0%B3%D1%80%D0%B8_ZxSWifO2W.jpg?updatedAt=1709649154509"
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
            <Typography component="h4" variant="h2">
              Станчинарски игри
            </Typography>

            <Typography component="p" variant="body1" textAlign="justify">
              Новогодишните маскирания (т.нар. станчинарски игри) и русалийските
              игри са два народни календарни обичая, запазили живия български
              дух в населението от Петрич и района. Те са свързани с т.нар.
              „погани дни” (мръсни дни), които започват от Коледа (24 декември)
              и завършват на Йордановден (6 януари). В миналото тези обичаи са
              се изпълнявали в продължение на целия посочен период, а днес само
              на 1 януари (Васильовден), известен на местното население и под
              името Сурва. Традицията сочи, че новогодишните маскирания са
              обичай, характерен за местното население, докато русалийските игри
              са донесени от големите бежански вълни, залели Петрич и района
              след 1913 г. Негови носители са българите преселници от Кукушко,
              Гевелийско и Енидже Вардарско. С течение на времето двата обичая
              са си взаимодействали и днес те са неразделна част от обредната
              система на населението от Петрич и района, като в града
              русалийските игри съчетават станичнарско (кукерско) шествие и
              представляват единен карнавален празник – Сурва.
            </Typography>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default page;
