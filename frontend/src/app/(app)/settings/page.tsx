'use client';

export default function SettingsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-slate-900">Settings</h1>
        <p className="text-sm text-slate-500">Manage your preferences and configuration</p>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-3xl border border-slate-200 bg-white p-6">
          <h2 className="mb-6 text-lg font-semibold text-slate-900">Profile</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-700">Name</label>
              <input
                type="text"
                defaultValue="John Doe"
                className="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm focus:border-slate-900 focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700">Email</label>
              <input
                type="email"
                defaultValue="john@example.com"
                className="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm focus:border-slate-900 focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700">Role</label>
              <select className="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm focus:border-slate-900 focus:outline-none">
                <option>Telecaller</option>
                <option>Team Lead</option>
                <option>Manager</option>
              </select>
            </div>
          </div>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white p-6">
          <h2 className="mb-6 text-lg font-semibold text-slate-900">Audio Devices</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-700">Microphone</label>
              <select className="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm focus:border-slate-900 focus:outline-none">
                <option>Built-in Microphone</option>
                <option>USB Headset</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700">Speaker</label>
              <select className="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm focus:border-slate-900 focus:outline-none">
                <option>Built-in Speaker</option>
                <option>USB Headset</option>
              </select>
            </div>
            <button className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-50">
              🔊 Test Audio
            </button>
          </div>
        </div>
      </div>

      <div className="rounded-3xl border border-slate-200 bg-white p-6">
        <h2 className="mb-6 text-lg font-semibold text-slate-900">SIP Configuration</h2>
        <div className="space-y-4">
          <div className="rounded-2xl bg-emerald-50 p-4">
            <p className="text-sm font-medium text-emerald-700">✓ SIP Registered</p>
            <p className="text-xs text-emerald-600 mt-1">Connected to ws://sip.example.com</p>
          </div>
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-slate-600">SIP User</span>
              <span className="font-medium text-slate-900">john.doe@example.com</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-slate-600">Server</span>
              <span className="font-medium text-slate-900">ws://sip.example.com</span>
            </div>
          </div>
        </div>
      </div>

      <div className="rounded-3xl border border-slate-200 bg-white p-6">
        <h2 className="mb-6 text-lg font-semibold text-slate-900">Preferences</h2>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-slate-900">Dark Mode</span>
            <button className="rounded-full bg-slate-200 p-1 hover:bg-slate-300">
              <div className="h-5 w-9 rounded-full bg-white shadow" />
            </button>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-slate-900">Desktop Notifications</span>
            <button className="rounded-full bg-slate-200 p-1 hover:bg-slate-300">
              <div className="h-5 w-9 rounded-full bg-white shadow" />
            </button>
          </div>
        </div>
      </div>

      <div className="flex gap-3">
        <button className="flex-1 rounded-2xl bg-slate-900 px-4 py-3 text-sm font-semibold text-white hover:bg-slate-800">
          Save Changes
        </button>
        <button className="flex-1 rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-50">
          Sign Out
        </button>
      </div>
    </div>
  );
}
