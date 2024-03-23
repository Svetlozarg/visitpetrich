import MainLayout from "@/components/SmallComponents/MainLayout";
import ThemeRegistry from "@/theme/ThemeRegistry";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Петрич - Изживяване отвъд очакването",
    template: "%s - Петрич",
  },
  description:
    "Петрич е най-южния град в България, намиращ се на границата с Гърция и Северна Македония. Лесно достъпен и с добра транспортна свързаност - на 180 км от столицата София, на 130 км от Солун, на 188 км от Скопие. Главните забележителности в Петрич са Хераклея Синтика, къщата на Ванга, Самуилова крепост и Исторически Музей",
  category: "Tourism",
  keywords: [
    "Петрич",
    "Хераклея",
    "Синтика",
    "къща",
    "къщата",
    "Ванга",
    "Самуилова",
    "крепост",
    "Исторически",
    "Музей",
    "Изживяване",
    "отвъд",
    "очакването",
    "Благоевградска",
    "област",
    "юг",
    "граница",
    "Гърция",
    "Северна",
    "Македония",
    "кожух",
    "град",
    "беласица",
    "планина",
    "връх",
    "река",
    "струма",
    "парк",
    "Гяур",
    "Калеси",
    "Народно",
    "читалище",
    "Братя",
    "Миладинови",
    "petrich",
    "heraclea",
    "sintica",
    "vanga",
    "house",
    "samuil",
    "fortress",
    "historical",
    "museum",
    "experience",
    "beyond",
    "expectations",
    "Blagoevgrad",
    "region",
    "south",
    "border",
    "Greece",
    "North",
    "Macedonia",
    "coat",
    "city",
    "Belasitsa",
    "mountain",
    "peak",
    "river",
    "Struma",
    "park",
    "Gyaur",
    "Kalesi",
    "National",
    "Community",
    "Brothers",
    "Miladinovi",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ThemeRegistry>
        <MainLayout>{children}</MainLayout>
      </ThemeRegistry>
    </html>
  );
}
