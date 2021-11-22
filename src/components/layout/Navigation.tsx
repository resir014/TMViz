import {
  Grid,
  Box,
  Link as ChakraLink,
  FlexProps,
  IconButton,
  useColorMode,
  Tooltip,
  VisuallyHidden,
  Stack,
  HStack,
} from '@chakra-ui/react';
import { CloseIcon, HamburgerIcon, MoonIcon, SunIcon } from '@chakra-ui/icons';
import * as React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Logo } from './logo';

import navLinks from '~/_data/navLinks.json';
import { useSidebarDisclosure } from '~/modules/docs/utils';
import { NavLinkItem } from '~/types/common';

export type NavigationProps = FlexProps;

export const Navigation: React.FC<NavigationProps> = ({ className, style, ...rest }) => {
  const { colorMode, toggleColorMode } = useColorMode();
  const router = useRouter();
  const { isOpen, onToggle } = useSidebarDisclosure();

  const toggleText = `Switch to ${colorMode === 'dark' ? 'light' : 'dark'} mode`;

  return (
    <Grid
      as="header"
      className={className}
      style={style}
      gridTemplateColumns="auto 1fr auto"
      gridGap={4}
      position="fixed"
      top={0}
      left={0}
      right={0}
      height="64px"
      px={6}
      py={3}
      backgroundColor={colorMode === 'dark' ? 'black' : 'white'}
      zIndex="sticky"
      {...rest}
    >
      <Box display="flex" alignItems="center" userSelect="none">
        <Link href="/" passHref>
          <ChakraLink>
            <VisuallyHidden>TMViz</VisuallyHidden>
            <Logo height={24} aria-hidden />
          </ChakraLink>
        </Link>
      </Box>
      <Box as="nav" display="flex" alignItems="center">
        <Stack as="ul" direction="row" spacing={4} listStyleType="none">
          {navLinks.map(({ path, title, isExact }: NavLinkItem) => (
            <Box as="li" key={path}>
              <Link href={path} passHref>
                <ChakraLink
                  color="inherit"
                  fontWeight={
                    (isExact ? router.asPath === path : router.asPath.startsWith(path)) ? 600 : 400
                  }
                  textDecoration={
                    (isExact ? router.asPath === path : router.asPath.startsWith(path))
                      ? 'underline'
                      : 'none'
                  }
                >
                  {title}
                </ChakraLink>
              </Link>
            </Box>
          ))}
        </Stack>
      </Box>
      <HStack spacing={2}>
        <Tooltip label={toggleText} placement="bottom-end">
          <IconButton
            variant="ghost"
            aria-label={toggleText}
            icon={colorMode === 'dark' ? <SunIcon /> : <MoonIcon />}
            onClick={toggleColorMode}
          />
        </Tooltip>
        {router.asPath.startsWith('/docs') && (
          <Box display={['inline-block', null, 'none']}>
            <Tooltip label="Toggle navigation" placement="bottom-end">
              <IconButton
                variant="ghost"
                aria-label="Toggle navigation"
                icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
                onClick={onToggle}
              />
            </Tooltip>
          </Box>
        )}
      </HStack>
    </Grid>
  );
};

export default Navigation;
