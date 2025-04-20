import React, { forwardRef } from 'react';

type CardProps = React.HTMLAttributes<HTMLDivElement> & {
    children: React.ReactNode;
    className?: string;
};

export const Card = forwardRef<HTMLDivElement, CardProps>(({ children, className, ...props }, ref) => (
    <div
        ref={ref}
        className={`rounded p-4 shadow ring ${className}`}
        {...props}
    >
        {children}
    </div>
));
