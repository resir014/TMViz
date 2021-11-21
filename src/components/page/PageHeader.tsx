import { Box, BoxProps, Heading } from '@chakra-ui/react';
import * as React from 'react';
import { Container, ContainerProps } from '../layout';

export interface PageHeaderProps extends BoxProps {
  title: string;
  _containerProps?: ContainerProps;
}

const PageHeader: React.FC<PageHeaderProps> = ({ title, _containerProps, ...rest }) => {
  return (
    <Box as="header" px={6} pt={8} {...rest}>
      <Container mb={8} {..._containerProps}>
        <Heading as="h1" size="2xl">
          {title}
        </Heading>
      </Container>
    </Box>
  );
};

export default PageHeader;
