import type { Meta, StoryObj } from '@storybook/react';
import IconButton from '@mui/material/IconButton';
import Icon from '@mui/material/Icon';

import { Menu } from '../components/';

const meta = {
  title: 'Components/Menu',
  component: Menu,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {

  },
} satisfies Meta<typeof Menu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ActionMenu: Story = {
  args: {
    options: ['save', 'edit', 'delete'],
    component: (
      <IconButton
      >
        <Icon>more_vert</Icon>
      </IconButton>
    )
  }
};
