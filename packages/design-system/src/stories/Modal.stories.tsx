import type { Meta, StoryObj } from '@storybook/react';

import { Modal, Button } from '../components';
import { useState } from 'react';
import { IProps } from '../components/Modal';



const ModalStorybook = (props: IProps) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button variant='contained' color='secondary' onClick={() => setOpen(true)}>Open</Button>
      <Modal
        {...props}
        open={open}
        title='Modal Title'
        handleClose={() => setOpen(false)}
      />
    </>
  )
}

const meta = {
  title: 'Components/Modal',
  component: ModalStorybook,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
 
  },
} satisfies Meta<typeof ModalStorybook>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    content: 'Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.vPraesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.',
    title: 'Modal Title',
    open: false,
    fullScreen: false,
    withLogo: true,
    actionButton: {
      save: {
        text: 'Save',
        onClick: () => null,
      }
    }
  },
};

export const WithActionButtons: Story = {
  args: {
    content: 'Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.vPraesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.',
    title: 'Modal Title',
    open: false,
    fullScreen: false,
    withLogo: true,
    actionButton: {
      save: {
        text: 'Save',
        onClick: () => null,
      },
      close: {
        text: 'close',
        onClick: () => null,
      }
    }
  },
};

