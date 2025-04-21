import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { StatCard } from '@chimera/ui.stat-card';
import { CreditCard } from '@chimera/ui.icon';

const meta: Meta<typeof StatCard> = {
    title: 'UI/StatCard',
    component: StatCard,
};
export default meta;

export const Default: StoryObj = {
    render: () => (
        <StatCard
            icon={CreditCard}
            label="Total Revenue"
            value="$45,231.89"
            delta="+20.1% from last month"
        />
    ),
};
