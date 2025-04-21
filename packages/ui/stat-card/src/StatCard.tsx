import React from 'react';
import { Card } from '@chimera/ui.card';
import { LucideIcon } from '@chimera/ui.icon';
import { cn } from '@chimera/lib.utils';

type StatCardProps = {
    icon: LucideIcon;
    label: string;
    value: string | number;
    delta?: string;
    className?: string;
}

export const StatCard = ({
    icon: Icon,
    label,
    value,
    delta,
    className
}: StatCardProps) => {
    return (
        <Card className={cn("p-4", className)}>
            <div className="flex justify-between items-start">
                <div className="text-sm text-muted-foreground">{label}</div>
                <Icon className="h-4 w-4 text-muted-foreground" />
            </div>
            <div className="text-2xl font-bold">{value}</div>
            {delta && (
                <div className="text-xs text-muted-foreground">{delta}</div>
            )}
        </Card>
    );
};
