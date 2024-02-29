import { ColorPalette, Box, Text } from '@my-page/design-system';
import { useCustomTemplateState } from '../hooks';

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

type ColorSectionType = {
  name: 'light' | 'dark' | 'natural';
  handleColorPaletteClick: (colors: any, category: string, index: number) => void
  isActive?: string
}

enum ColorName {
  light = 'Light Colors',
  dark = 'Dark Colors',
  natural = 'Natural Colors'
}

const ColorSection = ({ name, handleColorPaletteClick, isActive }: ColorSectionType) => {

  return (
    <>
      <Text variant='subtitle1' fontWeight={500}>{ColorName[name]}</Text>
      <Box sx={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        my: 2
      }}>
        {
          colors[name].map((item, index) => (
            <Box key={index} py={2}>
              <ColorPalette
                isActive={isActive === `${name}-${index}`}
                palette={item}
                handleClick={(colors) => {
                  handleColorPaletteClick(colors, name, index);
                }}
              />
            </Box>
          ))
        }
      </Box>
    </>
  )
}

export const TemplateColor = () => {
  const { colors } = useCustomTemplateState();

  const [color, setColor] = colors;

  const handleColorPaletteClick = (colors: any, category: string, index: number) => {
    setColor({
      name: category,
      value: colors,
      active: `${category}-${index}`
    });
  };
  

  return (
    <Box sx={{
      my: 2
    }}>
      <ColorSection
        name='light'
        isActive={color.active}
        handleColorPaletteClick={handleColorPaletteClick}
      />

      <ColorSection
        name='dark'
        isActive={color.active}
        handleColorPaletteClick={handleColorPaletteClick}
      />

      <ColorSection
        name='natural'
        isActive={color.active}
        handleColorPaletteClick={handleColorPaletteClick}
      />
    </Box>
  )
}