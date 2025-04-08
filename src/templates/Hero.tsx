import { buttonVariants } from '@/components/ui/buttonVariants';

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen py-24 bg-black text-white">
      <div className="container px-4 mx-auto max-w-7xl text-center">
        {/* Beta Badge */}
        <div className="inline-flex items-center px-3 py-1.5 mb-8 rounded-full bg-[#13161A] border border-[#2A2E33]">
          <div className="w-2 h-2 rounded-full bg-[#49E59A] mr-2"></div>
          <span className="text-sm text-[#49E59A]">Private Beta Now Available</span>
        </div>

        {/* Main Heading */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold leading-tight">
          <span className="text-[#49E59A]">Unlock</span> the Blockchain{' '}
          <br className="hidden sm:block" />
          <span className="text-[#49E59A]">Universe</span>
        </h1>

        {/* Subheading */}
        <p className="mt-8 text-lg sm:text-xl max-w-3xl mx-auto text-[#B0B0B0]">
          Redefining Web3 Oversight—Simplifying Complexity, Unlocking
          Insights. Enterprise-Grade Compliance Starts with Atlas.
        </p>

        {/* CTA Buttons */}
        <div className="mt-10 flex justify-center gap-4 flex-wrap">
          <a
            href="#apply"
            className="bg-[#49E59A] hover:bg-[#3dc88a] text-black font-medium px-8 py-4 rounded-lg transition"
          >
            Apply for Private Beta
          </a>
          <a
            href="#learn"
            className="bg-[#13161A] hover:bg-[#1a1e23] text-white font-medium px-8 py-4 rounded-lg transition border border-[#2A2E33]"
          >
            Learn More
          </a>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-20 text-left">
          <div className="bg-[#13161A] p-6 rounded-xl border border-[#2A2E33]">
            <div className="text-4xl font-bold text-[#49E59A]">1.2M+</div>
            <div className="mt-2 text-[#B0B0B0]">Transactions Processed in Private Beta</div>
          </div>
          <div className="bg-[#13161A] p-6 rounded-xl border border-[#2A2E33]">
            <div className="text-4xl font-bold text-[#49E59A]">850K+</div>
            <div className="mt-2 text-[#B0B0B0]">Blocks Analyzed in Private Beta</div>
          </div>
          <div className="bg-[#13161A] p-6 rounded-xl border border-[#2A2E33]">
            <div className="text-4xl font-bold text-[#49E59A]">30K+</div>
            <div className="mt-2 text-[#B0B0B0]">Wallets Monitored with Live Alerts</div>
          </div>
          <div className="bg-[#13161A] p-6 rounded-xl border border-[#2A2E33]">
            <div className="text-4xl font-bold text-[#49E59A]">50K+</div>
            <div className="mt-2 text-[#B0B0B0]">Smart Contract Events Parsed</div>
          </div>
          <div className="bg-[#13161A] p-6 rounded-xl border border-[#2A2E33]">
            <div className="text-4xl font-bold text-[#49E59A]">5+</div>
            <div className="mt-2 text-[#B0B0B0]">EVM-Compatible Blockchains</div>
          </div>
          <div className="bg-[#13161A] p-6 rounded-xl border border-[#2A2E33]">
            <div className="text-4xl font-bold text-[#49E59A]">2.5K+</div>
            <div className="mt-2 text-[#B0B0B0]">Dark Web Signals Tracked & Correlated</div>
          </div>
        </div>

        {/* Bottom Text */}
        <p className="mt-16 text-lg text-[#B0B0B0] max-w-4xl mx-auto">
          Atlas is not just another analytics tool — it's the infrastructure layer for the next era of blockchain legitimacy.
        </p>
      </div>
    </section>
  );
}
