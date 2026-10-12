function PublishersSection() {
  const benefits = [
    {
      number: "01",
      title: "Access quality campaigns",
      text: "Connect with performance campaigns across mobile, finance, e-commerce, utility and other active verticals.",
    },
    {
      number: "02",
      title: "Work with flexible models",
      text: "Run campaigns across CPI, CPA, CPL and other performance-based commercial models.",
    },
    {
      number: "03",
      title: "Track your performance",
      text: "Get transparent campaign tracking and clear visibility into clicks, conversions and performance.",
    },
    {
      number: "04",
      title: "Scale your traffic",
      text: "Find campaigns that fit your audience and scale the traffic sources that consistently perform.",
    },
  ];

  return (
    <section
      id="publishers"
      className="bg-white text-[#071A35]"
    >
      <div className="mx-auto flex min-h-[100svh] max-w-7xl items-center px-6 py-20 sm:px-8 sm:py-24 lg:px-8 lg:py-20">

        <div className="grid w-full items-center gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:gap-20">

          {/* ================================================= */}
          {/* LEFT — PUBLISHER FRAMEWORK */}
          {/* ================================================= */}

          <div className="relative">

            {/* Decorative circles */}
            <div className="pointer-events-none absolute -left-16 -top-16 hidden h-64 w-64 rounded-full border border-[#1261F2]/[0.06] sm:block lg:-left-20 lg:-top-20 lg:h-72 lg:w-72" />

            <div className="pointer-events-none absolute -bottom-16 -right-16 hidden h-56 w-56 rounded-full border border-[#1261F2]/[0.05] sm:block lg:-bottom-20 lg:-right-20 lg:h-64 lg:w-64" />

            <div className="relative border border-slate-200 bg-slate-50">

              {/* Header */}
              <div className="flex items-start justify-between border-b border-slate-200 px-5 py-5 sm:px-6 sm:py-6">

                <div>
                  <p className="text-[9px] font-semibold uppercase tracking-[0.22em] text-[#1261F2] sm:text-[10px]">
                    Publisher Framework
                  </p>

                  <h3 className="mt-1.5 text-base font-semibold text-[#071A35] sm:text-xl">
                    Built around your traffic
                  </h3>
                </div>

                <span className="hidden text-[9px] font-medium uppercase tracking-[0.16em] text-slate-400 sm:block">
                  TDS
                </span>

              </div>

              {/* Benefits */}
              <div className="divide-y divide-slate-200">

                {benefits.map((item) => (
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
                      hover:bg-white
                      sm:grid-cols-[42px_1fr_auto]
                      sm:gap-5
                      sm:px-6
                      sm:py-6
                    "
                  >

                    {/* Number */}
                    <span className="pt-0.5 text-[10px] font-semibold text-[#1261F2] sm:text-xs">
                      {item.number}
                    </span>

                    {/* Content */}
                    <div>

                      <h4 className="text-sm font-semibold text-[#071A35] sm:text-base">
                        {item.title}
                      </h4>

                      <p className="mt-1.5 max-w-xl text-xs leading-5 text-slate-500 sm:mt-2 sm:text-sm sm:leading-6">
                        {item.text}
                      </p>

                    </div>

                    {/* Arrow */}
                    <span className="pt-0.5 text-sm text-slate-300 transition duration-300 group-hover:translate-x-1 group-hover:text-[#1261F2] sm:text-lg">
                      ↗
                    </span>

                  </div>
                ))}

              </div>

              {/* Bottom Models */}
              <div className="flex flex-wrap items-center gap-x-5 gap-y-3 border-t border-slate-200 px-5 py-5 sm:gap-x-7 sm:px-6">

                <span className="text-[9px] font-semibold uppercase tracking-[0.16em] text-slate-400 sm:text-[10px]">
                  Performance models
                </span>

                {["CPI", "CPA", "CPL", "CPS"].map((model) => (
                  <span
                    key={model}
                    className="text-xs font-semibold text-[#1261F2] sm:text-sm"
                  >
                    {model}
                  </span>
                ))}

              </div>

            </div>
          </div>


          {/* ================================================= */}
          {/* RIGHT — PUBLISHER CONTENT */}
          {/* ================================================= */}

          <div>

            <p className="mb-7 text-4xl font-bold leading-none tracking-[-0.04em] text-[#1261F2] sm:text-5xl lg:text-6xl">
              For Publishers
            </p>

            <h2 className="max-w-xl text-4xl font-bold leading-[0.98] tracking-[-0.045em] text-[#071A35] sm:text-5xl lg:text-[56px]">
              Turn your
              <br />
              traffic into
              <br />
              <span className="text-[#1261F2]">
                performance.
              </span>
            </h2>

            <p className="mt-7 max-w-xl text-base leading-7 text-slate-500 sm:mt-8 sm:text-lg sm:leading-8">
              Partner with TDS to access relevant campaigns, transparent
              tracking and performance opportunities built around the traffic
              you already have.
            </p>

            <a
              href="#contact"
              className="
                mt-8
                inline-flex
                items-center
                gap-3
                rounded-full
                bg-[#071A35]
                px-6
                py-3.5
                text-sm
                font-semibold
                text-white
                transition
                duration-300
                hover:bg-[#0D2850]
                sm:mt-9
                sm:px-7
                sm:py-4
              "
            >
              Become a publisher

              <span className="text-base">
                →
              </span>
            </a>

          </div>

        </div>

      </div>
    </section>
  );
}

export default PublishersSection;
