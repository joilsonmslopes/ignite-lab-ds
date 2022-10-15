import { clsx } from 'clsx'
import { ReactNode } from 'react'
import { Slot } from '@radix-ui/react-slot'

export interface TextProps {
    size?: 'sm' | 'md' | 'lg'
    children: ReactNode
    asChild?: boolean
}

export function Text({ size = 'md', children, asChild: isChild }: TextProps) {
    const DefaultTag = isChild ? Slot : 'span'

    return (
        <DefaultTag className={clsx(
            'text-gray-900 font-sans',
            {
                'text-xs': size === 'sm',
                'text-sm': size === 'md',
                'text-md': size === 'lg',
            }
        )}>{ children }</DefaultTag>
    )
}