import type { Meta, StoryObj } from '@storybook/react';

import { Avatar } from '../components/';

const meta = {
  title: 'Components/Avatar',
  component: Avatar,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      options: ['large', 'medium', 'small',],
      control: { type: 'radio'}
    }
  },
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultAvatar: Story = {
  args: {
    src: 'src/assets/avatar.png',
    alt: 'David',
    size: 'medium'
  }
};
