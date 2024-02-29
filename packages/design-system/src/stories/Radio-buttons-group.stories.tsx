import type { Meta, StoryObj } from '@storybook/react';

import { RadioButtonsGroup } from '../components';

const radioGroup = [
  {
    value: 'portfolio',
    label: 'Portfolio'
  },
  {
    value: 'landing_page',
    label: 'Landing Page'
  },
  {
    value: 'agency',
    label: 'Agency / Business'
  },
  {
    value: 'count_down',
    label: 'Count Down / Coming Soon'
  }
];

const meta = {
  title: 'Components/RadioButtonsGroup',
  component: RadioButtonsGroup,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
  },
} satisfies Meta<typeof RadioButtonsGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    radioGroup
  },
};

