import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/">
      <Image
        src="https://ik.imagekit.io/obelussoft/VisitPetrich/visitpetrich-logo_fXv09QIPW.png"
        alt="VisitPetrich Logo"
        width={250}
        height={70}
        style={{
          width: "100%",
          maxWidth: "250px",
          height: "auto",
          objectFit: "cover",
          transition: "250ms ease-in-out",
        }}
      />
    </Link>
  );
};

export default Logo;
