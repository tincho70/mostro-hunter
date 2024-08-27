import { ThemeProvider } from '@/components/theme';

import { AppProvider } from './provider';
import { AppRouter } from './router';
import NDK from '@nostr-dev-kit/ndk';
import { useNostrHooks, useAutoLogin } from 'nostr-hooks';
import { useMemo } from 'react';

const RELAYS = ['wss://relay.damus.io', 'wss://relay.mostro.network'];

export const App = () => {
  const ndk = useMemo(
    () =>
      new NDK({
        explicitRelayUrls: RELAYS,
        autoConnectUserRelays: false,
        autoFetchUserMutelist: false,
      }),
    [],
  );

  useNostrHooks(ndk);
  useAutoLogin();

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <AppProvider>
        <AppRouter />
      </AppProvider>
    </ThemeProvider>
  );
};
