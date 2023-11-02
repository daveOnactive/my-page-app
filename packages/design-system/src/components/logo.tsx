import Box from '@mui/material/Box';

export const AppLogo = () => {
  return (
    <Box
      component='img'
      src='src/assets/logo.png'
      sx={{
        width: {
          xs: '30px',
          md: '40px'
        }
      }}
    />
  )
}