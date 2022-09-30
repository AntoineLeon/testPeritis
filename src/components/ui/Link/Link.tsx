import {FC} from "react";
import {Link as MuiLink, Typography} from '@mui/material'

type LinkProps = {
  children: string | JSX.Element,
  color?: string
  size?: number
  p?: number
};

const Link: FC<LinkProps> = ({children, color, size, p}) => {
  return (
    <MuiLink href={'#'} padding={p} noWrap>
      <Typography unselectable={'on'} color={color} sx={{fontSize: size ?? {xs: 22, sm: 18}}} fontWeight={'bold'}>
        {children}
      </Typography>
    </MuiLink>
  );
}

export default Link;