import { Text, Box, Card, Icon } from '@my-page/design-system';
import { useNavigate } from 'react-router-dom';


const returnProjects = () => {
  return [
    {
      title: 'Website',
      description: 'Build a personalized website that represent your company\'s value.',
      icon: 'language',
      href: '/build-custom-template',
    },
    {
      title: 'E-commerce',
      icon: 'storefront',
      description: 'Owning an e-commerce website made easy.',
      href: '#',
    },
    {
      title: 'E-Learning',
      icon: 'cast_for_education',
      description: 'Build an E-learning platform that servers your students',
      href: '#',
    },
    {
      title: 'Dashboard',
      icon: 'analytics',
      description: 'Build a customizable dashboard that provides detailed statistics and record keeping.',
      href: '#',
    },
    {
      title: 'Finance',
      icon: 'savings',
      description: 'Build a customized financial application',
      href: '#',
    },
  ]
}

export const CreateProjectModal = () => {
  const navigate = useNavigate();
  
  return (
    <Box>
      <Text variant='h5' sx={{ mt: 2, width: 600 }}>Create Project</Text>
      <Text variant='body1' sx={{ mt: 2, width: 600 }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labor exercitation?</Text>

      <Box display='flex' justifyContent='center' flexDirection='column'>
        <Box mt={6}
        sx={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr 1fr',
          gridGap: '16px'
        }}
        >
          {
            returnProjects().map((project) => {
              return (
                <Card
                  align='center'
                  title={project.title}
                  className="material-symbols-contained"
                  icon={
                    (
                      <Icon fontSize='large'>
                        {project.icon}
                      </Icon>
                    )
                  }
                  variant='outlined'
                  body={project.description}
                  sx={{cursor: 'pointer'}}
                  onClick={() => navigate(project.href)}
                />
              );
            })
          }

        </Box>
        
        {/* <Box display='flex' justifyContent='center'>
          <Button
            component={Link}
            sx={{ my: 4 }} 
            color='secondary'
            href='/templates'
            variant='contained' 
            endIcon={(
            <Icon fontSize='medium'>
              trending_flat
            </Icon>
          )}>
            Explore Templates
          </Button>
        </Box> */}
      </Box>
      
    </Box>
  )
}