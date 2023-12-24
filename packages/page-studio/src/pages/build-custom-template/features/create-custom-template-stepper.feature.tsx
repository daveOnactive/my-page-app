import { VerticalLinearStepper, Box, Button, Icon } from "@my-page/design-system";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { TemplateTitle, TemplateSections, TemplatePages, TemplateColor, TemplateFonts } from ".";
import { useCustomTemplateState } from "../hooks";


export const CreateCustomTemplateStepper = () => {
  const [activeStep, setActiveStep] = useState(0);
  const navigate = useNavigate();

  const { customTemplate } = useCustomTemplateState();

  const handlePrevStep = () => {
    setActiveStep((step) => step - 1);
  }

  const handleNextStep = () => {
    setActiveStep((step) => step + 1);
  }
  
  return (
    <Box
      sx={{
        width: '100%',
        pl: 12,
        pb: 4
      }}
    >
      <VerticalLinearStepper
        activeStep={activeStep}
        steps={[
          {
            description: (
              <TemplateTitle
                handleNext={handleNextStep}
              />
            ),
            label: `Website Title`
          },
          {
            description: <TemplateSections />,
            label: 'Website Sections'
          },
          {
            description: <TemplatePages />,
            label: 'Pages'
          },
          {
            description: <TemplateColor />,
            label: 'Color Preference'
          },
          {
            description: <TemplateFonts />,
            label: 'Fonts'
          },
        ]}
      />
      

      <Box
        sx={{
          mt: 6
        }}
      >
        <Button
          variant="outlined"
          color="secondary"
          disabled={activeStep === 0}
          onClick={handlePrevStep}
          startIcon={
            (
              <Icon fontSize="medium">
                arrow_left
              </Icon>
            )
          }
        >
          Prev
        </Button>
        <Button
          variant="outlined"
          color="secondary"
          sx={{
            mx: 2
          }}
          disabled={activeStep === 4}
          onClick={handleNextStep}
          endIcon={
            (
              <Icon fontSize="medium">
                arrow_right
              </Icon>
            )
          }
        >
          Next
        </Button>
        <Button
          disabled={activeStep < 4}
          variant="contained"
          color="secondary"
          onClick={() => console.log(customTemplate)}
          endIcon={
            (
              <Icon fontSize="medium">
                task
              </Icon>
            )
          }
        >
          Finish
        </Button>
      </Box>
    </Box>
  )
};