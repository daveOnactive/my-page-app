import MuiCard, { CardProps } from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';


type IProps = CardProps & {
  icon?: React.ReactNode,
  title?: string;
  body?: string;
  buttonText?: string;
  onClickButton?: () => void;
  align?: 'center' | 'left' | 'right'
}

export const Card = ({ icon, title, body, buttonText, onClickButton, align = 'left', ...rest  }: IProps) => (
  <MuiCard {...rest}>
    
    <CardContent sx={{textAlign: align}}>
      {icon ? <Box sx={{
        display: 'flex',
        justifyContent: align,
        marginBottom: 2
      }}>
        {icon}
      </Box> : null}
      <Typography variant="h5" component="div">
        {title}
      </Typography>

      <Typography variant="body2">
        {body}
      </Typography>
    </CardContent>

    {buttonText ? <CardActions sx={{
        display: 'flex',
        justifyContent: align,
        paddingTop: 0,
        paddingBottom: 2,
        paddingX: 2
      }}>
      <Button variant='contained' color='secondary' size="small" onClick={onClickButton}>{buttonText}</Button>
    </CardActions> : null}

  </MuiCard>
)