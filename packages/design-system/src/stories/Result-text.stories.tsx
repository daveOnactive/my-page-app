import type { Meta, StoryObj } from '@storybook/react';

import { ResultText } from '../components';

const meta = {
  title: 'Components/ResultText',
  component: ResultText,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
  },
} satisfies Meta<typeof ResultText>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    result: 26
  },
};

