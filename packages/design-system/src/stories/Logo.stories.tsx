import type { Meta, StoryObj } from '@storybook/react';

import { AppLogo } from '../components';

const meta = {
  title: 'Components/AppLogo',
  component: AppLogo,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    
  },
} satisfies Meta<typeof AppLogo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Logo: Story = {
};