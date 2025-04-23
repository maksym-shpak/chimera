import React from 'react';
import { ChartOverview } from '@chimera/ui.chart-overview';

const data = [
    { name: 'Jan', total: 2400 },
    { name: 'Feb', total: 1398 },
    { name: 'Mar', total: 9800 },
    { name: 'Apr', total: 3908 },
    { name: 'May', total: 4800 },
    { name: 'Jun', total: 3800 },
    { name: 'Jul', total: 4300 },
];

export default {
    title: 'Dashboard/ChartOverview',
    component: ChartOverview,
};

export const Default = () => <ChartOverview data={data} />;
