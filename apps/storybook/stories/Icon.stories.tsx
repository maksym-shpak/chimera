import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { DollarSign } from '@chimera/ui.icon';

const meta: Meta<typeof DollarSign> = {
    title: 'UI/Icon',
    component: DollarSign,
};
export default meta;

export const Default: StoryObj = {
    render: () => <DollarSign className="h-6 w-6 text-primary" />,
};
