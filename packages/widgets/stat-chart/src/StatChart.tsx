import React from 'react';
import { ChartOverview } from '@chimera/ui.chart-overview';
import { useChartOverview } from '@chimera/data.use-chart-overview';
import type { FC } from 'react';

export const StatChart: FC = () => {
    const data = useChartOverview();

    return <ChartOverview data={data} />;
};