"use client";

import type { ReactNode } from 'react';
import { createContext, useMemo } from 'react';

export type AuthContextType = {
  user: null | { id: string; email: string };
  token: null | string;
  isAuthenticated: boolean;
  login: () => void;
  logout: () => void;
};

export const AuthContext = createContext<AuthContextType>({
  user: null,
  token: null,
  isAuthenticated: false,
  login: () => undefined,
  logout: () => undefined,
});

export default function AuthProvider({ children }: { children: ReactNode }) {
  const value = useMemo<AuthContextType>(
    () => ({
      user: null,
      token: null,
      isAuthenticated: false,
      login: () => undefined,
      logout: () => undefined,
    }),
    []
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
