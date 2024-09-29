import { gql } from '@apollo/client';

export const GET_WEATHER_FOR_LOCATIONS = gql`
  query WeatherForLocations {
    weatherForLocations {
        cloudCoverage
        latitude
        locationName
        longitude
        temperature
        uvIndex
        windSpeed
        weatherCode
    }
  }
`;

export interface LocationWeatherData {
    cloudCoverage: string;
    latitude: string;
    locationName: string;
    longitude: string;
    temperature: number;
    uvIndex: number;
    windSpeed: number;
    weatherCode: number;
}


export interface GetWeatherForLocationsData {
    weatherForLocations: LocationWeatherData[];
}