function SolutionsSection() {
  const solutions = [
    {
      number: "01",
      title: "Mobile",
      description:
        "Acquire users through high-performance mobile campaigns across apps and devices.",
    },
    {
      number: "02",
      title: "Display",
      description:
        "Reach relevant audiences at scale through targeted digital advertising.",
    },
    {
      number: "03",
      title: "Performance",
      description:
        "Build campaigns around measurable outcomes, optimization, and real performance.",
    },
    {
      number: "04",
      title: "Partner",
      description:
        "Connect with quality traffic partners to build scalable performance campaigns.",
    },
  ];

  return (
    <section
      id="solutions"
      className="min-h-[100svh] bg-[#071A35]"
    >
      <div className="mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-center px-6 py-16 lg:px-8 lg:py-20">

        {/* ================= HEADER ================= */}
        <div className="max-w-4xl">

          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.28em] text-[#6DB7FF]">
            Our Solutions
          </p>

          <h2 className="text-5xl font-bold leading-[1.02] tracking-[-0.04em] text-white sm:text-6xl lg:text-7xl">
            Performance built
            <br />
            for every channel.
          </h2>

        </div>


        {/* ================= SOLUTIONS ================= */}
        <div className="mt-14 grid gap-px overflow-hidden border border-white/10 bg-white/10 md:grid-cols-2">

          {solutions.map((solution) => (
            <div
              key={solution.number}
              className="group bg-[#071A35] p-7 transition-colors duration-300 hover:bg-[#0D2850] lg:p-10"
            >

              {/* Number + Arrow */}
              <div className="flex items-center justify-between">

                <span className="text-sm font-semibold text-[#6DB7FF]">
                  {solution.number}
                </span>

                <span className="text-xl text-white/40 transition-all duration-300 group-hover:translate-x-1 group-hover:text-[#6DB7FF]">
                  ↗
                </span>

              </div>


              {/* Title */}
              <h3 className="mt-10 text-2xl font-semibold tracking-tight text-white lg:text-3xl">
                {solution.title}
              </h3>


              {/* Description */}
              <p className="mt-4 max-w-md text-sm leading-6 text-white/60 lg:text-base lg:leading-7">
                {solution.description}
              </p>


              {/* Bottom Accent */}
              <div className="mt-8 h-px w-10 bg-[#6DB7FF] transition-all duration-300 group-hover:w-20" />

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default SolutionsSection;