import { useState, useEffect } from 'react';
import { useSubscribe } from 'nostr-hooks';
import Mostros from '@/features/mostros';
import { MostroProps } from '@/features/mostros/mostro';
import { eventToMostro } from '@/lib/mostro';
import { Navbar } from '@/features';

const filters = [
  {
    kinds: [38383],
    limit: 100,
    '#z': ['info'],
  },
];

export const HomeRoute = () => {
  const { events: newEvents } = useSubscribe({ filters });

  const [mostros, setMostros] = useState([] as MostroProps[]);

  useEffect(() => {
    if (newEvents && newEvents.length > 0) {
      setMostros((prevMostros: MostroProps[]) => {
        const existingPubkeys = prevMostros.map((mostro) => mostro.pubkey);

        const filteredEvents = newEvents.filter((event) => {
          const pubkey = event.tags.find((tag) => tag[0] === 'mostro_pubkey')?.[1];
          return pubkey && !existingPubkeys.includes(pubkey);
        });
        const filteredMostros = filteredEvents.map((event) => eventToMostro(event));

        return [...prevMostros, ...filteredMostros];
      });
    }
  }, [newEvents]);

  if (!mostros.length) return <p>Loading...</p>;

  return (
    <>
      <Navbar />

      <Mostros mostros={mostros} />
    </>
  );
};
