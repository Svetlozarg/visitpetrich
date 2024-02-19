import HomeAbout from "@/components/PageComponents/Home/HomeAbout";
import HomeCulture from "@/components/PageComponents/Home/HomeCulture";
import HomeHero from "@/components/PageComponents/Home/HomeHero";
import HomeSport from "@/components/PageComponents/Home/HomeSport";
import HomeTourism from "@/components/PageComponents/Home/HomeTourism";
import WidgetCards from "@/components/SmallComponents/WidgetCards";
import { Stack } from "@mui/material";

const HomePage = () => {
  return (
    <Stack>
      <HomeHero />
      <WidgetCards />
      <HomeAbout />
      <HomeTourism />
      <HomeCulture />
      <HomeSport />
    </Stack>
  );
};

export default HomePage;
