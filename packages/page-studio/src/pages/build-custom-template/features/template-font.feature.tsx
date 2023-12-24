import { Box, FontCard } from '@my-page/design-system';
import { useCustomTemplateState } from '../hooks';

const fontList = [
  'monospace',
  'cursive',
  'fantasy',
  'sans-serif',
  'circular',
  'serif',
];

export const TemplateFonts = () => {

  const { fonts } = useCustomTemplateState();

  const [selectedFont, setSelectedFont] = fonts

  const handleFontClick = (font: string) => {
    setSelectedFont(font);
  }
  
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
        fontList.map((item) => (
          <Box onClick={() => handleFontClick(item)}>
            <FontCard
              key={item}
              fontName={item}
              fontFamily={item}
              isActive={item === selectedFont}
            />
          </Box>
        ))
      }
    </Box>
  )
}