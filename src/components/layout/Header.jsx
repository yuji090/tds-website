function Header() {
  return (
    <header className="absolute left-0 top-0 z-50 w-full">

      {/* Desktop */}
      <div className="hidden h-[96px] items-center justify-end px-6 lg:px-10 md:flex">

        <nav className="flex items-center gap-7 rounded-full border border-white/15 bg-[#061936]/60 px-5 py-2.5 shadow-xl backdrop-blur-md lg:gap-8">

          <a
            href="#solutions"
            className="text-sm font-medium text-white/90 transition hover:text-[#6DB7FF]"
          >
            Solutions
          </a>

          <a
            href="#advertisers"
            className="text-sm font-medium text-white/90 transition hover:text-[#6DB7FF]"
          >
            Advertisers
          </a>

          <a
            href="#publishers"
            className="text-sm font-medium text-white/90 transition hover:text-[#6DB7FF]"
          >
            Publishers
          </a>

          <a
            href="#about"
            className="text-sm font-medium text-white/90 transition hover:text-[#6DB7FF]"
          >
            About
          </a>

          <a
            href="#insights"
            className="text-sm font-medium text-white/90 transition hover:text-[#6DB7FF]"
          >
            Insights
          </a>

          <a
            href="#contact"
            className="ml-1 rounded-full bg-[#1261F2] px-5 py-2.5 text-sm font-semibold text-white shadow-md transition hover:bg-[#0d4fd1]"
          >
            Get in touch
          </a>

        </nav>

      </div>


      {/* Mobile */}
      <div className="flex h-[76px] items-center justify-end px-5 md:hidden">

        <button
          type="button"
          aria-label="Open menu"
          className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-[#061936]/65 text-white shadow-lg backdrop-blur-md"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

      </div>

    </header>
  );
}

export default Header;