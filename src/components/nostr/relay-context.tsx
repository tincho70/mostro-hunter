import React, { createContext, useState } from 'react';

interface RelayContext {
  relays: { [url: string]: boolean };
  addRelay: (url: string) => void;
  removeRelay: (url: string) => void;
}
type RelayProviderProps = {
  children: React.ReactNode;
};

const RelayContext = createContext<RelayContext | undefined>(undefined);

const RelayProvider = ({ children }: RelayProviderProps) => {
  const [relays, setRelays] = useState<{ [url: string]: boolean }>({});

  const addRelay = (url: string) => {
    setRelays((prevRelays) => ({ ...prevRelays, [url]: true }));
  };

  const removeRelay = (url: string) => {
    setRelays((prevRelays) => ({ ...prevRelays, [url]: false }));
  };

  return (
    <RelayContext.Provider value={{ relays, addRelay, removeRelay }}>
      {children}
    </RelayContext.Provider>
  );
};

export { RelayProvider, RelayContext };
