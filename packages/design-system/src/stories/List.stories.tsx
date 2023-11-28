import type { Meta, StoryObj } from '@storybook/react';

import { List } from '../components';
import { Box } from '@mui/material';

const meta = {
  title: 'Components/List',
  component: List,
  parameters: {
    layout: 'center',
  },
  tags: ['autodocs'],
  argTypes: {

  },
} satisfies Meta<typeof List>;

export default meta;
type Story = StoryObj<typeof meta>;


export const Default: Story = {
  args: {
    listItem: [
      <Box>Testing_1</Box>,
      <Box>Testing_2</Box>,
      <Box>Testing_3</Box>,
      <Box>Testing_4</Box>
    ]
  },
};
