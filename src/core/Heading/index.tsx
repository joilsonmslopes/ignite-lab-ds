import { clsx } from 'clsx'
import { ReactNode } from 'react'
import { Slot } from '@radix-ui/react-slot'

export interface HeadingProps {
    size?: 'sm' | 'md' | 'lg'
    children: ReactNode
    asChild?: boolean
}

export function Heading({ size = 'md', children, asChild: isChild }: HeadingProps) {
    const DefaultTag = isChild ? Slot : 'h2'

    return (
        <DefaultTag className={clsx(
            'text-gray-900 font-bold font-sans',
            {
                'text-lg': size === 'sm',
                'text-xl': size === 'md',
                'text-2xl': size === 'lg',
            }
        )}>{ children }</DefaultTag>
    )
}