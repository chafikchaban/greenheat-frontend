import { TooltipProps } from 'recharts';
import { WeatherDataPoint } from '../../utils/utils';

export function ForcastChartTooltip({ active, payload, label }: TooltipProps<number, string>) {

    if (active && payload && payload.length) {
        return (
            <div className="custom-tooltip bg-white p-2 border border-gray-300 rounded-md shadow">
                <p className="label">{`Date: ${label}`}</p>
                {payload.map((dataPoint, index) => {
                    const name = dataPoint.name as keyof WeatherDataPoint;
                    const data = dataPoint.payload[name];
                    const unit = dataPoint.payload.units[name] || '';

                    return (
                        <p key={index} className="intro">
                            {`${name}: ${data} ${unit}`}
                        </p>
                    )
                })}
            </div>
        );
    }

    return null;
}
