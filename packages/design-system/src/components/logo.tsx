import Box from '@mui/material/Box';
import logo from './assets/logo.png';

export const AppLogo = () => {
  return (
    <Box
      component='img'
      src={logo}
      sx={{
        width: {
          xs: '30px',
          md: '40px'
        }
      }}
    />
  )
}