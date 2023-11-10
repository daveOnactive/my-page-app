import type { Meta, StoryObj } from '@storybook/react';

import { Link } from '../components';

const meta = {
  title: 'Components/Link',
  component: Link,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    active: {
      options: [true, false],
      controls: { type: 'radio' }
    }
  },
} satisfies Meta<typeof Link>;

export default meta;
type Story = StoryObj<typeof meta>;

export const InactiveLink: Story = {
  args: {
    children: 'Click me',
    href: '#'
  },
};


export const ActiveLink: Story = {
  args: {
    children: 'Click me',
    href: '#',
    active: true
  },
};
