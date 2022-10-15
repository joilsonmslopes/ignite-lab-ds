import { Meta, StoryObj } from '@storybook/react'
import { TextInput, TextInputRootProps } from '.'
import { Envelope } from "phosphor-react"

export default {
    title: 'Components/TextInput',
    component: TextInput.Root,
    args: {
        children: (
            <>
                <TextInput.Icon>
                    <Envelope />
                </TextInput.Icon>
                <TextInput.Input placeholder="Type your e-mail here" />
            </>
        ),
    },
    argTypes: {
        children: {
            table: {
                disable: true
            }
        },
    }
} as Meta<TextInputRootProps>

const defaultTextInputCode = `
<TextInput.Root>
    <TextInput.Icon>
      <Envelope />
    </TextInput.Icon>
    <TextInput.Input placeholder="Type your e-mail here" />
</TextInput.Root>
`

export const DefaultTextInput: StoryObj<TextInputRootProps> = {
    parameters: {
        docs: {
            source: {
                code: defaultTextInputCode,
                language: 'javascript',
                type: 'auto'
            }
        }
    },
}

export const TextInputWithIcon: StoryObj<TextInputRootProps> = {
    args: {
        children: (
            <TextInput.Input placeholder="Type your e-mail here" />
        )
    }
}