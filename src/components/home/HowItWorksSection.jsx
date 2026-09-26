function HowItWorksSection() {
  const publishers = [
    {
      title: "Apps & Websites",
      text: "Mobile apps, websites and digital platforms",
    },
    {
      title: "Ad Networks",
      text: "Performance networks and media partners",
    },
    {
      title: "Affiliate Partners",
      text: "Traffic partners and affiliate ecosystems",
    },
  ];

  return (
    <section
      id="how-it-works"
      className="relative h-[100svh] min-h-[700px] overflow-hidden bg-white"
    >

      {/* TDS BRAND STRIP */}
      <div className="absolute left-0 top-0 z-20 hidden h-full w-24 bg-[#071A35] lg:flex">
        <div className="flex h-full w-full items-center justify-center">
          <div className="flex flex-col items-center gap-2">
            <span className="text-2xl font-bold leading-none text-white">
              T
            </span>
            <span className="text-2xl font-bold leading-none text-white">
              D
            </span>
            <span className="text-2xl font-bold leading-none text-white">
              S
            </span>
          </div>
        </div>
      </div>

      <div className="mx-auto flex h-full max-w-7xl flex-col justify-center px-6 py-6 lg:pl-32 lg:pr-8">

        {/* ========================= */}
        {/* HEADER */}
        {/* ========================= */}

        <div className="flex shrink-0 items-end justify-between gap-8">
          <div>
            <p className="mb-2 text-[30px] font-semibold uppercase tracking-[0.28em] text-[#1261F2]">
              How It Works
            </p>

            <h2 className="text-4xl font-bold leading-[0.95] tracking-[-0.045em] text-[#071A35] sm:text-5xl lg:text-[56px]">
              From campaign to{" "}
              <span className="text-[#1261F2]">
                measurable growth.
              </span>
            </h2>
          </div>

          <p className="hidden max-w-sm pb-1 text-xs leading-5 text-slate-500 lg:block">
            We connect advertisers with the right performance partners,
            manage the campaign journey, and turn traffic into measurable
            business outcomes.
          </p>
        </div>

        {/* ========================= */}
        {/* FLOW AREA */}
        {/* ========================= */}

        <div className="relative mt-5 flex min-h-0 flex-1 flex-col justify-center">

          {/* ========================= */}
          {/* SVG CONNECTION LINES */}
          {/* ========================= */}

          <svg
            className="pointer-events-none absolute inset-0 z-0 hidden h-full w-full lg:block"
            viewBox="0 0 1200 520"
            fill="none"
            preserveAspectRatio="none"
          >
            {/* Advertiser → TDS */}
            <path
              d="M600 65 V125"
              stroke="#1261F2"
              strokeWidth="1.5"
              strokeDasharray="6 7"
              className="flow-line"
            />

            {/* TDS → Publisher Network */}
            <path
              d="M600 275 V335"
              stroke="#1261F2"
              strokeWidth="1.5"
              strokeDasharray="6 7"
              className="flow-line"
            />

            {/* Publisher Network → Publisher 1 */}
            <path
              d="M600 335 C600 350 250 335 250 380"
              stroke="#1261F2"
              strokeWidth="1.5"
              strokeDasharray="6 7"
              className="flow-line"
            />

            {/* Publisher Network → Publisher 2 */}
            <path
              d="M600 335 V380"
              stroke="#1261F2"
              strokeWidth="1.5"
              strokeDasharray="6 7"
              className="flow-line"
            />

            {/* Publisher Network → Publisher 3 */}
            <path
              d="M600 335 C600 350 950 335 950 380"
              stroke="#1261F2"
              strokeWidth="1.5"
              strokeDasharray="6 7"
              className="flow-line"
            />

            {/* Publisher 1 → Users */}
            <path
              d="M250 445 C250 465 600 450 600 475"
              stroke="#1261F2"
              strokeWidth="1.5"
              strokeDasharray="6 7"
              className="flow-line"
            />

            {/* Publisher 2 → Users */}
            <path
              d="M600 445 V475"
              stroke="#1261F2"
              strokeWidth="1.5"
              strokeDasharray="6 7"
              className="flow-line"
            />

            {/* Publisher 3 → Users */}
            <path
              d="M950 445 C950 465 600 450 600 475"
              stroke="#1261F2"
              strokeWidth="1.5"
              strokeDasharray="6 7"
              className="flow-line"
            />
          </svg>

          {/* ========================= */}
          {/* ADVERTISER */}
          {/* ========================= */}

          <div className="relative z-10 mx-auto w-full max-w-xl">
            <div className="rounded-xl border border-slate-200 bg-white px-5 py-3 shadow-[0_8px_30px_rgba(7,26,53,0.07)]">

              <div className="flex items-center gap-4">

                {/* Icon */}
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#EEF5FF] text-[#1261F2]">
                  <svg
                    className="h-5 w-5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                  >
                    <path d="M4 21V5a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v16" />
                    <path d="M8 7h2M8 11h2M8 15h2M14 7h2M14 11h2M14 15h2" />
                    <path d="M2 21h20" />
                  </svg>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="flex items-center gap-2">

                    <h3 className="text-sm font-bold text-[#071A35]">
                      Advertiser
                    </h3>

                    <span className="rounded-full bg-[#EEF5FF] px-2 py-0.5 text-[8px] font-semibold uppercase tracking-[0.12em] text-[#1261F2]">
                      Campaign
                    </span>

                  </div>

                  <p className="mt-0.5 text-[11px] text-slate-500">
                    Defines offer, audience, KPI and desired outcome.
                  </p>
                </div>

                <span className="hidden text-[9px] font-semibold uppercase tracking-[0.12em] text-[#1261F2] sm:block">
                  Campaign / Offer
                </span>

              </div>
            </div>
          </div>

          {/* ========================= */}
          {/* ADVERTISER → TDS LABEL */}
          {/* ========================= */}

          <div className="relative z-10 mt-2 text-center">
            <span className="rounded-full bg-[#EEF5FF] px-3 py-1 text-[8px] font-semibold uppercase tracking-[0.16em] text-[#1261F2]">
              Campaign / Offer
            </span>
          </div>

          {/* ========================= */}
          {/* TDS CORE */}
          {/* ========================= */}

          <div className="relative z-10 mx-auto mt-5 w-full max-w-2xl">

            <div className="overflow-hidden rounded-2xl bg-[#071A35] px-6 py-5 shadow-[0_18px_55px_rgba(7,26,53,0.18)]">

              <div className="text-center">

                {/* TDS Logo Text */}
                <div className="text-2xl font-black tracking-[-0.08em] text-white">
                  TD<span className="text-[#6DB7FF]">S</span>
                </div>

                <p className="text-[7px] font-semibold uppercase tracking-[0.28em] text-white/45">
                  The Digital Sole
                </p>

                <p className="mx-auto mt-2 max-w-lg text-[11px] leading-5 text-white/60">
                  We manage the complete campaign journey — connecting
                  advertisers with the right partners, tracking performance,
                  and optimizing for results.
                </p>

              </div>

              {/* Capabilities */}
              <div className="mt-4 grid grid-cols-4 gap-2">

                {[
                  ["Campaign", "Management"],
                  ["Tracking", "& Analytics"],
                  ["Partner", "Network"],
                  ["Optimization", "Performance"],
                ].map(([title, sub]) => (
                  <div
                    key={title}
                    className="rounded-lg border border-white/10 bg-white/[0.06] px-2 py-2 text-center transition hover:border-[#6DB7FF]/40 hover:bg-white/[0.09]"
                  >
                    <p className="text-[9px] font-semibold text-white">
                      {title}
                    </p>

                    <p className="text-[8px] text-white/40">
                      {sub}
                    </p>
                  </div>
                ))}

              </div>
            </div>
          </div>

          {/* ========================= */}
          {/* TDS → PUBLISHER NETWORK */}
          {/* ========================= */}

          <div className="relative z-10 mt-3 text-center">

            <span className="rounded-full bg-[#EEF5FF] px-3 py-1 text-[9px] font-semibold uppercase tracking-[0.16em] text-[#1261F2]">
              Distribute to Publisher Network
            </span>

          </div>

          {/* ========================= */}
          {/* PUBLISHER NETWORK */}
          {/* ========================= */}

          <div className="relative z-10 mx-auto mt-5 grid w-full max-w-4xl grid-cols-3 gap-3">

            {publishers.map((publisher, index) => (
              <div
                key={publisher.title}
                className="rounded-xl border border-slate-200 bg-white px-4 py-3 shadow-[0_7px_25px_rgba(7,26,53,0.05)] transition duration-300 hover:-translate-y-1 hover:border-[#1261F2]/30 hover:shadow-[0_12px_35px_rgba(18,97,242,0.09)]"
              >

                <div className="flex items-center gap-3">

                  {/* Number */}
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#EEF5FF] text-[#1261F2]">
                    <span className="text-xs font-bold">
                      {index + 1}
                    </span>
                  </div>

                  {/* Content */}
                  <div>

                    <h3 className="text-[11px] font-bold text-[#071A35]">
                      {publisher.title}
                    </h3>

                    <p className="mt-0.5 text-[9px] leading-4 text-slate-500">
                      {publisher.text}
                    </p>

                  </div>

                </div>
              </div>
            ))}

          </div>

          {/* ========================= */}
          {/* USERS */}
          {/* ========================= */}

          <div className="relative z-10 mx-auto mt-5 w-full max-w-sm">

            <div className="flex items-center justify-center gap-3 rounded-full border border-[#1261F2]/20 bg-white px-5 py-2.5 shadow-[0_8px_25px_rgba(18,97,242,0.07)]">

              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#EEF5FF] text-[#1261F2]">

                <svg
                  className="h-4 w-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                >
                  <circle cx="9" cy="8" r="3" />
                  <circle cx="17" cy="9" r="2.5" />
                  <path d="M3 20c0-3.2 2.5-5 6-5s6 1.8 6 5M14 15c3.2 0 5 1.7 5 5" />
                </svg>

              </div>

              <div>

                <p className="text-xs font-bold text-[#071A35]">
                  Users
                </p>

                <p className="text-[9px] text-slate-500">
                  Across apps, web and digital channels
                </p>

              </div>

            </div>
          </div>

          {/* ========================= */}
          {/* DESIRED ACTION */}
          {/* ========================= */}

          <div className="relative z-10 mx-auto mt-3 w-full max-w-3xl">

            <div className="flex items-center justify-between rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5">

              <div>

                <p className="text-[8px] font-semibold uppercase tracking-[0.15em] text-[#1261F2]">
                  Desired Action
                </p>

                <p className="text-[10px] font-semibold text-[#071A35]">
                  User completes the target event
                </p>

              </div>

              <div className="flex gap-1.5">

                {["Install", "Signup", "Lead", "Purchase"].map(
                  (action) => (
                    <span
                      key={action}
                      className="rounded-md border border-slate-200 bg-white px-2 py-1 text-[8px] font-medium text-slate-500"
                    >
                      {action}
                    </span>
                  )
                )}

              </div>

            </div>
          </div>

          {/* ========================= */}
          {/* OUTCOME */}
          {/* ========================= */}

          <div className="relative z-10 mx-auto mt-3 w-full max-w-5xl">

            <div className="flex items-center justify-between rounded-xl border border-[#1261F2]/15 bg-[#EEF5FF] px-5 py-3">

              <div>

                <p className="text-[8px] font-bold uppercase tracking-[0.18em] text-[#1261F2]">
                  The Outcome
                </p>

                <p className="text-sm font-bold tracking-tight text-[#071A35]">
                  Measurable results.
                </p>

              </div>

              <div className="flex gap-5">

                {[
                  "Higher ROAS",
                  "Quality Users",
                  "Scalable Campaigns",
                  "Long-term Partnerships",
                ].map((item) => (
                  <div
                    key={item}
                    className="hidden items-center gap-1.5 text-[9px] font-semibold text-[#071A35] sm:flex"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-[#1261F2]" />
                    {item}
                  </div>
                ))}

              </div>

            </div>
          </div>

        </div>
      </div>

      {/* ========================= */}
      {/* FLOW ANIMATION */}
      {/* ========================= */}

      <style>{`
        .flow-line {
          animation: flowDash 2.5s linear infinite;
        }

        @keyframes flowDash {
          from {
            stroke-dashoffset: 26;
          }

          to {
            stroke-dashoffset: 0;
          }
        }
      `}</style>
    </section>
  );
}

export default HowItWorksSection;