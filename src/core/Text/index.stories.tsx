import { Meta, StoryObj } from '@storybook/react'
import { Text, TextProps } from '.'

export default {
    title: 'Components/Text',
    component: Text,
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

export const TextMedium: StoryObj<TextProps> = {
    args: {
        children: 'Medium Text'
    }
}

export const TextSmall: StoryObj<TextProps> = {
    args: {
        size: 'sm',
        children: 'Small Text'
    }
}

export const TextLarge: StoryObj<TextProps> = {
    args: {
        size: 'lg',
        children: 'Large Text'
    }
}

const textCustomCode = `
import { Text } from '/path'

<Text
  asChild
  size="md"
>
  <p>
    Text with custom tag
  </p>
</Text>
`

export const TextCustom: StoryObj<TextProps> = {
    args: {
        asChild: true,
        children: (
            <p>Text with custom tag</p>
        )
    },
    parameters: {
        docs: {
            source: {
                code: textCustomCode,
                language: 'javascript',
                type: 'auto'
            }
        }
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