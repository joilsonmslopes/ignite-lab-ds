import { clsx } from 'clsx'
import { ReactNode } from 'react'
import { Slot } from '@radix-ui/react-slot'

export interface ButtonProps {
    children: ReactNode
    asChild?: boolean
}

export function Button({ children, asChild: isChild }: ButtonProps) {
    const DefaultTag = isChild ? Slot : 'button'

    return (
        <DefaultTag className={clsx(
            'py-4 px-3 bg-cyan-500 rounded font-semibold text-black text-sm w-full hover:bg-cyan-400 transition-colors focus:ring ring-2 ring-white',
        )}>{ children }</DefaultTag>
    )
}