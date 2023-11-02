import { Button as MuiButton, ButtonProps as MuiButtonProps } from '@mui/material';

export const Button = (props: MuiButtonProps) => <MuiButton {...props}>{props.children}</MuiButton>;