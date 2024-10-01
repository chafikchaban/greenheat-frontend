import { useQuery } from "@apollo/client";
import WeeklyForecastdashboard from "../../components/WeeklyForecastDashboard/WeeklyForecastDashboard";
import { GET_LOCATIONS, GetLocationsData, Location } from "../../data/queries";
import { useCallback, useState } from "react";
import ForecastPageHeader from "./components/Header";
import { WeatherControl } from "../../utils/utils";

export default function ForecastPage() {
  const [selectedLocation, setSelectedLocation] = useState<Location | null>(null);
  const [controls, setControls] = useState<WeatherControl[]>([]);

  const { loading, error, data } = useQuery<GetLocationsData>(GET_LOCATIONS, {
    onCompleted(data) {
      setSelectedLocation(data.locations[0]);
    },
  });

  const renderHeader = useCallback((): React.ReactElement | null => {
    if (!data?.locations.length) {
      return null
    }

    return (
      <ForecastPageHeader
        locations={data?.locations}
        setSelectedLocation={setSelectedLocation}
        selectedControls={controls}
        setControls={setControls}
      />
    )
  }, [controls, data?.locations])

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error page...</div>;
  }

  if (!selectedLocation) {
    return <div>Something went wrong...</div>;
  }

  return (
    <div className='h-full w-full py-8 flex flex-col items-center gap-4'>
      {renderHeader()}
      <main className="h-2/3 w-4/5 flex items-center justify-center">
        <WeeklyForecastdashboard locationID={selectedLocation.id} metrics={controls} />
      </main>
    </div >
  )
}
