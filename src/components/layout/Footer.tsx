import {
  Box,
  Flex,
  FlexProps,
  HStack,
  Link as ChakraLink,
  Stack,
  Text,
  useColorMode,
  VisuallyHidden,
} from '@chakra-ui/react';
import Link from 'next/link';
import * as React from 'react';
import { Logo } from './logo';
import footerLinks from '~/_data/footerLinks.json';

export type FooterProps = FlexProps;

export const Footer: React.FC<FooterProps> = ({ className, style, ...rest }) => {
  const { colorMode } = useColorMode();

  return (
    <Flex
      as="footer"
      className={className}
      style={style}
      flexDirection="column"
      borderTop="1px solid"
      borderTopColor={colorMode === 'dark' ? 'gray.800' : 'gray.100'}
      px={6}
      py={12}
      {...rest}
    >
      <Stack spacing={6}>
        <Stack spacing={2}>
          <Box display="inline-block">
            <Logo height={30} aria-hidden />
            <VisuallyHidden>TMViz</VisuallyHidden>
          </Box>
          <Flex alignItems="center">
            <Text fontSize="sm">
              Lightweight, customisable controller visualisation widget for Trackmania.
            </Text>
          </Flex>
        </Stack>
        <HStack spacing={6} as="ul" listStyleType="none">
          {footerLinks.map(link => {
            if (link.isExternal) {
              return (
                <Text key={link.title} as="li" fontSize="sm">
                  <ChakraLink href={link.url} isExternal>
                    {link.title}
                  </ChakraLink>
                </Text>
              );
            }

            return (
              <Text key={link.title} as="li" fontSize="sm">
                <Link href={link.url} passHref>
                  <ChakraLink>{link.title}</ChakraLink>
                </Link>
              </Text>
            );
          })}
        </HStack>
        <Stack spacing={0} color={colorMode === 'dark' ? 'gray.200' : 'gray.800'}>
          <Text fontSize="xs">TMViz &copy; 2020 resir014. Released under the MIT License.</Text>
          <Text fontSize="xs">
            This project is not affiliated with Trackmania or Ubisoft Nadeo.
          </Text>
        </Stack>
      </Stack>
    </Flex>
  );
};
