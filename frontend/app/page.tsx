import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-black text-white p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-800 bg-black pb-6 pt-8 backdrop-blur-2xl lg:static lg:w-auto lg:rounded-xl lg:border lg:bg-gray-900 lg:p-4">
          BitCommunity OS&nbsp;
          <code className="font-bold">v0.1.0</code>
        </p>
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-black via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="https://stacks.co"
            target="_blank"
            rel="noopener noreferrer"
          >
            Built on Stacks 🧡
          </a>
        </div>
      </div>

      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-to-br before:from-orange-500 before:to-transparent before:opacity-10 before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-to-t after:from-orange-200 after:to-transparent after:opacity-10 after:blur-2xl after:content-[''] z-[-1]">
        <h1 className="text-6xl font-bold tracking-tighter text-center">
          BitCommunity <span className="text-orange-500">OS</span>
        </h1>
      </div>

      <p className="mt-4 text-xl text-gray-400 max-w-2xl text-center">
        The non-custodial Social-Fi layer for the Bitcoin Ecosystem. 
        Tipping, Token Gating, and Governance for Discord & Telegram.
      </p>

      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-3 lg:text-left mt-16 gap-4">
        <div className="group rounded-lg border border-gray-800 px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-900 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Non-Custodial{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Powered by Clarity Smart Contracts. We never hold your keys.
          </p>
        </div>

        <div className="group rounded-lg border border-gray-800 px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-900 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
          <h2 className={`mb-3 text-2xl font-semibold`}>
            sBTC Ready{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Native support for SIP-010 tokens and Bitcoin L2 assets.
          </p>
        </div>

        <div className="group rounded-lg border border-gray-800 px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-900 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Real-Time{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Instant event streaming via Hiro Chainhook.
          </p>
        </div>
      </div>

      <div className="mt-16">
        <a
          href="https://github.com/YOUR_USERNAME/bitcommunity-os" 
          target="_blank"
          className="bg-white text-black px-8 py-4 rounded-full font-bold hover:bg-gray-200 transition"
        >
          View Source Code
        </a>
      </div>
    </main>
  );
}