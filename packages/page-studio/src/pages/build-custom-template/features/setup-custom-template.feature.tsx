import { Box, Text } from "@my-page/design-system"
import { CreateCustomTemplateStepper, PreviewTemplate } from "."

export const SetupCustomTemplate = () => {
  return (
    <Box height='100%'>
      <Text variant="h6" mb={4} textAlign='center'>
        Create a unique template for the business you represent
      </Text>
      <Box sx={{
        display: 'grid',
        gridTemplateColumns: '2fr 3fr',
        height: '100%',
        overflowX: 'hidden'
      }}>
        <PreviewTemplate />
        <Box>
          <CreateCustomTemplateStepper />
        </Box>
      </Box>
    </Box>
  )
}