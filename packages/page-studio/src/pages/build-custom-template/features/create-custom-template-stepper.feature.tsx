import { Box, Stepper } from "@my-page/design-system";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { TemplateTitle, TemplateSections, TemplateColor, TemplateFonts } from ".";
import { useCustomTemplateState } from "../hooks";


export const CreateCustomTemplateStepper = () => {
  const [activeStep, setActiveStep] = useState(0);
  const navigate = useNavigate();

  const { customTemplate } = useCustomTemplateState();

  const handleIsNextStepValid = () => {
    // switch(activeStep) {
    //   case 0:
    //     return customTemplate.name.length > 3;
    //   case 1:
    //     return customTemplate.sections.length;
    //   case 2:
    //     return customTemplate.pages.length;
    //   case 3:
    //     return !!customTemplate.colors.name;
    //   case 4:
    //     return !!customTemplate.fonts;
    //   default:
    //     return false;
    // }
    return false;
  }

  const isNextStepValid = handleIsNextStepValid();

  const handlePrevStep = () => {
    setActiveStep((step) => step - 1);
  }

  const handleNextStep = () => {
    if(isNextStepValid) {
      setActiveStep((step) => step + 1);
    }
  }
  
  return (
    <Box
      sx={{
        width: '70%',
        pl: 12,
        pb: 4
      }}
    >
      <Stepper
        steps={[
          {
            description: <TemplateTitle />,
            label: 'Website Title'
          },
          {
            description: <TemplateSections />,
            label: 'Templates'
          },
          {
            description: <TemplateColor />,
            label: 'Color Preference'
          },
          {
            description: <TemplateFonts />,
            label: 'Fonts'
          }
        ]}
        handleComplete={() => {
          // navigate('/studio')
          console.log(customTemplate);
        }}
      />
    </Box>
  )
};