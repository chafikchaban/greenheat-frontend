
import { Card } from "../../components/Card/Card";
import { ForecastChat, LineChartLine } from "../../components/ForecastChart/ForecastChart";
import { formatDailyData, WeatherDataPoint } from "../../utils/utils";
import { useQuery } from "@apollo/client";
import { GET_WEEKLY_WEATHER_FORECAST, GetWeeklyWeatherForecastData } from "../../data/queries";

export interface WeeklyForecastdashboardProps {
    locationID: string;
}

export default function WeeklyForecastdashboard({ locationID }: WeeklyForecastdashboardProps) {
    const { loading, error, data } = useQuery<GetWeeklyWeatherForecastData>(GET_WEEKLY_WEATHER_FORECAST, {
        variables: {
            locationID
        }
    });

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error...</div>;
    }

    if (!data) {
        return <div>Something went wrong...</div>;
    }

    const { WeatherForecast } = data;

    const temperatureLines: LineChartLine[] = [
        { key: 'maxTemp', color: '#ff7300' },
        { key: 'minTemp', color: '#387908' },
    ];

    const windLines: LineChartLine[] = [
        { key: 'windSpeed', color: '#d0177f' },
    ];

    const uvIndexLines: LineChartLine[] = [
        { key: 'uvIndex', color: '#d0177f' },
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
