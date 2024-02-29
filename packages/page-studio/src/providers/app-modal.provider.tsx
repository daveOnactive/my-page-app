import { Modal } from '@my-page/design-system';
import { createContext, useState, PropsWithChildren } from 'react';

type ModalState = {
  fullScreen?: boolean
  title?: string;
  content?: React.ReactNode;
  withLogo?: boolean;
  goBack?: () => void;
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

export const AppModalContext = createContext({
  handleClose: () => null,
  handleOpen: (props: ModalState) => props,
});

export const AppModalProvider = (props: PropsWithChildren) => {
  const [modalState, setModalState] = useState<ModalState>();
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <AppModalContext.Provider
      value={{
        handleClose: handleClose as any,
        handleOpen: ((props: ModalState) => {
          setModalState(props);
          setOpen(true);
        }) as any
      }}
    >
      {props.children}
      <Modal
        title={modalState?.title}
        content={modalState?.content}
        fullScreen={modalState?.fullScreen}
        open={open}
        handleClose={modalState?.goBack || handleClose}
        actionButton={modalState?.actionButton}
        withLogo={modalState?.withLogo}
      />
    </AppModalContext.Provider>
  );
};