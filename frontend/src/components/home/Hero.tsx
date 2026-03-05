import { Github, FileText } from "lucide-react";

export function Hero() {
  return (
    <section className="container mx-auto px-6 pt-20 pb-24 max-w-6xl">
      <div className="space-y-8">
        {/* Eyebrow — BitCommunity OS */}
        <div>
          <span className="font-mono text-xs uppercase tracking-widest text-text-muted">
            BitCommunity OS
          </span>
          <div className="mt-2 w-12 h-[1px] bg-btc-orange" />
        </div>

        {/* Main headline — terminal style */}
        <h1 className="font-mono text-5xl md:text-6xl lg:text-7xl tracking-tight leading-tight">
          <span className="block text-white">THE SOCIAL LAYER</span>
          <span className="block text-white">
            FOR BITCOIN
            <span className="text-btc-orange animate-pulse">_</span>
          </span>
        </h1>

        {/* Subheadline — sans-serif for readability */}
        <p className="font-sans text-lg md:text-xl text-text-muted max-w-3xl leading-relaxed">
          Non-custodial tipping, token gating, and governance for Stacks
          communities.
        </p>

        {/* CTA Buttons — command-line style */}
        <div className="flex flex-col sm:flex-row gap-4 pt-8">
          {/* Primary — filled orange, inverts on hover */}
          <a
            href="https://github.com/Joshuaosunlakin3433/bitcommunity-os"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-block px-6 py-4 bg-btc-orange border border-btc-orange hover:bg-transparent transition-all duration-200 cursor-pointer"
          >
            <div className="flex items-center justify-center gap-3 font-mono text-sm tracking-wider">
              <Github
                className="h-4 w-4 text-[#050505] group-hover:text-btc-orange"
                strokeWidth={2}
              />
              <span className="text-[#050505] group-hover:text-btc-orange uppercase">
                View Source on GitHub
              </span>
            </div>
          </a>

          {/* Secondary — outlined, orange border on hover */}
          <a
            href="https://github.com/Joshuaosunlakin3433/bitcommunity-os"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-block px-6 py-4 bg-transparent border border-border-subtle hover:border-btc-orange transition-all duration-200 cursor-pointer"
          >
            <div className="flex items-center gap-3 font-mono text-sm tracking-wider">
              <FileText
                className="h-4 w-4 text-text-muted group-hover:text-btc-orange"
                strokeWidth={2}
              />
              <span className="text-text-muted group-hover:text-white uppercase">
                Read the Docs
              </span>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
