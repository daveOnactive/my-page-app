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
    
  },
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SmallAvatar: Story = {
  args: {
    src: 'src/assets/avatar.png',
    alt: 'David',
    size: 'small'
  }
};

export const MediumAvatar: Story = {
  args: {
    src: 'src/assets/avatar.png',
    alt: 'David',
    size: 'medium'
  }
};

export const LargeAvatar: Story = {
  args: {
    src: 'src/assets/avatar.png',
    alt: 'David',
    size: 'large'
  }
};
