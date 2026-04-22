import { useState, useEffect, useRef } from "react";

// ─── FONT IMPORT via style tag ───────────────────────────────────────────────
const FontStyle = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:ital,wght@0,300;0,400;0,500;1,300&family=Space+Mono:wght@400;700&display=swap');

    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

    :root {
      --black: #0A0A0A;
      --white: #FFFFFF;
      --red: #D70011;
      --gray: #F4F4F4;
      --gray-dark: #1A1A1A;
      --muted: #888888;
      --text: #0A0A0A;
      --text-muted: #777777;
      --border: rgba(0,0,0,0.09);
    }

    html { scroll-behavior: smooth; }

    body {
      background: var(--white);
      color: var(--text);
      font-family: 'DM Sans', sans-serif;
      font-weight: 300;
      overflow-x: hidden;
    }

    .bebas { font-family: 'Bebas Neue', sans-serif; letter-spacing: 0.02em; }
    .mono  { font-family: 'Space Mono', monospace; }

    /* ── Noise texture overlay ── */
    body::before {
      content: '';
      position: fixed;
      inset: 0;
      background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E");
      opacity: 0.025;
      pointer-events: none;
      z-index: 9999;
    }

    /* ── Custom scrollbar ── */
    ::-webkit-scrollbar { width: 3px; }
    ::-webkit-scrollbar-track { background: var(--white); }
    ::-webkit-scrollbar-thumb { background: var(--red); }

    /* ── Cursor dot ── */
    .cursor-dot {
      width: 8px; height: 8px;
      background: var(--red);
      border-radius: 50%;
      position: fixed;
      pointer-events: none;
      z-index: 10000;
      transform: translate(-50%, -50%);
      transition: transform 0.1s, opacity 0.3s;
    }

    /* ── Nav ── */
    nav {
      position: fixed; top: 0; left: 0; right: 0;
      z-index: 100;
      display: flex; align-items: center; justify-content: space-between;
      padding: 28px 60px;
      transition: background 0.4s, padding 0.4s;
    }
    nav.scrolled {
      background: rgba(255,255,255,0.95);
      backdrop-filter: blur(12px);
      padding: 18px 60px;
      border-bottom: 1px solid var(--border);
    }
    .nav-logo { display: flex; align-items: center; }
    .nav-logo img { height: 36px; }
    .nav-links { display: flex; gap: 40px; list-style: none; }
    .nav-links a {
      font-family: 'Space Mono', monospace;
      font-size: 11px;
      letter-spacing: 0.15em;
      text-transform: uppercase;
      color: rgba(0,0,0,0.45);
      text-decoration: none;
      transition: color 0.2s;
    }
    .nav-links a:hover { color: var(--black); }
    .nav-cta {
      font-family: 'Space Mono', monospace;
      font-size: 11px;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      color: var(--white);
      background: var(--red);
      border: none;
      padding: 12px 24px;
      cursor: pointer;
      transition: background 0.2s;
    }
    .nav-cta:hover { background: #ff0014; }

    /* ── Hero ── */
    .hero {
      min-height: 100vh;
      display: flex; flex-direction: column; justify-content: center;
      padding: 120px 60px 60px;
      position: relative;
      overflow: hidden;
      background: var(--white);
    }
    .hero-grid-line {
      position: absolute;
      top: 0; bottom: 0;
      width: 1px;
      background: rgba(0,0,0,0.05);
    }
    .hero-eyebrow {
      font-family: 'Space Mono', monospace;
      font-size: 11px;
      letter-spacing: 0.2em;
      text-transform: uppercase;
      color: var(--red);
      margin-bottom: 28px;
      display: flex; align-items: center; gap: 16px;
    }
    .hero-eyebrow::before {
      content: '';
      display: block;
      width: 40px; height: 1px;
      background: var(--red);
    }
    .hero-headline {
      font-family: 'Bebas Neue', sans-serif;
      font-size: clamp(38px, 4.5vw, 72px);
      line-height: 1;
      letter-spacing: 0.01em;
      max-width: 700px;
    }
    .hero-headline .accent { color: var(--red); }
    .hero-sub {
      max-width: 500px;
      font-size: 15px;
      line-height: 1.75;
      color: var(--text-muted);
      margin-top: 28px;
    }
    .hero-bottom {
      display: flex; align-items: center; gap: 32px;
      margin-top: 52px;
    }
    .hero-cta {
      display: inline-flex; align-items: center; gap: 16px;
      font-family: 'Space Mono', monospace;
      font-size: 12px;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      color: var(--white);
      background: var(--red);
      border: none;
      padding: 18px 36px;
      cursor: pointer;
      transition: all 0.2s;
      text-decoration: none;
    }
    .hero-cta:hover { background: #ff0014; gap: 24px; }
    .hero-counter {
      position: absolute;
      right: 5%; top: 50%;
      transform: translateY(-50%);
      font-family: 'Bebas Neue', sans-serif;
      font-size: clamp(120px, 15vw, 220px);
      color: rgba(0,0,0,0.03);
      pointer-events: none;
      line-height: 1;
      user-select: none;
    }

    /* ── Marquee ── */
    .marquee-strip {
      border-top: 1px solid var(--border);
      border-bottom: 1px solid var(--border);
      overflow: hidden;
      white-space: nowrap;
      padding: 20px 0;
      background: var(--black);
    }
    .marquee-track {
      display: inline-flex; gap: 0;
      animation: marquee 25s linear infinite;
    }
    .marquee-item {
      font-family: 'Bebas Neue', sans-serif;
      font-size: 14px;
      letter-spacing: 0.15em;
      color: rgba(255,255,255,0.3);
      padding: 0 40px;
      display: flex; align-items: center; gap: 40px;
    }
    .marquee-item span { color: var(--red); font-size: 20px; }
    @keyframes marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }

    /* ── Section base ── */
    section { padding: 80px 60px; }
    .section-label {
      font-family: 'Space Mono', monospace;
      font-size: 10px;
      letter-spacing: 0.25em;
      text-transform: uppercase;
      color: var(--red);
      margin-bottom: 32px;
      display: flex; align-items: center; gap: 16px;
    }
    .section-label::before {
      content: attr(data-num);
      color: rgba(0,0,0,0.2);
    }

    /* ── About ── */
    .about-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 48px;
      align-items: start;
    }
    .about-title {
      font-family: 'Bebas Neue', sans-serif;
      font-size: clamp(48px, 5vw, 80px);
      line-height: 1;
      letter-spacing: 0.01em;
      color: var(--black);
    }
    .about-title em { color: var(--red); font-style: normal; }
    .about-body {
      font-size: 15px;
      line-height: 1.85;
      color: var(--text-muted);
    }
    .about-body p + p { margin-top: 20px; }
    .stat-row {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      border-top: 1px solid var(--border);
      margin-top: 48px;
    }
    .stat-item {
      padding: 40px 0;
      border-right: 1px solid var(--border);
    }
    .stat-item:last-child { border-right: none; }
    .stat-num {
      font-family: 'Bebas Neue', sans-serif;
      font-size: 64px;
      color: var(--black);
      line-height: 1;
    }
    .stat-num span { color: var(--red); }
    .stat-label {
      font-family: 'Space Mono', monospace;
      font-size: 10px;
      letter-spacing: 0.15em;
      text-transform: uppercase;
      color: var(--muted);
      margin-top: 8px;
    }

    /* ── Services ── */
    .services-header {
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
      margin-bottom: 40px;
    }
    .services-title {
      font-family: 'Bebas Neue', sans-serif;
      font-size: clamp(48px, 5vw, 80px);
      line-height: 1;
      color: var(--black);
    }
    .service-list { border-top: 1px solid var(--border); }
    .service-item {
      display: grid;
      grid-template-columns: 80px 1fr 1fr auto;
      align-items: center;
      gap: 40px;
      padding: 36px 0;
      border-bottom: 1px solid var(--border);
      cursor: pointer;
      transition: all 0.3s;
    }
    .service-item:hover { padding-left: 16px; }
    .service-item:hover .service-num { color: var(--red); }
    .service-num {
      font-family: 'Space Mono', monospace;
      font-size: 11px;
      color: rgba(0,0,0,0.2);
      transition: color 0.3s;
    }
    .service-name {
      font-family: 'Bebas Neue', sans-serif;
      font-size: 36px;
      letter-spacing: 0.02em;
      color: var(--black);
    }
    .service-desc {
      font-size: 13px;
      color: var(--text-muted);
      line-height: 1.6;
    }
    .service-arrow {
      font-size: 20px;
      color: var(--red);
      opacity: 0;
      transform: translateX(-8px);
      transition: all 0.3s;
    }
    .service-item:hover .service-arrow { opacity: 1; transform: translateX(0); }

    /* ── Approach ── */
    .approach-section { background: var(--black); }
    .approach-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 1px;
      background: rgba(255,255,255,0.08);
      border: 1px solid rgba(255,255,255,0.08);
      margin-top: 40px;
    }
    .approach-card {
      background: var(--black);
      padding: 48px 40px;
      position: relative;
      overflow: hidden;
    }
    .approach-card::before {
      content: attr(data-step);
      position: absolute;
      top: -10px; right: 20px;
      font-family: 'Bebas Neue', sans-serif;
      font-size: 120px;
      color: rgba(255,255,255,0.03);
      line-height: 1;
    }
    .approach-card-icon {
      width: 40px; height: 40px;
      border: 1px solid var(--red);
      display: flex; align-items: center; justify-content: center;
      margin-bottom: 32px;
      color: var(--red);
    }
    .approach-card-title {
      font-family: 'Bebas Neue', sans-serif;
      font-size: 28px;
      margin-bottom: 16px;
      letter-spacing: 0.02em;
      color: var(--white);
    }
    .approach-card-body {
      font-size: 13px;
      line-height: 1.7;
      color: rgba(255,255,255,0.45);
    }

    /* ── Differentiators ── */
    .diff-wrap {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 1px;
      background: var(--border);
    }
    .diff-left {
      background: var(--white);
      padding: 60px;
      display: flex; flex-direction: column; justify-content: center;
    }
    .diff-right {
      background: var(--gray);
      padding: 60px;
    }
    .diff-title {
      font-family: 'Bebas Neue', sans-serif;
      font-size: clamp(40px, 4vw, 64px);
      line-height: 1;
      color: var(--black);
    }
    .diff-title .accent { color: var(--red); }
    .diff-list { list-style: none; margin-top: 48px; }
    .diff-list li {
      display: flex; align-items: flex-start; gap: 20px;
      padding: 20px 0;
      border-bottom: 1px solid var(--border);
      font-size: 14px;
      line-height: 1.6;
      color: var(--text-muted);
    }
    .diff-list li::before {
      content: '—';
      color: var(--red);
      font-family: 'Space Mono', monospace;
      flex-shrink: 0;
      margin-top: 2px;
    }

    /* ── Mission/Vision ── */
    .mv-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 1px;
      background: var(--border);
    }
    .mv-card {
      background: var(--white);
      padding: 48px;
      position: relative;
    }
    .mv-card::after {
      content: '';
      position: absolute;
      top: 0; left: 0;
      width: 3px; height: 100%;
      background: var(--red);
    }
    .mv-label {
      font-family: 'Space Mono', monospace;
      font-size: 10px;
      letter-spacing: 0.2em;
      text-transform: uppercase;
      color: var(--red);
      margin-bottom: 24px;
    }
    .mv-text {
      font-family: 'Bebas Neue', sans-serif;
      font-size: clamp(28px, 3vw, 44px);
      line-height: 1.1;
      letter-spacing: 0.01em;
      color: var(--black);
    }

    /* ── Gallery ── */
    .gallery-section { padding: 80px 0; background: var(--gray); }
    .gallery-header { padding: 0 60px 40px; }
    .gallery-grid {
      display: grid;
      grid-template-columns: repeat(5, 1fr);
      grid-auto-rows: 260px;
      gap: 2px;
    }
    .gallery-item {
      overflow: hidden;
      position: relative;
      background: #ddd;
      cursor: pointer;
    }
    .gallery-item:nth-child(3n+1) { grid-row: span 2; }
    .gallery-item img {
      width: 100%; height: 100%;
      object-fit: cover;
      transition: transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94), filter 0.4s;
      filter: grayscale(15%);
    }
    .gallery-item:hover img { transform: scale(1.06); filter: grayscale(0%); }
    .gallery-item-overlay {
      position: absolute; inset: 0;
      background: rgba(215,0,17,0);
      transition: background 0.4s;
    }
    .gallery-item:hover .gallery-item-overlay { background: rgba(215,0,17,0.08); }

    /* ── Clients ── */
    .clients-grid {
      display: grid;
      grid-template-columns: repeat(6, 1fr);
      gap: 1px;
      background: var(--border);
      border: 1px solid var(--border);
      margin-top: 40px;
    }
    .client-cell {
      background: var(--white);
      aspect-ratio: 3/2;
      display: flex; align-items: center; justify-content: center;
      padding: 24px;
      transition: background 0.2s;
    }
    .client-cell:hover { background: var(--gray); }
    .client-cell img {
      max-width: 100%; max-height: 50px;
      object-fit: contain;
      opacity: 0.35;
      transition: opacity 0.2s;
    }
    .client-cell:hover img { opacity: 0.8; }
    .client-placeholder {
      font-family: 'Space Mono', monospace;
      font-size: 10px;
      letter-spacing: 0.15em;
      text-transform: uppercase;
      color: rgba(0,0,0,0.15);
      text-align: center;
      line-height: 1.6;
    }

    /* ── Testimonials ── */
    .testimonials-section { background: var(--white); }
    .testimonials-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 1px;
      background: var(--border);
      border: 1px solid var(--border);
      margin-top: 40px;
    }
    .testimonial-card {
      background: var(--white);
      padding: 48px 40px;
    }
    .testimonial-quote {
      font-size: 32px;
      color: var(--red);
      font-family: 'Bebas Neue', sans-serif;
      line-height: 1;
      margin-bottom: 24px;
    }
    .testimonial-text {
      font-size: 14px;
      line-height: 1.8;
      color: var(--text-muted);
      font-style: italic;
    }
    .testimonial-author {
      margin-top: 32px;
      border-top: 1px solid var(--border);
      padding-top: 24px;
    }
    .testimonial-name {
      font-family: 'Space Mono', monospace;
      font-size: 11px;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      color: var(--black);
    }
    .testimonial-role {
      font-size: 12px;
      color: var(--muted);
      margin-top: 4px;
    }

    /* ── CTA Banner ── */
    .cta-banner {
      padding: 120px 60px;
      text-align: center;
      position: relative;
      overflow: hidden;
      background: var(--black);
    }
    .cta-banner::before {
      content: 'GROW';
      position: absolute;
      top: 50%; left: 50%;
      transform: translate(-50%, -50%);
      font-family: 'Bebas Neue', sans-serif;
      font-size: 400px;
      color: rgba(215,0,17,0.05);
      pointer-events: none;
      white-space: nowrap;
      line-height: 1;
    }
    .cta-banner-title {
      font-family: 'Bebas Neue', sans-serif;
      font-size: clamp(48px, 7vw, 100px);
      line-height: 1;
      position: relative;
      color: var(--white);
    }
    .cta-banner-sub {
      font-size: 15px;
      color: rgba(255,255,255,0.45);
      margin-top: 24px;
      max-width: 480px;
      margin-left: auto;
      margin-right: auto;
      line-height: 1.7;
      position: relative;
    }
    .cta-btn {
      display: inline-flex;
      align-items: center; gap: 16px;
      font-family: 'Space Mono', monospace;
      font-size: 12px;
      letter-spacing: 0.15em;
      text-transform: uppercase;
      color: var(--white);
      background: var(--red);
      border: none;
      padding: 20px 48px;
      cursor: pointer;
      margin-top: 48px;
      transition: all 0.2s;
      position: relative;
      text-decoration: none;
    }
    .cta-btn:hover { background: #ff0014; gap: 24px; }

    /* ── Footer ── */
    footer {
      background: var(--black);
      border-top: 1px solid rgba(255,255,255,0.06);
      padding: 80px 60px 40px;
    }
    .footer-top {
      display: grid;
      grid-template-columns: 1.5fr 1fr 1fr 1fr;
      gap: 60px;
      padding-bottom: 60px;
      border-bottom: 1px solid rgba(255,255,255,0.06);
    }
    .footer-brand img { height: 32px; filter: brightness(0) invert(1); }
    .footer-tagline {
      font-size: 13px;
      color: rgba(255,255,255,0.3);
      line-height: 1.7;
      margin-top: 20px;
    }
    .footer-col-title {
      font-family: 'Space Mono', monospace;
      font-size: 10px;
      letter-spacing: 0.2em;
      text-transform: uppercase;
      color: rgba(255,255,255,0.25);
      margin-bottom: 24px;
    }
    .footer-links { list-style: none; display: flex; flex-direction: column; gap: 12px; }
    .footer-links a {
      font-size: 14px;
      color: rgba(255,255,255,0.45);
      text-decoration: none;
      transition: color 0.2s;
    }
    .footer-links a:hover { color: var(--white); }
    .footer-bottom {
      display: flex; align-items: center; justify-content: space-between;
      padding-top: 32px;
    }
    .footer-copy {
      font-family: 'Space Mono', monospace;
      font-size: 10px;
      letter-spacing: 0.1em;
      color: rgba(255,255,255,0.2);
    }
    .footer-social { display: flex; gap: 24px; }
    .footer-social a {
      font-family: 'Space Mono', monospace;
      font-size: 10px;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      color: rgba(255,255,255,0.3);
      text-decoration: none;
      transition: color 0.2s;
    }
    .footer-social a:hover { color: var(--red); }

    /* ── Fade-in on scroll ── */
    .fade-up {
      opacity: 0;
      transform: translateY(40px);
      transition: opacity 0.7s ease, transform 0.7s ease;
    }
    .fade-up.visible {
      opacity: 1;
      transform: translateY(0);
    }

    @media (max-width: 1024px) {
      nav { padding: 24px 32px; }
      nav.scrolled { padding: 16px 32px; }
      .hero { padding: 100px 32px 60px; }
      section { padding: 60px 32px; }
      .about-grid { grid-template-columns: 1fr; gap: 32px; }
      .services-header { flex-direction: column; align-items: flex-start; gap: 16px; }
      .service-item { grid-template-columns: 60px 1fr auto; }
      .service-desc { display: none; }
      .approach-grid { grid-template-columns: 1fr; }
      .diff-wrap { grid-template-columns: 1fr; }
      .diff-left, .diff-right { padding: 40px 32px; }
      .mv-grid { grid-template-columns: 1fr; }
      .gallery-grid { grid-template-columns: repeat(3, 1fr); }
      .gallery-item:nth-child(3n+1) { grid-row: span 1; }
      .clients-grid { grid-template-columns: repeat(3, 1fr); }
      .testimonials-grid { grid-template-columns: 1fr; }
      .footer-top { grid-template-columns: 1fr 1fr; gap: 40px; }
    }

    @media (max-width: 640px) {
      nav { padding: 20px 24px; }
      .nav-links { display: none; }
      .hero { padding: 90px 24px 48px; }
      section { padding: 48px 24px; }
      .stat-row { grid-template-columns: 1fr; }
      .gallery-grid { grid-template-columns: repeat(2, 1fr); }
      .clients-grid { grid-template-columns: repeat(2, 1fr); }
      .footer-top { grid-template-columns: 1fr; }
      .footer-bottom { flex-direction: column; gap: 16px; text-align: center; }
      .cta-banner { padding: 60px 24px; }
    }
  `}</style>
);

// ─── SAMPLE GALLERY IMAGES (replace with your actual imports) ─────────────────
const galleryImages = [
  { src: "/gallery/sample-1.jpg",  alt: "Brand campaign" },
  { src: "/gallery/sample-2.jpg",  alt: "Content production" },
  { src: "/gallery/sample-3.jpg",  alt: "Digital marketing" },
  { src: "/gallery/sample-4.jpg",  alt: "Social media design" },
  { src: "/gallery/sample-5.jpg",  alt: "Video production" },
  { src: "/gallery/sample-6.jpg",  alt: "Strategy deck" },
  { src: "/gallery/sample-7.jpg",  alt: "Brand identity" },
  { src: "/gallery/sample-8.jpg",  alt: "Campaign visuals" },
  { src: "/gallery/sample-9.jpg",  alt: "Typography design" },
  { src: "/gallery/sample-10.jpg", alt: "Event marketing" },
];

// ─── FADE-UP HOOK ─────────────────────────────────────────────────────────────
function useFadeUp() {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { el.classList.add("visible"); obs.disconnect(); } },
      { threshold: 0.12 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return ref;
}

// ─── COMPONENTS ───────────────────────────────────────────────────────────────

function Cursor() {
  const dot = useRef(null);
  useEffect(() => {
    const move = (e) => {
      if (dot.current) {
        dot.current.style.left = e.clientX + "px";
        dot.current.style.top  = e.clientY + "px";
      }
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);
  return <div className="cursor-dot" ref={dot} />;
}

function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);
  return (
    <nav className={scrolled ? "scrolled" : ""}>
      <div className="nav-logo">
        {/* Replace src with your actual logo import */}
        <img src="/SEDA_NEW_LOGO.png" alt="SEDA Media Limited" />
      </div>
      <ul className="nav-links">
        {["About", "Services", "Work", "Approach"].map(l => (
          <li key={l}><a href={`#${l.toLowerCase()}`}>{l}</a></li>
        ))}
      </ul>
      <button className="nav-cta">Start Project</button>
    </nav>
  );
}

