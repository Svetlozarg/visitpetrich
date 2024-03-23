"use client";
import { usePathname } from "next/navigation";
import Topbar from "../Layout/Topbar";
import Footer from "../Layout/Footer";

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const pathname = usePathname();

  return (
    <body style={{ overflowX: "hidden" }}>
      {!pathname.includes("admin") ? <Topbar /> : null}
      {children}
      {!pathname.includes("admin") ? <Footer /> : null}
    </body>
  );
};

export default MainLayout;
