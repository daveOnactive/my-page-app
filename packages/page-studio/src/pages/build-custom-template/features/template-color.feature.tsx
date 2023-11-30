import { ColorPalette, Box, Text } from '@my-page/design-system';

export const TemplateColor = () => {
  return (
    <Box sx={{
      m: 4
    }}>
      <Text variant='subtitle1' fontWeight={500}>Light Colors</Text>
      <Box sx={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        my: 2
      }}>
        {
          [1,2,3].map((index) => (
            <Box key={index} py={2}>
              <ColorPalette
                isActive={index === 2}
                palette={{
                  a: 'red',
                  b: 'blue',
                  c: 'green',
                  d: 'yellow',
                }}
              />
            </Box>
          ))
        }
      </Box>
      <Text variant='subtitle1' fontWeight={500}>Dark Colors</Text>

      <Box sx={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        my: 2
      }}>
        {
          [1,2,3].map((index) => (
            <Box key={index} py={2}>
              <ColorPalette
                palette={{
                  a: 'black',
                  b: 'brown',
                  c: 'grey',
                  d: 'darkgray',
                }}
              />
            </Box>
          ))
        }
      </Box>

      <Text variant='subtitle1' fontWeight={500}>Natural Colors</Text>

      <Box sx={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        my: 2
      }}>
        {
          [1,2,3].map((index) => (
            <Box key={index} py={2}>
              <ColorPalette
                palette={{
                  a: 'orange',
                  b: 'purple',
                  c: 'lightgreen',
                  d: 'skyblue',
                }}
              />
            </Box>
          ))
        }
      </Box>
    </Box>
  )
}