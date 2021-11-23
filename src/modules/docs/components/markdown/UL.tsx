import { List } from '@chakra-ui/react';
import * as React from 'react';

const UL: React.FC<JSX.IntrinsicElements['ul']> = ({ children, ...rest }) => {
  return (
    <List styleType="none" {...rest}>
      {children}
    </List>
  );
};

export const ULChangelog: React.FC<JSX.IntrinsicElements['ul']> = ({ children, ...rest }) => {
  return (
    <List styleType="none" spacing="1" {...rest}>
      {children}
    </List>
  );
};

export default UL;
