import { Flex } from '@chakra-ui/react';
import * as React from 'react';

export interface LayoutRootProps {
  isDashboard?: boolean;
}

export const DefaultLayout: React.FC = ({ children }) => {
  return (
    <Flex as="main" flexDirection="column" minHeight="100vh" overflowX="hidden">
      {children}
    </Flex>
  );
};
