export default function BottomNav() {
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-30 flex items-center justify-between border-t border-slate-200 bg-white px-4 py-2 shadow-sm md:hidden">
      {['Dash', 'Dial', 'Hist', 'Set'].map((label) => (
        <button
          key={label}
          type="button"
          className="flex-1 rounded-2xl bg-slate-100 px-3 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-200"
        >
          {label}
        </button>
      ))}
    </nav>
  );
}
