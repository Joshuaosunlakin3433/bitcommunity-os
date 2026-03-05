import { Layers } from "lucide-react";

export function Footer() {
  return (
    <footer className="container mx-auto px-6 py-12 max-w-6xl">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        {/* "Built on Stacks" */}
        <div className="flex items-center gap-3 text-text-dim">
          <span className="font-mono text-xs uppercase tracking-widest">
            Built on
          </span>
          <div className="flex items-center gap-2">
            {/* Stacks logo */}
            <Layers className="h-4 w-4 text-btc-orange" strokeWidth={1.5} />
            <span className="font-mono text-xs uppercase tracking-wider text-text-muted">
              Stacks
            </span>
          </div>
        </div>

        {/* Copyright */}
        <span className="font-mono text-xs text-text-dim tracking-wider">
          © {new Date().getFullYear()} BitCommunity OS
        </span>
      </div>
    </footer>
  );
}
