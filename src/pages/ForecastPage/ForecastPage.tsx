import { useQuery } from "@apollo/client";
import { Card } from "../../components/Card/Card";
import { ForecastChat, LineChartLine } from "../../components/ForecastChart/ForecastChart";
import { GET_WEEKLY_WEATHER_FORECAST, GetWeeklyWeatherForecastData } from "../../data/queries";
import { formatDailyData, WeatherDataPoint } from "../../utils/utils";

export default function ForecastPage() {
  const { loading, error, data } = useQuery<GetWeeklyWeatherForecastData>(GET_WEEKLY_WEATHER_FORECAST, {
    variables: {
      locationID: "48.6616_9.3501"
    }
  });

  const renderCharts = () => {
    if (loading) {
      return <div>Loading...</div>;
    }

    if (error) {
      return <div>Error...</div>;
    }

    if (!data) {
      return <div>Something went wrong...</div>
    }

    const { WeatherForecast } = data;

    const temperatureLines: LineChartLine[] = [
      { key: 'maxTemp', color: '#ff7300'},
      { key: 'minTemp', color: '#387908'},
    ];

    const windLines: LineChartLine[] = [
      { key: 'windSpeed', color: '#d0177f'},
    ];

    const uvIndexLines: LineChartLine[] = [
      { key: 'uvIndex', color: '#d0177f'},
    ];

    const formattedData: WeatherDataPoint[] = formatDailyData(WeatherForecast.daily, WeatherForecast.dailyUnits);

    return (
      <Card title="7 day forecast">
        <div className="grid grid-cols-2 gap-8">
          <Card title="Temperature">
            <ForecastChat data={formattedData} lines={temperatureLines} />
          </Card>
          <Card title="Wind Speed">
            <ForecastChat data={formattedData} lines={windLines} />
          </Card>
          <Card title="UV index">
            <ForecastChat data={formattedData} lines={uvIndexLines} />
          </Card>
        </div>
      </Card>
    )
  }

  return (
    <div className='h-full w-full my-4 flex flex-col items-center gap-4'>
      <h2 className='font-semibold text-2xl my-12'>Forecast</h2>
      <main className="h-2/3 w-4/5 flex items-center justify-center">
        {renderCharts()}
      </main>
    </div >
  )
}
