import { useEffect, useState } from "react";

import igaming from "../../assets/igaming.svg";
import ecomm from "../../assets/ecomm.png";
import finn from "../../assets/fin.jpg";
import travel from "../../assets/travel.png";
import apps from "../../assets/apps.jpg";

function VerticalsSection() {
  const verticals = [
    {
      number: "01",
      title: "Fintech & BFSI",
      description:
        "Performance campaigns for lending, payments, banking, cards and financial products.",
      image: finn,
    },
    {
      number: "02",
      title: "iGaming",
      description:
        "Acquisition campaigns connecting relevant audiences with gaming and entertainment platforms.",
      image: igaming,
    },
    {
      number: "03",
      title: "E-commerce",
      description:
        "Drive users and transactions for consumer brands, marketplaces and online commerce.",
      image: ecomm,
    },
    {
      number: "04",
      title: "Travel",
      description:
        "Reach high-intent audiences across travel, booking and mobility platforms.",
      image: travel,
    },
    {
      number: "05",
      title: "Apps & Utilities",
      description:
        "Scale mobile applications and utility products through performance-driven acquisition.",
      image: apps,
    },
    {
      number: "06",
      title: "Consumer & More",
      description:
        "Flexible performance campaigns across emerging categories and digital products.",
      image: ecomm,
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const total = verticals.length;

  /*
  ==========================================
  NEXT SLIDE
  ==========================================
  */

  const nextSlide = () => {
    setActiveIndex((current) => (current + 1) % total);
  };

  /*
  ==========================================
  PREVIOUS SLIDE
  ==========================================
  */

  const prevSlide = () => {
    setActiveIndex((current) => (current - 1 + total) % total);
  };

  /*
  ==========================================
  GO TO SPECIFIC SLIDE
  ==========================================
  */

  const goToSlide = (index) => {
    setActiveIndex(index);
  };

  /*
  ==========================================
  AUTO SLIDE
  ==========================================
  */

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % total);
    }, 5000);

    return () => clearInterval(interval);
  }, [isPaused, total]);

  /*
  ==========================================
  GET SLIDE INDEX
  ==========================================
  */

  const getSlideIndex = (offset) => {
    return (activeIndex + offset + total) % total;
  };

  const slides = [
    {
      position: -1,
      data: verticals[getSlideIndex(-1)],
    },
    {
      position: 0,
      data: verticals[getSlideIndex(0)],
    },
    {
      position: 1,
      data: verticals[getSlideIndex(1)],
    },
  ];

  return (
    <section
      id="verticals"
      className="h-[100svh] min-h-[700px] overflow-hidden bg-[#071A35] text-white"
    >
      <div
        className="
          mx-auto
          flex
          h-full
          max-w-7xl
          flex-col
          px-6
          py-10
          sm:px-6
          lg:px-8
          lg:py-12
        "
      >
        {/* ========================================================= */}
        {/* HEADER                                                    */}
        {/* ========================================================= */}

        <div className="flex shrink-0 items-end justify-between gap-8">
          <div>
            {/* Eyebrow */}
            <p
              className="
                mb-4
                text-[10px]
                font-semibold
                uppercase
                tracking-[0.28em]
                text-[#6DB7FF]
                sm:text-[11px]
              "
            >
              Industries & Verticals
            </p>

            {/* Heading */}
            <h2
              className="
                max-w-4xl
                text-4xl
                font-bold
                leading-[0.98]
                tracking-[-0.045em]
                sm:text-5xl
                lg:text-[60px]
              "
            >
              Performance across{" "}
              <span className="text-[#6DB7FF]">
                growing markets.
              </span>
            </h2>
          </div>

          {/* Explore counter */}
          <div className="hidden items-center gap-4 lg:flex">
            <span
              className="
                text-[10px]
                font-semibold
                uppercase
                tracking-[0.18em]
                text-white/30
              "
            >
              Explore
            </span>

            <span className="text-sm font-semibold text-[#6DB7FF]">
              {verticals[activeIndex].number} / 06
            </span>
          </div>
        </div>

        {/* ========================================================= */}
        {/* CAROUSEL                                                  */}
        {/* ========================================================= */}

        <div
          className="relative mt-8 min-h-0 flex-1 overflow-hidden lg:mt-10"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* ===================================================== */}
          {/* LEFT ARROW                                             */}
          {/* ===================================================== */}

          <button
            type="button"
            onClick={prevSlide}
            aria-label="Previous vertical"
            className="
              absolute
              left-3
              top-1/2
              z-30
              flex
              h-11
              w-11
              -translate-y-1/2
              items-center
              justify-center
              rounded-full
              border
              border-white/15
              bg-[#071A35]/70
              text-white
              backdrop-blur-md
              transition
              duration-300
              hover:border-[#6DB7FF]/50
              hover:bg-[#1261F2]
              lg:left-6
            "
          >
            <span className="text-xl">←</span>
          </button>

          {/* ===================================================== */}
          {/* RIGHT ARROW                                            */}
          {/* ===================================================== */}

          <button
            type="button"
            onClick={nextSlide}
            aria-label="Next vertical"
            className="
              absolute
              right-3
              top-1/2
              z-30
              flex
              h-11
              w-11
              -translate-y-1/2
              items-center
              justify-center
              rounded-full
              border
              border-white/15
              bg-[#071A35]/70
              text-white
              backdrop-blur-md
              transition
              duration-300
              hover:border-[#6DB7FF]/50
              hover:bg-[#1261F2]
              lg:right-6
            "
          >
            <span className="text-xl">→</span>
          </button>

          {/* ===================================================== */}
          {/* SLIDE TRACK                                             */}
          {/* ===================================================== */}

          <div className="flex h-full items-center justify-center gap-4 lg:gap-6">
            {slides.map((slide) => {
              const isActive = slide.position === 0;

              return (
                <div
                  key={`${slide.position}-${slide.data.number}`}
                  className={`
                    relative
                    h-full
                    shrink-0
                    overflow-hidden
                    transition-all
                    duration-[900ms]
                    ease-[cubic-bezier(0.22,1,0.36,1)]

                    ${
                      isActive
                        ? "w-[82vw] sm:w-[78vw] lg:w-[78vw] xl:w-[80vw]"
                        : "w-[8vw] opacity-45 lg:w-[9vw]"
                    }
                  `}
                >
                  {/* ================================================= */}
                  {/* IMAGE                                              */}
                  {/* ================================================= */}

                  <img
                    src={slide.data.image}
                    alt={slide.data.title}
                    loading="eager"
                    decoding="async"
                    className={`
                      h-full
                      w-full
                      object-cover
                      transition-all
                      duration-[900ms]
                      ease-[cubic-bezier(0.22,1,0.36,1)]
                      ${
                        isActive
                          ? "scale-100"
                          : "scale-110"
                      }
                    `}
                  />

                  {/* ================================================= */}
                  {/* DARK OVERLAY                                        */}
                  {/* ================================================= */}

                  <div
                    className={`
                      absolute
                      inset-0
                      transition
                      duration-700

                      ${
                        isActive
                          ? "bg-gradient-to-t from-[#071A35]/90 via-[#071A35]/15 to-[#071A35]/10"
                          : "bg-[#071A35]/65"
                      }
                    `}
                  />

                  {/* ================================================= */}
                  {/* SIDE SLIDE LABEL                                    */}
                  {/* ================================================= */}

                  {!isActive && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span
                        className="
                          rotate-[-90deg]
                          whitespace-nowrap
                          text-[9px]
                          font-semibold
                          uppercase
                          tracking-[0.2em]
                          text-white/60
                        "
                      >
                        {slide.data.title}
                      </span>
                    </div>
                  )}

                  {/* ================================================= */}
                  {/* CURRENT IMAGE CONTENT                              */}
                  {/* ================================================= */}

                  {isActive && (
                    <div
                      key={slide.data.number}
                      className="
                        absolute
                        bottom-0
                        left-0
                        right-0
                        p-6
                        animate-[verticalContentIn_800ms_cubic-bezier(0.22,1,0.36,1)_both]
                        sm:p-8
                        lg:p-10
                      "
                    >
                      <div className="flex items-end justify-between gap-8">
                        <div className="max-w-3xl">
                          {/* Number */}
                          <div className="mb-3 flex items-center gap-3">
                            <span
                              className="
                                text-[10px]
                                font-semibold
                                uppercase
                                tracking-[0.2em]
                                text-[#6DB7FF]
                              "
                            >
                              {slide.data.number}
                            </span>

                            <span className="h-px w-8 bg-[#6DB7FF]/60" />
                          </div>

                          {/* Title */}
                          <h3
                            className="
                              text-3xl
                              font-bold
                              tracking-[-0.04em]
                              sm:text-4xl
                              lg:text-5xl
                            "
                          >
                            {slide.data.title}
                          </h3>

                          {/* Description */}
                          <p
                            className="
                              mt-3
                              max-w-2xl
                              text-xs
                              leading-6
                              text-white/65
                              sm:text-sm
                              sm:leading-7
                            "
                          >
                            {slide.data.description}
                          </p>
                        </div>

                        {/* Arrow */}
                        <span className="hidden text-2xl text-white/50 lg:block">
                          ↗
                        </span>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* ========================================================= */}
        {/* BOTTOM NAV                                                */}
        {/* ========================================================= */}

        <div className="flex shrink-0 items-center justify-between border-t border-white/10 pt-4">
          <div className="flex items-center gap-4">
            <span
              className="
                text-[9px]
                font-semibold
                uppercase
                tracking-[0.18em]
                text-white/30
              "
            >
              Industries
            </span>

            <div className="flex items-center gap-2">
              {verticals.map((vertical, index) => (
                <button
                  key={vertical.number}
                  type="button"
                  onClick={() => goToSlide(index)}
                  aria-label={`Go to ${vertical.title}`}
                  className="group flex items-center gap-1.5"
                >
                  <span
                    className={`
                      text-[9px]
                      font-semibold
                      transition-colors
                      duration-300

                      ${
                        index === activeIndex
                          ? "text-[#6DB7FF]"
                          : "text-white/25 group-hover:text-white/60"
                      }
                    `}
                  >
                    {vertical.number}
                  </span>

                  <span
                    className={`
                      h-px
                      transition-all
                      duration-500

                      ${
                        index === activeIndex
                          ? "w-7 bg-[#6DB7FF]"
                          : "w-0 bg-white/40 group-hover:w-4"
                      }
                    `}
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Progress */}
          <div className="hidden w-32 overflow-hidden bg-white/10 sm:block">
            <div
              key={activeIndex}
              className="
                h-px
                bg-[#6DB7FF]
                animate-[verticalProgress_5000ms_linear_both]
              "
              style={{
                animationPlayState: isPaused
                  ? "paused"
                  : "running",
              }}
            />
          </div>
        </div>
      </div>

      {/* ========================================================= */}
      {/* ANIMATIONS                                                */}
      {/* ========================================================= */}

      <style>{`
        @keyframes verticalContentIn {
          from {
            opacity: 0;
            transform: translateY(24px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes verticalProgress {
          from {
            width: 0%;
          }

          to {
            width: 100%;
          }
        }
      `}</style>
    </section>
  );
}

export default VerticalsSection;