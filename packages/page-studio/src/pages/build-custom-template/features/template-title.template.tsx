import { Box, Input, RadioButtonsGroup, Text } from "@my-page/design-system";
// import { KEYS } from "../../../shared";
import { useState } from "react";
import { useCustomTemplateState } from "../hooks";

type IProps = {
  // handleNext: () => void;
};

const radioGroup = [
  {
    value: 'portfolio',
    label: 'Portfolio'
  },
  {
    value: 'landing_page',
    label: 'Landing Page'
  },
  {
    value: 'agency',
    label: 'Agency / Business'
  },
  {
    value: 'count_down',
    label: 'Count Down / Coming Soon'
  },
    {
    value: 'others',
    label: 'Others'
  }
];

export const TemplateTitle = (props: IProps) => {
  const [isError, setIsError] = useState(false);
  const { name } = useCustomTemplateState();
  const [templateName, setValue] = name;

  return (
    <Box mt={2}>
      <Input
        variant="outlined"
        placeholder='Enter your business name'
        size="small"
        color='secondary'
        defaultValue={templateName.name}
        error={isError}
        helperText={isError ? 'Business name should be longer than 3' : ''}
        sx={{
          width: '70%'
        }}
        onChange={(ev) => {
          const value = ev.target.value;
          // if (value.length > 3) {
          //   setIsError(false);
          // }
          setValue({
            ...templateName,
            name: value,
          });
        }}
        // onKeyDown={(ev) => {
        //   if(ev.key === KEYS.enter && value.length > 3) {
        //     props.handleNext();
        //   } else {
        //     setIsError(true);
        //   }
        // }}
      />

      <Box mt={2}>
        <Text mb={2}>
          For what purpose will the website be used?
        </Text>

        <RadioButtonsGroup
          radioGroup={radioGroup}
          value={templateName.category}
          onChange={(ev) => {
              const value = ev.target.value;
              setValue({
              ...templateName,
              category: value,
            });
          }}
        />
      </Box>
    </Box>
  )
}