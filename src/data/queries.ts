import { gql } from '@apollo/client';

export const GET_WEATHER_FOR_LOCATIONS = gql`
  query WeatherForLocations {
    weatherForLocations {
        id
        cloudCoverage
        latitude
        locationName
        longitude
        temperature
        uvIndex
        windSpeed
        weather_code
        wind_direction_10m
        units {
          temperature_2m
          temperature_2m_max
          temperature_2m_min
          cloud_cover
          wind_speed_80m
          uv_index
        }
    }
  }
`;

export interface LocationWeatherData {
  id: string;
  cloudCoverage: string;
  latitude: string;
  locationName: string;
  longitude: string;
  temperature: number;
  uvIndex: number;
  windSpeed: number;
  weather_code: number;
  wind_direction_10m: number;
  units: WeatherUnits;
  dilyUnits: WeatherUnits;
  hourlyUnits: WeatherUnits;
}

export interface WeatherUnits {
  time: string;
  temperature_2m: string;
  temperature_2m_max: string;
  temperature_2m_min: string;
  cloud_cover: string;
  wind_speed_80m: string;
  uv_index: string;
}


export interface GetWeatherForLocationsData {
  weatherForLocations: LocationWeatherData[];
}