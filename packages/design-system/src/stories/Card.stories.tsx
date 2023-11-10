import type { Meta, StoryObj } from '@storybook/react';
import Icon from '@mui/material/Icon';

import { Card } from '../components/';

const meta = {
  title: 'Components/Card',
  component: Card,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      options: ['outlined', 'elevation'],
      control: { type: 'radio'}
    },
    align: {
      options: ['left', 'center', 'right'],
      control: { type: 'radio'}
    }
  },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultCard: Story = {
  args: {
    variant: 'outlined',
    title: 'title',
    body: 'well meaning and kindly a benevolent smile',
    align: 'left',
  }
};

export const CardWithIcon: Story = {
  args: {
    variant: 'outlined',
    title: 'title',
    body: 'well meaning and kindly a benevolent smile',
    align: 'center',
    icon: (<Icon>grid_view</Icon>),
  }
};

export const CardWithButton: Story = {
  args: {
    variant: 'outlined',
    title: 'title',
    body: 'well meaning and kindly a benevolent smile',
    align: 'left',
    buttonText: 'Click Here'
  }
};
