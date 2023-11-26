import { EditorHeader, EditorSidebar, Box, Paper } from '@my-page/design-system';
import { useContext, useEffect } from 'react';
import { AppNavigationContext } from '../../providers';

export const Studio = () => {

  const { handleHideNav, handleShowNav } = useContext(AppNavigationContext);

  useEffect(() => {
    handleHideNav();

    return () => {
      handleShowNav();
    }
  }, [])

  
  return (
    <Box>
      <EditorSidebar>
        <Paper sx={{
          height: '100vh',
          bgcolor: '#fff'
        }}
        elevation={2}
        >
          <EditorHeader />
        </Paper>
      </EditorSidebar>
    </Box>
  )
}