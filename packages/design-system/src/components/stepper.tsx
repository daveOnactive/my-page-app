import * as React from 'react';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import { Button, Text as Typography } from '.';

type IProps = {
  steps: {
    label: React.ReactNode;
    description: React.ReactNode;
  }[];
  handleComplete: () => void;
};

export function Stepper({ steps, handleComplete }: IProps) {
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = steps.length;
  const finalStep = activeStep === maxSteps - 1;

  const handleNext = () => {
    if(finalStep) {
      handleComplete();
    } else {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    }
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Paper
        square
        elevation={0}
        sx={{
          display: 'flex',
          alignItems: 'center',
          height: 50,
          pl: 2,
          bgcolor: 'background.default',
        }}
      >
        <Typography fontWeight={600}>{steps[activeStep].label}</Typography>
      </Paper>
      <Box sx={{ height: 255, maxWidth: 400, width: '100%', p: 2 }}>
        {steps[activeStep].description}
      </Box>
      <MobileStepper
        variant="progress"
        steps={maxSteps}
        position="static"
        LinearProgressProps={{
          color: 'secondary'
        }}
        activeStep={activeStep}
        nextButton={
          <Button
            size="small"
            onClick={handleNext}
            color="secondary"
            variant='contained'
          >
            {finalStep ? 'Complete' : 'Next'}
          </Button>
        }
        backButton={
          <Button 
            size="small" 
            onClick={handleBack} 
            disabled={activeStep === 0} 
            color="secondary"
            variant='contained'
            >
            Back
          </Button>
        }
      />
    </Box>
  );
}
