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
      className="bg-white"
    >
      <div className="mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-center px-6 py-20 sm:px-8 sm:py-24 lg:px-8 lg:py-20">

        {/* Heading */}
        <div className="grid gap-8 lg:grid-cols-[1.3fr_0.7fr] lg:items-end lg:gap-12">

          <div>

            <p className="mb-5 text-[10px] font-semibold uppercase tracking-[0.28em] text-[#1261F2] sm:text-xs">
              Why TDS
            </p>

            <h2 className="max-w-5xl text-[clamp(2.8rem,6vw,4.5rem)] font-bold leading-[0.96] tracking-[-0.045em] text-[#071A35]">
              Performance is not
              <br />
              just <span className="text-[#1261F2]">traffic.</span>
            </h2>

          </div>

          <p className="max-w-md text-sm leading-7 text-slate-500 sm:text-base sm:leading-8 lg:pb-2">
            It is what happens after the click. We bring together the
            technology, partners and performance mindset needed to turn
            traffic into measurable business outcomes.
          </p>

        </div>

        {/* Divider */}
        <div className="my-10 h-px bg-slate-200 sm:my-12 lg:my-14" />

        {/* Principles */}
        <div className="grid grid-cols-1 gap-x-8 gap-y-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-x-10 lg:gap-y-0">

          {principles.map((item) => (
            <div
              key={item.number}
              className="
                group
                flex
                flex-col
                border-t
                border-slate-200
                pt-5
                transition-colors
                duration-300
                hover:border-[#1261F2]
                lg:min-h-[260px]
                lg:justify-between
              "
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

                <h3 className="mt-6 text-lg font-semibold tracking-tight text-[#071A35] sm:text-xl lg:mt-8 lg:text-2xl">
                  {item.title}
                </h3>

                <p className="mt-3 max-w-sm text-sm leading-6 text-slate-500 sm:mt-4 sm:leading-7">
                  {item.text}
                </p>

              </div>

              <div className="mt-6 hidden h-px w-8 bg-[#1261F2] transition-all duration-500 group-hover:w-16 lg:block" />

            </div>
          ))}

        </div>

        {/* Bottom statement */}
        <div className="mt-10 flex flex-col gap-4 border-t border-slate-200 pt-6 sm:mt-12 sm:flex-row sm:items-center sm:justify-between">

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