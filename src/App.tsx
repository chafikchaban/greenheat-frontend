import { MyMap } from './components/MapWrapper/MapWrapper'
import { useQuery } from '@apollo/client';
import { GET_WEATHER_FOR_LOCATIONS, GetWeatherForLocationsData } from './data/queries'

function App() {
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
    <div className='h-screen w-screen my-4 flex flex-col items-center gap-4'>
      <h2 className='font-semibold text-2xl'>Current Weather</h2>
      <main className="h-2/3 w-4/5 flex items-center justify-center">
        {renderMap()}
      </main>
    </div>
  )
}

export default App
