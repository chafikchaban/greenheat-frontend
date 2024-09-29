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
        weatherCode
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
    weatherCode: number;
}


export interface GetWeatherForLocationsData {
    weatherForLocations: LocationWeatherData[];
}