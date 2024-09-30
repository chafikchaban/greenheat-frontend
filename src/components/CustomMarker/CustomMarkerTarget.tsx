import { memo, useEffect } from "react";
import { useMap } from "react-leaflet";

import L from 'leaflet';
import ReactDOM from "react-dom/client";
import { getWeatherIcon } from "../../utils/utils";
import { LocationWeatherData } from "../../data/queries";
import { CustomMarkerContent, CustomMarkerContentProps } from "../CustomMarkerContent/CustomMarkerContent";

export interface CustomMarkerTargetProps extends CustomMarkerContentProps {
    position: L.LatLngExpression;
}

// Custom Marker component that takes a position and React component
export const CustomMarkerTarget: React.FC<CustomMarkerTargetProps> = memo(({ position, item, removeLocation }) => {
    const map = useMap();

    useEffect(() => {
        const icon: React.FC = getWeatherIcon(item.weather_code, item.cloudCoverage)

        const marker = L.marker(position, {
            icon: createDivIcon(icon),
        }).addTo(map);

        // Bind the popup to the marker
        marker.bindPopup(createPopupContent(item, removeLocation));

        return () => {
            map.removeLayer(marker); // Cleanup when component unmounts
        };
    }, [item, item.cloudCoverage, item.weather_code, map, position, removeLocation]);

    return null;
});

// Function to render React component or HTML inside the Leaflet Popup
const createPopupContent = (item: LocationWeatherData, removeLocation: (id: string) => void) => {
    const div = document.createElement("div");
    const root = ReactDOM.createRoot(div);
    root.render(<CustomMarkerContent item={item} removeLocation={removeLocation} />);
    return div;
};

// Function to render the React component directly into a DOM element
const createDivIcon = (Component: React.FC) => {
    const div = document.createElement("div");

    // Render the React component into the created div
    const root = ReactDOM.createRoot(div);
    root.render(<Component />);

    return L.divIcon({
        className: "",
        html: div,
        iconSize: [64, 64],
        iconAnchor: [32, 24],
    });
};
