'use client';

import type { ReactNode } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/hooks/useAuth';

export default function Header({ children }: { children?: ReactNode }) {
  const { user, logout } = useAuth();
  const router = useRouter();

  function handleLogout() {
    logout();
    router.replace('/login');
  }

  return (
    <header className="sticky top-0 z-20 border-b border-slate-200 bg-white/95 backdrop-blur-sm">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-slate-900 text-sm font-semibold text-white">
            B
          </div>
          <div>
            <p className="text-sm font-semibold text-slate-900">Browser Call Engine</p>
            <p className="text-xs text-slate-500">Agent Console</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <span className="hidden rounded-full bg-emerald-100 px-3 py-1 text-xs font-medium text-emerald-700 sm:inline-block">
            Available
          </span>
          {user && (
            <span className="hidden max-w-[160px] truncate text-sm text-slate-600 sm:inline-block">
              {user.email}
            </span>
          )}
          <button
            onClick={handleLogout}
            className="rounded-full bg-slate-100 px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-200"
          >
            Logout
          </button>
        </div>
      </div>
      {children}
    </header>
  );
}
