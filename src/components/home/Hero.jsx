import logo from "../../assets/w.png";
import logo2 from "../../assets/tds_logo_03.png";

function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden">

      {/* ================= WAVE VIDEO ================= */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src="/waves.mp4" type="video/mp4" />
      </video>


      {/* ================= VIDEO OVERLAY ================= */}
      <div className="absolute inset-0 bg-[#061936]/55" />

      {/* Bottom Depth */}
      <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[#061936]/60 to-transparent" />


      {/* ================= HERO CONTAINER ================= */}
      <div className="relative z-10 min-h-screen">

        <div className="mx-auto min-h-screen max-w-7xl px-6 lg:px-8">


          {/* ================= TDS LOGO ================= 
          <div className="absolute left-6 top-22 lg:left-12">

            <img
              src={logo2}
              alt="The Digital Sole - Think Beyond The Wave"
              className="h-auto w-[270px] object-contain sm:w-[290px] lg:w-[425px]"
            />

          </div>
          */}


          {/* ================= HERO CONTENT ================= */}
          <div className="flex min-h-screen items-center">

            <div className="max-w-5xl pt-24">

              {/* Heading */}
              <h1 className="max-w-5xl text-5xl font-bold leading-[0.98] tracking-[-0.04em] text-white sm:text-6xl lg:text-[88px]">

                Performance marketing

                <br />

                <span className="text-white">
                  that moves
                </span>

                <br />

                <span className="text-[#6DB7FF]">
                  brands forward.
                </span>

              </h1>


              {/* Description */}
              <p className="mt-8 max-w-2xl text-base leading-7 text-white/80 sm:text-lg sm:leading-8">
                We connect advertisers with performance-driven traffic
                and help publishers turn their audience into measurable growth.
              </p>


              {/* CTA */}
              <div className="mt-9 flex flex-wrap items-center gap-4">

                <a
                  href="#advertisers"
                  className="rounded-full bg-[#1261F2] px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-950/20 transition hover:bg-[#0d4fd1]"
                >
                  For Advertisers
                </a>

                <a
                  href="#publishers"
                  className="rounded-full border border-white/35 bg-white/10 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-md transition hover:bg-white/20"
                >
                  For Publishers
                </a>

              </div>

            </div>

          </div>


          {/* ================= BOTTOM INFO ================= */}
          <div className="absolute bottom-10 left-6 right-6 border-t border-white/20 pt-6 lg:left-8 lg:right-8">

            <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">

              <div className="flex items-center gap-3">

                <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/25 bg-white/10 text-xs text-white backdrop-blur-sm">
                  ↓
                </span>

                <span className="text-xs font-medium uppercase tracking-[0.18em] text-white/65">
                  Explore TDS
                </span>

              </div>


              <div className="flex flex-wrap gap-x-8 gap-y-3 text-xs font-medium uppercase tracking-[0.15em] text-white/55">

                <span>Performance</span>
                <span>Mobile</span>
                <span>Display</span>
                <span>Affiliate</span>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Hero;