import { useEffect, useRef, useState } from "react";

import logo from "../../assets/w.png";
import logo2 from "../../assets/tds_logo_03.png";

function Hero() {
  const [videoFailed, setVideoFailed] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  const hasReanimated = useRef(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 150);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;

      setScrollY(y);

      // Re-trigger only once when coming back near the top
      if (y < window.innerHeight * 0.35 && !hasReanimated.current) {
        hasReanimated.current = true;

        setLoaded(false);

        setTimeout(() => {
          setLoaded(true);
        }, 50);
      }

      // Allow re-animation again after leaving the Hero area
      if (y >= window.innerHeight * 0.35) {
        hasReanimated.current = false;
      }
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const heroProgress = Math.min(
    scrollY / (window.innerHeight * 0.7),
    1
  );

  const heroContentStyle = {
    transform: `
      translate3d(0, ${-heroProgress * 40}px, 0)
      scale(${1 - heroProgress * 0.08})
    `,
    opacity: 1 - heroProgress,
  };

  return (
    <section className="relative min-h-screen overflow-hidden">

      {/* ========================================================= */}
      {/* FALLBACK / BACKGROUND IMAGE                              */}
      {/* ========================================================= */}

      <img
        src="/wave.webp"
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* ========================================================= */}
      {/* WAVE VIDEO                                                */}
      {/* ========================================================= */}

      {!videoFailed && (
        <video
          autoPlay
          muted
          loop
          playsInline
          onError={() => setVideoFailed(true)}
          className="absolute inset-0 h-full w-full object-cover"
        >
          <source src="/waves.mp4" type="video/mp4" />
        </video>
      )}

      {/* ========================================================= */}
      {/* VIDEO OVERLAY                                              */}
      {/* ========================================================= */}

      <div className="absolute inset-0 bg-[#061936]/55" />

      {/* Bottom Depth */}
      <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[#061936]/60 to-transparent" />

      {/* ========================================================= */}
      {/* HERO CONTAINER                                             */}
      {/* ========================================================= */}

      <div className="relative z-10 min-h-screen">

        <div className="mx-auto min-h-screen max-w-7xl px-6 lg:px-8">

          {/* ===================================================== */}
          {/* TDS LOGO                                               */}
          {/* ===================================================== */}

          {/*
          <div className="absolute left-6 top-22 lg:left-12">
            <img
              src={logo2}
              alt="The Digital Sole - Think Beyond The Wave"
              className="h-auto w-[270px] object-contain sm:w-[290px] lg:w-[425px]"
            />
          </div>
          */}

          {/* ===================================================== */}
          {/* HERO CONTENT                                            */}
          {/* ===================================================== */}

          <div className="flex min-h-screen items-center">

            <div
              style={heroContentStyle}
              className="w-full transform-gpu"
            >

              <div className="max-w-5xl pt-24">

                {/* ================================================= */}
                {/* HEADING                                            */}
                {/* ================================================= */}

                <h1
                  className={`
                    max-w-5xl
                    text-5xl font-bold
                    leading-[0.98]
                    tracking-[-0.04em]
                    text-white
                    sm:text-6xl
                    lg:text-[88px]

                    transition-all
                    duration-[1200ms]
                    ease-[cubic-bezier(0.22,1,0.36,1)]

                    ${
                      loaded
                        ? "translate-y-0 opacity-100"
                        : "translate-y-10 opacity-0"
                    }
                  `}
                >

                  <span
                    className="block"
                    style={{
                      transitionDelay: "100ms",
                    }}
                  >
                    Performance marketing
                  </span>

                  <span
                    className="block text-white"
                    style={{
                      transitionDelay: "220ms",
                    }}
                  >
                    that moves
                  </span>

                  <span
                    className="block text-[#6DB7FF]"
                    style={{
                      transitionDelay: "340ms",
                    }}
                  >
                    brands forward.
                  </span>

                </h1>

                {/* ================================================= */}
                {/* DESCRIPTION                                        */}
                {/* ================================================= */}

                <p
                  className={`
                    mt-8
                    max-w-2xl
                    text-base
                    leading-7
                    text-white/80
                    sm:text-lg
                    sm:leading-8

                    transition-all
                    duration-[1000ms]
                    delay-[500ms]
                    ease-[cubic-bezier(0.22,1,0.36,1)]

                    ${
                      loaded
                        ? "translate-y-0 opacity-100"
                        : "translate-y-6 opacity-0"
                    }
                  `}
                >
                  We connect advertisers with performance-driven traffic
                  and help publishers turn their audience into measurable growth.
                </p>

                {/* ================================================= */}
                {/* CTA                                                */}
                {/* ================================================= */}

                <div
                  className={`
                    mt-9
                    flex
                    flex-wrap
                    items-center
                    gap-4

                    transition-all
                    duration-[1000ms]
                    delay-[650ms]
                    ease-[cubic-bezier(0.22,1,0.36,1)]

                    ${
                      loaded
                        ? "translate-y-0 opacity-100"
                        : "translate-y-6 opacity-0"
                    }
                  `}
                >

                  {/* Advertisers */}
                  <a
                    href="#advertisers"
                    className="
                      rounded-full
                      bg-[#1261F2]
                      px-7
                      py-3.5
                      text-sm
                      font-semibold
                      text-white
                      shadow-lg
                      shadow-blue-950/20
                      transition
                      duration-300
                      hover:-translate-y-0.5
                      hover:bg-[#0d4fd1]
                    "
                  >
                    For Advertisers
                  </a>

                  {/* Publishers */}
                  <a
                    href="#publishers"
                    className="
                      rounded-full
                      border
                      border-white/35
                      bg-white/10
                      px-7
                      py-3.5
                      text-sm
                      font-semibold
                      text-white
                      backdrop-blur-md
                      transition
                      duration-300
                      hover:-translate-y-0.5
                      hover:bg-white/20
                    "
                  >
                    For Publishers
                  </a>

                </div>

              </div>

            </div>

          </div>

          {/* ===================================================== */}
          {/* BOTTOM INFO                                            */}
          {/* ===================================================== */}

          <div
            className={`
              absolute
              bottom-10
              left-6
              right-6
              border-t
              border-white/20
              pt-6
              lg:left-8
              lg:right-8

              transition-all
              duration-[1000ms]
              delay-[800ms]

              ${
                loaded
                  ? "translate-y-0 opacity-100"
                  : "translate-y-5 opacity-0"
              }
            `}
          >

            <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">

              {/* Explore */}
              <div className="flex items-center gap-3">

                <span
                  className="
                    flex
                    h-8
                    w-8
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-white/25
                    bg-white/10
                    text-xs
                    text-white
                    backdrop-blur-sm
                  "
                >
                  ↓
                </span>

                <span
                  className="
                    text-xs
                    font-medium
                    uppercase
                    tracking-[0.18em]
                    text-white/65
                  "
                >
                  Explore TDS
                </span>

              </div>

              {/* Categories */}
              <div
                className="
                  flex
                  flex-wrap
                  gap-x-8
                  gap-y-3
                  text-xs
                  font-medium
                  uppercase
                  tracking-[0.15em]
                  text-white/55
                "
              >
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