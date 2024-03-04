"use client";
import AdminDrawer from "@/components/Layout/AdminLayout/AdminDrawer";
import { USERNAME } from "@/helpers/helpers";
import ThemeRegistry from "@/theme/ThemeRegistry";
import { useEffect } from "react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  useEffect(() => {
    if (!USERNAME) {
      window.location.href = "/admin";
    }
  }, []);

  return (
    <html lang="en">
      <ThemeRegistry>
        <body style={{ overflowX: "hidden" }}>
          <AdminDrawer>{children}</AdminDrawer>
        </body>
      </ThemeRegistry>
    </html>
  );
}
