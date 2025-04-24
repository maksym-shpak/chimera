export type OverviewChartDataPoint = {
    name: string;
    total: number;
};

export const useChartOverview = (): OverviewChartDataPoint[] => [
    { name: 'Jan', total: 1500 },
    { name: 'Feb', total: 4800 },
    { name: 'Mar', total: 1600 },
    { name: 'Apr', total: 3100 },
    { name: 'May', total: 1400 },
    { name: 'Jun', total: 4700 },
    { name: 'Jul', total: 5300 },
    { name: 'Aug', total: 1200 },
    { name: 'Sep', total: 3000 },
    { name: 'Oct', total: 1100 },
    { name: 'Nov', total: 4600 },
    { name: 'Dec', total: 3100 },
];
