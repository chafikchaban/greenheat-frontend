import CloudyIcon from "../assets/icons/cloudy";
import MainlyClearIcon from "../assets/icons/mainlyClear";
import PartlyCloudyDayIcon from "../assets/icons/partlyCloudy";
import RainyIcon from "../assets/icons/rainy";
import SnowyIcon from "../assets/icons/snow";
import StormIcon from "../assets/icons/storm";
import SunnyIcon from "../assets/icons/sunny";

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