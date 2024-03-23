import PageHeader from "@/components/SmallComponents/PageHeader";
import { Stack, Typography } from "@mui/material";
import Image from "next/image";
import image from "../../../public/assets/culture/kukeri.jpg";
import image2 from "../../../public/assets/culture/narodni-tanci.jpg";
import image3 from "../../../public/assets/culture/festival.jpg";

const CulturePage = () => {
  return (
    <Stack>
      <PageHeader
        title="Културни събития и Творчески Пътеки"
        subtitle="Изживяване отвъд очакването"
        image={image}
      />

      <Stack width="100%" maxWidth="1600px" m="0 auto" gap={8} py={10} px={4}>
        <Stack
          justifyContent="center"
          alignItems="flex-start"
          flexWrap="wrap"
          gap={4}
        >
          <Typography component="h4" variant="h3">
            Културата в Петрич
          </Typography>
          <Image
            src={image2}
            alt="Park Petrich"
            width={100}
            height={100}
            style={{
              width: "100%",
              height: "450px",
              objectFit: "cover",
              borderRadius: "10px",
            }}
          />
          <Stack gap={2}>
            <Typography component="p" variant="body1" textAlign="justify">
              Със своята богата история и културно наследство, градът е място,
              на което времето е заложило дълбоки корени в облика и духа на
              общността. Културата в Петрич е неотделима част от живота на
              местните жители и ключов фактор за привличането на посетители от
              цял свят.
            </Typography>
            <Typography component="p" variant="body1" textAlign="justify">
              С традиции, които се пренасят от поколение на поколение, градът е
              център на културно разнообразие и творческа инициатива. От
              историческите паметници до съвременните изкуства, Петрич предлага
              богатство от възможности за поглед във вълшебния свят на
              културата.
            </Typography>
            <Typography component="p" variant="body1" textAlign="justify">
              Културата в Петрич не е просто събирателен елемент от миналото, а
              също и двигател на промяна и развитие в настоящето и бъдещето. Тя
              вдъхновява общността да се събира, да се учи и да се развива, като
              създава връзки и взаимодействия, които се простира отвъд границите
              на времето и пространството.
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
            src={image3}
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
            <Typography component="h4" variant="h3">
              Традиционни фестивали
            </Typography>

            <Typography component="p" variant="body1" textAlign="justify">
              Традиционните събития и фестивали в Петрич са ключови за
              обогатяването на културния живот и запазването на наследството на
              общността. Всяка година градът оживява с празници, които отразяват
              богатата история, традиции и култура на местните жители.
            </Typography>
            <Typography component="p" variant="body1" textAlign="justify">
              Един от най-известните събития в Петрич е Фолклорният кукерски
              фестивал, който събира на едно място групи, почитатели на
              изкуството от цялата страна. Този фестивал е възможност за среща с
              автентичните български традиции, музика и танци, които запазват
              връзката с миналото и прославят красотата на българския фолклор.
            </Typography>
            <Typography component="p" variant="body1" textAlign="justify">
              Още едно важно събитие е Фестивалът на народните обичаи и занаяти,
              който показва уменията на местните занаятчии и традиционните ръчно
              изработени изделия. Посетителите имат възможност да се запознаят с
              различните народни обичаи, кулинарни изкушения и майсторство на
              ръката, което е наследство от поколение на поколение.
            </Typography>
          </Stack>
        </Stack>

        <Stack gap={2}>
          <Typography component="p" variant="body1" textAlign="justify">
            В Петрич се провеждат и много други събития, като литературни
            фестивали, изложби на изкуство, концерти и спектакли, които
            обогатяват културния календар на града и предоставят възможност за
            срещи и взаимодействия сред местната общност и гостите на града.
          </Typography>
          <Typography component="p" variant="body1" textAlign="justify">
            Тези традиционни събития и фестивали са важни за запазването на
            културното наследство и насърчаване на културния туризъм в региона.
            Те създават уникална атмосфера на съпричастност, която обединява
            хората и ги кара да се гордеят с богатството на своята култура и
            традиции.
          </Typography>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default CulturePage;
