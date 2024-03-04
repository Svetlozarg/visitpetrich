"use client";
import Footer from "@/components/Layout/Footer";
import Topbar from "@/components/Layout/Topbar";
import ThemeRegistry from "@/theme/ThemeRegistry";
import { usePathname } from "next/navigation";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();

  return (
    <html lang="en">
      <ThemeRegistry>
        <body style={{ overflowX: "hidden" }}>
          {!pathname.includes("admin") ? <Topbar /> : null}
          {children}
          {!pathname.includes("admin") ? <Footer /> : null}
        </body>
      </ThemeRegistry>
    </html>
  );
}
