import type { ReactNode } from 'react';
import './globals.css';
import { QueryProvider } from '@/context/QueryContext';
import { UIProvider } from '@/context/UIContext';

export type RootLayoutProps = {
  children: ReactNode;
};

export default async function RootLayout(props: RootLayoutProps) {
  const { children } = props;

  return (
    <html lang="en">
      <body>
        <QueryProvider>
          <UIProvider>{children}</UIProvider>
        </QueryProvider>
      </body>
    </html>
  );
}
