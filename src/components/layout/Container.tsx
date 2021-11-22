import {
  Container as ChakraContainer,
  ContainerProps as ChakraContainerProps,
} from '@chakra-ui/react';
import * as React from 'react';

export interface ContainerProps extends ChakraContainerProps {
  size?: string;
}

export const Container: React.FC<ContainerProps> = ({ children, size = '80ch', ...rest }) => {
  return (
    <ChakraContainer mx="auto" px={0} width="100%" maxWidth={size} {...rest}>
      {children}
    </ChakraContainer>
  );
};
