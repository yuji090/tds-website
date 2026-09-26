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
      className="h-[100svh] min-h-[700px] overflow-hidden bg-white"
    >
      <div className="mx-auto flex h-full max-w-7xl items-center px-6 py-10 lg:px-8">

        <div className="grid w-full items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">

          {/* ========================= */}
          {/* LEFT — NETWORK VISUAL */}
          {/* ========================= */}

          <div className="relative order-2 lg:order-1">

            {/* Decorative circles */}
            <div className="pointer-events-none absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#1261F2]/[0.06]" />

            <div className="pointer-events-none absolute left-1/2 top-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#1261F2]/[0.08]" />

            <div className="relative mx-auto max-w-xl">

              {/* Network */}
              <div className="relative overflow-hidden border border-slate-200 bg-slate-50 p-6 shadow-[0_20px_70px_rgba(7,26,53,0.08)]">

                {/* Header */}
                <div className="flex items-center justify-between border-b border-slate-200 pb-5">

                  <div>
                    <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[#1261F2]">
                      Publisher Network
                    </p>

                    <p className="mt-1 text-sm font-semibold text-[#071A35]">
                      Connect. Perform. Scale.
                    </p>
                  </div>

                  <span className="rounded-full bg-[#E8F2FF] px-3 py-1 text-[9px] font-semibold uppercase tracking-[0.12em] text-[#1261F2]">
                    Network
                  </span>

                </div>

                {/* Network diagram */}
                <div className="relative mt-6 h-[270px]">

                  {/* SVG connections */}
                  <svg
                    className="absolute inset-0 h-full w-full"
                    viewBox="0 0 500 270"
                    fill="none"
                  >
                    <path
                      d="M250 135 L115 60"
                      stroke="#1261F2"
                      strokeOpacity="0.2"
                      strokeWidth="1.5"
                    />

                    <path
                      d="M250 135 L385 60"
                      stroke="#1261F2"
                      strokeOpacity="0.2"
                      strokeWidth="1.5"
                    />

                    <path
                      d="M250 135 L115 210"
                      stroke="#1261F2"
                      strokeOpacity="0.2"
                      strokeWidth="1.5"
                    />

                    <path
                      d="M250 135 L385 210"
                      stroke="#1261F2"
                      strokeOpacity="0.2"
                      strokeWidth="1.5"
                    />

                    <circle cx="250" cy="135" r="5" fill="#1261F2" />
                    <circle cx="115" cy="60" r="3" fill="#6DB7FF" />
                    <circle cx="385" cy="60" r="3" fill="#6DB7FF" />
                    <circle cx="115" cy="210" r="3" fill="#6DB7FF" />
                    <circle cx="385" cy="210" r="3" fill="#6DB7FF" />
                  </svg>

                  {/* Center */}
                  <div className="absolute left-1/2 top-1/2 flex h-28 w-28 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full bg-[#071A35] text-center shadow-[0_15px_45px_rgba(7,26,53,0.22)]">

                    <span className="text-2xl font-black tracking-[-0.08em] text-white">
                      TD<span className="text-[#6DB7FF]">S</span>
                    </span>

                    <span className="mt-1 text-[7px] font-semibold uppercase tracking-[0.25em] text-white/45">
                      Partner Network
                    </span>

                  </div>

                  {/* Network nodes */}
                  {[
                    {
                      position: "left-5 top-5",
                      title: "Apps",
                    },
                    {
                      position: "right-5 top-5",
                      title: "Websites",
                    },
                    {
                      position: "left-5 bottom-5",
                      title: "Ad Networks",
                    },
                    {
                      position: "right-5 bottom-5",
                      title: "Affiliate",
                    },
                  ].map((node) => (
                    <div
                      key={node.title}
                      className={`absolute ${node.position} flex h-14 w-24 items-center justify-center rounded-xl border border-slate-200 bg-white shadow-sm`}
                    >
                      <span className="text-[10px] font-semibold text-[#071A35]">
                        {node.title}
                      </span>
                    </div>
                  ))}

                </div>

                {/* Bottom metrics */}
                <div className="grid grid-cols-3 border-t border-slate-200 pt-5">

                  <div>
                    <p className="text-[9px] uppercase tracking-[0.15em] text-slate-400">
                      Traffic
                    </p>

                    <p className="mt-1 text-sm font-bold text-[#071A35]">
                      Quality
                    </p>
                  </div>

                  <div className="border-l border-slate-200 pl-5">
                    <p className="text-[9px] uppercase tracking-[0.15em] text-slate-400">
                      Campaigns
                    </p>

                    <p className="mt-1 text-sm font-bold text-[#071A35]">
                      Performance
                    </p>
                  </div>

                  <div className="border-l border-slate-200 pl-5">
                    <p className="text-[9px] uppercase tracking-[0.15em] text-slate-400">
                      Growth
                    </p>

                    <p className="mt-1 text-sm font-bold text-[#071A35]">
                      Scalable
                    </p>
                  </div>

                </div>

              </div>
            </div>
          </div>

          {/* ========================= */}
          {/* RIGHT — CONTENT */}
          {/* ========================= */}

          <div className="order-1 lg:order-2">

            <p className="mb-5 text-[10px] font-semibold uppercase tracking-[0.28em] text-[#1261F2]">
              For Publishers
            </p>

            <h2 className="max-w-xl text-5xl font-bold leading-[0.98] tracking-[-0.045em] text-[#071A35] sm:text-6xl lg:text-[68px]">
              Turn your
              <br />
              traffic into
              <br />
              <span className="text-[#1261F2]">
                performance.
              </span>
            </h2>

            <p className="mt-7 max-w-lg text-sm leading-7 text-slate-500 sm:text-base">
              Partner with TDS to access relevant campaigns, transparent
              tracking and performance opportunities built around the traffic
              you already have.
            </p>

            <a
              href="#contact"
              className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#071A35] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-[#0D2850]"
            >
              Become a publisher
              <span className="text-base">→</span>
            </a>

            {/* Benefits */}
            <div className="mt-9 grid gap-0 border-t border-slate-200">

              {benefits.map((benefit) => (
                <div
                  key={benefit.number}
                  className="group flex gap-4 border-b border-slate-200 py-4"
                >

                  <span className="pt-0.5 text-[10px] font-semibold text-[#1261F2]">
                    {benefit.number}
                  </span>

                  <div className="flex-1">

                    <div className="flex items-center justify-between gap-4">

                      <h3 className="text-sm font-semibold text-[#071A35]">
                        {benefit.title}
                      </h3>

                      <span className="text-sm text-slate-300 transition group-hover:translate-x-1 group-hover:text-[#1261F2]">
                        ↗
                      </span>

                    </div>

                    <p className="mt-1 text-[11px] leading-5 text-slate-500">
                      {benefit.text}
                    </p>

                  </div>

                </div>
              ))}

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

export default PublishersSection;