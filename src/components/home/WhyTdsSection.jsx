function WhyTdsSection() {
  const principles = [
    {
      number: "01",
      title: "Quality over volume",
      text: "We focus on traffic that can create meaningful outcomes — not just more clicks.",
    },
    {
      number: "02",
      title: "Performance first",
      text: "Campaigns are built around measurable actions, clear KPIs and real business objectives.",
    },
    {
      number: "03",
      title: "Built for scale",
      text: "We connect advertisers with a network of performance partners to help campaigns grow.",
    },
    {
      number: "04",
      title: "Transparent execution",
      text: "Tracking, optimization and campaign performance stay visible throughout the journey.",
    },
  ];

  return (
    <section
      id="why-tds"
      className="h-[100svh] min-h-[700px] overflow-hidden bg-white"
    >
      <div className="mx-auto flex h-full max-w-7xl flex-col justify-center px-6 py-10 lg:px-8">
        {/* Heading */}
        <div className="grid gap-8 lg:grid-cols-[1.3fr_0.7fr] lg:items-end">
          <div>
            <p className="mb-5 text-[10px] font-semibold uppercase tracking-[0.28em] text-[#1261F2]">
              Why TDS
            </p>

            <h2 className="max-w-5xl text-5xl font-bold leading-[0.96] tracking-[-0.045em] text-[#071A35] sm:text-6xl lg:text-[72px]">
              Performance is not
              <br />
              just <span className="text-[#1261F2]">traffic.</span>
            </h2>
          </div>

          <p className="max-w-md text-sm leading-7 text-slate-500 lg:pb-2 lg:text-base">
            It is what happens after the click. We bring together the
            technology, partners and performance mindset needed to turn
            traffic into measurable business outcomes.
          </p>
        </div>

        {/* Divider */}
        <div className="my-10 h-px bg-slate-200 lg:my-12" />

        {/* Principles */}
        <div className="grid min-h-0 flex-1 grid-cols-1 gap-x-10 gap-y-7 md:grid-cols-2 lg:grid-cols-4">
          {principles.map((item) => (
            <div
              key={item.number}
              className="group flex min-h-0 flex-col justify-between border-t border-slate-200 pt-5 transition-colors duration-300 hover:border-[#1261F2]"
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-[#1261F2]">
                    {item.number}
                  </span>

                  <span className="text-sm text-slate-300 transition duration-300 group-hover:translate-x-1 group-hover:text-[#1261F2]">
                    ↗
                  </span>
                </div>

                <h3 className="mt-8 text-xl font-semibold tracking-tight text-[#071A35] lg:text-2xl">
                  {item.title}
                </h3>

                <p className="mt-4 max-w-xs text-sm leading-7 text-slate-500">
                  {item.text}
                </p>
              </div>

              <div className="mt-8 hidden h-px w-8 bg-[#1261F2] transition-all duration-500 group-hover:w-16 lg:block" />
            </div>
          ))}
        </div>

        {/* Bottom statement */}
        <div className="mt-8 flex shrink-0 flex-col gap-4 border-t border-slate-200 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-slate-400">
            The Digital Sole
          </p>

          <p className="text-sm font-semibold tracking-tight text-[#071A35] sm:text-right">
            Right traffic.
            <span className="mx-2 text-[#1261F2]">→</span>
            Right action.
            <span className="mx-2 text-[#1261F2]">→</span>
            Real growth.
          </p>
        </div>
      </div>
    </section>
  );
}

export default WhyTdsSection;