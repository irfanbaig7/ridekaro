const navItems = ["Ride", "Drive", "About"];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#050505] text-white">
      {/* Navbar */}
      <nav className="flex items-center justify-between px-6 py-6 md:px-10">
        <div className="text-xl font-semibold tracking-tight">
          Ride<span className="text-[#ff4d2e]">Booky</span>
        </div>

        <div className="hidden items-center gap-8 text-sm text-white/60 md:flex">
          {navItems.map((item) => (
            <a
              key={item}
              href="#"
              className="transition-colors hover:text-white"
            >
              {item}
            </a>
          ))}
        </div>

        <button className="rounded-full border border-white/15 px-5 py-2.5 text-sm transition hover:border-[#ff4d2e] hover:text-[#ff4d2e]">
          Get Started
        </button>
      </nav>

      {/* Hero */}
      <section className="relative flex min-h-[calc(100vh-90px)] items-center overflow-hidden px-6 md:px-10">
        {/* Ambient glow */}
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-100 w-100 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#ff4d2e]/10 blur-[120px]" />

        <div className="relative z-10 mx-auto w-full max-w-7xl">
          <p className="mb-6 text-xs uppercase tracking-[0.35em] text-[#ff4d2e]">
            Move differently
          </p>

          <h1 className="max-w-5xl text-5xl font-medium leading-[0.95] tracking-[-0.04em] md:text-7xl lg:text-9xl">
            Your journey.
            <br />
            <span className="text-white/40">Reimagined.</span>
          </h1>

          <div className="mt-10 flex flex-col gap-6 md:flex-row md:items-center">
            <p className="max-w-md text-sm leading-6 text-white/50 md:text-base">
              One intelligent platform connecting riders and drivers in real
              time.
            </p>

            <button className="w-fit rounded-full bg-[#ff4d2e] px-7 py-3.5 text-sm font-medium text-white transition-transform hover:scale-105">
              Book a Ride →
            </button>
          </div>
        </div>
        
      </section>
    </main>
  );
}