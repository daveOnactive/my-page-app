import { useContext, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { WithModal } from "../../hoc/with-modal.hoc"
import { AppModalContext } from "../../providers/app-modal.provider";
import { SetupCustomTemplate } from "./features";

export const BuildCustomTemplate = WithModal(() => {
  const modalContext = useContext(AppModalContext);
  const navigate = useNavigate();

  const openSetupModal = () => {
    modalContext.handleOpen({
      withLogo: true,
      fullScreen: true,
      goBack: () => {
        navigate('/templates');
        modalContext.handleClose()
      },
      content: (
        <SetupCustomTemplate />
      )
    });
  }

  useEffect(() => {
    openSetupModal();
  }, []);
  
  return (
    <>Build Custom Template</>
  )
})