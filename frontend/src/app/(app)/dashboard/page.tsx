'use client';

export default function DashboardPage() {
  const mockStats = [
    { label: 'Total Calls Today', value: '42', icon: '☎️' },
    { label: 'Avg Duration', value: '4:23', icon: '⏱️' },
    { label: 'Completion Rate', value: '89%', icon: '✓' },
  ];

  const recentCalls = [
    { time: '14:30', contact: '+1 234 567 8900', type: 'Outbound', status: 'Completed' },
    { time: '14:12', contact: 'Jane Doe', type: 'Inbound', status: 'Completed' },
    { time: '13:45', contact: '+1 555 123 4567', type: 'Outbound', status: 'Missed' },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-slate-900">Welcome Back</h1>
        <p className="text-sm text-slate-500">Tuesday, June 11 • Agent: John Doe</p>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        {mockStats.map((stat) => (
          <div key={stat.label} className="rounded-3xl border border-slate-200 bg-white p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs text-slate-500">{stat.label}</p>
                <p className="mt-2 text-2xl font-bold text-slate-900">{stat.value}</p>
              </div>
              <span className="text-3xl">{stat.icon}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <div className="rounded-3xl border border-slate-200 bg-white p-6">
          <h2 className="mb-4 text-lg font-semibold text-slate-900">Agent Status</h2>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm text-slate-600">Status</span>
              <span className="inline-block rounded-full bg-emerald-100 px-3 py-1 text-xs font-medium text-emerald-700">
                Available
              </span>
            </div>
            <button className="w-full rounded-2xl bg-emerald-600 px-4 py-3 text-sm font-semibold text-white hover:bg-emerald-500">
              Mark as Available
            </button>
          </div>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white p-6">
          <h2 className="mb-4 text-lg font-semibold text-slate-900">Quick Actions</h2>
          <div className="space-y-3">
            <button className="w-full rounded-2xl bg-slate-900 px-4 py-3 text-sm font-semibold text-white hover:bg-slate-800">
              New Call
            </button>
            <button className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-50">
              View History
            </button>
          </div>
        </div>
      </div>

      <div className="rounded-3xl border border-slate-200 bg-white p-6">
        <h2 className="mb-4 text-lg font-semibold text-slate-900">Recent Calls</h2>
        <div className="space-y-3">
          {recentCalls.map((call, i) => (
            <div key={i} className="flex items-center justify-between border-t border-slate-100 py-3 first:border-t-0 first:pt-0">
              <div className="min-w-0 flex-1">
                <p className="font-medium text-slate-900">{call.contact}</p>
                <p className="text-xs text-slate-500">{call.time} • {call.type}</p>
              </div>
              <span className={`rounded-full px-2 py-1 text-xs font-medium ${call.status === 'Completed' ? 'bg-emerald-100 text-emerald-700' : 'bg-slate-100 text-slate-600'}`}>
                {call.status}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
