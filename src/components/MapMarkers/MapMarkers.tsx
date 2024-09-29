import { memo } from "react";
import { LocationWeatherData } from "../../data/queries";

import { CustomMarkerTarget } from "../CustomMarker/CustomMarkerTarget";

export interface MapMarkersProps {
  data: LocationWeatherData[];
}

export const MapMarkers: React.FC<MapMarkersProps> = memo(({ data }) => {

  return data.map((item: LocationWeatherData, index: number) => {
    const coordinates: [number, number] = [Number(item.latitude), Number(item.longitude)]
    return (
      <CustomMarkerTarget
        key={index}
        position={coordinates}
        item={item}
      />
    )
  })
})

