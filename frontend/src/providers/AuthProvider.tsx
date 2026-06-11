"use client";

import type { ReactNode } from 'react';
import { createContext, useCallback, useMemo, useState, useSyncExternalStore } from 'react';

const LS_KEY = 'bce_user';
const MOCK_EMAIL = 'admin@browsercallengine.com';
const MOCK_PASSWORD = 'admin123';
const MOCK_USER = { id: '1', email: MOCK_EMAIL };

export type AuthUser = { id: string; email: string };

export type AuthContextType = {
  user: AuthUser | null;
  token: null | string;
  isAuthenticated: boolean;
  isLoading: boolean;
  loginError: string | null;
  login: (email: string, password: string) => void;
  logout: () => void;
};

// Module-level subscriber list enables same-tab reactivity for useSyncExternalStore.
let authSubscribers: Array<() => void> = [];

function subscribeToAuthStore(callback: () => void) {
  authSubscribers.push(callback);
  return () => {
    authSubscribers = authSubscribers.filter(sub => sub !== callback);
  };
}

function notifyAuthSubscribers() {
  for (const sub of authSubscribers) sub();
}

// Cache the last snapshot so useSyncExternalStore gets a stable reference.
// JSON.parse returns a new object on every call; without this cache React's
// Object.is check always detects a change and triggers an infinite render loop.
let snapshotCache: AuthUser | null = null;
let snapshotRaw: string | null = null;

function readAuthSnapshot(): AuthUser | null {
  try {
    const stored = localStorage.getItem(LS_KEY);
    if (stored === snapshotRaw) return snapshotCache;
    snapshotRaw = stored;
    snapshotCache = stored ? (JSON.parse(stored) as AuthUser) : null;
    return snapshotCache;
  } catch {
    snapshotRaw = null;
    snapshotCache = null;
    return null;
  }
}

// SSR snapshot — localStorage is unavailable on the server.
function readServerSnapshot(): null {
  return null;
}

export const AuthContext = createContext<AuthContextType>({
  user: null,
  token: null,
  isAuthenticated: false,
  isLoading: false,
  loginError: null,
  login: () => undefined,
  logout: () => undefined,
});

export default function AuthProvider({ children }: { children: ReactNode }) {
  const [loginError, setLoginError] = useState<string | null>(null);

  // useSyncExternalStore reads localStorage synchronously on the client,
  // avoiding the need for useEffect + setState (which triggers the React Compiler rule).
  // React reconciles the server snapshot (null) with the client snapshot after hydration.
  const user = useSyncExternalStore(
    subscribeToAuthStore,
    readAuthSnapshot,
    readServerSnapshot,
  );

  const login = useCallback((email: string, password: string) => {
    if (email === MOCK_EMAIL && password === MOCK_PASSWORD) {
      localStorage.setItem(LS_KEY, JSON.stringify(MOCK_USER));
      notifyAuthSubscribers();
      setLoginError(null);
    } else {
      setLoginError('Invalid email or password.');
    }
  }, []);

  const logout = useCallback(() => {
    localStorage.removeItem(LS_KEY);
    notifyAuthSubscribers();
    setLoginError(null);
  }, []);

  const value = useMemo<AuthContextType>(
    () => ({
      user,
      token: null,
      isAuthenticated: user !== null,
      isLoading: false,
      loginError,
      login,
      logout,
    }),
    [user, loginError, login, logout],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
