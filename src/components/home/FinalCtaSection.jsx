function FinalCtaSection() {
  return (
    <section
      id="contact"
      className="relative h-[100svh] min-h-[650px] overflow-hidden bg-[#071A35]"
    >
      {/* Subtle background lines */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.05]" />
        <div className="absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.05]" />
        <div className="absolute left-1/2 top-1/2 h-[240px] w-[240px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#6DB7FF]/10" />
      </div>

      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col justify-center px-6 py-10 lg:px-8">
        <div className="text-center">
          <p className="mb-6 text-[10px] font-semibold uppercase tracking-[0.3em] text-[#6DB7FF]">
            Let&apos;s Work Together
          </p>

          <h2 className="mx-auto max-w-5xl text-5xl font-bold leading-[0.95] tracking-[-0.05em] text-white sm:text-6xl lg:text-[86px]">
            Ready to turn
            <br />
            <span className="text-[#6DB7FF]">performance</span> into growth?
          </h2>

          <p className="mx-auto mt-7 max-w-xl text-sm leading-7 text-white/50 sm:text-base">
            Whether you&apos;re looking to scale your campaigns or monetize
            your traffic, let&apos;s build something that performs.
          </p>

          <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
            <a
              href="mailto:hello@thedigitalsole.com"
              className="group inline-flex items-center gap-3 rounded-full bg-[#1261F2] px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-950/30 transition duration-300 hover:bg-[#0d4fd1]"
            >
              Talk to our team
              <span className="transition duration-300 group-hover:translate-x-1">
                →
              </span>
            </a>

            <a
              href="#advertisers"
              className="inline-flex items-center rounded-full border border-white/20 bg-white/[0.06] px-7 py-3.5 text-sm font-semibold text-white transition duration-300 hover:border-white/35 hover:bg-white/10"
            >
              Explore solutions
            </a>
          </div>
        </div>

        {/* Bottom information */}
        <div className="absolute bottom-8 left-6 right-6 border-t border-white/10 pt-5 lg:left-8 lg:right-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-white/30">
              The Digital Sole
            </p>

            <div className="flex flex-wrap justify-center gap-x-7 gap-y-2 sm:justify-end">
              <span className="text-[9px] font-medium uppercase tracking-[0.15em] text-white/35">
                Performance Marketing
              </span>

              <span className="text-[9px] font-medium uppercase tracking-[0.15em] text-white/35">
                Mobile
              </span>

              <span className="text-[9px] font-medium uppercase tracking-[0.15em] text-white/35">
                Display
              </span>

              <span className="text-[9px] font-medium uppercase tracking-[0.15em] text-white/35">
                Affiliate
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FinalCtaSection;