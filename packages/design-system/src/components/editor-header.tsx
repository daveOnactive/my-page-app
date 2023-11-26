import Box from "@mui/material/Box";
import { Button } from ".";
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import Icon from '@mui/material/Icon';
import Card from "@mui/material/Card";
import IconButton from "@mui/material/IconButton";

type IProps = {
  handlePublish?: () => void;
  handleFullScreen?: () => void;
  handleToggle?: (devices: string) => void;
  devices?: string;
  isFullscreen?: boolean;
}

export const EditorHeader = (props: IProps) => {

    const handleDevices = (
    _event: React.MouseEvent<HTMLElement>,
    newDevices: string,
  ) => {
    if (newDevices && props?.handleToggle) {
      props.handleToggle(newDevices);
    }
  };


  return (
    <Box variant="outlined" component={Card} sx={{
      display: 'flex',
      justifyContent: 'space-between',
      padding: 2,
    }}>
      <IconButton title="fullscreen">
        {
          props?.isFullscreen ? (
            <Icon>
              fullscreen_exit
            </Icon>
          ) : (
            <Icon>
              fullscreen
            </Icon>
          )
        }
        
      </IconButton>

      <ToggleButtonGroup
        value={props.devices}
        onChange={handleDevices}
        sx={{background: '#fff'}}>
        <ToggleButton value="laptop" aria-label="laptop">
          <Icon>laptop</Icon>
        </ToggleButton>
        <ToggleButton value="phone" aria-label="phone">
          <Icon>phone_android</Icon>
        </ToggleButton>
        <ToggleButton value="tablet" aria-label="tablet">
          <Icon>tablet_mac</Icon>
        </ToggleButton>
      </ToggleButtonGroup>

      <Button variant="contained" color="secondary" onClick={props.handlePublish}>Publish</Button>
    </Box>
  )
}