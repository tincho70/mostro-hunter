import { ThemeProvider } from '@/components/theme';

import { AppProvider } from './provider';
import { AppRouter } from './router';

import { NostrRelayEvents } from '@/components/nostr/relay-events';

export const App = () => {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <AppProvider>
        <NostrRelayEvents />
        <AppRouter />
      </AppProvider>
    </ThemeProvider>
  );
};
