import CloudyIcon from "../assets/icons/cloudy";
import MainlyClearIcon from "../assets/icons/mainlyClear";
import PartlyCloudyDayIcon from "../assets/icons/partlyCloudy";
import RainyIcon from "../assets/icons/rainy";
import SnowyIcon from "../assets/icons/snow";
import StormIcon from "../assets/icons/storm";
import SunnyIcon from "../assets/icons/sunny";
import WindDirectionIcon, { WindDirection } from "../assets/icons/windDirection";

/**
 * Converts weather code in WMO and cloud coverage in percentage to corresponding weather icon.
 * 
 * @param weathercode - weather code in WMO
 * @param cloudCoverage - weather code as string
 * @returns The corresponding weather icon as a React.FC
 */
export function getWeatherIcon(weathercode: number, cloudCoverage: string): React.FC {
    switch (weathercode) {
        case 0:
            return SunnyIcon;  // Clear sky
        case 1:
            return Number(cloudCoverage) < 20 ? MainlyClearIcon : PartlyCloudyDayIcon;  // Mainly clear or partly cloudy
        case 2:
            return PartlyCloudyDayIcon;  // Partly cloudy
        case 3:
            return CloudyIcon;  // Overcast
        case 61:
        case 63:
        case 65:
            return RainyIcon;  // Light to heavy rain
        case 71:
        case 73:
        case 75:
            return SnowyIcon; // Light to heavy snow
        case 80:
        case 81:
        case 82:
            return StormIcon;  // Thunderstorm
        default:
            return Number(cloudCoverage) > 50 ? CloudyIcon : SunnyIcon;  // Fallback based on cloud cover
    }
}

/**
 * Converts wind direction in degrees to a corresponding compass direction icon (N, NE, E, etc.).
 * 
 * @param windDirection - Wind direction in degrees (0 - 360)
 * @returns The corresponding compass direction icon as a React.ReactElement
 */
export function getWindDirectionIcon(windDirection: number): React.ReactElement {
    if (windDirection < 0 || windDirection > 360) {
        throw new Error("Wind direction must be between 0 and 360 degrees.");
    }

    const directions: WindDirection[] = ['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW'];

    // Convert degrees to index
    const index = Math.round(windDirection / 45);  // 360 degrees / 8 directions = 45 degrees per direction
    const directionString = directions[index % 8];


    return <WindDirectionIcon direction={directionString} />

}
