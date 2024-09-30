import { gql } from '@apollo/client';

export const GET_LOCATIONS = gql`
  query Locations {
    locations {
        id
        name
        latitude
        longitude
    }
  }
`;

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

export const GET_WEEKLY_WEATHER_FORECAST = gql`
  query WeeklyWeatherForecast($locationID: String!) { 
    WeatherForecast(locationID: $locationID) { 
      locationName 
      latitude 
      longitude 
      daily { 
        time 
        temperature_2m_max 
        temperature_2m_min 
        wind_speed_10m_max 
        weather_code 
        wind_direction_10m_dominant 
        uv_index_max
      } 
      dailyUnits { 
        temperature_2m_max 
        temperature_2m_min 
        wind_speed_10m_max
      } 
    } 
  }
`

export interface Location {
  id: string;
  name: string;
  latitude: string;
  longitude: string;
}

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
  dailyUnits: WeatherUnits;
  hourlyUnits: WeatherUnits;
  daily: DailyWeatherData;
}

export interface WeatherUnits {
  time: string;
  temperature_2m: string;
  temperature_2m_max: string;
  temperature_2m_min: string;
  cloud_cover: string;
  wind_speed_80m: string;
  uv_index: string;
  wind_speed_10m_max: string;
}

export interface DailyWeatherData {
  time: string[];
  temperature_2m_max: number[];
  temperature_2m_min: number[];
  wind_speed_10m_max: number[];
  wind_direction_10m_dominant: number[];
  uv_index_max: number[];
  weather_code: number[];
}

export interface GetLocationsData {
  locations: Location[];
}


export interface GetWeatherForLocationsData {
  weatherForLocations: LocationWeatherData[];
}

export interface GetWeeklyWeatherForecastData {
  WeatherForecast: LocationWeatherData;
}