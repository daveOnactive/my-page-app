import type { Meta, StoryObj } from '@storybook/react';
import Icon from '@mui/material/Icon';

import { Button } from '../components/button';

const meta = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Contained: Story = {
  args: {
    children: 'Button',
    variant: 'contained',
    size: 'medium',
    color: 'secondary'
  },
};

export const Outlined: Story = {
  args: {
    children: 'Button',
    variant: 'outlined',
    size: 'medium',
    color: 'primary'
  },
};

export const Text: Story = {
  args: {
    children: 'Button',
    variant:'text',
    size: 'medium',
    color: 'secondary'
  },
};

export const WithIcon: Story = {
  args: {
    children: 'Button',
    variant:'text',
    size: 'medium',
    color: 'secondary',
    endIcon: (
      <Icon>arrow_forward</Icon>
    )
  },
};
