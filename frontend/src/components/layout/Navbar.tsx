export function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border-subtle bg-[#050505]/95">
      <div className="container mx-auto flex items-center justify-between px-6 py-4 max-w-5xl">
        {/* Logo — left aligned */}
        <div className="flex items-center gap-3">
          {/* Solid orange square logo mark */}
          <div className="h-3 w-3 bg-btc-orange" />
          <span className="font-mono text-sm uppercase tracking-widest text-white">
            BitCommunity OS
          </span>
        </div>

        {/* Architecture: Ready badge — right aligned */}
        <div className="inline-flex items-center gap-3 border border-border-subtle bg-surface px-4 py-2">
          {/* Status dot */}
          <div className="h-2 w-2 bg-btc-orange rounded-full" />

          <div className="flex items-center gap-2">
            <span className="font-mono text-xs uppercase tracking-wider text-white">
              Architecture
            </span>
            <span className="text-text-dim">:</span>
            <span className="font-mono text-xs uppercase tracking-wider text-text-muted">
              Ready
            </span>
          </div>
        </div>
      </div>
    </nav>
  );
}
