import Box from "@mui/material/Box";
import { AppLogo, Avatar, Link } from ".";

export const EditorSidebar = () => {
  return (
    <Box sx={{
      minHeight: '400px',
      height: '400px'
    }}>
      <AppLogo />

      <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        justifyContent: 'space-evenly'
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
  );
};
