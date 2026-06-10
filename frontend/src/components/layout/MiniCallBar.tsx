export default function MiniCallBar() {
  return (
    <div className="fixed bottom-16 left-0 right-0 z-30 mx-auto hidden max-w-7xl rounded-t-3xl border border-slate-200 bg-slate-950 px-4 py-3 text-white shadow-2xl md:flex md:items-center md:justify-between">
      <div className="min-w-0">
        <p className="text-sm font-semibold">Active call placeholder</p>
        <p className="text-xs text-slate-300">Call state will appear here during active sessions.</p>
      </div>

      <div className="flex items-center gap-2">
        <button className="rounded-2xl bg-slate-800 px-3 py-2 text-xs text-slate-100 hover:bg-slate-700">
          Mute
        </button>
        <button className="rounded-2xl bg-slate-800 px-3 py-2 text-xs text-slate-100 hover:bg-slate-700">
          Hold
        </button>
        <button className="rounded-2xl bg-rose-600 px-3 py-2 text-xs text-white hover:bg-rose-500">
          End
        </button>
      </div>
    </div>
  );
}
