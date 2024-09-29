import { memo } from "react";
import { LocationWeatherData } from "../../data/queries";

import { CustomMarkerTarget } from "../CustomMarker/CustomMarkerTarget";
import { useMutation } from "@apollo/client";
import { DELETE_LOCATION } from "../../data/mutations";

export interface MapMarkersProps {
  data: LocationWeatherData[];
  refetchLocations(): void;
}

export const MapMarkers: React.FC<MapMarkersProps> = memo(({ data, refetchLocations }) => {
  const [deleteLocation] = useMutation(DELETE_LOCATION);

  const removeLocation = async (id: string) => {
    try {
      await deleteLocation({
        variables: {
          id: id,
        },
      })
        .then(refetchLocations)
    } catch (err) {
      console.error("Error deleting location:", err);
    }
  }

  return data.map((item: LocationWeatherData, index: number) => {
    const coordinates: [number, number] = [Number(item.latitude), Number(item.longitude)]
    return (
      <CustomMarkerTarget
        key={index}
        position={coordinates}
        item={item}
        removeLocation={removeLocation}
      />
    )
  })
})

