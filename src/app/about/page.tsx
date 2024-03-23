"use client";
import PageHeader from "@/components/SmallComponents/PageHeader";
import { Box, Stack, Typography } from "@mui/material";
import Image from "next/image";
import image from "../../../public/assets/history/cityHero.jpg";
import image2 from "../../../public/assets/history/cityHistory.jpg";
import image3 from "../../../public/assets/history/thuderCity.jpg";
import image4 from "../../../public/assets/history/coldCity.jpg";
import image5 from "../../../public/assets/history/panoramaCity.jpg";
import image6 from "../../../public/assets/history/parkPetrich.jpg";

const AboutPetrichPage = () => {
  return (
    <Stack>
      <PageHeader
        title="Петрич - История, Красота, Вдъхновение"
        subtitle="Изживяване отвъд очакването"
        image={image}
      />

      <Stack width="100%" maxWidth="1600px" m="0 auto" gap={8} py={10} px={4}>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="flex-start"
          flexWrap={{ xs: "wrap", sm: "wrap", md: "nowrap" }}
          gap={4}
        >
          <Box
            sx={{
              width: "100%",
              maxWidth: "800px",
              height: "500px",
              backgroundImage: `url('${image2.src}')`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundSize: "cover",
              borderRadius: "10px",
            }}
          ></Box>

          <Stack width="100%" maxWidth={{ md: "600px" }} gap={2}>
            <Typography component="h4" variant="h3">
              История на града
            </Typography>

            <Typography component="p" variant="body1" textAlign="justify">
              Градът е наследник наследник на античния град Хераклея Синтика,
              който възниква през V - IV век пр. Хр. в подножието на планината
              Кожух, местност Рупите. През 168 година пр. Хр. Хераклея Синтика е
              завладяна от римляните и като римски град съществува до VІ век.,
              когато е превзет от славяните. Именно тогава, започва плавния
              преход към средновековието.
            </Typography>

            <Typography component="p" variant="body1" textAlign="justify">
              През 837 г., при хан Пресиян, Петрич влиза в пределите на Първата
              българска държава. Градският център се измества на юг, в полите на
              планината Беласица.
            </Typography>

            <Typography component="p" variant="body1" textAlign="justify">
              Значението на гр. Петрич през средновековието нараства, тъй като
              той е важен център на отбранителната система на средновековна
              България. Градът е представян, като крепост, която бранела
              долините на Струма и Стумешница срещу нападенията от византийците.
            </Typography>
          </Stack>
        </Stack>

        <Stack gap={2}>
          <Typography component="p" variant="body1" textAlign="justify">
            На 18 км западно от града през 1014 г. се разиграва едно от
            най-драматичните сражения в българската история - битката за
            Самуиловата крепост и свободата на държавата. Пленени и ослепени са
            14 000 български войници, като техният подвиг се превръща в символ
            на борбата за освобождение от византийска власт и една от
            най-известните битки на териоторията на България.
          </Typography>

          <Typography component="p" variant="body1" textAlign="justify">
            По време на османското робство, градът се превръща в турски
            административен и военен център.
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
            `&quot;`Свети Николай`&quot;`.
          </Typography>

          <Typography component="p" variant="body1" textAlign="justify">
            През октомври 1925 година по време на гръцко-българския пограничен
            конфликт, известен като Петричкия инцидент, градът е бомбардиран от
            гръцката армия. Петричани дават решителен отпор на гръцките части и
            не допускат Петрич да бъде превзет.
          </Typography>

          <Typography component="p" variant="body1" textAlign="justify">
            Днес градът е административен, стопански и културен център на Община
            Петрич.
          </Typography>
        </Stack>

        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          flexWrap={{ xs: "wrap", sm: "wrap", md: "nowrap" }}
          gap={4}
        >
          <Box
            sx={{
              width: "100%",
              maxWidth: "800px",
              height: "500px",
              backgroundImage: `url('${image3.src}')`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundSize: "cover",
              borderRadius: "10px",
            }}
          ></Box>
          <Box
            sx={{
              width: "100%",
              maxWidth: "800px",
              height: "500px",
              backgroundImage: `url('${image4.src}')`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundSize: "cover",
              borderRadius: "10px",
            }}
          ></Box>
        </Stack>

        <Stack width="100%" gap={3} my={4}>
          <Typography component="h4" variant="h3">
            Географско положение и природни дадености
          </Typography>

          <Typography component="p" variant="body1" textAlign="justify">
            Географското положение на Петрич се намира в югозападната част на
            България, в подножието на планината Кожух. Географското му
            разположение е в южната част на Петричката котловина
          </Typography>
          <Typography component="p" variant="body1" textAlign="justify">
            Едни от най-забележителните природни красоти на района са планините
            Беласица и Кожух, които предлагат изключителни възможности за
            планински туризъм, пешеходни маршрути и възхитителни гледки към
            околните пейзажи. Важна част от биоразнообразието на местността е и
            Река Струма, която преминава през града и допринася за природната
            красота на района.
          </Typography>
          <Typography component="p" variant="body1" textAlign="justify">
            Около Петрич се разпростира и богата флора и фауна, включваща
            различни видове растения и животни, които са характерни за този
            регион на Балканския полуостров. Природната среда предлага уникални
            възможности за любителите на природата и откриватели, които търсят
            покой и вдъхновение.
          </Typography>
          <Typography component="p" variant="body1" textAlign="justify">
            С уникалната си природна дадености и голямо разнообразие, местността
            привлича множество посетители от цял свят, които идват да се
            насладят на това уникално природно богатство и да открият разгледат
            интересна част от България.
          </Typography>

          <Image
            src={image5}
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
          width="100%"
          maxWidth="1600px"
          direction="row"
          justifyContent="space-between"
          alignItems="flex-start"
          flexWrap={{ xs: "wrap", sm: "wrap", md: "nowrap" }}
          gap={4}
        >
          <Stack width="100%" maxWidth={{ md: "600px" }} gap={2}>
            <Typography component="h4" variant="h3">
              Историческо наследство
            </Typography>

            <Typography component="p" variant="body1" textAlign="justify">
              Културното и историческото наследство на Петрич представлява важен
              аспект от идентичността и развитието на града през вековете.
              Съчетанието от исторически паметници, музеи, галерии и традиционни
              събития прави Петрич привлекателно място за туристи и културни
              ентусиасти.
            </Typography>
            <Typography component="p" variant="body1" textAlign="justify">
              Около града се намират значими исторически обекти, като
              Самуиловата крепост, Хераклея Синтика, къща-музей Ванга, Гяур
              Калеси и др.
            </Typography>
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

          <Box
            sx={{
              width: "100%",
              maxWidth: "800px",
              height: "500px",
              backgroundImage: `url('${image6.src}')`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundSize: "cover",
              borderRadius: "10px",
            }}
          ></Box>
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
