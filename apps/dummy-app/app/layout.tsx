import { QueryProvider } from '@/context/QueryContext';
import { UIProvider } from '@/context/UIContext';
import './globals.css';

export default async function RootLayout(props: LayoutProps<'/'>) {
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
