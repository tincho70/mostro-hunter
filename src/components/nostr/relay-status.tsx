import { useEffect, useState } from 'react';
import { Share1Icon } from '@radix-ui/react-icons';
import { Button } from '../ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useNdk } from 'nostr-hooks';
import { NDKRelayStatus } from '@nostr-dev-kit/ndk';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

export function RelayStatus() {
  const { ndk } = useNdk();

  const [, setUpdate] = useState(0);

  useEffect(() => {
    const forceUpdate = () => setUpdate((u) => u + 1);

    ndk.pool.on('relay:connect', forceUpdate);
    ndk.pool.on('relay:disconnect', forceUpdate);
    ndk.outboxPool?.on('relay:connect', forceUpdate);
    ndk.outboxPool?.on('relay:disconnect', forceUpdate);

    return () => {
      ndk.pool.off('relay:connect', forceUpdate);
      ndk.pool.off('relay:disconnect', forceUpdate);
      ndk.outboxPool?.off('relay:connect', forceUpdate);
      ndk.outboxPool?.off('relay:disconnect', forceUpdate);
    };
  }, [ndk]);

  // Megre relays from both pools to avoid duplicates
  const relaysMap = new Map<string, { url: string; status: number }>();
  Array.from(ndk.pool.relays.values()).forEach((relay) =>
    relaysMap.set(relay.url, { url: relay.url, status: relay.status }),
  );
  if (ndk.outboxPool) {
    Array.from(ndk.outboxPool.relays.values()).forEach((relay) =>
      relaysMap.set(relay.url, { url: relay.url, status: relay.status }),
    );
  }
  const relays = Array.from(relaysMap.values());

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <Share1Icon className="scale-100" />
          <span className="sr-only">Relay status</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <TooltipProvider>
          {relays.map((relay) => {
            let color = 'bg-orange-500';
            if (relay.status === NDKRelayStatus.CONNECTED) color = 'bg-green-500';
            else if (relay.status === NDKRelayStatus.DISCONNECTED) color = 'bg-red-500';

            return (
              <DropdownMenuItem key={relay.url}>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <span
                      className={`inline-block w-2 h-2 rounded-full mr-2 align-middle ${color}`}
                    />
                  </TooltipTrigger>
                  <TooltipContent side="right">{NDKRelayStatus[relay.status]}</TooltipContent>
                </Tooltip>
                {relay.url}
              </DropdownMenuItem>
            );
          })}
        </TooltipProvider>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
