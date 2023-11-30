import * as React from 'react';
import { styled } from '@mui/material/styles';
import Icon from '@mui/material/Icon';
import MuiAccordion, { AccordionProps } from '@mui/material/Accordion';
import MuiAccordionSummary, {
  AccordionSummaryProps,
} from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';

const CustomizedAccordion = styled((props: AccordionProps) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&:before': {
    display: 'none',
  },
}));

const AccordionSummary = styled((props: AccordionSummaryProps) => (
  <MuiAccordionSummary
    expandIcon={<Icon sx={{ fontSize: '0.9rem' }}>arrow_forward_ios_sharp</Icon>}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === 'dark'
      ? 'rgba(255, 255, 255, .05)'
      : 'rgba(0, 0, 0, .03)',
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: '1px solid rgba(0, 0, 0, .125)',
}));

type IProps = {
  data: {
    summary: React.ReactNode;
    details: React.ReactNode;
  }[]
}

export function Accordion(props: IProps) {
  const [expanded, setExpanded] = React.useState<string | false>('panel0');

  const handleChange =
    (panel: string) => (_event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
    };

  return (
    <div>
      {
        props.data.map((item, index) => (
          <CustomizedAccordion key={`panel${index}`} expanded={expanded === `panel${index}`} onChange={handleChange(`panel${index}`)}>
            <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
              {item.summary}
            </AccordionSummary>
            <AccordionDetails
              sx={{
                overflowX: 'scroll'
              }}
            >
              {item.details}
            </AccordionDetails>
          </CustomizedAccordion>
        ))
      }
    </div>
  );
}
