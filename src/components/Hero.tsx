const VIDEO_SRC =
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260314_131748_f2ca2a28-fed7-44c8-b9a9-bd9acdd5ec31.mp4";

const displayFont = { fontFamily: "'Instrument Serif', serif" } as const;

const navLinks = [
  { label: "Home", active: true },
  { label: "Studio", active: false },
  { label: "About", active: false },
  { label: "Journal", active: false },
  { label: "Reach Us", active: false },
];

export default function Hero() {
  return (
    <main className="relative flex min-h-screen w-full flex-col overflow-hidden bg-background">
      {/* Fullscreen looping background video */}
      <video
        className="absolute inset-0 z-0 h-full w-full object-cover"
        src={VIDEO_SRC}
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Navigation */}
      <nav className="relative z-10 mx-auto flex w-full max-w-7xl items-center justify-between px-8 py-6">
        <a
          href="#"
          className="text-3xl tracking-tight text-foreground"
          style={displayFont}
        >
          vasu
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href="#"
              className={`text-sm transition-colors hover:text-foreground ${
                link.active ? "text-foreground" : "text-muted-foreground"
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>

        <a
          href="https://vasudev.dpdns.org/"
          target="_blank"
          rel="noopener noreferrer"
          className="liquid-glass inline-block rounded-full px-6 py-2.5 text-sm text-foreground transition-transform duration-300 hover:scale-[1.03]"
        >
          Begin Journey
        </a>
      </nav>

      {/* Hero content */}
      <section className="relative z-10 flex w-full flex-grow flex-col items-center px-6 pb-40 pt-32 py-[90px] text-center">
        <h1
          className="animate-fade-rise max-w-7xl text-5xl font-normal leading-[0.95] tracking-[-2.46px] text-foreground sm:text-7xl md:text-8xl"
          style={displayFont}
        >
          Where <em className="not-italic text-muted-foreground">dreams</em>{" "}
          rise{" "}
          <em className="not-italic text-muted-foreground">
            through the silence.
          </em>
        </h1>

        <p className="animate-fade-rise-delay mt-8 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
          We're designing tools for deep thinkers, bold creators, and quiet
          rebels. Amid the chaos, we build digital spaces for sharp focus and
          inspired work.
        </p>

        <a
          href="https://vasudev.dpdns.org/"
          target="_blank"
          rel="noopener noreferrer"
          className="liquid-glass animate-fade-rise-delay-2 mt-12 inline-block cursor-pointer rounded-full px-14 py-5 text-base text-foreground transition-transform duration-300 hover:scale-[1.03]"
        >
          Begin Journey
        </a>
      </section>

      {/* Designer credit */}
      <footer className="relative z-10 mt-auto border-t border-white/10 px-6 py-6 text-center">
        <a
          href="https://vasudev.dpdns.org/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[13px] tracking-wide text-white/60 transition-colors duration-300 hover:text-white"
        >
          Designed &amp; Developed by Vasu
        </a>
      </footer>
    </main>
  );
}
