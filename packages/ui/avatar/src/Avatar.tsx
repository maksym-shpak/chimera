import { cn } from '@chimera/lib.utils'
import * as React from 'react'

type AvatarProps = {
    src: string
    alt?: string
} & React.HTMLAttributes<HTMLDivElement>


export const Avatar = ({ src, alt = '', className, ...props }: AvatarProps) => {
    return (
        <div className={cn('w-10 h-10 rounded-full overflow-hidden bg-gray-100', className)} {...props}>
            <img src={src} alt={alt} className="w-full h-full object-cover" />
        </div>
    )
}
