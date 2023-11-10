import FormControlLabel from '@mui/material/FormControlLabel';
import MuiCheckbox from '@mui/material/Checkbox';

type IProps = {
  label?: string;
  onChange?: (event: React.SyntheticEvent, checked: boolean) => void;
  required?: boolean;
  color?: 'secondary' | 'primary',
  disabled?: boolean;
}

export const Checkbox = (props: IProps) => {
  return (
    <FormControlLabel
      label={props.label}
      onChange={props.onChange}
      required={props.required}
      disabled={props.disabled}
      control={<MuiCheckbox color={props.color} />} 
    />
  )
}