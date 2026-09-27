import { useEffect, useRef, useState } from "react";

function SectionReveal({ children, index = 0, className = "" }) {
  const sectionRef = useRef(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let ticking = false;

    const update = () => {
      const section = sectionRef.current;
      if (!section) return;

      const rect = section.getBoundingClientRect();
      const vh = window.innerHeight;

      // Section enters from bottom
      const raw = (vh - rect.top) / vh;

      const value = Math.min(Math.max(raw, 0), 1);

      setProgress(value);
      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(update);
        ticking = true;
      }
    };

    update();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    window.addEventListener("resize", update);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", update);
    };
  }, []);

  // Smooth cinematic movement
  const eased =
    1 - Math.pow(1 - progress, 4);

  const translateY = 100 - eased * 100;
  const scale = 0.94 + eased * 0.06;
  const opacity = 0.7 + eased * 0.3;

  return (
    <section
      ref={sectionRef}
      className={`sticky top-0 w-full min-h-[100svh] ${className}`}
      style={{
        zIndex: 100 + index,
      }}
    >
      <div
        className="min-h-[100svh] w-full transform-gpu"
        style={{
          transform: `
            translate3d(0, ${translateY}px, 0)
            scale(${scale})
          `,
          opacity,
          willChange: "transform, opacity",
        }}
      >
        {children}
      </div>
    </section>
  );
}

export default SectionReveal;