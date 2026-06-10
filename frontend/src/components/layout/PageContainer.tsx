import type { ReactNode } from 'react';

export default function PageContainer({ children }: { children: ReactNode }) {
  return <main className="min-h-[calc(100vh-4rem)] bg-slate-50 px-4 py-6 sm:px-6 lg:px-8">
    <div className="mx-auto w-full max-w-7xl">{children}</div>
  </main>;
}
