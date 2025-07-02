import * as React from 'react';
import { RelayContext } from '@/components/nostr/relay-context';

export const useRelay = () => {
  const context = React.useContext(RelayContext);
  if (!context) throw new Error('useRelay debe usarse dentro de RelayProvider');
  return context;
};
