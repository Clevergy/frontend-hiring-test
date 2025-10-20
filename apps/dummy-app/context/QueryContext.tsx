'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { type FC, type ReactNode, useState } from 'react';

export type QueryProviderProps = {
  children: ReactNode;
};

export const QueryProvider: FC<QueryProviderProps> = ({ children }) => {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};
