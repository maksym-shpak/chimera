import React from 'react';
import { StatCard } from '@chimera/ui.stat-card';
import { useStatsOverview, type Stat } from '@chimera/data.use-stats-overview';
import type { FC } from 'react';

export const StatOverview: FC = () => {
    const stats: Stat[] = useStatsOverview();

    return (
        <>
            {stats.map((stat) => {
                return (
                    <StatCard
                        key={stat.label}
                        label={stat.label}
                        value={stat.value}
                        delta={stat.delta}
                        icon={stat.icon}
                    />
                );
            })}
        </>
    );
};
