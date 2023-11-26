import Box from "@mui/material/Box";
import { AppLogo, Avatar, Link } from ".";
import { PropsWithChildren, FC } from 'react';

export const EditorSidebar:FC<PropsWithChildren> = ({ children }) => {
  return (
    <Box sx={{
      minHeight: '400px',
      height: '400px',
      display: 'flex',
    }}>
      <Box width='20%'>
        <AppLogo />

        <Box sx={{
          display: 'flex',
          flexDirection: 'column',
          height: '100%',
          justifyContent: 'space-evenly',
        }}>
          <Link href='#'>
            Pages
          </Link>

          <Link href='#'>
            Asset Library
          </Link>

          <Link href='#'>
            Settings
          </Link>

          <Link href='#'>
            Help
          </Link>
        </Box>
        
        <Avatar src='src/assets/avatar.png' alt='David'/>
      </Box>

      <Box mt={5} width='100%'>{children}</Box>
    </Box>
  );
};
