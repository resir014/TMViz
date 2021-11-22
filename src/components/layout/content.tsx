import { Flex, FlexProps } from '@chakra-ui/react';
import * as React from 'react';

export type ContentProps = FlexProps;

export const Content: React.FC<ContentProps> = ({ children, ...rest }) => {
  return (
    <Flex flexDirection="column" flex="1 1 auto" {...rest}>
      {children}
    </Flex>
  );
};
