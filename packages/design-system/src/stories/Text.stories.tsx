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
  },
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

export const H1: Story = {
  args: {
    variant: 'h1',
    children: 'Type Something'
  }
};

export const H2: Story = {
  args: {
    variant: 'h2',
    children: 'Type Something'
  }
};

export const H3: Story = {
  args: {
    variant: 'h3',
    children: 'Type Something'
  }
};

export const H4: Story = {
  args: {
    variant: 'h4',
    children: 'Type Something'
  }
};

export const H5: Story = {
  args: {
    variant: 'h5',
    children: 'Type Something'
  }
};

export const H6: Story = {
  args: {
    variant: 'h6',
    children: 'Type Something'
  }
};

export const Body1: Story = {
  args: {
    variant: 'body1',
    children: 'Type Something'
  }
};

export const Body2: Story = {
  args: {
    variant: 'body2',
    children: 'Type Something'
  }
};

export const Subtitle1: Story = {
  args: {
    variant: 'subtitle1',
    children: 'Type Something'
  }
};

export const Subtitle2: Story = {
  args: {
    variant: 'subtitle2',
    children: 'Type Something'
  }
};