function Hero() {
  return (
    <section className="hero" id="home">
      {[20, 40, 60, 80].map(p => (
        <div className="hero-grid-line" key={p} style={{ left: `${p}%` }} />
      ))}
      <div className="hero-counter">10+</div>
      <div className="hero-eyebrow">Creative &amp; Strategy Agency</div>
      <h1 className="hero-headline">
        Grow Your Brand With Strategy,<br />
        Content, and Design That<br />
        <span className="accent">Actually Works.</span>
      </h1>
      <p className="hero-sub">
        We help businesses stand out, attract the right audience, and convert attention into real growth through powerful content and smart marketing.
      </p>
      <div className="hero-bottom">
        <a href="#contact" className="hero-cta">
          Start Your Project Today <span>→</span>
        </a>
      </div>
    </section>
  );
}

function Marquee() {
  const items = ["Content Production", "Digital Marketing", "Media Strategy", "Brand Identity", "Visual Design", "Campaign Execution"];
  const doubled = [...items, ...items];
  return (
    <div className="marquee-strip">
      <div className="marquee-track">
        {doubled.map((t, i) => (
          <span className="marquee-item" key={i}>{t}<span>✦</span></span>
        ))}
      </div>
    </div>
  );
}

function About() {
  const ref = useFadeUp();
  return (
    <section id="about">
      <div className="section-label" data-num="01">Who We Are</div>
      <div className="about-grid fade-up" ref={ref}>
        <div>
          <h2 className="about-title">
            Your Brand<br />Deserves More<br />Than Just<br /><em>"Nice Designs."</em>
          </h2>
          <p style={{ fontFamily: "'Space Mono', monospace", fontSize: "11px", letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--muted)", marginTop: "24px" }}>
            Everything You Need to Grow — In One Place
          </p>
        </div>
        <div className="about-body">
          <p>SEDA Media Limited is a creative agency built on one simple idea: <strong style={{color:"#0A0A0A"}}>Great design means nothing without results.</strong></p>
          <p>With over a decade of experience working with brands both locally and globally, we bring a depth of insight that goes beyond aesthetics, delivering solutions that drive real business outcomes.</p>
          <p>We partner with businesses to create content, design, and strategies that don't just capture attention, but turn that attention into measurable growth.</p>
          <p>From startups to established companies, we help brands communicate clearly, show up confidently, and compete effectively in today's digital landscape.</p>
        </div>
      </div>
      <div className="stat-row">
        {[
          { num: "10", suffix: "+", label: "Years of Experience" },
          { num: "50", suffix: "+", label: "Brands Served" },
          { num: "3",  suffix: "×", label: "Disciplines in One Place" },
        ].map(s => (
          <div className="stat-item" key={s.label}>
            <div className="stat-num">{s.num}<span>{s.suffix}</span></div>
            <div className="stat-label">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Services() {
  const ref = useFadeUp();
  const services = [
    { name: "Content Production",  desc: "Video, design, storytelling — we operate at the intersection of creativity and strategy." },
    { name: "Digital Marketing",   desc: "Visibility, campaigns, positioning — getting you in front of the right audience." },
    { name: "Media Strategy",      desc: "Targeting, planning, execution — aligned with your real business goals." },
  ];
  return (
    <section id="services" style={{ background: "var(--gray)" }}>
      <div className="services-header">
        <div className="section-label" data-num="02">What We Do</div>
        <h2 className="services-title">
          We Operate at the<br />Intersection of<br />Creativity &amp; Strategy.
        </h2>
      </div>
      <div className="service-list fade-up" ref={ref}>
        {services.map((s, i) => (
          <div className="service-item" key={s.name}>
            <span className="service-num">0{i + 1}</span>
            <span className="service-name">{s.name}</span>
            <span className="service-desc">{s.desc}</span>
            <span className="service-arrow">→</span>
          </div>
        ))}
      </div>
    </section>
  );
}

function Approach() {
  const ref = useFadeUp();
  const steps = [
    { step: "01", icon: "◎", title: "Understand",  body: "We don't jump straight into execution. We start with understanding your business, your audience, and your goals." },
    { step: "02", icon: "◈", title: "Strategise",  body: "We develop clear strategies and execute with precision, ensuring everything we create is aligned with real business outcomes." },
    { step: "03", icon: "◉", title: "Execute",     body: "From a single design to a full campaign — every output is aligned with real business outcomes." },
  ];
  return (
    <section className="approach-section" id="approach">
      <div className="section-label" data-num="03">Our Approach</div>
      <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "clamp(48px, 5vw, 80px)", lineHeight: 1, color: "var(--white)" }}>
        We Don't Jump<br />Straight Into<br />Execution.
      </h2>
      <div className="approach-grid fade-up" ref={ref}>
        {steps.map(s => (
          <div className="approach-card" data-step={s.step} key={s.title}>
            <div className="approach-card-icon">{s.icon}</div>
            <div className="approach-card-title">{s.title}</div>
            <div className="approach-card-body">{s.body}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Differentiators() {
  const ref = useFadeUp();
  return (
    <section style={{ padding: 0 }} id="difference">
      <div className="diff-wrap fade-up" ref={ref}>
        <div className="diff-left">
          <div className="section-label" data-num="04">What Makes Us Different</div>
          <h2 className="diff-title">
            Most Agencies<br />Focus on Output.<br /><span className="accent">We Focus on Impact.</span>
          </h2>
        </div>
        <div className="diff-right">
          <p style={{ fontSize: "15px", lineHeight: "1.8", color: "var(--text-muted)", marginBottom: "32px" }}>
            At SEDA Media Limited, we provide end to end delivery across multiple disciplines within brand communication. From ideation to final execution, we handle every stage of the process, ensuring consistency, clarity, and effectiveness at every touchpoint.
          </p>
          <p style={{ fontSize: "15px", lineHeight: "1.8", color: "var(--text-muted)", marginBottom: "32px" }}>
            We think strategically before we create, bringing together content, design, and marketing into one seamless workflow. This integrated approach allows us to deliver work that is not only creative, but purposeful and results driven.
          </p>
          <p style={{ fontSize: "15px", lineHeight: "1.8", color: "var(--text-muted)" }}>
            We are your one stop shop for building and communicating your brand, partnering with you from concept to completion to drive real growth.
          </p>
        </div>
      </div>
    </section>
  );
}

function MissionVision() {
  const ref = useFadeUp();
  return (
    <section style={{ padding: "0 0 0 0" }}>
      <div className="mv-grid fade-up" ref={ref}>
        <div className="mv-card">
          <div className="mv-label">Our Mission</div>
          <div className="mv-text">To help brands grow through clarity, creativity, and consistency.</div>
        </div>
        <div className="mv-card">
          <div className="mv-label">Our Vision</div>
          <div className="mv-text">To become a leading creative and strategy partner for businesses across Africa, shaping how brands are seen, heard, and experienced.</div>
        </div>
      </div>
    </section>
  );
}

function Gallery() {
  const ref = useFadeUp();
  return (
    <section className="gallery-section" id="work">
      <div className="gallery-header">
        <div className="section-label" data-num="05">Our Work</div>
        <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "clamp(48px, 5vw, 80px)", lineHeight: 1 }}>
          Work That<br />Speaks.
        </h2>
      </div>
      <div className="gallery-grid fade-up" ref={ref}>
        {galleryImages.map((img, i) => (
          <div className="gallery-item" key={i}>
            {/* 
              TO USE YOUR IMAGES:
              import sample1 from './assets/gallery/sample(1).jpg'
              import sample2 from './assets/gallery/sample(2).jpg'
              ... etc, then replace src below
            */}
            <img src={img.src} alt={img.alt} loading="lazy" />
            <div className="gallery-item-overlay" />
          </div>
        ))}
      </div>
    </section>
  );
}

function Clients() {
  const ref = useFadeUp();
  // Replace these with your actual client logo imports
  const clientSlots = Array.from({ length: 12 }, (_, i) => i);
  return (
    <section style={{ background: "var(--white)" }}>
      <div className="section-label" data-num="06">Brands We Have Worked With</div>
      <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "clamp(36px, 4vw, 64px)", lineHeight: 1, color: "var(--black)" }}>
        Logos of Businesses<br />We Have Worked With.
      </h2>
      <div className="clients-grid fade-up" ref={ref}>
        {clientSlots.map(i => (
          <div className="client-cell" key={i}>
            <div className="client-placeholder">
              Client<br />Logo
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Testimonials() {
  const ref = useFadeUp();
  const testimonials = [
    {
      text: "SEDA Media didn't just deliver great designs — they delivered results. Our engagement went up significantly within weeks of working with them.",
      name: "Client Name",
      role: "CEO, Company Name",
    },
    {
      text: "The team's ability to blend strategy with creative execution is unmatched. They felt less like an agency and more like an extension of our team.",
      name: "Client Name",
      role: "Marketing Director, Company Name",
    },
    {
      text: "From brief to delivery, the process was seamless. They understood our brand voice instantly and produced work that truly stood out.",
      name: "Client Name",
      role: "Founder, Company Name",
    },
  ];
  return (
    <section className="testimonials-section">
      <div className="section-label" data-num="07">Testimonials</div>
      <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "clamp(36px, 4vw, 64px)", lineHeight: 1, color: "var(--black)" }}>
        What Our Clients Say.
      </h2>
      <div className="testimonials-grid fade-up" ref={ref}>
        {testimonials.map((t, i) => (
          <div className="testimonial-card" key={i}>
            <div className="testimonial-quote">"</div>
            <p className="testimonial-text">{t.text}</p>
            <div className="testimonial-author">
              <div className="testimonial-name">{t.name}</div>
              <div className="testimonial-role">{t.role}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function CTABanner() {
  return (
    <section className="cta-banner" id="contact">
      <h2 className="cta-banner-title">
        Your Brand Deserves<br />More Than Just<br />"Nice Designs."
      </h2>
      <p className="cta-banner-sub">
        Everything you need to grow — in one place. Let's build something together.
      </p>
      <a href="mailto:hello@sedamedia.com" className="cta-btn">
        Start Your Project Today <span>→</span>
      </a>
    </section>
  );
}

function Footer() {
  return (
    <footer>
      <div className="footer-top">
        <div className="footer-brand">
          <img src="/SEDA_NEW_LOGO.png" alt="SEDA Media Limited" />
          <p className="footer-tagline">
            Creative agency built on one idea:<br />
            Great design means nothing without results.
          </p>
        </div>
        <div>
          <div className="footer-col-title">Company</div>
          <ul className="footer-links">
            {["About", "Services", "Our Work", "Approach"].map(l => <li key={l}><a href="#">{l}</a></li>)}
          </ul>
        </div>
        <div>
          <div className="footer-col-title">Services</div>
          <ul className="footer-links">
            {["Content Production", "Digital Marketing", "Media Strategy", "Brand Identity"].map(l => <li key={l}><a href="#">{l}</a></li>)}
          </ul>
        </div>
        <div>
          <div className="footer-col-title">Contact</div>
          <ul className="footer-links">
            <li><a href="mailto:hello@sedamedia.com">hello@sedamedia.com</a></li>
            <li><a href="#">Instagram</a></li>
            <li><a href="#">LinkedIn</a></li>
            <li><a href="#">Twitter / X</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <span className="footer-copy">© {new Date().getFullYear()} SEDA Media Limited. All rights reserved.</span>
        <div className="footer-social">
          <a href="#">Instagram</a>
          <a href="#">LinkedIn</a>
          <a href="#">Twitter</a>
        </div>
      </div>
    </footer>
  );
}

// ─── APP ──────────────────────────────────────────────────────────────────────
export default function SEDAWebsite() {
  return (
    <>
      <FontStyle />
      <Cursor />
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Services />
        <Approach />
        <Differentiators />
        <MissionVision />
        <Gallery />
        <Clients />
        <Testimonials />
        <CTABanner />
      </main>
      <Footer />
    </>
  );
}