import { Box, Text, Checkbox, Link } from "@my-page/design-system";

export const ExploreTemplates = () => {
  return (
    <Box display='flex' mt={6}>
      <Box>
        <Text variant="h6" fontWeight={500} mb={2}>
          Types
        </Text>

        <Box display='flex' flexDirection='column'>
          <Checkbox label="Website" color='secondary' />
          <Checkbox label="E-commerce" color='secondary' />
          <Checkbox label="Web Application" color='secondary' />
        </Box>
      </Box>
      
      <Box ml={20}>
        <Text variant="h6" fontWeight={500} mb={2}>
          Topics
        </Text>

        <Box sx={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr 1fr',
          gridGap: 28
        }}>
          <Link href="#" active>Landing Page</Link>
          <Link href="#">Store</Link>
          <Link href="#">Portfolio</Link>
          <Link href="#">Blog</Link>
          <Link href="#">E-learning</Link>
          <Link href="#">Health</Link>
          <Link href="#">Record</Link>
          <Link href="#">Dashboard</Link>
          <Link href="#">Time Management</Link>
        </Box>
      </Box>
    </Box>
  )
}