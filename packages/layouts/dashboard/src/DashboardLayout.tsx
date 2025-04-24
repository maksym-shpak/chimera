// packages/layout/dashboard/src/DashboardLayout.tsx
import React, { ReactNode } from 'react';
import { cn } from '@chimera/lib.utils';

type DashboardLayoutProps = {
    stats: ReactNode;
    chart: ReactNode;
    sales: ReactNode;
    className?: string;
};

export const DashboardLayout = ({
    stats: header,
    chart,
    sales: sidebar,
    className,
}: DashboardLayoutProps) => {
    return (
        <div className={cn('space-y-4', className)}>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                {header}
            </div>
            <div className="grid gap-4 grid-cols-1 lg:grid-cols-3">
                <div className="lg:col-span-2">{chart}</div>
                {sidebar}
            </div>
        </div>
    );
};
