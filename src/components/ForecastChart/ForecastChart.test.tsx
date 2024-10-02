import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { ForecastChart, ForecastChartProps } from './ForecastChart';
import '@testing-library/jest-dom';


const defaultProps: ForecastChartProps = {
    data: [
        {
            date: '2024-01-01',
            maxTemp: 10,
            minTemp: 5,
            windSpeed: 20,
            uvIndexMax: 7,
            units: {
                maxTemp: '°C',
                minTemp: '°C',
                windSpeed: 'km/h'
            }
        },
        {
            date: '2024-01-02',
            maxTemp: 12,
            minTemp: 6,
            windSpeed: 22,
            uvIndexMax: 6,
            units: {
                maxTemp: '°C',
                minTemp: '°C',
                windSpeed: 'km/h'
            }
        },
    ],
    lines: [
        { key: 'maxTemp', color: 'red' },
        { key: 'minTemp', color: 'blue' },
    ],
};

describe('ForecastChart component', () => {

    it('renders the correct number of lines based on the lines prop', () => {
        render(<ForecastChart {...defaultProps} />);

        expect(screen.getByText('Line maxTemp')).toBeInTheDocument();
        expect(screen.getByText('Line minTemp')).toBeInTheDocument();
    });

    it('displays "No data" message if data is empty', () => {
        const emptyDataProps: ForecastChartProps = {
            ...defaultProps,
            data: []
        };
        render(<ForecastChart {...emptyDataProps} />);

        expect(screen.getByText('No data')).toBeInTheDocument();
    });

    it('renders the chart elements (YAxis, XAxis, Legend, Tooltip)', () => {
        render(<ForecastChart {...defaultProps} />);

        expect(screen.getByText('Y Axis')).toBeInTheDocument();
        expect(screen.getByText('X Axis')).toBeInTheDocument();
        expect(screen.getByText('Legend')).toBeInTheDocument();
        expect(screen.getByText('Tooltip')).toBeInTheDocument();
    });
});
