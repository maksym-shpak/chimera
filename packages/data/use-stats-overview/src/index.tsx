import { DollarSign, Users, CreditCard, Activity } from '@chimera/ui.icon';
import type { LucideIcon } from 'lucide-react';

export type Stat = {
    label: string;
    value: string | number;
    delta?: string;
    icon: LucideIcon;
};

export const useStatsOverview = (): Stat[] => [
    {
        label: 'Total Revenue',
        value: '$45,231.89',
        delta: '+20.1% from last month',
        icon: DollarSign,
    },
    {
        label: 'Subscriptions',
        value: '+2350',
        delta: '+180.1% from last month',
        icon: Users,
    },
    {
        label: 'Sales',
        value: '+12,234',
        delta: '+19% from last month',
        icon: CreditCard,
    },
    {
        label: 'Active Now',
        value: '+573',
        delta: '+201 since last hour',
        icon: Activity,
    },
];