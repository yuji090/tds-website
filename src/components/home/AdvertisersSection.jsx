function AdvertisersSection() {
  const capabilities = [
    {
      number: "01",
      title: "Reach the right users",
      text: "Access performance-driven traffic partners across relevant channels and markets.",
    },
    {
      number: "02",
      title: "Pay for performance",
      text: "Build campaigns around measurable actions such as installs, leads, signups and sales.",
    },
    {
      number: "03",
      title: "Track every step",
      text: "Monitor campaign performance, conversions and traffic quality through reliable tracking.",
    },
    {
      number: "04",
      title: "Scale what works",
      text: "Optimize campaigns around performance and scale the sources delivering quality results.",
    },
  ];

  return (
    <section
      id="advertisers"
      className="h-[100svh] min-h-[700px] overflow-hidden bg-[#071A35]"
    >
      <div className="mx-auto flex h-full max-w-7xl items-center px-6 py-10 lg:px-8">

        <div className="grid w-full items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">

          {/* ========================= */}
          {/* LEFT CONTENT */}
          {/* ========================= */}

          <div>

            <p className="mb-5 text-[10px] font-semibold uppercase tracking-[0.28em] text-[#6DB7FF]">
              For Advertisers
            </p>

            <h2 className="max-w-xl text-5xl font-bold leading-[0.98] tracking-[-0.045em] text-white sm:text-6xl lg:text-[68px]">
              Turn your
              <br />
              budget into
              <br />
              <span className="text-[#6DB7FF]">
                real growth.
              </span>
            </h2>

            <p className="mt-7 max-w-lg text-sm leading-7 text-white/60 sm:text-base">
              Launch performance campaigns with the right traffic partners,
              track meaningful actions, and scale the channels that deliver
              measurable results.
            </p>

            <a
              href="#contact"
              className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#1261F2] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-[#0d4fd1]"
            >
              Talk to our team
              <span className="text-base">→</span>
            </a>

          </div>

          {/* ========================= */}
          {/* RIGHT PERFORMANCE PANEL */}
          {/* ========================= */}

          <div className="relative">

            {/* Decorative rings */}
            <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full border border-white/[0.06]" />
            <div className="pointer-events-none absolute -bottom-20 -left-20 h-64 w-64 rounded-full border border-white/[0.05]" />

            <div className="relative overflow-hidden border border-white/10 bg-white/[0.035]">

              {/* Panel header */}
              <div className="flex items-center justify-between border-b border-white/10 px-6 py-5">

                <div>
                  <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[#6DB7FF]">
                    Performance Framework
                  </p>

                  <p className="mt-1 text-sm font-semibold text-white">
                    Built around your growth goals
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-[#6DB7FF]" />
                  <span className="text-[9px] font-medium uppercase tracking-[0.15em] text-white/40">
                    Live
                  </span>
                </div>

              </div>

              {/* Capabilities */}
              <div className="divide-y divide-white/10">

                {capabilities.map((item) => (
                  <div
                    key={item.number}
                    className="group flex gap-5 px-6 py-6 transition hover:bg-white/[0.035]"
                  >

                    <span className="pt-1 text-[10px] font-semibold text-[#6DB7FF]">
                      {item.number}
                    </span>

                    <div className="flex-1">

                      <div className="flex items-center justify-between gap-4">

                        <h3 className="text-base font-semibold tracking-tight text-white">
                          {item.title}
                        </h3>

                        <span className="text-white/20 transition duration-300 group-hover:translate-x-1 group-hover:text-[#6DB7FF]">
                          ↗
                        </span>

                      </div>

                      <p className="mt-2 max-w-lg text-xs leading-6 text-white/45">
                        {item.text}
                      </p>

                    </div>

                  </div>
                ))}

              </div>

              {/* Bottom strip */}
              <div className="border-t border-white/10 bg-white/[0.025] px-6 py-5">

                <div className="flex flex-wrap items-center gap-x-7 gap-y-3">

                  <span className="text-[9px] font-semibold uppercase tracking-[0.16em] text-white/35">
                    Performance Models
                  </span>

                  {["CPI", "CPA", "CPL", "CPS"].map((model) => (
                    <span
                      key={model}
                      className="text-xs font-semibold text-[#6DB7FF]"
                    >
                      {model}
                    </span>
                  ))}

                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default AdvertisersSection;