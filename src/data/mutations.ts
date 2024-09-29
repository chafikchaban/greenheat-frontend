import { gql } from "@apollo/client";

export const ADD_LOCATION = gql`
  mutation AddLocationMutation($name: String!, $latitude: String!, $longitude: String!) {
    addLocation(name: $name, latitude: $latitude,,longitude: $longitude) {
      name
      latitude
      longitude
    }
  }
`;

export interface Location {
    name: string;
    latitude: string;
    longitude: string;
}