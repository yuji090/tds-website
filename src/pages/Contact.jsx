
import { useState } from "react";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

const initialForm = {
  name: "",
  email: "",
  company: "",
  service: "",
  message: "",
};

const inputClass =
  "mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3.5 text-sm text-[#0F172A] outline-none transition placeholder:text-slate-400 focus:border-[#1261F2] focus:ring-4 focus:ring-blue-100";

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ type: "", message: "" });

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setStatus({ type: "", message: "" });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;

    if (!accessKey) {
      setStatus({
        type: "error",
        message: "Contact form is not configured. Please try again later.",
      });
      return;
    }

    setLoading(true);
    setStatus({ type: "", message: "" });

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: accessKey,
          subject: `New TDS enquiry from ${form.name}`,
          from_name: "The Digital Sole Website",
          name: form.name,
          email: form.email,
          company: form.company || "Not provided",
          service: form.service || "Not specified",
          message: form.message,
        }),
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.message || "Unable to send your message.");
      }

      setStatus({
        type: "success",
        message:
          "Thanks for reaching out! Your message has been sent successfully.",
      });
      setForm(initialForm);
    } catch (error) {
      setStatus({
        type: "error",
        message:
          error.message || "Something went wrong. Please try again.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Header />

      <main className="overflow-hidden bg-white">
        {/* Hero */}
        <section className="relative overflow-hidden bg-[#071A35] px-5 pb-16 pt-32 text-white sm:px-8 sm:pb-20 sm:pt-36 lg:px-12 lg:pt-40">
          <div className="relative z-10 mx-auto max-w-7xl">
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.24em] text-[#6DB7FF]">
              Get in touch
            </p>

            <h1 className="max-w-4xl text-4xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-7xl">
              Let&apos;s talk about
              <span className="block text-[#6DB7FF]">
                your next big move.
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-7 text-white/70 sm:text-lg sm:leading-8">
              Have a campaign to scale or a partnership in mind?
              Tell us what you&apos;re working on, and let&apos;s explore
              what we can achieve together.
            </p>
          </div>

          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-20 -top-24 h-72 w-72 rounded-full border border-white/10 sm:h-96 sm:w-96"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-8 -top-12 h-52 w-52 rounded-full border border-white/10 sm:h-72 sm:w-72"
          />
        </section>

        {/* Contact form */}
        <section
          id="contact"
          className="px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24"
        >
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
            {/* Left side */}
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#1261F2]">
                Start a conversation
              </p>

              <h2 className="mt-4 max-w-md text-3xl font-semibold leading-tight tracking-tight text-[#071A35] sm:text-4xl">
                Good partnerships start with a conversation.
              </h2>

              <p className="mt-5 max-w-md text-base leading-7 text-slate-600">
                Whether you&apos;re an advertiser looking for measurable
                growth or a publisher exploring new opportunities, we&apos;d
                like to hear from you.
              </p>

              <div className="mt-10 border-t border-slate-200">
                <div className="flex gap-4 border-b border-slate-200 py-6">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#EEF5FF] text-[#1261F2]">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.7"
                      className="h-5 w-5"
                      aria-hidden="true"
                    >
                      <rect x="3" y="5" width="18" height="14" rx="2" />
                      <path d="m4 7 8 6 8-6" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#071A35]">
                      Email enquiries
                    </h3>
                    <p className="mt-1 text-sm leading-6 text-slate-500">
                      Share your requirements through the form and
                      we&apos;ll get back to you.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 border-b border-slate-200 py-6">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#EEF5FF] text-[#1261F2]">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.7"
                      className="h-5 w-5"
                      aria-hidden="true"
                    >
                      <path d="M12 3 20 7v5c0 5-3.5 8-8 9-4.5-1-8-4-8-9V7l8-4Z" />
                      <path d="m9 12 2 2 4-4" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#071A35]">
                      Performance-focused
                    </h3>
                    <p className="mt-1 text-sm leading-6 text-slate-500">
                      Campaigns, traffic partnerships and measurable growth.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right side */}
            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-[0_12px_50px_rgba(7,26,53,0.06)] sm:p-8 lg:p-10">
              <h2 className="text-2xl font-semibold tracking-tight text-[#071A35]">
                Send us a message
              </h2>
              <p className="mt-2 text-sm leading-6 text-slate-500">
                Fill in the details below and we&apos;ll be in touch.
              </p>

              <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="name"
                      className="text-sm font-medium text-slate-700"
                    >
                      Full name *
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      autoComplete="name"
                      placeholder="Your full name"
                      value={form.name}
                      onChange={handleChange}
                      className={inputClass}
                      maxLength={100}
                      required
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="text-sm font-medium text-slate-700"
                    >
                      Work email *
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      placeholder="you@company.com"
                      value={form.email}
                      onChange={handleChange}
                      className={inputClass}
                      maxLength={254}
                      required
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="company"
                    className="text-sm font-medium text-slate-700"
                  >
                    Company / Website
                  </label>
                  <input
                    id="company"
                    name="company"
                    type="text"
                    placeholder="Your company name or website"
                    value={form.company}
                    onChange={handleChange}
                    className={inputClass}
                    maxLength={200}
                  />
                </div>

                <div>
                  <label
                    htmlFor="service"
                    className="text-sm font-medium text-slate-700"
                  >
                    I&apos;m interested in
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={form.service}
                    onChange={handleChange}
                    className={inputClass}
                  >
                    <option value="">Select an option</option>
                    <option value="Advertiser Partnerships">
                      Advertiser Partnerships
                    </option>
                    <option value="Publisher Partnerships">
                      Publisher Partnerships
                    </option>
                    <option value="Performance Marketing">
                      Performance Marketing
                    </option>
                    <option value="Campaign Enquiry">
                      Campaign Enquiry
                    </option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="text-sm font-medium text-slate-700"
                  >
                    Your message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    placeholder="Tell us about your goals or requirements..."
                    value={form.message}
                    onChange={handleChange}
                    className={`${inputClass} resize-y`}
                    maxLength={5000}
                    required
                  />
                </div>

                {status.message && (
                  <div
                    role="status"
                    aria-live="polite"
                    className={`rounded-xl border px-4 py-3 text-sm leading-6 ${
                      status.type === "success"
                        ? "border-green-200 bg-green-50 text-green-800"
                        : "border-red-200 bg-red-50 text-red-700"
                    }`}
                  >
                    {status.message}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="inline-flex w-full items-center justify-center gap-3 rounded-full bg-[#1261F2] px-6 py-4 text-sm font-semibold text-white transition hover:bg-[#0D4FD1] focus:outline-none focus:ring-4 focus:ring-blue-200 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
                >
                  {loading ? "Sending message..." : "Send message"}
                  {!loading && (
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      className="h-4 w-4"
                      aria-hidden="true"
                    >
                      <path d="M5 12h14M13 6l6 6-6 6" />
                    </svg>
                  )}
                </button>

                <p className="text-xs leading-5 text-slate-400">
                  Your details will be used to respond to your enquiry.
                </p>
              </form>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
