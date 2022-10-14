import { Meta, StoryObj } from '@storybook/react'
import { Heading, HeadingProps } from '.'

export default {
    title: 'Components/Heading',
    component: Heading,
    args: {
        children: 'Heading Text',
    },
    argTypes: {
        size: {
            options: ['sm', 'md', 'lg'],
            defaultValue: 'md',
            control: {
                type: 'inline-radio'
            }
        }
    }
} as Meta<HeadingProps>

export const HeadingSmall: StoryObj<HeadingProps> = {
    args: {
        size: 'sm'
    }
}

export const Default: StoryObj<HeadingProps> = {}

export const HeadingLarge: StoryObj<HeadingProps> = {
    args: {
        size: 'lg'
    }
}

export const HeadingCustom: StoryObj<HeadingProps> = {
    args: {
        asChild: true,
        children: (
            <h1>Text with H1</h1>
        ),
    },
    argTypes: {
        children: {
            table: {
                disable: true
            }
        },
        asChild: {
            table: {
                disable: true
            }
        }   
    }
}