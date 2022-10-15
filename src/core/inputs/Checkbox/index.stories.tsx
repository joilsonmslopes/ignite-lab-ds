import { Meta, StoryObj } from '@storybook/react'
import { Checkbox, CheckboxProps } from '.'
import { Text } from '../../Text'

export default {
    title: 'Components/Checkbox',
    component: Checkbox,
    args: {
        children: 'Button Component',
    },
    argTypes: {},
    decorators: [
        (Story) => {
            return (
                <label className="flex items-center gap-2">
                    {Story()}
                    <Text size="sm">Lembrar de mim por 30 dias</Text>
                </label>
            )
        }
    ]
} as Meta<CheckboxProps>

const DefaultCheckboxCode = `

`

export const DefaultCheckbox: StoryObj<CheckboxProps> = {}