import { useAtom } from 'jotai';
import { atomWithStore } from 'jotai/zustand';
import { useRouter } from 'next/router';
import React from 'react';
import create from 'zustand/vanilla';

const sidebarDisclosureStore = create(() => ({
  isOpen: false,
}));

export const sidebarDisclosureAtom = atomWithStore(sidebarDisclosureStore);

export function useSidebarDisclosure() {
  const router = useRouter();
  const [sidebarState, setSidebarState] = useAtom(sidebarDisclosureAtom);

  const toggleSidebarState = React.useCallback(() => {
    setSidebarState(prev => ({ ...prev, isOpen: prev.isOpen ? false : prev.isOpen }));
  }, [setSidebarState]);

  React.useEffect(() => {
    router.events.on('routeChangeComplete', toggleSidebarState);

    return () => {
      router.events.off('routeChangeComplete', toggleSidebarState);
    };
  }, [router.events, toggleSidebarState]);

  return [sidebarState, setSidebarState] as const;
}
