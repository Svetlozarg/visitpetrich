import { Box } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import logo from "../../../public/assets/petrich-logo-bg.webp";

const Logo = () => {
  return (
    <Box width="100%" maxWidth={{ xs: "150px", sm: "150px", md: "180px" }}>
      <Link href="/">
        <Image
          src={logo}
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
