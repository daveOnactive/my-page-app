import Paper from '@mui/material/Paper';
import InputBase, { InputBaseProps } from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import Icon from '@mui/material/Icon';

export function SearchInput(props: InputBaseProps) {
  return (
    <Paper
      component="form"
      variant='outlined'
      sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}
    >
      <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
        <Icon>search</Icon>
      </IconButton>
      <InputBase
        {...props}
        sx={{ ml: 1, flex: 1 }}
        inputProps={{ 'aria-label': 'search google maps' }}
      />
    </Paper>
  );
}
