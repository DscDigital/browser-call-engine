"use client";

import type { ReactNode } from 'react';
import { createContext, useMemo } from 'react';

export type TelephonyContextType = {
  sipStatus: 'disconnected' | 'registered';
  activeCall: null | { id: string; number: string; direction: 'inbound' | 'outbound' };
  incomingCall: null | { id: string; from: string };
  register: () => void;
  makeCall: () => void;
  hangup: () => void;
  answer: () => void;
};

export const TelephonyContext = createContext<TelephonyContextType>({
  sipStatus: 'disconnected',
  activeCall: null,
  incomingCall: null,
  register: () => undefined,
  makeCall: () => undefined,
  hangup: () => undefined,
  answer: () => undefined,
});

export default function TelephonyProvider({ children }: { children: ReactNode }) {
  const value = useMemo<TelephonyContextType>(
    () => ({
      sipStatus: 'disconnected',
      activeCall: null,
      incomingCall: null,
      register: () => undefined,
      makeCall: () => undefined,
      hangup: () => undefined,
      answer: () => undefined,
    }),
    []
  );

  return <TelephonyContext.Provider value={value}>{children}</TelephonyContext.Provider>;
}
