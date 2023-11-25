import { VerticalLinearStepper, Box, Button, Icon } from "@my-page/design-system";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const CreateCustomTemplateStepper = () => {
  const [activeStep, setActiveStep] = useState(0);
  const navigate = useNavigate();

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
        pl: 12
      }}
    >
      <VerticalLinearStepper
        activeStep={activeStep}
        steps={[
          {
            description: <></>,
            label: 'Website Title'
          },
          {
            description: <></>,
            label: 'Pages'
          },
          {
            description: <></>,
            label: 'Color Preference'
          },
          {
            description: <></>,
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
          disabled={activeStep === 3}
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
          disabled={activeStep < 3}
          variant="contained"
          color="secondary"
          onClick={() => navigate('/studio')}
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