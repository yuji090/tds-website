function VerticalsSection() {
  const verticals = [
    {
      number: "01",
      title: "Fintech & BFSI",
      description:
        "Performance campaigns for lending, payments, banking, cards and financial products.",
    },
    {
      number: "02",
      title: "iGaming",
      description:
        "Acquisition campaigns connecting relevant audiences with gaming and entertainment platforms.",
    },
    {
      number: "03",
      title: "E-commerce",
      description:
        "Drive users and transactions for consumer brands, marketplaces and online commerce.",
    },
    {
      number: "04",
      title: "Travel",
      description:
        "Reach high-intent audiences across travel, booking and mobility platforms.",
    },
    {
      number: "05",
      title: "Apps & Utilities",
      description:
        "Scale mobile applications and utility products through performance-driven acquisition.",
    },
    {
      number: "06",
      title: "Consumer & More",
      description:
        "Flexible performance campaigns across emerging categories and digital products.",
    },
  ];

  return (
    <section
      id="verticals"
      className="h-[100svh] min-h-[700px] overflow-hidden bg-[#EEF5FF]"
    >
      <div className="mx-auto flex h-full max-w-7xl flex-col justify-center px-6 py-10 lg:px-8">

        {/* ========================= */}
        {/* HEADER */}
        {/* ========================= */}

        <div className="flex shrink-0 flex-col justify-between gap-5 lg:flex-row lg:items-end">

          <div>
            <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.28em] text-[#1261F2]">
              Industries & Verticals
            </p>

            <h2 className="max-w-4xl text-5xl font-bold leading-[0.96] tracking-[-0.045em] text-[#071A35] sm:text-6xl lg:text-[70px]">
              Performance across
              <br />
              <span className="text-[#1261F2]">
                growing markets.
              </span>
            </h2>
          </div>

          <p className="max-w-sm text-xs leading-6 text-slate-500 lg:pb-1 lg:text-sm">
            We work across multiple digital verticals, connecting advertisers
            with relevant audiences and performance-focused traffic partners.
          </p>

        </div>

        {/* ========================= */}
        {/* VERTICALS */}
        {/* ========================= */}

        <div className="mt-10 grid min-h-0 flex-1 grid-cols-1 gap-x-10 gap-y-0 overflow-hidden md:grid-cols-2 lg:grid-cols-3">

          {verticals.map((vertical) => (
            <div
              key={vertical.number}
              className="group flex min-h-0 flex-col justify-center border-t border-[#071A35]/10 py-5 transition duration-300"
            >

              {/* Top row */}
              <div className="flex items-center justify-between">

                <span className="text-[10px] font-semibold tracking-[0.15em] text-[#1261F2]">
                  {vertical.number}
                </span>

                <span className="text-lg text-[#071A35]/20 transition duration-300 group-hover:translate-x-1 group-hover:text-[#1261F2]">
                  ↗
                </span>

              </div>

              {/* Title */}
              <h3 className="mt-5 text-2xl font-semibold tracking-[-0.03em] text-[#071A35] transition duration-300 group-hover:text-[#1261F2] lg:text-3xl">
                {vertical.title}
              </h3>

              {/* Description */}
              <p className="mt-3 max-w-sm text-xs leading-6 text-slate-500 lg:text-sm">
                {vertical.description}
              </p>

              {/* Bottom accent */}
              <div className="mt-5 h-px w-8 bg-[#1261F2] transition-all duration-300 group-hover:w-16" />

            </div>
          ))}

        </div>

        {/* ========================= */}
        {/* BOTTOM STRIP */}
        {/* ========================= */}

        <div className="mt-5 flex shrink-0 flex-col gap-3 border-t border-[#071A35]/10 pt-5 sm:flex-row sm:items-center sm:justify-between">

          <p className="text-[9px] font-semibold uppercase tracking-[0.18em] text-slate-400">
            Built for performance
          </p>

          <div className="flex flex-wrap gap-x-6 gap-y-2">

            {["Mobile", "Display", "Performance", "Affiliate"].map(
              (channel) => (
                <span
                  key={channel}
                  className="text-[10px] font-semibold text-[#071A35]"
                >
                  {channel}
                </span>
              )
            )}

          </div>

        </div>

      </div>
    </section>
  );
}

export default VerticalsSection;