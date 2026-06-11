'use client';

export default function DialpadPage() {
  const dialPad = [
    ['1', '2', '3'],
    ['4', '5', '6'],
    ['7', '8', '9'],
    ['*', '0', '#'],
  ];

  const recentContacts = [
    { name: '+1 234 567 8900', time: '14:30' },
    { name: 'Jane Doe', time: '14:12' },
    { name: '+1 555 123 4567', time: '13:45' },
  ];

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-slate-900">Dialpad</h1>

      <div className="max-w-md rounded-3xl border border-slate-200 bg-white p-6">
        <div className="mb-6 rounded-2xl bg-slate-50 p-4">
          <input
            type="text"
            placeholder="Enter number"
            defaultValue="+1 234 567 890"
            className="w-full bg-transparent text-center text-2xl font-bold text-slate-900 placeholder-slate-400 focus:outline-none"
          />
        </div>

        <div className="mb-6 grid grid-cols-3 gap-3">
          {dialPad.map((row) =>
            row.map((key) => (
              <button
                key={key}
                className="aspect-square rounded-2xl border border-slate-200 bg-white text-xl font-semibold text-slate-900 hover:bg-slate-50 active:bg-slate-100"
              >
                {key}
              </button>
            ))
          )}
        </div>

        <div className="mb-6 grid grid-cols-3 gap-3">
          <button className="rounded-2xl bg-white px-4 py-3 text-sm font-semibold text-slate-900 border border-slate-200 hover:bg-slate-50">
            Clear
          </button>
          <button className="rounded-2xl bg-white px-4 py-3 text-sm font-semibold text-slate-900 border border-slate-200 hover:bg-slate-50">
            ← Backspace
          </button>
          <button className="rounded-2xl bg-emerald-600 px-4 py-3 text-sm font-semibold text-white hover:bg-emerald-500">
            Call
          </button>
        </div>
      </div>

      <div className="rounded-3xl border border-slate-200 bg-white p-6">
        <h2 className="mb-4 text-lg font-semibold text-slate-900">Recent Contacts</h2>
        <div className="space-y-2">
          {recentContacts.map((contact, i) => (
            <div key={i} className="flex items-center justify-between rounded-2xl border border-slate-100 px-4 py-3 hover:bg-slate-50">
              <div>
                <p className="font-medium text-slate-900">{contact.name}</p>
                <p className="text-xs text-slate-500">{contact.time}</p>
              </div>
              <button className="rounded-2xl bg-emerald-600 px-3 py-2 text-xs font-semibold text-white hover:bg-emerald-500">
                Call
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
