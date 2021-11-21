import { ListItem } from '@chakra-ui/react';
import * as React from 'react';

const LI: React.FC<JSX.IntrinsicElements['li']> = ({ children, ...rest }) => {
  return <ListItem {...rest}>{children}</ListItem>;
};

export default LI;
