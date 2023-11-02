import MuiLink, { LinkProps } from '@mui/material/Link';

type IProps = LinkProps & {
  active?: boolean;
  href: string;
}

export const Link = ({ active, href, ...rest }: IProps) => {
  return (
    <MuiLink { ...rest } href={href} underline={`${active ? 'always' : 'hover'}`} color='secondary'/>
  )
}