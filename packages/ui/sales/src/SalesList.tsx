import React from 'react';
import { cn } from '@chimera/lib.utils';
import { SalesRow, SalesRowProps } from './SalesRow';

export type SalesListProps = {
    title: string;
    description?: string;
    items: SalesRowProps[];
    className?: string;
};

export const SalesList = ({ title, description, items, className }: SalesListProps) => {
    return (
        <div className={cn('rounded-xl border p-4', className)}>
            <div className="mb-4 space-y-1">
                <h4 className="text-sm font-medium">{title}</h4>
                {description && <p className="text-muted-foreground text-sm">{description}</p>}
            </div>
            <div className="space-y-2">
                {items.map((item, i) => (
                    <SalesRow key={i} {...item} />
                ))}
            </div>
        </div>
    );
};
