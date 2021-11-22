import * as React from 'react';
import { Flex, useColorMode } from '@chakra-ui/react';

export const DashboardRoot: React.FC = ({ children }) => {
  const { colorMode } = useColorMode();

  const backgroundColor = React.useMemo(() => {
    if (colorMode === 'dark') {
      return 'gray.900';
    }

    return 'gray.50';
  }, [colorMode]);

  return (
    <Flex flexDirection="column" flex="1 1 auto" backgroundColor={backgroundColor}>
      {children}
    </Flex>
  );
};
