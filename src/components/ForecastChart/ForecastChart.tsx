import { LineChart as RechartsLineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { WeatherDataPoint } from '../../utils/utils';
import { ForcastChartTooltip } from './ForecastChartTooltip';

export interface LineChartLine {
    key: keyof WeatherDataPoint;
    color: string;
    unit?: string;
}

export interface ForecastChartProps {
    data: WeatherDataPoint[];
    lines: LineChartLine[];
    height?: number;
}
export function ForecastChart({ data, lines, height = 400 }: ForecastChartProps) {

    if (!data.length) {
        return (<div className='w-full h-[400px] text-center'>No data</div>)
    }

    return (
        <ResponsiveContainer width="100%" height={height}>
            <RechartsLineChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <YAxis />
                <XAxis dataKey="date" />
                <Tooltip content={<ForcastChartTooltip />} />
                <Legend />
                {lines.map((line, index) => (
                    <Line
                        key={index}
                        type="monotone"
                        dataKey={line.key}
                        stroke={line.color}
                        dot={{ strokeWidth: 2 }}
                    />
                ))}
            </RechartsLineChart>
        </ResponsiveContainer>
    );
}
