"use client";
import { useEffect, useState } from "react";
import PageHeader from "@/components/SmallComponents/PageHeader";
import {
  GetQueryAllPlacesSnippet,
  Place,
} from "@/services/Places/apiPlacesSnippets";
import { CircularProgress, Stack, Typography } from "@mui/material";
import { callApi } from "@/services/callApi";
import { getQueryAllPlaces } from "@/services/Places/apiPlacesGetQueries";
import Button from "@/components/MUIComponents/Button";
import { useRouter } from "next/navigation";
import AccommodationCard from "@/components/PageComponents/Accommodation/AccommodationCard";

const AccommodationPage = () => {
  const router = useRouter();
  const [placesData, setPlacesData] = useState<Place[]>();

  useEffect(() => {
    (async () => {
      const placesData = await callApi<GetQueryAllPlacesSnippet>({
        query: getQueryAllPlaces,
      });

      if (placesData.success) {
        setPlacesData(placesData.data);
      }
    })();
  }, []);

  return (
    <Stack>
      <PageHeader
        title="Настаняване"
        image="https://ik.imagekit.io/obelussoft/VisitPetrich/%D0%BF%D0%B5%D1%82%D1%80_7rqxZd3WO.png?updatedAt=1709586646698"
      />

      <Stack width="100%" maxWidth="1400px" py={10} px={2} m="0 auto">
        {placesData ? (
          <Stack gap={10}>
            <Stack>
              <Typography
                component="h2"
                variant="h2"
                mb={4}
                textAlign={{ xs: "center", sx: "center", md: "left" }}
              >
                Хотели
              </Typography>

              <Stack
                direction="row"
                justifyContent="center"
                alignItems="center"
                flexWrap="wrap"
                gap={1}
              >
                {placesData
                  .filter((place) => place.category === "hotel")
                  .slice(0, 3)
                  .map((hotel) => (
                    <AccommodationCard key={hotel._id} data={hotel} />
                  ))}
              </Stack>

              <Button
                message="Разгледай още"
                sx={{
                  width: "100%",
                  maxWidth: "400px",
                  margin: "2rem auto 0 auto",
                }}
                onClick={() =>
                  router.push("/accommodation/hotels", { scroll: true })
                }
              />
            </Stack>

            <Stack>
              <Typography
                component="h2"
                variant="h2"
                mb={4}
                textAlign={{ xs: "center", sx: "center", md: "left" }}
              >
                Къщи за гости
              </Typography>

              <Stack
                direction="row"
                justifyContent="center"
                alignItems="center"
                flexWrap="wrap"
                gap={1}
              >
                {placesData
                  .filter((place) => place.category === "house")
                  .slice(0, 3)
                  .map((guestHouse) => (
                    <AccommodationCard key={guestHouse._id} data={guestHouse} />
                  ))}
              </Stack>

              <Button
                message="Разгледай още"
                sx={{
                  width: "100%",
                  maxWidth: "400px",
                  margin: "2rem auto 0 auto",
                }}
                onClick={() =>
                  router.push("/accommodation/houses", { scroll: true })
                }
              />
            </Stack>

            <Stack>
              <Typography
                component="h2"
                variant="h2"
                mb={4}
                textAlign={{ xs: "center", sx: "center", md: "left" }}
              >
                Хижи и бунгала
              </Typography>

              <Stack
                direction="row"
                justifyContent="center"
                alignItems="center"
                flexWrap="wrap"
                gap={1}
              >
                {placesData
                  .filter((place) => place.category === "hut")
                  .slice(0, 3)
                  .map((apartment) => (
                    <AccommodationCard key={apartment._id} data={apartment} />
                  ))}
              </Stack>

              <Button
                message="Разгледай още"
                sx={{
                  width: "100%",
                  maxWidth: "400px",
                  margin: "2rem auto 0 auto",
                }}
                onClick={() =>
                  router.push("/accommodation/huts", { scroll: true })
                }
              />
            </Stack>
          </Stack>
        ) : (
          <Stack justifyContent="center" alignItems="center" py={20}>
            <CircularProgress size="10rem" />
          </Stack>
        )}
      </Stack>
    </Stack>
  );
};

export default AccommodationPage;
