import { Heading, List, ListItem } from '@chakra-ui/react';
import * as React from 'react';

export const H2: React.FC<JSX.IntrinsicElements['h2']> = ({ children, ...rest }) => (
  <Heading as="h2" size="md" {...rest}>
    {children}
  </Heading>
);

export const H3: React.FC<JSX.IntrinsicElements['h3']> = ({ children, ...rest }) => (
  <Heading as="h3" size="sm" {...rest}>
    {children}
  </Heading>
);

export const LI: React.FC<JSX.IntrinsicElements['li']> = ({ children, ...rest }) => {
  return <ListItem {...rest}>{children}</ListItem>;
};

export const UL: React.FC<JSX.IntrinsicElements['ul']> = ({ children, ...rest }) => {
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
