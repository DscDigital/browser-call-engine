"use client";

import type { ReactNode } from 'react';
import { createContext, useMemo } from 'react';

export type CallStateContextType = {
  currentCall: null | { id: string; status: string };
  history: Array<{ id: string; caller: string; direction: string }>;
  startWrap: () => void;
  saveWrap: () => void;
  loadHistory: () => void;
};

export const CallStateContext = createContext<CallStateContextType>({
  currentCall: null,
  history: [],
  startWrap: () => undefined,
  saveWrap: () => undefined,
  loadHistory: () => undefined,
});

export default function CallStateProvider({ children }: { children: ReactNode }) {
  const value = useMemo<CallStateContextType>(
    () => ({
      currentCall: null,
      history: [],
      startWrap: () => undefined,
      saveWrap: () => undefined,
      loadHistory: () => undefined,
    }),
    []
  );

  return <CallStateContext.Provider value={value}>{children}</CallStateContext.Provider>;
}
