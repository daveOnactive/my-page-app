import { Box, Input } from "@my-page/design-system"

export const TemplateTitle = () => {
  return (
    <Box py={4} px={2}>
      <Input
        variant="outlined"
        placeholder='Enter your business name'
        size="small"
        color='secondary'
        sx={{
          width: '70%'
        }}
      />
    </Box>
  )
}