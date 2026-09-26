function PerformanceModelsSection() {
  const models = [
    {
      code: "CPI",
      title: "Cost Per Install",
      description:
        "Acquire new app users through measurable install-focused campaigns.",
    },
    {
      code: "CPA",
      title: "Cost Per Action",
      description:
        "Pay against defined user actions and conversion events.",
    },
    {
      code: "CPL",
      title: "Cost Per Lead",
      description:
        "Generate qualified leads through performance-driven acquisition.",
    },
    {
      code: "CPS",
      title: "Cost Per Sale",
      description:
        "Drive transactions and revenue through outcome-focused campaigns.",
    },
  ];

  return (
    <section
      id="performance-models"
      className="h-[100svh] min-h-[700px] overflow-hidden bg-[#071A35]"
    >
      <div className="mx-auto flex h-full max-w-7xl flex-col justify-center px-6 py-10 lg:px-8">

        {/* ========================= */}
        {/* HEADER */}
        {/* ========================= */}

        <div className="flex shrink-0 flex-col justify-between gap-6 lg:flex-row lg:items-end">

          <div>
            <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.28em] text-[#6DB7FF]">
              Performance Models
            </p>

            <h2 className="max-w-4xl text-5xl font-bold leading-[0.96] tracking-[-0.045em] text-white sm:text-6xl lg:text-[70px]">
              Pay for the
              <br />
              <span className="text-[#6DB7FF]">
                outcome that matters.
              </span>
            </h2>
          </div>

          <p className="max-w-sm text-xs leading-6 text-white/45 lg:pb-1 lg:text-sm">
            Campaigns can be structured around the specific actions and
            outcomes that matter most to your business.
          </p>

        </div>

        {/* ========================= */}
        {/* MODELS */}
        {/* ========================= */}

        <div className="mt-10 grid min-h-0 flex-1 grid-cols-1 gap-px overflow-hidden border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-4">

          {models.map((model, index) => (
            <div
              key={model.code}
              className="group relative flex min-h-0 flex-col justify-between overflow-hidden bg-[#071A35] p-6 transition duration-500 hover:bg-[#0D2850] lg:p-7"
            >

              {/* Background number */}
              <span className="pointer-events-none absolute -right-2 -top-8 text-[120px] font-black leading-none tracking-[-0.08em] text-white/[0.025] transition duration-500 group-hover:text-white/[0.05]">
                {String(index + 1).padStart(2, "0")}
              </span>

              <div className="relative">

                {/* Code */}
                <div className="flex items-center justify-between">

                  <span className="text-5xl font-black tracking-[-0.06em] text-[#6DB7FF] transition duration-500 group-hover:translate-x-1 lg:text-6xl">
                    {model.code}
                  </span>

                  <span className="text-lg text-white/20 transition duration-300 group-hover:translate-x-1 group-hover:text-[#6DB7FF]">
                    ↗
                  </span>

                </div>

                {/* Title */}
                <h3 className="mt-10 text-xl font-semibold tracking-tight text-white lg:text-2xl">
                  {model.title}
                </h3>

                {/* Description */}
                <p className="mt-4 max-w-xs text-xs leading-6 text-white/45 lg:text-sm">
                  {model.description}
                </p>

              </div>

              {/* Bottom */}
              <div className="relative mt-8">

                <div className="mb-5 h-px w-8 bg-[#6DB7FF] transition-all duration-500 group-hover:w-16" />

                <span className="text-[9px] font-semibold uppercase tracking-[0.16em] text-white/30">
                  Performance-based
                </span>

              </div>

            </div>
          ))}

        </div>

        {/* ========================= */}
        {/* BOTTOM STRIP */}
        {/* ========================= */}

        <div className="mt-5 flex shrink-0 flex-col gap-3 border-t border-white/10 pt-5 sm:flex-row sm:items-center sm:justify-between">

          <p className="text-[9px] font-semibold uppercase tracking-[0.18em] text-white/30">
            Measure what matters
          </p>

          <div className="flex flex-wrap gap-x-7 gap-y-2">

            {[
              "Acquisition",
              "Conversion",
              "Revenue",
              "Growth",
            ].map((item) => (
              <span
                key={item}
                className="text-[10px] font-semibold text-white/60"
              >
                {item}
              </span>
            ))}

          </div>

        </div>

      </div>
    </section>
  );
}

export default PerformanceModelsSection;