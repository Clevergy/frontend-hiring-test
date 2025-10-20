'use client';

import { HeroUIProvider } from '@heroui/system';
import { useRouter } from 'next/navigation';
import type { ReactNode } from 'react';

export type UIProviderProps = {
  children: ReactNode;
};

export const UIProvider = (props: UIProviderProps) => {
  const { children } = props;
  const router = useRouter();
  return <HeroUIProvider navigate={router.push}>{children}</HeroUIProvider>;
};
