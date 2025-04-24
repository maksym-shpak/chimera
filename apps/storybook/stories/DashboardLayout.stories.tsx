import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { DashboardLayout } from '@chimera/layouts.dashboard';

const meta: Meta<typeof DashboardLayout> = {
    component: DashboardLayout,
    title: 'Layouts/Dashboard',
};

export default meta;

export const Default: StoryObj<typeof DashboardLayout> = {
    render: () => {
        return (
            <DashboardLayout
                stats={
                    <>
                        <div className="h-24 bg-yellow-200 rounded" />
                        <div className="h-24 bg-yellow-200 rounded" />
                        <div className="h-24 bg-yellow-200 rounded" />
                        <div className="h-24 bg-yellow-200 rounded" />
                    </>
                }
                chart={<div className="h-[350px] w-full bg-blue-200 rounded" />}
                sales={<div className="h-[350px] w-full bg-green-200 rounded" />}
            />
        );
    },
};