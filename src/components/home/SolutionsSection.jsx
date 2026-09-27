import { useEffect, useRef, useState } from "react";

import igaming from "../../assets/igaming.svg";
import ecomm from "../../assets/ecomm.png";
import finn from "../../assets/fin.jpg";
import travel from "../../assets/travel.png";

function SolutionsSection() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  const solutions = [
    {
      number: "01",
      title: "Mobile",
      description:
        "Acquire users through high-performance mobile campaigns across apps and devices.",
      image: finn,
    },
    {
      number: "02",
      title: "Display",
      description:
        "Reach relevant audiences at scale through targeted digital advertising.",
      image: ecomm,
    },
    {
      number: "03",
      title: "Performance",
      description:
        "Build campaigns around measurable outcomes, optimization, and real performance.",
      image: igaming,
    },
    {
      number: "04",
      title: "Partner",
      description:
        "Connect with quality traffic partners to build scalable performance campaigns.",
      image: travel,
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.2,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="solutions"
      className="min-h-[100svh] bg-[#071A35]"
    >
      <div className="mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-center px-6 py-16 lg:px-8 lg:py-20">

        {/* ================= HEADER ================= */}
        <div
          className={`
            max-w-4xl
            transition-all duration-1000
            ease-[cubic-bezier(0.22,1,0.36,1)]
            ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
            }
          `}
        >
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.28em] text-[#6DB7FF]">
            Our Services
          </p>

          <h2 className="text-5xl font-bold leading-[1.02] tracking-[-0.04em] text-white sm:text-6xl lg:text-7xl">
            Performance built
            <br />
            for every channel.
          </h2>
        </div>

        {/* ================= SERVICES ================= */}
        <div className="mt-14 grid gap-px overflow-hidden border border-white/10 bg-white/10 md:grid-cols-2">

          {solutions.map((solution, index) => (
            <div
              key={solution.number}
              className={`
                group relative min-h-[300px]
                overflow-hidden bg-[#071A35]
                p-7 lg:min-h-[320px] lg:p-10

                transition-all
                duration-[900ms]
                ease-[cubic-bezier(0.22,1,0.36,1)]

                ${
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-16 opacity-0"
                }
              `}
              style={{
                transitionDelay: `${200 + index * 140}ms`,
              }}
            >
              {/* ================= IMAGE ================= */}
              <div
                className={`
                  pointer-events-none absolute right-0 top-0
                  h-full w-[42%]

                  transition-all
                  duration-[1100ms]
                  ease-[cubic-bezier(0.22,1,0.36,1)]

                  ${
                    isVisible
                      ? "translate-x-0 opacity-100"
                      : "translate-x-16 opacity-0"
                  }
                `}
                style={{
                  transitionDelay: `${350 + index * 140}ms`,
                }}
              >
                <img
                  src={solution.image}
                  alt=""
                  className={`
                    h-full w-full object-cover

                    transition-transform
                    duration-[1400ms]
                    ease-[cubic-bezier(0.22,1,0.36,1)]

                    ${
                      isVisible
                        ? "scale-100"
                        : "scale-110"
                    }
                  `}
                />

                {/* Image fade into background */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#071A35] via-[#071A35]/45 to-transparent" />

                <div className="absolute inset-0 bg-[#071A35]/20" />
              </div>

              {/* ================= CONTENT ================= */}
              <div className="relative z-10 flex h-full flex-col justify-between">

                {/* Number + Arrow */}
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold text-[#6DB7FF]">
                    {solution.number}
                  </span>

                  <span
                    className={`
                      text-xl text-white/40
                      transition-all duration-700

                      ${
                        isVisible
                          ? "translate-x-0 opacity-100"
                          : "translate-x-3 opacity-0"
                      }
                    `}
                    style={{
                      transitionDelay: `${500 + index * 140}ms`,
                    }}
                  >
                    ↗
                  </span>
                </div>

                {/* Main Content */}
                <div className="mt-16 max-w-[65%]">
                  <h3 className="text-2xl font-semibold tracking-tight text-white lg:text-3xl">
                    {solution.title}
                  </h3>

                  <p className="mt-4 text-sm leading-6 text-white/60 lg:text-base lg:leading-7">
                    {solution.description}
                  </p>
                </div>

                {/* Bottom Accent */}
                <div
                  className={`
                    mt-8 h-px bg-[#6DB7FF]

                    transition-all
                    duration-700
                    ease-out

                    ${
                      isVisible
                        ? "w-20"
                        : "w-0"
                    }
                  `}
                  style={{
                    transitionDelay: `${650 + index * 140}ms`,
                  }}
                />
              </div>

              {/* Ghost Number */}
              <span
                className={`
                  pointer-events-none absolute
                  -bottom-8 -right-3
                  text-[150px] font-black leading-none
                  tracking-[-0.08em]
                  text-white/[0.025]

                  transition-all
                  duration-1000

                  ${
                    isVisible
                      ? "translate-x-0 opacity-100"
                      : "translate-x-10 opacity-0"
                  }
                `}
                style={{
                  transitionDelay: `${400 + index * 140}ms`,
                }}
              >
                {solution.number}
              </span>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}

export default SolutionsSection;