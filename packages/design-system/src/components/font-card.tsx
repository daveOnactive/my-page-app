import { Paper, Text } from ".";
import { grey } from '@mui/material/colors';

type IProps = {
  isActive?: boolean;
  fontName: string;
  fontFamily?: string;
}

export const FontCard = (props: IProps) => {

  const { isActive, fontName, fontFamily } = props;

  const activeStyle = isActive ? { border: `1px solid ${grey[600]}` } : {};

  return (
    <Paper 
      sx={{
        width: 150,
        height: 150,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        ...activeStyle,
        cursor: 'pointer'
      }}
      variant='outlined'
    >
      <Text
        sx={fontFamily ? {
          fontFamily: `${fontFamily} !important`, 
        } : undefined}
        variant='body1' 
        fontWeight={500}
      >{fontName}</Text>
    </Paper>
  )
}