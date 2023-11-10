import type { Meta, StoryObj } from '@storybook/react';

import { EditorSidebar } from '../components';

const meta = {
  title: 'Components/EditorSidebar',
  component: EditorSidebar,
  parameters: {
    layout: 'left',
  },
  tags: ['autodocs'],
  argTypes: {
  },
} satisfies Meta<typeof EditorSidebar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {

  },
};


