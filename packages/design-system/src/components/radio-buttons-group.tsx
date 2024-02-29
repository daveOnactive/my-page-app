import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';

type IProps = {
  radioGroup: {
    value: string;
    label: string;
  }[];
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string;
};

export function RadioButtonsGroup({ radioGroup, onChange, value }: IProps) {
  return (
    <FormControl>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
        value={value}
        onChange={onChange}
      >
        {
          radioGroup.map(({ value, label }) => (
            <FormControlLabel value={value} control={<Radio color='secondary' size='small' />} label={label} />
          ))
        }
      </RadioGroup>
    </FormControl>
  );
}
