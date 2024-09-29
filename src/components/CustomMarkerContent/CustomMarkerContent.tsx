import { memo } from "react";
import { LocationWeatherData } from "../../data/queries";
import { getWeatherIcon } from "../../utils/utils";

export interface CustomMarkerProps {
    item: LocationWeatherData;
}

export const CustomMarkerContent: React.FC<CustomMarkerProps> = memo(({ item }) => {

    const renderIcon = () => {
        const WeatherIcon = getWeatherIcon(item.weatherCode, item.cloudCoverage);

        return <WeatherIcon />;
    }
    
    return (
            <div className="flex flex-col">
                <div>
                    <p className="font-bold text-gray-600 text-center">{item.locationName}</p>
                </div>
                <div className="my-2">
                    <div className="flex flex-row space-x-4 items-center">
                        <div id="icon">
                                {renderIcon()}
                        </div>
                        <div id="temp">
                            <h6 className="text-4xl">{item.temperature}°C</h6>
                            <p className="text-xs text-gray-500">Wind Speed: {item.windSpeed}</p>
                            <p className="text-xs text-gray-500">Cloud coverage: {item.cloudCoverage}</p>
                            <p className="text-xs text-gray-500">weather code: {item.weatherCode}</p>
                        </div>
                    </div>
                </div>
            </div>
    );
});