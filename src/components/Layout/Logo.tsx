import Image from "next/image";
import Link from "next/link";

interface LogoProps {
  scrollPosition: number;
}

const Logo: React.FC<LogoProps> = ({ scrollPosition }) => {
  return (
    <Link href="/">
      <Image
        src="https://ik.imagekit.io/obelussoft/VisitPetrich/visitpetrich-logo_fXv09QIPW.png"
        alt="VisitPetrich Logo"
        width={250}
        height={70}
        style={{
          width: "100%",
          maxWidth: scrollPosition > 150 ? "200px" : "300px",
          height: "auto",
          objectFit: "cover",
          transition: "250ms ease-in-out",
        }}
      />
    </Link>
  );
};

export default Logo;
