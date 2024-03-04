"use client";
import AccommodationCard from "@/components/PageComponents/Accommodation/AccommodationCard";
import PageHeader from "@/components/SmallComponents/PageHeader";
import { getQueryAllPlaces } from "@/services/Places/apiPlacesGetQueries";
import {
  GetQueryAllPlacesSnippet,
  Place,
} from "@/services/Places/apiPlacesSnippets";
import { callApi } from "@/services/callApi";
import { CircularProgress, Stack } from "@mui/material";
import { useEffect, useState } from "react";

const HotelsPage = () => {
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
        title="Хижи и бунгала"
        image="https://ik.imagekit.io/obelussoft/VisitPetrich/%D0%BF%D0%B5%D1%82%D1%80_7rqxZd3WO.png?updatedAt=1709586646698"
      />

      <Stack width="100%" maxWidth="1400px" py={10} px={2} m="0 auto">
        {placesData ? (
          <Stack gap={10}>
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
            >
              {placesData
                .filter((place) => place.category === "hut")
                .map((hut) => (
                  <AccommodationCard key={hut._id} data={hut} />
                ))}
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

export default HotelsPage;
