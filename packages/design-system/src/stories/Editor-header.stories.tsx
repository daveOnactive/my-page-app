import type { Meta, StoryObj } from '@storybook/react';

import { EditorHeader } from '../components';

const meta = {
  title: 'Components/EditorHeader',
  component: EditorHeader,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    devices: {
      options: ['phone', 'tablet', 'laptop'],
      control: { type: 'radio'}
    }
  },
} satisfies Meta<typeof EditorHeader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    isFullscreen: false,
    devices: 'phone'
  },
};


