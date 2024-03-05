import * as React from 'react';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import { Button, Text as Typography } from '.';
import { colors } from '@mui/material';

type IProps = {
  steps: {
    label: React.ReactNode;
    description: React.ReactNode;
  }[];
  handleNext: () => void;
  handlePrev: () => void;
  activeStep: number;
  isNextBtnValid?: boolean;
};

export function Stepper({ steps, handleNext, handlePrev, activeStep = 0, isNextBtnValid }: IProps) {
  const maxSteps = steps.length;
  const finalStep = activeStep === maxSteps - 1;


  return (
    <Box sx={{ width: '100%' }}>
      <Paper
        square
        elevation={0}
        sx={{
          display: 'flex',
          alignItems: 'center',
          p: 2,
          bgcolor: colors.grey[300]
        }}
      >
        <Typography>{steps[activeStep].label}</Typography>
      </Paper>
      <Box sx={{ height: '100%', width: '100%', py: 2 }}>
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
            disabled={isNextBtnValid}
          >
            {finalStep ? 'Complete' : 'Next'}
          </Button>
        }
        backButton={
          <Button 
            size="small" 
            onClick={handlePrev} 
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
