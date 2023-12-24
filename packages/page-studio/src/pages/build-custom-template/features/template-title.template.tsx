import { Box, Input } from "@my-page/design-system";
import { KEYS } from "../../../shared";
import { useState } from "react";
import { useCustomTemplateState } from "../hooks";

type IProps = {
  handleNext: () => void;
};

export const TemplateTitle = (props: IProps) => {
  const [isError, setIsError] = useState(false);
  const { name } = useCustomTemplateState();
  const [value, setValue] = name;

  return (
    <Box py={4} px={2}>
      <Input
        variant="outlined"
        placeholder='Enter your business name'
        size="small"
        color='secondary'
        defaultValue={value}
        error={isError}
        helperText={isError ? 'Business name should be longer than 3' : ''}
        sx={{
          width: '70%'
        }}
        onChange={(ev) => {
          const value = ev.target.value;
          if (value.length > 3) {
            setIsError(false);
          }
          setValue(ev.target.value);
        }}
        onKeyDown={(ev) => {
          if(ev.key === KEYS.enter && value.length > 3) {
            props.handleNext();
          } else {
            setIsError(true);
          }
        }}
      />
    </Box>
  )
}