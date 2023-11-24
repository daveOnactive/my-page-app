import { Box, ProjectItem } from '@my-page/design-system';
import { Header } from './features';


const projectItem = [
  {
    name: 'Busy Shop',
    url: 'busyshop.swiftpage.com',
  },
  {
    name: 'Beauty Shop',
    url: 'beautyshop.swiftpage.com',
  },
  {
    name: 'Maximum Biz',
    url: 'maximumsbiz.swiftpage.com',
  }
]

export const Dashboard = () => {
  return (
    <Box width='100%'>
      <Header
        projectCount={projectItem.length}
      />
      <Box>
        {
          projectItem.map((item) => (
            <Box my={4}>
              <ProjectItem
                projectName={item.name}
                projectUrl={item.url}
                goToProject={() => null}
                key={item.name}
              />
            </Box>
          ))
        }
      </Box>
    </Box>
  )
}