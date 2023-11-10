import type { Meta, StoryObj } from '@storybook/react';

import { Text } from '../components';

const meta = {
  title: 'Components/Text',
  component: Text,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      options: [
        'h1',
        'h2',
        'h3',
        'h4',
        'h5',
        'h6',
        'body1',
        'body2',
        'subtitle1',
        'subtitle2'
      ],
      control: { type: 'radio' }
    }
  },
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Typography: Story = {
  args: {
    variant: 'h1',
    children: 'Type Something'
  }
};