import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/">
      <Image
        src="https://ik.imagekit.io/obelussoft/VisitPetrich/visit-petrich-logo_Z1sBceYpp.png?updatedAt=1708159413498"
        alt="VisitPetrich Logo"
        width={250}
        height={70}
        style={{
          width: "100%",
          maxWidth: "300px",
          height: "auto",
          objectFit: "cover",
        }}
      />
    </Link>
  );
};

export default Logo;
