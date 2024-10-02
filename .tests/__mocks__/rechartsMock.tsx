import { vi } from "vitest";

vi.mock('recharts', async () => {
    const actual = await vi.importActual('recharts');
    return {
        ...actual,
        ResponsiveContainer: ({ children }: any) => <div>{children}</div>,
        LineChart: ({ children }: any) => <div>{children}</div>,
        CartesianGrid: () => <div>Grid</div>,
        XAxis: () => <div>X Axis</div>,
        YAxis: () => <div>Y Axis</div>,
        Tooltip: () => <div>Tooltip</div>,
        Legend: () => <div>Legend</div>,
        Line: ({ dataKey }: any) => <div>Line {dataKey}</div>,
    };
});