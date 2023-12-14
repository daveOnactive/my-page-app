import { ColorPalette, Box, Text } from '@my-page/design-system';
import { useState } from 'react';
import { useRecoilState } from 'recoil';
import { templateColors } from '../../../store';

const colors = {
  light: [
    {
      a: 'red',
      b: 'blue',
      c: 'green',
      d: 'yellow',
    },
    {
      a: 'blue',
      b: 'red',
      c: 'yellow',
      d: 'green',
    },
    {
      a: 'yellow',
      b: 'green',
      c: 'blue',
      d: 'red',
    }
  ],
  dark: [
    {
      a: 'black',
      b: 'brown',
      c: 'grey',
      d: 'darkgray',
    },
    {
      a: 'black',
      b: 'brown',
      c: 'grey',
      d: 'darkgray',
    },
    {
      a: 'black',
      b: 'brown',
      c: 'grey',
      d: 'darkgray',
    }
  ],
  natural: [
    {
      a: 'orange',
      b: 'purple',
      c: 'lightgreen',
      d: 'skyblue',
    },
    {
      a: 'orange',
      b: 'purple',
      c: 'lightgreen',
      d: 'skyblue',
    },
    {
      a: 'orange',
      b: 'purple',
      c: 'lightgreen',
      d: 'skyblue',
    }
  ]
};

export const TemplateColor = () => {
  const [isActive, setIsActive] = useState<string>('');

  const [_, setColorsStore] = useRecoilState(templateColors);

  const handleColorPaletteClick = (colors: any, category: string, index: number) => {
    setIsActive(`${category}-${index}`);
    setColorsStore(colors);
  };

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
          colors.light.map((item, index) => (
            <Box key={index} py={2}>
              <ColorPalette
                isActive={isActive === `light-${index}`}
                palette={item}
                handleClick={(colors) => handleColorPaletteClick(colors, 'light', index)}
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
          colors.dark.map((item, index) => (
            <Box key={index} py={2}>
              <ColorPalette
                palette={item}
                isActive={isActive === `dark-${index}`}
                handleClick={(colors) => handleColorPaletteClick(colors, 'dark', index)}
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
          colors.natural.map((item, index) => (
            <Box key={index} py={2}>
              <ColorPalette
                palette={item}
                isActive={isActive === `natural-${index}`}
                handleClick={(colors) => handleColorPaletteClick(colors, 'natural', index)}
              />
            </Box>
          ))
        }
      </Box>
    </Box>
  )
}