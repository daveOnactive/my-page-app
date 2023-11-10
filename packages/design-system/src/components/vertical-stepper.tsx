import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import { Icon, StepIconProps, styled } from '@mui/material';
import StepConnector, { stepConnectorClasses } from '@mui/material/StepConnector';


type IProps = {
  steps: {
    label: string;
    description: React.ReactNode;
  }[],
  activeStep: number;
}

const QontoConnector = styled(StepConnector)(({ theme }) => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 50,
    left: 'calc(-50% + 16px)',
    right: 'calc(50% + 16px)',
  },
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      borderColor: theme.palette.secondary,
    },
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      borderColor: theme.palette.secondary,
    },
  },
  [`& .${stepConnectorClasses.line}`]: {
    borderColor: theme.palette.mode === 'dark' ? theme.palette.grey[800] : '#eaeaf0',
    borderTopWidth: 3,
    borderRadius: 1,
  },
}));

const QontoStepIconRoot = styled('div')<{ ownerState: { active?: boolean } }>(
  ({ theme, ownerState }) => ({
    color: theme.palette.mode === 'dark' ? theme.palette.grey[700] : '#eaeaf0',
    display: 'flex',
    height: 22,
    alignItems: 'center',
    ...(ownerState.active && {
      color: theme.palette.secondary.main,
    }),
    '& .QontoStepIcon-completedIcon': {
      color: theme.palette.secondary.main,
      zIndex: 1,
      fontSize: 18,
    },
  }),
);

function QontoStepIcon(props: StepIconProps) {
  const { active, completed, className } = props;

  return (
    <QontoStepIconRoot ownerState={{ active }} className={className}>
      {completed ? (
        <Icon className="QontoStepIcon-completedIcon">check</Icon>
      ) : (
        <Icon className="QontoStepIcon-completedIcon">pending</Icon>
      )}
    </QontoStepIconRoot>
  );
}


export function VerticalLinearStepper(props: IProps) {

  return (
    <Box sx={{ maxWidth: 600 }}>
      <Stepper
        activeStep={props.activeStep} 
        connector={<QontoConnector />}
        orientation='vertical'
        >
        {props.steps.map((step) => (
          <Step key={step.label}>
            <StepLabel
              StepIconComponent={QontoStepIcon}
            >
              {step.label}
            </StepLabel>
            <StepContent>
              {step.description}
            </StepContent>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
}
