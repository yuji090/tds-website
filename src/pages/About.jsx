import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

function About() {
  return (
    <>
      <Header />

      <main className="bg-white text-[#071A35]">
        {/* Page Banner */}
        <section className="relative overflow-hidden bg-[#071A35] py-16 text-white sm:py-20">
          <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#6DB7FF]">
              About The Digital Sole
            </p>

            <h1 className="mt-4 max-w-3xl text-4xl font-bold tracking-[-0.045em] sm:text-5xl lg:text-7xl">
              Performance marketing.
              <br />
              <span className="text-[#6DB7FF]">
                Built around growth.
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-7 text-white/60 sm:text-lg sm:leading-8">
              We help advertisers grow through performance-driven campaigns
              and help publishers turn quality traffic into measurable
              business opportunities.
            </p>
          </div>

          <div className="pointer-events-none absolute -right-24 -top-32 h-96 w-96 rounded-full border border-white/[0.07]" />
          <div className="pointer-events-none absolute -right-12 -top-20 h-72 w-72 rounded-full border border-white/[0.07]" />
        </section>

        {/* About Introduction */}
        <section className="py-20 sm:py-28">
          <div className="mx-auto grid max-w-7xl gap-12 px-6 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24 lg:px-10">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#1261F2]">
                Who We Are
              </p>

              <h2 className="mt-5 text-3xl font-bold leading-tight tracking-[-0.04em] sm:text-4xl lg:text-5xl">
                Connecting traffic with opportunity.
              </h2>
            </div>

            <div className="space-y-6 text-base leading-8 text-slate-600 sm:text-lg">
              <p>
                The Digital Sole is a performance-driven digital marketing
                company focused on helping businesses grow faster, smarter,
                and more profitably through digital advertising and website
                monetization.
              </p>

              <p>
                We combine strategy, data, and hands-on execution to connect
                advertisers with relevant audiences and publishers with
                performance-focused campaigns.
              </p>

              <p>
                Our approach focuses on measurable outcomes, transparent
                tracking, and partnerships built around campaign performance
                and long-term growth.
              </p>
            </div>
          </div>
        </section>

        {/* What We Do */}
        <section className="border-y border-slate-200 bg-slate-50 py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#1261F2]">
                What We Do
              </p>

              <h2 className="mt-5 text-3xl font-bold tracking-[-0.04em] sm:text-5xl">
                The right connections.
                <br />
                <span className="text-[#1261F2]">
                  Measurable outcomes.
                </span>
              </h2>
            </div>

            <div className="mt-14 grid gap-0 border-t border-slate-200 md:grid-cols-3">
              <article className="border-b border-slate-200 py-8 md:border-b-0 md:border-r md:pr-8">
                <span className="text-sm font-semibold text-[#1261F2]">
                  01
                </span>

                <h3 className="mt-5 text-xl font-bold">
                  Performance Marketing
                </h3>

                <p className="mt-4 text-sm leading-7 text-slate-500">
                  Campaigns focused on measurable actions, relevant audiences,
                  and performance-based growth.
                </p>
              </article>

              <article className="border-b border-slate-200 py-8 md:border-b-0 md:border-r md:px-8">
                <span className="text-sm font-semibold text-[#1261F2]">
                  02
                </span>

                <h3 className="mt-5 text-xl font-bold">
                  Publisher Partnerships
                </h3>

                <p className="mt-4 text-sm leading-7 text-slate-500">
                  Connecting publishers and traffic partners with relevant
                  campaigns and monetization opportunities.
                </p>
              </article>

              <article className="py-8 md:pl-8">
                <span className="text-sm font-semibold text-[#1261F2]">
                  03
                </span>

                <h3 className="mt-5 text-xl font-bold">
                  Campaign Optimization
                </h3>

                <p className="mt-4 text-sm leading-7 text-slate-500">
                  Using campaign data and tracking insights to understand
                  performance and identify opportunities to scale.
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* Our Approach */}
        <section className="py-20 sm:py-28">
          <div className="mx-auto grid max-w-7xl gap-12 px-6 sm:px-8 lg:grid-cols-2 lg:items-center lg:gap-24 lg:px-10">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#1261F2]">
                Our Approach
              </p>

              <h2 className="mt-5 text-3xl font-bold leading-tight tracking-[-0.04em] sm:text-5xl">
                Growth should be measurable.
              </h2>

              <p className="mt-6 text-base leading-8 text-slate-600 sm:text-lg">
                Every campaign has different goals. We focus on understanding
                those goals, finding relevant traffic opportunities, and
                evaluating results through meaningful performance data.
              </p>
            </div>

            <div className="border-l-2 border-[#1261F2] pl-6 sm:pl-10">
              {[
                {
                  number: "01",
                  title: "Understand the objective",
                  text: "Identify campaign goals, audiences, and success metrics.",
                },
                {
                  number: "02",
                  title: "Build relevant partnerships",
                  text: "Connect advertisers and publishers with suitable opportunities.",
                },
                {
                  number: "03",
                  title: "Measure and optimize",
                  text: "Use performance insights to improve results and guide scaling.",
                },
              ].map((step) => (
                <div key={step.number} className="relative pb-9 last:pb-0">
                  <span className="absolute -left-[31px] top-1 flex h-4 w-4 items-center justify-center rounded-full border-2 border-[#1261F2] bg-white sm:-left-[47px]">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#1261F2]" />
                  </span>

                  <p className="text-xs font-semibold tracking-widest text-[#1261F2]">
                    {step.number}
                  </p>

                  <h3 className="mt-2 text-lg font-bold sm:text-xl">
                    {step.title}
                  </h3>

                  <p className="mt-2 text-sm leading-7 text-slate-500">
                    {step.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-[#071A35] py-16 text-white sm:py-20">
          <div className="mx-auto flex max-w-7xl flex-col gap-8 px-6 sm:px-8 md:flex-row md:items-center md:justify-between lg:px-10">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#6DB7FF]">
                Let's Work Together
              </p>

              <h2 className="mt-4 max-w-2xl text-3xl font-bold tracking-[-0.04em] sm:text-4xl lg:text-5xl">
                Let's build something that performs.
              </h2>
            </div>

            <a
              href="/contact"
              className="inline-flex w-fit shrink-0 items-center gap-3 rounded-full bg-[#1261F2] px-7 py-4 text-sm font-semibold text-white transition hover:bg-[#0d4fd1]"
            >
              Get in touch <span>→</span>
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default About;