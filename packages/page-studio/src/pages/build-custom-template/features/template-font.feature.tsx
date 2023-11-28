import { Paper, Box, Text } from '@my-page/design-system';

export const TemplateFonts = () => {
  return (
    <Box 
      m={2}
      sx={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr',
        gap: 4
      }}
    >
      {
        [1,2,3,4,5,6].map((item) => (
          <Paper 
            key={item} 
            sx={{
              width: 150,
              height: 150,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center'
            }}
            variant='outlined'
          >
            <Text variant='body1' fontWeight={500}>Font {item}</Text>
          </Paper>
        ))
      }
    </Box>
  )
}