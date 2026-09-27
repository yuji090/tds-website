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
      className="bg-[#071A35] text-white"
    >
      <div className="mx-auto flex min-h-[100svh] max-w-7xl items-center px-6 py-20 sm:px-8 sm:py-24 lg:px-8 lg:py-20">

        <div className="grid w-full items-center gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">

          {/* ================================================= */}
          {/* LEFT — ADVERTISER CONTENT */}
          {/* ================================================= */}

          <div>

            <p className="mb-7 text-4xl font-bold leading-none tracking-[-0.04em] text-[#6DB7FF] sm:text-5xl lg:text-6xl">
  For Advertisers
</p>

<h2 className="max-w-xl text-4xl font-bold leading-[0.98] tracking-[-0.045em] text-white sm:text-5xl lg:text-[56px]">
  Turn your
  <br />
  budget into
  <br />
  <span className="text-[#6DB7FF]">
    real growth.
  </span>
</h2>

            <p className="mt-7 max-w-xl text-base leading-7 text-white/60 sm:mt-8 sm:text-lg sm:leading-8">
              Launch performance campaigns with the right traffic partners,
              track meaningful actions, and scale the channels that deliver
              measurable results.
            </p>

            <a
              href="#contact"
              className="
                mt-8
                inline-flex
                items-center
                gap-3
                rounded-full
                bg-[#1261F2]
                px-6
                py-3.5
                text-sm
                font-semibold
                text-white
                transition
                duration-300
                hover:bg-[#0d4fd1]
                sm:mt-9
                sm:px-7
                sm:py-4
              "
            >
              Talk to our team
              <span className="text-base">
                →
              </span>
            </a>

          </div>

          {/* ================================================= */}
          {/* RIGHT — PERFORMANCE FRAMEWORK */}
          {/* ================================================= */}

          <div className="relative">

            {/* Decorative circles */}
            <div className="pointer-events-none absolute -right-16 -top-16 hidden h-64 w-64 rounded-full border border-white/[0.06] sm:block lg:-right-20 lg:-top-20 lg:h-72 lg:w-72" />

            <div className="pointer-events-none absolute -bottom-16 -left-16 hidden h-56 w-56 rounded-full border border-white/[0.05] sm:block lg:-bottom-20 lg:-left-20 lg:h-64 lg:w-64" />

            <div className="relative border border-white/10 bg-white/[0.025]">

              {/* Header */}
              <div className="flex items-start justify-between border-b border-white/10 px-5 py-5 sm:px-6 sm:py-6">

                <div>
                  <p className="text-[9px] font-semibold uppercase tracking-[0.22em] text-[#6DB7FF] sm:text-[10px]">
                    Performance Framework
                  </p>

                  <h3 className="mt-1.5 text-base font-semibold text-white sm:text-xl">
                    Built around your growth goals
                  </h3>
                </div>

                <span className="hidden text-[9px] font-medium uppercase tracking-[0.16em] text-white/30 sm:block">
                  TDS
                </span>

              </div>

              {/* Capabilities */}
              <div className="divide-y divide-white/10">

                {capabilities.map((item) => (
                  <div
                    key={item.number}
                    className="
                      group
                      grid
                      grid-cols-[32px_1fr_auto]
                      gap-3
                      px-5
                      py-5
                      transition
                      duration-300
                      hover:bg-white/[0.035]
                      sm:grid-cols-[42px_1fr_auto]
                      sm:gap-5
                      sm:px-6
                      sm:py-6
                    "
                  >

                    <span className="pt-0.5 text-[10px] font-semibold text-[#6DB7FF] sm:text-xs">
                      {item.number}
                    </span>

                    <div>

                      <h4 className="text-sm font-semibold text-white sm:text-base">
                        {item.title}
                      </h4>

                      <p className="mt-1.5 max-w-xl text-xs leading-5 text-white/45 sm:mt-2 sm:text-sm sm:leading-6">
                        {item.text}
                      </p>

                    </div>

                    <span className="pt-0.5 text-sm text-white/20 transition duration-300 group-hover:translate-x-1 group-hover:text-[#6DB7FF] sm:text-lg">
                      ↗
                    </span>

                  </div>
                ))}

              </div>

              {/* Performance Models */}
              <div className="flex flex-wrap items-center gap-x-5 gap-y-3 border-t border-white/10 px-5 py-5 sm:gap-x-7 sm:px-6">

                <span className="text-[9px] font-semibold uppercase tracking-[0.16em] text-white/30 sm:text-[10px]">
                  Performance models
                </span>

                {["CPI", "CPA", "CPL", "CPS"].map((model) => (
                  <span
                    key={model}
                    className="text-xs font-semibold text-[#6DB7FF] sm:text-sm"
                  >
                    {model}
                  </span>
                ))}

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default AdvertisersSection;