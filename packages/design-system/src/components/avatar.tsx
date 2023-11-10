import MuiAvatar, { AvatarProps } from '@mui/material/Avatar';

type IProps = AvatarProps & {
  size?: 'large' | 'small' | 'medium'
}

const sizes = {
  small: { width: 24, height: 24 },
  large: { width: 56, height: 56 }
};

export const Avatar = ({ size = 'medium' , ...rest}: IProps) => {
  return <MuiAvatar {...rest } sx={sizes[size as keyof typeof sizes]} />;
};