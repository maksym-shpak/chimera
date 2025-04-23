import React from 'react';
import { cn } from '@chimera/lib.utils';
import { Avatar } from '@chimera/ui.avatar';

export type SalesRowProps = {
    name: string;
    email: string;
    amount: string;
    avatarSrc?: string;
    className?: string;
};

export const SalesRow = ({ name, email, amount, avatarSrc, className }: SalesRowProps) => {
    return (
        <div className={cn('flex items-center justify-between py-2', className)}>
            <div className="flex items-center gap-4">
                <Avatar src={avatarSrc || ''} alt={name} />
                <div className="text-sm">
                    <p className="font-medium leading-none">{name}</p>
                    <p className="text-muted-foreground text-xs">{email}</p>
                </div>
            </div>
            <div className="text-sm font-medium">{amount}</div>
        </div>
    );
};
