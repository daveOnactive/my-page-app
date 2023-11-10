import type { Meta, StoryObj } from '@storybook/react';

import { Input } from '../components';

const meta = {
  title: 'Components/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      options: ['outlined', 'filled', 'standard'],
      control: { type: 'radio' },
    },
    color: {
      options: ['secondary', 'primary',],
      control: { type: 'radio' },
    },
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultInput: Story = {
  args: {
    value: 'Text',
    label: 'text',
    placeholder: 'texting'
  },
};


