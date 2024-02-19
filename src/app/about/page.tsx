"use client";
import PageHeader from "@/components/SmallComponents/PageHeader";
import { Stack, Typography } from "@mui/material";
import Image from "next/image";

const AboutPetrichPage = () => {
  return (
    <Stack>
      <PageHeader
        title="Град Петрич - История, Красота, Вдъхновение"
        image="https://ik.imagekit.io/obelussoft/VisitPetrich/_Group%200_-6%20images_f7BfZzled.jpg?updatedAt=1708205353498"
      />

      <Stack width="100%" maxWidth="1600px" m="0 auto" gap={8} py={10} px={4}>
        <Stack
          direction="row"
          justifyContent="center"
          alignItems="flex-start"
          flexWrap="wrap"
          gap={4}
        >
          <Image
            src="https://ik.imagekit.io/obelussoft/VisitPetrich/park-petrich4_Rp7ihwjRW.jpg?updatedAt=1708162220874"
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
          <Stack width="100%" maxWidth="600px" gap={2}>
            <Typography component="h4" variant="h2">
              История на града
            </Typography>

            <Typography component="p" variant="body1" textAlign="justify">
              Подобри и допълни този текст, за да стане по-дълъг и стойностен и
              го направи по параграфи: Петрич - наследник на античния град
              Хераклея Синтика, който възниква през V-IV в. пр. Хр. в подножието
              на планината Кожух, местността Рупите. През 168 г. пр.Хр. Хераклея
              Синтика е завладяна от римляните и като римски град съществува до
              VІ век., когато е превзет от славяните.Започва плавния преход към
              средновековие.
            </Typography>
            <Typography component="p" variant="body1" textAlign="justify">
              През 837 г., при хан Пресиян, Петрич влиза в пределите на Първата
              българска държава. Градският център се измества на юг, в полите на
              планината Беласица.
            </Typography>
            <Typography component="p" variant="body1" textAlign="justify">
              Значението на гр. Петрич нараства, защото той е важен елемент от
              отбранителната система на средновековна България. Той бил здрава
              крепост, която бранела долините на Струма и Стумешница срещу
              нападенията от византийците.
            </Typography>
          </Stack>
        </Stack>

        <Stack gap={2}>
          <Typography component="p" variant="body1" textAlign="justify">
            На 18 км западно от града в 1014 г. се разиграва едно от
            най-драматичните сражения в българската история - битката за
            Самуиловата крепост и свободата на държавата. Пленени и ослепени
            14000 български войници, но техният подвиг се превръща в символ на
            борбата за освобождение от византийска власт.
          </Typography>
          <Typography component="p" variant="body1" textAlign="justify">
            През ХІІІ-ХІV в. Петрич е българска крепост - част от укрепителната
            система в Югозападна България.
          </Typography>
          <Typography component="p" variant="body1" textAlign="justify">
            По време на османското робство се превръща в турски административен
            и военен център.
          </Typography>
          <Typography component="p" variant="body1" textAlign="justify">
            По време на Балканската война през октомври 1912 година Петрич е
            освободен от четата на капитан Никола Парапанов. В града се
            установява българска военно-административна управа. Комендант на
            Петрич става Никола Парапанов, а първи кмет – Михо Попов. По време
            на Първата световна война, телеграфната рота, командвана от Борис
            Богданов се установява край Петрич на 7 януари 1916 година, когато
            гръцките войски се готвят да нападнат и превземат града,
            съсредоточавайки големи сили там. Цар Фердинанд изпраща телеграма на
            Богданов да изведе населението от Петрич, а самият град да се
            опожари, за да не попадне в гръцки ръце. За да не изпълни заповедта
            и да не опожари града, Богданов се самоубива на 10 януари 1916
            година. Гръцките войски се отказват от намеренията си, а петричани в
            знак на признателност към Богданов го погребват в двора на църквата
            &quot;Свети Николай&quot;.
          </Typography>
          <Typography component="p" variant="body1" textAlign="justify">
            През октомври 1925 година по време на гръцко-българския пограничен
            конфликт, известен като Петричкия инцидент, градът е бомбардиран от
            гръцката армия. Петричани дават решителен отпор на гръцките части и
            не допускат Петрич да бъде превзет.
          </Typography>
          <Typography component="p" variant="body1" textAlign="justify">
            От 1920 г. да 1934 г. Петрич е окръжен град. Днес Петрич е
            административен, стопански и културен център на Община Петрич.
          </Typography>
        </Stack>

        <Stack
          direction="row"
          justifyContent="center"
          alignItems="center"
          flexWrap="wrap"
          gap={4}
        >
          <Image
            src="https://ik.imagekit.io/obelussoft/VisitPetrich/DSC_0847a_R7eHOrore.jpg?updatedAt=1708205353626"
            alt="Park Petrich"
            width={100}
            height={100}
            style={{
              width: "100%",
              maxWidth: "700px",
              height: "450px",
              objectFit: "cover",
              borderRadius: "10px",
            }}
          />
          <Image
            src="https://ik.imagekit.io/obelussoft/VisitPetrich/DSC_0272_Gf0BX4qu7.JPG?updatedAt=1708205354139"
            alt="Park Petrich"
            width={100}
            height={100}
            style={{
              width: "100%",
              maxWidth: "700px",
              height: "450px",
              objectFit: "cover",
              borderRadius: "10px",
            }}
          />
        </Stack>

        <Stack width="100%" gap={3} my={4}>
          <Typography component="h4" variant="h2">
            Географско положение и природни красоти
          </Typography>

          <Typography component="p" variant="body1" textAlign="justify">
            Географското положение на град Петрич е от изключително значение,
            като се намира в югозападната част на България, в подножието на
            планината Кожух. Разположен в местността Рупите, Петрич се възползва
            от богатата природна обстановка и стратегическото си положение в
            близост до границата с Гърция и Македония.
          </Typography>
          <Typography component="p" variant="body1" textAlign="justify">
            Една от най-забележителните природни красоти на района е планината
            Кожух, която предлага изключителни възможности за планински туризъм,
            пешеходни маршрути и възхитителни гледки към околните пейзажи. Река
            Струма, която преминава през града, добавя към природната красота на
            района със своите живописни брегове и водни площи.
          </Typography>
          <Typography component="p" variant="body1" textAlign="justify">
            Около Петрич се разпростира и богата флора и фауна, включваща
            различни видове растения и животни, които са характерни за този
            регион на Балканския полуостров. Природната среда предлага уникални
            възможности за любителите на природата и откриватели, които търсят
            покой и вдъхновение в общуването с природата.
          </Typography>
          <Typography component="p" variant="body1" textAlign="justify">
            С уникалната си природна красота и разнообразие Петрич привлича
            множество посетители от цял свят, които идват да се насладят на това
            уникално природно богатство и да открият нови приключения в тази
            част от България.
          </Typography>

          <Image
            src="https://ik.imagekit.io/obelussoft/VisitPetrich/DSC_8353aa_i4B76oTRR.jpg?updatedAt=1708205354223"
            alt="Park Petrich"
            width={100}
            height={100}
            style={{
              width: "100%",
              height: "450px",
              objectFit: "cover",
              objectPosition: "center bottom",
              borderRadius: "10px",
            }}
          />
        </Stack>

        <Stack
          direction="row"
          justifyContent="center"
          alignItems="flex-start"
          flexWrap="wrap"
          gap={4}
        >
          <Stack width="100%" maxWidth="600px" gap={2}>
            <Typography component="h4" variant="h2">
              Културно и историческо наследство
            </Typography>

            <Typography component="p" variant="body1" textAlign="justify">
              Културното и историческото наследство на град Петрич е богато и
              разнообразно, представляващо важен аспект от идентичността и
              развитието на града през вековете. Съчетанието от исторически
              паметници, музеи, галерии и традиционни събития прави Петрич
              привлекателно място за туристи и културни ентусиасти.
            </Typography>
            <Typography component="p" variant="body1" textAlign="justify">
              В града се намират значими исторически обекти, като например
              Самуиловата крепост, която е свидетелство за важни събития в
              българската история през Средновековието. Тази крепост е известна
              с битката за свобода през 1014 г., когато българският цар Самуил
              защитава границите на държавата си срещу византийските
              завоеватели.
            </Typography>
            <Typography component="p" variant="body1" textAlign="justify">
              Освен Самуиловата крепост, в Петрич може да се разгледа и
              къщата-музей на Ванга, която представлява важен културен символ за
              града и страната. Тук се съхраняват предмети и артефакти от живота
              и дейността на известната българска ясновидка и целителка Ванга,
              като посетителите могат да се запознаят с нейната история и
              влияние.
            </Typography>
          </Stack>
          <Image
            src="https://ik.imagekit.io/obelussoft/VisitPetrich/HOR09391_D2xMvGHh8.jpg?updatedAt=1708363604672"
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
        </Stack>

        <Stack gap={2}>
          <Typography component="p" variant="body1" textAlign="justify">
            Петрич е и дом на няколко музея, включително исторически музей,
            който представя богатата история и култура на града и региона. Тук
            се съхраняват ценни археологически находки, артефакти и изложби,
            които разказват за живота на миналите поколения и значението им за
            съвременния свят.
          </Typography>
          <Typography component="p" variant="body1" textAlign="justify">
            Събитията и фестивалите, които се провеждат в Петрич, също играят
            важна роля за запазването и популяризирането на културното
            наследство на града. Традиционни празници, фолклорни събори и
            изложби на изкуство създават уникални възможности за срещи и обмен
            на културни идеи между жители и посетители.
          </Typography>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default AboutPetrichPage;
