import type { ReactNode } from 'react';
import Header from '@/components/layout/Header';
import Sidebar from '@/components/layout/Sidebar';
import BottomNav from '@/components/layout/BottomNav';
import MiniCallBar from '@/components/layout/MiniCallBar';
import PageContainer from '@/components/layout/PageContainer';

export default function AppLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <Header />
      <div className="md:flex">
        <Sidebar />
        <div className="flex-1">
          <PageContainer>{children}</PageContainer>
        </div>
      </div>
      <BottomNav />
      <MiniCallBar />
    </div>
  );
}
