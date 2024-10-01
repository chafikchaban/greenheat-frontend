import { useMutation } from "@apollo/client";
import { useState } from "react";
import { useMapEvents } from "react-leaflet";
import { ADD_LOCATION, Location } from "../../data/mutations";
import PinIcon from "../../assets/icons/pin";


export interface ContextMenuProps {
  refetchLocations(): void;
}

export function ContextMenu({ refetchLocations }: ContextMenuProps) {

  const [visible, setVisible] = useState<boolean>(false);
  const [position, setPosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [latLng, setLatLng] = useState<{ lat: number; lng: number } | null>(null);
  const [inputVisible, setInputVisible] = useState<boolean>(false);
  const [locationName, setLocationName] = useState<string>("");

  const [addLocation] = useMutation(ADD_LOCATION);

  useMapEvents({
    contextmenu: (event) => {
      const { containerPoint, latlng } = event;

      setVisible(true);
      setPosition({ x: containerPoint.x, y: containerPoint.y });
      setLatLng({ lat: latlng.lat, lng: latlng.lng });
    },
    dragstart: () => {
      setVisible(false);
      setInputVisible(false);
      setLocationName('');
    },
    zoomstart: () => {
      setVisible(false)
      setInputVisible(false);
      setLocationName('');
    },
  });

  const trackLocation = async (e: React.MouseEvent) => {
    e.preventDefault();

    if (!latLng) {
      return
    }

    const input: Location = {
      name: locationName,
      latitude: latLng?.lat.toFixed(6).toString(),
      longitude: latLng.lng.toFixed(6).toString(),
    };

    try {
      await addLocation({ variables: { ...input } }).then(() => {
        setVisible(false);
        setInputVisible(false);
        setLocationName('');
        refetchLocations();
      })
    } catch (err) {
      console.error("Error saving location:", err);
    }
  }

  if (!visible) return null;

  return (

    <div className="absolute bg-white z-[999] w-48 rounded-lg flex flex-col text-sm text-gray-600 shadow-leaflet cursor-default"
      style={{
        top: `${position.y}px`,
        left: `${position.x}px`,
        transform: 'translateY(-100%) translateX(-50%)',
        marginTop: "-16px",
        pointerEvents: "auto",
      }}
    >
      <div className="flex items-center justify-center gap-2 m-4">
        <PinIcon height={16} width={16} />
        {latLng && <p>{latLng?.lat.toFixed(2)}'N, {latLng?.lng.toFixed(2)}'E</p>}
      </div>
      {!inputVisible ? (
        <div className="italic mx-4 text-center">( untracked )</div>
      ) : (
        <input
          type="text"
          placeholder="Enter location name"
          className="border border-gray-300 p-2 rounded mb-2 mx-4"
          value={locationName}
          onChange={(e) => setLocationName(e.target.value)}
        />
      )}
      <button
        className="hover:bg-gray-200 py-4 px-9 mt-2 rounded-b-lg z-[999]"
        onClick={(e) => {
          if (!inputVisible) {
            setInputVisible(true);
          } else {
            trackLocation(e);
          }
        }}>
        <div>{!inputVisible ? 'Track this location' : 'Save'}</div>
      </button>
      {/* context menu bottom arrow */}
      <div
        className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white rotate-45 z-[99]"
        style={{ top: "100%", left: "50%", marginTop: "-8px" }}
      />
    </div>
  );
}
