import { Box, Stepper } from "@my-page/design-system";
import { TemplateTitle, TemplateSections, TemplateColor, TemplateFonts } from ".";
import { useCustomTemplateLogic } from '../hooks';


export const CreateCustomTemplateStepper = () => {

  const steps = [
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
  ]

  const { activeStep, handlePrev, handleNext, isNextStepValid } = useCustomTemplateLogic(steps.length);
  
  return (
    <Box
      sx={{
        width: '70%',
        pl: 12,
        pb: 4
      }}
    >
      <Stepper
        activeStep={activeStep}
        handlePrev={handlePrev}
        handleNext={handleNext}
        isNextBtnValid={!isNextStepValid}
        steps={steps}
      />
    </Box>
  )
};