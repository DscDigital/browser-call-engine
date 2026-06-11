'use client';

import { useState } from 'react';

export default function WrapPage() {
  const [disposition, setDisposition] = useState('');
  const [notes, setNotes] = useState('');

  const dispositions = [
    'Connected – Interested',
    'Connected – Not Interested',
    'Connected – Callback Requested',
    'No Answer',
    'Busy',
    'Voicemail',
    'Wrong Number',
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-slate-900">Wrap Up</h1>
        <p className="text-sm text-slate-500">Log the outcome of your last call</p>
      </div>

      <div className="max-w-lg rounded-3xl border border-slate-200 bg-white p-6">
        <div className="rounded-2xl bg-slate-50 px-4 py-3">
          <p className="text-xs text-slate-500">Last call</p>
          <p className="font-medium text-slate-900">+1 234 567 8900 · Jane Doe</p>
          <p className="text-xs text-slate-500">Duration: 4:23</p>
        </div>

        <div className="mt-6 space-y-4">
          <div>
            <label className="block text-sm font-medium text-slate-700">Disposition</label>
            <select
              value={disposition}
              onChange={(e) => setDisposition(e.target.value)}
              className="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm focus:border-slate-900 focus:outline-none"
            >
              <option value="">Select an outcome...</option>
              {dispositions.map((d) => (
                <option key={d} value={d}>{d}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700">Notes</label>
            <textarea
              placeholder="Add notes about this call..."
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              rows={4}
              className="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm focus:border-slate-900 focus:outline-none"
            />
          </div>

          <div className="flex gap-3 pt-2">
            <button className="flex-1 rounded-2xl bg-slate-900 px-4 py-3 text-sm font-semibold text-white hover:bg-slate-800">
              Save &amp; Continue
            </button>
            <button className="flex-1 rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-50">
              Skip
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
