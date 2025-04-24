// packages/widgets/use-sales-list/src/index.ts

import type { SalesRowProps } from '@chimera/ui.sales';

export const useSalesOverview = (): SalesRowProps[] => [
    {
        name: 'Olivia Martin',
        email: 'olivia.martin@email.com',
        amount: '+$1,999.00',
        avatarSrc: 'https://i.pravatar.cc/64?img=1',
    },
    {
        name: 'Jackson Lee',
        email: 'jackson.lee@email.com',
        amount: '+$39.00',
        avatarSrc: 'https://i.pravatar.cc/64?img=2',
    },
    {
        name: 'Isabella Nguyen',
        email: 'isabella.nguyen@email.com',
        amount: '+$299.00',
        avatarSrc: 'https://i.pravatar.cc/64?img=3',
    },
    {
        name: 'William Kim',
        email: 'will@email.com',
        amount: '+$99.00',
        avatarSrc: 'https://i.pravatar.cc/64?img=4',
    },
    {
        name: 'Sofia Davis',
        email: 'sofia.davis@email.com',
        amount: '+$39.00',
        avatarSrc: 'https://i.pravatar.cc/64?img=5',
    },
];
