'use client';

import { useState } from 'react';

export default function CallPage() {
  const [seconds] = useState(135);

  const formatTime = (secs: number) => {
    const mins = Math.floor(secs / 60);
    const s = secs % 60;
    return `${mins.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  return (
    <div className="space-y-6">
      <div className="rounded-3xl border border-slate-200 bg-white p-8">
        <div className="mb-8 space-y-4 text-center">
          <div className="inline-block rounded-full bg-emerald-100 px-4 py-2">
            <span className="text-sm font-semibold text-emerald-700">Outbound Call</span>
          </div>
          <h1 className="text-4xl font-bold text-slate-900">+1 234 567 8900</h1>
          <p className="text-lg text-slate-500">Jane Doe</p>
        </div>

        <div className="mb-8 flex items-center justify-center space-x-2">
          <div className="flex h-3 w-3 items-center justify-center rounded-full bg-emerald-500">
            <div className="h-2 w-2 rounded-full bg-emerald-600 animate-pulse" />
          </div>
          <span className="text-3xl font-bold text-slate-900">{formatTime(seconds)}</span>
        </div>

        <div className="mb-8 grid grid-cols-2 gap-4 sm:grid-cols-5">
          <button className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-50">
            🔇 Mute
          </button>
          <button className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-50">
            ⏸ Hold
          </button>
          <button className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-50">
            ↗ Transfer
          </button>
          <button className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-50">
            🔊 Speaker
          </button>
          <button className="rounded-2xl bg-rose-600 px-4 py-3 text-sm font-semibold text-white hover:bg-rose-500">
            End Call
          </button>
        </div>
      </div>

      <div className="rounded-3xl border border-slate-200 bg-white p-6">
        <h2 className="mb-4 text-lg font-semibold text-slate-900">Contact Info</h2>
        <div className="space-y-2">
          <div className="flex justify-between border-b border-slate-100 py-2">
            <span className="text-sm text-slate-600">Number</span>
            <span className="font-medium text-slate-900">+1 234 567 8900</span>
          </div>
          <div className="flex justify-between border-b border-slate-100 py-2">
            <span className="text-sm text-slate-600">Name</span>
            <span className="font-medium text-slate-900">Jane Doe</span>
          </div>
          <div className="flex justify-between py-2">
            <span className="text-sm text-slate-600">Call Type</span>
            <span className="font-medium text-slate-900">Outbound</span>
          </div>
        </div>
      </div>

      <div className="rounded-3xl border border-slate-200 bg-white p-6">
        <h2 className="mb-4 text-lg font-semibold text-slate-900">Notes</h2>
        <textarea
          placeholder="Add call notes..."
          className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm focus:border-slate-900 focus:outline-none"
          rows={3}
        />
      </div>
    </div>
  );
}
