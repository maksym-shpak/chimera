import React from 'react';
import { SalesList, type SalesRowProps } from '@chimera/ui.sales';
import { useSalesOverview } from '@chimera/data.use-sales-overview';
import type { FC } from 'react';

export const StatSales: FC = () => {
    const sales: SalesRowProps[] = useSalesOverview();

    return (
        <SalesList
            title="Recent Sales"
            description="You made 265 sales this month."
            items={sales}
        />
    );
};
