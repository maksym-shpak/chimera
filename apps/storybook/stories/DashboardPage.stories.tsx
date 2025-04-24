import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { DashboardLayout } from '@chimera/layouts.dashboard';
import { StatSales } from '@chimera/widgets.stat-sales';
import { StatChart } from '@chimera/widgets.stat-chart';
import { StatOverview } from '@chimera/widgets.stat-overview';

const meta: Meta<typeof DashboardLayout> = {
    component: DashboardLayout,
    title: 'Pages/Dashboard',
};

export default meta;

export const Default: StoryObj<typeof DashboardLayout> = {
    render: () => {
        return (
            <DashboardLayout
                stats={<StatOverview />}
                chart={<StatChart />}
                sales={<StatSales />}
            />
        );
    },
};