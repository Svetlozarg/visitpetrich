import { Box } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <Box width="100%" maxWidth={{ xs: "150px", sm: "150px", md: "200px" }}>
      <Link href="/">
        <Image
          src="https://ik.imagekit.io/obelussoft/VisitPetrich/visitpetrich-logo_fXv09QIPW.png"
          alt="VisitPetrich Logo"
          width={250}
          height={70}
          style={{
            width: "100%",
            height: "auto",
            objectFit: "cover",
          }}
        />
      </Link>
    </Box>
  );
};

export default Logo;
