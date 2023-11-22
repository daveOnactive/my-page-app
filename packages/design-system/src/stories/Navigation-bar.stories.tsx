import type { Meta, StoryObj } from '@storybook/react';

import { NavigationBar } from '../components';

const meta = {
  title: 'Components/NavigationBar',
  component: NavigationBar,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    
  },
} satisfies Meta<typeof NavigationBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LoggedInNavbar: Story = {
  args: {
    pages: [
    {
      name: 'Templates',
      link: '#'
    },
    {
      name: 'Resources',
      link: '#'
    }
  ],
    settings: [],
    isLoggedIn: true
  }
};

export const LoggedOutNavbar: Story = {
  args: {
    ...LoggedInNavbar.args,
    isLoggedIn: false
  }
};