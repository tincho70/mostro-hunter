import { useEffect, useMemo } from 'react';
import NDK, { NDKRelay } from '@nostr-dev-kit/ndk';
import { useRelay } from '@/components/nostr/hooks/useRelays';
import { useAutoLogin, useNostrHooks } from 'nostr-hooks';

const RELAYS = ['wss://relay.damus.io', 'wss://relay.mostro.network'];

export const NostrRelayEvents = () => {
  const ndk = useMemo(
    () =>
      new NDK({
        explicitRelayUrls: RELAYS,
        autoConnectUserRelays: false,
        autoFetchUserMutelist: false,
        enableOutboxModel: true,
      }),
    [],
  );

  const { addRelay, removeRelay } = useRelay();

  useEffect(() => {
    const onConnect = (relay: NDKRelay) => addRelay(relay.url);
    const onDisconnect = (relay: NDKRelay) => removeRelay(relay.url);

    ndk.pool.on('relay:connect', onConnect);
    ndk.pool.on('relay:disconnect', onDisconnect);
    ndk.outboxPool?.on('relay:connect', onConnect);
    ndk.outboxPool?.on('relay:disconnect', onDisconnect);

    return () => {
      ndk.pool.off('relay:connect', onConnect);
      ndk.pool.off('relay:disconnect', onDisconnect);
      ndk.outboxPool?.off('relay:connect', onConnect);
      ndk.outboxPool?.off('relay:disconnect', onDisconnect);
    };
  }, [ndk, addRelay, removeRelay]);

  useNostrHooks(ndk);
  useAutoLogin();

  // Si necesitas exponer ndk, puedes hacerlo vía contexto o props
  return null;
};
