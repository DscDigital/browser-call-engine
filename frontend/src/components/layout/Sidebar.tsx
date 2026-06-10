export default function Sidebar() {
  return (
    <aside className="hidden md:flex md:w-72 md:flex-col md:border-r md:border-slate-200 md:bg-slate-50 md:pt-6">
      <div className="flex flex-col gap-6 px-4">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-slate-500">Navigation</p>
        </div>
        <nav className="space-y-2">
          {['Dashboard', 'Dialpad', 'History', 'Settings'].map((item) => (
            <button
              key={item}
              type="button"
              className="flex w-full items-center rounded-2xl px-4 py-3 text-left text-sm font-medium text-slate-700 transition hover:bg-white hover:text-slate-900"
            >
              {item}
            </button>
          ))}
        </nav>
      </div>
    </aside>
  );
}
