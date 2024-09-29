import { useMutation } from "@apollo/client";
import { useState } from "react";
import { useMapEvents } from "react-leaflet";
import { ADD_LOCATION, Location } from "../../data/mutations";

export function ContextMenu() {
  const [visible, setVisible] = useState<boolean>(false);
  const [position, setPosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [latLng, setLatLng] = useState<{ lat: number; lng: number } | null>(null);

  const [addLocation] = useMutation(ADD_LOCATION);

  useMapEvents({
    contextmenu: (event) => {
      const { containerPoint, latlng } = event;

      setVisible(true);
      setPosition({ x: containerPoint.x, y: containerPoint.y });
      setLatLng({ lat: latlng.lat, lng: latlng.lng });
    },
  });

  const trackLocation = async (e: React.MouseEvent) => {
    e.preventDefault(); 

    if(!latLng) {
      return
    }

    const input: Location = {
      name: 'test name',
      latitude: latLng?.lat.toFixed(6).toString(),
      longitude: latLng.lng.toFixed(6).toString(),
    };

    try {
        await addLocation({ variables: { ...input } }).then(() => setVisible(false));
    } catch (err) {
        console.error("Error saving location:", err);
    }
  }

  if (!visible) return null;

  return (

    <div className="absolute bg-white z-[999] w-48 border border-gray-300 rounded flex flex-col text-sm py-4 px-2 text-gray-500 shadow-lg"
      style={{
        top: `${position.y}px`,
        left: `${position.x}px`,
        transform: 'translateY(-100%) translateX(-50%)',
        marginTop: "-16px",
        pointerEvents: "auto",
      }}
    >
      <div
        className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white rotate-45 z-[99]"
        style={{ top: "100%", left: "50%", marginTop: "-8px" }}
      />
      <button className="flex hover:bg-gray-100 py-1 px-2 rounded z-[999]" onClick={(e) => trackLocation(e)}>
        <div>Track this location</div>
      </button>
    </div>
  );
}
