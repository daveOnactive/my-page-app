import { Box } from "@mui/material";


type IProps = {
  handleClick?: (colors: unknown) => void;
  palette: {
    a: string;
    b: string;
    c: string;
    d: string;
  }
}

export const ColorPalette = (props: IProps) => {
  const palette = props.palette;

  return (
    <Box display='flex' onClick={() => props?.handleClick && props.handleClick(palette)}>
      <Box width={50} height={50} sx={{background: palette.a}} />
      <Box width={50} height={50} sx={{background: palette.b}} />
      <Box width={50} height={50} sx={{background: palette.c}} />
      <Box width={50} height={50} sx={{background: palette.d}} />
    </Box>
  );
}