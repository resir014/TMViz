import { Box, BoxProps, Stack } from '@chakra-ui/react';
import * as React from 'react';
import convert from 'htmr';
import { Container, ContainerProps } from '../layout';
import htmrTransform from '~/utils/htmr-transform';
import { changelogsTransform } from '~/modules/docs';

interface PageBodyProps extends BoxProps {
  content?: string;
  template?: string;
  _containerProps?: ContainerProps;
}

const PageBody: React.FC<PageBodyProps> = ({
  children,
  content,
  template,
  _containerProps,
  ...rest
}) => {
  const renderContent = () => {
    if (content) {
      return (
        <Stack spacing={4}>
          {convert(content, {
            transform: template === 'changelog' ? changelogsTransform : htmrTransform,
          })}
        </Stack>
      );
    }

    if (children) {
      return <Stack spacing={4}>{children}</Stack>;
    }

    return null;
  };

  return (
    <Box as="section" px={6} pb={12} {...rest}>
      <Container {..._containerProps}>{renderContent()}</Container>
    </Box>
  );
};

export default PageBody;
