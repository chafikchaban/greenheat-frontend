import { useQuery } from "@apollo/client";
import { MyMap } from "../../components/MapWrapper/MapWrapper";
import { GET_WEATHER_FOR_LOCATIONS, GetWeatherForLocationsData } from "../../data/queries";

export default function CurrentWeatherPage() {
  const { loading, error, data, refetch } = useQuery<GetWeatherForLocationsData>(GET_WEATHER_FOR_LOCATIONS);

  const renderMap = () => {
    if (loading) {
      return <div>Loading...</div>;
    }

    if (error) {
      return <div>Error...</div>;
    }

    if (!data) {
      return <div>Something went wrong...</div>
    }

    const { weatherForLocations } = data;

    return <MyMap data={weatherForLocations} refetchLocations={refetch} />
  }

  return (
    <div className='h-[calc(100vh-96px)] w-full flex flex-col items-center gap-4'>
      <main className="h-full w-full flex items-center justify-center">
        {renderMap()}
      </main>
    </div>
  )
}
