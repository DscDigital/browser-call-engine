'use client';

import { useState } from 'react';

export default function HistoryPage() {
  const [searchQuery, setSearchQuery] = useState('');

  const mockHistory = [
    { id: 1, direction: 'Outbound', contact: '+1 234 567 8900', date: '11 Jun 14:30', duration: '4:23', status: 'Completed' },
    { id: 2, direction: 'Inbound', contact: 'Jane Doe', date: '11 Jun 14:12', duration: '2:15', status: 'Completed' },
    { id: 3, direction: 'Outbound', contact: '+1 555 123 4567', date: '11 Jun 13:45', duration: '0:00', status: 'Missed' },
    { id: 4, direction: 'Inbound', contact: '+1 999 888 7777', date: '11 Jun 11:20', duration: '8:42', status: 'Completed' },
    { id: 5, direction: 'Outbound', contact: 'Bob Smith', date: '10 Jun 16:30', duration: '3:10', status: 'Completed' },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-slate-900">Call History</h1>
        <p className="text-sm text-slate-500">View and manage your call records</p>
      </div>

      <div className="rounded-3xl border border-slate-200 bg-white p-6">
        <div className="mb-4 space-y-3">
          <input
            type="text"
            placeholder="Search by name or number..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm focus:border-slate-900 focus:outline-none"
          />
          <div className="flex flex-wrap gap-2">
            {['All', 'Inbound', 'Outbound', 'Missed'].map((filter) => (
              <button
                key={filter}
                className="rounded-2xl border border-slate-200 bg-white px-3 py-2 text-xs font-medium text-slate-600 hover:bg-slate-50"
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="overflow-x-auto rounded-3xl border border-slate-200 bg-white">
        <table className="w-full">
          <thead>
            <tr className="border-b border-slate-200 bg-slate-50">
              <th className="px-6 py-4 text-left text-xs font-semibold text-slate-600">Type</th>
              <th className="px-6 py-4 text-left text-xs font-semibold text-slate-600">Contact</th>
              <th className="px-6 py-4 text-left text-xs font-semibold text-slate-600">Date & Time</th>
              <th className="px-6 py-4 text-left text-xs font-semibold text-slate-600">Duration</th>
              <th className="px-6 py-4 text-left text-xs font-semibold text-slate-600">Status</th>
              <th className="px-6 py-4 text-left text-xs font-semibold text-slate-600">Action</th>
            </tr>
          </thead>
          <tbody>
            {mockHistory.map((record) => (
              <tr key={record.id} className="border-t border-slate-100 hover:bg-slate-50">
                <td className="px-6 py-4">
                  <span className={`inline-block h-2 w-2 rounded-full ${record.direction === 'Inbound' ? 'bg-blue-500' : 'bg-slate-400'}`} />
                </td>
                <td className="px-6 py-4 text-sm font-medium text-slate-900">{record.contact}</td>
                <td className="px-6 py-4 text-sm text-slate-600">{record.date}</td>
                <td className="px-6 py-4 text-sm text-slate-600">{record.duration}</td>
                <td className="px-6 py-4">
                  <span className={`inline-block rounded-full px-2 py-1 text-xs font-medium ${record.status === 'Completed' ? 'bg-emerald-100 text-emerald-700' : 'bg-slate-100 text-slate-600'}`}>
                    {record.status}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <button className="text-xs font-semibold text-slate-600 hover:text-slate-900">View</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
