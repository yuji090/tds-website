function IntroSection() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-white"
    >
      {/* =========================================================
          DESKTOP — TDS BRAND STRIP
      ========================================================== */}
      <div className="absolute right-0 top-0 z-20 hidden h-full w-24 bg-[#071A35] lg:flex">
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


      {/* =========================================================
          DESKTOP — VIDEO + FALLBACK IMAGE
      ========================================================== */}
      <div
        className="
          absolute
          right-24
          top-0
          z-10
          hidden
          lg:block
          lg:w-[min(32vw,421px)]
        "
      >
        <div className="relative aspect-[9/16] w-full overflow-visible">

          {/* =====================================================
              VIDEO CONTAINER
          ====================================================== */}
          <div
            className="
              relative
              h-full
              w-full
              overflow-hidden
              bg-[#071A35]
              shadow-[0_25px_70px_rgba(7,26,53,0.15)]
            "
          >

            {/* FALLBACK IMAGE */}
            <img
              src="/handshake.webp"
              alt=""
              className="absolute inset-0 h-full w-full object-cover"
            />

            {/* VIDEO */}
            <video
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              className="absolute inset-0 h-full w-full object-cover"
            >
              <source src="/handshake.mp4" type="video/mp4" />
            </video>

            {/* VIDEO OVERLAY */}
            <div className="pointer-events-none absolute inset-0 bg-[#071A35]/[0.06]" />


            {/* =================================================
                BOTTOM VIDEO INFORMATION
            ================================================== */}
            <div className="absolute bottom-0 left-0 right-0 px-5 pb-5">
              <div className="flex items-center justify-between border-t border-white/20 pt-4">

                <span className="text-[8px] font-bold uppercase tracking-[0.2em] text-white sm:text-[9px]">
                  The Digital Sole
                </span>

                <span className="text-[8px] font-semibold uppercase tracking-[0.16em] text-[#6DB7FF] sm:text-[9px]">
                  Connecting Growth
                </span>

              </div>
            </div>

          </div>


          {/* =====================================================
              ADVERTISERS
          ====================================================== */}
          <div className="absolute left-0 top-[27%] hidden -translate-x-[78%] items-center gap-3 lg:flex">

            <div className="bg-white px-3 py-2 shadow-[0_8px_25px_rgba(7,26,53,0.08)]">

              <p className="text-[8px] font-semibold uppercase tracking-[0.16em] text-slate-400">
                Connects
              </p>

              <p className="mt-0.5 text-xs font-bold text-[#071A35]">
                Advertisers
              </p>

            </div>

            <span className="h-px w-10 bg-[#1261F2]/40" />

          </div>


          {/* =====================================================
              PUBLISHERS
          ====================================================== */}
          <div className="absolute bottom-[27%] left-0 hidden -translate-x-[78%] items-center gap-3 lg:flex">

            <div className="bg-white px-3 py-2 shadow-[0_8px_25px_rgba(7,26,53,0.08)]">

              <p className="text-[8px] font-semibold uppercase tracking-[0.16em] text-slate-400">
                Connects
              </p>

              <p className="mt-0.5 text-xs font-bold text-[#071A35]">
                Publishers
              </p>

            </div>

            <span className="h-px w-10 bg-[#1261F2]/40" />

          </div>

        </div>
      </div>


      {/* =========================================================
          MAIN CONTENT
      ========================================================== */}
      <div
        className="
          mx-auto
          flex
          max-w-7xl
          flex-col
          px-6
          py-16
          sm:py-20
          lg:min-h-[min(100svh,747px)]
          lg:px-8
          lg:py-0
        "
      >

        <div className="relative z-10 flex flex-1 items-center lg:w-[58%]">

          <div className="max-w-3xl">


            {/* =================================================
                EYEBROW
            ================================================== */}
            <p className="mb-6 text-[30px] font-semibold uppercase tracking-[0.3em] text-[#1261F2]">
              What We Do
            </p>


            {/* =================================================
                MAIN HEADING
            ================================================== */}
            <h2
              className="
                text-5xl
                font-bold
                leading-[0.96]
                tracking-[-0.045em]
                text-[#071A35]
                sm:text-6xl
                lg:text-[70px]
              "
            >
              We connect brands with{" "}

              <span className="text-[#1261F2]">
                performance-driven
              </span>{" "}

              growth.
            </h2>


            {/* =================================================
                DESCRIPTION
            ================================================== */}
            <p
              className="
                mt-7
                max-w-xl
                text-sm
                leading-7
                text-slate-600
                sm:text-base
                sm:leading-8
              "
            >
              The Digital Sole brings advertisers and publishers together
              through performance-focused advertising solutions built around
              measurable outcomes.
            </p>


            {/* =================================================
                CTA
            ================================================== */}
            <a
              href="#solutions"
              className="
                group
                mt-7
                inline-flex
                w-fit
                items-center
                gap-3
                text-sm
                font-semibold
                text-[#071A35]
                transition
                hover:text-[#1261F2]
              "
            >
              Explore our solutions

              <span className="text-lg transition duration-300 group-hover:translate-x-1">
                →
              </span>
            </a>

          </div>

        </div>

      </div>


      {/* =========================================================
          MOBILE — VIDEO + FALLBACK IMAGE
      ========================================================== */}
      <div
        className="
          relative
          h-[620px]
          w-full
          overflow-hidden
          bg-[#071A35]
          lg:hidden
        "
      >

        {/* FALLBACK IMAGE */}
        <img
          src="/handshake.webp"
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
        />

        {/* VIDEO */}
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          className="absolute inset-0 h-full w-full object-cover"
        >
          <source src="/handshake.mp4" type="video/mp4" />
        </video>

        {/* VIDEO OVERLAY */}
        <div className="pointer-events-none absolute inset-0 bg-[#071A35]/[0.06]" />


        {/* =====================================================
            MOBILE VIDEO INFORMATION
        ====================================================== */}
        <div className="absolute bottom-0 left-0 right-0 px-6 pb-6">

          <div className="flex items-center justify-between border-t border-white/20 pt-4">

            <span className="text-[8px] font-bold uppercase tracking-[0.2em] text-white">
              The Digital Sole
            </span>

            <span className="text-[8px] font-semibold uppercase tracking-[0.16em] text-[#6DB7FF]">
              Connecting Growth
            </span>

          </div>

        </div>

      </div>

    </section>
  );
}

export default IntroSection;