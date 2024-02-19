import PageHeader from "@/components/SmallComponents/PageHeader";
import { Stack, Typography } from "@mui/material";
import Image from "next/image";

const CulturePage = () => {
  return (
    <Stack>
      <PageHeader
        title="Културни събития и Творчески Пътеки"
        subtitle="Отразената красота, възвишена във времето, вдъхновяваща съвременността"
        image="https://ik.imagekit.io/obelussoft/VisitPetrich/%D0%B0%D1%81%D0%B4_kCmgcHf6L.jpg?updatedAt=1708365131671"
      />

      <Stack width="100%" maxWidth="1600px" m="0 auto" gap={8} py={10} px={4}>
        <Stack
          justifyContent="center"
          alignItems="flex-start"
          flexWrap="wrap"
          gap={4}
        >
          <Typography component="h4" variant="h2">
            Културата на град Петрич
          </Typography>
          <Image
            src="https://ik.imagekit.io/obelussoft/VisitPetrich/stanchinarski-igri-petrich3_jE6TIk4DXs.jpg?updatedAt=1708365494122"
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
              Градът Петрич, прелъстен от своята богата история и културно
              наследство, е място, където минаването на времето е заложило
              дълбоки корени в облика и духа на общността. Културата в Петрич е
              неотделима част от живота на местните жители и ключов фактор за
              привличането на посетители от цял свят.
            </Typography>
            <Typography component="p" variant="body1" textAlign="justify">
              С традиции, които се пренасят от поколение на поколение, градът е
              център на културно разнообразие и творческа иновация. От
              историческите паметници до съвременните изкуства, Петрич предлага
              богатство от възможности за поглед във вълшебния свят на
              културата.
            </Typography>
            <Typography component="p" variant="body1" textAlign="justify">
              Културата в Петрич не е просто събирателен елемент от миналото, а
              също така и двигател на промяна и развитие в настоящето и
              бъдещето. Тя вдъхновява общността да се събира, да се учи и да се
              развива, като създава връзки и взаимодействия, които се простира
              отвъд границите на времето и пространството.
            </Typography>
            <Typography component="p" variant="body1" textAlign="justify">
              С това въведение в културата на Петрич, ние се отправяме на едно
              пътешествие през богатството на миналото и съвременните изкуства,
              за да открием вдъхновяващата история и вълнуващото бъдеще на този
              изключителен град.
            </Typography>
          </Stack>
        </Stack>

        <Stack
          justifyContent="center"
          alignItems="flex-start"
          flexWrap="wrap"
          gap={4}
        >
          <Typography component="h4" variant="h2">
            Исторически и културни паметници в Петрич
          </Typography>
          <Image
            src="https://ik.imagekit.io/obelussoft/VisitPetrich/stanchinarski-igri-petrich3_jE6TIk4DXs.jpg?updatedAt=1708365494122"
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
              Градът Петрич, прелъстен от своята богата история и културно
              наследство, е място, където минаването на времето е заложило
              дълбоки корени в облика и духа на общността. Културата в Петрич е
              неотделима част от живота на местните жители и ключов фактор за
              привличането на посетители от цял свят.
            </Typography>
            <Typography component="p" variant="body1" textAlign="justify">
              С традиции, които се пренасят от поколение на поколение, градът е
              център на културно разнообразие и творческа иновация. От
              историческите паметници до съвременните изкуства, Петрич предлага
              богатство от възможности за поглед във вълшебния свят на
              културата.
            </Typography>
            <Typography component="p" variant="body1" textAlign="justify">
              Културата в Петрич не е просто събирателен елемент от миналото, а
              също така и двигател на промяна и развитие в настоящето и
              бъдещето. Тя вдъхновява общността да се събира, да се учи и да се
              развива, като създава връзки и взаимодействия, които се простира
              отвъд границите на времето и пространството.
            </Typography>
            <Typography component="p" variant="body1" textAlign="justify">
              С това въведение в културата на Петрич, ние се отправяме на едно
              пътешествие през богатството на миналото и съвременните изкуства,
              за да открием вдъхновяващата история и вълнуващото бъдеще на този
              изключителен град.
            </Typography>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default CulturePage;
