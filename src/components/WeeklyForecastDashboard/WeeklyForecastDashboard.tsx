import { Card } from "../../components/Card/Card";
import { ForecastChart, LineChartLine } from "../../components/ForecastChart/ForecastChart";
import { formatDailyData, WeatherDataPoint, WeatherControl, weatherControls } from "../../utils/utils";
import { useQuery } from "@apollo/client";
import { GET_WEEKLY_WEATHER_FORECAST, GetWeeklyWeatherForecastData } from "../../data/queries";

export interface WeeklyForecastdashboardProps {
    locationID: string;
    metrics: WeatherControl[];
}

export default function WeeklyForecastdashboard({ locationID, metrics }: WeeklyForecastdashboardProps) {
    const { loading, error, data } = useQuery<GetWeeklyWeatherForecastData>(GET_WEEKLY_WEATHER_FORECAST, {
        variables: {
            locationID,
            metrics: metrics.map(metric => metric.value)
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
    const formattedData: WeatherDataPoint[] = formatDailyData(WeatherForecast.daily, WeatherForecast.dailyUnits);

    const renderTemperatureChart = () => {
        const tempMetrics = metrics.filter(metric => metric.value === 'temperature_2m_max' || metric.value === 'temperature_2m_min');
        const lines: LineChartLine[] = [
            { key: 'maxTemp', color: '#ff7300' },
            { key: 'minTemp', color: '#00aaff' }
        ]

        if (tempMetrics.length === 0) {
            return null
        }

        return (
            <Card key="temperature" title="Temperature">
                <ForecastChart
                    data={formattedData}
                    lines={lines}
                />
            </Card>
        )
    }

    const renderCharts = () => {
        const otherMetrics = metrics.filter(metric => metric.value !== 'temperature_2m_max' && metric.value !== 'temperature_2m_min');

        const charts = otherMetrics.map((metric) => {
            const hasData = formattedData.some((dataPoint: WeatherDataPoint) => dataPoint[metric.key as keyof WeatherDataPoint] !== undefined);

            if (!hasData) {
                return null;
            }

            const color: string = weatherControls.find(item => item.key === metric.key)?.color || ''
            const lines: LineChartLine[] = [{ key: metric.key as keyof WeatherDataPoint, color }];

            return (
                <Card key={metric.key} title={metric.key}>
                    <ForecastChart data={formattedData} lines={lines} />
                </Card>
            );
        })

        return (
            <>
                {charts}
            </>)
    }

    return (
        <Card title="7 day forecast">
            <div className="grid grid-cols-2 gap-8">
                {renderTemperatureChart()}
                {renderCharts()}
            </div>
        </Card>
    );
}
