import { Box, FontCard } from '@my-page/design-system';
import { useRecoilState } from 'recoil';
import { templateFonts } from '../../../store';

const fonts = [
  'monospace',
  'cursive',
  'fantasy',
  'sans-serif',
  'circular',
  'serif',
];

export const TemplateFonts = () => {
  const [selectedFont, setSelectedFont] = useRecoilState(templateFonts);

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
        fonts.map((item) => (
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