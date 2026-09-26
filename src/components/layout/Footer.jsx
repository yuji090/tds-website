function Footer() {
  return (
    <footer className="bg-[#06152B] text-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Main Footer */}
        <div className="grid gap-12 py-14 md:grid-cols-[1.5fr_1fr_1fr_1fr] lg:py-16">
          {/* Brand */}
          <div>
            <div className="text-3xl font-black tracking-[-0.08em]">
              TD<span className="text-[#6DB7FF]">S</span>
            </div>

            <p className="mt-4 max-w-xs text-sm leading-6 text-white/40">
              Performance marketing built around measurable outcomes,
              quality partnerships and sustainable growth.
            </p>

            <p className="mt-7 text-[9px] font-semibold uppercase tracking-[0.2em] text-white/25">
              Think Beyond The Wave
            </p>
          </div>

          {/* Explore */}
          <div>
            <p className="mb-5 text-[9px] font-semibold uppercase tracking-[0.2em] text-[#6DB7FF]">
              Explore
            </p>

            <nav className="flex flex-col gap-3">
              <a
                href="#solutions"
                className="w-fit text-sm text-white/55 transition hover:text-white"
              >
                Solutions
              </a>

              <a
                href="#advertisers"
                className="w-fit text-sm text-white/55 transition hover:text-white"
              >
                Advertisers
              </a>

              <a
                href="#publishers"
                className="w-fit text-sm text-white/55 transition hover:text-white"
              >
                Publishers
              </a>

              <a
                href="#why-tds"
                className="w-fit text-sm text-white/55 transition hover:text-white"
              >
                Why TDS
              </a>

              <a
                href="#insights"
                className="w-fit text-sm text-white/55 transition hover:text-white"
              >
                Insights
              </a>
            </nav>
          </div>

          {/* Solutions */}
          <div>
            <p className="mb-5 text-[9px] font-semibold uppercase tracking-[0.2em] text-[#6DB7FF]">
              Solutions
            </p>

            <nav className="flex flex-col gap-3">
              <a
                href="#solutions"
                className="w-fit text-sm text-white/55 transition hover:text-white"
              >
                Mobile
              </a>

              <a
                href="#solutions"
                className="w-fit text-sm text-white/55 transition hover:text-white"
              >
                Display
              </a>

              <a
                href="#solutions"
                className="w-fit text-sm text-white/55 transition hover:text-white"
              >
                Performance
              </a>

              <a
                href="#solutions"
                className="w-fit text-sm text-white/55 transition hover:text-white"
              >
                Partner
              </a>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <p className="mb-5 text-[9px] font-semibold uppercase tracking-[0.2em] text-[#6DB7FF]">
              Contact
            </p>

            <div className="flex flex-col gap-3">
              <a
                href="mailto:hello@thedigitalsole.com"
                className="w-fit text-sm text-white/55 transition hover:text-white"
              >
                hello@thedigitalsole.com
              </a>

              <a
                href="#contact"
                className="mt-2 inline-flex w-fit items-center gap-2 rounded-full bg-[#1261F2] px-5 py-2.5 text-xs font-semibold text-white transition hover:bg-[#0d4fd1]"
              >
                Get in touch
                <span>→</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col gap-4 border-t border-white/10 py-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[9px] font-medium uppercase tracking-[0.15em] text-white/25">
            © {new Date().getFullYear()} The Digital Sole. All rights reserved.
          </p>

          <div className="flex gap-6">
            <a
              href="#"
              className="text-[9px] font-medium uppercase tracking-[0.15em] text-white/30 transition hover:text-white/70"
            >
              Privacy Policy
            </a>

            <a
              href="#"
              className="text-[9px] font-medium uppercase tracking-[0.15em] text-white/30 transition hover:text-white/70"
            >
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;