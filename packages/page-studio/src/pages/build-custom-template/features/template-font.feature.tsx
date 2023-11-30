import { Box, FontCard } from '@my-page/design-system';

const fonts = [
  'monospace',
  'cursive',
  'fantasy',
  'sans-serif',
  'circular',
  'serif',
];

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
        fonts.map((item, index) => (
          <FontCard
            key={item}
            fontName={item}
            fontFamily={item}
            isActive={index === 0}
          />
        ))
      }
    </Box>
  )
}