import React from 'react';
import { SalesList } from '@chimera/ui.sales';

export default {
    title: 'Dashboard/SalesList',
    component: SalesList,
};

const items = [
    {
        name: 'Olivia Martin',
        email: 'olivia.martin@email.com',
        amount: '$1,999.00',
        avatarSrc: 'https://i.pravatar.cc/100?img=1',
    },
    {
        name: 'Liam Johnson',
        email: 'liam.johnson@email.com',
        amount: '$799.00',
        avatarSrc: 'https://i.pravatar.cc/100?img=2',
    },
    {
        name: 'Sophia Williams',
        email: 'sophia.williams@email.com',
        amount: '$2,499.00',
        avatarSrc: 'https://i.pravatar.cc/100?img=3',
    },
];

export const Default = () => (
    <SalesList
        title="Recent Sales"
        description="You made 265 sales this month."
        items={items}
    />
);
