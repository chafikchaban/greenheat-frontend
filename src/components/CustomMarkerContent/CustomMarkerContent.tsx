import { memo } from "react";
import { LocationWeatherData } from "../../data/queries";
import { getWeatherIcon } from "../../utils/utils";
import TrashIcon from "../../assets/icons/trash";

export interface CustomMarkerContentProps {
    item: LocationWeatherData;
    removeLocation(id: string): void;
}

export const CustomMarkerContent: React.FC<CustomMarkerContentProps> = memo(({ item, removeLocation }) => {


    const renderIcon = () => {
        const WeatherIcon = getWeatherIcon(item.weatherCode, item.cloudCoverage);

        return <WeatherIcon />;
    }

    const deleteLocation = (e: React.MouseEvent) => {
        e.preventDefault();
        removeLocation(item.id);
    }

    return (
        <div className="flex flex-col">
            <div className="flex justify-center items-end gap-2">
                <h6 className="font-bold text-gray-600 text-center">{item.locationName}</h6>
                <TrashIcon height={24} width={24} className="cursor-pointer" onClick={deleteLocation}/>
            </div>
            <div className="my-2">
                <div className="flex flex-row space-x-4 items-center">
                    <div id="icon">
                        {renderIcon()}
                    </div>
                    <div id="temp">
                        <h6 className="text-4xl">{item.temperature} {item.units.temperature_2m}</h6>
                        <p className="text-xs text-gray-500">Wind Speed: {item.windSpeed} {item.units.wind_speed_80m}</p>
                        <p className="text-xs text-gray-500">Cloud coverage: {item.cloudCoverage} {item.units.cloud_cover}</p>
                        <p className="text-xs text-gray-500">UV index: {item.uvIndex}</p>
                    </div>
                </div>
            </div>
        </div>
    );
});