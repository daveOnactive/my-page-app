import type { Meta, StoryObj } from '@storybook/react';

import { ColorPalette } from '../components';

const meta = {
  title: 'Components/ColorPalette',
  component: ColorPalette,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {

  },
} satisfies Meta<typeof ColorPalette>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    palette: {
      a: '#f50057',
      b: '#9e9d24',
      c: '#f44336',
      d: '#9c27b0',
    }
  },
};

export const ActiveColorPalette: Story = {
  args: {
    palette: {
      a: '#f50057',
      b: '#9e9d24',
      c: '#f44336',
      d: '#9c27b0',
    },
    isActive: true
  },
};


