import { Text, Button, Box, Card, Icon } from '@my-page/design-system';

export const CreateProjectModal = () => (
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
        <Card
          align='center'
          title='Website'
          icon={
            (
              <Icon fontSize='large'>
                language
              </Icon>
            )
          }
          variant='outlined'
          body='Build person website'
        />
        <Card
          align='center'
          title='E-commerce'
          icon={
            (
              <Icon fontSize='large'>
                storefront
              </Icon>
            )
          }
          variant='outlined'
          body='Build business E-commerce'
        />
        <Card
          align='center'
          title='Web Application'
          icon={
            (
              <Icon fontSize='large'>
                computer
              </Icon>
            )
          }
          variant='outlined'
          body='Build custom web application'
        />
      </Box>
      
      <Box display='flex' justifyContent='center'>
        <Button sx={{ my: 4 }} color='secondary' variant='contained' endIcon={(
          <Icon fontSize='medium'>
            trending_flat
          </Icon>
        )}>
          Explore Templates
        </Button>
      </Box>
    </Box>
    
  </Box>
)