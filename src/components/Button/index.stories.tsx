import { Meta, StoryObj } from '@storybook/react'
import { Button, ButtonProps } from '.'

export default {
    title: 'Components/Button',
    component: Button,
    args: {
        children: 'Button Component',
    },
    argTypes: {
    }
} as Meta<ButtonProps>

export const DefaultButton: StoryObj<ButtonProps> = {
    
}