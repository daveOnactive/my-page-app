import type { Meta, StoryObj } from '@storybook/react';

import { FontCard } from '../components/';

const meta = {
  title: 'Components/FontCard',
  component: FontCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
  },
} satisfies Meta<typeof FontCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultFontCard: Story = {
  args: {
    fontName: 'testing',
    fontFamily: 'cursive'
  }
};

export const ActiveFontCard: Story = {
  args: {
    fontName: 'testing',
    isActive: true,
    fontFamily: 'fantasy'
  }
};
