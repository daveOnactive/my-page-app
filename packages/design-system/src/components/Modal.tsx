import * as React from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import Icon from '@mui/material/Icon';
import { AppLogo } from '.'
import Box from '@mui/material/Box';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';


const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement;
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

export type IProps = {
  fullScreen?: boolean
  open?: boolean;
  handleClose: () => void;
  title?: string;
  content?: React.ReactNode;
  withLogo?: boolean;
  actionButton?: {
    close?: {
      text: string;
      onClick: () => void;
    },
    save?: {
      text: string;
      onClick: () => void;
    }
  }
}

export function Modal(props: IProps) {
  
  const {
    fullScreen,
    open,
    handleClose,
    title,
    content,
    withLogo,
    actionButton
  } = props;

  return (
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open || false}
        fullScreen={fullScreen}
        TransitionComponent={Transition}
      >
        {
          withLogo ? (
            <Box sx={{ m: 0, pt: 2, pl: 2 }}>
              <AppLogo />
            </Box>
          ) : (
            <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
              {title}
            </DialogTitle>
          )
        }
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <Icon>close</Icon>
        </IconButton>
        <DialogContent dividers>
          {content}
        </DialogContent>

        {
          actionButton ? (
            <DialogActions>
              {
                actionButton.close ? (
                  <Button color='secondary' onClick={actionButton.close.onClick}>
                    {actionButton.close.text}
                  </Button> 
                ) : null
              }

              {
                actionButton.save ? (
                  <Button variant='contained' color='secondary' autoFocus onClick={actionButton.save.onClick}>
                    {actionButton.save.text}
                  </Button> 
                ) : null
              }
            </DialogActions>
          ) : null
        }
        
      </BootstrapDialog>
  );
}
