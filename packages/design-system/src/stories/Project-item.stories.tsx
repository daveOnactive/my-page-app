import type { Meta, StoryObj } from '@storybook/react';

import { ProjectItem } from '../components';

const meta = {
  title: 'Components/ProjectItem',
  component: ProjectItem,
  parameters: {
    layout: 'left',
  },
  tags: ['autodocs'],
  argTypes: {

  },
} satisfies Meta<typeof ProjectItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    projectName: 'Testing project',
    projectUrl: 'testing-app.mypage.com'
  }
};
