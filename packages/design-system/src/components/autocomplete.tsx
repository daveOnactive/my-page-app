import TextField from '@mui/material/TextField';
import MuiAutocomplete from '@mui/material/Autocomplete';
import { SxProps, Theme } from '@mui/material';

type IProps = {
  options: any[];
  getOptionLabel: (option: any) => string;
  sx?: SxProps<Theme>;
  label?: string;
  onChange?: (event: any, newValue: any | null) => void;
}

export const Autocomplete = ({ onChange, label, options, getOptionLabel, sx }: IProps) => {

  return (
    <MuiAutocomplete
      options={options}
      getOptionLabel={getOptionLabel}
      sx={sx}
      id="clear-on-escape"
      color='secondary'
      clearOnEscape
      onChange={onChange}
      renderInput={(params) => (
        <TextField {...params} label={label} variant="outlined" color="secondary" />
      )}
    />
  )
}