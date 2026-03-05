import { Shield, Layers, Zap, type LucideIcon } from "lucide-react";

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    icon: Shield,
    title: "Non-Custodial",
    description: "Powered by Clarity Smart Contracts. We never hold your keys.",
  },
  {
    icon: Layers,
    title: "Multi-Asset Support",
    description:
      "Send Native STX, sBTC, and any SIP-010 token directly in chat.",
  },
  {
    icon: Zap,
    title: "Instant Finality",
    description:
      "Real-time event streaming via Chainhook for 5-second settlement.",
  },
];

/* ------------------------------------------------------------------ */
/*  Feature Card                                                       */
/* ------------------------------------------------------------------ */

function FeatureCard({ icon: Icon, title, description }: Feature) {
  return (
    <div
      className={[
        "relative bg-surface border border-border-subtle p-8 cursor-pointer",
        "transition-all duration-300",
        "hover:border-orange-500",
        "hover:shadow-[0_0_20px_rgba(249,115,22,0.3)]",
        "hover:scale-[1.03]",
      ].join(" ")}
    >
      {/* Icon container — sharp, minimal */}
      <div className="mb-6 w-12 h-12 border border-border-subtle flex items-center justify-center transition-colors duration-300">
        <Icon className="h-6 w-6 text-btc-orange" strokeWidth={1.5} />
      </div>

      {/* Title — monospace */}
      <h3 className="font-mono text-sm uppercase tracking-widest mb-3 text-white">
        {title}
      </h3>

      {/* Description — sans-serif */}
      <p className="font-sans text-sm text-text-muted leading-relaxed">
        {description}
      </p>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Features Section                                                   */
/* ------------------------------------------------------------------ */

export function Features() {
  return (
    <section className="container mx-auto px-6 py-24 max-w-6xl">
      {/* Section header */}
      <div className="mb-12">
        <h2 className="font-mono text-xs uppercase tracking-widest text-text-muted mb-2">
          Core Infrastructure
        </h2>
        <div className="w-12 h-[1px] bg-btc-orange" />
      </div>

      {/* Card grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {features.map((feature) => (
          <FeatureCard key={feature.title} {...feature} />
        ))}
      </div>
    </section>
  );
}
