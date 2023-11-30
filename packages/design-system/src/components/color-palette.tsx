import Box from "@mui/material/Box";
import { blue } from "@mui/material/colors";


type IProps = {
  handleClick?: (colors: unknown) => void;
  palette: {
    a: string;
    b: string;
    c: string;
    d: string;
  };
  isActive?: boolean;
}

export const ColorPalette = (props: IProps) => {
  const { isActive, palette, handleClick } = props;

  const activeStyle = isActive ? { border: `1.5px solid ${blue[500]}` } : { };

  return (
    <Box 
      display='flex' 
      onClick={() => handleClick && handleClick(palette)}
      sx={{
        cursor: 'pointer',
        p: .2,
        width: 'fit-content',
        ...activeStyle
      }}
    >
      <Box width={50} height={50} sx={{background: palette.a}} />
      <Box width={50} height={50} sx={{background: palette.b}} />
      <Box width={50} height={50} sx={{background: palette.c}} />
      <Box width={50} height={50} sx={{background: palette.d}} />
    </Box>
  );
}