import { Stack, Typography } from "@mui/material";
import Image from "next/image";

const HomeAbout = () => {
  return (
    <Stack
      direction="row"
      justifyContent="center"
      alignItems="flex-start"
      flexWrap="wrap"
      gap={4}
      p={{ xs: 2, sm: 2, md: 10 }}
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

      <Stack width="100%" maxWidth="600px" gap={3}>
        <Typography component="h4" variant="h2">
          Град Петрич
        </Typography>
        <Typography component="p" variant="body1">
          <Typography component="span" variant="body1" color="primary.main">
            Петрич
          </Typography>{" "}
          е град в Югозападна България, административен център на община Петрич
          и Петрички окръг. Населението му е около 30 000 души. Градът е
          разположен на 80 км южно от София, на 20 км северно от границата с
          Република Македония и на 5 км от границата с Гърция. Петрич е
          разположен в долината на река Струма, на 13 км от извора на река
          Места.
        </Typography>

        <Typography component="p" variant="body1">
          Петрич е един от{" "}
          <Typography component="span" variant="body1" color="primary.main">
            най-старите градове в България
          </Typography>
          . На територията на града са открити следи от живот още от неолита. В
          античността градът е известен като Патраис, като е част от римската
          провинция Мизия. Петрич е известен като родното място на свети Климент
          Охридски.
        </Typography>

        <Typography component="p" variant="body1">
          Петрич е известен с топлите си{" "}
          <Typography component="span" variant="body1" color="primary.main">
            минерални извори и лечебните сила на тяхната вода.
          </Typography>{" "}
          В града се намират няколко басейна с минерална вода, които се
          използват за лечебни цели. Петрич е известен и с богатата си история и
          културно-историческото си наследство.
        </Typography>
      </Stack>
    </Stack>
  );
};

export default HomeAbout;
