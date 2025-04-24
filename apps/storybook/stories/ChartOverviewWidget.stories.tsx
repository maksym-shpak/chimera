
import React from 'react';
import { StatChart } from '@chimera/widgets.stat-chart';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof StatChart> = {
    title: 'Widgets/StatChart',
    component: StatChart,
};

export default meta;

type Story = StoryObj<typeof StatChart>;

export const Default: Story = {
    render: () => <StatChart />,
};
