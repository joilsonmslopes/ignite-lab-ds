import { Meta, StoryObj } from '@storybook/react'
import { Text, TextProps } from '.'

export default {
    title: 'Components/Text',
    component: Text,
    args: {
        children: 'Lorem ipsum!',
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
} as Meta<TextProps>

export const Default: StoryObj<TextProps> = {}

export const TextSmall: StoryObj<TextProps> = {
    args: {
        size: 'sm'
    }
}

export const TextLarge: StoryObj<TextProps> = {
    args: {
        size: 'lg'
    }
}

export const TextCustom: StoryObj<TextProps> = {
    args: {
        asChild: true,
        children: (
            <p>Text with custom tag</p>
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