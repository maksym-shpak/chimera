import React from 'react';
import {
    Bar,
    BarChart,
    ResponsiveContainer,
    XAxis,
    YAxis,
    Tooltip,
} from 'recharts';
import { cn } from '@chimera/lib.utils';

type ChartOverviewProps = {
    className?: string;
    data: {
        name: string;
        total: number;
    }[];
};

export const ChartOverview = ({ className, data }: ChartOverviewProps) => {
    return (
        <div className={cn('h-[350px] w-full rounded-xl border p-4', className)}>
            <h4 className="mb-4 text-sm font-medium text-muted-foreground">Overview</h4>
            <ResponsiveContainer width="100%" height="100%">
                <BarChart data={data}>
                    <XAxis
                        dataKey="name"
                        stroke="#888888"
                        fontSize={12}
                        tickLine={false}
                        axisLine={false}
                        tick={{ fontSize: 12, dy: 10 }}
                    />
                    <YAxis
                        stroke="#888888"
                        fontSize={12}
                        tickLine={false}
                        axisLine={false}
                        tickFormatter={(value) => `$${value}`}
                    />
                    <Tooltip />
                    <Bar dataKey="total" fill="hsl(var(--foreground))" radius={[4, 4, 0, 0]} />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};
