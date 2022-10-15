import { clsx } from 'clsx'
import { ButtonHTMLAttributes, ReactNode } from 'react'
import { Slot } from '@radix-ui/react-slot'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode
    asChild?: boolean
}

export function Button({ children, asChild, ...props }: ButtonProps) {
    const DefaultTag = asChild ? Slot : 'button'

    return (
        <DefaultTag {...props} className={clsx(
            'py-3 px-4 bg-cyan-500 rounded font-semibold text-black text-sm w-full hover:bg-cyan-400 transition-colors focus:ring ring-2 ring-white',
        )}>{ children }</DefaultTag>
    )
}