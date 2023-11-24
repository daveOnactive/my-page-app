import { Text, SearchInput, Button, Box, Icon } from '@my-page/design-system';
import { useContext } from 'react';
import { AppModalContext } from '../../../providers/app-modal.provider';
import { CreateProjectModal } from '.';

type IProps = {
  projectCount: number;
}

export const Header = ({ projectCount }: IProps) => {

  const modalContext = useContext(AppModalContext);

  const handleCreateProject = () => {
    modalContext.handleOpen({
      withLogo: true,
      fullScreen: true,
      content: (
        <CreateProjectModal />
      )
    });
  }

  return (
    <>
      <Box sx={{
        display: 'flex',
        justifyContent: 'space-between'
      }}>
        <Text variant='h5'>
          Dashboard
        </Text>

        <SearchInput
          size='medium'
        />
      </Box>

      <Box sx={{
        display: 'flex',
        justifyContent: 'space-between',
        my: 6
      }}>
        <Text>
          <b>Projects:</b> {projectCount}
        </Text>

        <Button
          color='secondary' 
          variant='contained'
          onClick={handleCreateProject}
          startIcon={
            (
              <Icon>add</Icon>
            )
          }
        >
          Create Project
        </Button>
      </Box>
    </>
  )
}