
import { useEffect, useRef, useState } from "react";
import { LocationWeatherData } from "../../data/queries";
import { MapContainer, TileLayer } from 'react-leaflet'


import { ContextMenu } from "../MapContextMenu/MapContextMenu";
import { MapMarkers } from "../MapMarkers/MapMarkers";

export interface MyMapProps {
  data: LocationWeatherData[]
}

export function MyMap({ data }: MyMapProps) {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    // Update dimensions to match the container's size
    const updateDimensions = () => {
      if (mapContainerRef.current) {
        setDimensions({
          width: mapContainerRef.current.offsetWidth,
          height: mapContainerRef.current.offsetHeight,
        });
      }
    };
    updateDimensions();
    window.addEventListener('resize', updateDimensions); // Update on window resize
    return () => {
      window.removeEventListener('resize', updateDimensions);
    };
  }, []);

  return (
    <div
      ref={mapContainerRef}
      className="h-full w-full relative"
    >
      {dimensions.width && dimensions.height && (
        <MapContainer
          center={[50.50, 8.42]}
          zoom={6}
          style={{ height: dimensions.height, width: "100%" }}
          className="z-0 relative"
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <MapMarkers data={data}/>
          <ContextMenu />
        </MapContainer>
      )}
    </div>
  )
}
