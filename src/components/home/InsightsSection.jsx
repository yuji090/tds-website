function InsightsSection() {
  const insights = [
    {
      category: "Performance",
      title: "What makes a performance campaign scalable?",
      type: "Article",
    },
    {
      category: "Publishers",
      title: "Building stronger traffic partnerships",
      type: "Insight",
    },
    {
      category: "Advertisers",
      title: "From acquisition to measurable outcomes",
      type: "Guide",
    },
  ];

  return (
    <section
      id="insights"
      className="h-[100svh] min-h-[700px] overflow-hidden bg-[#EEF5FF]"
    >
      <div className="mx-auto flex h-full max-w-7xl flex-col justify-center px-6 py-10 lg:px-8">
        {/* Header */}
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div>
            <p className="mb-5 text-[10px] font-semibold uppercase tracking-[0.28em] text-[#1261F2]">
              Insights
            </p>

            <h2 className="max-w-4xl text-5xl font-bold leading-[0.96] tracking-[-0.045em] text-[#071A35] sm:text-6xl lg:text-[70px]">
              Ideas behind
              <br />
              <span className="text-[#1261F2]">better performance.</span>
            </h2>
          </div>

          <a
            href="#"
            className="group mb-1 inline-flex w-fit items-center gap-3 text-sm font-semibold text-[#071A35] transition hover:text-[#1261F2]"
          >
            View all insights
            <span className="text-lg transition duration-300 group-hover:translate-x-1">
              →
            </span>
          </a>
        </div>

        {/* Content */}
        <div className="mt-10 grid min-h-0 flex-1 gap-px overflow-hidden border border-[#071A35]/10 bg-[#071A35]/10 lg:grid-cols-[1.35fr_0.65fr]">
          {/* Featured Insight */}
          <article className="group relative flex min-h-0 flex-col justify-between overflow-hidden bg-[#071A35] p-7 sm:p-9 lg:p-11">
            <div>
              <div className="flex items-center justify-between">
                <span className="rounded-full bg-white/10 px-3 py-1.5 text-[9px] font-semibold uppercase tracking-[0.16em] text-[#6DB7FF]">
                  Featured
                </span>

                <span className="text-xs font-medium uppercase tracking-[0.15em] text-white/30">
                  01
                </span>
              </div>

              <p className="mt-14 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#6DB7FF]">
                Performance
              </p>

              <h3 className="mt-5 max-w-2xl text-3xl font-bold leading-[1.05] tracking-[-0.035em] text-white sm:text-4xl lg:text-5xl">
                What makes a performance campaign scalable?
              </h3>

              <p className="mt-5 max-w-xl text-sm leading-7 text-white/50 lg:text-base">
                A look at the fundamentals behind sustainable acquisition:
                quality traffic, clear KPIs, reliable tracking and continuous
                optimization.
              </p>
            </div>

            <div className="mt-8 flex items-center justify-between border-t border-white/10 pt-5">
              <span className="text-[9px] font-semibold uppercase tracking-[0.18em] text-white/35">
                Article
              </span>

              <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white/60 transition duration-300 group-hover:border-[#6DB7FF] group-hover:bg-[#6DB7FF] group-hover:text-[#071A35]">
                ↗
              </span>
            </div>
          </article>

          {/* Smaller Insights */}
          <div className="grid min-h-0 grid-rows-3">
            {insights.slice(1).map((insight, index) => (
              <article
                key={insight.title}
                className="group flex min-h-0 flex-col justify-between bg-white p-6 transition duration-300 hover:bg-[#f8fbff] lg:p-7"
              >
                <div className="flex items-center justify-between">
                  <span className="text-[9px] font-semibold uppercase tracking-[0.18em] text-[#1261F2]">
                    {insight.category}
                  </span>

                  <span className="text-xs text-slate-300 transition duration-300 group-hover:translate-x-1 group-hover:text-[#1261F2]">
                    ↗
                  </span>
                </div>

                <div>
                  <h3 className="max-w-md text-xl font-semibold leading-[1.15] tracking-tight text-[#071A35] lg:text-2xl">
                    {insight.title}
                  </h3>

                  <div className="mt-5 flex items-center justify-between">
                    <span className="text-[9px] font-semibold uppercase tracking-[0.16em] text-slate-400">
                      {insight.type}
                    </span>

                    <span className="text-[9px] font-medium text-slate-400">
                      0{index + 2}
                    </span>
                  </div>
                </div>
              </article>
            ))}

            {/* CTA row */}
            <a
              href="#contact"
              className="group flex min-h-0 items-center justify-between bg-[#1261F2] px-6 py-5 transition duration-300 hover:bg-[#0d4fd1] lg:px-7"
            >
              <div>
                <p className="text-[9px] font-semibold uppercase tracking-[0.18em] text-white/55">
                  Have a campaign in mind?
                </p>

                <p className="mt-2 text-lg font-bold tracking-tight text-white">
                  Let&apos;s talk performance.
                </p>
              </div>

              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-[#1261F2] transition duration-300 group-hover:translate-x-1">
                →
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default InsightsSection;