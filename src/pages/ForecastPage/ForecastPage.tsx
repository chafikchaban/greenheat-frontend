import { useQuery } from "@apollo/client";
import WeeklyForecastdashboard from "../../components/WeeklyForecastDashboard/WeeklyForecastDashboard";
import { GET_LOCATIONS, GetLocationsData, Location } from "../../data/queries";
import { useCallback, useState } from "react";
import { Select } from "../../components/Select/Select";

export default function ForecastPage() {
  const [selectedLocation, setSelectedLocation] = useState<Location | null>(null);

  const { loading, error, data } = useQuery<GetLocationsData>(GET_LOCATIONS, {
    onCompleted(data) {
      setSelectedLocation(data.locations[0]);
    },
  });


  const renderHeader = useCallback(() => {
    const selectOptions = data?.locations.map(location => ({
      value: location.id,
      label: location.name
    }))

    const onLocationSelect = (id: string) => {
      const location = data?.locations.find(el => el.id === id)
      if (!location) {
        return
      }

      setSelectedLocation(location)
    }
    return (
      <Select options={selectOptions} onSelect={onLocationSelect} />
    )
  }, [data?.locations])

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
    <div className='h-full w-full my-4 flex flex-col items-center gap-4'>
      <div className="flex gap-4 items-center w-4/5 justify-between">
        <div />
        <h2 className='font-semibold text-2xl my-12'>Forecast</h2>
        {renderHeader()}
      </div>
      <main className="h-2/3 w-4/5 flex items-center justify-center">
        <WeeklyForecastdashboard locationID={selectedLocation.id} />
      </main>
    </div >
  )
}
